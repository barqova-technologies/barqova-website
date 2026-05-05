import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "edge";
export const dynamic = "force-dynamic";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  company_website?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

const TO = "contact@barqova.com";
const FROM = "Barqova Technologies <noreply@barqova.com>";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot check
  if (body.company_website && body.company_website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  const phone = body.phone?.trim() ?? "";
  const service = body.service?.trim() ?? "Not specified";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const subject = `New enquiry from ${name} — ${service}`;

  const html = `
    <div style="font-family:Inter,system-ui,sans-serif;color:#0F172A;max-width:600px;margin:0 auto">
      <h2 style="color:#D5AD36;margin:0 0 16px">New enquiry from the website</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
      <p><strong>Service:</strong> ${escapeHtml(service)}</p>
      <p style="margin-top:16px"><strong>Message:</strong></p>
      <p style="white-space:pre-wrap;background:#F8FAFC;padding:12px;border-radius:8px;border:1px solid #E2E8F0">${escapeHtml(message)}</p>
      <hr style="border:none;border-top:1px solid #E2E8F0;margin:24px 0" />
      <p style="font-size:12px;color:#94A3B8">Sent via barqova.com contact form</p>
    </div>
  `;

  const text = [
    `New enquiry from the website`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Service: ${service}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const { error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: email,
    subject,
    html,
    text,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json(
      { error: "Could not send right now. Please email us at contact@barqova.com." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}