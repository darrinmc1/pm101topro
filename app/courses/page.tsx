import type { Metadata } from "next"

import { CoursesBrowser } from "@/components/courses-browser"
import { LEVEL_ORDER, type Level } from "@/lib/content"
import { PmWisdom } from "@/components/pm-wisdom"

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Browse the full pm101toPro course library by level and methodology, from 101 beginner to PMO level.",
}

function isLevel(value: string | undefined): value is Level {
  return !!value && (LEVEL_ORDER as string[]).includes(value)
}

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ level?: string }>
}) {
  const { level } = await searchParams
  const initialLevel = isLevel(level) ? level : "all"

  return (
    <div className="border-b border-border">
      <div className="container py-14">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tightest text-foreground">
            Course library
          </h1>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Structured, practical project management courses across every major
            methodology. All four levels stay free. The paid SKU is $19/mo Pro
            for AI documents after two free generations.
          </p>
        </header>

        <div className="mt-10">
          <CoursesBrowser initialLevel={initialLevel} />
        </div>
        <div className="mt-10 max-w-lg">
          <PmWisdom />
        </div>
      </div>
    </div>
  )
}
