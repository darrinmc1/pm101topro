import type { Metadata } from "next"
import Link from "next/link"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "pm101toPro is free to start. Upgrade to Pro for $19/mo and unlock every course, AI tool, and template.",
}

const FREE_FEATURES = [
  "Access to 101-level lessons",
  "3 AI document generations / month",
  "Community blog & PM wisdom",
  "Level-rail progress tracking",
]

const FREE_MISSING = [
  "Intermediate & Advanced courses",
  "Unlimited AI document generation",
  "Downloadable templates & checklists",
  "Priority email support",
]

const PRO_FEATURES = [
  "Everything in Free",
  "Intermediate & Advanced courses",
  "Unlimited AI document generation",
  "Downloadable templates & checklists",
  "Priority email support",
]

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Pricing</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tightest text-foreground text-balance">
            Simple, honest pricing
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Start free. Upgrade when you're ready to go deeper.
          </p>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
          {/* Free tier */}
          <Card className="border-border bg-surface p-8 flex flex-col">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Free</p>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-5xl font-extrabold text-foreground">$0</span>
                <span className="mb-1 text-muted-foreground">/mo</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">No credit card required.</p>
            </div>

            <ul className="mt-8 space-y-3 flex-1">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
              {FREE_MISSING.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground line-through">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button asChild variant="outline" className="w-full">
                <Link href="/sign-up">Get started free</Link>
              </Button>
            </div>
          </Card>

          {/* Pro tier */}
          <Card className="border-accent bg-surface p-8 flex flex-col relative">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">Most popular</Badge>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">Pro</p>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-5xl font-extrabold text-foreground">$19</span>
                <span className="mb-1 text-muted-foreground">/mo</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Cancel any time.</p>
            </div>

            <ul className="mt-8 space-y-3 flex-1">
              {PRO_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/sign-up">Start Pro — $19/mo</Link>
              </Button>
            </div>
          </Card>
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Need a team plan?{" "}
          <Link href="/about" className="underline underline-offset-4 hover:text-foreground">
            Get in touch
          </Link>
          {" "}and we'll work something out.
        </p>
      </section>
    </>
  )
}
