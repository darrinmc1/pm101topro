import type { Metadata } from "next"
import Link from "next/link"
import { Check, Minus, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Pricing – pm101toPro",
  description:
    "Simple, transparent pricing for every stage of your project management journey. Compare Free, Pro, and Premium plans.",
}

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with the fundamentals at no cost.",
    cta: "Start for free",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "Everything you need to level up fast and build real deliverables.",
    cta: "Go Pro",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Premium",
    price: "$49",
    period: "per month",
    description: "Full access for serious PMs and PMO leaders.",
    cta: "Go Premium",
    ctaHref: "/sign-up?plan=premium",
    highlight: false,
    badge: null,
  },
]

const FEATURES: {
  category: string
  rows: { label: string; free: string | boolean; pro: string | boolean; premium: string | boolean }[]
}[] = [
  {
    category: "Courses",
    rows: [
      { label: "Beginner courses (101 level)", free: true, pro: true, premium: true },
      { label: "Intermediate courses (200 level)", free: false, pro: true, premium: true },
      { label: "Advanced courses (300+ level)", free: false, pro: false, premium: true },
      { label: "PMP exam prep modules", free: false, pro: true, premium: true },
      { label: "Agile & Scrum deep-dives", free: false, pro: true, premium: true },
      { label: "PMO governance track", free: false, pro: false, premium: true },
      { label: "New courses on release", free: false, pro: true, premium: true },
    ],
  },
  {
    category: "AI Tools",
    rows: [
      { label: "AI document generator", free: "3 uses / month", pro: "50 uses / month", premium: "Unlimited" },
      { label: "Project charter builder", free: true, pro: true, premium: true },
      { label: "Risk register generator", free: false, pro: true, premium: true },
      { label: "Stakeholder map generator", free: false, pro: true, premium: true },
      { label: "Lessons learned report", free: false, pro: false, premium: true },
      { label: "Custom template export (PDF)", free: false, pro: true, premium: true },
    ],
  },
  {
    category: "Learning Experience",
    rows: [
      { label: "Progress tracking & level rail", free: true, pro: true, premium: true },
      { label: "Lesson bookmarks", free: false, pro: true, premium: true },
      { label: "Downloadable resources", free: false, pro: true, premium: true },
      { label: "Certificate of completion", free: false, pro: true, premium: true },
      { label: "Priority support", free: false, pro: false, premium: true },
      { label: "1-on-1 PM coaching session", free: false, pro: false, premium: "1 / quarter" },
    ],
  },
]

function FeatureCell({ value }: { value: string | boolean }) {
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
    <span className="block text-center text-sm font-medium text-foreground">{value}</span>
  )
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Pricing</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tightest text-foreground text-balance">
            The right plan for every stage of your PM journey
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Start free and upgrade when you're ready. No hidden fees, cancel any time.
          </p>
        </div>
      </section>

      {/* Tier cards */}
      <section className="container py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {TIERS.map((tier) => (
            <Card
              key={tier.name}
              className={`relative flex flex-col border p-8 ${
                tier.highlight
                  ? "border-accent bg-accent/5 shadow-lg"
                  : "border-border bg-surface"
              }`}
            >
              {tier.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                  {tier.badge}
                </Badge>
              )}
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                {tier.name}
              </p>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-extrabold tracking-tightest text-foreground">
                  {tier.price}
                </span>
                <span className="mb-1 text-sm text-muted-foreground">/ {tier.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                {tier.description}
              </p>
              <div className="mt-6">
                <Button
                  asChild
                  className={`w-full ${
                    tier.highlight ? "" : "variant-outline"
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

      {/* Comparison table */}
      <section className="container pb-20">
        <h2 className="mb-8 text-2xl font-extrabold tracking-tightest text-foreground">
          Full feature comparison
        </h2>

        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="py-4 pl-6 pr-4 text-left font-semibold text-foreground w-1/2">
                  Feature
                </th>
                {TIERS.map((tier) => (
                  <th
                    key={tier.name}
                    className={`px-4 py-4 text-center font-semibold ${
                      tier.highlight ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {tier.name}
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
                  {section.rows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`border-b border-border last:border-0 ${
                        i % 2 === 0 ? "bg-background" : "bg-surface"
                      }`}
                    >
                      <td className="py-3 pl-6 pr-4 text-foreground">{row.label}</td>
                      <td className="px-4 py-3">
                        <FeatureCell value={row.free} />
                      </td>
                      <td className="px-4 py-3">
                        <FeatureCell value={row.pro} />
                      </td>
                      <td className="px-4 py-3">
                        <FeatureCell value={row.premium} />
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Questions?{" "}
          <Link href="/about" className="font-medium text-accent underline-offset-4 hover:underline">
            Learn more about pm101toPro
          </Link>{" "}
          or{" "}
          <Link href="/blog" className="font-medium text-accent underline-offset-4 hover:underline">
            read the blog
          </Link>
          .
        </p>
      </section>
    </>
  )
}
