"use client"

import { FormEvent, useId, useState } from "react"
import { Button } from "@/components/ui/button"
import { PRO_WAITLIST_SOURCE } from "@/lib/payments"
import { cn } from "@/lib/utils"

export function ProWaitlistForm({
  label = "Join the Pro waitlist",
  className,
}: {
  label?: string
  className?: string
}) {
  const waitlistId = useId()
  const [email, setEmail] = useState("")
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle")
  const [note, setNote] = useState("")

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState("loading")
    setNote("")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: PRO_WAITLIST_SOURCE }),
      })
      const data = (await res.json()) as { message?: string; error?: string }
      if (!res.ok) {
        setState("err")
        setNote(data.error || "Could not join the waitlist. Try again.")
        return
      }
      setState("ok")
      setNote(data.message || "You’re on the Pro waitlist.")
      setEmail("")
    } catch {
      setState("err")
      setNote("Network hiccup. Try the waitlist again in a minute.")
    }
  }

  return (
    <form onSubmit={onSubmit} className={cn("w-full text-left", className)}>
      <label htmlFor={waitlistId} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <input
          id={waitlistId}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@work-email.com"
          className="h-11 flex-1 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <Button type="submit" disabled={state === "loading"} className="h-11 shrink-0">
          {state === "loading" ? "Sending…" : "Join waitlist"}
        </Button>
      </div>
      {note ? (
        <p className="mt-2 text-xs text-muted-foreground" role="status" data-state={state}>
          {note}
        </p>
      ) : (
        <p className="mt-2 text-xs text-muted-foreground">
          Checkout is parked. We are not charging cards.
        </p>
      )}
    </form>
  )
}
