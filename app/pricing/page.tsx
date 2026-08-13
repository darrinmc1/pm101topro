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
  PLANS,
  STATUS_CLEANER,
  formatPlanPeriod,
  formatPlanPrice,
  getPricingJson,
} from "@/lib/pricing"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start free. Lock in early adopter pricing. Status Cleaner is included on paid plans ($29/mo standalone).",
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
      name: plan.name,
      description: plan.description,
      url: plan.url,
      price: plan.price,
      priceCurrency: data.currency,
      availability:
        plan.availability === "live"
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
      category: "Subscription",
    })),
    hasOfferCatalog: {
      "@type": "Offer",
      name: STATUS_CLEANER.name,
      description: STATUS_CLEANER.tagline,
      url: STATUS_CLEANER.url,
      price: STATUS_CLEANER.standaloneUSD,
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
    },
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Pricing</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Simple pricing. No surprises.</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Start free. Lock in early adopter pricing.{" "}
            <Link href="/tools/status" className="text-accent hover:underline">
              Status Cleaner
            </Link>{" "}
            is included on paid plans.
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
        <div className="grid items-start gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl border p-6 md:p-8 ${
                plan.highlighted
                  ? "scale-105 border-accent bg-surface shadow-lg ring-1 ring-accent"
                  : "border-border bg-surface"
              }`}
            >
              <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{formatPlanPrice(plan)}</span>
                <span className="text-sm text-muted-foreground">{formatPlanPeriod(plan)}</span>
              </div>
              <p className="mb-6 text-sm text-muted-foreground">{plan.description}</p>
              {plan.id === "early-adopter" && (
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-accent">
                  Early Adopter — lock in forever
                </p>
              )}
              <Link
                href={plan.href}
                className={`mb-8 flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground hover:bg-accent-glow"
                    : "border border-border text-foreground hover:bg-surface-raised"
                }`}
              >
                {plan.cta} <ArrowRight className="h-4 w-4" />
              </Link>
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

        <div className="mt-12 rounded-xl border border-border bg-surface p-6 md:p-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent-secondary">
            Product · {STATUS_CLEANER.id}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground">{STATUS_CLEANER.name}</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">{STATUS_CLEANER.tagline}</p>
          <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-muted-foreground">Standalone list price</dt>
              <dd className="mt-1 font-semibold tabular-nums text-foreground">
                ${STATUS_CLEANER.standaloneUSD}/{STATUS_CLEANER.standalonePeriod}
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Included in</dt>
              <dd className="mt-1 font-semibold text-foreground">Early Adopter, Pro</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Free trial</dt>
              <dd className="mt-1 font-semibold text-foreground">
                {STATUS_CLEANER.freeTrialUses} shared AI generation
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
