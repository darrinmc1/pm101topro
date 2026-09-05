"use client"

import Link from "next/link"
import { LevelBadge } from "@/components/level-badge"
import { LEVEL_ORDER, getCoursesByLevel } from "@/lib/content"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const SAMPLE_TOPICS: Record<string, string[]> = {
  "101":         ["What is a project?", "The PM lifecycle", "Your first charter"],
  intermediate:  ["WBS deep dive", "Estimating", "Stakeholder mapping"],
  advanced:      ["Risk frameworks", "Agile at scale", "PI planning"],
  pmo:           ["Governance", "Portfolio management", "PMP exam prep"],
}

// Alternating slide directions for visual rhythm
const DIRECTIONS = ["reveal-left", "reveal-up", "reveal-up", "reveal-right"] as const
const STAGGER    = ["stagger-1", "stagger-2", "stagger-3", "stagger-4"] as const

export function LevelShowcase() {
  const headingRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })
  const gridRef    = useScrollReveal<HTMLDivElement>({ threshold: 0.08 })

  return (
    <section className="border-b border-border py-20">
      <div className="container">

        <div ref={headingRef} className="reveal-up mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-success">
            Free · all four levels
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tightest text-foreground">
            Four levels. One journey.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Follow the level rail from 101 all the way to running a PMO. Courses stay free.
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal-group mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {LEVEL_ORDER.map((level, i) => {
            const courses     = getCoursesByLevel(level)
            const lessonCount = courses.reduce((sum, c) => sum + c.lessons.length, 0)
            return (
              <Link
                key={level}
                href={`/courses?level=${level}`}
                className={`group glass card-lift flex flex-col rounded-xl p-6
                            ${DIRECTIONS[i]} ${STAGGER[i]}`}
              >
                <LevelBadge level={level} className="self-start" />

                <p className="mt-4 text-sm text-muted-foreground">
                  {courses.length} courses · {lessonCount} lessons
                </p>

                <ul className="mt-4 flex-1 space-y-2 text-sm text-foreground">
                  {SAMPLE_TOPICS[level].map((topic) => (
                    <li key={topic} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent
                                       transition-transform group-hover:scale-150" />
                      {topic}
                    </li>
                  ))}
                </ul>

                <span className="mt-5 text-sm font-medium text-accent
                                 transition-colors group-hover:text-accent-secondary">
                  Explore level →
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
