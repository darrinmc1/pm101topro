import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { LevelShowcase } from "@/components/home/level-showcase"
import { ToolTeaser } from "@/components/home/tool-teaser"

export const metadata: Metadata = {
  title: "pm101toPro – Project Management Training from Beginner to Pro",
  description:
    "Structured project management courses covering PMP, Agile, Scrum, and PMO — plus AI-powered tools to turn learning into real deliverables.",
}

const TESTIMONIALS = [
  {
    quote:
      "I went from zero PM experience to confidently running a cross-functional product launch in under three months. The level structure made it obvious what to learn next.",
    name: "Sarah K.",
    credential: "Associate PM, SaaS startup",
    initials: "SK",
  },
  {
    quote:
      "The AI document tools alone are worth it. I generated a full project charter in minutes and my sponsor was genuinely impressed. Saved me hours of blank-page panic.",
    name: "Marcus T.",
    credential: "IT Project Manager, Financial Services",
    initials: "MT",
  },
  {
    quote:
      "Finally a PM course that covers Agile AND traditional methods without pretending one is always better. Real-world nuance that I could apply immediately.",
    name: "Priya R.",
    credential: "Scrum Master & PMP Candidate",
    initials: "PR",
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
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            What learners say
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tightest text-foreground text-balance">
            Real results from real project managers
          </h2>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            From first-time PMs to seasoned practitioners — here's how pm101toPro has made a difference.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Card
                key={t.name}
                className="flex flex-col gap-5 border-border bg-background p-6"
              >
                <p className="flex-1 text-pretty leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.credential}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

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
    </>
  )
}
