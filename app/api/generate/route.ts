import { NextRequest, NextResponse } from "next/server"
import {
  geminiApiKey,
  geminiCandidateText,
  geminiGenerateContentUrl,
  geminiGenerationConfig,
  withDocumentDate,
} from "@/lib/gemini"

const N8N_WEBHOOK = process.env.N8N_AI_WEBHOOK_URL

export async function POST(req: NextRequest) {
  const apiKey = geminiApiKey()
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "AI generation is not configured yet. Set GOOGLE_API_KEY, GEMINI_API_KEY, or GOOGLE_GEMINI_API_KEY.",
      },
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

  const prompt = withDocumentDate(`You are an expert project management document writer. Generate a professional ${docName} based on the following answers from a project manager. Use clear sections, professional language, and practical detail. Fill in reasonable defaults for anything left blank.

${qaPairs}

Format the output as clean markdown. Start with a title "# ${docName}".`)

  try {
    // Route through n8n AI gateway if configured
    if (N8N_WEBHOOK) {
      const res = await fetch(N8N_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "free",
          docName,
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

    // Fallback: call Gemini directly. Markdown, not JSON — thinking is off so
    // the output budget is spent on the document.
    const res = await fetch(`${geminiGenerateContentUrl()}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: geminiGenerationConfig({
          temperature: 0.7,
          maxOutputTokens: 8192,
          thinkingBudget: 0,
        }),
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
    const text = geminiCandidateText(data)

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
