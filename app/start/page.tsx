import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CharterLessonStillFrame } from "@/components/home/charter-lesson-still-frame"
import { WeekOneChecklist } from "@/components/start/week-one-checklist"

const WEEK_ONE_LESSON_HREF = "/learn/getting-started-as-a-pm/your-first-week"

export const metadata: Metadata = {
  title: "Given a project — don’t know where to start",
  description:
    "Week-one kickoff for accidental PMs: you got a date and no charter. Written lessons, not a PMI certification.",
}

export default function StartPage() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="container grid items-start gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,32rem)] lg:gap-12 lg:py-16">
          <div className="min-w-0">
            <p className="text-sm font-medium text-accent-secondary">
              Path · given a project
            </p>
            <h1 className="mt-3 max-w-[18ch] text-balance text-4xl font-extrabold tracking-tightest text-foreground sm:text-5xl">
              Given a project — don’t know where to start.
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              They handed you a date and no charter. This page is week-one
              kickoff, not the whole product. pm101toPro teaches project
              management in written lessons — this is not a PMI certification.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Burndown not included. Neither is a sponsor who answers Slack.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg">
                <Link href={WEEK_ONE_LESSON_HREF}>Start free written lesson</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/">Back to training home</Link>
              </Button>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Free written lesson: Your first week as a PM
            </p>
          </div>

          <div className="min-w-0 space-y-4">
            <CharterLessonStillFrame tall />
            <WeekOneChecklist />
          </div>
        </div>
      </section>
    </>
  )
}
