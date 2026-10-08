import { NextRequest, NextResponse } from "next/server"
import { saveContactToHq } from "@/lib/hq-contact"

const SITE = "pm101topro"
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const rateLimit = new Map<string, { count: number; reset: number }>()
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5

function rateLimited(ip: string) {
  const now = Date.now()
  const entry = rateLimit.get(ip)
  if (!entry || now > entry.reset) {
    rateLimit.set(ip, { count: 1, reset: now + WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > MAX_PER_WINDOW
}

function methodNotAllowed() {
  return new NextResponse(null, {
    status: 405,
    headers: { Allow: "POST" },
  })
}

export function GET() {
  return methodNotAllowed()
}

export function PUT() {
  return methodNotAllowed()
}

export function PATCH() {
  return methodNotAllowed()
}

export function DELETE() {
  return methodNotAllowed()
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 })
  }

  const body = (await req.json().catch(() => ({}))) as {
    name?: string
    email?: string
    subject?: string
    message?: string
    website?: string
  }

  if (body.website && body.website !== "") {
    return NextResponse.json({ ok: true })
  }

  const email = body.email?.trim() ?? ""
  const message = body.message?.trim() ?? ""
  if (!email || !emailRe.test(email) || message.length < 8) {
    return NextResponse.json(
      { error: "Please add your email and a short message." },
      { status: 400 },
    )
  }

  const saved = await saveContactToHq({
    site: SITE,
    name: body.name,
    email,
    subject: body.subject,
    message,
    source: "contact",
  })

  if (!saved) {
    return NextResponse.json(
      { error: "We couldn't send that just now. Please try again." },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
