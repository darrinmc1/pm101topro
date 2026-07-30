import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"

export async function POST(request: Request) {
  try {
    // Check auth — graceful fallback when Clerk is not configured
    let userId: string | null = null
    try {
      const session = await auth()
      userId = session.userId
    } catch {
      // Clerk not configured — still allow in dev
    }

    if (!userId && process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { to, subject, html, text } = body

    if (!to || (!subject && !html)) {
      return NextResponse.json(
        { error: "Missing required fields: to, subject, html" },
        { status: 400 }
      )
    }

    // Lazy init Resend
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        {
          error: "Resend is not configured. Set RESEND_API_KEY in .env",
        },
        { status: 500 }
      )
    }

    const from = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: subject || "Message from pm101toPro",
        html:
          html ||
          `<p>${text || "Hello from pm101toPro!"}</p>`,
        text: text || undefined,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      console.error("Resend API error:", data)
      return NextResponse.json(
        { error: "Failed to send email", details: data },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data.id })
  } catch (error) {
    console.error("Send email error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
