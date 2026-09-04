import type { Metadata } from "next"
import Link from "next/link"
import { Download, FileText } from "lucide-react"
import { Card } from "@/components/ui/card"
import { PmWisdom } from "@/components/pm-wisdom"

export const metadata: Metadata = {
  title: "Free PM Templates",
  description:
    "Download free, professional project management templates - Project Charter, Risk Register, RACI Matrix, Status Report, Business Case, Meeting Minutes, WBS, Budget Tracker, Stakeholder Register, and Project Closure - from pm101toPro.",
}

interface Template {
  id: string
  filename: string
  title: string
  description: string
  features: string[]
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
  index,
}: {
  template: Template
  index: number
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

        {/* Right - download CTA */}
        <div className="flex items-center border-t border-border px-6 py-4 sm:border-b-0 sm:border-l sm:px-8">
          <Link
            href={`/downloads/${template.filename}`}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors active:scale-[0.96] transition-transform hover:bg-accent/90"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Link>
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
            <Download className="h-4 w-4" />
            Free Templates
          </div>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tightest text-foreground text-balance">
            Professional PM templates, ready to download
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Ten essential project management templates used by professional
            PMs every day. Each is a fillable PDF - download, print or edit
            digitally, and adapt to your project.
          </p>
        </div>
      </section>

      <section className="container py-14">
        <div className="mx-auto grid max-w-4xl gap-6">
          {templates.map((template, index) => (
            <TemplateCard
              key={template.id}
              template={template}
              index={index}
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
