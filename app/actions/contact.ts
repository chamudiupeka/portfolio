"use server";

import nodemailer, { type Transporter } from "nodemailer";
// Types only — this file must export nothing but async functions.
import type { ContactField, ContactState } from "@/lib/contact";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Values that end up in mail headers must not contain newlines, or a sender
 * could inject extra headers (Bcc, Reply-To) by embedding CRLF in the field.
 */
function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

let cached: Transporter | null = null;

function getTransporter(): Transporter {
  if (cached) return cached;

  const user = process.env.GMAIL_USER;
  // Google shows app passwords as "abcd efgh ijkl mnop"; SMTP wants them unspaced.
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");

  if (!user || !pass) {
    throw new Error(
      "GMAIL_USER and GMAIL_APP_PASSWORD must be set. See .env.example."
    );
  }

  cached = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
    // Serverless invocations are short-lived, so fail fast instead of hanging
    // until the platform's function timeout kills us with no error to log.
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 8000,
  });

  return cached;
}

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: a real person never sees this field, so anything in it is a bot.
  // Report success so the bot doesn't learn to retry with the field cleared.
  if (String(formData.get("company") ?? "").length > 0) {
    return { status: "success", message: "Thanks — your message is on its way." };
  }

  const name = sanitizeHeader(String(formData.get("name") ?? ""));
  const email = sanitizeHeader(String(formData.get("email") ?? ""));
  const subject = sanitizeHeader(String(formData.get("subject") ?? ""));
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: Partial<Record<ContactField, string>> = {};
  if (name.length < 2) fieldErrors.name = "Please tell me your name.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "That doesn't look like an email address.";
  if (message.length < 10) fieldErrors.message = "A little more detail would help.";
  else if (message.length > 5000) fieldErrors.message = "That's longer than 5,000 characters.";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Please check the fields below.", fieldErrors };
  }

  const to = process.env.CONTACT_TO || process.env.GMAIL_USER;

  try {
    await getTransporter().sendMail({
      // Gmail rewrites `from` to the authenticated account regardless, so send
      // as yourself and put the visitor in replyTo — hitting reply then works.
      from: `"Portfolio contact" <${process.env.GMAIL_USER}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: subject || `Portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#16181d">
          <p style="margin:0 0 4px"><strong>${escapeHtml(name)}</strong></p>
          <p style="margin:0 0 16px"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <div style="white-space:pre-wrap;border-left:3px solid #2f5fcc;padding-left:14px">${escapeHtml(
            message
          )}</div>
        </div>
      `,
    });

    return { status: "success", message: "Thanks — your message is on its way." };
  } catch (error) {
    console.error("[contact] send failed:", error);
    return {
      status: "error",
      message: "Sorry, that didn't send. Please email me directly instead.",
    };
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
