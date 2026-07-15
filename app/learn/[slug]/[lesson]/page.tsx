import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { LessonViewer } from "@/components/lesson/lesson-viewer"
import { COURSES, findLesson } from "@/lib/content"
import { getLessonBody } from "@/lib/lesson-body"

export function generateStaticParams() {
  return COURSES.flatMap((course) =>
    course.lessons.map((lesson) => ({ slug: course.slug, lesson: lesson.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; lesson: string }>
}): Promise<Metadata> {
  const { slug, lesson } = await params
  const found = findLesson(slug, lesson)
  if (!found) return { title: "Lesson not found" }
  return {
    title: `${found.lesson.title} — ${found.course.title}`,
    description: found.lesson.summary,
  }
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string; lesson: string }>
}) {
  const { slug, lesson } = await params
  const found = findLesson(slug, lesson)
  if (!found) notFound()

  const body = getLessonBody(found.course, found.lesson)

  return (
    <LessonViewer course={found.course} lesson={found.lesson} index={found.index} body={body} />
  )
}
