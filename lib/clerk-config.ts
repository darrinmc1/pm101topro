/**
 * Clerk publishable keys embed the Frontend API host (`pk_live_` + base64 of
 * `clerk.example.com$`). Production keys only work on that Clerk application's
 * domain. This site currently has a key for mastertherevolution.com, which
 * Clerk rejects on pm101topro.com. Ignore it so public pages stay quiet and
 * sign-in does not call the wrong instance. A key for this site (Frontend API
 * on pm101topro.com) and any pk_test_ development key are accepted.
 */
const SITE_APEX = "pm101topro.com"

export function clerkFrontendApiHost(publishableKey: string | undefined): string | null {
  if (!publishableKey) return null
  const encoded = publishableKey.split("_")[2]
  if (!encoded) return null
  try {
    const decoded = atob(encoded)
    if (!decoded.endsWith("$") || decoded.slice(0, -1).includes("$")) return null
    const host = decoded.slice(0, -1).trim().toLowerCase()
    if (!host.includes(".")) return null
    return host
  } catch {
    return null
  }
}

export function isClerkKeyUsable(
  publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
): boolean {
  if (!publishableKey?.startsWith("pk_")) return false
  if (publishableKey.startsWith("pk_test_")) return true
  const host = clerkFrontendApiHost(publishableKey)
  if (!host) return false
  return host === SITE_APEX || host.endsWith(`.${SITE_APEX}`)
}
