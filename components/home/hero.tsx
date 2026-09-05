"use client"

import { FormEvent, useId, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CharterLessonStillFrame } from "@/components/home/charter-lesson-still-frame"
import { useParallax } from "@/hooks/use-parallax"

const WEEK_ONE_LESSON_HREF = "/learn/getting-started-as-a-pm/your-first-week"
const WEEK_ONE_LESSON_TITLE = "Your first week as a PM"

export function Hero() {
  const waitlistId = useId()
  const [email, setEmail] = useState("")
  const [waitlist, setWaitlist] = useState<"idle" | "loading" | "ok" | "err">("idle")
  const [waitlistNote, setWaitlistNote] = useState("")
  const washRef = useParallax<HTMLDivElement>(0.16)
  const gridRef = useParallax<HTMLDivElement>(0.09)
  const artefactRef = useParallax<HTMLDivElement>(0.06)
  const stillRef = useParallax<HTMLDivElement>(0.03)

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
      {/* Plane 1 — navy wash */}
      <div
        ref={washRef}
        className="pointer-events-none absolute -inset-x-10 -top-24 h-[140%] bg-[radial-gradient(80%_60%_at_70%_10%,hsl(var(--accent)/0.14),transparent_58%)]"
        aria-hidden="true"
      />
      {/* Plane 2 — soft site grid */}
      <div
        ref={gridRef}
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50"
        aria-hidden="true"
      />
      {/* Plane 3 — abstract charter artefact, not stock */}
      <div
        ref={artefactRef}
        className="pointer-events-none absolute right-[4%] top-16 hidden w-[22rem] opacity-[0.14] lg:block"
        aria-hidden="true"
      >
        <svg viewBox="0 0 280 360" className="h-auto w-full text-accent">
          <rect x="8" y="8" width="264" height="344" rx="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <text x="28" y="44" fill="currentColor" fontSize="11" fontFamily="ui-sans-serif, system-ui">
            PROJECT CHARTER
          </text>
          <line x1="28" y1="58" x2="180" y2="58" stroke="currentColor" strokeWidth="1" />
          <rect x="28" y="78" width="160" height="8" rx="2" fill="currentColor" opacity="0.45" />
          <rect x="28" y="96" width="220" height="6" rx="2" fill="currentColor" opacity="0.28" />
          <rect x="28" y="112" width="200" height="6" rx="2" fill="currentColor" opacity="0.28" />
          <rect x="28" y="148" width="90" height="6" rx="2" fill="currentColor" opacity="0.4" />
          <rect x="28" y="168" width="220" height="6" rx="2" fill="currentColor" opacity="0.22" />
          <rect x="28" y="184" width="190" height="6" rx="2" fill="currentColor" opacity="0.22" />
          <rect x="28" y="220" width="70" height="6" rx="2" fill="currentColor" opacity="0.4" />
          <rect x="28" y="240" width="140" height="48" rx="4" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 container grid items-start gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,34rem)] lg:gap-12 lg:py-16">
        {/* Plane 4 — foreground copy */}
        <div className="min-w-0">
          <p className="text-sm font-medium text-accent-secondary">
            Project management training
          </p>
          <h1 className="mt-3 max-w-[18ch] text-balance text-4xl font-extrabold tracking-tightest text-foreground sm:text-5xl">
            Given a project — don’t know where to start
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            They handed you a date and no charter.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            From accidental PM to competent. Week-one kickoff lives on its own
            path if you were handed a date and no plan.
          </p>
        </div>

        <div ref={stillRef} className="min-w-0 will-change-transform lg:row-span-2">
          <CharterLessonStillFrame />
        </div>

        <div className="min-w-0">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
      </div>
    </section>
  )
}
