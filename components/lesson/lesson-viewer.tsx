"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Circle, PlayCircle } from "lucide-react"
import type { Course, Lesson } from "@/lib/content"
import { LEVEL_LABEL } from "@/lib/content"
import type { LessonBody } from "@/lib/lesson-body"
import { LevelRail } from "@/components/level-rail"
import { LevelBadge } from "@/components/level-badge"
import { LessonContent } from "@/components/lesson/lesson-content"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function readProgress(): Record<string, number> {
  if (typeof window === "undefined") return {}
  try {
    return JSON.parse(localStorage.getItem("pm101topro_progress") || "{}")
  } catch { return {} }
}

function writeProgress(progress: Record<string, number>) {
  try { localStorage.setItem("pm101topro_progress", JSON.stringify(progress)) } catch {}
}

export function LessonViewer({
  course,
  lesson,
  index,
  body,
}: {
  course: Course
  lesson: Lesson
  index: number
  body: LessonBody
}) {
  const [completed, setCompleted] = useState(false)
  const total = course.lessons.length
  const prev = index > 0 ? course.lessons[index - 1] : null
  const next = index < total - 1 ? course.lessons[index + 1] : null

  useEffect(() => {
    const prog = readProgress()
    const doneCount = prog[course.slug] ?? 0
    setCompleted(doneCount > index)
  }, [course.slug, index])

  const handleToggle = () => {
    setCompleted((c) => {
      const prog = readProgress()
      const current = prog[course.slug] ?? 0
      if (!c) {
        // Mark complete: update to at least this lesson
        prog[course.slug] = Math.max(current, index + 1)
      } else {
        // Unmark: set back to previous lesson
        prog[course.slug] = Math.min(current, index)
      }
      writeProgress(prog)
      return !c
    })
  }

  const doneCount = index + (completed ? 1 : 0)
  const coursePercent = Math.round((doneCount / total) * 100)

  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 lg:grid-cols-[300px_1fr] lg:px-6">
      {/* Sidebar */}
      <aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto">
        <div className="rounded-xl border border-border bg-surface p-5">
          <Link
            href={`/courses/${course.slug}`}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {course.title}
          </Link>

          <div className="mt-4 flex items-start gap-4">
            <LevelRail completionPercent={coursePercent} currentLevel={course.level} />
            <div className="min-w-0">
              <LevelBadge level={course.level} />
              <p className="mt-2 text-xs text-muted-foreground">
                {LEVEL_LABEL[course.level]} track
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">{coursePercent}% complete</p>
            </div>
          </div>

          <ol className="mt-6 space-y-1">
            {course.lessons.map((l, i) => {
              const isCurrent = l.slug === lesson.slug
              const isDone = i <= index || (isCurrent && completed)
              return (
                <li key={l.slug}>
                  <Link
                    href={`/learn/${course.slug}/${l.slug}`}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-2 py-2 text-sm transition-colors",
                      isCurrent
                        ? "bg-accent/10 text-foreground"
                        : "text-muted-foreground active:scale-[0.96] transition-transform hover:bg-surface-raised hover:text-foreground",
                    )}
                  >
                    {isDone ? (
                      <Check className="h-4 w-4 shrink-0 text-accent" />
                    ) : isCurrent ? (
                      <PlayCircle className="h-4 w-4 shrink-0 text-accent" />
                    ) : (
                      <Circle className="h-4 w-4 shrink-0 opacity-60" />
                    )}
                    <span className="line-clamp-1">{l.title}</span>
                  </Link>
                </li>
              )
            })}
          </ol>
        </div>
      </aside>

      {/* Main */}
      <main className="min-w-0">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span>
            Lesson {index + 1} of {total}
          </span>
          <span aria-hidden>·</span>
          <span>{lesson.durationMins} min</span>
          <span className="rounded-full bg-success/15 px-2 py-0.5 text-xs font-medium text-success">
            Free
          </span>
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground text-balance">
          {lesson.title}
        </h1>

        <div className="mt-8">
          <LessonContent body={body} />
        </div>

        {/* Complete + nav */}
        <div className="mt-12 border-t border-border pt-6">
          <Button
            onClick={handleToggle}
            variant={completed ? "secondary" : "default"}
            className="w-full sm:w-auto"
          >
            <Check className="mr-1 h-4 w-4" />
            {completed ? "Lesson completed" : "Mark lesson complete"}
          </Button>

          <div className="mt-6 flex items-center justify-between gap-4">
            {prev ? (
              <Button asChild variant="ghost" className="max-w-[45%] justify-start">
                <Link href={`/learn/${course.slug}/${prev.slug}`}>
                  <ArrowLeft className="mr-1 h-4 w-4 shrink-0" />
                  <span className="truncate">{prev.title}</span>
                </Link>
              </Button>
            ) : (
              <span />
            )}
            {next ? (
              <Button asChild variant="ghost" className="max-w-[45%] justify-end">
                <Link href={`/learn/${course.slug}/${next.slug}`}>
                  <span className="truncate">{next.title}</span>
                  <ArrowRight className="ml-1 h-4 w-4 shrink-0" />
                </Link>
              </Button>
            ) : (
              <Button asChild className="justify-end">
                <Link href="/courses">
                  Back to courses
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
