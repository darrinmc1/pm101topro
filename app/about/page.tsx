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
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About pm101toPro",
    description:
      "pm101toPro exists to take anyone from their first project to running the room — practical project management training for PMP, Agile, Scrum, and PMO.",
    url: "https://www.pm101topro.com/about",
    publisher: {
      "@type": "Organization",
      name: "pm101toPro",
      url: "https://www.pm101topro.com",
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.pm101topro.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://www.pm101topro.com/about",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="border-b border-border">
        <div className="container py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">About us</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tightest text-foreground text-balance">
            From your first project to running the room
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Most people fall into project management sideways — handed a project, a nervous sponsor, and no roadmap.
            pm101toPro is the roadmap.
          </p>
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">What we stand for</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {VALUES.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="border-border bg-surface p-6">
              <Icon className="h-6 w-6 text-accent" />
              <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container py-14">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Methodologies we cover</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {METHODOLOGIES.map(({ label, href, description }) => (
              <Link
                key={label}
                href={href}
                className="group flex flex-col gap-1 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent/50"
              >
                <span className="font-semibold text-foreground group-hover:text-accent">{label}</span>
                <span className="text-sm text-muted-foreground">{description}</span>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild>
              <Link href="/courses">
                Browse all courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
