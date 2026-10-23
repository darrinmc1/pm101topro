export type Level = "101" | "intermediate" | "advanced" | "pmo"
export type Methodology = "traditional" | "agile" | "pmp" | "general"

export type Lesson = {
  slug: string
  title: string
  durationMins: number
  isFree: boolean
  summary: string
}

export type Course = {
  slug: string
  title: string
  description: string
  methodology: Methodology
  level: Level
  lessons: Lesson[]
}

export const LEVELS: { value: Level; label: string }[] = [
  { value: "101", label: "101 Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
  { value: "pmo", label: "PMO Level" },
]

export const LEVEL_ORDER: Level[] = ["101", "intermediate", "advanced", "pmo"]

export const LEVEL_LABEL: Record<Level, string> = {
  "101": "101 Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  pmo: "PMO Level",
}

export const METHODOLOGIES: { value: Methodology; label: string }[] = [
  { value: "traditional", label: "Traditional" },
  { value: "agile", label: "Agile" },
  { value: "pmp", label: "PMP / PMI" },
  { value: "general", label: "General" },
]

export const METHODOLOGY_LABEL: Record<Methodology, string> = {
  traditional: "Traditional",
  agile: "Agile",
  pmp: "PMP / PMI",
  general: "General",
}

function lesson(
  slug: string,
  title: string,
  isFree = false,
  durationMins = 8,
  summary = "",
): Lesson {
  return { slug, title, isFree, durationMins, summary }
}

export const COURSES: Course[] = [
  {
    slug: "what-is-project-management",
    title: "What is Project Management?",
    description:
      "Start at zero. Understand what a project actually is, the project lifecycle, and how to write your very first charter.",
    methodology: "traditional",
    level: "101",
    lessons: [
      lesson("what-is-a-project", "What is a project?", true, 6, "Projects vs operations, the triple constraint, and why temporary matters."),
      lesson("the-pm-lifecycle", "The PM lifecycle", false, 9, "Initiating, planning, executing, monitoring, and closing."),
      lesson("key-roles", "Key roles", false, 7, "Sponsor, project manager, team, and stakeholders explained."),
      lesson("your-first-charter", "Your first project charter", false, 10, "The one-page document that authorises your project."),
      lesson("pm101-quiz", "Quiz", false, 5, "Check your understanding of the fundamentals."),
    ],
  },
  {
    slug: "agile-fundamentals",
    title: "Agile Fundamentals",
    description:
      "The mindset, ceremonies, and artifacts behind Agile delivery. Perfect if your team says the word Scrum a lot.",
    methodology: "agile",
    level: "101",
    lessons: [
      lesson("agile-vs-waterfall", "Agile vs Waterfall", true, 7, "When iterative beats sequential, and when it doesn't."),
      lesson("scrum-basics", "Scrum basics", false, 8, "Roles, artifacts, and the empirical process."),
      lesson("sprints-ceremonies", "Sprints & ceremonies", false, 9, "Planning, daily stand-up, review, and retrospective."),
      lesson("user-stories", "User stories", false, 7, "Writing stories with acceptance criteria that ship."),
      lesson("agile-mindset", "Agile mindset", false, 6, "Values and principles that make agile work."),
    ],
  },
  {
    slug: "scope-time-cost",
    title: "Scope, Time & Cost",
    description:
      "The classic triple constraint in depth. Build a WBS, estimate credibly, and hold a baseline under change.",
    methodology: "traditional",
    level: "intermediate",
    lessons: [
      lesson("defining-scope", "Defining scope", true, 9, "Scope statements, inclusions, and the dreaded scope creep."),
      lesson("wbs-deep-dive", "WBS deep dive", false, 11, "Decomposing work into manageable packages."),
      lesson("estimating-techniques", "Estimating techniques", false, 10, "Analogous, parametric, and three-point estimating."),
      lesson("budget-management", "Budget management", false, 9, "Cost baselines and earned value basics."),
      lesson("baseline-change-control", "Baseline & change control", false, 8, "Protecting scope with a change process."),
    ],
  },
  {
    slug: "working-with-stakeholders",
    title: "Working with Stakeholders",
    description:
      "People decide whether projects succeed. Identify, map, and engage stakeholders - even the difficult ones.",
    methodology: "general",
    level: "intermediate",
    lessons: [
      lesson("stakeholder-identification", "Stakeholder identification", true, 7, "Finding everyone who has a stake before they find you."),
      lesson("power-interest-grid", "Power/interest grid", false, 8, "Prioritising engagement effort where it counts."),
      lesson("communication-planning", "Communication planning", false, 9, "Who needs what, when, and through which channel."),
      lesson("managing-resistance", "Managing resistance", false, 8, "Turning blockers into supporters."),
      lesson("reporting-up", "Reporting up", false, 7, "Status updates executives actually read."),
    ],
  },
  {
    slug: "risk-management-in-practice",
    title: "Risk Management in Practice",
    description:
      "Move beyond a static spreadsheet. Run real risk frameworks, quantify exposure, and plan responses that hold.",
    methodology: "general",
    level: "advanced",
    lessons: [
      lesson("risk-frameworks", "Risk frameworks", true, 9, "Structuring identification, analysis, and response."),
      lesson("qualitative-quantitative", "Qualitative vs quantitative", false, 10, "Probability/impact matrices and expected monetary value."),
      lesson("risk-response-strategies", "Risk response strategies", false, 9, "Avoid, transfer, mitigate, accept - and when to use each."),
      lesson("monitoring-control", "Monitoring & control", false, 8, "Keeping the register alive throughout delivery."),
      lesson("risk-workshops", "Risk workshops", false, 8, "Facilitating sessions that surface real risks."),
    ],
  },
  {
    slug: "agile-at-scale",
    title: "Agile at Scale",
    description:
      "Coordinate many teams without losing agility. SAFe, PI planning, dependencies, and portfolio-level flow.",
    methodology: "agile",
    level: "advanced",
    lessons: [
      lesson("safe-overview", "SAFe overview", true, 10, "The scaled agile framework at a glance."),
      lesson("pi-planning", "PI Planning", false, 11, "Aligning multiple teams around a program increment."),
      lesson("cross-team-dependencies", "Cross-team dependencies", false, 9, "Visualising and resolving inter-team blockers."),
      lesson("portfolio-kanban", "Portfolio kanban", false, 8, "Flowing epics through a portfolio system."),
      lesson("agile-metrics", "Agile metrics", false, 8, "Flow, predictability, and value delivery measures."),
    ],
  },
  {
    slug: "building-a-pmo",
    title: "Building a PMO",
    description:
      "Stand up a project management office that adds value. Models, governance, portfolio views, and maturity.",
    methodology: "general",
    level: "pmo",
    lessons: [
      lesson("pmo-types-models", "PMO types & models", true, 10, "Supportive, controlling, and directive offices."),
      lesson("governance-frameworks", "Governance frameworks", false, 11, "Decision rights, gates, and assurance."),
      lesson("portfolio-management", "Portfolio management", false, 10, "Selecting and balancing the right investments."),
      lesson("maturity-models", "Maturity models", false, 9, "Assessing and improving organisational capability."),
      lesson("pmo-reporting", "PMO reporting", false, 9, "Dashboards leadership trusts and acts on."),
    ],
  },
  {
    slug: "pmp-exam-prep",
    title: "PMP Exam Prep",
    description:
      "A structured path through the PMP exam. Process groups, knowledge areas, practice questions, and strategy.",
    methodology: "pmp",
    level: "pmo",
    lessons: [
      lesson("exam-structure", "Exam structure", true, 8, "Domains, question types, and what to expect."),
      lesson("process-groups", "Process groups", false, 10, "The five groups and how they interact."),
      lesson("knowledge-areas", "Knowledge areas", false, 11, "The ten areas and their key processes."),
      lesson("practice-questions", "Practice questions", false, 12, "Working through realistic scenario questions."),
      lesson("exam-strategy", "Exam strategy", false, 9, "Time management and elimination techniques."),
    ],
  },

  // ----- 101 Beginner -----
  {
    slug: "project-management-tools-101",
    title: "Project Management Tools 101",
    description:
      "Get productive fast with the software PMs actually use. Boards, backlogs, timelines, and how to pick the right tool.",
    methodology: "general",
    level: "101",
    lessons: [
      lesson("why-tools-matter", "Why tools matter", true, 6, "How the right tool reduces status chasing and lost work."),
      lesson("boards-and-backlogs", "Boards & backlogs", false, 8, "Kanban boards, backlogs, and tracking work visually."),
      lesson("timelines-and-gantt", "Timelines & Gantt", false, 8, "Reading and building simple schedule views."),
      lesson("collaboration-basics", "Collaboration basics", false, 7, "Comments, mentions, and keeping a single source of truth."),
      lesson("choosing-a-tool", "Choosing a tool", false, 7, "Matching tooling to team size and methodology."),
    ],
  },
  {
    slug: "intro-to-certifications",
    title: "Intro to PM Certifications",
    description:
      "CAPM, PMP, PRINCE2, and Scrum - what each certification means, who it's for, and how to choose your path.",
    methodology: "pmp",
    level: "101",
    lessons: [
      lesson("why-certify", "Why certify?", true, 6, "What certifications signal and when they help your career."),
      lesson("capm-vs-pmp", "CAPM vs PMP", false, 8, "Entry-level versus experienced practitioner credentials."),
      lesson("scrum-certifications", "Scrum certifications", false, 7, "CSM, PSM, and the agile credential landscape."),
      lesson("prince2-and-others", "PRINCE2 & others", false, 7, "Method-based certifications and regional differences."),
      lesson("building-your-path", "Building your path", false, 7, "Sequencing certifications around your goals."),
    ],
  },
  {
    slug: "communication-essentials",
    title: "Communication Essentials",
    description:
      "The skill that separates good PMs from great ones. Run meetings, write clearly, and keep everyone aligned.",
    methodology: "general",
    level: "101",
    lessons: [
      lesson("communication-foundations", "Communication foundations", true, 6, "Channels, audiences, and message clarity."),
      lesson("running-meetings", "Running meetings", false, 8, "Agendas, facilitation, and decisions that stick."),
      lesson("written-updates", "Written updates", false, 7, "Async updates people actually read."),
      lesson("active-listening", "Active listening", false, 7, "Hearing what stakeholders really mean."),
      lesson("handling-conflict", "Handling conflict", false, 8, "Defusing tension and keeping work moving."),
    ],
  },

  // ----- Intermediate -----
  {
    slug: "scrum-master-essentials",
    title: "Scrum Master Essentials",
    description:
      "Serve the team and the process. Facilitate ceremonies, remove blockers, and coach toward continuous improvement.",
    methodology: "agile",
    level: "intermediate",
    lessons: [
      lesson("the-scrum-master-role", "The Scrum Master role", true, 8, "Servant leadership versus command-and-control."),
      lesson("facilitating-ceremonies", "Facilitating ceremonies", false, 9, "Getting real value from each Scrum event."),
      lesson("removing-impediments", "Removing impediments", false, 8, "Surfacing and clearing blockers fast."),
      lesson("coaching-the-team", "Coaching the team", false, 9, "Building self-organisation and accountability."),
      lesson("working-with-po", "Working with the Product Owner", false, 8, "Backlog health and shared ownership of outcomes."),
    ],
  },
  {
    slug: "scheduling-and-planning",
    title: "Scheduling & Planning",
    description:
      "Build schedules that survive reality. Network diagrams, the critical path, dependencies, and resource leveling.",
    methodology: "traditional",
    level: "intermediate",
    lessons: [
      lesson("activity-sequencing", "Activity sequencing", true, 8, "Dependencies and building a network diagram."),
      lesson("critical-path-method", "Critical path method", false, 11, "Finding the longest path and total float."),
      lesson("resource-leveling", "Resource leveling", false, 9, "Smoothing overallocation without blowing the date."),
      lesson("schedule-compression", "Schedule compression", false, 8, "Crashing and fast-tracking when the date moves."),
      lesson("baselining-schedule", "Baselining the schedule", false, 8, "Setting and defending a schedule baseline."),
    ],
  },
  {
    slug: "pmp-process-groups",
    title: "PMP Process Groups Deep Dive",
    description:
      "Master the five process groups the exam is built around. Inputs, tools, and outputs made intuitive, not memorised.",
    methodology: "pmp",
    level: "intermediate",
    lessons: [
      lesson("initiating-processes", "Initiating processes", true, 9, "Chartering and identifying stakeholders."),
      lesson("planning-processes", "Planning processes", false, 12, "The largest group and how the plans connect."),
      lesson("executing-processes", "Executing processes", false, 10, "Directing work and managing the team."),
      lesson("monitoring-controlling", "Monitoring & controlling", false, 10, "Keeping performance on baseline."),
      lesson("closing-processes", "Closing processes", false, 8, "Formal closure and lessons learned."),
    ],
  },

  // ----- Advanced -----
  {
    slug: "earned-value-management",
    title: "Earned Value Management",
    description:
      "Measure performance with numbers leadership trusts. PV, EV, AC, and the variances and indexes that forecast the end.",
    methodology: "traditional",
    level: "advanced",
    lessons: [
      lesson("evm-fundamentals", "EVM fundamentals", true, 9, "Planned value, earned value, and actual cost."),
      lesson("variances", "Cost & schedule variance", false, 10, "CV, SV, and what they reveal about health."),
      lesson("performance-indexes", "Performance indexes", false, 10, "CPI and SPI as efficiency measures."),
      lesson("forecasting-eac", "Forecasting EAC", false, 10, "Estimate at completion under different assumptions."),
      lesson("reporting-evm", "Reporting EVM", false, 8, "Communicating earned value without the jargon."),
    ],
  },
  {
    slug: "kanban-and-lean-flow",
    title: "Kanban & Lean Flow",
    description:
      "Optimize for flow, not utilization. WIP limits, cycle time, bottlenecks, and metrics that expose waste.",
    methodology: "agile",
    level: "advanced",
    lessons: [
      lesson("lean-principles", "Lean principles", true, 8, "Eliminating waste and maximizing value flow."),
      lesson("kanban-systems", "Kanban systems", false, 9, "Visualising work and pulling instead of pushing."),
      lesson("wip-limits", "WIP limits", false, 9, "Why limiting work in progress speeds delivery."),
      lesson("flow-metrics", "Flow metrics", false, 9, "Cycle time, throughput, and cumulative flow."),
      lesson("continuous-improvement", "Continuous improvement", false, 8, "Kaizen and evolving the system over time."),
    ],
  },
  {
    slug: "pmp-domains-mastery",
    title: "PMP Domains Mastery",
    description:
      "The exam is organised around People, Process, and Business Environment. Go deep on the tasks in each domain.",
    methodology: "pmp",
    level: "advanced",
    lessons: [
      lesson("people-domain", "People domain", true, 11, "Leading teams, conflict, and empowerment."),
      lesson("process-domain", "Process domain", false, 12, "Delivering value through sound execution."),
      lesson("business-environment", "Business environment", false, 10, "Compliance, value, and organisational change."),
      lesson("agile-hybrid-content", "Agile & hybrid content", false, 10, "The predictive-to-agile spectrum on the exam."),
      lesson("situational-judgement", "Situational judgement", false, 9, "Choosing the best next action under pressure."),
    ],
  },

  // ----- PMO Level -----
  {
    slug: "portfolio-and-program-management",
    title: "Portfolio & Program Management",
    description:
      "Zoom out from single projects. Group related work into programs, balance a portfolio, and realise strategic benefits.",
    methodology: "traditional",
    level: "pmo",
    lessons: [
      lesson("projects-programs-portfolios", "Projects, programs, portfolios", true, 9, "How the three levels relate and differ."),
      lesson("program-management", "Program management", false, 11, "Coordinating projects toward shared benefits."),
      lesson("portfolio-selection", "Portfolio selection", false, 10, "Prioritising and balancing investments."),
      lesson("benefits-realisation", "Benefits realisation", false, 10, "Tracking value long after delivery."),
      lesson("strategic-alignment", "Strategic alignment", false, 9, "Connecting delivery to organisational strategy."),
    ],
  },
  {
    slug: "enterprise-agile-transformation",
    title: "Enterprise Agile Transformation",
    description:
      "Lead agility beyond the team. Operating models, funding, culture change, and measuring transformation outcomes.",
    methodology: "agile",
    level: "pmo",
    lessons: [
      lesson("transformation-strategy", "Transformation strategy", true, 10, "Why transformations stall and how to start well."),
      lesson("operating-models", "Operating models", false, 11, "Structuring around value streams, not silos."),
      lesson("agile-funding", "Agile funding", false, 10, "Beyond annual budgets to incremental funding."),
      lesson("culture-change", "Culture change", false, 10, "Shifting mindset and leadership behaviour."),
      lesson("measuring-transformation", "Measuring transformation", false, 9, "Outcome metrics that show real progress."),
    ],
  },
  {
    slug: "pmp-advanced-scenarios",
    title: "PMP Advanced Scenarios",
    description:
      "Bridge exam theory and messy reality. Work through complex hybrid scenarios and defend your decisions with rationale.",
    methodology: "pmp",
    level: "pmo",
    lessons: [
      lesson("complex-scenarios", "Complex scenarios", true, 11, "Multi-factor questions and how to break them down."),
      lesson("hybrid-delivery", "Hybrid delivery", false, 11, "Blending predictive and adaptive approaches."),
      lesson("stakeholder-dilemmas", "Stakeholder dilemmas", false, 10, "Competing interests and the ethical choice."),
      lesson("tailoring-approach", "Tailoring the approach", false, 10, "Choosing the right method for the context."),
      lesson("final-mock-review", "Final mock review", false, 12, "A full scenario set with worked rationale."),
    ],
  },

  // ----- New: 101 Beginner -----
  {
    slug: "getting-started-as-a-pm",
    title: "Getting Started as a PM",
    description:
      "You've got the title - now what? Navigate onboarding, build credibility, avoid the classic first-project traps, and set yourself up for long-term growth.",
    methodology: "general",
    level: "101",
    lessons: [
      lesson("your-first-week", "Your first week as a PM", true, 7, "What to learn, who to meet, and what to ask before day one."),
      lesson("reading-the-room", "Reading the room", false, 8, "Organisational culture, politics, and unspoken rules."),
      lesson("building-credibility", "Building credibility fast", false, 9, "Earning trust with sponsors, dev teams, and stakeholders."),
      lesson("first-project-checklist", "First project checklist", false, 8, "The practical steps every new PM should follow."),
      lesson("finding-a-mentor", "Finding a mentor", false, 6, "How to find guidance and grow beyond your first year."),
    ],
  },
  {
    slug: "meeting-facilitation",
    title: "Meeting Facilitation",
    description:
      "Most meetings waste time. Learn to design, facilitate, and close sessions that produce decisions, not just more meetings.",
    methodology: "general",
    level: "101",
    lessons: [
      lesson("meeting-design", "Meeting design", true, 7, "Purpose, outcomes, and designing the agenda before the invite."),
      lesson("facilitation-techniques", "Facilitation techniques", false, 9, "Keeping the room engaged and the discussion on track."),
      lesson("remote-meetings", "Remote meetings", false, 8, "Async-first facilitation for distributed teams."),
      lesson("decision-making", "Decision-making in meetings", false, 8, "Moving from discussion to clear, recorded decisions."),
      lesson("post-meeting", "After the meeting", false, 6, "Minutes, actions, and closing the loop."),
    ],
  },

  // ----- New: Intermediate -----
  {
    slug: "vendor-management",
    title: "Vendor Management",
    description:
      "Third parties bring risk and reward. Select vendors, negotiate contracts, manage delivery, and exit cleanly.",
    methodology: "traditional",
    level: "intermediate",
    lessons: [
      lesson("vendor-selection", "Vendor selection", true, 9, "RFx, scoring matrices, and due diligence."),
      lesson("contract-types", "Contract types", false, 10, "Fixed price, T&M, and outcome-based contracts."),
      lesson("vendor-relationships", "Vendor relationships", false, 9, "Governance, SLAs, and day-to-day management."),
      lesson("vendor-risk", "Vendor risk", false, 8, "Assessing and mitigating third-party risk."),
      lesson("contract-exit", "Contract exit", false, 7, "Transition planning and offboarding vendors."),
    ],
  },
  {
    slug: "quality-management",
    title: "Quality Management",
    description:
      "Quality isn't testing at the end - it's built in from the start. Plan, assure, and control quality across the delivery lifecycle.",
    methodology: "general",
    level: "intermediate",
    lessons: [
      lesson("quality-planning", "Quality planning", true, 8, "Standards, metrics, and the quality management plan."),
      lesson("quality-assurance", "Quality assurance", false, 9, "Process audits and building quality into workflows."),
      lesson("quality-control", "Quality control", false, 9, "Inspection, testing, and acceptance criteria."),
      lesson("continuous-improvement", "Continuous quality improvement", false, 8, "Root cause analysis and corrective action."),
      lesson("quality-reporting", "Quality reporting", false, 7, "Communicating quality metrics to stakeholders."),
    ],
  },

  // ----- New: Advanced -----
  {
    slug: "negotiation-for-pms",
    title: "Negotiation for PMs",
    description:
      "PMs negotiate constantly - scope, budget, timeline, resources. Move from compromise to principled deals that preserve relationships.",
    methodology: "general",
    level: "advanced",
    lessons: [
      lesson("negotiation-basics", "Negotiation basics", true, 8, "BATNA, ZOPA, and the difference between position and interest."),
      lesson("principled-negotiation", "Principled negotiation", false, 10, "Separating people from the problem - the Harvard method."),
      lesson("scope-negotiation", "Scope negotiation", false, 9, "Handling scope creep without burning goodwill."),
      lesson("resource-negotiation", "Resource negotiation", false, 9, "Getting the right people at the right time."),
      lesson("difficult-conversations", "Difficult conversations", false, 9, "Saying no, managing expectations, and preserving trust."),
    ],
  },
  {
    slug: "organisational-change",
    title: "Organisational Change Management",
    description:
      "Projects change organisations - whether you plan for it or not. Lead adoption, manage resistance, and embed lasting change.",
    methodology: "general",
    level: "advanced",
    lessons: [
      lesson("change-models", "Change models", true, 9, "ADKAR, Kotter, and Prosci frameworks compared."),
      lesson("stakeholder-impact", "Stakeholder impact", false, 10, "Mapping who is affected and how their work changes."),
      lesson("communication-strategy", "Communication strategy", false, 9, "Messaging change at the right time through the right channels."),
      lesson("training-adoption", "Training & adoption", false, 10, "Designing interventions that actually change behaviour."),
      lesson("sustaining-change", "Sustaining change", false, 8, "Handoffs, reinforcement, and measuring adoption over time."),
    ],
  },

  // ----- New: PMO Level -----
  {
    slug: "pmo-setup-playbook",
    title: "PMO Setup Playbook",
    description:
      "Building a PMO from scratch or reshaping one. Define the mandate, pick the model, staff the office, and prove value within 90 days.",
    methodology: "general",
    level: "pmo",
    lessons: [
      lesson("defining-mandate", "Defining the mandate", true, 10, "Sponsorship, charter, and the scope of the PMO's authority."),
      lesson("pmo-model-selection", "PMO model selection", false, 10, "Supportive, controlling, or directive - which fits your org."),
      lesson("pmo-processes", "PMO processes", false, 11, "The essential processes every PMO needs from day one."),
      lesson("staffing-pmo", "Staffing the PMO", false, 9, "Roles, capabilities, and building the right team."),
      lesson("pmo-roi", "Demonstrating PMO value", false, 9, "Metrics and stories that prove the PMO's contribution."),
    ],
  },
  {
    slug: "resource-management",
    title: "Resource Management",
    description:
      "People are your scarcest resource. Forecast demand, allocate capacity, resolve conflicts, and optimise utilisation without burning teams out.",
    methodology: "traditional",
    level: "pmo",
    lessons: [
      lesson("capacity-planning", "Capacity planning", true, 10, "Forecasting demand and mapping resource availability."),
      lesson("resource-allocation", "Resource allocation", false, 10, "Assigning the right people to the right work."),
      lesson("conflict-resolution", "Resource conflict resolution", false, 9, "Managing competing priorities across the portfolio."),
      lesson("utilisation-metrics", "Utilisation metrics", false, 8, "Measuring productivity without creating perverse incentives."),
      lesson("workforce-planning", "Workforce planning", false, 10, "Strategic hiring, contractors, and building capability pipelines."),
    ],
  },
]

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug)
}

export function getCoursesByLevel(level: Level): Course[] {
  return COURSES.filter((c) => c.level === level)
}

export function findLesson(
  courseSlug: string,
  lessonSlug: string,
): { course: Course; lesson: Lesson; index: number } | undefined {
  const course = getCourse(courseSlug)
  if (!course) return undefined
  const index = course.lessons.findIndex((l) => l.slug === lessonSlug)
  if (index === -1) return undefined
  return { course, lesson: course.lessons[index], index }
}
