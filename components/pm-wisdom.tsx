"use client"

import { Lightbulb, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const PM_WISDOM: string[] = [
  "A project without a charter is like a ship without a rudder. Or a Gantt chart. Both are terrifying.",
  "Scope creep isn't the enemy. Scope creep you didn't see coming is.",
  "The project sponsor said 'just a small change' — and thus the backlog was born.",
  "There are only two sizes of estimate: too small and 'we need to have a conversation'.",
  "The triple constraint: fast, cheap, good. Pick two. (The sponsor wants all three.)",
  "Stakeholder management: herding cats with PowerPoint.",
  "The project went so smoothly, no one noticed. The PM took that personally.",
  "Estimated at 2 weeks. Currently in week 8. 'We're just refactoring.'",
  "A risk register is just a list of things that will keep you awake at 3 AM.",
  "The daily stand-up: where 5 people spend 15 minutes explaining why they're not blocked.",
  "Best practice: what works until your CEO watches a YouTube video about Spotify.",
  "The lesson learned: 'We should have done this sooner.' — said after every project.",
  "Waterfall: plan everything, then pretend nothing changes. Agile: change everything, then pretend you planned it.",
  "The PMP exam doesn't test your project management skills. It tests your ability to memorise 49 processes.",
  "A milestone is a deadline dressed up in optimism.",
  "Risk response: Accept. (Because the budget for mitigation was cut.)",
  "The project health check: Green (nothing is wrong yet), Amber (something is wrong), Red (everything is wrong, please send help).",
  "Change control board: where requests go to die a slow, procedural death.",
  "The steering committee: 12 people who don't read the papers they signed.",
  "RAG status: Red means 'we have a problem', Amber means 'we're about to have a problem', Green means 'we haven't checked recently'.",
]

export function PmWisdom({ className }: { className?: string }) {
  const [wisdom, setWisdom] = useState(
    PM_WISDOM[Math.floor(Math.random() * PM_WISDOM.length)],
  )

  const refresh = () => {
    const remaining = PM_WISDOM.filter((w) => w !== wisdom)
    setWisdom(remaining[Math.floor(Math.random() * remaining.length)])
  }

  return (
    <div className={`rounded-xl border border-border bg-surface p-5 ${className ?? ""}`}>
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 rounded-lg bg-accent/15 p-2 text-accent">
          <Lightbulb className="h-4 w-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            PM Wisdom
          </p>
          <p className="mt-1 text-sm leading-relaxed text-foreground">
            {wisdom}
          </p>
        </div>
        <button
          onClick={refresh}
          className="shrink-0 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-surface-raised hover:text-foreground"
          aria-label="Another quote"
        >
          <RefreshCw className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
