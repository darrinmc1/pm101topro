"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function Hero() {
  const headingRef  = useScrollReveal<HTMLDivElement>({ threshold: 0.1 })
  const subtitleRef = useScrollReveal<HTMLParagraphElement>({ threshold: 0.1 })
  const ctaRef      = useScrollReveal<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Dot-grid background */}
      <div className="absolute inset-0 bg-dot-grid opacity-60" aria-hidden="true" />

      {/* Animated orb */}
      <div
        className="orb-animate pointer-events-none absolute left-1/2 top-0
                   h-80 w-[48rem] -translate-x-1/2 rounded-full
                   bg-gradient-to-br from-accent/30 via-accent-glow/20 to-accent-secondary/10
                   blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 top-24 h-48 w-64
                   rounded-full bg-accent-secondary/10 blur-[80px]"
        aria-hidden="true"
        style={{ animation: "orb-drift 11s ease-in-out 2s infinite" }}
      />

      <div className="container relative flex flex-col items-center py-24 text-center md:py-36">

        <span className="badge-pop inline-flex items-center gap-2 rounded-full border
                         border-border bg-surface px-3 py-1 text-xs font-medium
                         text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-accent-secondary" />
          Project Management Courses + AI Doc Tools
        </span>

        <div ref={headingRef} className="reveal-up mt-6 stagger-1">
          <h1 className="max-w-3xl text-balance text-4xl font-extrabold
                         tracking-tightest text-foreground sm:text-5xl md:text-6xl">
            From <span className="text-accent text-glow">PM101</span> to{" "}
            <span className="text-accent-secondary">Pro.</span>
          </h1>
        </div>

        <p
          ref={subtitleRef}
          className="reveal-up mt-5 max-w-xl text-pretty text-base
                     leading-relaxed text-muted-foreground md:text-lg stagger-2"
        >
          Master project management from your first charter to running a PMO.
          Free courses across every methodology, plus AI-powered document tools.
        </p>

        <div
          ref={ctaRef}
          className="reveal-up mt-8 flex flex-col gap-3 sm:flex-row stagger-3"
        >
          <Button asChild size="lg" className="group">
            <Link href="/courses">
              Start learning free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/tools">Try the doc generator</Link>
          </Button>
        </div>

      </div>
    </section>
  )
}
