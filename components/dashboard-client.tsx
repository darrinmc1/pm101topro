"use client"

import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  Flame,
  GraduationCap,
  PlayCircle,
  Plus,
} from "lucide-react"
import { COURSES, LEVEL_LABEL } from "@/lib/content"
import type { Course } from "@/lib/content"
import { useProgress } from "@/lib/progress"
import { LevelBadge } from "@/components/level-badge"
import { ProgressBar } from "@/components/progress-bar"
import { CourseCard } from "@/components/course-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PmWisdom } from "@/components/pm-wisdom"

const SAVED_DOCUMENTS = [
  { id: "doc-1", docTypeId: "project-charter", docTypeName: "Project Charter", title: "Website Relaunch - June", createdAt: "2 days ago" },
  { id: "doc-2", docTypeId: "status-report", docTypeName: "Status Report", title: "Q2 Platform Migration", createdAt: "5 days ago" },
  { id: "doc-3", docTypeId: "risk-register", docTypeName: "Risk Register", title: "Cloud Migration Risks", createdAt: "1 week ago" },
]

export function DashboardClient() {
  const { getAllProgress, getCourseProgress } = useProgress()

  // Convert raw progress to course data
  const allProgress = getAllProgress()
  const allCourseData = COURSES.map((c) => ({
    course: c,
    ...getCourseProgress(c.slug, c.lessons.length),
  }))

  const inProgress = allCourseData
    .filter((p) => p.percent > 0 && p.percent < 100)
    .sort((a, b) => b.percent - a.percent)

  const completed = allCourseData.filter((p) => p.percent === 100)

  const startedSlugs = new Set(Object.keys(allProgress))
  const recommended = COURSES.filter((c) => !startedSlugs.has(c.slug)).slice(0, 3)

  const lessonsCompleted = allCourseData.reduce((sum, p) => sum + p.completed, 0)
  const coursesInProgress = inProgress.length
  const coursesCompleted = completed.length

  const statCards = [
    { icon: BookOpen, label: "Lessons completed", value: lessonsCompleted },
    { icon: PlayCircle, label: "Courses in progress", value: coursesInProgress },
    { icon: GraduationCap, label: "Courses completed", value: coursesCompleted },
    { icon: FileText, label: "Documents created", value: SAVED_DOCUMENTS.length },
    { icon: Flame, label: "Day streak", value: Object.keys(allProgress).length > 0 ? "🔥" : " - " },
  ]

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
      <p className="mt-2 text-muted-foreground">
        Track your learning progress, pick up where you left off, and see what&apos;s next.
      </p>

      {/* Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* In progress */}
      {inProgress.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">Continue learning</h2>
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
                      <h3 className="mt-2 font-semibold text-foreground group-hover:text-accent transition-colors">
                        {p.course.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                        {p.completed} of {p.total} lessons
                      </p>
                    </div>
                    <span className="shrink-0 text-2xl font-bold tabular-nums text-accent">
                      {p.percent}%
                    </span>
                  </div>
                  <div className="mt-3">
                    <ProgressBar percent={p.percent} />
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {/* Recommended */}
      {recommended.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">Recommended for you</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Courses to get started with.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {recommended.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </section>
      )}

      {/* Saved documents */}
      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">Saved documents</h2>
          <Link href="/tools" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            New
          </Link>
        </div>
        <Card className="mt-5">
          <CardContent className="divide-y divide-border p-0">
            {SAVED_DOCUMENTS.map((doc) => (
              <Link
                key={doc.id}
                href={`/tools/${doc.docTypeId}`}
                className="flex items-center gap-3 p-4 transition-colors active:scale-[0.96] transition-transform hover:bg-surface-raised"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <FileText className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-foreground">{doc.title}</span>
                  <span className="block text-xs text-muted-foreground">{doc.docTypeName} · {doc.createdAt}</span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              </Link>
            ))}
            <Link
              href="/tools"
              className="flex items-center gap-3 p-4 text-sm font-medium text-accent transition-colors active:scale-[0.96] transition-transform hover:bg-surface-raised"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-dashed border-border">
                <Plus className="h-4 w-4" />
              </span>
              Generate a new document
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Completed */}
      {completed.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">Completed courses</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {completed.map((p) => (
              <Link
                key={p.course.slug}
                href={`/courses/${p.course.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground transition-colors active:scale-[0.96] transition-transform hover:bg-surface-raised"
              >
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {p.course.title}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* PM Wisdom */}
      <section className="mt-12">
        <div className="mx-auto max-w-lg">
          <PmWisdom />
        </div>
      </section>
    </div>
  )
}
