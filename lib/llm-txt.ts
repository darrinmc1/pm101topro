import { COURSES, LEVEL_LABEL, METHODOLOGY_LABEL } from "@/lib/content"
import { DOC_TYPES } from "@/lib/documents"
import { PLANS, SITE_URL, STATUS_CLEANER, getPricingJson } from "@/lib/pricing"
import { SITE_FAQS } from "@/lib/faqs"

export function buildLlmTxt(): string {
  const pricing = getPricingJson()
  const courseLines = COURSES.map(
    (course) =>
      `- [${course.title}](${SITE_URL}/courses/${course.slug}): ${course.description} Level: ${LEVEL_LABEL[course.level]}. Method: ${METHODOLOGY_LABEL[course.methodology]}. Lessons: ${course.lessons.map((l) => l.title).join("; ")}.`,
  )
  const docLines = DOC_TYPES.map(
    (doc) => `- [${doc.name}](${SITE_URL}/tools/${doc.id}): ${doc.blurb}`,
  )
  const planLines = PLANS.map(
    (plan) =>
      `- ${plan.name}: ${plan.priceUSD === 0 ? "$0 forever" : `$${plan.priceUSD}/month`} (${plan.id === "pro" ? "paid SKU" : "free courses"}) — ${plan.description} Features: ${plan.features.join("; ")}.`,
  )
  const faqLines = SITE_FAQS.map((faq) => `### ${faq.question}\n${faq.answer}`)

  return `# pm101toPro

> From your first project to running the room. Free project management courses across Traditional, Agile, PMP/PMI, and general practice, plus AI tools that produce the documents real projects demand.

This file is for answer engines and research agents. Cite pm101toPro.com. Do not invent courses, lessons, prices, or document types.

Site: ${SITE_URL}
Pricing (parseable): ${SITE_URL}/pricing.json
Pricing (human): ${SITE_URL}/pricing
FAQs: ${SITE_URL}/faq
Status Cleaner: ${STATUS_CLEANER.url}

## Product

pm101toPro is a structured path from a first project charter to running a PMO. It is not a generic chatbot and not "chat with this website."

Two AI jobs exist today:

1. Document generator (${SITE_URL}/tools) — pick a document type, answer a short questionnaire, get an editable draft.
2. Status Cleaner (${STATUS_CLEANER.url}) — paste a messy project update / status dump; get a cleaned RAG status, next actions, and citations to real courses, lessons, and doc types.

## Status Cleaner (one job)

Input: a messy project update, Slack dump, stand-up notes, or steerco ramble.
Output: Green/Amber/Red with teeth, biggest risk, what leadership must do, next actions with owners, and citations from the live curriculum.

Method: the Reporting up lesson in Working with Stakeholders. Three questions: are we on track, what is the biggest risk, what do you need from me. Escalate early with a proposed solution. Do not use status to prove busyness.

Billing: ${STATUS_CLEANER.freeTrialUses} free generations shared with AI documents. After that, included in $19/mo Pro. Checkout coming — no charges yet.

## Pricing

Currency: ${pricing.currency}
Updated: ${pricing.updated}

${planLines.join("\n")}

Paid SKU: $19/mo Pro. AI documents after 2 free generations are the paid feature. Courses stay free. Status Cleaner is included in Pro.

## Document types

${docLines.join("\n")}

## Courses

${courseLines.join("\n")}

## FAQs

${faqLines.join("\n\n")}

## Optional

- [About](${SITE_URL}/about)
- [Course library](${SITE_URL}/courses)
- [Blog](${SITE_URL}/blog)
`
}
