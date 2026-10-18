const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Address already published on the legal pages. Used only when the env var is unset. */
const FALLBACK_SUPPORT_EMAIL = "admin@pm101topro.com"

function isSafeEmail(value: string): boolean {
  if (!EMAIL_RE.test(value)) return false
  const domain = value.split("@")[1]?.toLowerCase() ?? ""
  if (
    domain === "example.com" ||
    domain === "example.org" ||
    domain === "example.net" ||
    domain.endsWith(".example.com")
  ) {
    return false
  }
  return true
}

/**
 * Public contact address for the footer, the Buy line, and refund copy.
 * NEXT_PUBLIC_SUPPORT_EMAIL wins when it is a real address. Placeholder
 * domains such as example.com are never shown.
 */
export function getSupportEmail(): string | null {
  const fromEnv = process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim()
  if (fromEnv && isSafeEmail(fromEnv)) return fromEnv
  return isSafeEmail(FALLBACK_SUPPORT_EMAIL) ? FALLBACK_SUPPORT_EMAIL : null
}
