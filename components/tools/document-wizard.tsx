"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Copy, Loader2, RefreshCw, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Phase = "questions" | "generating" | "result"

// Only serializable fields are passed from the server page (no icon component).
export type WizardDoc = {
  id: string
  name: string
  questions: string[]
}

export function DocumentWizard({ doc }: { doc: WizardDoc }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>(() => doc.questions.map(() => ""))
  const [phase, setPhase] = useState<Phase>("questions")
  const [copied, setCopied] = useState(false)

  const total = doc.questions.length
  const isLast = step === total - 1
  const progress = Math.round(((step + (phase === "questions" ? 0 : 1)) / total) * 100)

  function setAnswer(value: string) {
    setAnswers((prev) => {
      const next = [...prev]
      next[step] = value
      return next
    })
  }

  function generate() {
    setPhase("generating")
    // Simulated generation for the UI-first pass. A real /api/generate route
    // (AI SDK + Vercel AI Gateway) will replace this timeout.
    setTimeout(() => setPhase("result"), 1400)
  }

  const draft = useMemo(() => buildDraft(doc, answers), [doc, answers])

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  if (phase === "generating") {
    return (
      <Card className="flex flex-col items-center justify-center gap-4 border-border bg-surface px-6 py-20 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Loader2 className="h-6 w-6 animate-spin" />
        </div>
        <div>
          <p className="text-lg font-semibold text-foreground">Drafting your {doc.name.toLowerCase()}…</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Structuring your answers into a professional document.
          </p>
        </div>
      </Card>
    )
  }

  if (phase === "result") {
    return (
      <div className="space-y-4">
        <Card className="border-border bg-surface p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-accent">
              <Sparkles className="h-4 w-4" />
              Draft ready — edit freely below
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" onClick={copyDraft}>
                {copied ? <Check className="mr-1 h-4 w-4" /> : <Copy className="mr-1 h-4 w-4" />}
                {copied ? "Copied" : "Copy"}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setPhase("questions")
                  setStep(0)
                }}
              >
                <RefreshCw className="mr-1 h-4 w-4" />
                Start over
              </Button>
            </div>
          </div>
          <Textarea
            defaultValue={draft}
            className="mt-4 min-h-[420px] resize-y bg-background font-mono text-sm leading-relaxed"
            aria-label={`Generated ${doc.name}`}
          />
        </Card>
        <p className="text-center text-xs text-muted-foreground">
          This is a preview draft generated from your answers. Connect the AI generator to produce fully tailored,
          model-written documents.
        </p>
      </div>
    )
  }

  // Questions phase
  return (
    <Card className="border-border bg-surface p-6">
      {/* progress */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Question {step + 1} of {total}
        </span>
        <span>{progress}%</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-raised">
        <div
          className="h-full rounded-full bg-accent transition-all"
          style={{ width: `${((step + 1) / total) * 100}%` }}
        />
      </div>

      <div className="mt-8">
        <label htmlFor="answer" className="block text-lg font-medium text-foreground text-balance">
          {doc.questions[step]}
        </label>
        <Textarea
          id="answer"
          value={answers[step]}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer… (optional — you can refine later)"
          className="mt-4 min-h-[140px] bg-background"
          autoFocus
        />
      </div>

      {/* step dots */}
      <div className="mt-6 flex flex-wrap gap-1.5" aria-hidden>
        {doc.questions.map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 w-6 rounded-full transition-colors",
              i < step ? "bg-accent" : i === step ? "bg-accent/60" : "bg-surface-raised",
            )}
          />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => (step === 0 ? undefined : setStep((s) => s - 1))}
          disabled={step === 0}
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back
        </Button>
        {isLast ? (
          <Button onClick={generate}>
            <Sparkles className="mr-1 h-4 w-4" />
            Generate document
          </Button>
        ) : (
          <Button onClick={() => setStep((s) => s + 1)}>
            Next
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="mt-6 border-t border-border pt-4 text-center">
        <Link href="/tools" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
          Choose a different document
        </Link>
      </div>
    </Card>
  )
}

function buildDraft(doc: WizardDoc, answers: string[]): string {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  const lines: string[] = []
  lines.push(`# ${doc.name}`)
  lines.push(`Generated ${today} · PM101 to Pro`)
  lines.push("")
  doc.questions.forEach((q, i) => {
    const a = answers[i]?.trim()
    lines.push(`## ${q.replace(/\?$/, "")}`)
    lines.push(a && a.length > 0 ? a : "_To be completed._")
    lines.push("")
  })
  return lines.join("\n")
}
