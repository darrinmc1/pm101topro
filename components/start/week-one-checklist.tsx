"use client"

import { useId, useState } from "react"

const CHECKLIST = [
  {
    n: "01",
    title: "Write the date they already set",
    detail: "The date is real. The charter is not. Put the date at the top of a blank page.",
  },
  {
    n: "02",
    title: "Name the person who can say no",
    detail: "If that person is “the group,” you do not have a sponsor. You have a group chat.",
  },
  {
    n: "03",
    title: "One page: in / out",
    detail: "Ugly is fine. A Slack thread is not a scope statement.",
  },
  {
    n: "04",
    title: "Call the people who get angry if you don’t",
    detail: "Three names. This week. Silence is how surprises get a head start.",
  },
  {
    n: "05",
    title: "Send a status before they ask",
    detail: "“Writing the charter” is a status. Saying nothing lets them write the story.",
  },
  {
    n: "06",
    title: "Read a written lesson. Then stop decorating the Gantt.",
    detail: "Kickoff first. Software second. The chart can wait until you know the job.",
  },
] as const

export function WeekOneChecklist() {
  const checkId = useId()
  const [checked, setChecked] = useState<boolean[]>(() => CHECKLIST.map(() => false))

  return (
    <div className="rounded-xl border border-border bg-surface">
      <div className="flex items-baseline justify-between border-b border-border px-4 py-3">
        <h2 className="text-sm font-semibold text-foreground">This week</h2>
        <span className="text-xs text-muted-foreground">Tick as you go</span>
      </div>
      <ol>
        {CHECKLIST.map((item, index) => {
          const id = `${checkId}-item-${index}`
          return (
            <li key={item.n} className="border-b border-border last:border-b-0">
              <label htmlFor={id} className="flex cursor-pointer gap-3 px-4 py-2.5 hover:bg-surface-raised">
                <input
                  id={id}
                  type="checkbox"
                  checked={checked[index]}
                  onChange={() =>
                    setChecked((prev) => {
                      const next = [...prev]
                      next[index] = !next[index]
                      return next
                    })
                  }
                  className="mt-1 h-4 w-4 shrink-0 accent-[hsl(var(--accent))]"
                />
                <span className="min-w-0">
                  <span className="flex items-baseline gap-2">
                    <span className="text-xs tabular-nums text-accent-secondary">{item.n}</span>
                    <span
                      className={`text-sm font-medium leading-snug ${
                        checked[index] ? "text-muted-foreground line-through" : "text-foreground"
                      }`}
                    >
                      {item.title}
                    </span>
                  </span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                    {item.detail}
                  </span>
                </span>
              </label>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
