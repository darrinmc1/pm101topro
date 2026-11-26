"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const PROOF_POINTS = [
  "Structured path from PM beginner to pro",
  "Covers Traditional, Agile & PMP methodologies",
  "AI tools that generate real project documents",
]

export function Hero() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
            Project Management Mastery
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
            Learn project management{" "}
            <span className="text-accent">by doing it.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Step-by-step courses take you from your first project plan to running a whole project office, and built-in tools draft the documents for you. Skills and paperwork you can use at work tomorrow.
          </p>
          <ul className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            {PROOF_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 shrink-0 text-accent" />
                {point}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/courses">
                Start Learning Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/about">See How It Works</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
