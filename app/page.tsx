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
  title: "pm101toPro – Project Management Training for Every Methodology",
  description:
    "Master PMP, Agile, Scrum, and PMO best practices with structured courses, AI-powered tools, and a clear path from beginner to pro.",
}

const METHODOLOGIES = [
  {
    label: "PMP Certification",
    href: "/courses?methodology=pmp",
    description:
      "Structured learning aligned with the PMBOK framework. Build the knowledge and vocabulary you need to lead projects and pursue PMP certification.",
    tag: "High-demand",
  },
  {
    label: "Agile Project Management",
    href: "/courses?methodology=agile",
    description:
      "Iterative delivery, adaptive planning, and continuous improvement. Learn how Agile principles apply to real teams and real projects.",
    tag: "Most popular",
  },
  {
    label: "Scrum Framework",
    href: "/courses?methodology=scrum",
    description:
      "Sprints, standups, retrospectives, and backlogs. Get hands-on with the Scrum roles and ceremonies used by software and product teams worldwide.",
    tag: "Practical",
  },
  {
    label: "PMO Setup & Management",
    href: "/courses?methodology=pmo",
    description:
      "From establishing governance to reporting to the board. Learn how to build and run a Project Management Office that actually adds value.",
    tag: "Advanced",
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <LevelShowcase />

      {/* Methodology spotlight */}
      <section className="border-t border-border">
        <div className="container py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Methodologies</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tightest text-foreground text-balance">
            One platform. Every methodology.
          </h2>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Whether you're preparing for PMP certification, adopting Agile, running Scrum sprints, or standing up a PMO
            — pm101toPro has a structured path for you.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {METHODOLOGIES.map((m) => (
              <Link key={m.label} href={m.href} className="group">
                <Card className="flex h-full flex-col border-border bg-surface p-6 transition-colors hover:border-accent/50">
                  <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                    {m.tag}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-foreground">{m.label}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {m.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    Explore courses
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ToolTeaser />
    </>
  )
}
