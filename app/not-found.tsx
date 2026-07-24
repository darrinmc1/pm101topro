import Link from "next/link"
import { Compass, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const SUGGESTIONS = [
  { href: "/courses", label: "Browse courses" },
  { href: "/tools", label: "AI document tools" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
]

const PM_JOKES = [
  "Stakeholder added it to scope — but forgot to update the timeline.",
  "This page was deprioritised in the last sprint retro.",
  "Estimated at 2 story points. We're now on sprint 12.",
  "The PM said 'just a quick pivot' — and here we are.",
  "Original estimate: 2 hours. Current status: 404.",
  "This URL was approved at the steering committee — then descoped.",
]

export default function NotFound() {
  const joke = PM_JOKES[Math.floor(Math.random() * PM_JOKES.length)]

  return (
    <div className="relative overflow-hidden">
      <div className="bg-dot-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="container relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface-raised text-accent">
          <Compass className="h-7 w-7" />
        </span>

        <p className="mt-8 font-mono text-sm font-medium uppercase tracking-widest text-accent">
          404 — Off the roadmap
        </p>
        <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          This page isn&apos;t on the plan
        </h1>
        <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
          The page you&apos;re looking for may have moved, been renamed, or never
          shipped. Let&apos;s get you back to something useful.
        </p>

        <p className="mt-6 text-sm italic text-muted-foreground/60">
          {joke}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              Back to home
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/courses">Start learning free</Link>
          </Button>
        </div>

        <div className="mt-12 w-full max-w-lg">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Popular destinations
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-3">
            {SUGGESTIONS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-surface-raised"
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
