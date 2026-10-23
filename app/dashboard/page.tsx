import type { Metadata } from "next"
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

import {
  getInProgressCourses,
  getCompletedCourses,
  getRecommendedCourses,
  getDashboardStats,
  SAVED_DOCUMENTS,
} from "@/lib/dashboard"
import { METHODOLOGY_LABEL } from "@/lib/content"
import { LevelBadge } from "@/components/level-badge"
import { ProgressBar } from "@/components/progress-bar"
import { CourseCard } from "@/components/course-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Dashboard - pm101toPro",
  description: "Your learning progress, saved documents, and recommended next steps.",
}

const STAT_ICONS = {
  lessons: BookOpen,
  progress: PlayCircle,
  completed: GraduationCap,
  documents: FileText,
  streak: Flame,
}

export default function DashboardPage() {
  const inProgress = getInProgressCourses()
  const completed = getCompletedCourses()
  const recommended = getRecommendedCourses(3)
  const stats = getDashboardStats()

  const statCards = [
    { icon: STAT_ICONS.lessons, label: "Lessons completed", value: stats.lessonsCompleted },
    { icon: STAT_ICONS.progress, label: "Courses in progress", value: stats.coursesInProgress },
    { icon: STAT_ICONS.completed, label: "Courses completed", value: stats.coursesCompleted },
    { icon: STAT_ICONS.documents, label: "Documents created", value: stats.documentsCreated },
    { icon: STAT_ICONS.streak, label: "Day streak", value: stats.dayStreak },
  ]

  return (
    <div className="container py-10 md:py-14">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-sm text-accent">Welcome back</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Alex Morgan
          </h1>
          <p className="mt-2 text-muted-foreground">
            You&apos;re on a {stats.dayStreak}-day streak. Keep the momentum going.
          </p>
        </div>
        <Button asChild>
          <Link href="/courses">
            Browse courses
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <section className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {statCards.map((s) => {
          const Icon = s.icon
          return (
            <Card key={s.label}>
              <CardContent className="flex flex-col gap-2 p-5">
                <Icon className="h-5 w-5 text-accent" />
                <span className="text-2xl font-bold tabular-nums text-foreground">{s.value}</span>
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </CardContent>
            </Card>
          )
        })}
      </section>

      {/* Continue learning */}
      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">Continue learning</h2>
          <Link
            href="/courses"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            All courses
          </Link>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {inProgress.map((p) => (
            <Card key={p.course.slug} className="flex flex-col">
              <CardContent className="flex flex-1 flex-col gap-4 p-5">
                <div className="flex items-center gap-2">
                  <LevelBadge level={p.course.level} />
                  <span className="text-xs text-muted-foreground">
                    {METHODOLOGY_LABEL[p.course.methodology]}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-balance">{p.course.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {p.completed} of {p.total} lessons
                  </p>
                </div>
                <ProgressBar value={p.percent} className="mt-auto" />
                <Button asChild size="sm" className="mt-1 w-full">
                  <Link href={`/learn/${p.course.slug}/${p.resumeLesson.slug}`}>
                    <PlayCircle className="mr-1 h-4 w-4" />
                    Resume: {p.resumeLesson.title}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Two-column: recommended + saved documents */}
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        {/* Recommended */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">Recommended for you</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Based on the tracks you&apos;ve started.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {recommended.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </section>

        {/* Saved documents */}
        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Saved documents</h2>
            <Link
              href="/tools"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
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
                    <span className="block truncate text-sm font-medium text-foreground">
                      {doc.title}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {doc.docTypeName} · {doc.createdAt}
                    </span>
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
      </div>

      {/* Completed */}
      {completed.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">Completed</h2>
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
    </div>
  )
}
