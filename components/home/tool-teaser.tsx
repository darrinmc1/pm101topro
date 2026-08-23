import Link from "next/link"
import { ArrowRight, FileText, ClipboardList, AlertTriangle, Users, BarChart2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const AI_TOOLS = [
  {
    icon: FileText,
    title: "Project Charter Generator",
    description:
      "Describe your project in plain English and get a professionally structured charter — scope, objectives, stakeholders, and success criteria — ready to share with your sponsor in minutes.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Register Builder",
    description:
      "Input your project context and receive a prioritised risk register with likelihood ratings, impact scores, and mitigation strategies aligned to PMBOK and Agile best practices.",
  },
  {
    icon: ClipboardList,
    title: "Status Report Writer",
    description:
      "Turn your bullet-point updates into a polished executive status report. Choose your audience — sponsor, PMO, or team — and the AI adapts the tone and detail level automatically.",
  },
  {
    icon: Users,
    title: "Stakeholder Map Creator",
    description:
      "Identify and categorise stakeholders by influence and interest. The tool generates a stakeholder register and suggests tailored engagement strategies for each group.",
  },
  {
    icon: BarChart2,
    title: "Lessons Learned Summariser",
    description:
      "Paste in retrospective notes or meeting transcripts and receive a structured lessons-learned document, complete with root-cause analysis and recommendations for future projects.",
  },
  {
    icon: Sparkles,
    title: "Agile Sprint Planner",
    description:
      "Describe your sprint goals and backlog items to generate a sprint plan with story breakdowns, acceptance criteria, and a definition of done — saving your team hours of ceremony prep.",
  },
]

export function ToolTeaser() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="container py-20">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            AI-Powered Document Tools
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tightest text-foreground text-balance">
            Professional PM documents in minutes, not hours
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Every pm101toPro plan includes access to our suite of AI document tools. Apply what
            you've learned immediately — describe your project, and the AI handles the formatting,
            structure, and PM best-practice language so you can focus on leading.
          </p>
        </div>

        {/* Tool Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AI_TOOLS.map((tool) => (
            <Card
              key={tool.title}
              className="flex flex-col gap-4 border-border bg-background p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <tool.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{tool.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {tool.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* How it works callout */}
        <div className="mt-12 rounded-xl border border-accent/30 bg-accent/5 p-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">How it works</p>
            <h3 className="mt-2 text-xl font-bold text-foreground">
              Three steps from blank page to boardroom-ready document
            </h3>
            <ol className="mt-6 space-y-4">
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  1
                </span>
                <div>
                  <p className="font-semibold text-foreground">Choose your document type</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Select from charters, risk registers, status reports, stakeholder maps, and more
                    — each tool is purpose-built for a specific PM deliverable.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  2
                </span>
                <div>
                  <p className="font-semibold text-foreground">Describe your project context</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Answer a short set of guided prompts about your project — no jargon required.
                    The AI uses your answers to tailor every section to your specific situation.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  3
                </span>
                <div>
                  <p className="font-semibold text-foreground">Download, edit, and deliver</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Get a structured, professionally worded document you can copy, export, or refine.
                    Use it as-is or as a strong first draft — either way you're hours ahead.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Button asChild size="lg">
            <Link href="/tools">
              Explore all AI tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
