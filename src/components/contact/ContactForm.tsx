"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const SERVICE_OPTIONS = [
  "Custom Software Development",
  "Web App Development",
  "Mobile App Development",
  "Hiring Developers",
  "Not sure yet — let's talk",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setMessage("Thanks — we have received your message. We will reply within 24 hours.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-app bg-[var(--bg)] p-6 sm:p-8"
    >
      <div className="grid gap-5">
        <Field id="name" label="Name" required>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-app bg-[var(--bg)] px-4 py-3 text-sm text-app placeholder:text-muted-app focus:border-[#D5AD36] focus:ring-2 focus:ring-[#D5AD36]/30 focus:outline-none"
            placeholder="Your full name"
          />
        </Field>

        <Field id="email" label="Email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-app bg-[var(--bg)] px-4 py-3 text-sm text-app placeholder:text-muted-app focus:border-[#D5AD36] focus:ring-2 focus:ring-[#D5AD36]/30 focus:outline-none"
            placeholder="you@company.com"
          />
        </Field>

        <Field id="phone" label="Phone (optional)">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-lg border border-app bg-[var(--bg)] px-4 py-3 text-sm text-app placeholder:text-muted-app focus:border-[#D5AD36] focus:ring-2 focus:ring-[#D5AD36]/30 focus:outline-none"
            placeholder="+91 ..."
          />
        </Field>

        <Field id="service" label="I need help with">
          <select
            id="service"
            name="service"
            defaultValue=""
            className="w-full rounded-lg border border-app bg-[var(--bg)] px-4 py-3 text-sm text-app focus:border-[#D5AD36] focus:ring-2 focus:ring-[#D5AD36]/30 focus:outline-none"
          >
            <option value="" disabled>
              Pick one
            </option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        <Field id="message" label="Tell us about your project" required>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-lg border border-app bg-[var(--bg)] px-4 py-3 text-sm text-app placeholder:text-muted-app focus:border-[#D5AD36] focus:ring-2 focus:ring-[#D5AD36]/30 focus:outline-none resize-y"
            placeholder="What are you trying to build? Any details help."
          />
        </Field>

        {/* Honeypot — hidden from users, bots tend to fill it */}
        <div aria-hidden className="hidden">
          <label>
            Do not fill this out
            <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D5AD36] px-6 py-3.5 text-sm font-semibold text-[#0F172A] transition hover:bg-[#E7C358] disabled:opacity-60 disabled:pointer-events-none"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </button>

        {status === "success" ? (
          <p
            role="status"
            className="flex items-start gap-2 rounded-lg border border-[#D5AD36]/30 bg-[#D5AD36]/5 p-3 text-sm text-app"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D5AD36]" />
            <span>{message}</span>
          </p>
        ) : null}

        {status === "error" ? (
          <p
            role="alert"
            className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/5 p-3 text-sm text-red-600 dark:text-red-400"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{message}</span>
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-app">
        {label}
        {required ? <span className="text-[#D5AD36]"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
