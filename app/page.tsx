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
    "Practical project management courses covering PMP, Agile, Scrum, and PMO. Go from your first project to running the room.",
}

const TESTIMONIALS = [
  {
    name: "Sarah K.",
    role: "Senior PM, FinTech",
    body: "I went from zero PM experience to passing my PMP on the first attempt. The structured path and real-world templates made all the difference.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    role: "Scrum Master, SaaS",
    body: "Finally a course that doesn't just regurgitate the PMBOK. The AI document tools alone saved me hours every sprint.",
    rating: 5,
  },
  {
    name: "Priya M.",
    role: "PMO Lead, Healthcare",
    body: "The PMO governance modules are the most practical I've found anywhere. My whole team is now working through the curriculum.",
    rating: 5,
  },
  {
    name: "James R.",
    role: "Project Coordinator → PM",
    body: "Within 3 months of completing the Pro track I landed a PM role with a 30% salary increase. Worth every minute.",
    rating: 5,
  },
]

const METRICS = [
  { value: "5,000+", label: "Students trained" },
  { value: "4.8 / 5", label: "Average rating" },
  { value: "92%", label: "Course completion rate" },
  { value: "3×", label: "Faster PMP prep" },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <LevelShowcase />

      {/* ── Social Proof ── */}
      <section className="border-t border-border bg-surface">
        <div className="container py-16">
          {/* Metrics strip */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {METRICS.map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-3xl font-extrabold tracking-tightest text-accent">{m.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Section heading */}
          <div className="mt-14 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">Student stories</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tightest text-foreground text-balance">
              Trusted by PMs at every level
            </h2>
            <p className="mt-3 mx-auto max-w-xl text-pretty leading-relaxed text-muted-foreground">
              From first-time coordinators to seasoned PMO leads — here's what our students say.
            </p>
          </div>

          {/* Testimonial cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t) => (
              <Card
                key={t.name}
                className="flex flex-col gap-4 border-border bg-background p-6"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  &ldquo;{t.body}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link href="/courses">
                Start learning free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <ToolTeaser />
    </>
  )
}
