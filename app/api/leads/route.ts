import { NextRequest, NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import {
  isValidEmail,
  sanitizeBuyerType,
  sanitizeEmail,
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

    const lead = {
      first_name,
      last_name,
      email,
      phone: sanitizePhone(body.phone),
      working_with_realtor: body.working_with_realtor === true,
      buyer_type: sanitizeBuyerType(body.buyer_type),
      unit_interest: sanitizeUnitInterest(body.unit_interest),
      message: sanitizeOptionalString(body.message, 2000),
      source: "cornerstonetownsbrampton.ca",
      page: sanitizeOptionalString(body.page, 100) || "unknown",
      utm_source: sanitizeOptionalString(body.utm_source, 200),
      utm_medium: sanitizeOptionalString(body.utm_medium, 200),
      utm_campaign: sanitizeOptionalString(body.utm_campaign, 200),
    };

    const supabase = getSupabaseClient();
    if (supabase) {
      const { error } = await supabase.from("cornerstone_leads").insert(lead);
      if (error) {
        console.error("Supabase insert error:", error.message);
        return NextResponse.json(
          { error: "Unable to process submission. Please try again." },
          { status: 503 }
        );
      }
    }

    // Server-only webhook URL — never exposed to the browser
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
