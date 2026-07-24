import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Sparkles } from "lucide-react"
import { DOC_TYPES } from "@/lib/documents"
import { Card } from "@/components/ui/card"
import { PmWisdom } from "@/components/pm-wisdom"

export const metadata: Metadata = {
  title: "AI PM Document Generator",
  description:
    "Generate professional project management documents — charters, risk registers, RACI matrices and more — with a guided AI wizard.",
}

export default function ToolsPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-sm text-accent">
            <Sparkles className="h-4 w-4" />
            AI Document Generator
          </div>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tightest text-foreground text-balance">
            Turn a few answers into a polished PM document
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Pick a document type, answer a short guided questionnaire, and get an editable, export-ready draft. Built on
            the same frameworks you learn in the courses.
          </p>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
