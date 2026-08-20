import type { Metadata } from "next"
import Link from "next/link"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for pm101toPro. Start free, upgrade when you're ready.",
}

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to get started with project management.",
    cta: "Get started free",
    href: "/sign-up",
    highlight: false,
    features: [
      "Access to Level 1 & 2 courses",
      "Core PM templates (PDF)",
      "Blog & learning resources",
      "Progress tracking",
      "Community access",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "Unlock the full path from 101 to Pro with AI-powered tools.",
    cta: "Start Pro free for 7 days",
    href: "/sign-up?plan=pro",
    highlight: true,
    features: [
      "All Free features",
      "Full course library (all levels)",
      "AI document generator",
      "Unlimited AI tool usage",
      "Downloadable project templates",
      "Priority support",
      "Certificate of completion",
    ],
  },
  {
    name: "Team",
    price: "$49",
    period: "per month",
    description: "For teams that want to upskill together and track progress.",
    cta: "Contact us",
    href: "mailto:hello@pm101topro.com",
    highlight: false,
    features: [
      "Everything in Pro",
      "Up to 10 seats",
      "Team progress dashboard",
      "Custom onboarding",
      "Dedicated account manager",
      "Volume discounts available",
    ],
  },
]

const TESTIMONIALS = [
  {
    name: "Sarah K.",
    role: "Junior PM, Tech Startup",
    avatar: "SK",
    quote: "The Pro plan paid for itself in the first week. I generated a project charter that got approved first time — that never happens!",
  },
  {
    name: "Marcus T.",
    role: "Operations Manager → PM",
    avatar: "MT",
    quote: "I was skeptical about the AI tools but they're genuinely useful. Not generic output — actual PM documents I can hand to stakeholders.",
  },
  {
    name: "Priya R.",
    role: "PMP Candidate",
    avatar: "PR",
    quote: "Worth every penny for the full course library alone. The level structure keeps me on track and I can see exactly how far I've come.",
  },
]

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container py-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Pricing</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tightest text-foreground text-balance">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 mx-auto max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Start free and upgrade when you're ready. No hidden fees, cancel any time.
          </p>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col border-border p-8 ${
                plan.highlight
                  ? "border-accent bg-accent/5 ring-2 ring-accent/30"
                  : "bg-surface"
              }`}
            >
              {plan.highlight && (
                <span className="mb-4 inline-block w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                  Most popular
                </span>
              )}
              <p className="text-lg font-bold text-foreground">{plan.name}</p>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-extrabold tracking-tightest text-foreground">{plan.price}</span>
                <span className="mb-1 text-sm text-muted-foreground">/{plan.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`mt-8 w-full ${
                  plan.highlight ? "" : "variant-outline"
                }`}
                variant={plan.highlight ? "default" : "outline"}
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container py-14">
          <p className="text-center text-sm font-medium uppercase tracking-widest text-accent">What Pro members say</p>
          <h2 className="mt-3 text-center text-2xl font-extrabold tracking-tightest text-foreground">
            Real results from real PMs
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} className="flex flex-col gap-4 border-border bg-background p-6">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container py-12 text-center">
          <p className="text-muted-foreground text-sm">
            Questions?{" "}
            <Link href="mailto:hello@pm101topro.com" className="font-medium text-accent underline-offset-4 hover:underline">
              Get in touch
            </Link>
            {" "}— we typically reply within one business day.
          </p>
        </div>
      </section>
    </>
  )
}
