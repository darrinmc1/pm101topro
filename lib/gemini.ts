/**
 * Shared Gemini client settings.
 * Model defaults to gemini-2.5-flash; override with GEMINI_MODEL.
 * Keys are accepted under any name already used in this project.
 */

export const DEFAULT_GEMINI_MODEL = "gemini-2.5-flash"

export function geminiModel(): string {
  const configured = process.env.GEMINI_MODEL?.trim()
  return configured || DEFAULT_GEMINI_MODEL
}

export function geminiApiKey(): string | undefined {
  const key = (
    process.env.GOOGLE_API_KEY ||
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_GEMINI_API_KEY ||
    ""
  ).trim()
  return key || undefined
}

export function geminiGenerateContentUrl(model = geminiModel()): string {
  return `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`
}

type GeminiGenerationConfig = {
  temperature: number
  maxOutputTokens: number
  responseMimeType?: "application/json"
  thinkingConfig: { thinkingBudget: number }
}

/**
 * gemini-2.5-flash spends output tokens on thinking unless the budget is 0.
 * JSON callers should pass `json: true` so the body is application/json.
 */
export function geminiGenerationConfig(options?: {
  json?: boolean
  temperature?: number
  maxOutputTokens?: number
  thinkingBudget?: number
}): GeminiGenerationConfig {
  const config: GeminiGenerationConfig = {
    temperature: options?.temperature ?? 0.7,
    maxOutputTokens: options?.maxOutputTokens ?? 8192,
    thinkingConfig: {
      thinkingBudget: options?.thinkingBudget ?? 0,
    },
  }
  if (options?.json) {
    config.responseMimeType = "application/json"
  }
  return config
}

type GeminiPart = { text?: string; thought?: boolean }

/** Join non-thought text parts. Thought parts are not the document. */
export function geminiCandidateText(data: unknown): string | undefined {
  if (!data || typeof data !== "object") return undefined
  const candidates = (data as { candidates?: unknown }).candidates
  if (!Array.isArray(candidates)) return undefined
  const first = candidates[0]
  if (!first || typeof first !== "object") return undefined
  const parts = (first as { content?: { parts?: GeminiPart[] } }).content?.parts
  if (!Array.isArray(parts)) return undefined
  const text = parts
    .filter((part) => part && !part.thought && typeof part.text === "string")
    .map((part) => part.text as string)
    .join("")
    .trim()
  return text || undefined
}
