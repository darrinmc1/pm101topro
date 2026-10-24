import { REFUND_POLICY } from "@/lib/refund-policy"
import { lookupKeyFor, CHECKOUT_OFFERS } from "@/lib/offers"

const SITE_URL = "https://pm101topro.com"

/**
 * Answer-engine summary of the live main-branch product plus the Stripe SKU.
 * It does not replace the pricing page. Free stays $0 and Pro stays $12/mo.
 */
export function buildLlmTxt(): string {
  const lookupKey = lookupKeyFor(CHECKOUT_OFFERS.pro)

  return `# pm101toPro

> Project management training across PMP, Agile, Scrum, and PMO, plus AI document tools. Courses stay free. Pro is $12/mo.

Site: ${SITE_URL}
Contact: ${SITE_URL}/contact
Pricing: ${SITE_URL}/pricing
Terms: ${SITE_URL}/terms

## Pricing

Currency: USD

- Free: $0. All PM courses (Traditional, Agile, PMP), the structured learning path, and a limited number of AI document generations.
- Pro: $12 per month. Unlimited AI document generation, premium templates, and PDF and Word export. Lookup key: ${lookupKey}.

Stripe Checkout stays closed unless STRIPE_ENABLED is the string true. While it is closed, the Pro buy control reads "Coming soon: $12/mo" and does not start a payment. The pricing page still lists a 7-day Pro trial sign-up separate from Checkout.

## Refunds

${REFUND_POLICY}
`
}
