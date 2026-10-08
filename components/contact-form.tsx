"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const SUBJECTS = [
  { value: "general", label: "General question" },
  { value: "course", label: "A course" },
  { value: "tools", label: "A document tool" },
  { value: "other", label: "Something else" },
]

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    if (typeof data.website === "string" && data.website !== "") {
      setStatus("sent")
      return
    }
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        setStatus("error")
        return
      }
      setStatus("sent")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <p className="rounded-xl border border-border bg-surface p-6 text-sm text-foreground" role="status">
        Got it. A person will read this. No autoresponder with a stock photo of a handshake.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="contact-name">Name</Label>
        <Input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-subject">Subject</Label>
        <select
          id="contact-subject"
          name="subject"
          defaultValue="general"
          className="flex h-10 w-full rounded-lg border border-border bg-surface px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {SUBJECTS.map((subject) => (
            <option key={subject.value} value={subject.value}>
              {subject.label}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          name="message"
          required
          minLength={8}
          rows={6}
          placeholder="What went sideways, or what you wanted to find."
        />
      </div>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      {status === "error" && (
        <p className="text-sm text-danger" role="alert">
          That didn&apos;t send. Try again, or email admin@pm101topro.com.
        </p>
      )}
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send the note"}
      </Button>
    </form>
  )
}
