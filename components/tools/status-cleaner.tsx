"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import {
  AlertTriangle,
  ArrowRight,
  Check,
  Copy,
  Crown,
  Loader2,
  RefreshCw,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { SAMPLE_DUMP, type RagStatus, type StatusResult } from "@/lib/status-method"
import { getFreeUsage, hasExhaustedFreeAi, incrementFreeUsage } from "@/lib/ai-usage"
import { STATUS_CLEANER } from "@/lib/pricing"
import { cn } from "@/lib/utils"

type Phase = "input" | "working" | "result" | "error"

const RAG_STYLES: Record<RagStatus, string> = {
  green: "bg-success/15 text-success ring-1 ring-success/30",
  amber: "bg-warning/15 text-warning ring-1 ring-warning/30",
  red: "bg-danger/15 text-danger ring-1 ring-danger/30",
}

const RAG_LABEL: Record<RagStatus, string> = {
  green: "Green",
  amber: "Amber",
  red: "Red",
}

export function StatusCleaner() {
  const [dump, setDump] = useState("")
  const [phase, setPhase] = useState<Phase>("input")
  const [result, setResult] = useState<StatusResult | null>(null)
  const [markdown, setMarkdown] = useState("")
  const [notice, setNotice] = useState("")
  const [source, setSource] = useState<"ai" | "method" | "">("")
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)
  const [showWall, setShowWall] = useState(false)

  useEffect(() => {
    if (hasExhaustedFreeAi()) setShowWall(true)
  }, [])

  const clean = useCallback(async () => {
    setPhase("working")
    setError("")
    setNotice("")
    try {
      const res = await fetch("/api/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dump }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || "Could not clean that dump. Try again.")
        setPhase("error")
        return
      }
      setResult(data.result)
      setMarkdown(data.markdown || "")
      setNotice(data.notice || "")
      setSource(data.source === "ai" || data.source === "method" ? data.source : "")
      if (data.source === "ai") incrementFreeUsage()
      setPhase("result")
    } catch {
      setError("Network error — check your connection and try again.")
      setPhase("error")
    }
  }, [dump])

  async function copyMarkdown() {
    try {
      await navigator.clipboard.writeText(markdown)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  if (showWall) {
    return <SubscribeWall />
  }

  if (phase === "working") {
    return (
      <Card className="flex flex-col items-center justify-center gap-4 border-border bg-surface px-6 py-20 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Loader2 className="h-6 w-6 animate-spin" />
        </div>
        <div>
          <p className="text-lg font-semibold text-foreground">Cleaning the dump&hellip;</p>
          <p className="mt-1 text-sm text-muted-foreground">
            RAG, biggest risk, the ask, next actions — with citations from the archive.
          </p>
        </div>
      </Card>
    )
  }

  if (phase === "error") {
    return (
      <Card className="border-destructive/30 bg-destructive/5 p-6 text-center">
        <p className="text-lg font-semibold text-destructive">Something went wrong</p>
        <p className="mt-2 text-sm text-muted-foreground">{error}</p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => {
            setPhase("input")
            setError("")
          }}
        >
          Try again
        </Button>
      </Card>
    )
  }

  if (phase === "result" && result) {
    return (
      <div className="space-y-4">
        {notice && (
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-sm text-amber-200/90">
            {notice}
          </div>
        )}

        <Card className="border-border bg-surface p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={cn(
                  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest",
                  RAG_STYLES[result.rag],
                )}
              >
                {RAG_LABEL[result.rag]}
              </span>
              {source === "method" && (
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  PM101 method draft
                </span>
              )}
              {source === "ai" && (
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                  <Sparkles className="h-4 w-4" />
                  Model + archive
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" onClick={copyMarkdown}>
                {copied ? <Check className="mr-1 h-4 w-4" /> : <Copy className="mr-1 h-4 w-4" />}
                {copied ? "Copied" : "Copy"}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setPhase("input")
                  setResult(null)
                }}
              >
                <RefreshCw className="mr-1 h-4 w-4" />
                New dump
              </Button>
            </div>
          </div>

          <h2 className="mt-5 text-xl font-semibold tracking-tight text-foreground text-balance">
            {result.headline}
          </h2>

          <div className="mt-6 space-y-2 text-sm leading-relaxed text-foreground/90">
            {result.cleanedStatus.split("\n").map((line, i) => {
              if (line.startsWith("### ")) {
                return (
                  <h3 key={i} className="pt-3 text-xs font-semibold uppercase tracking-widest text-accent-secondary">
                    {line.replace(/^### /, "")}
                  </h3>
                )
              }
              if (line.startsWith("- ")) {
                return (
                  <p key={i} className="pl-3 text-muted-foreground">
                    {line}
                  </p>
                )
              }
              if (!line.trim()) return <div key={i} className="h-1" />
              return (
                <p key={i} className="text-muted-foreground">
                  {line.split("**").map((part, j) =>
                    j % 2 === 1 ? (
                      <strong key={j} className="font-semibold text-foreground">
                        {part}
                      </strong>
                    ) : (
                      part
                    ),
                  )}
                </p>
              )
            })}
          </div>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-border bg-surface p-5">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-warning">
              <AlertTriangle className="h-3.5 w-3.5" />
              Biggest risk
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground">{result.biggestRisk}</p>
          </Card>
          <Card className="border-border bg-surface p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-secondary">
              What I need from you
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground">{result.ask}</p>
          </Card>
        </div>

        <Card className="border-border bg-surface p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Next actions
          </p>
          <ul className="mt-3 space-y-3">
            {result.nextActions.map((item) => (
              <li key={item.action} className="flex flex-col gap-0.5 border-b border-border pb-3 last:border-0 last:pb-0">
                <span className="text-sm font-medium text-foreground">{item.action}</span>
                <span className="text-xs text-muted-foreground">
                  {item.owner} · {item.due}
                </span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="border-border bg-surface p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Cited from the archive
          </p>
          <ul className="mt-3 space-y-3">
            {result.citations.map((cite) => (
              <li key={cite.id}>
                <Link
                  href={cite.href}
                  className="text-sm font-medium text-accent hover:underline"
                >
                  {cite.title}
                </Link>
                <p className="text-xs text-muted-foreground">
                  {cite.kind === "lesson" && cite.courseTitle
                    ? `Lesson · ${cite.courseTitle}`
                    : cite.kind === "course"
                      ? "Course"
                      : "Document type"}
                  {" — "}
                  {cite.why}
                </p>
              </li>
            ))}
          </ul>
        </Card>

        {source === "ai" && getFreeUsage() >= 1 && (
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-center">
            <p className="text-sm font-semibold text-amber-300">That was your free AI generation.</p>
            <p className="mt-1 text-xs text-amber-400/80">
              Status Cleaner is included on paid plans (${STATUS_CLEANER.standaloneUSD}/mo standalone).
            </p>
            <Button asChild className="mt-3" size="sm">
              <Link href="/pricing">
                <Crown className="mr-1 h-4 w-4" />
                See pricing
              </Link>
            </Button>
          </div>
        )}
      </div>
    )
  }

  return (
    <Card className="border-border bg-surface p-6">
      <label htmlFor="status-dump" className="block text-lg font-medium text-foreground">
        Paste the messy update
      </label>
      <p className="mt-1 text-sm text-muted-foreground">
        Slack threads, stand-up notes, email chains, steerco ramble. One job: cleaned status and next
        actions, cited from the courses.
      </p>
      <Textarea
        id="status-dump"
        value={dump}
        onChange={(e) => setDump(e.target.value)}
        placeholder="e.g. still probably october?? vendor key blocked, sponsor asked in slack, risk register is from kickoff…"
        className="mt-4 min-h-[220px] bg-background font-mono text-sm"
      />
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          className="text-left text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          onClick={() => setDump(SAMPLE_DUMP)}
        >
          Load a sample dump
        </button>
        <Button onClick={clean} disabled={dump.trim().length < 40}>
          <Sparkles className="mr-1 h-4 w-4" />
          Clean this status
        </Button>
      </div>
    </Card>
  )
}

function SubscribeWall() {
  return (
    <Card className="border-border bg-surface p-10 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
        <Crown className="h-8 w-8 text-accent" />
      </div>
      <h2 className="mt-6 text-2xl font-bold text-foreground">Status Cleaner is on paid plans</h2>
      <p className="mx-auto mt-3 max-w-md text-muted-foreground">
        You&apos;ve used the shared free AI generation. Early Adopter and Pro include Status Cleaner
        and the document tools. Standalone list price is ${STATUS_CLEANER.standaloneUSD}/month.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Button asChild size="lg">
          <Link href="/pricing">
            <Crown className="mr-2 h-5 w-5" />
            See pricing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="ghost" size="lg">
          <Link href="/courses">Browse free courses instead</Link>
        </Button>
      </div>
    </Card>
  )
}
