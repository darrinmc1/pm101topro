"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DOC_TYPES } from "@/lib/documents"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

/** Types a string character by character once the component mounts */
function useTypewriter(text: string, speed = 32) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)
  const idxRef = useRef(0)

  useEffect(() => {
    setDisplayed("")
    setDone(false)
    idxRef.current = 0
    const interval = setInterval(() => {
      idxRef.current++
      setDisplayed(text.slice(0, idxRef.current))
      if (idxRef.current >= text.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return { displayed, done }
}

export function ToolTeaser() {
  const textRef   = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
  const mockupRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section className="border-b border-border py-20">
      <div className="container grid items-center gap-12 lg:grid-cols-2">

        {/* Left - copy */}
        <div ref={textRef} className="reveal-left">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-secondary">
            AI Document Generator
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tightest text-foreground">
            Answer a few questions.{" "}
            <span className="text-accent text-glow">Get a real document.</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Our conversational AI interviews you like a senior PM consultant,
            then generates a professional, ready-to-use document in clean
            formatting. Eight document types cover the whole project lifecycle.
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-3">
            {DOC_TYPES.map((doc, i) => (
              <li
                key={doc.id}
                className={`flex items-center gap-2.5 text-sm text-foreground
                            reveal-up stagger-${Math.min(i + 1, 5)}`}
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center
                                 justify-center rounded-lg bg-accent/15 text-accent">
                  <doc.icon className="h-4 w-4" />
                </span>
                {doc.name}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild className="group">
              <Link href="/tools/project-charter">
                Generate a project charter
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Link
              href="/downloads/project-charter-template.pdf"
              className="text-sm font-medium text-muted-foreground underline-offset-4
                         transition-colors hover:text-foreground hover:underline"
            >
              Download blank charter template
            </Link>
          </div>
        </div>

        {/* Right - animated mockup */}
        <div ref={mockupRef} className="reveal-right">
          <DocMockup />
        </div>

      </div>
    </section>
  )
}

function DocMockup() {
  const USER_MSG = "The project is a mobile banking app redesign."
  const { displayed, done } = useTypewriter(USER_MSG, 30)

  return (
    <div className="glass rounded-2xl p-4 shadow-blue-glow">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">
          project-charter.md
        </span>
      </div>

      <div className="space-y-4 py-4">
        {/* User message - types in */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-accent
                          px-4 py-2.5 text-sm text-accent-foreground min-h-[2.5rem]">
            {displayed}
            {!done && (
              <span className="cursor-blink ml-0.5 inline-block h-3.5 w-px
                               bg-accent-foreground align-middle" />
            )}
          </div>
        </div>

        {/* AI response - fades in after typing finishes */}
        <div
          className={`flex justify-start transition-opacity duration-500 ${done ? "opacity-100" : "opacity-0"}`}
        >
          <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-surface-raised
                          px-4 py-2.5 text-sm text-foreground">
            Great. Who is the project sponsor or key decision-maker?
          </div>
        </div>

        {/* Generated doc preview - fades in after AI response */}
        <div
          className={`rounded-xl border border-white/10 bg-background/60 p-4
                      transition-all duration-700 delay-300
                      ${done ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
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
