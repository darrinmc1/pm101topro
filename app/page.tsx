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
    "Structured project management courses covering PMP, Agile, Scrum and PMO — plus AI-powered document tools to accelerate your career.",
}

const TESTIMONIALS = [
  {
    name: "Sarah K.",
    role: "Senior PM, FinTech",
    quote:
      "I went from zero PM experience to passing my PMP on the first attempt. The structured path made all the difference — I always knew exactly what to study next.",
    stars: 5,
  },
  {
    name: "Marcus T.",
    role: "Scrum Master, SaaS",
    quote:
      "The AI document tools alone are worth it. I generate a full project charter in minutes instead of hours. My stakeholders are genuinely impressed.",
    stars: 5,
  },
  {
    name: "Priya R.",
    role: "PMO Lead, Consulting",
    quote:
      "After completing the PMO track my salary jumped 38%. The governance frameworks here are exactly what enterprise clients expect to see.",
    stars: 5,
  },
  {
    name: "James O.",
    role: "Project Coordinator → PM",
    quote:
      "I was stuck as a coordinator for three years. Six months with pm101toPro and I landed my first PM role with a 45% pay increase.",
    stars: 5,
  },
]

const METRICS = [
  { value: "5,000+", label: "Students enrolled" },
  { value: "92%", label: "Pass rate on first attempt" },
  { value: "40%", label: "Average salary increase" },
  { value: "4.9 / 5", label: "Average course rating" },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Social proof metrics bar */}
      <section className="border-y border-border bg-surface">
        <div className="container py-8">
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
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Student stories</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tightest text-foreground text-balance">
            Real results from real project managers
          </h2>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Over 5,000 students have used pm101toPro to earn certifications, land promotions, and lead bigger projects.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t) => (
              <Card
                key={t.name}
                className="flex flex-col gap-4 border-border bg-surface p-6"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-foreground text-pretty">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/courses">
                Start learning free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">View pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
