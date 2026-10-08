"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function EmailSignup({ source }: { source: string }) {
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("")
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (website) {
      setStatus("saved")
      return
    }
    setStatus("saving")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, website }),
      })
      if (!res.ok) {
        setStatus("error")
        return
      }
      setStatus("saved")
      setEmail("")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="border-t border-border">
      <div className="container py-16">
        <div className="mx-auto max-w-xl">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Occasional notes
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground">
            A note when a new course ships
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            New lessons, and the odd PM joke. No countdown timer, no certificate
            with your name on it.
          </p>
          {status === "saved" ? (
            <p className="mt-6 text-sm text-foreground" role="status">
              Saved. We&apos;ll write when there&apos;s something worth opening.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <label htmlFor={`signup-email-${source}`} className="sr-only">
                Email
              </label>
              <Input
                id={`signup-email-${source}`}
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="sm:flex-1"
              />
              <input
                type="text"
                name="website"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <Button type="submit" disabled={status === "saving"}>
                {status === "saving" ? "Saving…" : "Send it"}
              </Button>
            </form>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-danger" role="alert">
              That didn&apos;t save. Try again in a minute.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
