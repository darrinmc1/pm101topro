import type { Metadata } from "next"
import Link from "next/link"
import { Check, X, ArrowRight, Zap, BookOpen, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Pricing – pm101toPro",
  description:
    "Simple, transparent pricing. Start free and upgrade when you're ready for AI-powered document generation and full course access.",
}

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to start your PM journey — no credit card required.",
    cta: "Get started free",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
    icon: BookOpen,
    features: [
      { label: "Access to all 101-level courses", included: true },
      { label: "Core PM frameworks & methodology guides", included: true },
      { label: "Level progress tracking", included: true },
      { label: "PM blog & practical articles", included: true },
      { label: "Community Q&A access", included: true },
      { label: "Intermediate & advanced courses", included: false },
      { label: "AI document generator (unlimited)", included: false },
      { label: "Downloadable templates & checklists", included: false },
      { label: "PMO governance toolkit", included: false },
      { label: "Priority support", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "Unlock every course, AI tools, and professional templates to accelerate your career.",
    cta: "Start Pro — 7 days free",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most popular",
    icon: Zap,
    features: [
      { label: "Access to all 101-level courses", included: true },
      { label: "Core PM frameworks & methodology guides", included: true },
      { label: "Level progress tracking", included: true },
      { label: "PM blog & practical articles", included: true },
      { label: "Community Q&A access", included: true },
      { label: "Intermediate & advanced courses", included: true },
      { label: "AI document generator (unlimited)", included: true },
      { label: "Downloadable templates & checklists", included: true },
      { label: "PMO governance toolkit", included: true },
      { label: "Priority support", included: true },
    ],
  },
  {
    name: "Team",
    price: "$49",
    period: "per month",
    description: "For PMOs and teams who need shared progress tracking and volume access.",
    cta: "Contact us",
    ctaHref: "/about",
    highlight: false,
    badge: null,
    icon: Sparkles,
    features: [
      { label: "Everything in Pro", included: true },
      { label: "Up to 5 team seats included", included: true },
      { label: "Team progress dashboard", included: true },
      { label: "Shared template library", included: true },
      { label: "Bulk AI document generation", included: true },
      { label: "Custom onboarding session", included: true },
      { label: "Dedicated account manager", included: true },
      { label: "SSO / SAML (enterprise add-on)", included: false },
      { label: "Custom course paths", included: false },
      { label: "SLA & invoiced billing", included: false },
    ],
  },
]

const FAQ = [
  {
    q: "Can I really start for free?",
    a: "Yes. The Free tier never expires and gives you full access to all 101-level courses, methodology guides, and the PM blog. No credit card needed.",
  },
  {
    q: "What's included in the 7-day Pro trial?",
    a: "You get full Pro access — every course, unlimited AI document generation, and all downloadable templates — for 7 days at no charge. Cancel any time before the trial ends and you won't be billed.",
  },
  {
    q: "What does the AI document generator actually produce?",
    a: "It turns your project details into professional PM deliverables: project charters, risk registers, stakeholder maps, status reports, and more — ready to use in minutes.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. Upgrade, downgrade, or cancel at any time from your dashboard. Billing is monthly with no lock-in contracts.",
  },
  {
    q: "Do you offer discounts for students or non-profits?",
    a: "Yes — reach out via the About page and we'll sort you out with a discounted rate.",
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
            Start free. Go Pro when you're ready.
          </h1>
          <p className="mt-5 mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Every PM deserves a clear path from beginner to expert. Free gets you started — Pro gets you there faster with AI tools, advanced courses, and professional templates.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="container py-14">
        <div className="grid gap-8 md:grid-cols-3">
          {TIERS.map((tier) => {
            const Icon = tier.icon
            return (
              <Card
                key={tier.name}
                className={`relative flex flex-col border p-8 ${
                  tier.highlight
                    ? "border-accent bg-accent/5 shadow-lg shadow-accent/10"
                    : "border-border bg-surface"
                }`}
              >
                {tier.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                    {tier.badge}
                  </Badge>
                )}

                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      tier.highlight ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{tier.name}</h2>
                </div>

                <div className="mt-5">
                  <span className="text-4xl font-extrabold text-foreground">{tier.price}</span>
                  <span className="ml-1.5 text-sm text-muted-foreground">{tier.period}</span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {tier.description}
                </p>

                <Link href={tier.ctaHref} className="mt-6">
                  <Button
                    className={`w-full ${
                      tier.highlight ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""
                    }`}
                    variant={tier.highlight ? "default" : "outline"}
                  >
                    {tier.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <ul className="mt-8 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-3 text-sm">
                      {f.included ? (
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      ) : (
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40" />
                      )}
                      <span
                        className={f.included ? "text-foreground" : "text-muted-foreground/50"}
                      >
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="border-t border-border">
        <div className="container py-14">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground">Full feature comparison</h2>
          <p className="mt-2 text-muted-foreground">See exactly what's included at every tier.</p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-6 text-left font-semibold text-foreground">Feature</th>
                  <th className="px-4 py-3 text-center font-semibold text-foreground">Free</th>
                  <th className="px-4 py-3 text-center font-semibold text-accent">Pro</th>
                  <th className="px-4 py-3 text-center font-semibold text-foreground">Team</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["101-level courses", true, true, true],
                  ["Intermediate & advanced courses", false, true, true],
                  ["Level progress tracking", true, true, true],
                  ["PM blog & articles", true, true, true],
                  ["AI document generator", false, true, true],
                  ["Downloadable templates", false, true, true],
                  ["PMO governance toolkit", false, true, true],
                  ["Team progress dashboard", false, false, true],
                  ["Up to 5 team seats", false, false, true],
                  ["Custom onboarding session", false, false, true],
                  ["Priority support", false, true, true],
                ].map(([label, free, pro, team]) => (
                  <tr key={String(label)} className="border-b border-border/50 hover:bg-muted/30">
                    <td className="py-3 pr-6 text-foreground">{label}</td>
                    <td className="px-4 py-3 text-center">
                      {free ? <Check className="mx-auto h-4 w-4 text-accent" /> : <X className="mx-auto h-4 w-4 text-muted-foreground/30" />}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {pro ? <Check className="mx-auto h-4 w-4 text-accent" /> : <X className="mx-auto h-4 w-4 text-muted-foreground/30" />}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {team ? <Check className="mx-auto h-4 w-4 text-accent" /> : <X className="mx-auto h-4 w-4 text-muted-foreground/30" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border">
        <div className="container py-14">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground">Frequently asked questions</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {FAQ.map((item) => (
              <Card key={item.q} className="border-border bg-surface p-6">
                <h3 className="font-semibold text-foreground">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="container py-16 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground text-balance">
            Ready to level up your PM career?
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-muted-foreground text-pretty">
            Join thousands of project managers building real skills. Start free today — no credit card required.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/sign-up">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get started free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button size="lg" variant="outline">
                Browse courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
