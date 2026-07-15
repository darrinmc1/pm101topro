import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start free and upgrade to Pro for the full pm101toPro course library and unlimited AI document generation.",
}

const PLANS = [
  {
    name: "Free",
    price: "£0",
    cadence: "forever",
    blurb: "Everything you need to get started and see how you learn.",
    cta: "Start learning free",
    href: "/courses",
    highlight: false,
    features: [
      "First lesson of every course",
      "Full 101 Beginner track",
      "3 AI document generations / month",
      "Community access",
    ],
  },
  {
    name: "Pro",
    price: "£12",
    cadence: "per month",
    blurb: "The complete path from your first charter to running a PMO.",
    cta: "Go Pro",
    href: "/pricing",
    highlight: true,
    features: [
      "Every course, every level",
      "Unlimited AI document generation",
      "Downloadable templates & exports",
      "Progress tracking & level rail",
      "New courses added monthly",
      "Priority support",
    ],
  },
  {
    name: "Teams",
    price: "Custom",
    cadence: "per seat",
    blurb: "Upskill your whole PMO with reporting and managed seats.",
    cta: "Contact sales",
    href: "/pricing",
    highlight: false,
    features: [
      "Everything in Pro",
      "Centralised billing & seats",
      "Team progress dashboards",
      "SSO & onboarding support",
    ],
  },
]

const FAQ = [
  {
    q: "Is the first lesson really free?",
    a: "Yes. The first lesson of every course is free with no card required, so you can try the teaching style across every methodology before deciding.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. Pro is month-to-month and you can cancel from your account settings at any time — you keep access until the end of your billing period.",
  },
  {
    q: "What are the AI document tools?",
    a: "Guided generators that turn a short questionnaire into professional PM documents like charters, risk registers, and RACI matrices, built on the frameworks you learn in the courses.",
  },
  {
    q: "Do you offer team or student discounts?",
    a: "Yes — reach out about Teams pricing for bulk seats, and we offer discounts for verified students and non-profits.",
  },
]

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tightest text-foreground text-balance">
            Simple pricing that grows with you
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Start free forever. Upgrade to Pro when you&apos;re ready for the full library and unlimited AI tools.
          </p>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              className={
                "relative flex flex-col p-7 " +
                (plan.highlight
                  ? "border-accent bg-surface shadow-blue-glow"
                  : "border-border bg-surface")
              }
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Most popular
                </span>
              )}
              <h2 className="text-lg font-semibold text-foreground">{plan.name}</h2>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">/ {plan.cadence}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{plan.blurb}</p>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="mt-7"
                variant={plan.highlight ? "default" : "secondary"}
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground">
          Frequently asked questions
        </h2>
        <div className="mx-auto mt-8 max-w-2xl">
          <Accordion type="single" collapsible>
            {FAQ.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-foreground">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}
