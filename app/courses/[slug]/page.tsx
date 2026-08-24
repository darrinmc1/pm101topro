import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, BookOpen, BarChart2, Tag } from "lucide-react"
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

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    url: `https://pm101topro.com/courses/${course.slug}`,
    provider: {
      "@type": "Organization",
      name: "pm101toPro",
      sameAs: "https://pm101topro.com",
    },
    educationalLevel: course.level,
    teaches: course.methodology,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: course.duration ? `PT${course.duration}` : undefined,
      instructor: {
        "@type": "Organization",
        name: "pm101toPro",
      },
    },
    educationalCredentialAwarded: {
      "@type": "EducationalOccupationalCredential",
      name: `${course.title} Completion Certificate`,
      credentialCategory: "certificate",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <article className="container max-w-3xl py-12">
        <Link
          href="/courses"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          All courses
        </Link>

        <div className="mt-6">
          <div className="flex flex-wrap items-center gap-2">
            <LevelBadge level={course.level} />
            <Badge variant="outline">{course.methodology}</Badge>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tightest text-foreground text-balance sm:text-4xl">
            {course.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            {course.description}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            {course.duration && (
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {course.duration}
              </span>
            )}
            {course.lessons && (
              <span className="flex items-center gap-1.5">
                <BookOpen className="h-4 w-4" />
                {course.lessons} lessons
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <BarChart2 className="h-4 w-4" />
              {course.level}
            </span>
          </div>
        </div>

        {course.topics && course.topics.length > 0 && (
          <Card className="mt-8 border-border bg-surface p-6">
            <h2 className="text-lg font-bold text-foreground">What you&apos;ll learn</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {course.topics.map((topic: string) => (
                <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Tag className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                  {topic}
                </li>
              ))}
            </ul>
          </Card>
        )}

        <div className="mt-8 flex gap-3">
          <Button asChild>
            <Link href={`/learn/${course.slug}/1`}>Start learning</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/courses">Browse all courses</Link>
          </Button>
        </div>
      </article>
    </>
  )
}
