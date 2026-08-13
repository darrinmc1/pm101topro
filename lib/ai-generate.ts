const GEMINI_API_KEY = process.env.GOOGLE_API_KEY
const N8N_WEBHOOK = process.env.N8N_AI_WEBHOOK_URL
const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"

export function isAiConfigured(): boolean {
  return Boolean(GEMINI_API_KEY || N8N_WEBHOOK)
}

export async function generateAiText(prompt: string, tag = "status-cleaner"): Promise<string> {
  if (N8N_WEBHOOK) {
    const res = await fetch(N8N_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "free",
        prompt,
        tag,
      }),
    })
    if (!res.ok) {
      const err = await res.text()
      throw new Error(`n8n gateway error (${res.status}): ${err.slice(0, 400)}`)
    }
    const data = await res.json()
    const text = data?.draft || data?.text || data?.output
    if (!text || typeof text !== "string") {
      throw new Error("AI returned an empty response")
    }
    return text
  }

  if (!GEMINI_API_KEY) {
    throw new Error("AI is not configured")
  }

  const res = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 4096,
        responseMimeType: "application/json",
      },
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Gemini error (${res.status}): ${err.slice(0, 400)}`)
  }

  const data = await res.json()
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
  if (!text || typeof text !== "string") {
    throw new Error("AI returned an empty response")
  }
  return text
}
