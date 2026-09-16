import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, CheckCircle, FileText, GraduationCap } from "lucide-react"
import { AI_FREE_LIMIT, STATUS_CLEANER } from "@/lib/pricing"

export const metadata: Metadata = {
  title: "Early Access",
  description: "All PM101toPro courses stay free. AI document tools are in early access while billing is being built and tested.",
}

const availableNow = [
  "All four project-management course levels",
  `${AI_FREE_LIMIT} free AI document generations`,
  "Status Cleaner using the same early-access meter",
  "Project charter and other practical document tools",
  "No card required",
]

const comingLater = [
  "Expanded AI document access",
  "More practical templates and PM helpers",
  "Additional tool usage for active project managers",
  "Paid checkout only after billing is live and tested",
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border bg-surface py-16 text-center">
        <div className="container">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">Early access</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Courses stay free. AI tools are still in early access.</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Checkout is not live, so PM101toPro is not publishing a paid price yet. Learn for free, use the current AI allowance, and join the product as it develops.
          </p>
        </div>
      </section>

      <section className="container py-12">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-success/30 bg-surface p-6 md:p-8">
            <GraduationCap className="h-8 w-8 text-success" />
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-success">Available now</p>
            <h2 className="mt-2 text-2xl font-bold">Free learning + working tools</h2>
            <ul className="mt-6 space-y-3">
              {availableNow.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {item}
                </li>
              ))}
            </ul>
            <Link href="/courses" className="mt-8 flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-semibold transition-colors hover:bg-surface-raised">
              Start learning free <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-xl border border-accent/30 bg-surface p-6 md:p-8">
            <FileText className="h-8 w-8 text-accent" />
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-accent">In development</p>
            <h2 className="mt-2 text-2xl font-bold">Expanded AI document workspace</h2>
            <ul className="mt-6 space-y-3">
              {comingLater.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {item}
                </li>
              ))}
            </ul>
            <Link href="/tools/project-charter" className="mt-8 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90">
              Try an AI document tool <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-xl border border-border bg-surface p-6 md:p-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent-secondary">Early-access tool</p>
          <h2 className="mt-2 text-2xl font-bold">{STATUS_CLEANER.name}</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">{STATUS_CLEANER.tagline}</p>
          <Link href="/tools/status" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
            Try Status Cleaner <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
