import {
  compactCatalogForPrompt,
  getCiteById,
  matchCitations,
  type CurriculumCite,
} from "@/lib/curriculum-index"

export type RagStatus = "green" | "amber" | "red"

export type NextAction = {
  action: string
  owner: string
  due: string
}

export type StatusCitation = {
  id: string
  kind: CurriculumCite["kind"]
  title: string
  href: string
  courseTitle?: string
  why: string
}

export type StatusResult = {
  rag: RagStatus
  headline: string
  cleanedStatus: string
  biggestRisk: string
  ask: string
  nextActions: NextAction[]
  citations: StatusCitation[]
}

export const SAMPLE_DUMP = `Weekly dump — sorry this is messy, been in back to backs

banking app redesign still "going" I guess. design said screens are 80% but engineering haven't seen the latest and keep building off last month's figma. stand-up every day is 25 min of people explaining they're not blocked except Priya who has been blocked on the vendor API key for 9 days. I pinged procurement twice.

sponsor (Dana) asked in slack "are we still october" and I said probably?? finance wants a forecast by Friday. we spent ~$42k of $60k and we're only in week 6 of 12. testing environment still doesn't exist. legal hasn't signed the data processing thing.

done this week: user research playback, some copy, booked a working session that got cancelled. next: I need to somehow get design and eng in a room, escalate the vendor, and write the steerco slide. also the risk register is from kickoff and nobody has opened it.

oh and marketing already announced the launch date internally which we never agreed.`

const PM101_METHOD = `PM101 status method (from "Reporting up" in Working with Stakeholders, plus "Written updates"):

1. Answer three questions first: Are we on track (Green / Amber / Red with teeth)? What is the biggest risk or issue right now? What do you need from the reader?
2. Green = you would bet your reputation the milestone holds. Amber = a known risk could cause a miss unless something changes — say what that something is. Red = a miss is certain without intervention. Do not sit on Amber for months.
3. Do not use the update to prove how busy the team was. Executives do not want a task count.
4. Escalate early, with a proposed solution — not a complaint.
5. Supporting detail (accomplishments, plan, budget, issues) sits below the fold.
6. Next actions must have an owner. Dates if the dump implies them; otherwise "this week" / "unassigned".
7. Cite only items from the provided curriculum catalog. Prefer Reporting up, Written updates, Status Report, and whatever else the dump actually touches (risk, schedule, vendors, stakeholders, EVM, etc.).`

export function buildStatusPrompt(dump: string): string {
  return `You are the pm101toPro Status Cleaner — not a chatbot. One job: turn a messy project update into a board-ready status using the PM101 method.

Voice: practical, plain English, slightly dry. British/international PM spelling (organise, authorise) is fine. No hype. No "great question". No invented metrics.

${PM101_METHOD}

Curriculum catalog (cite only these ids):
${compactCatalogForPrompt()}

Return JSON only, no markdown fences, matching:
{
  "rag": "green" | "amber" | "red",
  "headline": "one sentence a sponsor can read in a Slack huddle",
  "cleanedStatus": "markdown with short sections: On track?, What moved, What's slipping, Budget/resources if mentioned",
  "biggestRisk": "the single biggest risk or issue, named plainly",
  "ask": "what you need from leadership, with a proposed solution",
  "nextActions": [{ "action": "...", "owner": "...", "due": "..." }],
  "citations": [{ "id": "lesson:... or course:... or doc:...", "why": "one line tying this dump to that lesson or doc type" }]
}

Messy dump:
"""
${dump.trim()}
"""`
}

function splitLines(dump: string): string[] {
  const chunks = dump
    .split(/\r?\n|(?<=[.!?])\s+|(?<=;)\s+/)
    .map((line) => line.replace(/^[\s>*\-•\d.)]+/, "").trim())
    .filter((line) => line.length > 12)
  const unique: string[] = []
  for (const chunk of chunks) {
    if (!unique.some((u) => u === chunk)) unique.push(chunk)
  }
  return unique
}

function classifyRag(dump: string): RagStatus {
  const text = dump.toLowerCase()
  const redHits =
    /(off track|blocked|won't make|will miss|red\b|critical|no test(?:ing)? env|does not exist|doesn't exist|announced .{0,40}never agreed|9 days|overspent)/.test(
      text,
    )
  const amberHits =
    /(at risk|delayed|slipping|probably\?\?|probably|haven't seen|have not seen|waiting on|vendor|forecast|amber|cancelled)/.test(
      text,
    )
  const greenHits = /(on track|shipped|green\b|complete|closed out)/.test(text)
  if (redHits && !greenHits) return "red"
  if (redHits) return "amber"
  if (amberHits) return "amber"
  if (greenHits) return "green"
  return "amber"
}

function pick(lines: string[], re: RegExp, fallback: string): string {
  const hit = lines.find((line) => re.test(line) && line.length < 280)
  return hit || fallback
}

function actionsFromDump(lines: string[]): NextAction[] {
  const defaults: NextAction[] = [
    {
      action: "Name the RAG honestly and send a three-question update to the sponsor",
      owner: "Project manager",
      due: "Today",
    },
    {
      action: "Escalate the top blocker with one proposed solution",
      owner: "Project manager",
      due: "This week",
    },
    {
      action: "Refresh the risk register so it matches what is actually happening",
      owner: "Project manager",
      due: "This week",
    },
  ]

  const mapped = lines
    .filter((line) =>
      /(need to|escalate|write|get .{0,40} in a room|forecast|risk register|unblock|decision|\bsign\b|blocked|vendor|announced)/i.test(
        line,
      ),
    )
    .slice(0, 5)
    .map((line) => ({
      action: line.replace(/^(oh and|also|next:|done this week:)/i, "").trim().slice(0, 180),
      owner: /vendor|procurement/i.test(line)
        ? "PM + procurement"
        : /sponsor|dana|leadership|steerco/i.test(line)
          ? "Sponsor"
          : "Project manager",
      due: /friday/i.test(line) ? "Friday" : "This week",
    }))

  const merged = [...mapped]
  for (const item of defaults) {
    if (merged.length >= 5) break
    if (!merged.some((m) => m.action === item.action)) merged.push(item)
  }
  return merged.slice(0, 5)
}

export function heuristicStatus(dump: string): StatusResult {
  const lines = splitLines(dump)
  const rag = classifyRag(dump)
  const ragLabel = rag === "green" ? "Green" : rag === "red" ? "Red" : "Amber"

  const biggestRisk = pick(
    lines,
    /block|vendor|risk|legal|test(?:ing)? env|announced|never agreed|procurement/i,
    "The dump never names a single biggest risk — treat that as the risk.",
  )

  const ask = pick(
    lines,
    /need|decision|sponsor|forecast|approve|help|escalate/i,
    "A decision on the date, the blocker, or both — with a recommended option.",
  )

  const moved = lines.filter((line) =>
    /(done|completed|shipped|playback|booked|finished)/i.test(line),
  )
  const slipping = lines.filter((line) =>
    /(haven't|blocked|doesn't exist|hasn't|cancelled|building off|probably)/i.test(line),
  )

  const cleanedStatus = [
    `### On track?`,
    `**${ragLabel}.** ${
      rag === "green"
        ? "Nothing in this dump contradicts the date — still say what would turn it Amber."
        : rag === "red"
          ? "A miss is in play without intervention. Do not dress this up as Amber."
          : "Known issues could blow the date unless something changes. Name the change."
    }`,
    ``,
    `### What moved`,
    moved.length
      ? moved.map((line) => `- ${line}`).join("\n")
      : "- The dump does not cleanly separate accomplishments from noise. Pull 2–3 facts before you send this.",
    ``,
    `### What's slipping`,
    slipping.length
      ? slipping.map((line) => `- ${line}`).join("\n")
      : "- No explicit slips named — check schedule, vendors, and decisions anyway.",
    ``,
    `### Budget / resources`,
    /\$|budget|spent|forecast|over/i.test(dump)
      ? `- ${pick(lines, /\$|budget|spent|forecast/i, "Budget was mentioned — put the number and the remaining runway in one line.")}`
      : "- Not mentioned. If leadership will ask, add actual vs plan in one sentence.",
  ].join("\n")

  const citations = matchCitations(dump).map((cite) => toCitation(cite, whyForCite(cite, dump)))

  return {
    rag,
    headline:
      rag === "red"
        ? "Red: the date, a blocker, or a silent announcement will bite without a decision this week."
        : rag === "green"
          ? "Green: the milestone still holds — here is the one risk that would change that."
          : "Amber: still recoverable, but only if the named blocker and the date get a decision.",
    cleanedStatus,
    biggestRisk,
    ask,
    nextActions: actionsFromDump(lines),
    citations,
  }
}

function whyForCite(cite: CurriculumCite, dump: string): string {
  if (cite.id.includes("reporting-up")) {
    return "Use the three-question status: on track, biggest risk, what you need from me."
  }
  if (cite.id.includes("written-updates")) {
    return "Turn this dump into an async update people will actually read."
  }
  if (cite.id.includes("status-report")) {
    return "The Status Report doc type is the durable version of this cleaner."
  }
  if (/risk/i.test(cite.title) || cite.id.includes("risk")) {
    return "The dump is carrying live risks that belong on a register, not in a paragraph."
  }
  if (/vendor/i.test(cite.title) || /vendor/i.test(dump) && /vendor/i.test(cite.summary)) {
    return "A third party is on the critical path — treat it as vendor management, not a side chat."
  }
  if (/schedul|critical path|time/i.test(cite.title)) {
    return "Dates and slips need a schedule conversation, not a 'probably'."
  }
  return cite.summary
}

function toCitation(cite: CurriculumCite, why: string): StatusCitation {
  const row: StatusCitation = {
    id: cite.id,
    kind: cite.kind,
    title: cite.title,
    href: cite.href,
    why: why.slice(0, 240),
  }
  if (cite.courseTitle) row.courseTitle = cite.courseTitle
  return row
}

export function hydrateCitations(
  raw: Array<{ id?: string; why?: string }> | undefined,
  dump: string,
): StatusCitation[] {
  const fromModel: StatusCitation[] = []
  for (const item of raw ?? []) {
    const cite = item.id ? getCiteById(item.id) : undefined
    if (!cite) continue
    fromModel.push(toCitation(cite, item.why || cite.summary))
  }

  if (fromModel.length >= 3) return fromModel.slice(0, 6)
  const extras = matchCitations(dump).filter((c) => !fromModel.some((m) => m.id === c.id))
  return [...fromModel, ...extras.map((cite) => toCitation(cite, whyForCite(cite, dump)))].slice(0, 6)
}

export function parseModelStatus(text: string, dump: string): StatusResult | null {
  const trimmed = text.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "")
  const start = trimmed.indexOf("{")
  const end = trimmed.lastIndexOf("}")
  if (start === -1 || end === -1) return null
  try {
    const parsed = JSON.parse(trimmed.slice(start, end + 1)) as Partial<StatusResult> & {
      citations?: Array<{ id?: string; why?: string }>
    }
    const rag = parsed.rag
    if (rag !== "green" && rag !== "amber" && rag !== "red") return null
    if (!parsed.headline || !parsed.cleanedStatus || !parsed.biggestRisk || !parsed.ask) {
      return null
    }
    const nextActions = Array.isArray(parsed.nextActions)
      ? parsed.nextActions
          .map((item) => ({
            action: String(item?.action || "").trim(),
            owner: String(item?.owner || "Unassigned").trim() || "Unassigned",
            due: String(item?.due || "This week").trim() || "This week",
          }))
          .filter((item) => item.action)
          .slice(0, 8)
      : []
    return {
      rag,
      headline: String(parsed.headline).slice(0, 280),
      cleanedStatus: String(parsed.cleanedStatus).slice(0, 8000),
      biggestRisk: String(parsed.biggestRisk).slice(0, 600),
      ask: String(parsed.ask).slice(0, 600),
      nextActions: nextActions.length ? nextActions : heuristicStatus(dump).nextActions,
      citations: hydrateCitations(parsed.citations, dump),
    }
  } catch {
    return null
  }
}

export function resultToMarkdown(result: StatusResult): string {
  const ragLabel = result.rag.toUpperCase()
  const actions = result.nextActions
    .map((item) => `- ${item.action} — ${item.owner} (${item.due})`)
    .join("\n")
  const cites = result.citations
    .map((c) => `- ${c.title}${c.courseTitle ? ` · ${c.courseTitle}` : ""} — ${c.why}`)
    .join("\n")
  return [
    `# Status · ${ragLabel}`,
    ``,
    result.headline,
    ``,
    result.cleanedStatus,
    ``,
    `## Biggest risk`,
    result.biggestRisk,
    ``,
    `## What I need from you`,
    result.ask,
    ``,
    `## Next actions`,
    actions,
    ``,
    `## PM101 citations`,
    cites,
  ].join("\n")
}
