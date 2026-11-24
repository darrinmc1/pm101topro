import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { auth } from "@clerk/nextjs/server"
import { clerkEnabledForHost } from "@/lib/clerk-config"

// Owner-only contact relay.
// The recipient, cc/bcc and sender are fixed on the server. Anything the caller
// sends for to/cc/bcc/from is ignored. Caller input is only used as the message
// body and, when it is a valid address, as the reply-to.
const SITE_NAME = "PM101 to Pro"
const OWNER_TO = process.env.NOTIFY_EMAIL?.trim() || "admin@ttpn.com.au"
const EMAIL_FROM =
  process.env.RESEND_FROM_EMAIL?.trim() || "PM101 to Pro <pm101@send.ttpn.com.au>"

const EMAIL_RE = /^[^\s@<>"',;:()\[\]]+@[^\s@<>"',;:()\[\]]+\.[^\s@<>"',;:()\[\]]+$/
const MAX_NAME = 100
const MAX_SUBJECT = 150
const MAX_MESSAGE = 5000
const WINDOW_MS = 10 * 60_000
const MAX_PER_WINDOW = 5
const hits = new Map<string, { count: number; reset: number }>()

function rateLimited(ip: string) {
  const now = Date.now()
  const entry = hits.get(ip)
  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > MAX_PER_WINDOW
}

function str(value: unknown) {
  return typeof value === "string" ? value.trim() : ""
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function bad(error: string, status = 400) {
  return NextResponse.json({ success: false, error }, { status })
}

/**
 * POST /api/send-email
 * Body: { name?: string, email?: string, subject?: string, message: string }
 * Sends one plain message to the site owner. Returns 429 when rate limited.
 */
export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  if (rateLimited(ip)) return bad("Too many requests", 429)

  // Signed-in users only. A publishable key being present (even a foreign one)
  // keeps this route closed; only a local setup with no Clerk key may send.
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host")
  let userId: string | null = null
  if (clerkEnabledForHost(host)) {
    try {
      userId = (await auth()).userId
    } catch {
      userId = null
    }
  }
  if (!userId && process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) return bad("Authentication required", 401)

  let body: Record<string, unknown>
  try {
    const parsed = await request.json()
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return bad("Invalid request")
    body = parsed as Record<string, unknown>
  } catch {
    return bad("Invalid request")
  }

  // Honeypot field: bots get a quiet ok and nothing is sent.
  if (str(body.website)) return NextResponse.json({ success: true })

  const name = str(body.name)
  const replyTo = str(body.email) || str(body.replyTo)
  const subject = str(body.subject)
  const message = str(body.message) || str(body.text)

  if (!message) return bad("Message is required")
  if (name.length > MAX_NAME || subject.length > MAX_SUBJECT || message.length > MAX_MESSAGE) {
    return bad("Message is too long")
  }
  if (/[<>\r\n]/.test(subject) || /[<>\r\n]/.test(name)) return bad("Invalid subject or name")
  if (replyTo && (replyTo.length > 254 || !EMAIL_RE.test(replyTo))) return bad("Invalid email address")

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn("[send-email] RESEND_API_KEY not configured, message not sent")
    return bad("Email is not configured", 503)
  }

  try {
    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: OWNER_TO,
      subject: `[${SITE_NAME}] ${subject || "Website message"}`,
      text: `Name: ${name || "-"}\nEmail: ${replyTo || "-"}\n\n${message}`,
      html:
        `<p><strong>Name:</strong> ${escapeHtml(name || "-")}</p>` +
        `<p><strong>Email:</strong> ${escapeHtml(replyTo || "-")}</p>` +
        `<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
      ...(replyTo ? { replyTo } : {}),
    })
    if (error) {
      console.error("[send-email] Resend error:", error)
      return bad("Could not send the message", 502)
    }
    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error("[send-email] Unexpected error:", err)
    return bad("Internal server error", 500)
  }
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}
