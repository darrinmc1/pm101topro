import Link from "next/link"
import type { Metadata } from "next"
import { CheckCircle, ArrowRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { STATUS_FAQS, faqsToJsonLd } from "@/lib/faqs"
import {
  AI_FREE_LIMIT,
  PLANS,
  PRO_PLAN,
  PRO_PRICE_LABEL,
  STATUS_CLEANER,
  formatPlanPeriod,
  formatPlanPrice,
  getPricingJson,
} from "@/lib/pricing"

export const metadata: Metadata = {
  title: "Pricing",
  description: `Courses stay free. AI documents after ${AI_FREE_LIMIT} free generations are ${PRO_PRICE_LABEL}. Checkout coming — no charges yet.`,
}

function pricingJsonLd() {
  const data = getPricingJson()
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "pm101toPro pricing",
    url: data.url,
    itemListElement: data.plans.map((plan, index) => ({
      "@type": "Offer",
      position: index + 1,
      name: plan.id === "pro" ? PRO_PRICE_LABEL : plan.name,
      description: plan.description,
      url: plan.url,
      price: plan.price,
      priceCurrency: data.currency,
      availability:
        plan.availability === "live"
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
      category: plan.id === "pro" ? "Subscription" : "Free",
    })),
  }
}

export default function PricingPage() {
  const offerLd = pricingJsonLd()
  const faqLd = faqsToJsonLd(STATUS_FAQS)

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <section className="border-b border-border bg-surface py-16 text-center">
        <div className="container">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            SKU · {PRO_PRICE_LABEL}
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            {PRO_PRICE_LABEL}. Courses stay free.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Two free AI document generations. After that, Pro is the paid SKU for unlimited
            drafts. Checkout coming — we are not charging cards yet.
          </p>
          <p className="mt-3 font-mono text-xs text-muted-foreground">
            Machine-readable:{" "}
            <Link href="/pricing.json" className="text-accent hover:underline">
              /pricing.json
            </Link>
            {" · "}
            <Link href="/llm.txt" className="text-accent hover:underline">
              /llm.txt
            </Link>
          </p>
        </div>
      </section>
      <section className="container py-12">
        <div className="mx-auto grid max-w-4xl items-start gap-6 md:grid-cols-2">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl border p-6 md:p-8 ${
                plan.highlighted
                  ? "scale-105 border-accent bg-surface shadow-lg ring-1 ring-accent"
                  : "border-border bg-surface"
              }`}
            >
              <div className="mb-2 flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    plan.id === "free"
                      ? "bg-success/15 text-success"
                      : "bg-accent/15 text-accent"
                  }`}
                >
                  {plan.id === "free" ? "Free" : "Paid"}
                </span>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold">{formatPlanPrice(plan)}</span>
                <span className="text-sm text-muted-foreground">{formatPlanPeriod(plan)}</span>
              </div>
              {plan.id === "pro" && (
                <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                  {PRO_PRICE_LABEL}
                </p>
              )}
              <p className="mb-6 text-sm text-muted-foreground">{plan.description}</p>
              {plan.id === "pro" ? (
                <span className="mb-8 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground">
                  {plan.cta} <ArrowRight className="h-4 w-4" />
                </span>
              ) : (
                <Link
                  href={plan.href}
                  className="mb-8 flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-raised"
                >
                  {plan.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.highlighted ? "text-accent" : "text-muted-foreground"
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-xl border border-border bg-surface p-6 md:p-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent-secondary">
            Included in {PRO_PRICE_LABEL}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground">{STATUS_CLEANER.name}</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">{STATUS_CLEANER.tagline}</p>
          <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-muted-foreground">Billing</dt>
              <dd className="mt-1 font-semibold text-foreground">Included in Pro</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Paid SKU</dt>
              <dd className="mt-1 font-semibold text-foreground">{PRO_PRICE_LABEL}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Free trial</dt>
              <dd className="mt-1 font-semibold text-foreground">
                {STATUS_CLEANER.freeTrialUses} shared AI generations
              </dd>
            </div>
          </dl>
          <Link
            href="/tools/status"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            Try Status Cleaner <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-sm text-muted-foreground">
          {PRO_PLAN.description} No Stripe checkout on this page.
        </p>

        <section className="mx-auto mt-14 max-w-3xl" aria-labelledby="pricing-faq-heading">
          <h2 id="pricing-faq-heading" className="text-xl font-semibold text-foreground">
            Pricing FAQs
          </h2>
          <Accordion type="single" collapsible className="mt-4">
            {STATUS_FAQS.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </section>
    </div>
  )
}
