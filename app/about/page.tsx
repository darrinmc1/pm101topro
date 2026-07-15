import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Compass, GraduationCap, Layers, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About",
  description:
    "pm101toPro exists to take anyone from their first project to running the room — practical project management for every methodology.",
}

const VALUES = [
  {
    icon: Compass,
    title: "Practical over theoretical",
    body: "We teach what you actually use on a live project, not exam trivia. Every concept links to a real deliverable.",
  },
  {
    icon: Layers,
    title: "Every methodology",
    body: "Traditional, Agile, PMP and general practice — because real teams rarely fit into one neat box.",
  },
  {
    icon: GraduationCap,
    title: "101 to Pro",
    body: "A clear path from your first charter to running a PMO, with a level rail that shows exactly how far you've come.",
  },
  {
    icon: Sparkles,
    title: "AI that does the busywork",
    body: "Turn what you've learned into professional documents in minutes, so you can focus on leading the project.",
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">About us</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tightest text-foreground text-balance">
            From your first project to running the room
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Most people fall into project management sideways — handed a project, a nervous sponsor, and no roadmap.
            pm101toPro is the roadmap. We turn scattered, jargon-heavy PM knowledge into a structured path anyone can
            follow, backed by AI tools that produce the documents real projects demand.
          </p>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {VALUES.map((value) => {
            const Icon = value.icon
            return (
              <Card key={value.title} className="border-border bg-surface p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container flex flex-col items-start gap-4 py-14 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Ready to level up?</h2>
            <p className="mt-2 text-muted-foreground">Start with a free lesson from any course.</p>
          </div>
          <Button asChild size="lg">
            <Link href="/courses">
              Browse courses
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
