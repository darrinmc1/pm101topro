import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

const STATS = [
  { value: "8", label: "methodologies" },
  { value: "40+", label: "lessons" },
  { value: "8", label: "document types" },
  { value: "AI", label: "assisted" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-dot-grid opacity-60" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container relative flex flex-col items-center py-20 text-center md:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-accent-secondary" />
          Learn PM + generate real project documents
        </span>

        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-extrabold tracking-tightest text-foreground sm:text-5xl md:text-6xl">
          From <span className="text-accent text-glow">PM101</span> to{" "}
          <span className="text-accent-secondary">Pro.</span>
        </h1>

        <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Master project management from your first charter to running a PMO.
          Free courses. AI-powered document tools.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/courses">
              Start learning free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/tools">Try the doc generator</Link>
          </Button>
        </div>

        <dl className="mt-14 grid w-full max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-surface/60 px-4 py-5 text-center"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-bold tracking-tight text-foreground">
                {stat.value}
              </dd>
              <dd className="mt-1 text-xs text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
