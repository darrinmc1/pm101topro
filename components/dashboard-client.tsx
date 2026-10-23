"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, CheckCircle2, GraduationCap, PlayCircle } from "lucide-react"
import { COURSES } from "@/lib/content"
import { useProgress } from "@/lib/progress"
import { LevelBadge } from "@/components/level-badge"
import { ProgressBar } from "@/components/progress-bar"
import { CourseCard } from "@/components/course-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PmWisdom } from "@/components/pm-wisdom"

export function DashboardClient() {
  const { getAllProgress, getCourseProgress, loaded } = useProgress()

  if (!loaded) {
    return (
      <div className="container py-10 md:py-14">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
        <p className="mt-2 text-muted-foreground">Reading lessons marked complete in this browser.</p>
      </div>
    )
  }

  const allProgress = getAllProgress()
  const allCourseData = COURSES.map((course) => ({
    course,
    ...getCourseProgress(course.slug, course.lessons.length),
  }))

  const inProgress = allCourseData
    .filter((p) => p.percent > 0 && p.percent < 100)
    .sort((a, b) => b.percent - a.percent)

  const completed = allCourseData.filter((p) => p.percent === 100)
  const startedSlugs = new Set(Object.keys(allProgress).filter((slug) => (allProgress[slug] ?? 0) > 0))
  const notStarted = COURSES.filter((c) => !startedSlugs.has(c.slug)).slice(0, 3)
  const lessonsCompleted = allCourseData.reduce((sum, p) => sum + p.completed, 0)

  const statCards = [
    { icon: BookOpen, label: "Lessons marked complete", value: lessonsCompleted },
    { icon: PlayCircle, label: "Courses in progress", value: inProgress.length },
    { icon: GraduationCap, label: "Courses completed", value: completed.length },
  ]

  return (
    <div className="container py-10 md:py-14">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Dashboard</h1>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Counts come from lessons you marked complete in this browser. Signing in does not copy them to an account, and this page does not invent a streak.
          </p>
        </div>
        <Button asChild>
          <Link href="/courses">
            Browse courses
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {statCards.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} className="border-border bg-surface">
              <CardContent className="flex items-center gap-3 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="text-xl font-bold tabular-nums text-foreground">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">Continue learning</h2>
        {inProgress.length > 0 ? (
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {inProgress.map((p) => {
              const resumeLesson = p.course.lessons[Math.min(p.completed, p.course.lessons.length - 1)]
              return (
                <Link
                  key={p.course.slug}
                  href={`/learn/${p.course.slug}/${resumeLesson.slug}`}
                  className="group rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <LevelBadge level={p.course.level} />
                      <h3 className="mt-2 font-semibold text-foreground transition-colors group-hover:text-accent">
                        {p.course.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {p.completed} of {p.total} lessons
                      </p>
                    </div>
                    <span className="shrink-0 text-2xl font-bold tabular-nums text-accent">
                      {p.percent}%
                    </span>
                  </div>
                  <div className="mt-3">
                    <ProgressBar value={p.percent} />
                  </div>
                </Link>
              )
            })}
          </div>
        ) : (
          <p className="mt-3 text-sm text-muted-foreground">
            Nothing in progress in this browser. Open a lesson and mark it complete.
          </p>
        )}
      </section>

      {notStarted.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">Not started here</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            The next courses in the catalogue. This is not a recommendation.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {notStarted.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </section>
      )}

      {completed.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">Completed courses</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {completed.map((p) => (
              <Link
                key={p.course.slug}
                href={`/courses/${p.course.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground transition-colors hover:bg-surface-raised"
              >
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {p.course.title}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-12">
        <div className="mx-auto max-w-lg">
          <PmWisdom />
        </div>
      </section>
    </div>
  )
}
