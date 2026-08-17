export interface HumorItem {
  setup: string
  punchline?: string
}

export interface HumorTheme {
  container?: string
  border?: string[]
  borderOpacity?: string
  borderSize?: string
  borderLine?: string
  dark?: boolean
  cardBorder: string
  cardBg: string
  eyebrowColor: string
  label?: string
  punchColor: string
  buttonBg: string
  footerNote?: string
  shuffleLabel?: string
}

export const humorTheme: HumorTheme = {
  container: "my-10",
  border: ["📋", "🗓️", "📋", "✅", "📋"],
  borderOpacity: "opacity-30",
  borderSize: "text-xl",
  borderLine: "bg-blue-200",
  dark: true,
  cardBorder: "border-slate-700",
  cardBg: "bg-slate-800/80",
  eyebrowColor: "text-blue-400",
  label: "Sprint break",
  punchColor: "text-slate-300",
  buttonBg: "bg-blue-600",
  footerNote: "Even status meetings end eventually",
  shuffleLabel: "Another one",
}

export const humorBank: Record<string, HumorItem[]> = {
  general: [
    {
      setup: "My project is on schedule.",
      punchline: "The schedule is also a work of fiction, so we're consistent.",
    },
    {
      setup: "I sent a status update: 'everything is fine.'",
      punchline: "Everything was not fine. But the update was optimistic, which is a form of honesty.",
    },
    {
      setup: "The project has a 400-item risk register.",
      punchline: "Item 401 is 'the risk register becoming the project.'",
    },
    {
      setup: "My Gantt chart is a masterpiece.",
      punchline: "It's also wrong. It was wrong on day one. But it LOOKS confident.",
    },
  ],
  meetings: [
    {
      setup: "I scheduled a meeting to plan the meetings.",
      punchline: "The agenda had an agenda. We're very organized and also we got nothing done.",
    },
    {
      setup: "The status meeting ran 90 minutes.",
      punchline: "The status update took 5. The other 85 were 'quick follow-ups' that were neither quick nor followed up.",
    },
    {
      setup: "Could this meeting have been an email?",
      punchline: "Yes. It could have been an email. It should have been an email. It will be an email next week, after we meet about it.",
    },
    {
      setup: "I took notes during the meeting.",
      punchline: "The notes say 'we decided things.' Nobody remembers what. The notes are a comfort object now.",
    },
  ],
  agile: [
    {
      setup: "Our sprint is 2 weeks.",
      punchline: "The scope is 6 weeks. The math is part of the agile framework.",
    },
    {
      setup: "The retro went well.",
      punchline: "We agreed to stop starting things and start finishing things. Then we started a new initiative about it.",
    },
    {
      setup: "My standup takes 45 minutes.",
      punchline: "We're standing for efficiency. It's not working. My legs are the scrum master now.",
    },
    {
      setup: "We moved to agile.",
      punchline: "Now the delays are iterative.",
    },
  ],
  stakeholders: [
    {
      setup: "The stakeholder changed the requirements.",
      punchline: "Again. The requirements have a better attendance record than I do.",
    },
    {
      setup: "I told the stakeholder the deadline was ambitious.",
      punchline: "They heard 'we're ahead of schedule.' Communication is hard.",
    },
    {
      setup: "The sponsor asked for a 'quick win.'",
      punchline: "The quick win took three months and a full project plan. It was a win, though.",
    },
    {
      setup: "My stakeholder meeting needed a facilitator.",
      punchline: "And a referee. And possibly a mediator. The project is fine. The meeting was the project.",
    },
  ],
}
