import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  company_website?: string;
};

const TO = process.env.CONTACT_TO_EMAIL ?? "contact@barqova.com";
const FROM = process.env.CONTACT_FROM_EMAIL ?? process.env.SMTP_USER ?? "";
const SMTP_HOST = process.env.SMTP_HOST ?? "smtp.gmail.com";
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 465);
const SMTP_SECURE = (process.env.SMTP_SECURE ?? "true") === "true";
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

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
    <div style="font-family:Inter,system-ui,sans-serif;color:#0F172A">
      <h2 style="color:#D5AD36;margin:0 0 16px">New enquiry from the website</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
      <p><strong>Service:</strong> ${escapeHtml(service)}</p>
      <p style="margin-top:16px"><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
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

  if (!SMTP_USER || !SMTP_PASS) {
    console.info(
      "[contact] SMTP_USER / SMTP_PASS not set — submission received but not sent:",
      { name, email, phone, service, message },
    );
    return NextResponse.json({ ok: true });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: FROM || SMTP_USER,
      to: TO,
      replyTo: email,
      subject,
      text,
      html,
    });
  } catch (err) {
    console.error("Contact route SMTP error:", err);
    return NextResponse.json(
      { error: "Could not send right now. Please email us instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
