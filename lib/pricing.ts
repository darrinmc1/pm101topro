/**
 * Constants the Status Cleaner reads. Main's pricing page keeps its own tiers
 * ($12/mo Pro). This file does not replace that page.
 */
export const SITE_URL = "https://pm101topro.com"

export const AI_FREE_LIMIT = 2
export const AI_USAGE_STORAGE_KEY = "pm101_free_uses"

/** Matches the Pro price on /pricing. */
export const PRO_PRICE_USD = 12
export const PRO_PRICE_LABEL = "$12/mo Pro"

export const STATUS_CLEANER = {
  id: "status-cleaner",
  name: "Status Cleaner",
  tagline: "Paste a messy update. Get a status executives actually read.",
  path: "/tools/status",
  url: `${SITE_URL}/tools/status`,
  freeTrialUses: AI_FREE_LIMIT,
}
