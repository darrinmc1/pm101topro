import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { LevelShowcase } from "@/components/home/level-showcase"
import { ToolTeaser } from "@/components/home/tool-teaser"
import { Zap, BookOpen, Brain, BarChart3, Shield, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "pm101toPro – Project Management Training & AI Tools",
  description:
    "Structured courses and AI-powered tools to take you from your first project to running the room. PMP, Agile, Scrum, and PMO training.",
}

const FEATURES = [
  {
    icon: Brain,
    title: "AI-Powered Document Generation",
    body: "Turn course concepts into professional project charters, risk registers, and status reports in minutes — not hours.",
  },
  {
    icon: BookOpen,
    title: "Structured Learning Paths",
    body: "Every course follows a clear 101-to-Pro progression so you always know what to learn next and why it matters.",
  },
  {
    icon: BarChart3,
    title: "PMP, Agile & Scrum Coverage",
    body: "One platform covers every major methodology — PMBOK-aligned PMP prep, Agile delivery, Scrum ceremonies, and PMO governance.",
  },
  {
    icon: Zap,
    title: "Practical Over Theoretical",
    body: "Every lesson links directly to a real deliverable. You finish each module with something you can use on a live project today.",
  },
  {
    icon: Shield,
    title: "Exam-Ready Confidence",
    body: "Quizzes, knowledge checks, and scenario-based questions mirror real PMP and Agile exam formats to build genuine confidence.",
  },
  {
    icon: Users,
    title: "Built for Busy Professionals",
    body: "Bite-sized lessons you can complete in 10–15 minutes fit around your project schedule, not the other way around.",
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />

      {/* Features / Benefits Section */}
      <section className="border-b border-border bg-surface">
        <div className="container py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">Why pm101toPro</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tightest text-foreground text-balance">
              Everything you need to lead projects with confidence
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              We combine structured courses with AI tools so you spend less time on paperwork and more time actually managing your project.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, body }) => (
              <Card key={title} className="border-border bg-background p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <LevelShowcase />
      <ToolTeaser />
    </>
  )
}
