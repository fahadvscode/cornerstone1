import { NextRequest, NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import {
  isValidEmail,
  sanitizeBuyerType,
  sanitizeEmail,
  sanitizeInterest,
  sanitizeOptionalString,
  sanitizePhone,
  sanitizeString,
  sanitizeUnitInterest,
} from "@/lib/validate";

export const runtime = "nodejs";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const MAX_BODY_BYTES = 10_000;

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

function buildLastNote(
  message: string | undefined,
  page: string | undefined
): string | undefined {
  const parts: string[] = [];
  if (message) parts.push(message);
  if (page) parts.push(`Submitted from: ${page}`);
  return parts.length > 0 ? parts.join("\n\n") : undefined;
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ error: "Invalid content type." }, { status: 415 });
    }

    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Request too large." }, { status: 413 });
    }

    const ip = getClientIp(request);
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const rawBody = await request.text();
    if (rawBody.length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Request too large." }, { status: 413 });
    }

    let body: Record<string, unknown>;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
    }

    // Honeypot — silently accept bots
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const first_name = sanitizeString(body.first_name, 100);
    const last_name = sanitizeString(body.last_name, 100);
    const email = sanitizeEmail(body.email);

    if (!first_name || !last_name || !email) {
      return NextResponse.json(
        { error: "First name, last name, and email are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const phone = sanitizePhone(body.phone);
    if (!phone) {
      return NextResponse.json(
        { error: "A valid phone number is required." },
        { status: 400 }
      );
    }

    const formVariant = sanitizeString(body.form_variant, 20);
    const unitInterest = sanitizeUnitInterest(body.unit_interest);
    const page = sanitizeOptionalString(body.page, 100);
    const message = sanitizeString(body.message, 2000);

    if (formVariant === "simple" || formVariant === "full") {
      if (!message) {
        return NextResponse.json(
          { error: "Message is required." },
          { status: 400 }
        );
      }
    }

    if (formVariant === "full") {
      if (!sanitizeBuyerType(body.buyer_type)) {
        return NextResponse.json(
          { error: "Buyer type is required." },
          { status: 400 }
        );
      }
      if (!unitInterest?.length) {
        return NextResponse.json(
          { error: "Please select at least one unit type." },
          { status: 400 }
        );
      }
    }

    const lead = {
      first_name,
      last_name,
      email,
      phone,
      is_realtor:
        body.is_realtor === true || body.working_with_realtor === true,
      is_broker: body.is_broker === true,
      interest: sanitizeInterest(body.interest, unitInterest),
      buyer_type: sanitizeBuyerType(body.buyer_type),
      source: "cornerstonetownsbrampton.ca",
      last_note: buildLastNote(message || undefined, page),
    };

    const supabase = getSupabaseClient();
    if (!supabase) {
      console.error("Supabase not configured — missing SUPABASE_URL or key");
      return NextResponse.json(
        { error: "Lead capture is temporarily unavailable. Please try again later." },
        { status: 503 }
      );
    }

    const { error } = await supabase.from("cornerstone_leads").insert(lead);
    if (error) {
      console.error("Supabase insert error:", error.message, error.code);
      return NextResponse.json(
        { error: "Unable to process submission. Please try again." },
        { status: 503 }
      );
    }

    const webhookUrl =
      process.env.N8N_WEBHOOK_URL || process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...lead, submitted_at: new Date().toISOString() }),
          signal: AbortSignal.timeout(5000),
        });
      } catch (webhookError) {
        console.error("n8n webhook error:", webhookError);
      }
    }

    return NextResponse.json(
      { success: true },
      {
        headers: {
          "Cache-Control": "no-store",
          "X-Content-Type-Options": "nosniff",
        },
      }
    );
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
