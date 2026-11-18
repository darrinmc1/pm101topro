/**
 * The only price map. Commercial buttons use ACCOUNT_CTA_LABEL and ACCOUNT_CTA_HREF.
 * There is no checkout on this site.
 */
import { INTRO_PRICE_TERMS, REFUND_POLICY } from "@/lib/legal"

export const SITE_URL = "https://www.pm101topro.com"

export const AI_FREE_LIMIT = 2
export const AI_USAGE_STORAGE_KEY = "pm101_free_uses"

export const ACCOUNT_CTA_LABEL = "Create a free account"
export const ACCOUNT_CTA_HREF = "/sign-up"

export const PLAN = {
  id: "pm101-plan",
  name: "PM101 plan",
  priceLabel: "A$9/month",
  taxLabel: "inc GST",
  introLabel: "A$5 first month",
  introWho: "Limited time, for people who create a free account with their email.",
  renewal: INTRO_PRICE_TERMS,
  includes: [
    "The course library after the free starter course",
    "The AI document generator (eight document types)",
  ],
} as const

export const FREE_ITEMS = [
  {
    id: "starter-course",
    name: "What is Project Management?",
    detail: "The starter course. Every lesson in it stays free.",
    href: "/courses/what-is-project-management",
  },
  {
    id: "status-cleaner",
    name: "Status Cleaner",
    detail: "Paste a messy update. Get a status executives actually read.",
    href: "/tools/status",
  },
  {
    id: "project-charter",
    name: "Project Charter template",
    detail: "The one-page charter PDF.",
    href: "/downloads#project-charter",
  },
] as const

export const PACKS = [
  {
    id: "planning",
    name: "Planning pack",
    priceAud: 9,
    priceLabel: "A$9",
    taxLabel: "one-off, inc GST",
    templateIds: ["raci-matrix", "wbs", "stakeholder-register", "budget-tracker"],
    items: [
      "RACI Matrix",
      "Work Breakdown Structure",
      "Stakeholder Register",
      "Budget Tracker",
    ],
  },
  {
    id: "delivery",
    name: "Delivery pack",
    priceAud: 15,
    priceLabel: "A$15",
    taxLabel: "one-off, inc GST",
    templateIds: ["status-report", "risk-register", "business-case", "meeting-minutes", "project-closure"],
    items: [
      "Status Report",
      "Risk Register",
      "Business Case",
      "Meeting Minutes",
      "Project Closure Report",
    ],
  },
] as const

export const STATUS_CLEANER = {
  id: "status-cleaner",
  name: "Status Cleaner",
  tagline: "Paste a messy update. Get a status executives actually read.",
  path: "/tools/status",
  url: `${SITE_URL}/tools/status`,
  freeTrialUses: AI_FREE_LIMIT,
}

export { REFUND_POLICY }

export function packForTemplate(templateId: string) {
  return PACKS.find((pack) =>
    (pack.templateIds as readonly string[]).includes(templateId),
  )
}
