"use client"

import { FormEvent, useId, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { COURSES } from "@/lib/content"
import { countWrittenLessonRoutes } from "@/lib/lesson-body"
import { HeroLessonStill } from "@/components/home/hero-lesson-still"

const WEEK_ONE_LESSON_HREF = "/learn/getting-started-as-a-pm/your-first-week"
const WEEK_ONE_LESSON_TITLE = "Your first week as a PM"

const CHECKLIST = [
  {
    n: "01",
    title: "Write the date they already set",
    detail: "The date is real. The charter is not. Put the date at the top of a blank page.",
  },
  {
    n: "02",
    title: "Name the person who can say no",
    detail: "If that person is “the group,” you do not have a sponsor. You have a group chat.",
  },
  {
    n: "03",
    title: "One page: in / out",
    detail: "Ugly is fine. A Slack thread is not a scope statement.",
  },
  {
    n: "04",
    title: "Call the people who get angry if you don’t",
    detail: "Three names. This week. Silence is how surprises get a head start.",
  },
  {
    n: "05",
    title: "Send a status before they ask",
    detail: "“Writing the charter” is a status. Saying nothing lets them write the story.",
  },
  {
    n: "06",
    title: "Read a written lesson. Then stop decorating the Gantt.",
    detail: "Kickoff first. Software second. The chart can wait until you know the job.",
  },
] as const

export function Hero() {
  const writtenCount = countWrittenLessonRoutes(COURSES)
  const checkId = useId()
  const [checked, setChecked] = useState<boolean[]>(() => CHECKLIST.map(() => false))
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
            Accidental PM · week-one kickoff
          </p>
          <h1 className="mt-3 max-w-[16ch] text-balance text-4xl font-extrabold tracking-tightest text-foreground sm:text-5xl">
            They handed you a project, a date, and no charter.
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Here is kickoff. Not a slogan. Not a PMI mill — this is not a PMI
            certification. {writtenCount} written lessons are live. We will not
            count the blanks in the catalog.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Burndown not included. Neither is a sponsor who answers Slack.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg">
              <Link href={WEEK_ONE_LESSON_HREF}>Start free written lesson</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/courses">Browse topics</Link>
            </Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Free written lesson: {WEEK_ONE_LESSON_TITLE}
          </p>

          <form onSubmit={onWaitlist} className="mt-8 max-w-md">
            <label htmlFor={`${checkId}-waitlist`} className="text-sm font-medium text-foreground">
              Waitlist for new written lessons
            </label>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <input
                id={`${checkId}-waitlist`}
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
          <figure
            id="charter-lesson-still"
            className="overflow-hidden rounded-xl border border-border bg-surface shadow-blue-glow"
          >
            <figcaption className="border-b border-border px-4 py-2 text-xs text-muted-foreground">
              Lesson · Your first project charter
            </figcaption>
            <div className="relative h-56 overflow-hidden sm:h-64">
              <div className="kickoff-pan origin-top-left">
                <HeroLessonStill />
              </div>
            </div>
          </figure>

          <div className="mt-4 rounded-xl border border-border bg-surface">
            <div className="flex items-baseline justify-between border-b border-border px-4 py-3">
              <h2 className="text-sm font-semibold text-foreground">This week</h2>
              <span className="text-xs text-muted-foreground">Tick as you go</span>
            </div>
            <ol>
              {CHECKLIST.map((item, index) => {
                const id = `${checkId}-item-${index}`
                return (
                  <li key={item.n} className="border-b border-border last:border-b-0">
                    <label htmlFor={id} className="flex cursor-pointer gap-3 px-4 py-2.5 hover:bg-surface-raised">
                      <input
                        id={id}
                        type="checkbox"
                        checked={checked[index]}
                        onChange={() =>
                          setChecked((prev) => {
                            const next = [...prev]
                            next[index] = !next[index]
                            return next
                          })
                        }
                        className="mt-1 h-4 w-4 shrink-0 accent-[hsl(var(--accent))]"
                      />
                      <span className="min-w-0">
                        <span className="flex items-baseline gap-2">
                          <span className="text-xs tabular-nums text-accent-secondary">{item.n}</span>
                          <span
                            className={`text-sm font-medium leading-snug ${
                              checked[index] ? "text-muted-foreground line-through" : "text-foreground"
                            }`}
                          >
                            {item.title}
                          </span>
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                          {item.detail}
                        </span>
                      </span>
                    </label>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
