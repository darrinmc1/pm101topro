import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, BookOpen, Clock, GraduationCap, Lock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { LevelBadge } from "@/components/level-badge"
import { createClient } from "@/lib/supabase/server"
import { auth } from "@clerk/nextjs/server"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  const { data: course } = await supabase
    .from("courses")
    .select("title, description")
    .eq("slug", slug)
    .single()
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
  const supabase = await createClient()
  const { userId } = await auth()

  const { data: course } = await supabase
    .from("courses")
    .select("*")
    .eq("slug", slug)
    .single()

  if (!course) notFound()

  const { data: lessons } = await supabase
    .from("lessons")
    .select("id, title, slug, order_index, is_free")
    .eq("course_id", course.id)
    .order("order_index", { ascending: true })

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    url: `https://pm101topro.com/courses/${course.slug}`,
    provider: {
      "@type": "Organization",
      name: "pm101toPro",
      url: "https://pm101topro.com",
    },
    educationalLevel: course.level ?? "Beginner",
    teaches: course.methodology ?? "Project Management",
    numberOfCredits: lessons?.length ?? 0,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      instructor: {
        "@type": "Organization",
        name: "pm101toPro",
      },
    },
    isAccessibleForFree: course.is_free ?? false,
    inLanguage: "en",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />
      <div className="container max-w-3xl py-12">
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
            {course.methodology && (
              <Badge variant="outline" className="capitalize">
                {course.methodology}
              </Badge>
            )}
            {course.is_free && (
              <Badge className="bg-accent/10 text-accent hover:bg-accent/20">Free</Badge>
            )}
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tightest text-foreground text-balance sm:text-4xl">
            {course.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            {course.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
            {lessons && (
              <span className="flex items-center gap-1.5">
                <BookOpen className="h-4 w-4" />
                {lessons.length} lesson{lessons.length !== 1 ? "s" : ""}
              </span>
            )}
            {course.estimated_hours && (
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {course.estimated_hours}h estimated
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4" />
              {course.level ?? "All levels"}
            </span>
          </div>
        </div>

        {lessons && lessons.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-bold text-foreground">Lessons</h2>
            <div className="mt-4 space-y-2">
              {lessons.map((lesson, index) => {
                const isAccessible = course.is_free || lesson.is_free || !!userId
                return (
                  <Card
                    key={lesson.id}
                    className="flex items-center justify-between border-border bg-surface p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
                        {index + 1}
                      </span>
                      <span className="font-medium text-foreground">{lesson.title}</span>
                    </div>
                    {isAccessible ? (
                      <Button asChild size="sm" variant="ghost">
                        <Link href={`/learn/${course.slug}/${lesson.slug}`}>Start</Link>
                      </Button>
                    ) : (
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        <div className="mt-10">
          {userId ? (
            lessons && lessons.length > 0 ? (
              <Button asChild size="lg">
                <Link href={`/learn/${course.slug}/${lessons[0].slug}`}>
                  Start course
                </Link>
              </Button>
            ) : null
          ) : (
            <Button asChild size="lg">
              <Link href="/sign-up">Sign up to start</Link>
            </Button>
          )}
        </div>
      </div>
    </>
  )
}
