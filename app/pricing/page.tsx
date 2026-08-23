import type { Metadata } from "next"
import Link from "next/link"
import { Check, X, Zap, BookOpen, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start free with full access to all PM courses. Upgrade to Pro for unlimited AI-powered document generation, templates, and priority support.",
}

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to learn project management from 101 to advanced.",
    cta: "Get started free",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
    features: [
      { label: "All PM courses (Traditional, Agile, PMP)", included: true },
      { label: "Structured learning path with level rail", included: true },
      { label: "Progress tracking & lesson completion", included: true },
      { label: "Blog articles & PM wisdom", included: true },
      { label: "3 AI document generations per month", included: true },
      { label: "Basic document templates", included: true },
      { label: "Unlimited AI document generation", included: false },
      { label: "All premium document templates", included: false },
      { label: "Export to PDF & Word", included: false },
      { label: "Priority email support", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "Unlimited AI tools to turn your PM knowledge into polished, professional deliverables.",
    cta: "Start Pro free for 7 days",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most popular",
    features: [
      { label: "All PM courses (Traditional, Agile, PMP)", included: true },
      { label: "Structured learning path with level rail", included: true },
      { label: "Progress tracking & lesson completion", included: true },
      { label: "Blog articles & PM wisdom", included: true },
      { label: "3 AI document generations per month", included: true },
      { label: "Basic document templates", included: true },
      { label: "Unlimited AI document generation", included: true },
      { label: "All premium document templates", included: true },
      { label: "Export to PDF & Word", included: true },
      { label: "Priority email support", included: true },
    ],
  },
]

const COMPARISON_ROWS = [
  { category: "Learning", feature: "All courses — Traditional, Agile & PMP", free: true, pro: true },
  { category: "Learning", feature: "Level rail & structured learning path", free: true, pro: true },
  { category: "Learning", feature: "Progress tracking", free: true, pro: true },
  { category: "AI Tools", feature: "AI document generation", free: "3 / month", pro: "Unlimited" },
  { category: "AI Tools", feature: "Project charter generator", free: true, pro: true },
  { category: "AI Tools", feature: "Risk register builder", free: true, pro: true },
  { category: "AI Tools", feature: "Stakeholder map generator", free: false, pro: true },
  { category: "AI Tools", feature: "Agile sprint planner", free: false, pro: true },
  { category: "Templates", feature: "Basic document templates", free: true, pro: true },
  { category: "Templates", feature: "Premium templates library", free: false, pro: true },
  { category: "Templates", feature: "Export to PDF & Word", free: false, pro: true },
  { category: "Support", feature: "Community access", free: true, pro: true },
  { category: "Support", feature: "Priority email support", free: false, pro: true },
]

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-accent" />
  if (value === false) return <X className="mx-auto h-5 w-5 text-muted-foreground/40" />
  return <span className="text-sm font-medium text-accent">{value}</span>
}

export default function PricingPage() {
  const categories = [...new Set(COMPARISON_ROWS.map((r) => r.category))]

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container py-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Pricing</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tightest text-foreground text-balance">
            Learn free. Build faster with Pro.
          </h1>
          <p className="mt-5 mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Every course on pm101toPro is free — no credit card required. Upgrade to Pro when you're ready to turn
            your knowledge into professional project documents in minutes with unlimited AI generation.
          </p>
        </div>
      </section>

      {/* Tier cards */}
      <section className="container py-14">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {TIERS.map((tier) => (
            <Card
              key={tier.name}
              className={`relative flex flex-col border-border p-8 ${
                tier.highlight ? "border-accent bg-accent/5 shadow-lg" : "bg-surface"
              }`}
            >
              {tier.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                  {tier.badge}
                </Badge>
              )}
              <div className="flex items-center gap-2">
                {tier.highlight ? (
                  <Sparkles className="h-5 w-5 text-accent" />
                ) : (
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                )}
                <span className="text-lg font-bold text-foreground">{tier.name}</span>
              </div>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-foreground">{tier.price}</span>
                <span className="ml-2 text-sm text-muted-foreground">{tier.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tier.description}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-2.5 text-sm">
                    {f.included ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    ) : (
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40" />
                    )}
                    <span className={f.included ? "text-foreground" : "text-muted-foreground/60"}>
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  asChild
                  className={`w-full ${
                    tier.highlight
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "variant-outline"
                  }`}
                  variant={tier.highlight ? "default" : "outline"}
                >
                  <Link href={tier.ctaHref}>
                    {tier.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Value proposition callout */}
      <section className="border-y border-border bg-surface">
        <div className="container py-12">
          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-foreground">All courses, always free</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Traditional, Agile, and PMP-aligned content — structured from 101 to Pro with zero paywalls on
                learning.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-foreground">AI that does the busywork</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Pro members generate unlimited charters, risk registers, stakeholder maps and more — in minutes, not
                hours.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-foreground">Cancel any time</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                No long-term contracts. Start with a 7-day free trial and upgrade, downgrade, or cancel whenever you
                like.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full comparison table */}
      <section className="container py-14">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-foreground">
          Full feature comparison
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Everything side-by-side so you can choose with confidence.
        </p>

        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-xl border border-border">
          {/* Table header */}
          <div className="grid grid-cols-3 border-b border-border bg-surface px-6 py-4">
            <div className="text-sm font-semibold text-muted-foreground">Feature</div>
            <div className="text-center text-sm font-bold text-foreground">Free</div>
            <div className="text-center text-sm font-bold text-accent">Pro</div>
          </div>

          {categories.map((cat) => {
            const rows = COMPARISON_ROWS.filter((r) => r.category === cat)
            return (
              <div key={cat}>
                <div className="border-b border-border bg-muted/30 px-6 py-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {cat}
                  </span>
                </div>
                {rows.map((row, i) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-3 items-center px-6 py-3.5 ${
                      i < rows.length - 1 ? "border-b border-border/50" : ""
                    }`}
                  >
                    <span className="text-sm text-foreground">{row.feature}</span>
                    <div className="text-center">
                      <FeatureValue value={row.free} />
                    </div>
                    <div className="text-center">
                      <FeatureValue value={row.pro} />
                    </div>
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border">
        <div className="container py-16 text-center">
          <h2 className="text-3xl font-extrabold tracking-tightest text-foreground">
            Ready to run the room?
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-muted-foreground text-pretty">
            Start learning for free today. When you're ready to ship professional documents at speed, Pro is waiting.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/sign-up?plan=pro">
                Start Pro free — 7 days
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/courses">Browse free courses</Link>
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">No credit card required for free plan. Cancel Pro any time.</p>
        </div>
      </section>
    </>
  )
}
