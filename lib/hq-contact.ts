// Shared Empire contact sink.
// Messages from /contact are relayed to the HQ contact webhook so they land
// in one place. Returns true only when HQ confirms the save.
const HQ_CONTACT_URL =
  process.env.HQ_CONTACT_URL || "https://n8n.peelboss.com/webhook/hq-contact"

export type HqContactInput = {
  site: string
  name?: string | null
  email: string
  subject?: string | null
  message: string
  source?: string | null
}

export async function saveContactToHq(input: HqContactInput): Promise<boolean> {
  try {
    const res = await fetch(HQ_CONTACT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        site: input.site,
        name: input.name?.trim() || null,
        email: input.email.trim(),
        subject: input.subject?.trim() || null,
        message: input.message.trim(),
        source: input.source || "contact",
      }),
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    })
    const data = (await res.json().catch(() => null)) as { ok?: boolean } | null
    if (!res.ok || !data?.ok) {
      console.error("[hq-contact] message not saved", res.status)
      return false
    }
    return true
  } catch (err) {
    console.error("[hq-contact] request failed", err)
    return false
  }
}
