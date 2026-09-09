import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { LevelShowcase } from "@/components/home/level-showcase"
import { ToolTeaser } from "@/components/home/tool-teaser"

export const metadata: Metadata = {
  title: "pm101toPro – Project Management Training from Beginner to Pro",
  description:
    "Structured project management courses, AI-powered document tools, and a clear path from PM beginner to PMO leader.",
}

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Start learning with no commitment.",
    cta: "Get started free",
    href: "/sign-up",
    highlight: false,
    features: [
      "Access to 101-level courses",
      "Level progress tracking",
      "3 AI document generations / month",
      "Community blog & resources",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "/ month",
    description: "Everything you need to advance your PM career.",
    cta: "Start Pro free trial",
    href: "/pricing",
    highlight: true,
    features: [
      "All courses — every methodology",
      "Unlimited AI document generations",
      "Downloadable templates & checklists",
      "PMP & Agile exam prep paths",
      "Priority support",
    ],
  },
  {
    name: "Team",
    price: "$49",
    period: "/ month",
    description: "Upskill your whole project team together.",
    cta: "View team plan",
    href: "/pricing",
    highlight: false,
    features: [
      "Everything in Pro",
      "Up to 10 seats",
      "Team progress dashboard",
      "PMO governance course bundle",
      "Dedicated onboarding call",
    ],
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <LevelShowcase />
      <ToolTeaser />

      {/* Pricing tiers */}
      <section className="border-t border-border bg-surface">
        <div className="container py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">Pricing</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tightest text-foreground text-balance">
              Simple, transparent plans
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Start free and upgrade when you're ready. No hidden fees, cancel any time.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {TIERS.map((tier) => (
              <Card
                key={tier.name}
                className={`relative flex flex-col border p-8 ${
                  tier.highlight
                    ? "border-accent bg-accent/5 shadow-lg"
                    : "border-border bg-background"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
                    Most popular
                  </span>
                )}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    {tier.name}
                  </p>
                  <div className="mt-2 flex items-end gap-1">
                    <span className="text-4xl font-extrabold tracking-tightest text-foreground">
                      {tier.price}
                    </span>
                    <span className="mb-1 text-sm text-muted-foreground">{tier.period}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {tier.description}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    asChild
                    className={`w-full ${
                      tier.highlight ? "" : "variant-outline"
                    }`}
                    variant={tier.highlight ? "default" : "outline"}
                  >
                    <Link href={tier.href}>
                      {tier.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Need a custom enterprise plan?{" "}
            <Link href="/pricing" className="font-medium text-accent underline-offset-4 hover:underline">
              See full pricing details →
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
