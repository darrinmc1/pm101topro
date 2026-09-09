import Link from "next/link"
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const BENEFITS = [
  "Free starter lessons — no credit card required",
  "PMP, Agile, Scrum & PMO all in one place",
  "AI tools that build real project documents",
  "Clear path from beginner to PMO leader",
]

export function Hero() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
            Practical project management training
          </p>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tightest text-foreground text-balance sm:text-5xl md:text-6xl">
            Go from your first project to{" "}
            <span className="text-accent">running the room</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty max-w-2xl mx-auto">
            Step-by-step courses in PMP, Agile, Scrum, and PMO — built for people who learn by doing, not by memorising slides.
          </p>

          <ul className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center">
            {BENEFITS.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="gap-2 px-8 text-base font-semibold">
              <Link href="/courses">
                <PlayCircle className="h-5 w-5" />
                Start Free Course
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 px-8 text-base font-semibold">
              <Link href="/pricing">
                View Pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Join thousands of project managers levelling up their careers
          </p>
        </div>
      </div>
    </section>
  )
}
