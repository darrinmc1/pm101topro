"use client"

import { FormEvent, useId, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { COURSES } from "@/lib/content"
import { countWrittenLessonRoutes } from "@/lib/lesson-body"
import { CharterLessonStillFrame } from "@/components/home/charter-lesson-still-frame"

const WEEK_ONE_LESSON_HREF = "/learn/getting-started-as-a-pm/your-first-week"
const WEEK_ONE_LESSON_TITLE = "Your first week as a PM"

export function Hero() {
  const writtenCount = countWrittenLessonRoutes(COURSES)
  const waitlistId = useId()
  const [email, setEmail] = useState("")
  const [waitlist, setWaitlist] = useState<"idle" | "loading" | "ok" | "err">("idle")
  const [waitlistNote, setWaitlistNote] = useState("")

  async function onWaitlist(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setWaitlist("loading")
    setWaitlistNote("")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = (await res.json()) as { message?: string; error?: string }
      if (!res.ok) {
        setWaitlist("err")
        setWaitlistNote(data.error || "Could not join the waitlist. Try again.")
        return
      }
      setWaitlist("ok")
      setWaitlistNote(data.message || "You’re on the list.")
      setEmail("")
    } catch {
      setWaitlist("err")
      setWaitlistNote("Network hiccup. The waitlist can wait one more minute.")
    }
  }

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="container grid items-start gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,34rem)] lg:gap-12 lg:py-16">
        <div className="min-w-0">
          <p className="text-sm font-medium text-accent-secondary">
            Project management training
          </p>
          <h1 className="mt-3 max-w-[18ch] text-balance text-4xl font-extrabold tracking-tightest text-foreground sm:text-5xl">
            Learn project management without the PMI theatre
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {writtenCount} written lessons. Traditional and Agile paths. Not a
            cert mill — this is not a PMI certification.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            From accidental PM to competent. Week-one kickoff lives on its own
            path if you were handed a date and no plan.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg">
              <Link href={WEEK_ONE_LESSON_HREF}>Start free written lesson</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/start">Given a project — don’t know where to start</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/courses">Browse topics</Link>
            </Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Free written lesson: {WEEK_ONE_LESSON_TITLE}
          </p>

          <form onSubmit={onWaitlist} className="mt-8 max-w-md">
            <label htmlFor={waitlistId} className="text-sm font-medium text-foreground">
              Waitlist for new written lessons
            </label>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <input
                id={waitlistId}
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@work-email.com"
                className="h-11 flex-1 rounded-lg border border-border bg-surface px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <Button type="submit" disabled={waitlist === "loading"} className="h-11">
                {waitlist === "loading" ? "Sending…" : "Join waitlist"}
              </Button>
            </div>
            {waitlistNote ? (
              <p className="mt-2 text-xs text-muted-foreground" role="status" data-state={waitlist}>
                {waitlistNote}
              </p>
            ) : null}
          </form>
        </div>

        <div className="min-w-0">
          <CharterLessonStillFrame />
        </div>
      </div>
    </section>
  )
}
