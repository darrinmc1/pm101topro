import type { LucideIcon } from "lucide-react"
import {
  AlertTriangle,
  BarChart2,
  Calendar,
  FileText,
  GitBranch,
  Grid3x3,
  TrendingUp,
  Users,
} from "lucide-react"

export type DocType = {
  id: string
  name: string
  icon: LucideIcon
  blurb: string
  questions: string[]
}

export const DOC_TYPES: DocType[] = [
  {
    id: "project-charter",
    name: "Project Charter",
    icon: FileText,
    blurb: "Authorise the project and align everyone on purpose, scope, and stakeholders.",
    questions: [
      "What is the project name?",
      "What problem does this project solve, or what opportunity does it address?",
      "Who is the project sponsor or key decision-maker?",
      "What are the 3–5 main deliverables or outcomes?",
      "What is the target completion date or timeframe?",
      "What is the approximate budget or resource constraints?",
      "Who are the key stakeholders?",
      "Are there any known risks or constraints upfront?",
    ],
  },
  {
    id: "business-case",
    name: "Business Case",
    icon: TrendingUp,
    blurb: "Justify the investment with options, benefits, costs, and a clear recommendation.",
    questions: [
      "What is the business problem or opportunity?",
      "What options have been considered? (include \"do nothing\")",
      "What is the recommended option and why?",
      "What are the expected benefits (financial and non-financial)?",
      "What is the estimated cost and timeframe?",
      "What are the key risks of proceeding vs not proceeding?",
      "Who needs to approve this?",
    ],
  },
  {
    id: "risk-register",
    name: "Risk Register",
    icon: AlertTriangle,
    blurb: "Capture, score, and assign responses to the risks that could derail delivery.",
    questions: [
      "What is the project name?",
      "What methodology is the project using (Waterfall / Agile / Hybrid)?",
      "List the key risks you've identified so far (bullet points OK)",
      "For each risk, what is the likelihood (Low/Med/High)?",
      "For each risk, what is the impact (Low/Med/High)?",
      "What mitigation strategies are in place or planned?",
      "Who owns each risk?",
    ],
  },
  {
    id: "stakeholder-register",
    name: "Stakeholder Register",
    icon: Users,
    blurb: "Map interest, influence, and engagement approach for everyone with a stake.",
    questions: [
      "What is the project name?",
      "List the key stakeholders (names or roles)",
      "For each stakeholder, what is their interest in the project?",
      "What is their level of influence (Low/Med/High)?",
      "What is their current attitude (Supportive/Neutral/Resistant)?",
      "What engagement approach do you plan for each?",
    ],
  },
  {
    id: "raci-matrix",
    name: "RACI Matrix",
    icon: Grid3x3,
    blurb: "Clarify who is Responsible, Accountable, Consulted, and Informed for every task.",
    questions: [
      "What is the project name?",
      "List the key tasks or deliverables (up to 10)",
      "List the roles or people involved",
      "For each task, who is Responsible (does the work)?",
      "For each task, who is Accountable (sign-off authority)?",
      "Who needs to be Consulted for each task?",
      "Who needs to be Informed?",
    ],
  },
  {
    id: "wbs-schedule",
    name: "WBS / Project Schedule",
    icon: GitBranch,
    blurb: "Break work into phases and packages with dependencies, owners, and milestones.",
    questions: [
      "What is the project name and overall objective?",
      "What are the major phases of the project?",
      "For each phase, list the key tasks or work packages",
      "What are the dependencies between tasks?",
      "What is the project start date and end date?",
      "Who is assigned to each task or phase?",
      "Are there any fixed milestones or deadlines?",
    ],
  },
  {
    id: "meeting-agenda-minutes",
    name: "Meeting Agenda / Minutes",
    icon: Calendar,
    blurb: "Produce a tight agenda before, or clear minutes with actions after, any meeting.",
    questions: [
      "What is the meeting name/purpose?",
      "What is the date, time, and location/platform?",
      "Who are the attendees?",
      "What are the agenda items? (list them)",
      "Are you generating an Agenda (before meeting) or Minutes (after meeting)?",
      "If Minutes: what decisions were made?",
      "If Minutes: what action items were assigned, to whom, and by when?",
    ],
  },
  {
    id: "status-report",
    name: "Status Report",
    icon: BarChart2,
    blurb: "Give leadership a crisp read on status, progress, issues, and support needed.",
    questions: [
      "What is the project name and reporting period?",
      "What is the overall project status? (On Track / At Risk / Off Track)",
      "What was accomplished this period?",
      "What is planned for next period?",
      "What are the current issues or risks?",
      "What is the budget status?",
      "What decisions or support are needed from leadership?",
    ],
  },
]

export function getDocType(id: string): DocType | undefined {
  return DOC_TYPES.find((d) => d.id === id)
}
