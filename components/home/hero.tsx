"use client"

import { FormEvent, useId, useState } from "react"
import Link from "next/link"
import { COURSES } from "@/lib/content"
import { countWrittenLessonRoutes } from "@/lib/lesson-body"
import { HeroLessonStill } from "@/components/home/hero-lesson-still"

const WEEK_ONE_LESSON_HREF = "/learn/getting-started-as-a-pm/your-first-week"
const WEEK_ONE_LESSON_TITLE = "Your first week as a PM"

const CHECKLIST = [
  {
    day: "Mon",
    title: "Write the date they already set",
    detail: "The date is real. The charter is not. Put the date at the top of a blank page.",
  },
  {
    day: "Tue",
    title: "Name the person who can say no",
    detail: "If that person is “the group,” you do not have a sponsor. You have a group chat.",
  },
  {
    day: "Wed",
    title: "One page: in / out",
    detail: "Ugly is fine. A Slack thread is not a scope statement.",
  },
  {
    day: "Thu",
    title: "Call the people who get angry if you don’t",
    detail: "Three names. This week. Silence is how surprises get a head start.",
  },
  {
    day: "Fri",
    title: "Send a status before they ask",
    detail: "“Writing the charter” is a status. Saying nothing lets them write the story.",
  },
  {
    day: "Now",
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
    <section className="hero-kickoff relative overflow-hidden border-b border-[#c9b888]">
      <div className="relative mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,24rem)] lg:items-start lg:gap-8 lg:py-8">
        <div className="min-w-0">
          <p className="font-kickoff-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#9a3412]">
            Week-one kickoff · accidental PM desk
          </p>
          <h1 className="font-kickoff-serif mt-2 max-w-[18ch] text-[2rem] font-medium leading-[1.12] tracking-[-0.02em] text-[#1b1610] sm:text-[2.6rem]">
            They handed you a project, a date, and no charter.
          </h1>
          <p className="font-kickoff-serif mt-3 max-w-xl text-[1.02rem] leading-relaxed text-[#3a3226]">
            Here is kickoff. Not a slogan. Not a PMI mill — this is not a PMI
            certification. {writtenCount} written lessons are live. We will not
            count the blanks in the catalog.
          </p>

          {/* Required fold imagery: real charter-lesson still, not a strip below the fold */}
          <figure
            id="charter-lesson-still"
            className="mt-4 overflow-hidden border border-[#1b1610] bg-[#0A0F1E]"
          >
            <figcaption className="border-b border-[#1b1610] bg-[#e4d4a8] px-3 py-1.5 font-kickoff-mono text-[10px] uppercase tracking-[0.16em] text-[#5c5344]">
              Product still · Your first project charter
            </figcaption>
            <div className="relative h-44 overflow-hidden sm:h-52">
              <div className="kickoff-pan origin-top-left">
                <HeroLessonStill />
              </div>
            </div>
          </figure>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href={WEEK_ONE_LESSON_HREF}
              className="inline-flex h-11 items-center justify-center border border-[#1b1610] bg-[#1b1610] px-4 font-kickoff-mono text-xs font-medium uppercase tracking-[0.12em] text-[#efe4c4] hover:bg-[#3a2418]"
            >
              Start free written lesson
            </Link>
            <Link
              href="/courses"
              className="inline-flex h-11 items-center justify-center border border-[#1b1610] bg-transparent px-4 font-kickoff-mono text-xs font-medium uppercase tracking-[0.12em] text-[#1b1610] hover:bg-[#e4d4a8]"
            >
              Browse topics
            </Link>
          </div>
          <p className="font-kickoff-mono mt-2 text-[11px] text-[#5c5344]">
            Free written lesson: {WEEK_ONE_LESSON_TITLE}
          </p>

          <form onSubmit={onWaitlist} className="mt-4 max-w-md">
            <label htmlFor={`${checkId}-waitlist`} className="font-kickoff-mono text-[11px] uppercase tracking-[0.14em] text-[#5c5344]">
              Waitlist — new written lessons, no pitch deck
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
                className="h-11 flex-1 border border-[#1b1610] bg-[#f6eed6] px-3 font-kickoff-mono text-sm text-[#1b1610] placeholder:text-[#8a7f68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a3412]"
              />
              <button
                type="submit"
                disabled={waitlist === "loading"}
                className="h-11 border border-[#1b1610] bg-[#9a3412] px-4 font-kickoff-mono text-xs font-medium uppercase tracking-[0.12em] text-[#f6eed6] hover:bg-[#7a2910] disabled:opacity-60"
              >
                {waitlist === "loading" ? "Sending…" : "Join waitlist"}
              </button>
            </div>
            {waitlistNote ? (
              <p
                className="mt-2 font-kickoff-mono text-xs"
                role="status"
                data-state={waitlist}
              >
                {waitlistNote}
              </p>
            ) : null}
          </form>
        </div>

        <div className="border border-[#1b1610] bg-[#f6eed6] shadow-[6px_6px_0_#1b1610]">
          <div className="flex items-baseline justify-between border-b border-[#1b1610] px-4 py-2.5">
            <h2 className="font-kickoff-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9a3412]">
              Week-one kickoff checklist
            </h2>
            <span className="font-kickoff-mono text-[10px] uppercase tracking-wider text-[#5c5344]">
              Tick as you go
            </span>
          </div>
          <ol className="divide-y divide-[#d4c49a]">
            {CHECKLIST.map((item, index) => {
              const id = `${checkId}-item-${index}`
              return (
                <li key={item.day}>
                  <label
                    htmlFor={id}
                    className="flex cursor-pointer gap-3 px-4 py-2.5 hover:bg-[#efe4c4]"
                  >
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
                      className="mt-1 h-4 w-4 shrink-0 accent-[#3d4f34]"
                    />
                    <span className="min-w-0">
                      <span className="flex items-baseline gap-2">
                        <span className="font-kickoff-mono text-[10px] uppercase tracking-[0.14em] text-[#9a3412]">
                          {item.day}
                        </span>
                        <span
                          className={`font-kickoff-serif text-[0.98rem] leading-snug ${
                            checked[index] ? "text-[#6b6354] line-through" : "text-[#1b1610]"
                          }`}
                        >
                          {item.title}
                        </span>
                      </span>
                      <span className="mt-0.5 block font-kickoff-serif text-[13px] leading-relaxed text-[#4a4134]">
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
    </section>
  )
}
