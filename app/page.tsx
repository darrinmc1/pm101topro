import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { LevelShowcase } from "@/components/home/level-showcase"
import { ToolTeaser } from "@/components/home/tool-teaser"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export const metadata: Metadata = {
  title: "pm101toPro – Project Management Training from Beginner to Pro",
  description:
    "Structured project management courses covering PMP, Agile, Scrum and PMO — plus AI-powered tools that turn your learning into professional documents.",
}

const TESTIMONIALS = [
  {
    quote:
      "I went from zero PM experience to confidently leading a cross-functional product launch in under six months. The level structure kept me on track the whole way.",
    name: "Sarah K.",
    role: "Associate PM, SaaS startup",
    result: "Promoted to PM lead within 8 months",
  },
  {
    quote:
      "The AI document tools alone are worth it. I generated a full project charter in minutes that my sponsor actually approved first time — something that used to take me days.",
    name: "Marcus T.",
    role: "IT Project Manager, Financial Services",
    result: "Saved 3+ hours per project kickoff",
  },
  {
    quote:
      "I'd tried other PM courses but they were all theory and exam prep. pm101toPro taught me what I actually needed to run real projects. Passed my PMP on the first attempt too.",
    name: "Priya R.",
    role: "Senior PM, Healthcare",
    result: "PMP certified on first attempt",
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
            Success stories
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tightest text-foreground text-balance">
            PMs who made the leap
          </h2>
          <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Real results from people who went from uncertain to unstoppable.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Card
                key={t.name}
                className="flex flex-col border-border bg-background p-6"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="flex-1 text-pretty leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                  <p className="mt-2 text-sm font-medium text-accent">
                    ✓ {t.result}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
