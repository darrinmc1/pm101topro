export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string // ISO
  readMins: number
  body: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "writing-a-charter-that-gets-signed",
    title: "Writing a project charter that actually gets signed",
    excerpt:
      "The one-page document that authorises your project — and the five sections sponsors care about most.",
    category: "Fundamentals",
    date: "2026-06-28",
    readMins: 6,
    body: [
      "A charter's job is not to document everything — it's to get a decision. The best charters fit on a single page and answer the sponsor's real question: why should we spend money and people on this, and what does done look like?",
      "Lead with the problem or opportunity in plain language, then the objective, then the top three deliverables. Sponsors sign when they can see the outcome and the boundaries clearly.",
      "Keep scope, timeline, and budget as ranges early on. Precision you can't defend erodes trust; honest ranges with assumptions build it.",
    ],
  },
  {
    slug: "agile-vs-waterfall-when-it-matters",
    title: "Agile vs Waterfall: when the choice actually matters",
    excerpt:
      "It's rarely a religious war. Here's a practical way to decide based on uncertainty and cost of change.",
    category: "Agile",
    date: "2026-06-14",
    readMins: 8,
    body: [
      "The useful question isn't 'which is better' but 'how expensive is it to change our minds later?' When change is cheap and requirements are fuzzy, iterate. When change is costly and requirements are stable, plan ahead.",
      "Most real projects live in the middle. Hybrid approaches let you plan the fixed parts and iterate on the uncertain ones — the skill is knowing which is which.",
    ],
  },
  {
    slug: "risk-registers-that-stay-alive",
    title: "Risk registers that stay alive past week two",
    excerpt:
      "A register nobody updates is theatre. Three habits that keep risk management real throughout delivery.",
    category: "Risk",
    date: "2026-05-30",
    readMins: 7,
    body: [
      "Most risk registers are created once, admired briefly, and then abandoned. Keeping one alive comes down to rhythm, ownership, and consequence.",
      "Give every risk a named owner, review the top five in your regular status meeting, and actually retire risks when they pass. A shrinking register is a healthy one.",
    ],
  },
  {
    slug: "stakeholders-you-forgot",
    title: "The stakeholders you always forget",
    excerpt:
      "The people who quietly sink projects rarely appear on the org chart. How to find them early.",
    category: "Stakeholders",
    date: "2026-05-16",
    readMins: 5,
    body: [
      "The stakeholders who derail projects are rarely the obvious ones. They're the downstream team that inherits your output, the compliance reviewer nobody looped in, the power user with informal influence.",
      "Map by impact and influence, not job title. Then ask each visible stakeholder a simple question: who else does this affect?",
    ],
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}
