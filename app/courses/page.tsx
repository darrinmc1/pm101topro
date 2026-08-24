import type { Metadata } from "next"
import { CoursesBrowser } from "@/components/courses-browser"

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Browse all project management courses — PMP, Agile, Scrum, and PMO tracks. Structured learning from beginner to advanced.",
}

export default function CoursesPage() {
  const courseCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "pm101toPro Course Catalog",
    description:
      "Browse all project management courses — PMP, Agile, Scrum, and PMO tracks.",
    url: "https://www.pm101topro.com/courses",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "PMP Certification Courses",
        url: "https://www.pm101topro.com/courses?methodology=pmp",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Agile Courses",
        url: "https://www.pm101topro.com/courses?methodology=agile",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Scrum Courses",
        url: "https://www.pm101topro.com/courses?methodology=scrum",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "PMO Courses",
        url: "https://www.pm101topro.com/courses?methodology=pmo",
      },
    ],
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
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CoursesBrowser />
    </>
  )
}
