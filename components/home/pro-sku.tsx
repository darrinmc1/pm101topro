import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  AI_FREE_LIMIT,
  PLANS,
  PRO_PRICE_LABEL,
  formatPlanPeriod,
  formatPlanPrice,
} from "@/lib/pricing"

export function ProSku() {
  return (
    <section id="pricing" className="border-b border-border py-20" aria-labelledby="pro-sku-heading">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-secondary">
            SKU · {PRO_PRICE_LABEL}
          </p>
          <h2 id="pro-sku-heading" className="mt-3 text-3xl font-bold tracking-tightest text-foreground">
            Courses stay free. AI docs are Pro.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Two free document generations. After that, {PRO_PRICE_LABEL} unlocks unlimited AI
            drafts. Checkout is not live yet.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl items-start gap-6 md:grid-cols-2">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl border p-6 md:p-8 ${
                plan.highlighted
                  ? "border-accent bg-surface shadow-lg ring-1 ring-accent"
                  : "border-border bg-surface"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
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
              <div className="mt-4">
                <span className="text-4xl font-bold text-foreground">{formatPlanPrice(plan)}</span>
                <span className="text-sm text-muted-foreground">{formatPlanPeriod(plan)}</span>
              </div>
              {plan.id === "pro" && (
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-accent-secondary">
                  {PRO_PRICE_LABEL}
                </p>
              )}
              <p className="mt-4 text-sm text-muted-foreground">{plan.description}</p>
              {plan.id === "pro" ? (
                <Button asChild className="mt-6 w-full" size="lg">
                  <Link href="/pricing">
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <Button asChild variant="outline" className="mt-6 w-full" size="lg">
                  <Link href={plan.href}>
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              )}
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.highlighted ? "text-accent" : "text-muted-foreground"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground">
          AI document generator and Status Cleaner share the {AI_FREE_LIMIT} free generations.
          No Stripe and no card charges on this page.
        </p>
      </div>
    </section>
  )
}
