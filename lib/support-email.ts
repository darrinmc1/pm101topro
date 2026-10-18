const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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
 * Returns null when NEXT_PUBLIC_SUPPORT_EMAIL is unset or not a real address,
 * so callers omit the line instead of showing a placeholder.
 */
export function getSupportEmail(): string | null {
  const fromEnv = process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim()
  if (fromEnv && isSafeEmail(fromEnv)) return fromEnv
  return null
}
