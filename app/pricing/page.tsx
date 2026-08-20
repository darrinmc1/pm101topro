import type { Metadata } from "next"
import Link from "next/link"
import { Check, Zap, BookOpen, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for pm101toPro. Start free, upgrade when you need AI-powered document generation and full course access.",
}

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to get started with project management fundamentals.",
    icon: BookOpen,
    badge: null,
    cta: "Get started free",
    ctaHref: "/sign-up",
    variant: "outline" as const,
    features: [
      "Access to all 101-level lessons",
      "Core PM concepts across Waterfall & Agile",
      "Level rail progress tracking",
      "PM blog & reference articles",
      "3 AI document generations per month",
      "Community Q&A access",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "Unlimited AI tools and the full course library for practitioners who want to move fast.",
    icon: Zap,
    badge: "Most popular",
    cta: "Start Pro free for 7 days",
    ctaHref: "/sign-up",
    variant: "default" as const,
    features: [
      "Everything in Free",
      "Full course library — all levels (101 → Pro)",
      "Unlimited AI document generation",
      "All document templates (charter, RAID, RACI, retrospective & more)",
      "Downloadable PDF exports",
      "Priority email support",
      "Early access to new courses & tools",
    ],
  },
  {
    name: "Team",
    price: "$49",
    period: "per month",
    description: "For small teams who want a shared learning environment and centralised document workspace.",
    icon: Sparkles,
    badge: null,
    cta: "Contact us",
    ctaHref: "mailto:hello@pm101topro.com",
    variant: "outline" as const,
    features: [
      "Everything in Pro",
      "Up to 5 team seats",
      "Shared document workspace",
      "Team progress dashboard",
      "Bulk PDF exports",
      "Dedicated onboarding call",
      "Invoice billing available",
    ],
  },
]

const FAQ = [
  {
    q: "Can I cancel at any time?",
    a: "Yes. Cancel from your dashboard with one click — no questions asked. You keep access until the end of your billing period.",
  },
  {
    q: "What counts as an AI document generation?",
    a: "Each time you use an AI tool to produce a document (e.g. a project charter, RAID log, or retrospective) that counts as one generation. Editing and re-exporting an existing document does not use an additional generation.",
  },
  {
    q: "Is there a student or non-profit discount?",
    a: "Yes — email hello@pm101topro.com with proof of enrolment or non-profit status and we'll apply a 50 % discount to any paid plan.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards via Stripe. Team plan customers can also request invoice billing.",
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
            Simple pricing, no surprises
          </h1>
          <p className="mt-4 mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Start free and upgrade only when you need unlimited AI tools and the full course library.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="container py-14">
        <div className="grid gap-8 lg:grid-cols-3">
          {TIERS.map((tier) => {
            const Icon = tier.icon
            return (
              <Card
                key={tier.name}
                className={`relative flex flex-col border-border bg-surface p-8 ${
                  tier.badge ? "ring-2 ring-accent" : ""
                }`}
              >
                {tier.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                    {tier.badge}
                  </Badge>
                )}

                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>

                <h2 className="mt-4 text-xl font-bold text-foreground">{tier.name}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{tier.description}</p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-foreground">{tier.price}</span>
                  <span className="mb-1 text-sm text-muted-foreground">/ {tier.period}</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button asChild variant={tier.variant} className="w-full">
                    <Link href={tier.ctaHref}>{tier.cta}</Link>
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border">
        <div className="container py-14">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Frequently asked questions</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {FAQ.map((item) => (
              <Card key={item.q} className="border-border bg-surface p-6">
                <p className="font-semibold text-foreground">{item.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-t border-border bg-surface">
        <div className="container flex flex-col items-center gap-4 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-lg font-bold text-foreground">Not sure which plan is right for you?</p>
            <p className="mt-1 text-sm text-muted-foreground">Start free — no credit card required. Upgrade any time.</p>
          </div>
          <Button asChild>
            <Link href="/sign-up">Create free account</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
