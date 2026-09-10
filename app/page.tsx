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
      "I went from zero PM experience to leading a cross-functional team in under six months. The level rail kept me focused and the AI tools saved me hours every week.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    role: "Scrum Master, SaaS Startup",
    quote:
      "Finally a course that covers real-world Agile, not just textbook theory. I passed my PMP on the first attempt after completing the PMP track here.",
    rating: 5,
  },
  {
    name: "Priya M.",
    role: "PMO Lead, Healthcare",
    quote:
      "The PMO governance modules are the best I've found anywhere. Practical templates, clear frameworks, and the AI document generator is a game-changer for my team.",
    rating: 5,
  },
  {
    name: "James O.",
    role: "Senior BA turned PM, Consulting",
    quote:
      "I transitioned from business analysis to project management using pm101toPro. The structured path made the switch feel manageable and the community is incredibly supportive.",
    rating: 5,
  },
]

const METRICS = [
  { value: "5,000+", label: "Students trained" },
  { value: "92%", label: "Completion rate" },
  { value: "4.9 / 5", label: "Average rating" },
  { value: "120+", label: "Lessons & tools" },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <LevelShowcase />

      {/* Social proof metrics */}
      <section className="border-y border-border bg-surface">
        <div className="container py-12">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {METRICS.map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-3xl font-extrabold tracking-tightest text-accent">{m.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b border-border">
        <div className="container py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Student stories</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tightest text-foreground text-balance">
            Real results from real project managers
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} className="flex flex-col border-border bg-surface p-6">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
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
        </div>
      </section>

      <ToolTeaser />

      {/* CTA */}
      <section className="border-b border-border">
        <div className="container py-16 text-center">
          <h2 className="text-3xl font-extrabold tracking-tightest text-foreground text-balance">
            Join 5,000+ project managers already levelling up
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Start free. No credit card required.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/courses">
                Browse courses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">See pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
