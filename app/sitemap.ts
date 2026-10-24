import type { MetadataRoute } from "next"
import { COURSES } from "@/lib/content"

const SITE = "https://www.pm101topro.com"
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.pm101topro.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE}/courses`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...COURSES.map((course) => ({
      url: `${SITE}/courses/${course.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...COURSES.flatMap((course) =>
      course.lessons.map((lesson) => ({
        url: `${SITE}/learn/${course.slug}/${lesson.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
    ),
    {
      url: "https://www.pm101topro.com/pricing",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.pm101topro.com/tools/status",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.pm101topro.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://www.pm101topro.com/terms",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://www.pm101topro.com/privacy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ]
}
