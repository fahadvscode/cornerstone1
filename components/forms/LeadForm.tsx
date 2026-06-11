"use client";

import { useState } from "react";
import { UNIT_TYPES } from "@/lib/constants";

interface LeadFormProps {
  variant?: "simple" | "full" | "hero";
  page?: string;
  submitLabel?: string;
  headline?: string;
}

export function LeadForm({
  variant = "simple",
  page = "homepage",
  submitLabel = "Get VIP Access Now",
  headline,
}: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const unitInterest = variant === "full"
      ? UNIT_TYPES.filter((u) => formData.get(`unit_${u.slug}`) === "on").map((u) => u.name)
      : undefined;

    const payload = {
      first_name: formData.get("first_name") as string,
      last_name: formData.get("last_name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      is_realtor: formData.get("is_realtor") === "yes",
      buyer_type: (formData.get("buyer_type") as string) || undefined,
      unit_interest: unitInterest,
      interest: (formData.get("interest") as string) || undefined,
      message: (formData.get("message") as string) || undefined,
      page,
      website: formData.get("website") as string,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="card border-forest-700 bg-cream-100 text-center" role="status">
        <h3 className="mb-2 font-heading text-2xl font-semibold text-forest-900">
          Thank You!
        </h3>
        <p className="text-forest-800">
          You&apos;ve been registered for VIP access to Cornerstone Towns. We
          will reach out to you shortly with more information.
        </p>
      </div>
    );
  }

  const isHero = variant === "hero";
  const inputClass = isHero
    ? "w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-forest-900 placeholder:text-neutral-400 focus:border-forest-700 focus:outline-none focus:ring-2 focus:ring-forest-700/20"
    : "w-full rounded-md border border-cream-200 bg-white px-4 py-2.5 text-forest-900 focus:border-forest-700 focus:outline-none focus:ring-1 focus:ring-forest-700";
  const labelClass = isHero
    ? "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-800"
    : "mb-1 block text-sm font-medium text-forest-800";

  return (
    <form onSubmit={handleSubmit} className={isHero ? "space-y-3" : "space-y-4"} noValidate>
      {headline && (
        <h3 className="font-heading text-2xl font-semibold text-forest-900">
          {headline}
        </h3>
      )}

      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={`grid gap-3 ${isHero ? "sm:grid-cols-2" : "gap-4 sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="first_name" className={labelClass}>
            First Name *
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            required
            placeholder={isHero ? "First name" : undefined}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="last_name" className={labelClass}>
            Last Name *
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            required
            placeholder={isHero ? "Last name" : undefined}
            className={inputClass}
          />
        </div>
      </div>

      <div className={`grid gap-3 ${isHero ? "sm:grid-cols-2" : "gap-4 sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder={isHero ? "you@email.com" : undefined}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            pattern="[\d\s\-+()]{10,}"
            placeholder={isHero ? "(555) 555-5555" : undefined}
            className={inputClass}
          />
        </div>
      </div>

      {variant === "full" && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="is_realtor" className="mb-1 block text-sm font-medium text-forest-800">
                Are you a realtor?
              </label>
              <select
                id="is_realtor"
                name="is_realtor"
                className="w-full rounded-md border border-cream-200 bg-white px-4 py-2.5 text-forest-900 focus:border-forest-700 focus:outline-none focus:ring-1 focus:ring-forest-700"
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <div>
              <label htmlFor="buyer_type" className="mb-1 block text-sm font-medium text-forest-800">
                Buying as investor or end-user?
              </label>
              <select
                id="buyer_type"
                name="buyer_type"
                className="w-full rounded-md border border-cream-200 bg-white px-4 py-2.5 text-forest-900 focus:border-forest-700 focus:outline-none focus:ring-1 focus:ring-forest-700"
              >
                <option value="end-user">End-User</option>
                <option value="investor">Investor</option>
                <option value="both">Both</option>
              </select>
            </div>
          </div>

          <fieldset>
            <legend className="mb-2 text-sm font-medium text-forest-800">
              What unit type interests you?
            </legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {UNIT_TYPES.map((unit) => (
                <label key={unit.slug} className="flex items-center gap-2 text-sm text-forest-800">
                  <input
                    type="checkbox"
                    name={`unit_${unit.slug}`}
                    className="rounded border-cream-200 text-forest-700 focus:ring-forest-700"
                  />
                  {unit.name}
                </label>
              ))}
            </div>
          </fieldset>
        </>
      )}

      {variant !== "hero" && (
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-forest-800">
            {variant === "full" ? "Message / Comments" : "Message (optional)"}
          </label>
          <textarea
            id="message"
            name="message"
            rows={variant === "full" ? 4 : 2}
            className="w-full rounded-md border border-cream-200 bg-white px-4 py-2.5 text-forest-900 focus:border-forest-700 focus:outline-none focus:ring-1 focus:ring-forest-700"
          />
        </div>
      )}

      {variant === "full" && (
        <label className="flex items-start gap-2 text-sm text-forest-800">
          <input
            type="checkbox"
            name="privacy_consent"
            required
            className="mt-1 rounded border-cream-200 text-forest-700 focus:ring-forest-700"
          />
          <span>
            I agree to the{" "}
            <a href="/privacy" className="text-forest-700 underline">
              Privacy Policy
            </a>{" "}
            and consent to being contacted about Cornerstone Towns.
          </span>
        </label>
      )}

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className={
          isHero
            ? "mt-1 w-full rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-forest-900 transition hover:bg-gold-400 disabled:opacity-60"
            : "btn-primary w-full disabled:opacity-60"
        }
      >
        {status === "loading" ? "Submitting..." : submitLabel}
      </button>

      {isHero && (
        <p className="text-center text-[11px] leading-relaxed text-neutral-500">
          Free registration · No obligation · VIP access before public launch
        </p>
      )}
    </form>
  );
}
