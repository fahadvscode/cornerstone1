"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const fullName = (formData.get("name") as string).trim();
    const [first_name, ...rest] = fullName.split(" ");
    const last_name = rest.join(" ") || first_name;

    const payload = {
      first_name,
      last_name,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      page: "contact",
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
          Message Sent!
        </h3>
        <p className="text-forest-800">
          Thank you for reaching out. Fahad Javed will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input type="text" id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-forest-800">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-md border border-cream-200 bg-white px-4 py-2.5 text-forest-900 focus:border-forest-700 focus:outline-none focus:ring-1 focus:ring-forest-700"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-forest-800">
            Email *
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            className="w-full rounded-md border border-cream-200 bg-white px-4 py-2.5 text-forest-900 focus:border-forest-700 focus:outline-none focus:ring-1 focus:ring-forest-700"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-1 block text-sm font-medium text-forest-800">
            Phone *
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            required
            className="w-full rounded-md border border-cream-200 bg-white px-4 py-2.5 text-forest-900 focus:border-forest-700 focus:outline-none focus:ring-1 focus:ring-forest-700"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-forest-800">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className="w-full rounded-md border border-cream-200 bg-white px-4 py-2.5 text-forest-900 focus:border-forest-700 focus:outline-none focus:ring-1 focus:ring-forest-700"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
