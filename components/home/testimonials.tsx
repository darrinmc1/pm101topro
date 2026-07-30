"use client"

import Link from "next/link"
import { Quote, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const TESTIMONIALS = [
  {
    quote:
      "I went from never having run a project to leading my first delivery in a few weeks. The charter lesson alone paid for itself.",
    name: "Priya S.",
    role: "First-time project lead",
  },
  {
    quote:
      "The PMP prep path is genuinely well structured. The AI document tool is what made me subscribe - it saves me hours every week.",
    name: "Marcus D.",
    role: "PMP candidate",
  },
  {
    quote:
      "My team's status reports and risk registers are finally consistent. It's like having a senior PM reviewing everything.",
    name: "Elena R.",
    role: "Delivery team lead",
  },
]

const STAGGER = ["stagger-1", "stagger-2", "stagger-3"] as const

export function Testimonials() {
  const headingRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })
  const gridRef    = useScrollReveal<HTMLDivElement>({ threshold: 0.08 })
  const ctaRef     = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })

  return (
    <section className="py-20">
      <div className="container">

        <div ref={headingRef} className="reveal-up mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tightest text-foreground">
            Trusted by people learning to lead
          </h2>
        </div>

        <div
          ref={gridRef}
          className="mt-12 grid gap-5 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className={`card-lift reveal-up flex flex-col rounded-xl border
                          border-border bg-surface p-6 ${STAGGER[i]}`}
            >
              <Quote className="h-6 w-6 text-accent/60" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* CTA banner */}
        <div
          ref={ctaRef}
          className="reveal-scale mt-14 flex flex-col items-center gap-4 rounded-2xl
                     border border-border bg-surface p-10 text-center
                     relative overflow-hidden"
        >
          {/* Subtle glow behind CTA */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-32 w-64
                       -translate-x-1/2 rounded-full bg-accent/10 blur-[60px]"
            aria-hidden="true"
          />
          <h3 className="relative text-2xl font-bold tracking-tightest text-foreground">
            Ready to start your journey?
          </h3>
          <p className="relative max-w-md text-muted-foreground">
            Every course has a free first lesson. No credit card required.
          </p>
          <Button asChild size="lg" className="relative group">
            <Link href="/courses">
              Start learning free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}
