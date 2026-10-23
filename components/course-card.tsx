import Link from "next/link"
import { ArrowRight, BookOpen, Clock } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LevelBadge } from "@/components/level-badge"
import { METHODOLOGY_LABEL, type Course } from "@/lib/content"

export function CourseCard({ course }: { course: Course }) {
  const hasFree = course.lessons.some((l) => l.isFree)
  const totalMins = course.lessons.reduce((sum, l) => sum + l.durationMins, 0)

  return (
    <Card className="group flex flex-col overflow-hidden transition-colors hover:border-accent/50">
      <div className="relative flex h-32 items-center justify-center overflow-hidden border-b border-border bg-line-grid">
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <span className="relative font-mono text-4xl font-bold tracking-tightest text-accent/70">
          {course.level === "101" ? "101" : course.level === "pmo" ? "PRO" : course.level.slice(0, 3).toUpperCase()}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <LevelBadge level={course.level} />
          <Badge variant="outline">{METHODOLOGY_LABEL[course.methodology]}</Badge>
          {hasFree && <Badge variant="success">Free lesson</Badge>}
        </div>

        <h3 className="text-lg font-semibold leading-tight tracking-tight text-foreground">
          {course.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {course.description}
        </p>

        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5" />
            {course.lessons.length} lessons
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {totalMins} min
          </span>
        </div>

        <Link
          href={`/courses/${course.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-secondary"
        >
          Start course
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </Card>
  )
}
