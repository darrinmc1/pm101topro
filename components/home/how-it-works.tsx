import { GraduationCap, Layers, Wand2 } from "lucide-react"

const STEPS = [
  {
    icon: Layers,
    title: "Choose your level",
    body: "Start anywhere from 101 through to Pro. Every path is mapped to real methodologies.",
  },
  {
    icon: GraduationCap,
    title: "Learn by doing",
    body: "Structured, practical lessons — no fluff, no 40-minute videos. Just what you need.",
  },
  {
    icon: Wand2,
    title: "Build real documents",
    body: "Use the AI tool to turn what you learned into charters, registers, and reports.",
  },
]

export function HowItWorks() {
  return (
    <section className="border-b border-border py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tightest text-foreground">
            How it works
          </h2>
          <p className="mt-3 text-muted-foreground">
            A clear path from complete beginner to confident practitioner.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-xl border border-border bg-surface p-6"
            >
              <span className="absolute right-5 top-5 font-mono text-sm text-muted-foreground">
                0{i + 1}
              </span>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <step.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
