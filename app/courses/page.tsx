import type { Metadata } from "next"
import { CoursesBrowser } from "@/components/courses-browser"

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Browse all project management courses on pm101toPro — PMP, Agile, Scrum, and PMO training from beginner to advanced.",
}

const coursesPageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Project Management Courses – pm101toPro",
  description:
    "Browse all project management courses covering PMP, Agile, Scrum, and PMO on pm101toPro.",
  url: "https://pm101topro.com/courses",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "PMP Certification Courses",
      url: "https://pm101topro.com/courses?methodology=pmp",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Agile Project Management Courses",
      url: "https://pm101topro.com/courses?methodology=agile",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Scrum Courses",
      url: "https://pm101topro.com/courses?methodology=scrum",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "PMO Governance Courses",
      url: "https://pm101topro.com/courses?methodology=pmo",
    },
  ],
}

export default async function CoursesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(coursesPageSchema),
        }}
      />
      <section className="border-b border-border">
        <div className="container py-14">
          <h1 className="text-4xl font-extrabold tracking-tightest text-foreground">
            All courses
          </h1>
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Browse every course — filter by methodology or level to find exactly where you need to
            start.
          </p>
        </div>
      </section>
      <CoursesBrowser />
    </>
  )
}
