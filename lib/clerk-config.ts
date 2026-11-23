/**
 * pm101toPro only boots Clerk for its own instance.
 *
 * Development keys (pk_test_ / sk_test_) are the Frontend API on
 * *.clerk.accounts.dev and may run on localhost and Vercel Preview.
 * Production keys (pk_live_ / sk_live_) must decode to a Frontend API
 * under pm101topro.com (clerk.pm101topro.com after DNS) and only run on
 * pm101topro.com or www.pm101topro.com.
 *
 * Any other key, including another site's production key, is treated as
 * unset: pages still render and sign-in stays off. Key material is never
 * logged.
 */

export type ClerkMode = "off" | "development" | "production"

const SITE_APEX = "pm101topro.com"
const PRODUCTION_SITE_HOSTS = new Set([SITE_APEX, `www.${SITE_APEX}`])

// Clerk development Frontend API hosts, same shape Clerk itself accepts.
const DEV_FRONTEND_API =
  /^(([a-z]+)-){2}([0-9]{1,2})\.clerk\.accounts([a-z.]*)(dev|com)$/i

type ParsedPublishableKey = {
  instanceType: "development" | "production"
  frontendApi: string
}

export function normalizeHost(value: string | null | undefined): string {
  if (!value) return ""
  const first = value.split(",")[0]?.trim().toLowerCase() ?? ""
  if (!first) return ""
  if (first.startsWith("[")) {
    const end = first.indexOf("]")
    return end === -1 ? first : first.slice(1, end)
  }
  return (first.replace(/\.$/, "").split(":")[0] ?? "").replace(/\.$/, "")
}

function decodeKeyPayload(payload: string): string | null {
  try {
    const padded = payload.replace(/-/g, "+").replace(/_/g, "/")
    const padLength = (4 - (padded.length % 4)) % 4
    const normalized = padded + "=".repeat(padLength)
    if (typeof atob === "function") return atob(normalized)
    return null
  } catch {
    return null
  }
}

function parsePublishableKey(key: string | undefined): ParsedPublishableKey | null {
  const value = key?.trim() ?? ""
  if (!value.startsWith("pk_test_") && !value.startsWith("pk_live_")) return null
  const payload = value.split("_")[2]
  if (!payload) return null
  const decoded = decodeKeyPayload(payload)
  if (!decoded || !decoded.endsWith("$")) return null
  const frontendApi = decoded.slice(0, -1).trim().toLowerCase()
  if (!frontendApi || frontendApi.includes("$") || !frontendApi.includes(".")) return null
  if (frontendApi.includes("/") || frontendApi.includes(" ") || frontendApi.includes("@")) return null
  return {
    instanceType: value.startsWith("pk_live_") ? "production" : "development",
    frontendApi,
  }
}

function frontendApiAllowed(frontendApi: string, instanceType: ParsedPublishableKey["instanceType"]): boolean {
  if (instanceType === "development") return DEV_FRONTEND_API.test(frontendApi)
  return frontendApi === `clerk.${SITE_APEX}` || (frontendApi.startsWith("clerk.") && frontendApi.endsWith(`.${SITE_APEX}`))
}

function secretMatches(secret: string | undefined, instanceType: ParsedPublishableKey["instanceType"]): boolean {
  const value = secret?.trim() ?? ""
  const prefix = instanceType === "development" ? "sk_test_" : "sk_live_"
  return value.startsWith(prefix) && value.length > prefix.length + 8
}

export function clerkModeFromKeys(publishableKey: string | undefined, secretKey: string | undefined): ClerkMode {
  const parsed = parsePublishableKey(publishableKey)
  if (!parsed) return "off"
  if (!secretMatches(secretKey, parsed.instanceType)) return "off"
  if (!frontendApiAllowed(parsed.frontendApi, parsed.instanceType)) return "off"
  return parsed.instanceType
}

export function clerkMode(): ClerkMode {
  return clerkModeFromKeys(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, process.env.CLERK_SECRET_KEY)
}

export function clerkEnabledForHost(hostname: string | null | undefined, mode: ClerkMode = clerkMode()): boolean {
  if (mode === "off") return false
  if (mode === "development") return true
  return PRODUCTION_SITE_HOSTS.has(normalizeHost(hostname))
}
