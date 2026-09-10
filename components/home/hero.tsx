import Link from "next/link"
import { ArrowRight, Brain, Award, Infinity, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const BENEFITS = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    body: "Generate professional PM documents instantly and reinforce concepts with AI-guided practice.",
  },
  {
    icon: Award,
    title: "Industry-Recognised Certifications",
    body: "Courses aligned to PMP, Agile, Scrum, and PMO standards — credentials employers trust.",
  },
  {
    icon: Infinity,
    title: "Lifetime Access",
    body: "Buy once, revisit anytime. Content updates are included so your skills stay current.",
  },
  {
    icon: Zap,
    title: "Practical, Not Theoretical",
    body: "Every lesson links to a real deliverable. Learn by doing, not by memorising slides.",
  },
]

export function Hero() {
  return (
    <section className="border-b border-border bg-background">
      <div className="container py-20 md:py-28">
        {/* Headline block */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Project management training
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tightest text-foreground text-balance sm:text-5xl md:text-6xl">
            From your first project to running the room
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            Structured courses, AI-powered tools, and a clear progression path — everything you need
            to go from PM beginner to confident professional.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/courses">
                Browse courses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">How it works</Link>
            </Button>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-lg border border-border bg-surface p-6 flex flex-col gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
