import type { Metadata } from "next"
import Link from "next/link"
import { Check, Minus, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for pm101toPro. Start free, upgrade when you're ready to unlock every course, AI tool, and template.",
}

const TIERS = [
  {
    name: "Free",
    price: 0,
    period: null,
    badge: null,
    description: "Everything you need to get started and explore the platform.",
    cta: "Get started free",
    ctaHref: "/sign-up",
    ctaVariant: "outline" as const,
    features: [
      { label: "3 introductory lessons", included: true },
      { label: "1 AI document generator (Project Charter)", included: true },
      { label: "Level rail progress tracker", included: true },
      { label: "Blog & PM wisdom feed", included: true },
      { label: "All courses & lessons", included: false },
      { label: "Full AI tool suite (10+ templates)", included: false },
      { label: "Downloadable templates & checklists", included: false },
      { label: "Priority email support", included: false },
    ],
  },
  {
    name: "Pro",
    price: 19,
    period: "month",
    badge: "Most popular",
    description: "Unlimited access to every course, AI tool, and template — cancel any time.",
    cta: "Start 7-day free trial",
    ctaHref: "/sign-up?plan=pro",
    ctaVariant: "default" as const,
    features: [
      { label: "3 introductory lessons", included: true },
      { label: "1 AI document generator (Project Charter)", included: true },
      { label: "Level rail progress tracker", included: true },
      { label: "Blog & PM wisdom feed", included: true },
      { label: "All courses & lessons", included: true },
      { label: "Full AI tool suite (10+ templates)", included: true },
      { label: "Downloadable templates & checklists", included: true },
      { label: "Priority email support", included: true },
    ],
  },
  {
    name: "Pro Annual",
    price: 149,
    period: "year",
    badge: "Save 35%",
    description: "Everything in Pro, billed once a year. Best value for committed PMs.",
    cta: "Get Pro Annual",
    ctaHref: "/sign-up?plan=pro-annual",
    ctaVariant: "default" as const,
    features: [
      { label: "3 introductory lessons", included: true },
      { label: "1 AI document generator (Project Charter)", included: true },
      { label: "Level rail progress tracker", included: true },
      { label: "Blog & PM wisdom feed", included: true },
      { label: "All courses & lessons", included: true },
      { label: "Full AI tool suite (10+ templates)", included: true },
      { label: "Downloadable templates & checklists", included: true },
      { label: "Priority email support", included: true },
    ],
  },
]

const FAQ = [
  {
    q: "Can I really try Pro for free?",
    a: "Yes. Your 7-day free trial gives you full Pro access with no charge until the trial ends. Cancel any time before then and you won't be billed.",
  },
  {
    q: "What AI tools are included in Pro?",
    a: "Pro unlocks the full suite: Project Charter, Risk Register, RACI Matrix, Stakeholder Map, Meeting Agenda, Status Report, Lessons Learned, Change Request, Communication Plan, and more as we add them.",
  },
  {
    q: "Do you offer team or organisation pricing?",
    a: "We're working on team plans. Email us at hello@pm101topro.com and we'll set something up.",
  },
  {
    q: "What happens to my progress if I downgrade?",
    a: "Your progress is always saved. You'll keep access to the free tier content and your completed lessons remain visible on your level rail.",
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container py-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Pricing</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tightest text-foreground text-balance">
            Invest in your PM career
          </h1>
          <p className="mt-4 mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Start free and upgrade when you're ready. No hidden fees, no exam-prep fluff — just practical skills and
            the AI tools to prove them.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="container py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <Card
              key={tier.name}
              className={`relative flex flex-col border-border bg-surface p-8 ${
                tier.badge === "Most popular" ? "ring-2 ring-accent" : ""
              }`}
            >
              {tier.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                  {tier.badge === "Most popular" && <Zap className="mr-1 h-3 w-3" />}
                  {tier.badge}
                </Badge>
              )}

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {tier.name}
                </p>
                <div className="mt-3 flex items-end gap-1">
                  {tier.price === 0 ? (
                    <span className="text-4xl font-extrabold text-foreground">Free</span>
                  ) : (
                    <>
                      <span className="text-4xl font-extrabold text-foreground">${tier.price}</span>
                      <span className="mb-1 text-sm text-muted-foreground">/{tier.period}</span>
                    </>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {tier.description}
                </p>
              </div>

              <Link href={tier.ctaHref} className="mt-6">
                <Button variant={tier.ctaVariant} className="w-full">
                  {tier.cta}
                </Button>
              </Link>

              <ul className="mt-8 space-y-3">
                {tier.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-3 text-sm">
                    {f.included ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    ) : (
                      <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40" />
                    )}
                    <span
                      className={f.included ? "text-foreground" : "text-muted-foreground/50 line-through"}
                    >
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          All prices in USD. Subscriptions renew automatically. Cancel any time from your dashboard.
        </p>
      </section>

      {/* Feature comparison callout */}
      <section className="border-y border-border bg-surface">
        <div className="container py-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Everything you need to go from 101 to Pro
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-muted-foreground text-pretty">
            Pro members get instant access to every current and future course, the complete AI document suite, and
            every downloadable template — all in one subscription.
          </p>
          <Link href="/sign-up?plan=pro" className="mt-6 inline-block">
            <Button size="lg">Start your free trial</Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-14">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Frequently asked questions</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {FAQ.map((item) => (
            <div key={item.q}>
              <h3 className="font-semibold text-foreground">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
