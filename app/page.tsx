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
  title: "pm101toPro – Project Management from 101 to Pro",
  description:
    "Structured project management learning for every methodology – Traditional, Agile, PMP and beyond – backed by AI tools that produce real project documents.",
}

const TESTIMONIALS = [
  {
    quote:
      "I was handed my first project with zero training. pm101toPro gave me a clear path and the AI tools meant I had a professional charter ready in minutes, not days.",
    name: "Sarah K.",
    role: "Accidental PM, SaaS startup",
    rating: 5,
  },
  {
    quote:
      "The level rail is genius. I finally understand where I sit between 101 and Pro and exactly what I need to learn next. No other platform makes that this clear.",
    name: "Marcus T.",
    role: "Junior Project Manager, consulting firm",
    rating: 5,
  },
  {
    quote:
      "I've done PMP prep courses that cost ten times more and taught me half as much. The practical focus here is refreshing – every lesson connects to something I actually do at work.",
    name: "Priya M.",
    role: "Senior PM, financial services",
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <LevelShowcase />
      <ToolTeaser />

      {/* Testimonials */}
      <section className="border-t border-border bg-surface">
        <div className="container py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">What learners say</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tightest text-foreground text-balance">
            Real PMs. Real projects. Real results.
          </h2>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            From accidental PMs to seasoned practitioners – here's what people are saying during our soft launch.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} className="flex flex-col border-border bg-background p-6">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <div className="flex -space-x-2">
              {["S", "M", "P", "J", "A"].map((initial) => (
                <div
                  key={initial}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-accent/20 text-xs font-bold text-accent"
                >
                  {initial}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Join <span className="font-semibold text-foreground">hundreds of PMs</span> already levelling up with pm101toPro
            </p>
            <Button asChild size="sm" className="sm:ml-auto">
              <Link href="/courses">
                Start learning free <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
