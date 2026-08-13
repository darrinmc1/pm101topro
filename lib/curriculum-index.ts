import { COURSES, LEVEL_LABEL, METHODOLOGY_LABEL } from "@/lib/content"
import { DOC_TYPES } from "@/lib/documents"

export type CitationKind = "course" | "lesson" | "doc"

export type CurriculumCite = {
  id: string
  kind: CitationKind
  title: string
  href: string
  summary: string
  keywords: string[]
  courseTitle?: string
}

function uniqueKeywords(...groups: Array<string | string[]>): string[] {
  const set = new Set<string>()
  for (const group of groups) {
    const parts = Array.isArray(group) ? group : [group]
    for (const part of parts) {
      for (const token of part.toLowerCase().split(/[^a-z0-9]+/)) {
        if (token.length >= 4) set.add(token)
      }
    }
  }
  return [...set]
}

/** Extra retrieval terms so status dumps map onto the real archive. */
const LESSON_KEYWORDS: Record<string, string[]> = {
  "reporting-up": ["status", "rag", "green", "amber", "red", "executive", "steerco", "escalat", "sponsor", "update"],
  "written-updates": ["async", "written", "email", "slack", "update", "status", "brief"],
  "communication-planning": ["stakeholder", "audience", "channel", "cadence", "report"],
  "the-pm-lifecycle": ["lifecycle", "initiating", "planning", "executing", "monitoring", "closing", "phase"],
  "monitoring-control": ["baseline", "variance", "monitor", "control", "corrective"],
  "monitoring-controlling": ["baseline", "variance", "monitor", "control", "corrective"],
  "risk-frameworks": ["risk", "issue", "register", "likelihood", "impact"],
  "risk-response-strategies": ["mitigate", "avoid", "transfer", "accept", "response"],
  "qualitative-quantitative": ["probability", "impact", "exposure", "emv"],
  "defining-scope": ["scope", "creep", "inclusions", "exclusions"],
  "baseline-change-control": ["change", "baseline", "cr", "change request"],
  "budget-management": ["budget", "cost", "spend", "forecast"],
  "evm-fundamentals": ["earned", "value", "pv", "ev", "ac", "cpi", "spi"],
  "variances": ["cv", "sv", "variance", "behind", "overspend"],
  "critical-path-method": ["critical path", "float", "schedule", "slip"],
  "removing-impediments": ["blocker", "impediment", "stuck", "waiting"],
  "sprints-ceremonies": ["sprint", "standup", "review", "retro", "scrum"],
  "stakeholder-identification": ["stakeholder", "sponsor", "interested"],
  "managing-resistance": ["resistance", "pushback", "politics"],
  "pmo-reporting": ["pmo", "dashboard", "portfolio", "leadership"],
  "decision-making": ["decision", "approve", "sign-off"],
  "post-meeting": ["actions", "minutes", "owners", "due"],
  "handling-conflict": ["conflict", "tension", "disagreement"],
  "vendor-risk": ["vendor", "supplier", "third-party"],
  "resource-allocation": ["resource", "capacity", "overallocated"],
}

const DOC_KEYWORDS: Record<string, string[]> = {
  "status-report": ["status", "rag", "progress", "period", "leadership", "update"],
  "risk-register": ["risk", "issue", "mitigation", "owner"],
  "stakeholder-register": ["stakeholder", "sponsor", "influence"],
  "meeting-agenda-minutes": ["meeting", "actions", "minutes", "agenda"],
  "wbs-schedule": ["schedule", "milestone", "wbs", "deadline", "phase"],
  "project-charter": ["charter", "authorise", "objective"],
  "raci-matrix": ["raci", "accountable", "responsible", "owner"],
  "business-case": ["benefits", "investment", "options"],
}

let cached: CurriculumCite[] | null = null

export function getCurriculumIndex(): CurriculumCite[] {
  if (cached) return cached

  const cites: CurriculumCite[] = []

  for (const course of COURSES) {
    cites.push({
      id: `course:${course.slug}`,
      kind: "course",
      title: course.title,
      href: `/courses/${course.slug}`,
      summary: `${course.description} (${LEVEL_LABEL[course.level]} · ${METHODOLOGY_LABEL[course.methodology]})`,
      keywords: uniqueKeywords(course.title, course.description, course.slug, LEVEL_LABEL[course.level]),
      courseTitle: course.title,
    })

    for (const lesson of course.lessons) {
      cites.push({
        id: `lesson:${course.slug}/${lesson.slug}`,
        kind: "lesson",
        title: lesson.title,
        href: `/learn/${course.slug}/${lesson.slug}`,
        summary: lesson.summary || course.description,
        keywords: uniqueKeywords(
          lesson.title,
          lesson.summary,
          lesson.slug,
          course.title,
          LESSON_KEYWORDS[lesson.slug] ?? [],
        ),
        courseTitle: course.title,
      })
    }
  }

  for (const doc of DOC_TYPES) {
    cites.push({
      id: `doc:${doc.id}`,
      kind: "doc",
      title: doc.name,
      href: `/tools/${doc.id}`,
      summary: doc.blurb,
      keywords: uniqueKeywords(doc.name, doc.blurb, doc.id, DOC_KEYWORDS[doc.id] ?? []),
    })
  }

  cached = cites
  return cites
}

export function getCiteById(id: string): CurriculumCite | undefined {
  return getCurriculumIndex().find((c) => c.id === id)
}

export function compactCatalogForPrompt(): string {
  return getCurriculumIndex()
    .map((c) => `- ${c.id} | ${c.kind} | ${c.title}${c.courseTitle && c.kind === "lesson" ? ` (${c.courseTitle})` : ""} | ${c.summary}`)
    .join("\n")
}

const ALWAYS_ON_IDS = [
  "lesson:working-with-stakeholders/reporting-up",
  "lesson:communication-essentials/written-updates",
  "doc:status-report",
]

export function matchCitations(dump: string, limit = 5): CurriculumCite[] {
  const text = dump.toLowerCase()
  const tokens = new Set(text.split(/[^a-z0-9]+/).filter((t) => t.length >= 4))
  const scored = getCurriculumIndex()
    .map((cite) => {
      let score = 0
      for (const kw of cite.keywords) {
        if (tokens.has(kw) || (kw.length > 5 && text.includes(kw))) score += 1
      }
      if (ALWAYS_ON_IDS.includes(cite.id)) score += 2
      return { cite, score }
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score)

  const picked: CurriculumCite[] = []
  const seen = new Set<string>()
  for (const id of ALWAYS_ON_IDS) {
    const cite = getCiteById(id)
    if (cite && !seen.has(cite.id)) {
      picked.push(cite)
      seen.add(cite.id)
    }
  }
  for (const row of scored) {
    if (picked.length >= limit) break
    if (seen.has(row.cite.id)) continue
    picked.push(row.cite)
    seen.add(row.cite.id)
  }
  return picked.slice(0, limit)
}
