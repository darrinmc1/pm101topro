import type { MetadataRoute } from "next"
import { COURSES } from "@/lib/content"
import { BLOG_POSTS } from "@/lib/blog"
import { DOC_TYPES } from "@/lib/documents"

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
      url: `${SITE}/tools`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE}/tools/status`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...DOC_TYPES.map((doc) => ({
      url: `${SITE}/tools/${doc.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${SITE}/downloads`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${SITE}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    },
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    {
      url: `${SITE}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.4,
    },
    {
      url: `${SITE}/cookies`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
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
