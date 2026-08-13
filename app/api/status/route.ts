import { NextRequest, NextResponse } from "next/server"
import { generateAiText, isAiConfigured } from "@/lib/ai-generate"
import {
  buildStatusPrompt,
  heuristicStatus,
  parseModelStatus,
  resultToMarkdown,
} from "@/lib/status-method"

const MAX_CHARS = 12_000

export async function GET() {
  return NextResponse.json({
    configured: isAiConfigured(),
    job: "status-cleaner",
    input: "Paste a messy project update / status dump",
    output: "Cleaned RAG status, next actions, PM101 citations",
  })
}

export async function POST(req: NextRequest) {
  let body: { dump?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Send JSON with a dump string." }, { status: 400 })
  }

  const dump = typeof body.dump === "string" ? body.dump.trim() : ""
  if (dump.length < 40) {
    return NextResponse.json(
      { error: "Paste a real status dump — at least a few sentences of project noise." },
      { status: 400 },
    )
  }
  if (dump.length > MAX_CHARS) {
    return NextResponse.json(
      { error: `Dump is too long. Cap is ${MAX_CHARS} characters.` },
      { status: 400 },
    )
  }

  const fallback = heuristicStatus(dump)

  if (!isAiConfigured()) {
    return NextResponse.json({
      result: fallback,
      markdown: resultToMarkdown(fallback),
      source: "method",
      configured: false,
      notice:
        "AI is not configured yet (set GOOGLE_API_KEY or N8N_AI_WEBHOOK_URL). This draft uses the PM101 method and the live course/lesson/doc archive so you can still see the job.",
    })
  }

  try {
    const text = await generateAiText(buildStatusPrompt(dump), "status-cleaner")
    const parsed = parseModelStatus(text, dump) ?? fallback
    return NextResponse.json({
      result: parsed,
      markdown: resultToMarkdown(parsed),
      source: parsed === fallback ? "method" : "ai",
      configured: true,
    })
  } catch (err) {
    console.error("Status Cleaner AI failed:", err)
    return NextResponse.json({
      result: fallback,
      markdown: resultToMarkdown(fallback),
      source: "method",
      configured: true,
      notice:
        "The model call failed, so this draft uses the PM101 method on the live archive. Try again in a minute.",
    })
  }
}
