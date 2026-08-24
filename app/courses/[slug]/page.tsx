import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, BookOpen, Clock, GraduationCap, Lock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { LevelBadge } from "@/components/level-badge"
import { COURSES, getCourse } from "@/lib/courses"

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
  return {
    title: course.title,
    description: course.description,
  }
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const course = getCourse(slug)
  if (!course) notFound()

  const totalMins = course.lessons.reduce((sum, l) => sum + l.durationMins, 0)

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    url: `https://www.pm101topro.com/courses/${course.slug}`,
    provider: {
      "@type": "Organization",
      name: "pm101toPro",
      url: "https://www.pm101topro.com",
    },
    educationalLevel: course.level,
    timeRequired: `PT${totalMins}M`,
    numberOfCredits: course.lessons.length,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      instructor: {
        "@type": "Organization",
        name: "pm101toPro",
      },
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.pm101topro.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Courses",
        item: "https://www.pm101topro.com/courses",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: course.title,
        item: `https://www.pm101topro.com/courses/${course.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container max-w-3xl py-12">
        <Link
          href="/courses"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          All courses
        </Link>

        <div className="mt-6 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <LevelBadge level={course.level} />
            <Badge variant="outline">{course.methodology}</Badge>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tightest text-foreground text-balance sm:text-4xl">
            {course.title}
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            {course.description}
          </p>
          <div className="flex flex-wrap items-center gap-5 pt-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              {course.lessons.length} lessons
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {totalMins} min total
            </span>
          </div>
        </div>

        {/* Lessons */}
        <div className="mt-10 space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Lessons</h2>
          {course.lessons.map((lesson, idx) => {
            const isFree = idx === 0
            return (
              <Card
                key={lesson.slug}
                className="flex items-center justify-between border-border bg-surface p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{lesson.title}</p>
                    <p className="text-xs text-muted-foreground">{lesson.durationMins} min</p>
                  </div>
                </div>
                {isFree ? (
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/learn/${course.slug}/${lesson.slug}`}>
                      <GraduationCap className="mr-1.5 h-3.5 w-3.5" />
                      Start
                    </Link>
                  </Button>
                ) : (
                  <Lock className="h-4 w-4 text-muted-foreground" />
                )}
              </Card>
            )
          })}
        </div>

        <div className="mt-8">
          <Button asChild>
            <Link href={`/learn/${course.slug}/${course.lessons[0].slug}`}>
              Start first lesson
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}
