"use client"

import { useMemo, useState } from "react"

import { cn } from "@/lib/utils"
import {
  COURSES,
  LEVELS,
  METHODOLOGIES,
  type Level,
  type Methodology,
} from "@/lib/content"
import { CourseCard } from "@/components/course-card"

type LevelFilter = Level | "all"
type MethodologyFilter = Methodology | "all"

export function CoursesBrowser({
  initialLevel = "all",
}: {
  initialLevel?: LevelFilter
}) {
  const [level, setLevel] = useState<LevelFilter>(initialLevel)
  const [methodology, setMethodology] = useState<MethodologyFilter>("all")

  const filtered = useMemo(
    () =>
      COURSES.filter(
        (c) =>
          (level === "all" || c.level === level) &&
          (methodology === "all" || c.methodology === methodology),
      ),
    [level, methodology],
  )

  return (
    <div>
      <div className="flex flex-col gap-5 rounded-xl border border-border bg-surface p-5">
        <FilterRow label="Level">
          <FilterPill active={level === "all"} onClick={() => setLevel("all")}>
            All
          </FilterPill>
          {LEVELS.map((l) => (
            <FilterPill
              key={l.value}
              active={level === l.value}
              onClick={() => setLevel(l.value)}
            >
              {l.label}
            </FilterPill>
          ))}
        </FilterRow>

        <FilterRow label="Methodology">
          <FilterPill
            active={methodology === "all"}
            onClick={() => setMethodology("all")}
          >
            All
          </FilterPill>
          {METHODOLOGIES.map((m) => (
            <FilterPill
              key={m.value}
              active={methodology === m.value}
              onClick={() => setMethodology(m.value)}
            >
              {m.label}
            </FilterPill>
          ))}
        </FilterRow>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        {filtered.length} {filtered.length === 1 ? "course" : "courses"}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-xl border border-dashed border-border bg-surface p-12 text-center text-muted-foreground">
          No courses match these filters yet.
        </div>
      )}
    </div>
  )
}

function FilterRow({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <span className="w-28 shrink-0 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  )
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-accent bg-accent/15 text-accent"
          : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground",
      )}
    >
      {children}
    </button>
  )
}
