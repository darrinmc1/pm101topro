import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/pricing"

const AEO_ALLOW = [
  "/",
  "/llm.txt",
  "/llms.txt",
  "/pricing",
  "/pricing.json",
  "/faq",
  "/tools",
  "/tools/status",
  "/courses",
  "/about",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/", "/_next/"],
      },
      {
        userAgent: "GPTBot",
        allow: AEO_ALLOW,
        disallow: ["/api/", "/admin/", "/dashboard/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: AEO_ALLOW,
        disallow: ["/api/", "/admin/", "/dashboard/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: AEO_ALLOW,
        disallow: ["/api/", "/admin/", "/dashboard/"],
      },
      {
        userAgent: "ClaudeBot",
        allow: AEO_ALLOW,
        disallow: ["/api/", "/admin/", "/dashboard/"],
      },
      {
        userAgent: "anthropic-ai",
        allow: AEO_ALLOW,
        disallow: ["/api/", "/admin/", "/dashboard/"],
      },
      {
        userAgent: "Google-Extended",
        allow: AEO_ALLOW,
        disallow: ["/api/", "/admin/", "/dashboard/"],
      },
      {
        userAgent: "Bytespider",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        allow: AEO_ALLOW,
        disallow: ["/api/", "/admin/", "/dashboard/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
