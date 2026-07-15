import Link from "next/link"
import { Quote } from "lucide-react"

import { Button } from "@/components/ui/button"

const TESTIMONIALS = [
  {
    quote:
      "I went from never having run a project to leading my first delivery in a few weeks. The charter lesson alone paid for itself.",
    name: "Priya S.",
    role: "First-time project lead",
  },
  {
    quote:
      "The PMP prep path is genuinely well structured. The AI document tool is what made me subscribe — it saves me hours every week.",
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

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tightest text-foreground">
            Trusted by people learning to lead
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-surface p-6"
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

        <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface p-10 text-center">
          <h3 className="text-2xl font-bold tracking-tightest text-foreground">
            Ready to start your journey?
          </h3>
          <p className="max-w-md text-muted-foreground">
            Every course has a free first lesson. No credit card required.
          </p>
          <Button asChild size="lg">
            <Link href="/courses">Start learning free</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
