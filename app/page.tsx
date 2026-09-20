import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { LevelShowcase } from "@/components/home/level-showcase"
import { ToolTeaser } from "@/components/home/tool-teaser"

export const metadata: Metadata = {
  title: "pm101toPro – Project Management Training from Beginner to Pro",
  description:
    "Structured project management courses covering PMP, Agile, Scrum, and PMO — plus AI-powered tools to generate real project documents in minutes.",
}

const TESTIMONIALS = [
  {
    name: "Sarah K.",
    role: "Project Manager, FinTech",
    quote:
      "I went from zero PM experience to confidently leading a cross-functional team in under three months. The level structure made it crystal clear what to learn next.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    role: "Scrum Master, Healthcare",
    quote:
      "The AI document tools alone are worth it. I generated a full project charter in minutes that would have taken me half a day to write from scratch.",
    rating: 5,
  },
  {
    name: "Priya R.",
    role: "PMO Analyst, Consulting",
    quote:
      "Finally a course that covers both Agile and traditional PM without making you feel like you have to pick a side. Practical, clear, and actually useful on real projects.",
    rating: 5,
  },
  {
    name: "James O.",
    role: "IT Project Lead, Retail",
    quote:
      "Passed my PMP exam on the first attempt after working through the PMP-aligned modules. The way concepts link to real deliverables made everything click.",
    rating: 5,
  },
]

const METRICS = [
  { value: "10,000+", label: "Students trained" },
  { value: "4.9 / 5", label: "Average course rating" },
  { value: "94%", label: "Completion rate" },
  { value: "3 months", label: "Avg. time to first promotion" },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Social proof metrics */}
      <section className="border-b border-border bg-surface">
        <div className="container py-10">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {METRICS.map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-3xl font-extrabold tracking-tight text-accent">{m.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <LevelShowcase />
      <ToolTeaser />

      {/* Testimonials */}
      <section className="border-t border-border">
        <div className="container py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">What students say</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tightest text-foreground text-balance">
            Real results from real project managers
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t) => (
              <Card
                key={t.name}
                className="flex flex-col border-border bg-surface p-6"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link href="/courses">
                Start learning today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
