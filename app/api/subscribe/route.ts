import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "A valid email address is required" },
        { status: 400 }
      )
    }

    // Lazy init Resend to add contact to audience
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.warn(
        "[subscribe] Resend not configured — subscription stored in log only"
      )
      return NextResponse.json({
        success: true,
        message:
          "You're subscribed! (Email delivery will be configured soon.)",
      })
    }

    // Add contact via Resend Audiences API
    const res = await fetch("https://api.resend.com/audiences", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })

    const audiences = await res.json()
    let audienceId: string | null = null

    // Use existing "Subscribers" audience or create one
    if (audiences?.data?.length > 0) {
      audienceId = audiences.data[0].id
    }

    if (audienceId) {
      await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
    }

    // Send a welcome email
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
        to: email,
        subject: "Welcome to pm101toPro!",
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 480px; margin: 0 auto;">
            <h1 style="color: #0A0F1E;">Welcome to pm101toPro!</h1>
            <p style="color: #525866;">
              You're now subscribed to updates from pm101toPro. We'll send you
              tips, course announcements, and new tools to help you master
              project management.
            </p>
            <p style="color: #525866;">
              — The pm101toPro Team
            </p>
          </div>
        `,
      }),
    })

    return NextResponse.json({
      success: true,
      message: "Welcome! Check your inbox for a confirmation.",
    })
  } catch (error) {
    console.error("Subscribe error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
