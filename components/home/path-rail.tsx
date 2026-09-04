"use client"

import Link from "next/link"
import { Reveal } from "@/components/home/reveal"

const CHIPS = [
  { label: "Traditional", href: "/courses" },
  { label: "Agile", href: "/courses" },
  { label: "General practice", href: "/courses" },
] as const

const LESSONS = [
  {
    title: "What is a project?",
    href: "/learn/what-is-project-management/what-is-a-project",
    meta: "Written · 6 min · free",
  },
  {
    title: "Your first project charter",
    href: "/learn/what-is-project-management/your-first-charter",
    meta: "Written · 10 min",
  },
  {
    title: "Your first week as a PM",
    href: "/learn/getting-started-as-a-pm/your-first-week",
    meta: "Written · 7 min · free",
  },
  {
    title: "Reporting up",
    href: "/learn/working-with-stakeholders/reporting-up",
    meta: "Written · 7 min",
  },
] as const

export function PathRail() {
  return (
    <section className="border-b border-border py-16 md:py-20">
      <div className="container">
        <Reveal>
          <p className="text-sm font-medium text-accent-secondary">Written archive</p>
          <h2 className="mt-2 max-w-xl text-3xl font-bold tracking-tightest text-foreground">
            Lessons you can open, not a catalog of blanks.
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Traditional and Agile paths. PMP vocabulary exists in the library —
            this is still not a PMI certification.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {CHIPS.map((chip, i) => (
            <Reveal key={chip.label} className={`stagger-${i + 1}`}>
              <Link
                href={chip.href}
                className="inline-flex rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-foreground transition-colors hover:border-accent/50 hover:bg-surface-raised"
              >
                {chip.label}
              </Link>
            </Reveal>
          ))}
        </div>

        <ol className="mt-8 grid gap-3 sm:grid-cols-2">
          {LESSONS.map((lesson, i) => (
            <li key={lesson.href}>
              <Reveal className={`stagger-${Math.min(i + 1, 4)}`}>
                <Link
                  href={lesson.href}
                  className="block rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 hover:bg-surface-raised"
                >
                  <p className="text-xs text-muted-foreground">{lesson.meta}</p>
                  <p className="mt-1 text-base font-semibold text-foreground">{lesson.title}</p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
