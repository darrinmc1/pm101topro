import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, ClipboardList, Sparkles } from "lucide-react"
import { DOC_TYPES } from "@/lib/documents"
import { Card } from "@/components/ui/card"
import { PmWisdom } from "@/components/pm-wisdom"
import { STATUS_CLEANER } from "@/lib/pricing"

export const metadata: Metadata = {
  title: "AI PM Tools",
  description:
    "Status Cleaner turns a messy project dump into a board-ready update. The document generator drafts charters, risk registers, RACI matrices and more.",
}

export default function ToolsPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-sm text-accent">
            <Sparkles className="h-4 w-4" />
            AI tools · one job each
          </div>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tightest text-foreground text-balance">
            Tools that do the busywork. Not a chatbot.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Clean a status dump, or generate a PM document from a short questionnaire. Both cite the same
            courses, lessons, and document types you learn on this site.
          </p>
        </div>
      </section>

      <section className="container pt-14">
        <Link href={STATUS_CLEANER.path} className="group block">
          <Card className="border-accent/40 bg-surface p-6 transition-colors hover:border-accent/70 md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <ClipboardList className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent-secondary">
                    One job · included on paid plans
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-foreground">{STATUS_CLEANER.name}</h2>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {STATUS_CLEANER.tagline} RAG with teeth, next actions, and citations from Reporting up,
                    Written updates, and the Status Report doc type.
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                Clean a dump
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Card>
        </Link>
      </section>

      <section className="container py-14">
        <h2 className="text-xl font-semibold text-foreground">Document generator</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Pick a type, answer a few questions, get an editable draft.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DOC_TYPES.map((doc) => {
            const Icon = doc.icon
            return (
              <Link key={doc.id} href={`/tools/${doc.id}`} className="group">
                <Card className="h-full border-border bg-surface p-6 transition-colors hover:border-accent/50">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-foreground">{doc.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{doc.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    Generate
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Card>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="container pb-20">
        <div className="mx-auto max-w-lg">
          <PmWisdom />
        </div>
      </section>
    </>
  )
}
