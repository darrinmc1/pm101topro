import type { Metadata } from "next"
import Link from "next/link"
import { Check, Minus, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Pricing – pm101toPro",
  description:
    "Simple, transparent pricing. Start free, upgrade when you're ready. Compare Free, Basic, and Pro plans side by side.",
}

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Kick the tyres. No credit card needed.",
    cta: "Get started free",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
  },
  {
    name: "Basic",
    price: "$9",
    period: "per month",
    description: "For individuals building real PM skills fast.",
    cta: "Start Basic",
    ctaHref: "/sign-up?plan=basic",
    highlight: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "Everything you need to go from PM to PMO leader.",
    cta: "Go Pro",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most popular",
  },
]

type FeatureValue = boolean | string

const FEATURES: { category: string; rows: { label: string; free: FeatureValue; basic: FeatureValue; pro: FeatureValue }[] }[] = [
  {
    category: "Courses & Learning",
    rows: [
      { label: "Introductory PM courses", free: true, basic: true, pro: true },
      { label: "Full course library (all methodologies)", free: false, basic: true, pro: true },
      { label: "PMP, Agile, Scrum & PMO tracks", free: false, basic: true, pro: true },
      { label: "Downloadable lesson notes", free: false, basic: true, pro: true },
      { label: "Progress tracking & level rail", free: true, basic: true, pro: true },
    ],
  },
  {
    category: "AI Document Tools",
    rows: [
      { label: "AI document generations per month", free: "3", basic: "25", pro: "Unlimited" },
      { label: "Project charter generator", free: true, basic: true, pro: true },
      { label: "Risk register & RAID log", free: false, basic: true, pro: true },
      { label: "Stakeholder map & comms plan", free: false, basic: true, pro: true },
      { label: "Full PMO template suite", free: false, basic: false, pro: true },
      { label: "Export to PDF & Word", free: false, basic: true, pro: true },
    ],
  },
  {
    category: "Support & Community",
    rows: [
      { label: "Community forum access", free: true, basic: true, pro: true },
      { label: "Email support", free: false, basic: true, pro: true },
      { label: "Priority support", free: false, basic: false, pro: true },
      { label: "Early access to new courses", free: false, basic: false, pro: true },
    ],
  },
]

function FeatureCell({ value }: { value: FeatureValue }) {
  if (value === true) {
    return (
      <span className="flex justify-center">
        <Check className="h-5 w-5 text-accent" aria-label="Included" />
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="flex justify-center">
        <Minus className="h-4 w-4 text-muted-foreground/40" aria-label="Not included" />
      </span>
    )
  }
  return (
    <span className="flex justify-center text-sm font-medium text-foreground">{value}</span>
  )
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container py-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Pricing</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tightest text-foreground text-balance">
            Simple pricing, no surprises
          </h1>
          <p className="mt-4 mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Start free and upgrade only when you need more. Every plan includes access to the level rail so you always know where you stand.
          </p>
        </div>
      </section>

      {/* Plan cards */}
      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col border p-8 ${
                plan.highlight
                  ? "border-accent bg-accent/5 shadow-lg"
                  : "border-border bg-surface"
              }`}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                  <Zap className="mr-1 h-3 w-3" />
                  {plan.badge}
                </Badge>
              )}
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {plan.name}
              </p>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-extrabold tracking-tightest text-foreground">
                  {plan.price}
                </span>
                <span className="mb-1 text-sm text-muted-foreground">/ {plan.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                {plan.description}
              </p>
              <div className="mt-6">
                <Button
                  asChild
                  className={`w-full ${
                    plan.highlight
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : ""
                  }`}
                  variant={plan.highlight ? "default" : "outline"}
                >
                  <Link href={plan.ctaHref}>{plan.cta}</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="container pb-20">
        <h2 className="mb-6 text-xl font-bold tracking-tight text-foreground">Full feature comparison</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="py-4 pl-6 pr-4 text-left font-semibold text-foreground w-1/2">Feature</th>
                {PLANS.map((plan) => (
                  <th
                    key={plan.name}
                    className={`py-4 px-4 text-center font-semibold ${
                      plan.highlight ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((section) => (
                <>
                  <tr key={section.category} className="border-b border-border bg-muted/30">
                    <td
                      colSpan={4}
                      className="py-2 pl-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                    >
                      {section.category}
                    </td>
                  </tr>
                  {section.rows.map((row) => (
                    <tr
                      key={row.label}
                      className="border-b border-border last:border-0 transition-colors hover:bg-surface"
                    >
                      <td className="py-3 pl-6 pr-4 text-foreground">{row.label}</td>
                      <td className="py-3 px-4">
                        <FeatureCell value={row.free} />
                      </td>
                      <td className="py-3 px-4">
                        <FeatureCell value={row.basic} />
                      </td>
                      <td className="py-3 px-4 bg-accent/5">
                        <FeatureCell value={row.pro} />
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTAs */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div key={plan.name} className="flex flex-col items-center gap-3 text-center">
              <p className="text-sm font-semibold text-foreground">{plan.name} plan</p>
              <Button
                asChild
                className={`w-full max-w-xs ${
                  plan.highlight
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : ""
                }`}
                variant={plan.highlight ? "default" : "outline"}
              >
                <Link href={plan.ctaHref}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p className="mt-10 text-center text-sm text-muted-foreground">
          All plans include a 14-day money-back guarantee. No contracts, cancel any time.{" "}
          <Link href="/about" className="text-accent underline-offset-4 hover:underline">
            Learn more about us.
          </Link>
        </p>
      </section>
    </>
  )
}
