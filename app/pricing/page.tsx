import type { Metadata } from "next"
import Link from "next/link"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for pm101toPro. Start free and upgrade when you're ready to unlock every course and AI tool.",
}

const FREE_FEATURES = [
  "Access to all Level 1 lessons",
  "1 AI document generation per month",
  "Community blog & PM wisdom",
  "Level progress tracking",
]

const PRO_FEATURES = [
  "All courses — every level & methodology",
  "Unlimited AI document generation",
  "Downloadable templates & checklists",
  "Priority support",
  "Early access to new content",
  "Certificate of completion",
]

const TESTIMONIALS = [
  {
    quote:
      "Upgrading to Pro was a no-brainer. The unlimited AI doc generation paid for itself the first week — I delivered a risk register in 10 minutes that used to take me half a day.",
    name: "James L.",
    role: "Senior Project Manager",
    initials: "JL",
  },
  {
    quote:
      "I was skeptical about another PM course, but the structured level path and real-world focus won me over. Pro is genuinely worth every penny.",
    name: "Anika S.",
    role: "Product Owner",
    initials: "AS",
  },
]

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Pricing</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tightest text-foreground text-balance">
            Start free. Go Pro when you're ready.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            No hidden fees, no confusing tiers. Pick the plan that fits where you are right now.
          </p>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl">
          {/* Free */}
          <Card className="border-border bg-surface p-8 flex flex-col">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Free</p>
            <div className="mt-3 flex items-end gap-1">
              <span className="text-4xl font-extrabold text-foreground">$0</span>
              <span className="mb-1 text-muted-foreground">/month</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Everything you need to get started.</p>
            <ul className="mt-6 space-y-3 flex-1">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-8 w-full">
              <Link href="/sign-up">Get started free</Link>
            </Button>
          </Card>

          {/* Pro */}
          <Card className="border-accent bg-accent/5 p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-4 right-4 rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">
              Most popular
            </div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">Pro</p>
            <div className="mt-3 flex items-end gap-1">
              <span className="text-4xl font-extrabold text-foreground">$12</span>
              <span className="mb-1 text-muted-foreground">/month</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Unlock everything and accelerate your career.</p>
            <ul className="mt-6 space-y-3 flex-1">
              {PRO_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 w-full">
              <Link href="/sign-up">Start Pro free for 7 days</Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-t border-border bg-surface">
        <div className="container py-14">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">What Pro members say</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tightest text-foreground">
            Real results from real PMs
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 max-w-3xl">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} className="flex flex-col border-border bg-background p-6">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                    {t.initials}
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
    </>
  )
}
