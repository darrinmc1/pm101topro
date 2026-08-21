export const SITE_URL = "https://pm101topro.com"

export type PlanId = "free" | "pro"

export type Plan = {
  id: PlanId
  name: string
  priceUSD: number
  period: "forever" | "month"
  description: string
  features: string[]
  cta: string
  href: string
  highlighted: boolean
  availability: "live" | "coming-soon"
}

/** Shared free-generation meter used by document tools and Status Cleaner. */
export const AI_FREE_LIMIT = 2
export const AI_USAGE_STORAGE_KEY = "pm101_free_uses"

/** Official paid SKU. Checkout is not live — do not charge cards. */
export const PRO_PRICE_USD = 19
export const PRO_PRICE_LABEL = "$19/mo Pro"
export const PRO_SKU_NAME = "Pro"

export const STATUS_CLEANER = {
  id: "status-cleaner",
  name: "Status Cleaner",
  tagline: "Paste a messy update. Get a status executives actually read.",
  path: "/tools/status",
  url: `${SITE_URL}/tools/status`,
  includedIn: ["pro"] as PlanId[],
  freeTrialUses: AI_FREE_LIMIT,
}

export const PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    priceUSD: 0,
    period: "forever",
    description: "All four course levels stay free. Two AI document generations included.",
    features: [
      "All courses & lessons — free",
      `${AI_FREE_LIMIT} free AI document generations`,
      "Status Cleaner uses the same free meter",
      "No credit card needed",
    ],
    cta: "Start learning free",
    href: "/courses",
    highlighted: false,
    availability: "live",
  },
  {
    id: "pro",
    name: PRO_SKU_NAME,
    priceUSD: PRO_PRICE_USD,
    period: "month",
    description:
      "Unlimited AI documents after your two free generations. Courses stay free.",
    features: [
      "Everything in Free",
      "Unlimited AI document generator (8 doc types)",
      "Unlimited Status Cleaner",
      "Checkout coming — no charges yet",
    ],
    cta: "Checkout coming",
    href: "/pricing",
    highlighted: true,
    availability: "coming-soon",
  },
]

export const PRO_PLAN = PLANS.find((plan) => plan.id === "pro")!

export function formatPlanPrice(plan: Plan): string {
  if (plan.priceUSD === 0) return "$0"
  return `$${plan.priceUSD}`
}

export function formatPlanPeriod(plan: Plan): string {
  return plan.period === "forever" ? "forever" : "/month"
}

export type PricingJson = {
  currency: "USD"
  url: string
  updated: string
  plans: Array<{
    id: PlanId
    name: string
    price: number
    period: Plan["period"]
    description: string
    features: string[]
    availability: Plan["availability"]
    url: string
    sku?: string
  }>
  products: Array<{
    id: string
    name: string
    description: string
    url: string
    billing: "included_in_pro"
    includedIn: PlanId[]
    freeTrialUses: number
    currency: "USD"
  }>
}

export function getPricingJson(): PricingJson {
  return {
    currency: "USD",
    url: `${SITE_URL}/pricing`,
    updated: "2026-08-14",
    plans: PLANS.map((plan) => ({
      id: plan.id,
      name: plan.name,
      price: plan.priceUSD,
      period: plan.period,
      description: plan.description,
      features: plan.features,
      availability: plan.availability,
      url: `${SITE_URL}${plan.id === "pro" ? "/pricing" : plan.href}`,
      sku: plan.id === "pro" ? PRO_PRICE_LABEL : undefined,
    })),
    products: [
      {
        id: STATUS_CLEANER.id,
        name: STATUS_CLEANER.name,
        description: STATUS_CLEANER.tagline,
        url: STATUS_CLEANER.url,
        billing: "included_in_pro",
        includedIn: STATUS_CLEANER.includedIn,
        freeTrialUses: STATUS_CLEANER.freeTrialUses,
        currency: "USD",
      },
    ],
  }
}
