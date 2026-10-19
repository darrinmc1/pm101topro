import { notFound } from "next/navigation"
import { getCourse } from "@/lib/content"

// Unknown slugs must 404 before the page's loading.tsx suspense boundary
// commits a 200. The page also calls notFound() as a second check.
export const dynamicParams = false

export default async function CourseSlugLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (!getCourse(slug)) notFound()
  return children
}
