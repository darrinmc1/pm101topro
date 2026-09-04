import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock, FileText } from "lucide-react"
import { Card } from "@/components/ui/card"
import { PmWisdom } from "@/components/pm-wisdom"

export const metadata: Metadata = {
  title: "PM Templates — Coming Soon",
  description:
    "Fillable PDF templates are Coming Soon. Draft a charter, risk register, RACI, status report, and more with the existing document generators.",
}

interface Template {
  id: string
  filename: string
  title: string
  description: string
  features: string[]
  toolId?: string
}

const templates: Template[] = [
  {
    id: "project-charter",
    filename: "project-charter-template.pdf",
    title: "Project Charter",
    description:
      "Formalize project initiation with this one-page charter covering project name, purpose, sponsor, PM, SMART objectives, scope, key deliverables, timeline, budget, stakeholders, risks, and approval signature block.",
    features: [
      "Project identification & sponsor details",
      "SMART objectives (3-5)",
      "In-scope / out-of-scope sections",
      "Timeline & budget by phase",
      "Stakeholder & risk identification",
      "Approval signatures",
    ],
    toolId: "project-charter",
  },
  {
    id: "risk-register",
    filename: "risk-register-template.pdf",
    title: "Risk Register",
    description:
      "Track and manage project risks with ID, description, likelihood (L/M/H), impact (L/M/H), score (1-9), owner, mitigation strategy, and status - plus a built-in risk scoring matrix.",
    features: [
      "Pre-numbered 18-row risk log",
      "Likelihood / Impact / Score columns",
      "Owner & mitigation strategy fields",
      "Status tracking per risk",
      "Risk Scoring Matrix reference table",
    ],
    toolId: "risk-register",
  },
  {
    id: "raci-matrix",
    filename: "raci-matrix-template.pdf",
    title: "RACI Matrix",
    description:
      "Clarify roles and responsibilities with this RACI matrix spanning 13 project activities across Sponsor, PM, Team Lead, Team Member, and Stakeholder roles - complete with color-coded legend.",
    features: [
      "13 pre-filled project tasks",
      "5 role columns (Sponsor, PM, Team Lead, Team Member, Stakeholder)",
      "Color-coded R/A/C/I cells",
      "Legend with role descriptions",
      "Ready to customize",
    ],
    toolId: "raci-matrix",
  },
  {
    id: "status-report",
    filename: "status-report-template.pdf",
    title: "Status Report",
    description:
      "Keep stakeholders informed with this comprehensive status report covering RAG status, accomplishments, next-period plans, issues & risks, budget variance, and decisions needed.",
    features: [
      "RAG status indicator (Green / Amber / Red)",
      "Accomplishments & next-period plans",
      "Issues & risks log",
      "Budget tracking with variance",
      "Decisions-needed register",
    ],
    toolId: "status-report",
  },
  {
    id: "business-case",
    filename: "business-case-template.pdf",
    title: "Business Case",
    description:
      "Build a compelling business case with executive summary, problem statement, 3-option analysis, recommended option justification, quantified benefits, multi-year costs, and risk mitigation.",
    features: [
      "Executive summary section",
      "Problem statement / opportunity",
      "3-option analysis with cost & benefit columns",
      "Recommended option justification",
      "3-year benefit & cost projections",
      "Risk register & mitigation",
      "Approval signatures",
    ],
    toolId: "business-case",
  },
  {
    id: "meeting-minutes",
    filename: "meeting-minutes-template.pdf",
    title: "Meeting Minutes",
    description:
      "Capture meeting outcomes professionally with attendee tracking, agenda items, discussion summaries, decisions, action items with owners and due dates, and next-meeting details.",
    features: [
      "Meeting information header",
      "Attendee list with roles",
      "Agenda with time allocations",
      "Discussion & decisions log",
      "Action items with owner & due date",
      "Next meeting placeholder",
    ],
    toolId: "meeting-agenda-minutes",
  },
  {
    id: "wbs",
    filename: "wbs-template.pdf",
    title: "Work Breakdown Structure",
    description:
      "Decompose project scope into manageable pieces with this 3-level WBS (Phase → Deliverable → Work Package) including owner assignment and estimated hours - covers 4 phases and 20+ work packages.",
    features: [
      "3-level hierarchy (Phase / Deliverable / Work Package)",
      "4 project phases (Initiation, Planning, Execution, Closure)",
      "WBS code numbering system",
      "Owner assignment per package",
      "Estimated hours column",
      "Pre-filled example entries",
      "WBS Dictionary notes section",
    ],
    toolId: "wbs-schedule",
  },
  {
    id: "budget-tracker",
    filename: "budget-tracker-template.pdf",
    title: "Budget Tracker",
    description:
      "Track project spending category by category with budgeted amounts, actual costs, variances, and percentage used across Labour, Materials, Software, Travel, Training, Contingency, and Misc categories.",
    features: [
      "7 budget categories with example data",
      "Budgeted vs. Actual vs. Variance columns",
      "Percentage-used calculation per category",
      "Auto-summed totals row",
      "Notes and adjustments section",
      "PM and Sponsor approval block",
    ],
  },
  {
    id: "stakeholder-register",
    filename: "stakeholder-register-template.pdf",
    title: "Stakeholder Register",
    description:
      "Identify and plan engagement for every stakeholder with name, role, interest and influence levels (L/M/H), engagement strategy, and status tracking - includes 8 pre-filled example entries.",
    features: [
      "8 pre-filled stakeholder entries",
      "Interest & Influence scoring (Low / Medium / High)",
      "Custom engagement strategy per stakeholder",
      "Status column (Active / Watch / Monitor)",
      "Legend with scoring definitions",
    ],
    toolId: "stakeholder-register",
  },
  {
    id: "project-closure",
    filename: "project-closure-template.pdf",
    title: "Project Closure Report",
    description:
      "Formally close out a project with actual vs. planned performance on scope, time, and budget; deliverables acceptance checklist; lessons learned; outstanding items handover; and final approval signatures.",
    features: [
      "Project identification section",
      "Scope / Time / Budget variance analysis",
      "Deliverables acceptance checklist (Y/N)",
      "Lessons learned (what went well, improvements, recommendations)",
      "Outstanding items handover table",
      "PM and Sponsor signature blocks",
    ],
  },
]

function TemplateCard({
  template,
}: {
  template: Template
}) {
  return (
    <Card
      id={template.id}
      className="overflow-hidden border-border bg-surface transition-colors hover:border-accent/30"
    >
      <div className="flex flex-col gap-0 sm:flex-row">
        {/* Left - content */}
        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                {template.title}
              </h2>
              <p className="text-xs text-muted-foreground">
                {template.filename}
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
            {template.description}
          </p>

          <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
            {template.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-1.5 text-xs text-muted-foreground"
              >
                <span className="h-1 w-1 rounded-full bg-accent/60" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Right - honest availability */}
        <div className="flex flex-col items-start justify-center gap-3 border-t border-border px-6 py-4 sm:border-b-0 sm:border-l sm:px-8">
          <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-muted-foreground">
            <Clock className="h-4 w-4" />
            Coming Soon
          </span>
          {template.toolId ? (
            <Link
              href={`/tools/${template.toolId}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              Draft with the generator
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ) : (
            <p className="max-w-[12rem] text-xs leading-relaxed text-muted-foreground">
              No PDF yet. No generator for this type either — listed so we do not pretend otherwise.
            </p>
          )}
        </div>
      </div>
    </Card>
  )
}

export default function DownloadsPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-sm text-accent">
            <Clock className="h-4 w-4" />
            Templates · Coming Soon
          </div>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tightest text-foreground text-balance">
            Fillable PDFs are Coming Soon
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            We listed ten template types so you can see the set. The PDFs are
            not available yet — a download button that 404s is not a template.
            Where a document generator already exists, use that to draft the
            same artefact. Budget Tracker and Project Closure have no generator
            yet either.
          </p>
        </div>
      </section>

      <section className="container py-14">
        <div className="mx-auto grid max-w-4xl gap-6">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
            />
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <div className="mx-auto max-w-lg">
          <PmWisdom />
        </div>
      </section>
    </>
  )
}
