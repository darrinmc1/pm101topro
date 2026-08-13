import { AI_FREE_LIMIT, AI_USAGE_STORAGE_KEY } from "@/lib/pricing"

export { AI_FREE_LIMIT, AI_USAGE_STORAGE_KEY }

export function getFreeUsage(): number {
  if (typeof window === "undefined") return 0
  try {
    return Number(localStorage.getItem(AI_USAGE_STORAGE_KEY) || "0")
  } catch {
    return 0
  }
}

export function incrementFreeUsage(): number {
  try {
    const next = getFreeUsage() + 1
    localStorage.setItem(AI_USAGE_STORAGE_KEY, String(next))
    return next
  } catch {
    return 99
  }
}

export function hasExhaustedFreeAi(): boolean {
  return getFreeUsage() >= AI_FREE_LIMIT
}
