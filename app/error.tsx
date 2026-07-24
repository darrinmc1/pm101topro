"use client"

import { useEffect } from "react"
import { AlertTriangle, ArrowRight, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

const PM_QUIPS = [
  "A risk you didn't identify just became an issue.",
  "The assumption log sends its regards.",
  "This error has been escalated to the steering committee.",
  "We've logged this in the lessons learned register.",
]

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  const quip = PM_QUIPS[Math.floor(Math.random() * PM_QUIPS.length)]

  return (
    <div className="relative overflow-hidden">
      <div className="bg-dot-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="container relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface-raised text-warning">
          <AlertTriangle className="h-7 w-7" />
        </span>

        <p className="mt-8 font-mono text-sm font-medium uppercase tracking-widest text-warning">
          Something went wrong
        </p>
        <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          The plan hit a blocker
        </h1>
        <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
          {quip}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button onClick={reset} size="lg">
            <RefreshCw className="mr-2 h-4 w-4" />
            Try again
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="/">
              Back to dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
