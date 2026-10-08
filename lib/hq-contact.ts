// Relays /contact to HQ, which emails Darrin with Reply-To set to the visitor.
// Returns true only when that endpoint accepts the message.
const HQ_CONTACT_URL =
  process.env.HQ_CONTACT_URL || "https://hq.peelboss.com/api/send-email"

const SITE = "pm101topro"

export type HqContactInput = {
  name?: string | null
  email: string
  message: string
  subject?: string | null
}

export async function saveContactToHq(input: HqContactInput): Promise<boolean> {
  const name = input.name?.trim() || "Visitor"
  const subject = input.subject?.trim()
  const message = subject
    ? `[${SITE} contact form]\nSubject: ${subject}\n\n${input.message.trim()}`
    : `[${SITE} contact form]\n\n${input.message.trim()}`

  try {
    const res = await fetch(HQ_CONTACT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${name} (${SITE})`,
        email: input.email.trim(),
        message,
      }),
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    })
    if (!res.ok) {
      console.error("[hq-contact] message not sent", res.status)
      return false
    }
    return true
  } catch (err) {
    console.error("[hq-contact] request failed", err)
    return false
  }
}
