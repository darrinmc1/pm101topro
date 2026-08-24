import type { Metadata } from "next"
import { CoursesBrowser } from "@/components/courses-browser"
import { COURSES } from "@/lib/courses"

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Browse all pm101toPro project management courses — PMP, Agile, Scrum, and PMO tracks from beginner to advanced.",
}

export default function CoursesPage() {
  const coursesListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "pm101toPro Project Management Courses",
    description:
      "Project management courses covering PMP, Agile, Scrum, and PMO from beginner to advanced level.",
    url: "https://pm101topro.com/courses",
    numberOfItems: COURSES.length,
    itemListElement: COURSES.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
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
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesListSchema) }}
      />
      <section className="border-b border-border">
        <div className="container py-14">
          <h1 className="text-4xl font-extrabold tracking-tightest text-foreground">Courses</h1>
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Every course is built around real project work — pick a methodology, choose your level,
            and start building skills you can use tomorrow.
          </p>
        </div>
      </section>
      <CoursesBrowser />
    </>
  )
}
