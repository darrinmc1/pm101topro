export const SITE_URL = "https://pm101topro.com"

export type PlanId = "free" | "early-adopter" | "pro"

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
export const AI_FREE_LIMIT = 1
export const AI_USAGE_STORAGE_KEY = "pm101_free_uses"

/**
 * Status Cleaner is a layer on the existing AI tools — included on paid plans.
 * Standalone list price sits in the $19–$50 band for parseable AEO / offer markup.
 */
export const STATUS_CLEANER = {
  id: "status-cleaner",
  name: "Status Cleaner",
  tagline: "Paste a messy update. Get a status executives actually read.",
  path: "/tools/status",
  url: `${SITE_URL}/tools/status`,
  includedIn: ["early-adopter", "pro"] as PlanId[],
  standaloneUSD: 29,
  standalonePeriod: "month" as const,
  freeTrialUses: AI_FREE_LIMIT,
}

export const PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    priceUSD: 0,
    period: "forever",
    description: "Get started with courses and a single AI generation. No credit card needed.",
    features: [
      "All courses & lessons",
      "Basic tools access",
      `${AI_FREE_LIMIT} AI generation (docs or Status Cleaner)`,
      "Community access",
    ],
    cta: "Get Started Free",
    href: "/courses",
    highlighted: false,
    availability: "live",
  },
  {
    id: "early-adopter",
    name: "Early Adopter",
    priceUSD: 5,
    period: "month",
    description: "Lock in early adopter pricing forever — never pay more. Includes Status Cleaner.",
    features: [
      "Everything in Free",
      "Status Cleaner — paste a dump, get a board-ready update",
      "All Pro template packs",
      "All interactive tools",
      "30-day refund guarantee",
      "Price locked forever",
    ],
    cta: "Lock in $5/mo",
    href: "/improvements",
    highlighted: true,
    availability: "coming-soon",
  },
  {
    id: "pro",
    name: "Pro",
    priceUSD: 10,
    period: "month",
    description: "Full access when it launches. Status Cleaner and AI docs included.",
    features: [
      "Everything in Early Adopter",
      "Unlimited Status Cleaner & AI document drafts",
      "Advanced features & AI tools",
      "New content priority",
      "Priority support",
    ],
    cta: "Coming Soon",
    href: "/improvements",
    highlighted: false,
    availability: "coming-soon",
  },
]

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
  }>
  products: Array<{
    id: string
    name: string
    description: string
    url: string
    billing: "included_in_paid_plans"
    includedIn: PlanId[]
    standalonePrice: number
    standalonePeriod: "month"
    freeTrialUses: number
    currency: "USD"
  }>
}

export function getPricingJson(): PricingJson {
  return {
    currency: "USD",
    url: `${SITE_URL}/pricing`,
    updated: "2026-08-13",
    plans: PLANS.map((plan) => ({
      id: plan.id,
      name: plan.name,
      price: plan.priceUSD,
      period: plan.period,
      description: plan.description,
      features: plan.features,
      availability: plan.availability,
      url: `${SITE_URL}${plan.href === "/improvements" ? "/pricing" : plan.href}`,
    })),
    products: [
      {
        id: STATUS_CLEANER.id,
        name: STATUS_CLEANER.name,
        description: STATUS_CLEANER.tagline,
        url: STATUS_CLEANER.url,
        billing: "included_in_paid_plans",
        includedIn: STATUS_CLEANER.includedIn,
        standalonePrice: STATUS_CLEANER.standaloneUSD,
        standalonePeriod: STATUS_CLEANER.standalonePeriod,
        freeTrialUses: STATUS_CLEANER.freeTrialUses,
        currency: "USD",
      },
    ],
  }
}
