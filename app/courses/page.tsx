import type { Metadata } from "next"
import { CoursesBrowser } from "@/components/courses-browser"
import { EmailSignup } from "@/components/email-signup"
import { LEVEL_ORDER, METHODOLOGIES, type Level } from "@/lib/content"

export const metadata: Metadata = {
  title: "Courses – PMP, Agile, Scrum & PMO Training",
  description:
    "Browse project management courses covering PMP certification prep, Agile delivery, Scrum framework, and PMO setup. Structured learning from 101 to Pro.",
}

const METHODOLOGY_INTROS: Record<string, { heading: string; body: string }> = {
  pmp: {
    heading: "PMP Certification Courses",
    body: "Process groups, domains, and the scenarios the exam asks about. Study notes. This site does not issue the credential.",
  },
  agile: {
    heading: "Agile Project Management Courses",
    body: "Iterative delivery when the requirements are still moving: fundamentals, scale, kanban, and the Scrum role.",
  },
  scrum: {
    heading: "Scrum Framework Courses",
    body: "Two courses. Agile Fundamentals covers the events. Scrum Master Essentials covers running them without becoming the team's manager.",
  },
  pmo: {
    heading: "PMO Setup & Management Courses",
    body: "Mandate, model, staffing, and the portfolio work of running an office. PMP exam courses sit at the same level and stay on the PMP filter, not this one.",
  },
}

const LEVEL_INTROS: Record<Level, { heading: string; body: string }> = {
  "101": {
    heading: "101 courses",
    body: "The first charter, the lifecycle, and the meetings that should have stayed a paragraph.",
  },
  intermediate: {
    heading: "Intermediate courses",
    body: "Scope, schedule, stakeholders, and Scrum, once someone has already handed you the project.",
  },
  advanced: {
    heading: "Advanced courses",
    body: "Risk, earned value, quality, negotiation, and agile once it is no longer one team.",
  },
  pmo: {
    heading: "PMO-level courses",
    body: "Everything tagged at PMO level, including exam prep. For the office-setup courses only, use the PMO filter.",
  },
}

function isLevel(value: string): value is Level {
  return (LEVEL_ORDER as readonly string[]).includes(value)
}

export default async function CoursesPage({
  searchParams,
}: {
  searchParams?: Promise<{ methodology?: string; level?: string }>
}) {
  const resolved = searchParams ? await searchParams : {}
  const methodology = resolved?.methodology?.toLowerCase() ?? ""
  const levelParam = resolved?.level?.toLowerCase() ?? ""
  const methodologyIntro = METHODOLOGY_INTROS[methodology] ?? null
  const intro = methodologyIntro ?? (isLevel(levelParam) ? LEVEL_INTROS[levelParam] : null)
  const eyebrow = methodologyIntro ? "Methodology" : "Level"
  const knownMethodology = METHODOLOGIES.some((m) => m.value === methodology)
  const initialMethodology =
    methodology === "scrum" || methodology === "pmo" || knownMethodology
      ? (methodology as "traditional" | "agile" | "pmp" | "general" | "scrum" | "pmo")
      : "all"

  return (
    <>
      <section className="border-b border-border">
        <div className="container py-14">
          {intro ? (
            <>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">{eyebrow}</p>
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

      <CoursesBrowser
        key={`${initialMethodology}:${isLevel(levelParam) ? levelParam : "all"}`}
        initialLevel={isLevel(levelParam) ? levelParam : "all"}
        initialMethodology={initialMethodology}
      />
      <EmailSignup source="courses" />
    </>
  )
}
