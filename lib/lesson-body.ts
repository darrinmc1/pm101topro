import type { Course, Lesson } from "@/lib/content"

export type LessonSection = {
  id: string
  title: string
  body: string[]
}

export type LessonBody = {
  intro: string
  sections: LessonSection[]
  practiceDocId?: string
}

// Maps certain lessons to a relevant AI document type for the "Practice this" CTA.
const PRACTICE_MAP: Record<string, string> = {
  "your-first-charter": "project-charter",
  "defining-scope": "wbs-schedule",
  "wbs-deep-dive": "wbs-schedule",
  "stakeholder-identification": "stakeholder-register",
  "power-interest-grid": "stakeholder-register",
  "risk-frameworks": "risk-register",
  "qualitative-quantitative": "risk-register",
  "reporting-up": "status-report",
  "pmo-reporting": "status-report",
  "written-updates": "status-report",
  "reporting-evm": "status-report",
  "baselining-schedule": "wbs-schedule",
  "activity-sequencing": "wbs-schedule",
  "portfolio-selection": "stakeholder-register",
  "your-first-week": "stakeholder-register",
  "negotiation-basics": "project-charter",
  "scope-negotiation": "project-charter",
  "quality-planning": "wbs-schedule",
  "vendor-selection": "project-charter",
  "change-models": "stakeholder-register",
  "capacity-planning": "wbs-schedule",
}

// ---------------------------------------------------------------------------
// Real lesson content keyed by lesson slug
// ---------------------------------------------------------------------------
const LESSON_CONTENT: Record<string, Omit<LessonBody, "practiceDocId">> = {

  // ── COURSE: What is Project Management? ────────────────────────────────────

  "what-is-a-project": {
    intro:
      "Every project starts with a deceptively simple question: what actually makes something a project? Understanding the answer separates work that needs formal management from work that doesn't - and that distinction is where your career as a PM begins.",
    sections: [
      {
        id: "project-vs-operations",
        title: "Projects vs ongoing operations",
        body: [
          "A project is a temporary endeavour undertaken to create a unique product, service, or result. Those two words - temporary and unique - are what set projects apart from the operational work that keeps a business running day to day.",
          "Operations are repetitive. A call centre handles tickets using the same process every day. A payroll team runs the same cycle every fortnight. There's no defined end date and no unique outcome - just consistent delivery of a known result.",
          "A project, by contrast, has a clear start, a clear finish, and a specific outcome that hasn't existed before. Building a new customer portal is a project. Running the portal once it's live is an operation. Rolling out a new invoicing system is a project. Processing invoices every month is an operation.",
          "The practical test: ask yourself whether the work has a finish line and a unique output. If both answers are yes, you're looking at a project - and it benefits from structured management.",
        ],
      },
      {
        id: "triple-constraint",
        title: "The triple constraint",
        body: [
          "Every project lives inside three competing forces: scope (what you're building), time (when it must be done), and cost (what resources you have). This is known as the triple constraint, and it's the first mental model every PM internalises.",
          "The key insight is that the three constraints are connected. If a stakeholder asks you to add more scope, something has to give - either the deadline moves, the budget increases, or you reduce scope elsewhere. Nothing is free.",
          "In practice, one constraint is usually fixed. A regulatory deadline is immovable, so scope and cost must flex around it. A fixed budget means scope must be managed tightly as time pressure builds. Knowing which constraint is locked in any given project tells you immediately where to focus your attention.",
          "A common beginner mistake is agreeing to hold all three constant simultaneously. Your job as a PM is to make the trade-offs explicit - surface them early, present the options, and let the right decision-maker choose.",
        ],
      },
      {
        id: "why-temporary-matters",
        title: "Why 'temporary' matters more than you think",
        body: [
          "The temporary nature of a project has practical consequences that most beginners overlook. Because projects end, the team assembled for them is also temporary. People come from different departments, bring different priorities, and will return to their home teams when the project closes.",
          "This means the social contract of a project team is different from a permanent team. You can't rely on long-established trust and shared history. You need to build alignment quickly, establish clear roles early, and create a working rhythm that doesn't depend on people already knowing each other.",
          "It also means urgency is built-in. An operational team can defer a problem until next month. A project team with a fixed end date cannot. Every week that passes without progress is a week that can't be recovered. Good PMs feel this time pressure and use it to keep energy and focus high.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "A project is temporary and unique - those two characteristics define it and explain why it needs deliberate management. The triple constraint of scope, time, and cost is the fundamental tension every PM navigates, and one constraint is almost always fixed.",
          "In the next lesson you'll walk through the full PM lifecycle - the five phases that take a project from authorisation to close - and see how each phase builds on the last.",
        ],
      },
    ],
  },


  "the-pm-lifecycle": {
    intro:
      "Projects don't happen in a straight line from idea to delivery. They move through distinct phases, each with its own focus and outputs. Understanding the lifecycle means you always know where you are, what you should be doing, and what comes next.",
    sections: [
      {
        id: "five-phases",
        title: "The five phases",
        body: [
          "The project management lifecycle consists of five phases: Initiating, Planning, Executing, Monitoring & Controlling, and Closing. These phases aren't rigid boxes - in practice they overlap - but they give you a shared language and a logical sequence to follow.",
          "Initiating is where the project is formally authorised. The business problem is defined, the project manager is appointed, and a Project Charter is created. Nothing significant should be spent or committed before this phase is complete.",
          "Planning is the most underestimated phase. This is where you define scope, build the schedule, estimate costs, identify risks, and plan how you'll communicate with stakeholders. A well-run planning phase makes execution far smoother. A skipped or rushed planning phase creates constant firefighting later.",
          "Executing is where the work actually gets done - deliverables are produced, the team is managed, and the plan is put into action. This is the phase most visible to the outside world, but it only goes well when the planning was solid.",
        ],
      },
      {
        id: "monitor-and-close",
        title: "Monitoring, controlling and closing",
        body: [
          "Monitoring & Controlling runs in parallel with executing - it's not a separate phase that comes after. You track progress against the plan, compare actual performance to baseline, manage changes, and take corrective action when things drift. Without this discipline, small variances compound into major problems.",
          "Closing is the phase most teams skip or rush. It involves formally accepting deliverables, releasing resources, capturing lessons learned, and archiving project records. A proper close protects the organisation's knowledge and gives stakeholders the clear signal that the project is finished.",
          "One of the most common beginner mistakes is treating the lifecycle as linear and then abandoning it under pressure. When deadlines tighten, planning gets compressed and monitoring gets dropped. The result is a team that's busy but not necessarily moving toward the right outcome.",
        ],
      },
      {
        id: "lifecycle-in-practice",
        title: "How the lifecycle plays out on a real project",
        body: [
          "Imagine you've been assigned to manage the rollout of a new time-tracking system for a 200-person professional services firm. In the initiating phase, you meet with the sponsor, understand why the old system is failing, and document the expected outcomes in a charter.",
          "In planning, you map out which departments will be migrated in which order, estimate the training effort, identify the risk that IT resource will be pulled to another priority, and agree on a weekly status report for the steering committee.",
          "During execution, you're running training sessions, managing the vendor relationship, and keeping the team on track. Throughout, you're monitoring - tracking training completion rates, flagging a two-week delay in the finance department migration, and raising a change request when a new integration requirement emerges late.",
          "At close, you get formal sign-off from the sponsor, document what you'd do differently next time, and hand the system to the operations team. That handover is the project's finish line.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "The five-phase lifecycle - Initiating, Planning, Executing, Monitoring & Controlling, Closing - gives every project a navigable structure. The phases overlap, but each has a distinct purpose. Skipping or compressing phases, especially planning and closing, is the single most common source of project failure.",
          "Next, you'll meet the key people in a project: the sponsor, the project manager, the team, and the stakeholders. Knowing who they are and what each one needs from you is essential before you run your first real project.",
        ],
      },
    ],
  },


  "key-roles": {
    intro:
      "Projects involve people, and every person has a role. Understanding who does what - and who has authority over what - prevents the confusion that derails teams. Four roles appear on almost every project, regardless of size or methodology.",
    sections: [
      {
        id: "sponsor",
        title: "The project sponsor",
        body: [
          "The sponsor is the senior leader who owns the business case for the project. They provide funding, remove organisational blockers, and are accountable to the business for the project's outcomes. Crucially, the sponsor is the person who can say yes to scope changes, additional budget, or early termination.",
          "A strong sponsor is engaged but not in the weeds. They attend steering committee meetings, read status reports, and make decisions when escalated issues land on their desk. A weak or absent sponsor is one of the most reliable predictors of project failure - without executive air cover, a PM has limited ability to resolve cross-departmental conflict or protect the project from competing priorities.",
          "Your job as PM is to keep the sponsor informed without overwhelming them. One-page status reports, a clear escalation path, and a brief standing meeting are usually enough. Don't make them dig for information, and don't surprise them.",
        ],
      },
      {
        id: "project-manager",
        title: "The project manager",
        body: [
          "The project manager is responsible for planning and delivering the project. They don't do all the work themselves - they coordinate the people and resources that do. The PM owns the schedule, manages risk, communicates with stakeholders, and is accountable for day-to-day delivery.",
          "A common misconception is that the PM's job is to tell people what to do. In practice, most PMs have no direct authority over the team members assigned to their project. Those people report to their functional managers - the PM earns their cooperation through credibility, clarity, and good communication.",
          "The skills that matter most aren't technical. They're organisational: knowing what questions to ask, spotting when something is behind before it becomes a crisis, and creating the conditions for the team to do their best work.",
        ],
      },
      {
        id: "team-and-stakeholders",
        title: "The project team and stakeholders",
        body: [
          "The project team is the group that does the work. They may be employees, contractors, or vendor resources, and they're often borrowed from functional departments rather than dedicated to the project full-time. Managing a team that doesn't fully report to you is one of the defining challenges of project management.",
          "Stakeholders are anyone with an interest in the project - they can affect it or be affected by it. They include end users, department heads, regulators, customers, and sometimes the general public. Not all stakeholders are supportive, and not all of them are visible at the start.",
          "A key early task is stakeholder identification - actively seeking out everyone who has a stake, not just the obvious ones. An overlooked stakeholder who surfaces late can derail a project that was otherwise on track. You'll go deep on this in the Working with Stakeholders course.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Four roles form the core of almost every project: the sponsor (owns the outcome and the budget), the project manager (owns the plan and the day-to-day delivery), the team (does the work), and stakeholders (are affected by or can affect the project). Knowing who sits in each role, and managing each relationship appropriately, is foundational PM practice.",
          "Next you'll put this into practice by looking at the project charter - the document that formally authorises a project and captures everything the sponsor and PM need to align on before work begins.",
        ],
      },
    ],
  },


  "your-first-charter": {
    intro:
      "The project charter is the document that officially starts a project. It's short, it's authoritative, and it's the single most important thing you can create before spending a dollar or writing a plan. If you leave this lesson and do one thing, write a charter for your next project.",
    sections: [
      {
        id: "what-a-charter-does",
        title: "What a charter actually does",
        body: [
          "A project charter does three things: it formally authorises the project, it appoints the project manager, and it captures the shared understanding between the sponsor and the PM before planning begins. Without it, teams regularly discover mid-project that different people had fundamentally different ideas about what was being built.",
          "The charter is not a detailed plan. It doesn't list every task or nail down every date. It's a one-to-two-page document that answers the big questions: why are we doing this, what does success look like, who has authority, and what are the known constraints?",
          "Because the sponsor signs the charter, it carries organisational authority. That matters when you need to push back on scope additions or escalate a resource conflict. A signed charter lets you say 'this is what was agreed' rather than relying on memory or meeting notes.",
        ],
      },
      {
        id: "charter-components",
        title: "What goes in a charter",
        body: [
          "A solid project charter covers: the project purpose (the problem or opportunity being addressed), the high-level objectives (what success looks like in measurable terms), the key deliverables (the major outputs), the timeline (start date, key milestones, target completion), the budget (overall envelope or funding source), the known constraints and assumptions, the key stakeholders, and the project manager's name and authority level.",
          "The purpose statement is the most important section. It should explain why this project exists in one or two sentences. A good purpose statement connects the project to a business outcome - not 'implement a CRM system' but 'reduce sales team admin time by 30% by replacing manual pipeline tracking with a unified CRM'.",
          "Objectives should be specific enough to evaluate at the end of the project. 'Improve customer satisfaction' is not an objective. 'Achieve a Net Promoter Score of 45 or above within three months of go-live' is an objective. The difference matters when the project closes and someone asks whether it succeeded.",
        ],
      },
      {
        id: "writing-your-first-charter",
        title: "Writing your first charter",
        body: [
          "Start with a conversation, not a document. Before you open a template, sit down with the sponsor and ask: what problem are we solving, what does good look like at the end, what can't we change, and who else needs to be involved? The answers become your charter.",
          "Keep it short. A charter that runs to ten pages is not a charter - it's a mini plan, and it will either be ignored or become outdated before planning is finished. One to two pages forces you to prioritise what actually matters.",
          "Once drafted, walk the sponsor through it before asking for a signature. The review conversation often surfaces misalignments that are far easier to resolve at this stage than after planning has started. Use the AI document tool below to generate a charter draft based on your project - then refine it with your sponsor.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "The project charter authorises the project, appoints the PM, and captures shared understanding before planning begins. It's short by design - one to two pages - and it earns its authority from the sponsor's signature. A good charter has a clear purpose statement, measurable objectives, and explicitly documented constraints.",
          "The next lesson is a quiz that checks your understanding of everything covered in this course. After that, you'll be ready to move into the Intermediate courses where the planning tools get more sophisticated.",
        ],
      },
    ],
  },


  "pm101-quiz": {
    intro:
      "Time to check what's stuck. This lesson works through five scenario-based questions that mirror what you'll face on a real project - and on a PMP or CAPM exam. Read each scenario, think through your answer, then read the explanation.",
    sections: [
      {
        id: "q1",
        title: "Question 1 - Is this a project?",
        body: [
          "Scenario: Your organisation's finance team processes supplier invoices every week using a documented three-step approval workflow. Is this a project?",
          "Answer: No. Ongoing, repetitive work with no defined end date and no unique output is an operation, not a project. The finance team is running a process, not delivering a unique result.",
          "Why it matters: Applying project management overhead to operational work adds cost without benefit. The distinction helps you decide whether something needs a PM at all - or just a good process owner.",
        ],
      },
      {
        id: "q2",
        title: "Question 2 - The triple constraint",
        body: [
          "Scenario: A stakeholder asks you to add a new reporting module to a software project two weeks before the deadline. The budget is fixed. What do you do?",
          "Answer: Surface the trade-off. Adding scope with a fixed budget and an immovable deadline means something else must be cut. Present the options: reduce scope elsewhere, extend the deadline (if possible), or defer the new module to a post-launch release. Never simply agree to absorb the addition.",
          "Why it matters: Saying yes to scope without adjusting another constraint is how projects go over budget and miss deadlines. Your job is to make the trade-off visible, not to absorb it quietly.",
        ],
      },
      {
        id: "q3",
        title: "Question 3 - Phase order",
        body: [
          "Scenario: Your manager is under pressure and asks you to skip the planning phase and move straight into execution to save time. What's the risk?",
          "Answer: Execution without planning creates the illusion of speed. Without a defined scope, schedule, and risk register, the team works hard but in potentially the wrong direction. Rework, missed dependencies, and late-breaking stakeholder issues are the typical result - and fixing them costs far more time than planning would have taken.",
          "Why it matters: Planning is an investment, not a delay. A week of solid planning typically saves three to five weeks of firefighting during execution.",
        ],
      },
      {
        id: "q4",
        title: "Question 4 - Who signs the charter?",
        body: [
          "Scenario: You've drafted a project charter. Your manager says you should sign it yourself since you're the PM. Is this correct?",
          "Answer: No. The charter is signed by the project sponsor - the senior leader who is authorising and funding the project. The PM's name appears in the charter as the appointed lead, but the authority comes from the sponsor's signature.",
          "Why it matters: A charter signed by the PM instead of the sponsor carries no organisational weight. When you need to escalate a resource conflict or push back on a scope request, you need a sponsor-signed document behind you.",
        ],
      },
      {
        id: "q5",
        title: "Question 5 - Temporary teams",
        body: [
          "Scenario: You're managing a cross-functional team where most members still report to their department heads. One team member consistently deprioritises project tasks in favour of their 'day job'. What's the most effective first step?",
          "Answer: Have a direct conversation with the team member to understand the competing demands, then escalate to the sponsor if the conflict can't be resolved at the team level. The sponsor has the authority to negotiate with the functional manager - the PM usually doesn't.",
          "Why it matters: Most PMs have influence, not authority, over their teams. Knowing when to escalate - and to whom - is a critical skill. Trying to force compliance without authority erodes the relationship and rarely works.",
        ],
      },
      {
        id: "summary",
        title: "Course complete - what's next",
        body: [
          "You've covered the foundations: what a project is, the lifecycle that structures it, the roles that run it, and the charter that authorises it. These aren't just concepts - they're the vocabulary and the mental model you'll use on every project from here.",
          "Head to the Intermediate courses to go deeper. Scope, Time & Cost will show you how to build a real WBS and estimate with confidence. Working with Stakeholders will give you the tools to manage the people side of delivery.",
        ],
      },
    ],
  },

  // ── COURSE: Agile Fundamentals ─────────────────────────────────────────────

  "agile-vs-waterfall": {
    intro:
      "Agile and Waterfall are not competitors - they're different tools for different situations. Understanding when each approach works, and why, is one of the most practically useful things a PM can know.",
    sections: [
      {
        id: "what-is-waterfall",
        title: "What is Waterfall?",
        body: [
          "Waterfall is a sequential delivery approach. You complete each phase fully before moving to the next: requirements, then design, then build, then test, then deploy. It's called Waterfall because progress flows in one direction - you don't go back upstream.",
          "Waterfall works well when requirements are stable and well understood upfront, when the cost of change late in the project is very high (construction, manufacturing, regulated industries), and when the client needs to sign off on a fixed scope and price before work begins.",
          "A building construction project is the classic example. You can't pour the foundation, decide you want the building in a different location, and move it. The requirements must be locked before the physical work starts, and changes after that point are expensive by design.",
        ],
      },
      {
        id: "what-is-agile",
        title: "What is Agile?",
        body: [
          "Agile is an iterative delivery approach. Instead of defining everything upfront and delivering once at the end, you work in short cycles - called iterations or sprints - and deliver working output at the end of each one. Requirements evolve as the team learns more and the customer sees real results.",
          "Agile works well when requirements are likely to change, when early feedback from users is valuable, when the team needs to respond to a fast-moving market, and when the cost of change is relatively low (software, digital products, creative work).",
          "The core Agile idea is that you can't know everything at the start of a complex project - and pretending you can leads to building the wrong thing very thoroughly. Agile builds in structured opportunities to course-correct before too much is invested in the wrong direction.",
        ],
      },
      {
        id: "when-to-use-which",
        title: "Choosing the right approach",
        body: [
          "The honest answer is that most real projects sit somewhere between the two extremes. A software project might use Agile for development but Waterfall-style governance for budget approval and regulatory sign-off. This is called a hybrid approach, and it's increasingly the norm.",
          "Ask these three questions to guide your choice. First: how well understood are the requirements? If you can write them all down today with confidence, Waterfall is viable. If they'll evolve, Agile is safer. Second: how tolerant is the organisation of uncertainty? Some sponsors need a fixed price and fixed scope - that points to Waterfall. Third: how fast does the environment change? A six-month Waterfall project in a market that shifts every eight weeks is a risk.",
          "A common mistake beginners make is treating Agile as inherently better than Waterfall. It isn't - it's appropriate for different contexts. Choosing Agile for a project with fixed regulatory requirements and a fixed-price contract creates as many problems as choosing Waterfall for a startup building a product no one has used before.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Waterfall is sequential and suits stable, well-defined requirements. Agile is iterative and suits evolving requirements and environments where early feedback matters. Most real projects use elements of both. The right choice depends on requirement stability, organisational tolerance for uncertainty, and the pace of change in your environment.",
          "Next you'll go inside Agile's most popular framework - Scrum - and meet the roles, artifacts, and process that make iterative delivery work in practice.",
        ],
      },
    ],
  },


  "scrum-basics": {
    intro:
      "Scrum is the most widely used Agile framework in the world. It gives teams a concrete structure - defined roles, regular events, and specific artifacts - that makes iterative delivery manageable and predictable.",
    sections: [
      {
        id: "three-roles",
        title: "The three Scrum roles",
        body: [
          "Scrum defines exactly three roles. The Product Owner is accountable for the product backlog - the ordered list of everything the team might build. They decide what goes in, what gets prioritised, and what gets cut. They represent the voice of the customer and the business.",
          "The Scrum Master is the team's process guardian. They're not a project manager - they don't assign tasks or track time. Their job is to ensure the team understands and follows Scrum, to remove impediments that block progress, and to coach the team toward self-organisation. A Scrum Master serves the team, not the other way around.",
          "The Developers (previously called the Development Team) are the people who do the work. In Scrum, 'developers' means anyone who builds the product increment - designers, testers, engineers, writers. The team is cross-functional by design, so all the skills needed to deliver are inside the team, not dependent on external specialists.",
        ],
      },
      {
        id: "three-artifacts",
        title: "The three Scrum artifacts",
        body: [
          "The Product Backlog is the master list of work - features, fixes, improvements - ordered by value. It's never finished; it evolves as the product and market evolve. The Product Owner owns it.",
          "The Sprint Backlog is the subset of product backlog items the team has committed to completing in the current sprint, plus a plan for how they'll do it. The team owns it, and it's updated daily.",
          "The Increment is the working, usable product output at the end of a sprint. It must meet the team's Definition of Done - a shared agreement about what 'finished' means. Increments are cumulative: each sprint adds to what was built before.",
        ],
      },
      {
        id: "empirical-process",
        title: "The empirical process",
        body: [
          "Scrum is built on three pillars: transparency, inspection, and adaptation. Transparency means the team's work, progress, and impediments are visible to everyone. Inspection means the team regularly examines what they've built and how they're working. Adaptation means they change course when inspection reveals a problem.",
          "This empirical loop - make something visible, examine it honestly, adjust - is what makes Scrum work. Without all three pillars, Scrum becomes a set of meetings with no real benefit. Teams that go through the motions of Scrum without genuine transparency and honest inspection get the overhead without the value.",
          "The sprint itself is the heartbeat of this loop. Every sprint produces something real, creates an opportunity to inspect it, and resets the team's direction based on what they learned.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Scrum has three roles (Product Owner, Scrum Master, Developers), three artifacts (Product Backlog, Sprint Backlog, Increment), and is built on transparency, inspection, and adaptation. Understanding these building blocks is the foundation for everything else in Agile delivery.",
          "Next you'll walk through the four Scrum events - Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective - and see exactly how they create the rhythm of iterative delivery.",
        ],
      },
    ],
  },


  "sprints-ceremonies": {
    intro:
      "Scrum's four events give a team its working rhythm. They're not optional ceremonies - each one has a specific purpose, a time limit, and a concrete output. Run them well and the team stays aligned. Skip or rush them and the sprint drifts.",
    sections: [
      {
        id: "sprint-planning",
        title: "Sprint Planning",
        body: [
          "Sprint Planning opens every sprint. The whole Scrum team attends and answers two questions: what can we deliver this sprint, and how will we do it? The Product Owner presents the highest-priority backlog items and the team forecasts how many they can complete based on their capacity and past velocity.",
          "The output is the Sprint Goal - a single sentence describing why this sprint matters - and the Sprint Backlog - the specific items the team has committed to. Sprint Planning is time-boxed to a maximum of eight hours for a four-week sprint, proportionally less for shorter sprints.",
          "A common failure mode is committing to too much. Teams under pressure from stakeholders overload the sprint, then spend the second half cutting scope quietly. A better habit is to commit conservatively and pull in additional work if capacity allows - this builds trust rather than eroding it.",
        ],
      },
      {
        id: "daily-scrum",
        title: "Daily Scrum",
        body: [
          "The Daily Scrum is a 15-minute event for the Developers - not a status report to management. The team inspects progress toward the Sprint Goal and adapts the Sprint Backlog as needed. The classic format asks three questions: what did I do yesterday that helped the team meet the Sprint Goal, what will I do today, and is there anything blocking me?",
          "The Scrum Master ensures the event happens and stays within 15 minutes. Impediments raised during the Daily Scrum are not solved in the meeting - they're noted and addressed separately afterward.",
          "The value of the Daily Scrum isn't the information exchanged - it's the daily habit of the team looking at the Sprint Goal together and asking 'are we going to make it?' That shared accountability and early warning function is what makes it worth 15 minutes every day.",
        ],
      },
      {
        id: "review-and-retro",
        title: "Sprint Review and Retrospective",
        body: [
          "The Sprint Review happens at the end of the sprint. The team demonstrates the Increment to stakeholders, collects feedback, and the Product Owner updates the backlog based on what was learned. This is not a sign-off meeting - it's a collaborative working session where the product direction can genuinely shift based on what stakeholders see.",
          "The Sprint Retrospective follows the Review and is the team's opportunity to inspect how they worked, not what they built. What went well? What didn't? What one thing will we do differently next sprint? A good retrospective produces one or two concrete improvements - not a list of twenty grievances that nobody acts on.",
          "Both events are often shortened or skipped when teams feel busy. This is a false economy. The Review is how the product stays aligned with what stakeholders actually need. The Retrospective is the team's only structured mechanism for getting better. Cutting them saves an hour and costs far more in compounding inefficiency.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Scrum's four events - Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective - each have a specific purpose and a time box. Together they create the inspect-and-adapt rhythm that makes iterative delivery work. The most common mistake is treating them as optional overhead rather than the engine of the process.",
          "Next up: user stories - the format Agile teams use to describe work from the customer's perspective, complete with acceptance criteria that make done unambiguous.",
        ],
      },
    ],
  },


  "user-stories": {
    intro:
      "User stories are the currency of an Agile backlog. They describe a piece of value from the perspective of the person who needs it - not the system that delivers it. Written well, they keep the team focused on outcomes rather than outputs.",
    sections: [
      {
        id: "story-format",
        title: "The story format",
        body: [
          "The standard user story template is: As a [type of user], I want [some goal] so that [some reason]. This structure forces three things: it names who benefits, what they need, and why it matters. All three parts do real work.",
          "A weak story ignores the 'so that' clause: 'As a user, I want a dashboard.' A stronger story names the outcome: 'As a sales manager, I want a dashboard showing my team's open pipeline so that I can identify deals at risk before our weekly meeting.' The second version tells the developer what success actually looks like.",
          "User stories are not requirements documents. They're a placeholder for a conversation. The real value is in the discussion between the Product Owner, the developers, and any other relevant people - the story is a prompt for that discussion, not a substitute for it.",
        ],
      },
      {
        id: "acceptance-criteria",
        title: "Acceptance criteria",
        body: [
          "Acceptance criteria define the conditions that must be true for the story to be considered done. They make 'done' concrete and shared, so there's no ambiguity at the end of the sprint about whether the story was completed.",
          "Good acceptance criteria are written in plain language and testable. 'The dashboard loads in under two seconds' is testable. 'The dashboard is fast' is not. 'The user receives an email confirmation within five minutes of submitting a form' is testable. 'The confirmation is sent promptly' is not.",
          "A common format is Given/When/Then: Given [some context], When [some action], Then [some outcome]. For example: Given I am a logged-in sales manager, When I open the dashboard, Then I see my team's open deals grouped by stage with the total value for each stage displayed.",
        ],
      },
      {
        id: "invest-criteria",
        title: "What makes a good story: INVEST",
        body: [
          "The INVEST acronym is a useful checklist for story quality. Independent: the story can be built and delivered without depending on another incomplete story. Negotiable: the details are open for discussion - it's not a contract. Valuable: it delivers something a real user cares about. Estimable: the team can size it. Small: it fits comfortably within a sprint. Testable: there's a clear way to confirm it's done.",
          "Stories that fail the Independent test create scheduling headaches - two stories that must be done together are really one story. Stories that fail the Small test are often called epics and need to be broken down before they enter a sprint. Splitting a large story into smaller independent ones is a skill that develops with practice.",
          "When you're looking at a backlog full of vague, enormous, or untestable stories, the product isn't ready for sprint planning. Backlog refinement - the ongoing work of getting stories to a ready state - is what prevents planning sessions from grinding to a halt.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "User stories describe work from the user's perspective using the As a / I want / So that format. Acceptance criteria make done concrete and testable. The INVEST checklist - Independent, Negotiable, Valuable, Estimable, Small, Testable - is your quality filter for backlog items.",
          "The final lesson in this course looks at the Agile mindset - the values and principles that sit underneath all the frameworks and practices, and that separate teams that are truly Agile from those that are just following a process.",
        ],
      },
    ],
  },


  "agile-mindset": {
    intro:
      "Frameworks like Scrum are tools. The Agile mindset is the foundation those tools are built on. Teams that adopt the practices without the mindset get the meetings and the overhead without the benefits. Understanding what Agile actually values - and why - is what separates teams that improve from teams that just go through the motions.",
    sections: [
      {
        id: "manifesto-values",
        title: "The four Agile values",
        body: [
          "The Agile Manifesto, published in 2001 by seventeen software practitioners, defines four values. Individuals and interactions over processes and tools. Working software over comprehensive documentation. Customer collaboration over contract negotiation. Responding to change over following a plan.",
          "The right side of each value isn't worthless - the manifesto explicitly says 'there is value in the items on the right.' The point is that teams get the balance wrong. They write exhaustive documentation instead of shipping working software. They negotiate contracts instead of collaborating with customers. They follow the plan even when reality has clearly changed.",
          "The practical implication is that every team's instinct to add another approval gate, write another status report, or stick to the original plan because 'that's what was agreed' needs to be weighed against the Agile question: does this serve the customer and the work, or does it serve the process?",
        ],
      },
      {
        id: "twelve-principles",
        title: "The principles that matter most in practice",
        body: [
          "The Agile Manifesto is supported by twelve principles. Three are especially worth internalising early. First: our highest priority is to satisfy the customer through early and continuous delivery of valuable software. This makes customer value - not adherence to plan - the north star.",
          "Second: welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage. This is the principle that most conflicts with traditional PM instincts. Scope change isn't a threat to be controlled - it's information to be acted on.",
          "Third: deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale. Frequent delivery forces real feedback. A team that delivers every two weeks gets twenty-six chances to learn and adjust in a year. A team that delivers once a year gets one.",
        ],
      },
      {
        id: "mindset-vs-method",
        title: "Mindset vs method",
        body: [
          "The most common Agile failure is cargo-culting - adopting the ceremonies and artifacts without adopting the values. A team that runs daily standups as status reports to management, produces user stories that are really just decomposed requirements, and treats the retrospective as a formality has the form of Agile but not the substance.",
          "True Agile mindset shows up in small moments: a developer asking whether a feature is the right thing to build, not just whether it can be built. A Product Owner showing a half-finished feature to a customer before it's polished. A team deciding together to change direction mid-sprint because new information made the original plan wrong.",
          "As a PM working in Agile environments, your role shifts from plan-enforcer to impediment-remover and environment-creator. Your job is to protect the team's ability to inspect and adapt - to ensure they have the information, access, and safety they need to make good decisions quickly.",
        ],
      },
      {
        id: "summary",
        title: "Course complete - what's next",
        body: [
          "The Agile mindset - built on the four values and twelve principles of the Agile Manifesto - is what makes frameworks like Scrum work. Practices without mindset produce overhead without benefit. The three most important principles for a beginner to internalise are: customer value above all, welcome change as information, and deliver frequently to learn faster.",
          "You've now completed Agile Fundamentals. From here, the Intermediate courses will take you deeper. Scrum Master Essentials goes inside the facilitation and coaching skills that make Scrum work at the team level. Agile at Scale shows how to coordinate multiple Agile teams without losing the benefits of the approach.",
        ],
      },
    ],
  },


  // ── COURSE: Project Management Tools 101 ───────────────────────────────────

  "why-tools-matter": {
    intro:
      "The right tool doesn't manage your project for you - but the wrong one, or no tool at all, creates invisible drag that compounds over time. Understanding what PM tools actually solve helps you choose and use them deliberately rather than just adopting whatever the team already has.",
    sections: [
      {
        id: "the-real-problem-tools-solve",
        title: "The real problem tools solve",
        body: [
          "Most project problems aren't caused by lack of effort - they're caused by lack of visibility. Work gets started but not finished. Dependencies get missed because nobody could see them. A task sits blocked for three days because the blocker wasn't visible to the person who could remove it. Status updates get fabricated because nobody actually knows where things stand.",
          "PM tools solve the visibility problem. When work is captured in a shared system, everyone can see what's in progress, what's blocked, and what's done without asking. The project manager doesn't need to chase status - they can read it. Blockers surface before they become crises because they're visible to the whole team, not buried in someone's inbox.",
          "The second problem tools solve is memory. Projects generate decisions, dependencies, and context at a pace that exceeds what any individual can hold in their head. A tool is the project's external memory - it captures what was decided, why, and what comes next, so that knowledge doesn't walk out the door when a team member goes on leave.",
        ],
      },
      {
        id: "what-bad-looks-like",
        title: "What managing without the right tool looks like",
        body: [
          "The most common substitute for a proper PM tool is a combination of email threads, spreadsheets, and shared drives. This works at small scale and collapses at medium scale. The spreadsheet tracker goes stale because updating it is manual overhead nobody has time for. The email thread becomes the authoritative record of decisions, which means finding anything requires searching your inbox. The shared drive fills with versions of documents named 'final_v3_ACTUAL_FINAL.docx'.",
          "The hidden cost isn't the tool - it's the status-chasing. A project manager spending two hours a day emailing people to find out where things are is spending two hours a day on work a good tool eliminates. That time compounds across a project's life into a significant drag on both delivery and the PM's ability to think strategically.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "PM tools solve two problems: visibility (everyone can see what's happening without asking) and memory (decisions and context are captured rather than lost). The cost of the wrong tool - or no tool - shows up as status-chasing, stale tracking, and knowledge that disappears when people leave.",
          "Next you'll look at the two most common visual formats in PM tools: boards and backlogs. These are the building blocks of how most modern teams track and manage work.",
        ],
      },
    ],
  },


  "boards-and-backlogs": {
    intro:
      "Boards and backlogs are the two most common ways PM tools display work. They look different and suit different working styles, but they answer the same fundamental question: what needs to be done, by whom, and where does it currently stand?",
    sections: [
      {
        id: "kanban-boards",
        title: "Kanban boards",
        body: [
          "A Kanban board displays work as cards moving across columns that represent stages in your workflow. The simplest version has three columns: To Do, In Progress, Done. More mature boards add columns that reflect the team's actual process: Backlog, Ready, In Development, In Review, Done.",
          "The power of a board is immediate visual status. At a glance, anyone can see how much work is in each stage, which items are moving, and which have been sitting in one column for too long. Cards that don't move are a signal - something is blocked, deprioritised, or unclear.",
          "Kanban boards work particularly well for teams with ongoing, flow-based work rather than fixed project cycles. Support teams, operations teams, and marketing teams often prefer boards because work arrives continuously rather than in planned sprints. Agile development teams also use boards within their sprint cycles.",
        ],
      },
      {
        id: "backlogs",
        title: "Backlogs",
        body: [
          "A backlog is a prioritised list of work items - typically features, tasks, bugs, or stories - ordered from most important to least. The top of the backlog is what the team works on next. The bottom is a holding area for ideas that may never happen.",
          "Backlogs are the primary planning tool in Scrum. The Product Owner maintains the backlog, constantly re-ordering it as priorities shift and new information arrives. During sprint planning, the team pulls items from the top of the backlog into the sprint.",
          "The key discipline of backlog management is ruthless prioritisation. A backlog with 400 items and no clear ordering is not a planning tool - it's a wishlist. A good backlog has a clear top 20 items that are well-defined and ready to work, and a long tail of lower-priority ideas that are acknowledged but not obsessed over.",
        ],
      },
      {
        id: "boards-vs-backlogs",
        title: "Using boards and backlogs together",
        body: [
          "Most modern PM tools combine both views. The backlog is where work is captured, refined, and prioritised. The board is where active work is tracked through delivery. Think of the backlog as the queue and the board as the factory floor.",
          "In a Scrum context: the sprint backlog (what the team committed to this sprint) often displays as a board, while the product backlog (everything that might be built) is managed as an ordered list. The team moves between the two views depending on whether they're planning (backlog) or delivering (board).",
          "For a beginner PM, the practical habit to build is keeping both current. A board that hasn't been updated since Monday and a backlog where the top items are six months old aren't tools - they're decoration. The value of these views depends entirely on the discipline of keeping them accurate.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Boards display work as cards moving through workflow stages - great for visual status at a glance. Backlogs display work as a prioritised list - great for planning and sequencing. Most teams use both: the backlog for what to work on, the board for tracking it through delivery. Both require active maintenance to be useful.",
          "Next: timelines and Gantt charts - the scheduling view that shows when work happens, how tasks depend on each other, and whether the project is on track.",
        ],
      },
    ],
  },

  // ── COURSE: Getting Started as a PM ─────────────────────────────────────

  "your-first-week": {
    intro:
      "Your first week as a project manager sets the trajectory for everything that follows. You don't need to know every detail on day one - but you do need to ask the right questions, meet the right people, and establish the habits that build trust before you need it.",
    sections: [
      {
        id: "before-you-start",
        title: "Before day one",
        body: [
          "A great first week starts before you walk in the door. Ask your hiring manager for the project charter, any existing RAID log, and recent status reports. Read them not to memorise details but to form questions - what's missing, what's vague, what seems inconsistent.",
          "Also ask about team structure: who's on the core project team, who are the key stakeholders, and who has been in the role before. If you're replacing someone, ask if they left a handover note. (They probably didn't. That's the first lesson in project management: documentation is always less complete than you'd hope.)",
          "Set up a simple personal onboarding tracker - a document or kanban board with three columns: People to meet, Things to read, Questions to ask. Update it every day and aim to clear it by the end of your second week.",
        ],
      },
      {
        id: "first-meetings",
        title: "The right first meetings",
        body: [
          "Schedule 30-minute 1:1s with each team member and key stakeholder in your first three days. The goal isn't to gather status - it's to understand what each person cares about, what frustrates them, and what they need from a PM to do their best work.",
          "A useful framework: ask every person three questions. (1) What's going well right now? (2) What's not going well? (3) What can I do in my first month that would make your life easier? Record the answers - patterns will emerge that none of the written documentation revealed.",
          "Skip the impulse to 'prove yourself' by suggesting improvements on day two. Listen first. The fastest way to lose credibility is to recommend changes before you understand why things are the way they are. Most processes that look broken exist because someone was working around a constraint you haven't seen yet.",
        ],
      },
      {
        id: "early-wins",
        title: "Early wins that build trust",
        body: [
          "While you're listening and learning, look for small, low-effort improvements that remove a known frustration. A cluttered kanban board that needs cleaning. A status template that no one reads. A recurring meeting that's lost its purpose. These are quick wins that signal you're paying attention.",
          "One of the highest-leverage early actions: update the risk register. It's almost certainly stale. Adding two real risks and emailing the team with 'I noticed we hadn't captured X and Y - does that feel right?' immediately positions you as someone who protects the project.",
          "Another: clarify decision authority. Ask your sponsor: 'What decisions do you want to make yourself, and what are you happy for me to own?' That one conversation prevents weeks of backing-and-forthing on scope changes, vendor choices, and resource requests.",
        ],
      },
      {
        id: "common-traps",
        title: "Traps new PMs fall into",
        body: [
          "The most common mistake is over-promising. A new PM wants to be helpful, so they say 'I'll look into that' to every request. Thirty requests later, nothing has moved, and trust erodes faster than if you'd said 'I can do two of those this week - which matters most?'",
          "Another trap: treating the plan as sacred. New PMs often spend their first week building a detailed Gantt chart, only to discover the underlying assumptions were wrong. Build a lightweight milestone plan first, validate it with the team, then add detail iteratively.",
          "Finally: don't hide bad news. If you discover something's off track in your first week, surface it immediately. New PMs worry this makes them look incompetent. In reality, discovering and escalating an issue on day two demonstrates competence. Discovering it and saying nothing until week four is what erodes trust.",
        ],
      },
    ],
  },

  // ── COURSE: Negotiation for PMs ─────────────────────────────────────────

  "negotiation-basics": {
    intro:
      "Project management is negotiation disguised as coordination. Every day you negotiate scope, timeline, resources, and priority - often with people who hold all the cards. This lesson builds the mental framework that turns those conversations from confrontation into problem-solving.",
    sections: [
      {
        id: "positions-vs-interests",
        title: "Positions vs interests",
        body: [
          "A position is what someone says they want. An interest is why they want it. In negotiation, the magic happens when you move past the position and discover the underlying interest - because interests can often be met in multiple ways, while positions feel rigid.",
          "Example: a stakeholder demands a three-week delivery (their position). Their interest might be that they've promised a launch at a conference. If you know that, you can explore alternatives: a phased delivery that gets the core feature live by the conference and adds the rest later. Same interest, different solution.",
          "Your job in every negotiation is to stay curious long enough to uncover the interest. Ask 'What's driving that timeline?' and 'What would solving this look like from your perspective?' rather than defending your position.",
        ],
      },
      {
        id: "batna-zopa",
        title: "BATNA and ZOPA",
        body: [
          "BATNA (Best Alternative To a Negotiated Agreement) is your fallback if no deal is reached. Knowing your BATNA gives you leverage - if your alternative is strong, you can walk away. If it's weak, you negotiate harder. Never enter a negotiation without knowing your BATNA and, ideally, theirs.",
          "ZOPA (Zone of Possible Agreement) is the range where a deal is possible - where what you're willing to accept overlaps with what they're willing to offer. If the ZOPA is empty, there's no deal to be made. Recognising that early saves everyone time.",
          "In a PM context: your BATNA for a scope negotiation might be 'delay Feature X to a phase 2, freeing capacity for the stakeholder's request.' Theirs might be 'take it to the steering committee.' The ZOPA is somewhere between those two outcomes - your job is to find it.",
        ],
      },
    ],
  },

  // ── COURSE: Meeting Facilitation ────────────────────────────────────────

  "meeting-design": {
    intro:
      "The single biggest productivity gain available to most organisations costs nothing: better meetings. The difference between a meeting that wastes an hour and one that produces a decision is design - specifically, knowing the answer to three questions before you send the invite.",
    sections: [
      {
        id: "purpose-outcome",
        title: "Purpose and outcome",
        body: [
          "Every meeting needs two things: a clear purpose (why are we gathering?) and a defined outcome (what will be different when we leave?). If you can't articulate both before scheduling, don't schedule the meeting - send an email.",
          "A purpose might be 'Decide whether to proceed with Vendor A or B' while the outcome is 'A decision recorded in the minutes with rationale and assigned actions.' A purpose of 'Discuss the Q3 roadmap' is too vague - what specifically needs to happen as a result of the discussion?",
          "Write both in the invite. 'Purpose: Review and approve the project charter. Outcome: Signed charter or list of required changes.' This lets attendees prepare and signals that the meeting has real stakes, not just a slide deck to sit through.",
        ],
      },
      {
        id: "agenda-design",
        title: "Designing the agenda",
        body: [
          "Once you know the outcome, work backwards to design the agenda. Each agenda item should be a verb - Decide, Approve, Review, Generate, Align - followed by the time allocated and the preparation required. 'Decide vendor selection (15m, pre-read: scorecards in shared drive)' is a usable agenda item. 'Vendor update' is not.",
          "Timebox ruthlessly. Parkinson's Law says work expands to fill the time available. If you allocate 30 minutes for a decision, it will take 30 minutes. If you allocate 10, people will find a way to decide in 10. Start with the shortest reasonable time and extend only if the discussion demands it.",
          "Send the agenda 24 hours in advance. A meeting where attendees see the agenda for the first time when they arrive is not a meeting - it's a performance. People need time to form thoughts, check data, and prepare questions. Respect that time and you'll get better decisions.",
        ],
      },
    ],
  },


  // ── COURSE: Scope, Time & Cost ─────────────────────────────────────────────

  "defining-scope": {
    intro:
      "Scope is the single most negotiated word in a project manager's vocabulary. Everyone wants more of it. No one wants to pay for it. And scope creep? That's not a villain. It's what happens when you never clearly said what was in the box.",
    sections: [
      {
        id: "scope-statement",
        title: "The scope statement: your project's restraining order",
        body: [
          "A scope statement is a document that says, in professional language, 'this is what we're building, this is what we're not building, and if you try to add things without adjusting something else, I will point at this document like it's a legally binding restraining order.'",
          "The two most important parts are the inclusions (what's in scope) and the exclusions (what's explicitly out). Exclusions are the unsung heroes. The stakeholder who asks 'can we also add a mobile app?' gets a polite 'that's in our exclusions list - happy to discuss what we'd descope to make room.'",
          "A good scope statement is specific enough to test. 'Improve customer experience' is a vibe, not a scope item. 'Reduce checkout flow from five steps to three, measured by abandoned cart rate' is a scope item. One of these ends up in a fight. The other ends up in a status report that says 'done.'",
        ],
      },
      {
        id: "scope-creep",
        title: "Scope creep (and its surprisingly boring reality)",
        body: [
          "Scope creep sounds dramatic - like a horror movie where the project quietly grows teeth. In reality, it's much more mundane: someone asks for 'one small thing,' you say yes because it seems harmless, and six 'small things' later your timeline has quietly doubled.",
          "Each individual addition is reasonable. That's the trap. No single scope addition is big enough to justify a formal change request. But collectively, they add up to a project that's now doing 40% more work than originally planned with the same budget and deadline. Congratulations - your team is now in the 'working harder, not smarter' phase of project management.",
          "The fix is boring but effective: maintain the scope statement as a living document, review every addition against it, and make the trade-off visible every single time. 'Happy to add that. We'd need to push the deadline by two days or remove X. Which do you prefer?' After the third time you ask that, stakeholders start thinking harder about whether that 'small thing' is actually worth it.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Scope is defined by what's in, what's out, and who has the authority to change either. A good scope statement prevents more arguments than any other project document. Scope creep happens one reasonable request at a time - the antidote is making every trade-off visible before saying yes.",
          "Next up: the WBS - the tool that turns your scope statement from a document into something you can actually schedule and estimate.",
        ],
      },
    ],
  },

  "wbs-deep-dive": {
    intro:
      "A Work Breakdown Structure (WBS) is the project manager's answer to the question 'what actually needs to happen?' It takes a vague scope statement and turns it into a hierarchical list of work packages - specific enough to estimate, assign, and track. It is not sexy. It is extremely useful.",
    sections: [
      {
        id: "what-is-wbs",
        title: "What a WBS actually is (and isn't)",
        body: [
          "A WBS is a deliverable-oriented decomposition of the project work. In human language: you take the final deliverable and keep breaking it into smaller pieces until each piece is small enough to estimate and assign to a single person or team.",
          "It is not a list of tasks. It is not a schedule. It is not a Gantt chart. It is a map of everything the project produces, arranged hierarchically so nothing gets forgotten. Think of it as a packing list for your project - except forgetting to pack the tent means 40 people sleep in the rain.",
          "The 100% rule: the WBS should capture 100% of the work defined by the project scope. If something is in scope but not in the WBS, it will not get done. If something is in the WBS but not in scope, you've added work you weren't authorised to do. Both problems show up three weeks before the deadline, which is PM-speak for 'way too late.'",
        ],
      },
      {
        id: "building-wbs",
        title: "Building your first WBS",
        body: [
          "Start at the top: the final deliverable. Then ask: what are the major components that make up this deliverable? Each component becomes a Level 2 item. Then decompose each Level 2 item into Level 3. Keep going until each work package passes the '80-hour rule' - it should take no more than 80 hours (two weeks) of effort to complete.",
          "A common mistake is decomposing unevenly. One branch goes five levels deep while another stops at two. The WBS should have consistent granularity - not because uniformity is beautiful, but because uneven decomposition hides work. The branch you stopped decomposing is the branch that will surprise you at the worst possible moment.",
          "Another common mistake: decomposing based on organisational structure instead of deliverables. Your WBS should reflect the work to be done, not your org chart. 'IT department's work' is not a WBS element. 'User authentication system' is. One of these tells you what will be built. The other tells you which department to blame if it's late. Aim for the former.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "The WBS decomposes scope into manageable work packages. Follow the 100% rule, decompose to 80-hour chunks, and organise by deliverable not department. A good WBS is the foundation of everything that follows: estimating, scheduling, and risk management.",
          "Next: estimating techniques - because guessing with confidence is a skill, not a personality trait.",
        ],
      },
    ],
  },

  "estimating-techniques": {
    intro:
      "Estimating is the art of predicting the future while knowing you're probably wrong. The goal isn't perfect accuracy - it's narrowing the cone of uncertainty enough that stakeholders can make good decisions. If you ever meet someone who claims their estimates are always right, nod politely and don't let them near your project.",
    sections: [
      {
        id: "three-techniques",
        title: "Three techniques that actually work",
        body: [
          "Analogous estimating: look at similar work from the past and use that as your baseline. 'We built a customer portal last year in 12 weeks. This one is 30% more complex, so let's estimate 16 weeks.' It's fast, it's simple, and it's only as good as your historical data - which, to be honest, is usually a spreadsheet someone forgot to update.",
          "Parametric estimating: use a statistical relationship between variables. 'Each user story takes our team an average of 1.3 days. We have 40 stories. That's 52 days, assuming the coffee machine doesn't break and nobody goes on leave.' This is more precise than analogous, but garbage in, garbage out - your '1.3 days' figure is only useful if it was actually measured, not guessed.",
          "Three-point estimating: the PMP exam's gift to the world. For each task, estimate the best case (optimistic), worst case (pessimistic), and most likely case. Then apply the PERT formula: (Optimistic + 4×Most Likely + Pessimistic) / 6. The result is a weighted average that accounts for uncertainty. The real benefit isn't the math - it's that the conversation forces you to think about what could go wrong before it does.",
        ],
      },
      {
        id: "dont-do-this",
        title: "What not to do (field notes from the hall of shame)",
        body: [
          "Don't pad estimates secretly. Adding 50% 'just in case' without telling anyone destroys trust and makes everyone else's planning unreliable. If you need contingency, be transparent about it. 'I estimate 8 weeks, and I'd recommend adding 2 weeks of contingency for the integration risk we identified.' That's honesty. 'The estimate is 10 weeks' when you know it's 8 is a future fight waiting to happen.",
          "Don't let the first number spoken become the anchor. In meetings, whoever throws out the first estimate tends to set the range everyone argues around. If a stakeholder says 'this should take two weeks' and you think it's six, don't start negotiating down from two - start from the data. 'Based on similar work, our team averages five to seven weeks for this scope. Let me walk you through why.'",
          "Don't estimate in isolation and then spring it on the team. The people doing the work have the best information about how long it takes. Ask them. Their estimates will be more accurate than yours, and they'll be more committed to a timeline they helped create. This is not abdication - it's delegation of the part you're worst at.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Analogous, parametric, and three-point estimating each have their place. The common thread: good estimates come from data, historical records, and the people doing the work - not from optimism or pressure. Be transparent about uncertainty, and never let the first number spoken become the only number considered.",
          "Next: budget management - turning estimates into something the finance department won't immediately return marked 'insufficient rigour.'",
        ],
      },
    ],
  },

  "budget-management": {
    intro:
      "A project budget is an estimate of costs, expressed in a format the finance department will accept, with enough contingency to survive reality. If estimating is predicting the future, budgeting is putting a price tag on that prediction and defending it to people whose entire job is questioning price tags.",
    sections: [
      {
        id: "budget-components",
        title: "What goes into a budget",
        body: [
          "Labour costs are usually the biggest line item. Hours × blended hourly rate for each person on the team. Don't forget the people who aren't on the project full-time - the legal review that takes two hours, the architect's three review sessions, the procurement manager who processes your purchase orders. These 'partial allocations' add up faster than you think.",
          "Non-labour costs include software licences, cloud infrastructure, travel, training, external vendors, and the mysterious category known as 'miscellaneous' that every experienced PM budgets for because something always comes up. The printer will jam. A contractor will need onboarding. Someone will order the wrong size cables. Miscellaneous is not laziness - it's realism.",
          "Contingency is not padding. Padding is hiding extra budget because you don't trust the estimates. Contingency is an explicit, risk-based reserve calculated from your risk register. If you identified a 30% chance that a vendor will be late, costing $10K, your contingency includes $3K for that risk. When someone asks 'what's the contingency for?' you can point to specific risks, not your gut feeling.",
        ],
      },
      {
        id: "budget-tracking",
        title: "Tracking budget vs actuals",
        body: [
          "The golden rule of budget tracking: actual spend means nothing without context. 'We've spent 60% of the budget' sounds alarming until you add 'and we've completed 70% of the work.' Conversely, 'we've only spent 40% of the budget' sounds great until someone points out you're 60% through the timeline. The relationship between spend and progress is what matters.",
          "Earned Value Management (EVM) is the formal way to track this. It compares three numbers: Planned Value (what you planned to have done by now), Earned Value (what you've actually delivered), and Actual Cost (what you've actually spent). The ratios give you a schedule performance index (SPI) and a cost performance index (CPI). An SPI of 0.8 means you're moving at 80% of planned speed. A CPI of 1.2 means you're getting more value per dollar than expected - enjoy it while it lasts.",
          "For PMs who don't want to become EVM mathematicians overnight: track the simple version. Each week, update three numbers: planned spend to date, actual spend to date, and % work complete. If actual spend exceeds planned spend AND % complete is behind, you have a problem. If both are ahead, you have a different problem - but at least the team is productive.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Budgets include labour, non-labour, and explicit contingency based on risk. Track spend relative to progress, not in isolation. Earned Value Management is the formal method, but the simple version - planned vs actual vs % complete - catches most problems early enough to act.",
          "Next: baseline and change control - the process that keeps your budget and schedule from drifting into fantasy territory.",
        ],
      },
    ],
  },

  "baseline-change-control": {
    intro:
      "A baseline is a snapshot of your plan at a specific point in time - scope, schedule, and budget, frozen and agreed upon. Change control is the process that protects that baseline from being eroded one 'small adjustment' at a time. Without a baseline, you have no way to measure progress. Without change control, your baseline is a suggestion.",
    sections: [
      {
        id: "what-is-baseline",
        title: "The baseline: your project's original sin",
        body: [
          "At the end of planning, you freeze your scope, schedule, and budget. That frozen version is the baseline. From that moment forward, every deviation from it is a change that needs to be evaluated, approved, and communicated. The baseline is the truth. Everything else is a departure from the truth that needs justification.",
          "A common beginner mistake is treating the baseline as permanent. It's not - it's the starting point. Changes happen. The baseline should be updated when approved changes occur. But the key word is approved. If the schedule slips by two weeks because someone didn't plan for a dependency, that's not a change - that's an error. If a stakeholder adds a new feature, that IS a change, and it requires a formal change request.",
          "The psychological trick: stakeholders respect a baseline they helped create. Involve them in the planning process and get explicit sign-off on the baseline. A stakeholder who signed the baseline is much less likely to demand additions without understanding the consequences - because they know you have a signed document that says otherwise.",
        ],
      },
      {
        id: "change-control-process",
        title: "A change control process that doesn't collapse under pressure",
        body: [
          "Every change control process needs four things. First: a change request form - simple, one page, asking what the change is, why it's needed, what it impacts (scope, schedule, budget, quality, risk), and who's requesting it. If someone can't fill out one page, the change probably isn't that important.",
          "Second: a change review board (or at least a designated approver). For small changes, the PM may have authority. For medium changes, the sponsor signs off. For large changes that reshape the project, the steering committee decides. The key is knowing which threshold triggers which approval level before the first change request lands on your desk.",
          "Third: a log. Every change request - approved or rejected - goes into a change log. This is your audit trail. When someone asks at the end of the project 'why did this take so much longer than planned?' the change log is your evidence. 'We approved 12 change requests that added 6 weeks of work.' Hard to argue with documentation.",
          "Fourth: communication. When a change is approved, everyone who needs to know should know. Not just the person who requested it - the team, the stakeholders, the finance department. An approved change that nobody acts on is a meeting that should have been an email, except with more disappointment.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "The baseline is your frozen plan - scope, schedule, budget. Change control is the process that manages deviations from it. Four components: a change request form, a clear approval authority, a change log, and communication. A baseline without change control is a new year's resolution. Change control without a baseline is arguing about whether something changed when you never agreed where you started.",
          "Next: Working with Stakeholders - because projects fail more often because of people problems than spreadsheet problems.",
        ],
      },
    ],
  },

  // ── COURSE: Working with Stakeholders ─────────────────────────────────────

  "stakeholder-identification": {
    intro:
      "Stakeholder identification is the project management equivalent of checking who else is in the room before you say something you might regret. The people who can affect your project are rarely limited to the ones on the org chart - and the ones you miss are the ones who will surface at the worst possible moment with a veto you didn't know existed.",
    sections: [
      {
        id: "who-is-stakeholder",
        title: "Who counts as a stakeholder (spoiler: more people than you think)",
        body: [
          "A stakeholder is anyone who can affect or be affected by the project. This includes people you'd expect (sponsor, team, customers) and people you might not (the compliance officer who needs to approve the final product, the facilities manager who needs to allocate desk space for the implementation team, the IT security team that will audit whatever you build).",
          "The most dangerous stakeholder is the one you didn't identify. They don't show up to meetings because they weren't invited. They don't raise concerns because they don't know the project exists. And then one day, three weeks before go-live, they say 'I need to review this before it launches, and the review window is six weeks.' That conversation is not their fault - it's yours, for not finding them earlier.",
          "A practical exercise: look at your project scope and ask 'who would be affected if this project succeeded or failed dramatically?' Then ask 'who could stop this project if they wanted to?' Then ask 'who would complain they weren't consulted if they saw the finished product?' The answers to these three questions form the core of your stakeholder list.",
        ],
      },
      {
        id: "finding-hidden-stakeholders",
        title: "Finding the invisible ones",
        body: [
          "Some stakeholders are hidden by design - they don't need to engage until a specific trigger point. The legal team doesn't need to be in your weekly standup, but they need to be on your radar for when the contract review phase hits. The procurement team doesn't care about your project until you need to buy something that exceeds their threshold.",
          "Others are hidden because they don't know they're stakeholders. The operations team that will inherit your system after launch. The training team that will need to build onboarding materials. The support desk that will field calls when users can't figure out the new interface. Find them early, brief them early, and they'll be allies. Find them on launch day and they'll be obstacles.",
          "Technique: the stakeholder snowball. Start with the obvious stakeholders and ask each one 'who else should I be talking to?' Each conversation adds names. After three rounds, you'll have a list that's 80% complete. The remaining 20% will introduce themselves - usually by email, usually with a tone that suggests they should have been consulted earlier.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Stakeholders are anyone who can affect or be affected by your project. The ones you miss are the ones who will cause the most problems. Use the snowball technique - ask every stakeholder 'who else?' - to build your list. Document everything in a stakeholder register, not a mental list that gets emptier as the project gets more stressful.",
          "Next: the power/interest grid - a tool for deciding which stakeholders get your attention and which ones can survive on email updates without you feeling guilty about it.",
        ],
      },
    ],
  },

  "power-interest-grid": {
    intro:
      "Not all stakeholders are created equal. Some have the power to cancel your project. Others just want to be kept in the loop. The power/interest grid helps you decide who gets how much of your limited attention - because if you're treating everyone the same, you're either exhausting yourself on low-impact stakeholders or neglecting the ones who matter.",
    sections: [
      {
        id: "the-grid",
        title: "The grid: four boxes, one useful framework",
        body: [
          "The power/interest grid plots stakeholders on two axes. Power: how much influence do they have over the project? Interest: how much do they care about the outcome? This creates four quadrants, each requiring a different engagement strategy.",
          "High power, high interest: these are your key players - the sponsor, the steering committee, the customer executive. They need close management: frequent updates, direct access, and involvement in major decisions. These are the people you call before the meeting, not during it.",
          "High power, low interest: keep them satisfied. They could stop your project if they wanted to, but they don't care enough to pay close attention. The risk is that something triggers their interest at the wrong moment - a budget overrun, a missed deadline, a complaint from someone they trust. Regular but concise status updates prevent surprises. Don't overwhelm them with detail; they'll start paying attention to the wrong things.",
          "Low power, high interest: keep them informed. These are the power users, the subject matter experts, the early adopters who care deeply but can't single-handedly stop the project. They're valuable sources of feedback and advocacy. A monthly newsletter, a Slack channel, or a demo session goes a long way. Ignore them and they become low-power, high-interest, and loud.",
          "Low power, low interest: monitor with minimal effort. Group emails, quarterly summaries, a note in the company newsletter. Your attention is finite - don't spend it here unless something changes that moves them into another quadrant.",
        ],
      },
      {
        id: "grid-in-practice",
        title: "Using the grid when stakeholders change quadrants",
        body: [
          "The grid is not a one-time exercise. Stakeholders move. A new regulation might bump a compliance officer from low-power to high-power overnight. A project delay might turn an apathetic executive into a highly interested micromanager. Review your stakeholder map at every phase gate and after any significant event.",
          "When a stakeholder moves quadrants, your engagement strategy needs to move with them. The most common failure is treating a newly empowered stakeholder with their old engagement level. If the CFO suddenly cares about your project because of a budget review, a monthly email is no longer sufficient - book the meeting, prepare the briefing, and treat the relationship with the weight it now carries.",
          "The other common failure is not moving stakeholders down when they should be. A stakeholder who was critical during planning may be less important during execution. Don't keep sending them daily updates out of habit - you're wasting their attention and training them to ignore your messages. Adjust engagement levels as the project evolves.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Use the power/interest grid to allocate your limited engagement effort. High power + high interest = close management. High power + low interest = keep satisfied. Low power + high interest = keep informed. Low power + low interest = monitor. Review and update the grid regularly - stakeholders change quadrants, and yesterday's strategy is tomorrow's blind spot.",
          "Next: communication planning - because 'I sent an email' is not a communication strategy, it's evidence that you tried.",
        ],
      },
    ],
  },

  "communication-planning": {
    intro:
      "A communication plan answers one question: who needs what information, when, and through which channel? Without one, you default to 'send everything to everyone' - which means the people who need critical updates drown in noise, and the people who don't need anything learn to ignore you entirely.",
    sections: [
      {
        id: "what-goes-in",
        title: "What goes in a communication plan",
        body: [
          "For each stakeholder group, define: what information they need, how often they need it, what format works best for them, who's responsible for delivering it, and how they can escalate if they need more. A steering committee member needs a one-page dashboard weekly. The project team needs a 15-minute standup daily. The wider organisation needs a monthly newsletter that doesn't assume they know what a sprint is.",
          "The most common mistake is designing the plan around what's easy for the PM to produce rather than what's useful for the stakeholder to receive. A detailed 10-page status report is easy for you (you're already tracking the data), but it's useless to an executive who wants three bullet points and a RAG status. Flip it: ask stakeholders what they want, then design the plan around that. Yes, it's more work. Yes, it means your updates actually get read.",
          "Include a 'how to escalate' section in the plan. A stakeholder who needs information urgently should know exactly who to contact and how. Without this, they'll escalate through whatever channel is available - usually by emailing your boss, copying your boss's boss, and adding a subject line that makes everyone's day worse.",
        ],
      },
      {
        id: "channel-discipline",
        title: "Channel discipline (or: please stop sending everything by email)",
        body: [
          "Every channel has a strength. Email is good for records and async communication. Slack is good for quick questions and informal updates. Meetings are good for decisions and alignment. A shared document is good for collaboration and version control. The problem is not having too many channels - it's using them all for everything until nobody knows where to look for anything.",
          "Set explicit rules. 'All status updates go in the project tracker, not email. All decisions are captured in the decision log, not Slack threads over three days. All document changes happen in the shared drive, not on local copies named final_v2_REVIEWED.docx.' The team will forget these rules. That's fine - gently redirect them until the habit forms. A project where everyone knows where to find information runs noticeably smoother than one where finding yesterday's decision requires an archaeological dig through your chat history.",
          "The single most effective communication habit: the weekly one-page status report. Not a dashboard with 47 metrics. Not a deck with 12 slides. One page: what we accomplished, what's blocked, what's next, and the RAG status. Send it the same day every week. Stakeholders will learn to expect it, read it, and trust it. That consistency is worth more than any amount of detailed reporting you could produce on demand.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "A communication plan defines who gets what information, when, and how. Design it around stakeholder needs, not your convenience. Establish channel discipline - each channel has a purpose, use it accordingly. The weekly one-page status report is the single highest-ROI communication habit you can build.",
          "Next: managing resistance - because not every stakeholder is rooting for you, and that's fine if you know how to handle it.",
        ],
      },
    ],
  },

  "managing-resistance": {
    intro:
      "Resistance to a project is rarely about the project itself. It's usually about what the project threatens: autonomy, competence, belonging, or status. A stakeholder who seems 'difficult' is often just someone who hasn't been properly engaged yet. The trick is figuring out what they're actually afraid of before you start labelling them as the problem.",
    sections: [
      {
        id: "why-people-resist",
        title: "The real reasons people resist (it's not because they're difficult)",
        body: [
          "Loss of control: the project changes something they currently own. A department head who controlled a budget suddenly has to follow a new process. A team lead who made all the decisions now has a PM coordinating their work. The resistance isn't about the project - it's about what the project takes away from them.",
          "Loss of competence: the project introduces new tools, processes, or skills. People who were experts at the old way suddenly feel like beginners. This is deeply uncomfortable, especially for senior team members who aren't used to not knowing things. Their resistance is often a mask for 'I'm afraid I'll look stupid.'",
          "Uncertainty and fear: the project creates an unknown future. Will there be redundancies? Will roles change? Will the new system make their job harder before it makes it easier? People resist what they don't understand, and projects are terrible at explaining themselves to the people they affect most.",
          "The solution to all three is the same: listen first, explain second. Acknowledge the loss. Respect the expertise. Address the uncertainty. Most resistant stakeholders become supporters once they feel heard - not because they agree, but because they trust that you're not going to steamroll them.",
        ],
      },
      {
        id: "converting-resistance",
        title: "Techniques for converting resistance into support",
        body: [
          "Involve early, involve often. The best way to prevent resistance is to make potential resistors part of the process before they have a reason to resist. Invite them to planning sessions. Ask for their input on decisions that affect them. People support what they help create - it's not a cliché, it's a survival instinct for your project.",
          "Find the issue behind the position. A stakeholder who says 'I don't support this project' has a reason they're not stating directly. Maybe they think the project is poorly scoped. Maybe they're protecting their team from disruption. Maybe they just weren't included in the initial conversations and feel slighted. Ask open questions until you understand the real concern, then address that concern directly.",
          "Give them a role. The most effective way to turn a resistor into an ally is to give them something meaningful to own. Make them a subject matter expert on the review board. Put them in charge of a workstream that leverages their expertise. Resistance thrives in the absence of responsibility. Give someone a job to do and they'll start acting like someone who wants the project to succeed.",
          "Know when to escalate. If you've tried genuine engagement, listened to concerns, and addressed them, and the stakeholder is still blocking progress - escalate. Not as a complaint, but as a factual statement: 'We've been unable to resolve X. I need the sponsor's help to move forward.' Some resistance can only be resolved by someone higher in the power structure. That's what the sponsor is for.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Resistance usually comes from loss of control, loss of competence, or uncertainty. Address the root cause, not the symptom. Involve potential resistors early. Find the real concern behind their position. Give them a role that makes them invested. Escalate only when genuine engagement has failed. Most resistant stakeholders aren't enemies - they're future allies who haven't been properly engaged yet.",
          "Next: reporting up - because your stakeholders need to know what's happening, and 'everything's fine' followed by 'actually it's not' is not a communication strategy.",
        ],
      },
    ],
  },

  "reporting-up": {
    intro:
      "Status reporting is the art of telling people what they need to know without triggering unnecessary panic or, equally bad, total disengagement. The goal is not to impress stakeholders with how much work is happening - it's to give them enough information to make good decisions and enough confidence to leave you alone.",
    sections: [
      {
        id: "what-executives-want",
        title: "What executives actually want from a status report",
        body: [
          "Executives don't want to know what you did this week. They want to know whether the project is on track, and if it's not, what they need to do about it. Every status report should answer exactly three questions: are we on track (Green/Amber/Red), what's the biggest risk or issue right now, and what do you need from me? Everything else is supporting detail that can live below the fold.",
          "A good RAG status has teeth. Green means the PM would bet their reputation that the milestone will be hit. Amber means there's a known risk that could cause a miss unless something changes - and the PM should state what that something is. Red means a milestone is definitely going to be missed without intervention. A project that's been 'Amber' for three months with no escalation isn't Amber - it's Red with a reporting problem.",
          "A common mistake: using status reports to demonstrate how hard the team is working instead of how the project is tracking. 'The team completed 47 tasks this week' tells an executive nothing useful. 'We're on track for the October milestone, but the vendor integration is two weeks behind - we need a decision on whether to allocate internal resources or accept the delay' tells them exactly what they need to know and do.",
        ],
      },
      {
        id: "escalation-timing",
        title: "When and how to escalate (the bit most PMs get wrong)",
        body: [
          "The #1 rule of escalation: escalate early, escalate often, escalate with a proposed solution. A PM who escalates a problem at the exact moment they discover it is seen as proactive. A PM who escalates the same problem two weeks later is seen as reactive. The difference between the two is not the problem - it's the timing.",
          "When you escalate, always include: what the problem is, what caused it (if known), what impact it will have on scope/schedule/budget, and at least one proposed solution. An escalation without a proposed solution is just complaining in a more formal setting. 'The vendor is two weeks late and I need help' is a cry for help. 'The vendor is two weeks late, I've discussed accelerated delivery but they can't commit, and I need you to authorise switching to a backup vendor' is an escalation.",
          "The exception: very urgent problems that need immediate attention. In that case, escalate first with the facts, then follow up with the proposed solution. But don't make a habit of it. Stakeholders who constantly receive half-baked escalations start treating all escalations as noise, which defeats the purpose.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Status reports should answer: are we on track, what's the biggest risk, and what do you need from me. RAG status must have teeth - don't sit on Amber for months. Escalate early with a proposed solution. The most trusted PMs are the ones who surface problems before they become crises, not the ones who deliver perfect news until suddenly they don't.",
          "You've completed Working with Stakeholders. Next up: Risk Management in Practice - because optimism is not a risk mitigation strategy.",
        ],
      },
    ],
  },

} // end LESSON_CONTENT

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------
export function isWrittenLesson(slug: string): boolean {
  return Object.prototype.hasOwnProperty.call(LESSON_CONTENT, slug)
}

/** Count lesson routes that have a real written body — not catalog stubs. */
export function countWrittenLessonRoutes(
  courses: Array<{ lessons: Array<{ slug: string }> }>,
): number {
  return courses.reduce(
    (total, course) =>
      total + course.lessons.filter((lesson) => isWrittenLesson(lesson.slug)).length,
    0,
  )
}

export function getLessonBody(course: Course, lesson: Lesson): LessonBody {
  const content = LESSON_CONTENT[lesson.slug]

  if (content) {
    return {
      ...content,
      practiceDocId: PRACTICE_MAP[lesson.slug],
    }
  }

  // Generic fallback for lessons not yet written
  const intro =
    lesson.summary ||
    `In this lesson we build practical, job-ready understanding of ${lesson.title.toLowerCase()} within the ${course.title} course.`

  return {
    intro,
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: [
          `${lesson.title} is a core building block on your path from 101 to Pro. This lesson focuses on what actually matters in practice - the concepts you will use on a real project, not exam trivia.`,
          `By the end you'll be able to recognise the pattern, apply it to your own work, and explain it clearly to stakeholders.`,
        ],
      },
      {
        id: "key-concepts",
        title: "Key concepts",
        body: [
          `We break the topic into a handful of memorable ideas. Each concept links back to the ${course.title} objective so the learning compounds as you progress through the course.`,
          `Watch for the callouts - they highlight the mistakes new project managers make most often, and how to avoid them.`,
        ],
      },
      {
        id: "in-practice",
        title: "In practice",
        body: [
          `Here's how this plays out on a live project. Imagine you've just been handed responsibility with limited information and a nervous sponsor. This is exactly where the concepts above earn their keep.`,
          `Follow the worked example, then try the reflection prompt with a project of your own.`,
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          `You now have a working grasp of ${lesson.title.toLowerCase()}. Mark this lesson complete to advance your level rail, then continue to the next lesson to keep the momentum.`,
        ],
      },
    ],
    practiceDocId: PRACTICE_MAP[lesson.slug],
  }
}

