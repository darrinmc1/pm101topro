import Link from "next/link"

import { LevelBadge } from "@/components/level-badge"
import { LEVEL_ORDER, getCoursesByLevel } from "@/lib/content"

const SAMPLE_TOPICS: Record<string, string[]> = {
  "101": ["What is a project?", "The PM lifecycle", "Your first charter"],
  intermediate: ["WBS deep dive", "Estimating", "Stakeholder mapping"],
  advanced: ["Risk frameworks", "Agile at scale", "PI planning"],
  pmo: ["Governance", "Portfolio management", "PMP exam prep"],
}

export function LevelShowcase() {
  return (
    <section className="border-b border-border py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tightest text-foreground">
            Four levels. One journey.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Follow the level rail from 101 all the way to running a PMO.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LEVEL_ORDER.map((level) => {
            const courses = getCoursesByLevel(level)
            const lessonCount = courses.reduce(
              (sum, c) => sum + c.lessons.length,
              0,
            )
            return (
              <Link
                key={level}
                href={`/courses?level=${level}`}
                className="group glass flex flex-col rounded-xl p-6 transition-colors hover:border-accent/40"
              >
                <LevelBadge level={level} className="self-start" />
                <p className="mt-4 text-sm text-muted-foreground">
                  {courses.length} courses · {lessonCount} lessons
                </p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-foreground">
                  {SAMPLE_TOPICS[level].map((topic) => (
                    <li key={topic} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {topic}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 text-sm font-medium text-accent group-hover:text-accent-secondary">
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
