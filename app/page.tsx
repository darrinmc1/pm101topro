import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { LevelShowcase } from "@/components/home/level-showcase"
import { ToolTeaser } from "@/components/home/tool-teaser"
import { ChevronDown } from "lucide-react"

export const metadata: Metadata = {
  title: "pm101toPro – Project Management Training from Beginner to Pro",
  description:
    "Structured project management courses covering PMP, Agile, Scrum, and PMO — plus AI-powered tools to generate professional PM documents in minutes.",
}

const FAQS = [
  {
    q: "How much time do I need to commit each week?",
    a: "Most learners progress comfortably with 2–3 hours per week. Each lesson is designed to be completed in 15–20 minutes, so you can fit learning around a full-time job or active project. There are no live sessions or fixed schedules — study entirely at your own pace.",
  },
  {
    q: "Are the certificates recognised by employers?",
    a: "Our course completion certificates demonstrate practical, applied PM knowledge and are valued by hiring managers. For formal PMI credentials (PMP, CAPM), our PMP-aligned courses provide the knowledge base and contact hours you need — you then sit the PMI exam separately. We clearly label which courses contribute toward PMI education requirements.",
  },
  {
    q: "What can the AI document tools actually produce?",
    a: "The AI tools generate professional, ready-to-use PM documents including project charters, risk registers, stakeholder maps, RACI matrices, communication plans, and sprint retrospective summaries. You answer a short set of questions about your project and the tool produces a formatted document you can download and adapt — saving hours of blank-page time.",
  },
  {
    q: "Do I need prior project management experience to start?",
    a: "No. The 101 level courses assume zero prior knowledge and start from first principles — what a project is, how to kick one off, and how to keep stakeholders aligned. The level rail then guides you progressively from Beginner through Practitioner to Pro, so you always know exactly where you are and what to tackle next.",
  },
  {
    q: "Which methodology should I study — PMP, Agile, or Scrum?",
    a: "It depends on your role and industry. If you work in a structured or regulated environment (construction, finance, government), PMP/PMBOK-aligned content is most relevant. If you're in software, product, or a fast-moving team, Agile and Scrum are the priority. Many real-world PMs need both — our courses are designed to be mixed and matched, and the level rail adapts to your chosen path.",
  },
  {
    q: "Can I access courses on mobile?",
    a: "Yes. The platform is fully responsive and works on any device. Lessons, quizzes, and AI tools are all accessible from your phone or tablet, so you can learn on your commute or between meetings.",
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <LevelShowcase />
      <ToolTeaser />

      {/* FAQ Section */}
      <section className="border-t border-border bg-surface">
        <div className="container py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">FAQ</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tightest text-foreground text-balance">
            Common questions, straight answers
          </h2>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Everything you need to know before you start — from time commitment to certification validity.
          </p>

          <div className="mt-10 divide-y divide-border">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold text-foreground hover:text-accent transition-colors">
                  <span>{q}</span>
                  <ChevronDown className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="mt-3 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
