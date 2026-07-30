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
      "The one-page document that authorises your project - and the five sections sponsors care about most.",
    category: "Fundamentals",
    date: "2026-06-28",
    readMins: 6,
    body: [
      "A charter's job is not to document everything - it's to get a decision. The best charters fit on a single page and answer the sponsor's real question: why should we spend money and people on this, and what does done look like?",
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
      "Most real projects live in the middle. Hybrid approaches let you plan the fixed parts and iterate on the uncertain ones - the skill is knowing which is which.",
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
  {
    slug: "the-art-of-saying-no",
    title: "The art of saying no to stakeholders",
    excerpt:
      "No is a legitimate project management tool. Here's how to say it without burning the relationship.",
    category: "Communication",
    date: "2026-07-10",
    readMins: 6,
    body: [
      "The most underrated PM skill isn't scheduling or risk management - it's the ability to say no gracefully. Every project faces more demand than capacity, and the PM who tries to accommodate everything delivers nothing.",
      "Saying no works best when you redirect. Instead of 'We can't do that,' try 'We can't do that within the current scope and timeline. Here's what we'd need to trade to make it fit.' You're not rejecting the request - you're making the trade-off visible.",
      "The three-step model: acknowledge the request, explain the constraint, offer alternatives. 'I understand why that feature matters. With our current capacity, adding it would push the delivery date by three weeks. We could descope feature Y instead to keep the date - which do you prefer?'",
      "This turns a 'no' into a decision the stakeholder owns. And decisions that stakeholders own are decisions they defend to their own stakeholders.",
    ],
  },
  {
    slug: "status-updates-that-get-read",
    title: "Status updates that actually get read",
    excerpt:
      "If your stakeholders are skimming (or ignoring) your status reports, the problem isn't their attention span. It's your format.",
    category: "Communication",
    date: "2026-07-01",
    readMins: 5,
    body: [
      "Most status reports are written for the author, not the reader. They're detailed, chronological, and comprehensive - everything a busy stakeholder doesn't want.",
      "Reverse the structure. Lead with the one thing the reader cares about most: is the project on track? If yes, a paragraph and a link is plenty. If no, say what's wrong, what you're doing about it, and what you need from them - in that order.",
      "The RAG (Red/Amber/Green) status is useful only if it changes behaviour. A project that's been 'Amber' for four months with no escalation isn't amber - it's green with bad reporting. Signal early, flag when you need a decision, and keep the rest short.",
    ],
  },
  {
    slug: "lessons-learned-without-the-eye-roll",
    title: "Lessons learned without the eye roll",
    excerpt:
      "Why post-mortems fail and how to run a retro that actually surfaces useful insights.",
    category: "Process",
    date: "2026-06-15",
    readMins: 7,
    body: [
      "The phrase 'lessons learned' triggers a Pavlovian eye roll in most project teams - and for good reason. Most lessons learned sessions produce a document that gets filed away and never influences future projects.",
      "The problem is structural: we ask 'what went wrong?' which makes people defensive, and we hold the session at the end when everyone just wants to move on.",
      "A better approach: run lightweight retrospectives continuously. After each phase or sprint, ask three questions: (1) What should we start doing? (2) What should we stop doing? (3) What should we keep doing? Keep it to 30 minutes and capture one action per person.",
      "The secret is to assign ownership and follow up. An insight without an owner is just a diary entry. Give each action a named person and a deadline, and review it at the start of the next retro. That's how learning becomes process.",
    ],
  },
  {
    slug: "meetings-that-should-have-been-emails",
    title: "Meetings that should have been emails",
    excerpt:
      "A simple framework to decide whether to book the room or write the message - and save everyone an hour.",
    category: "Communication",
    date: "2026-07-18",
    readMins: 5,
    body: [
      "The most expensive recurring cost in most organisations isn't software or office space - it's meetings. A one-hour meeting with eight people costs eight person-hours. If that meeting produces nothing but a 'let's continue this offline,' you've burned a full working day for no output.",
      "Before scheduling any meeting, ask three questions. First: is there a decision to be made? If no one is making a decision, the meeting probably doesn't need to happen. Second: can this be handled async? A shared document with comments, a Slack thread, or a recorded Loom can often replace a synchronous discussion. Third: who actually needs to be there? The answer is rarely everyone who was invited last time.",
      "If the meeting passes all three tests, keep it short, structured, and outcome-oriented. If it fails any test, cancel it and send an email instead. Your team will thank you - silently, because they're in fewer meetings.",
    ],
  },
  {
    slug: "what-your-stakeholders-actually-want",
    title: "What your stakeholders actually want (but won't say)",
    excerpt:
      "Stakeholders don't want status updates. They want to know whether they should be worried.",
    category: "Stakeholders",
    date: "2026-07-25",
    readMins: 6,
    body: [
      "Here's a truth that most project managers learn the hard way: stakeholders don't read your status reports for information. They read them for reassurance. Every status update, whether they admit it or not, answers exactly one question: should I be worried about this project?",
      "The most effective PMs understand this and structure their communication accordingly. Lead with the answer to the unspoken question. 'The project is on track. Here's what we accomplished this week.' Or: 'We have an issue. Here's what happened, what we're doing about it, and what I need from you.' Everything else is noise.",
      "The second unspoken need: stakeholders want to look prepared. When you surface a risk early and tell them what you're doing about it, they look competent to their leadership. When you surprise them with a problem they didn't see coming, they look caught off guard. Surface issues early, even if you're still working on the solution.",
      "The third need: stakeholders want to trust that you're in control. Confidence signals - structured reporting, clear next steps, named owners, dates - matter more than any individual data point. A PM who communicates uncertainty with a plan is trusted. A PM who communicates certainty without evidence is not.",
    ],
  },
  {
    slug: "why-estimates-are-wrong",
    title: "Why estimates are wrong (and how to make them less wrong)",
    excerpt:
      "Estimates are always wrong. The skill is knowing how wrong and narrowing the cone of uncertainty.",
    category: "Fundamentals",
    date: "2026-08-01",
    readMins: 7,
    body: [
      "The first thing every new project manager learns is that their estimates will be wrong. The second thing they learn is that nobody wants to hear that. The tension between honest uncertainty and organisational demand for precision is the defining challenge of project estimation.",
      "The cone of uncertainty is a useful mental model: early in a project, the range of possible outcomes is very wide - a feature might take anywhere from two weeks to two months. As the project progresses, the cone narrows. By the time you're actually building the thing, you know within a narrower range. The mistake managers make is treating early estimates as firm commitments.",
      "Better estimation comes from three practices. First: always express estimates as ranges, not single numbers. 'Two to four weeks' is honest. 'Three weeks' is a guess you've committed to. Second: use reference class forecasting - what did similar work actually take in the past? Historical data beats expert intuition every time. Third: re-estimate at each stage. The estimate you gave at project kickoff is obsolete by the time you reach the build phase. Update it openly.",
      "The most important habit: when an estimate is wrong, don't defend it. Explain what changed, what you learned, and what the new estimate is. PMs who treat estimates as commitments they must defend destroy trust. PMs who treat estimates as forecasts they update build it.",
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
