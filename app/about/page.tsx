import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Compass, GraduationCap, Layers, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About – pm101toPro",
  description:
    "pm101toPro exists to take anyone from their first project to running the room — practical project management training for PMP, Agile, Scrum, and PMO.",
}

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About pm101toPro",
  url: "https://pm101topro.com/about",
  description:
    "pm101toPro exists to take anyone from their first project to running the room — practical project management training for PMP, Agile, Scrum, and PMO.",
  mainEntity: {
    "@type": "Organization",
    name: "pm101toPro",
    url: "https://pm101topro.com",
    description:
      "Practical project management training covering PMP, Agile, Scrum, and PMO — from your first project to running the room.",
    knowsAbout: [
      "Project Management",
      "PMP Certification",
      "Agile Methodology",
      "Scrum Framework",
      "PMO Governance",
    ],
  },
}

const VALUES = [
  {
    icon: Compass,
    title: "Practical over theoretical",
    body: "We teach what you actually use on a live project, not exam trivia. Every concept links to a real deliverable.",
  },
  {
    icon: Layers,
    title: "Every methodology",
    body: "Traditional waterfall, Agile, Scrum, PMP-aligned, and PMO governance — because real teams rarely fit into one neat box.",
  },
  {
    icon: GraduationCap,
    title: "101 to Pro",
    body: "A clear path from your first charter to running a PMO, with a level rail that shows exactly how far you've come.",
  },
  {
    icon: Sparkles,
    title: "AI that does the busywork",
    body: "Turn what you've learned into professional documents in minutes, so you can focus on leading the project.",
  },
]

const METHODOLOGIES = [
  { label: "PMP Certification", href: "/courses?methodology=pmp", description: "PMBOK-aligned courses to build your PMP knowledge base." },
  { label: "Agile", href: "/courses?methodology=agile", description: "Iterative delivery and adaptive planning for modern teams." },
  { label: "Scrum", href: "/courses?methodology=scrum", description: "Sprints, ceremonies, and roles for Scrum practitioners." },
  { label: "PMO", href: "/courses?methodology=pmo", description: "Governance, reporting, and organisational PM leadership." },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />
      <section className="border-b border-border">
        <div className="container py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">About us</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tightest text-foreground text-balance">
            From your first project to running the room
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Most people fall into project management sideways — handed a project, a nervous sponsor,
            and no roadmap. pm101toPro is the roadmap.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">What we believe</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {VALUES.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="border-border bg-surface p-6">
              <Icon className="h-6 w-6 text-accent" />
              <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container py-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">What we cover</h2>
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Every major project management methodology, taught practically.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {METHODOLOGIES.map((m) => (
              <Link
                key={m.label}
                href={m.href}
                className="group rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent/50"
              >
                <p className="font-semibold text-foreground">{m.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
                <ArrowRight className="mt-3 h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Ready to level up?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Start with a free course and see how far the path goes.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/courses">Browse courses</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/sign-up">Create free account</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
