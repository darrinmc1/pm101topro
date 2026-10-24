"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

/** Posts to the existing /api/subscribe audience. Shown while Buy is Coming soon. */
export function NotifyForm({ source }: { source: string }) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")
  const [message, setMessage] = useState("")

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setStatus("loading")
    setMessage("")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      })
      const data = (await res.json().catch(() => null)) as { error?: string; message?: string } | null
      if (!res.ok) {
        setStatus("error")
        setMessage(data?.error ?? "Could not save that email.")
        return
      }
      setStatus("done")
      setMessage(data?.message ?? "You're on the list.")
      setEmail("")
    } catch {
      setStatus("error")
      setMessage("Could not save that email.")
    }
  }

  if (status === "done") {
    return <p className="text-sm text-muted-foreground">{message}</p>
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
      <Input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email address"
        aria-label="Email for checkout notification"
        className="bg-background"
      />
      <Button type="submit" disabled={status === "loading"} className="shrink-0">
        {status === "loading" ? "Saving…" : "Notify me"}
      </Button>
      {status === "error" ? <p className="text-xs text-red-400 sm:basis-full">{message}</p> : null}
    </form>
  )
}
