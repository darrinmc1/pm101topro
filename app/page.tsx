import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { LevelShowcase } from "@/components/home/level-showcase"
import { ToolTeaser } from "@/components/home/tool-teaser"
import { EmailSignup } from "@/components/email-signup"

export const metadata: Metadata = {
  title: "pm101toPro – Project Management Training for Every Methodology",
  description:
    "Written courses for PMP, Agile, Scrum, and PMO work, plus tools that draft the documents. No credential at the end.",
}

const METHODOLOGIES = [
  {
    label: "PMP Certification",
    href: "/courses?methodology=pmp",
    description:
      "PMBOK-aligned courses: process groups, domains, and the scenarios the exam actually asks about.",
  },
  {
    label: "Agile Project Management",
    href: "/courses?methodology=agile",
    description:
      "Iterative delivery when the requirements are still moving. Includes scale, kanban, and the Scrum courses.",
  },
  {
    label: "Scrum Framework",
    href: "/courses?methodology=scrum",
    description:
      "Sprints, events, and the Scrum Master role. Two courses: the basics, then facilitating the room.",
  },
  {
    label: "PMO Setup & Management",
    href: "/courses?methodology=pmo",
    description:
      "Mandate, model, reporting, and the portfolio work of running an office. Exam prep is a separate filter.",
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
            PMP, Agile, Scrum, or a PMO.
          </h2>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Each card opens the courses for that way of working. Exam prep stays on PMP. Office setup stays on PMO.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {METHODOLOGIES.map((m) => (
              <Link key={m.label} href={m.href} className="group">
                <Card className="flex h-full flex-col border-border bg-surface p-6 transition-colors hover:border-accent/50">
                  <h3 className="text-base font-bold text-foreground">{m.label}</h3>
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
      <EmailSignup source="homepage" />
    </>
  )
}
