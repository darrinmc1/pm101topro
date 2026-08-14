import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Clock, Play } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LevelBadge } from "@/components/level-badge"
import { LevelRail } from "@/components/level-rail"
import {
  COURSES,
  METHODOLOGY_LABEL,
  getCourse,
} from "@/lib/content"

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const course = getCourse(slug)
  if (!course) return { title: "Course not found" }
  return { title: course.title, description: course.description }
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const course = getCourse(slug)
  if (!course) notFound()

  const totalMins = course.lessons.reduce((s, l) => s + l.durationMins, 0)
  const firstLesson = course.lessons[0]

  return (
    <div>
      <section className="relative border-b border-border">
        <div className="absolute inset-0 bg-dot-grid opacity-40" aria-hidden="true" />
        <div className="container relative py-12">
          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All courses
          </Link>

          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <LevelBadge level={course.level} />
                <Badge variant="outline">
                  {METHODOLOGY_LABEL[course.methodology]}
                </Badge>
                <Badge variant="success">Free course</Badge>
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tightest text-foreground">
                {course.title}
              </h1>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                {course.description}
              </p>
              <div className="mt-6 flex items-center gap-5 text-sm text-muted-foreground">
                <span>{course.lessons.length} lessons</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {totalMins} min total
                </span>
              </div>
              <Button asChild size="lg" className="mt-7">
                <Link href={`/learn/${course.slug}/${firstLesson.slug}`}>
                  Start first lesson free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="rounded-xl border border-border bg-surface p-5">
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Your level rail
              </p>
              <LevelRail completionPercent={0} currentLevel={course.level} />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Lessons
        </h2>
        <ol className="mt-6 flex flex-col gap-3">
          {course.lessons.map((lesson, i) => (
            <li key={lesson.slug}>
              <Link
                href={`/learn/${course.slug}/${lesson.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-raised font-mono text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate font-medium text-foreground">
                      {lesson.title}
                    </h3>
                    <Badge variant="success">Free</Badge>
                  </div>
                  {lesson.summary && (
                    <p className="mt-0.5 truncate text-sm text-muted-foreground">
                      {lesson.summary}
                    </p>
                  )}
                </div>
                <span className="hidden shrink-0 items-center gap-1.5 text-xs text-muted-foreground sm:flex">
                  <Clock className="h-3.5 w-3.5" />
                  {lesson.durationMins} min
                </span>
                <Play className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
