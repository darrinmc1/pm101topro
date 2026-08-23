import type { Metadata } from "next"
import { CoursesBrowser } from "@/components/courses-browser"

export const metadata: Metadata = {
  title: "Courses – PMP, Agile, Scrum & PMO Training",
  description:
    "Browse project management courses covering PMP certification prep, Agile delivery, Scrum framework, and PMO setup. Structured learning from 101 to Pro.",
}

const METHODOLOGY_INTROS: Record<string, { heading: string; body: string }> = {
  pmp: {
    heading: "PMP Certification Courses",
    body: "Build the knowledge base required for PMP certification. Our courses follow PMBOK-aligned principles — initiating, planning, executing, monitoring, and closing — so you learn the language and practices that certified project managers use every day.",
  },
  agile: {
    heading: "Agile Project Management Courses",
    body: "Learn how to deliver value iteratively with Agile. From the Agile Manifesto to real-world adaptive planning, these courses give you the mindset and tools to lead Agile teams confidently.",
  },
  scrum: {
    heading: "Scrum Framework Courses",
    body: "Master the Scrum framework — sprints, backlogs, ceremonies, and roles. Practical, hands-on content designed for developers, product owners, and anyone working in a Scrum team.",
  },
  pmo: {
    heading: "PMO Setup & Management Courses",
    body: "Learn how to establish, run, and evolve a Project Management Office. From governance models to executive reporting, these advanced courses prepare you to lead at the organisational level.",
  },
}

export default async function CoursesPage({
  searchParams,
}: {
  searchParams?: Promise<{ methodology?: string }>
}) {
  const resolved = searchParams ? await searchParams : {}
  const methodology = resolved?.methodology?.toLowerCase() ?? ""
  const intro = METHODOLOGY_INTROS[methodology] ?? null

  return (
    <>
      <section className="border-b border-border">
        <div className="container py-14">
          {intro ? (
            <>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">Methodology</p>
              <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tightest text-foreground text-balance">
                {intro.heading}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
                {intro.body}
              </p>
            </>
          ) : (
            <>
              <h1 className="text-4xl font-extrabold tracking-tightest text-foreground">
                All courses
              </h1>
              <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                Structured project management training covering PMP, Agile, Scrum, PMO, and general practice — from your first project to running the room.
              </p>
            </>
          )}
        </div>
      </section>

      <CoursesBrowser />
    </>
  )
}
