/**
 * Server allowlist of Checkout SKUs. The client may send a sku. It must never
 * send a Stripe price id. Lookup keys are built here as
 * `${STRIPE_SITE_KEY}_${suffix}` and resolved with prices.list({ lookup_keys }).
 *
 * The only paid price is Pro at $12/mo (USD). This repo never stored a Stripe price id.
 * Default lookup key: pm101topro_pro_m_usd12.
 */

export const STATEMENT_DESCRIPTOR_SUFFIX = "PM101TOPRO"
export const CHECKOUT_CURRENCY = "usd"

export type CheckoutSku = "pro"
export type CheckoutMode = "payment" | "subscription"

export interface CheckoutOffer {
  sku: CheckoutSku
  /** Appended after `${siteKey}_`. */
  lookupKeySuffix: string
  mode: CheckoutMode
  /** entitlements.product_id, linked to the Clerk user id. */
  entitlementId: string
  /** USD dollars. Stripe unit_amount must equal this × 100, currency usd. */
  priceUsd: number
  /** Button label amount, e.g. "$12/mo". */
  priceLabel: string
  /**
   * Per-product gate. False keeps Buy as "Coming soon" and POST /api/checkout
   * returns 503 even when both Stripe flags are true.
   * Pro is a subscription to the document generator and Status Cleaner, which
   * already ship in this app, so there is no file to wait on.
   */
  available: boolean
  /** Pro drafts include charter and business-case documents with signature blocks. */
  legalNotice: boolean
}

export const CHECKOUT_OFFERS: Record<CheckoutSku, CheckoutOffer> = {
  pro: {
    sku: "pro",
    lookupKeySuffix: "pro_m_usd12",
    mode: "subscription",
    entitlementId: "pro",
    priceUsd: 12,
    priceLabel: "$12/mo",
    available: true,
    legalNotice: true,
  },
}

export function offerFromSku(sku: unknown): CheckoutOffer | null {
  if (sku === "pro") return CHECKOUT_OFFERS.pro
  return null
}

/** Site prefix for lookup keys. Not a secret. Defaults to pm101topro. */
export function stripeSiteKey(): string {
  const key = process.env.STRIPE_SITE_KEY?.trim()
  if (key && /^[a-z0-9_-]+$/i.test(key)) return key
  return "pm101topro"
}

export function lookupKeyFor(offer: CheckoutOffer, site = stripeSiteKey()): string {
  return `${site}_${offer.lookupKeySuffix}`
}

/**
 * Client flag. Inlined at build time, so changing it needs a redeploy.
 * Anything other than the string "true" (including unset) leaves Buy disabled.
 */
export function publicStripeEnabled(): boolean {
  return process.env.NEXT_PUBLIC_STRIPE_ENABLED === "true"
}

/** True only when the client flag is on and this product is marked available. */
export function offerIsPurchasable(offer: CheckoutOffer): boolean {
  return publicStripeEnabled() && offer.available
}
