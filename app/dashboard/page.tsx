import type { Metadata } from "next"
import Link from "next/link"
import { CreateAccountLink } from "@/components/create-account-link"

export const metadata: Metadata = {
  title: "Your desk – pm101toPro",
  description: "Your pm101toPro desk. Lesson ticks stay in this browser.",
}

export default function DashboardPage() {
  return (
    <div className="container max-w-2xl py-14">
      <p className="font-mono text-sm text-accent">Your desk</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">No sample student lives here</h1>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        Lesson ticks stay in this browser. There is no streak, no invented progress, and no pile of
        documents you did not write.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/courses"
          className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-3 text-sm font-semibold hover:bg-surface"
        >
          Back to the courses
        </Link>
        <CreateAccountLink className="inline-flex items-center justify-center rounded-lg bg-accent-action px-4 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-glow" />
      </div>
    </div>
  )
}
