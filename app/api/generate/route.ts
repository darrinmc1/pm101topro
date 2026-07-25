import { NextRequest, NextResponse } from "next/server"

const GEMINI_API_KEY = process.env.GOOGLE_API_KEY
const N8N_WEBHOOK = process.env.N8N_AI_WEBHOOK_URL
const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"

export async function POST(req: NextRequest) {
  if (!GEMINI_API_KEY) {
    return NextResponse.json(
      { error: "AI generation is not configured yet. Drop a Gemini API key in GOOGLE_API_KEY to enable it." },
      { status: 500 },
    )
  }

  const { docName, questions, answers } = await req.json()

  if (!docName || !questions || !answers) {
    return NextResponse.json({ error: "Missing docName, questions, or answers" }, { status: 400 })
  }

  // Build the prompt
  const qaPairs = questions
    .map((q: string, i: number) => `Q: ${q}\nA: ${answers[i] || "(not provided)"}`)
    .join("\n\n")

  const prompt = `You are an expert project management document writer. Generate a professional ${docName} based on the following answers from a project manager. Use clear sections, professional language, and practical detail. Fill in reasonable defaults for anything left blank.

${qaPairs}

Format the output as clean markdown. Start with a title "# ${docName}".`

  try {
      try {
    // Route through n8n AI gateway if configured
    if (N8N_WEBHOOK) {
      const res = await fetch(N8N_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: 'free',
          docName: doc?.name,
          prompt,
          questions,
          answers,
        }),
      })

      if (!res.ok) {
        const err = await res.text()
        console.error("n8n gateway error:", res.status, err)
        return NextResponse.json(
          { error: `AI generation failed (${res.status}). Please try again.` },
          { status: 502 },
        )
      }

      const data = await res.json()
      const text = data?.draft

      if (!text) {
        return NextResponse.json(
          { error: "AI returned an empty response. Try rephrasing your answers." },
          { status: 502 },
        )
      }

      return NextResponse.json({ draft: text })
    }

    // Fallback: call Gemini directly
    const res = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 4096,
        },
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error("Gemini API error:", res.status, err)
      return NextResponse.json(
        { error: `AI generation failed (${res.status}). Please try again.` },
        { status: 502 },
      )
    }

    const data = await res.json()
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text

    if (!text) {
      return NextResponse.json(
        { error: "AI returned an empty response. Try rephrasing your answers." },
        { status: 502 },
      )
    }

    return NextResponse.json({ draft: text })
  } catch (err) {
    console.error("Gemini API call failed:", err)
    return NextResponse.json(
      { error: "Could not reach the AI service. Check your network and try again." },
      { status: 502 },
    )
  }
}
