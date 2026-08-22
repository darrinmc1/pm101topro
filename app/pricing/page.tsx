import type { Metadata } from "next"
import Link from "next/link"
import { Check, X, Zap, BookOpen, Wrench, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Compare Free vs Pro plans on pm101toPro. Free access to core PM courses and one AI tool. Pro unlocks all AI document generators, advanced courses, and priority support.",
}

const FREE_FEATURES = [
  { label: "Access to 101-level courses", included: true },
  { label: "Beginner learning path", included: true },
  { label: "1 AI tool (Project Charter Generator)", included: true },
  { label: "Community blog & resources", included: true },
  { label: "Progress tracking", included: true },
  { label: "Intermediate & advanced courses", included: false },
  { label: "Full AI tool suite (10+ generators)", included: false },
  { label: "Downloadable templates & checklists", included: false },
  { label: "PMP & Agile exam prep modules", included: false },
  { label: "Priority email support", included: false },
]

const PRO_FEATURES = [
  { label: "Everything in Free", included: true },
  { label: "Intermediate & advanced courses", included: true },
  { label: "Full AI tool suite (10+ generators)", included: true },
  { label: "Downloadable templates & checklists", included: true },
  { label: "PMP & Agile exam prep modules", included: true },
  { label: "Priority email support", included: true },
]

const AI_TOOLS = [
  { name: "Project Charter Generator", free: true },
  { name: "Risk Register Builder", free: false },
  { name: "Stakeholder Map Creator", free: false },
  { name: "RACI Matrix Generator", free: false },
  { name: "Meeting Agenda & Minutes Writer", free: false },
  { name: "Status Report Generator", free: false },
  { name: "Lessons Learned Summariser", free: false },
  { name: "Change Request Writer", free: false },
  { name: "Sprint Retrospective Facilitator", free: false },
  { name: "Project Closure Report", free: false },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container py-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Pricing</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tightest text-foreground text-balance">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Start free and upgrade when you're ready to unlock every AI tool and advanced course.
          </p>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="container py-14">
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Free Tier */}
          <Card className="border-border bg-surface p-8 flex flex-col">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">Free</h2>
              <Badge variant="outline">Current</Badge>
            </div>
            <div className="mt-4">
              <span className="text-4xl font-extrabold text-foreground">$0</span>
              <span className="ml-2 text-muted-foreground">/ forever</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Perfect for getting started with project management fundamentals.
            </p>
            <ul className="mt-6 space-y-3 flex-1">
              {FREE_FEATURES.map((f) => (
                <li key={f.label} className="flex items-start gap-3 text-sm">
                  {f.included ? (
                    <Check className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                  ) : (
                    <X className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground/40" />
                  )}
                  <span className={f.included ? "text-foreground" : "text-muted-foreground/50"}>
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild variant="outline" className="w-full">
                <Link href="/sign-up">Get started free</Link>
              </Button>
            </div>
          </Card>

          {/* Pro Tier */}
          <Card className="border-accent/40 bg-surface p-8 flex flex-col ring-2 ring-accent/20">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">Pro</h2>
              <Badge className="bg-accent text-accent-foreground">Most popular</Badge>
            </div>
            <div className="mt-4">
              <span className="text-4xl font-extrabold text-foreground">$19</span>
              <span className="ml-2 text-muted-foreground">/ month</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              For PMs who want every tool, every course, and AI that does the busywork.
            </p>
            <ul className="mt-6 space-y-3 flex-1">
              {PRO_FEATURES.map((f) => (
                <li key={f.label} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                  <span className="text-foreground">{f.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild className="w-full">
                <Link href="/sign-up">Start Pro free for 7 days</Link>
              </Button>
              <p className="mt-2 text-center text-xs text-muted-foreground">No credit card required for trial</p>
            </div>
          </Card>
        </div>
      </section>

      {/* AI Tools Comparison */}
      <section className="border-t border-border">
        <div className="container py-14 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="h-5 w-5 text-accent" />
            <p className="text-sm font-medium uppercase tracking-widest text-accent">AI Tools</p>
          </div>
          <h2 className="text-2xl font-extrabold tracking-tightest text-foreground">
            10+ AI document generators
          </h2>
          <p className="mt-2 text-muted-foreground text-pretty">
            Turn what you've learned into professional PM documents in minutes. Pro unlocks the full suite.
          </p>

          <div className="mt-8 overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="px-4 py-3 text-left font-semibold text-foreground">AI Tool</th>
                  <th className="px-4 py-3 text-center font-semibold text-foreground">Free</th>
                  <th className="px-4 py-3 text-center font-semibold text-accent">Pro</th>
                </tr>
              </thead>
              <tbody>
                {AI_TOOLS.map((tool, i) => (
                  <tr
                    key={tool.name}
                    className={i % 2 === 0 ? "bg-surface" : "bg-muted/10"}
                  >
                    <td className="px-4 py-3 text-foreground">{tool.name}</td>
                    <td className="px-4 py-3 text-center">
                      {tool.free ? (
                        <Check className="h-4 w-4 text-accent mx-auto" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Check className="h-4 w-4 text-accent mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="border-t border-border">
        <div className="container py-14">
          <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            <Card className="border-border bg-surface p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-foreground">Structured learning paths</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Free covers 101-level fundamentals. Pro adds intermediate, advanced, PMP prep, and Agile certification tracks.
              </p>
            </Card>
            <Card className="border-border bg-surface p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-foreground">AI-powered documents</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Free gives you the Charter Generator. Pro unlocks all 10+ tools — risk registers, stakeholder maps, status reports, and more.
              </p>
            </Card>
            <Card className="border-border bg-surface p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <BarChart3 className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-foreground">Progress & templates</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Track your level from 101 to Pro. Pro members also get downloadable templates and checklists for every project phase.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="container py-14 text-center">
          <h2 className="text-2xl font-extrabold tracking-tightest text-foreground">
            Ready to level up your PM career?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Start free today — no credit card needed.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/sign-up">Start for free</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/courses">Browse courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
