"use client"

import { GraduationCap, Layers, Wand2 } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const STEPS = [
  {
    icon: Layers,
    title: "Choose your level",
    body: "Start at 101, intermediate, advanced, or PMO. The level on the card is the filter.",
  },
  {
    icon: GraduationCap,
    title: "Learn by doing",
    body: "Written lessons. No video. Mark one complete and the count sticks in this browser.",
  },
  {
    icon: Wand2,
    title: "Build real documents",
    body: "A short questionnaire drafts a charter, register, or report. You still have to edit it.",
  },
]

const STAGGER = ["stagger-1", "stagger-2", "stagger-3"] as const

export function HowItWorks() {
  const headingRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })
  const listRef    = useScrollReveal<HTMLOListElement>({ threshold: 0.1 })
  const lineRef    = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section id="how-it-works" className="scroll-mt-20 border-b border-border py-20">
      <div className="container">

        {/* Section header */}
        <div ref={headingRef} className="reveal-up mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tightest text-foreground">
            How it works
          </h2>
          <p className="mt-3 text-muted-foreground">
            A clear path from complete beginner to confident practitioner.
          </p>
        </div>

        {/* Connector line between cards - draws in on scroll */}
        <div className="relative mt-12 hidden md:block" aria-hidden="true">
          <div
            ref={lineRef}
            className="line-draw absolute top-[2.75rem] left-[calc(16.66%+2rem)]
                       right-[calc(16.66%+2rem)] h-px bg-gradient-to-r
                       from-accent/40 via-accent-secondary/40 to-accent/40"
          />
        </div>

        <ol className="relative mt-12 grid gap-6 md:mt-0 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className={`reveal-up card-lift relative rounded-xl border border-border
                          bg-surface p-6 ${STAGGER[i]}`}
            >
              {/* Step number */}
              <span className="absolute right-5 top-5 font-mono text-sm text-muted-foreground/60">
                0{i + 1}
              </span>

              {/* Icon with glow ring */}
              <span className="inline-flex h-11 w-11 items-center justify-center
                               rounded-lg bg-accent/15 text-accent ring-1 ring-accent/20">
                <step.icon className="h-5 w-5" />
              </span>

              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
