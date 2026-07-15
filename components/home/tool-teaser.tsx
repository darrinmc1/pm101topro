import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DOC_TYPES } from "@/lib/documents"

export function ToolTeaser() {
  return (
    <section className="border-b border-border py-20">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-accent-secondary">
            AI Document Generator
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tightest text-foreground">
            Answer a few questions. Get a real document.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Our conversational AI interviews you like a senior PM consultant,
            then generates a professional, ready-to-use document in clean
            formatting. Eight document types cover the whole project lifecycle.
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-3">
            {DOC_TYPES.map((doc) => (
              <li
                key={doc.id}
                className="flex items-center gap-2.5 text-sm text-foreground"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <doc.icon className="h-4 w-4" />
                </span>
                {doc.name}
              </li>
            ))}
          </ul>

          <Button asChild className="mt-8">
            <Link href="/pricing">
              See pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <DocMockup />
      </div>
    </section>
  )
}

function DocMockup() {
  return (
    <div className="glass rounded-2xl p-4 shadow-blue-glow">
      <div className="flex items-center gap-1.5 border-b border-white/10 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">
          project-charter.md
        </span>
      </div>

      <div className="space-y-4 py-4">
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-accent px-4 py-2.5 text-sm text-accent-foreground">
            The project is a mobile banking app redesign.
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-surface-raised px-4 py-2.5 text-sm text-foreground">
            Great. Who is the project sponsor or key decision-maker?
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-background/60 p-4">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-secondary">
            # Project Charter
          </p>
          <div className="mt-3 space-y-2">
            <div className="h-2 w-3/4 rounded bg-surface-raised" />
            <div className="h-2 w-full rounded bg-surface-raised" />
            <div className="h-2 w-5/6 rounded bg-surface-raised" />
            <div className="mt-3 h-2 w-1/2 rounded bg-accent/40" />
            <div className="h-2 w-full rounded bg-surface-raised" />
          </div>
        </div>
      </div>
    </div>
  )
}
