import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact – pm101toPro",
  description:
    "Write to pm101toPro about a course, a document tool, or a page that wandered off the plan.",
}

export default function ContactPage() {
  return (
    <section className="border-b border-border">
      <div className="container max-w-2xl py-16">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">Contact</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tightest text-foreground">
          Send a note
        </h1>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Questions about a course, a charter that will not sign itself, or a
          document tool that got creative. A person reads these. We do not issue
          credentials from this form either.
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Forms make some people suspicious. Fair. This one still reaches a person.
        </p>
      </div>
    </section>
  )
}
