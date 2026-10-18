import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, CheckCircle } from "lucide-react"
import { BuyButton } from "@/components/buy-button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SITE_FAQS } from "@/lib/faqs"
import {
  AI_FREE_LIMIT,
  PLANS,
  PRO_PRICE_LABEL,
  STATUS_CLEANER,
  formatPlanPeriod,
  formatPlanPrice,
} from "@/lib/pricing"
import { REFUND_POLICY } from "@/lib/refund-policy"

export const metadata: Metadata = {
  title: "Pricing",
  description: `Courses stay free. Pro is ${PRO_PRICE_LABEL} for unlimited AI documents and Status Cleaner after ${AI_FREE_LIMIT} free generations.`,
}

const PRICING_FAQ_IDS = ["free-courses", "ai-docs", "price", "refunds"]

export default function PricingPage() {
  const faqs = SITE_FAQS.filter((faq) => PRICING_FAQ_IDS.includes(faq.id))

  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border bg-surface py-16 text-center">
        <div className="container">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">Pricing</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Courses stay free. AI docs are Pro.</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {AI_FREE_LIMIT} free AI generations, shared by the document generator and Status Cleaner. After that,{" "}
            {PRO_PRICE_LABEL}. Checkout stays closed until payments are enabled.
          </p>
        </div>
      </section>

      <section className="container py-12">
        <div className="mx-auto grid max-w-4xl items-start gap-6 md:grid-cols-2">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl border p-6 md:p-8 ${
                plan.highlighted ? "border-accent bg-surface shadow-lg ring-1 ring-accent" : "border-border bg-surface"
              }`}
            >
              <h2 className="text-xl font-bold text-foreground">{plan.name}</h2>
              <div className="mt-4">
                <span className="text-4xl font-bold text-foreground">{formatPlanPrice(plan)}</span>
                <span className="text-sm text-muted-foreground">{formatPlanPeriod(plan)}</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle
                      className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlighted ? "text-accent" : "text-muted-foreground"}`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              {plan.id === "pro" ? (
                <div className="mt-8">
                  <BuyButton sku="pro" fullWidth />
                </div>
              ) : (
                <Link
                  href={plan.href}
                  className="mt-8 flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-semibold transition-colors hover:bg-surface-raised"
                >
                  {plan.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-xl border border-border bg-surface p-6 md:p-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent-secondary">Included in Pro</p>
          <h2 className="mt-2 text-2xl font-bold">{STATUS_CLEANER.name}</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">{STATUS_CLEANER.tagline}</p>
          <Link href="/tools/status" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
            Try Status Cleaner <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="container max-w-3xl pb-16" aria-labelledby="pricing-faq-heading">
        <h2 id="pricing-faq-heading" className="text-2xl font-bold">Pricing FAQ</h2>
        <Accordion type="single" collapsible className="mt-4">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{REFUND_POLICY}</p>
      </section>
    </div>
  )
}
