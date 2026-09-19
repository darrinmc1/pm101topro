import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Courses – pm101toPro",
  description:
    "Master PMP, Agile, and Scrum with structured courses built for real project managers. Clear outcomes, practical curriculum, and AI-powered tools.",
}

const COURSES = [
  {
    slug: "pmp-foundations",
    badge: "PMP",
    title: "PMP Certification Foundations",
    subtitle: "PMBOK-aligned training to build your PMP knowledge base and pass with confidence.",
    duration: "12 hours",
    students: "2,400+",
    level: "Intermediate",
    outcomes: [
      "Understand all 10 PMBOK knowledge areas",
      "Apply predictive project lifecycle frameworks",
      "Build a complete project management plan",
      "Practise with PMP-style exam questions",
    ],
    curriculum: [
      "Project Integration & Scope Management",
      "Schedule, Cost & Quality Management",
      "Risk, Procurement & Stakeholder Management",
      "PMP Exam Strategy & Mock Tests",
    ],
    cta: "/courses/pmp-foundations",
    accentClass: "border-blue-500/40",
    badgeClass: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
  {
    slug: "agile-essentials",
    badge: "Agile",
    title: "Agile Essentials",
    subtitle: "Iterative delivery and adaptive planning for modern teams — from principles to practice.",
    duration: "8 hours",
    students: "3,100+",
    level: "Beginner",
    outcomes: [
      "Apply the 12 Agile Manifesto principles on real projects",
      "Run iterative planning and retrospectives",
      "Manage a product backlog and release plan",
      "Transition a traditional team to Agile delivery",
    ],
    curriculum: [
      "Agile Manifesto & Mindset",
      "Iterative Planning & Backlog Management",
      "Agile Estimation & Velocity",
      "Scaling Agile Across Teams",
    ],
    cta: "/courses/agile-essentials",
    accentClass: "border-green-500/40",
    badgeClass: "bg-green-500/10 text-green-400 border-green-500/30",
  },
  {
    slug: "scrum-master-prep",
    badge: "Scrum",
    title: "Scrum Master Prep",
    subtitle: "Sprints, ceremonies, and roles — everything you need to lead a Scrum team from day one.",
    duration: "10 hours",
    students: "1,800+",
    level: "Beginner",
    outcomes: [
      "Facilitate all five Scrum ceremonies effectively",
      "Coach a development team through impediments",
      "Build and refine a healthy product backlog",
      "Prepare for PSM I or CSM certification",
    ],
    curriculum: [
      "Scrum Framework & Roles",
      "Sprint Planning, Review & Retrospective",
      "Daily Scrum & Impediment Removal",
      "Scrum Certification Exam Prep",
    ],
    cta: "/courses/scrum-master-prep",
    accentClass: "border-orange-500/40",
    badgeClass: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  },
]

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Courses</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tightest text-foreground text-balance">
            Structured learning for every stage of your PM career
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Whether you're chasing PMP certification, moving your team to Agile, or stepping into a Scrum Master role — we have a course built around real outcomes, not just theory.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pmp-foundations">
              <Button variant="outline" size="sm">PMP Certification</Button>
            </a>
            <a href="#agile-essentials">
              <Button variant="outline" size="sm">Agile</Button>
            </a>
            <a href="#scrum-master-prep">
              <Button variant="outline" size="sm">Scrum</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Course Landing Cards */}
      <section className="container py-16 space-y-20">
        {COURSES.map((course) => (
          <div key={course.slug} id={course.slug} className="scroll-mt-20">
            <Card className={`border-2 ${course.accentClass} bg-surface overflow-hidden`}>
              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className={`inline-block rounded-full border px-3 py-0.5 text-xs font-semibold uppercase tracking-wider ${course.badgeClass}`}>
                      {course.badge}
                    </span>
                    <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                      {course.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                      {course.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2 text-sm text-muted-foreground shrink-0">
                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{course.duration}</span>
                    <span className="flex items-center gap-1.5"><Users className="h-4 w-4" />{course.students} students</span>
                    <span className="flex items-center gap-1.5"><Star className="h-4 w-4" />{course.level}</span>
                  </div>
                </div>

                {/* Outcomes + Curriculum */}
                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">What you'll achieve</h3>
                    <ul className="space-y-3">
                      {course.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2.5 text-sm text-foreground">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Curriculum highlights</h3>
                    <ol className="space-y-3">
                      {course.curriculum.map((module, i) => (
                        <li key={module} className="flex items-start gap-3 text-sm text-foreground">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border bg-background text-xs font-bold text-muted-foreground">
                            {i + 1}
                          </span>
                          {module}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-6">
                  <Link href={course.cta}>
                    <Button className="gap-2">
                      Start {course.badge} course
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/pricing" className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
                    View pricing
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-surface">
        <div className="container py-14 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground">Not sure where to start?</h2>
          <p className="mt-3 text-muted-foreground text-pretty max-w-xl mx-auto">
            Take our free 2-minute quiz and we'll recommend the right course for your experience level and goals.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/courses/pmp-foundations">
              <Button size="lg" className="gap-2">
                Browse all courses
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline">Learn about us</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
