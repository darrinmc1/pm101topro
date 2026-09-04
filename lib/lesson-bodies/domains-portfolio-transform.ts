import type { LessonBodies } from "./types"

export const domainsPortfolioTransformBodies: LessonBodies = {
  "people-domain": {
    intro:
      "The People domain is not the exam's pastoral wing. It is a family of tasks — lead, conflict, empower, train, unblock — that decide whether a technically sound plan survives contact with actual humans.",
    sections: [
      {
        id: "task-family-not-soft-skills",
        title: "A task family, not a personality module",
        body: [
          "PMI's current exam content is organised by domains, not by the old process-group map. People is the first domain because delivery fails more often in relationships than in Gantt arithmetic. Treat it as a set of jobs you must be able to do: manage conflict, lead a team, support performance, empower others, train, build the team, remove impediments, negotiate, collaborate, create shared understanding, run virtual teams, set ground rules, mentor, and apply emotional intelligence.",
          "That list is not a vibe. Each item is a task you can practise. 'Be a servant leader' is useless until you can name the next action: remove the blocker the team cannot reach, protect a retrospective from becoming a status meeting, or refuse to assign work the person has not been trained to do.",
          "Organisations still call this 'the soft stuff' while missing another deadline caused by an unowned conflict. Peel Boss energy, not a hug: the People domain is operations. If you cannot run a difficult conversation, you do not have a process problem. You have a People-task gap wearing a RAID log.",
        ],
      },
      {
        id: "what-the-tasks-look-like",
        title: "What the People tasks look like on a Tuesday",
        body: [
          "Conflict: two seniors disagree on the design and the stand-up has become a cold war. Your job is not to pick a favourite in the corridor. Facilitate, name the disagreement, and get a decision with criteria. Ignoring it so the schedule 'stays green' is how you inherit an issue with a six-week tail.",
          "Empowerment and training: a stakeholder wants the junior analyst to 'just own the integration.' If they have not been trained and do not have authority, that is not empowerment. That is abandonment with a motivational poster. Train, pair, or change the assignment. Mentoring is a task, not a coffee that never gets booked.",
          "Impediments and virtual teams: the blocker that only the sponsor can move is still your task to surface. Distance does not excuse silence. Ground rules — response times, decision rights, what 'done' means — are how a distributed team stops inventing twelve cultures. Emotional intelligence here is noticing the person who has gone quiet, not writing a longer Slack message.",
        ],
      },
      {
        id: "how-to-reason-people",
        title: "How to reason when the stem is a people problem",
        body: [
          "Ask three questions. Is this a relationship, authority, or capability issue? Has anyone spoken to the people involved, or are we leaping to a process weapon? Who actually has the power to act? If the answer is the sponsor, your next action is a clean escalation with a proposed path — not a pep talk in the team channel.",
          "The exam — and the job — punish the nuclear option as a first move. Do not fire, reassign, or write a new RACI before you have talked to the humans. They also punish the opposite: endless listening while the milestone burns. Investigate, then act. Servant leadership is service with a spine.",
          "Ethics sits inside People more than people admit. Favouring a friend in a vendor decision, hiding a team member's mistake from a sponsor, or letting a loud stakeholder rewrite ground rules for everyone else are People failures with Code of Ethics labels: fairness, honesty, respect. We will meet those again when interests compete.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "People is a task family: lead, conflict, empower, train, unblock, negotiate, align, and use emotional intelligence on purpose. Treat it as work with owners and next actions, not as optional warmth.",
          "Next: the Process domain — the delivery task family, and why it is not a synonym for 'do Waterfall harder.'",
        ],
      },
    ],
  },

  "process-domain": {
    intro:
      "Process is the domain of actually delivering: scope, schedule, cost, quality, risk, change, artefacts, and closure. It is not a religion of templates. It is the operating system that keeps value from dissolving into busywork.",
    sections: [
      {
        id: "delivery-not-paperwork",
        title: "Delivery work, not paperwork theatre",
        body: [
          "The Process domain is a family of tasks: execute with enough urgency to deliver value, manage communications, assess risk, engage stakeholders, plan and manage budget, schedule, quality, and scope, integrate the plan, manage change, run procurement, keep artefacts honest, choose a method, set governance, manage issues, transfer knowledge, and close or transition the work.",
          "That is not 'the Waterfall chapter.' Adaptive teams still plan, still manage change, still close. They just do those tasks in smaller loops. Predictive teams still need urgency and value, not a twelve-month wait to discover the customer wanted something else.",
          "The failure mode is confusing artefacts with work. A beautiful schedule that nobody updates is interior decoration. A risk register with no owners is anxiety in columns. Process tasks earn their keep when they change a decision this week.",
        ],
      },
      {
        id: "the-spine",
        title: "Integration, change, and value as the spine",
        body: [
          "Integration is the unglamorous centre. Someone has to notice that the schedule assumes a vendor date the procurement task has not secured, and that the quality plan assumes testers the resource plan does not have. That someone is you. Integration is not a phase. It is the habit of making the parts talk.",
          "Change control is how Process stays honest. A change that is absorbed with a smile and no baseline update is how you invent a new project in secret. A change board that rejects everything is how the business goes around you. The task is to evaluate impact — scope, time, cost, risk, benefits — and get a decision from the person who actually owns the constraint.",
          "Value and urgency belong in Process, not only in the business-case appendix. If a workstream no longer serves the outcome, stopping it is a Process decision. Shipping a thin slice that a customer can use beats polishing a component nobody will see until December. Intel Academy rule: activity is not progress, and a green RAG on the wrong work is still a miss.",
        ],
      },
      {
        id: "close-and-knowledge",
        title: "Issues, knowledge, and the close nobody wants",
        body: [
          "Promote risks to issues when they land. An issue without an owner and a date is a complaint. Knowledge transfer is a Process task because the project is temporary and the organisation is not. If the only person who understands the interface is leaving on Friday, you do not have a 'people problem to park.' You have a continuity failure in motion.",
          "Closure and transition are where Process either professionalises or ghosts the operations team. Formal acceptance, residual issues, contracts closed, lessons that someone will actually read, and a handover with a named receiver. Skipping close to 'start the next one' is how the same defect returns wearing a new project code.",
          "When a scenario smells like Process, look for the missing loop: no baseline, no change path, no artefact, no owner, no close. The best next action is usually to restore the loop, not to invent a heroic workaround that trains the organisation to skip you next time.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Process is the delivery task family: plan, integrate, control change, manage issues, keep artefacts true, and close. Method is a choice inside the domain, not a substitute for it.",
          "Next: Business Environment — compliance, benefits, external change, and the organisation the project is trying to alter.",
        ],
      },
    ],
  },

  "business-environment": {
    intro:
      "A project that ignores the business it sits in is a hobby with a budget code. The Business Environment domain is the task family for compliance, benefits, external shocks, and organisational change — the work after the demo applause.",
    sections: [
      {
        id: "not-an-island",
        title: "The project is not an island",
        body: [
          "This domain is small in task count and large in damage when skipped. The tasks are: plan and manage compliance; evaluate and deliver benefits and value; evaluate and address external business-environment changes; and support organisational change. None of those are 'someone in legal will handle it.'",
          "PMs love the delivery bubble. Scope is clear, the team is known, the RAID is tidy. Then a regulator moves a date, a competitor ships, a merger freezes spend, or operations refuses the handover because nobody designed the new operating rhythm. That is not bad luck. That is an unowned Business Environment task.",
          "You do not need a crystal ball. You need a habit of asking what outside the plan can invalidate the plan — and who in the business owns the answer. If the answer is 'not me,' your next action is to find the owner, not to write a longer assumption log and hope.",
        ],
      },
      {
        id: "compliance-and-external",
        title: "Compliance and the world outside the WBS",
        body: [
          "Compliance is a plan, not a vibe. Identify the standards, regulations, policies, and security bars that apply. Build the evidence trail into the schedule. A team that 'will do the audit pack at the end' is scheduling a surprise. If you do not know the bar, stop guessing and bring the compliance function in before you paint yourselves into a non-compliant design.",
          "External change is the news the charter did not mention: law, market, supplier failure, political priority, currency, a pandemic-shaped hole in the office plan. The task is to evaluate impact on objectives and benefits, then recommend a response — re-scope, pause, accelerate, or stop. Pretending the charter is still true because it was signed in March is loyalty to a PDF.",
          "Do not confuse 'we noted it in risks' with 'we addressed it.' A red external risk with no sponsor conversation is a status surprise waiting for a board pack. Escalate with options. Options are how Business Environment work looks like competence rather than weather reporting.",
        ],
      },
      {
        id: "benefits-and-org-change",
        title: "Benefits and the change the organisation must absorb",
        body: [
          "Benefits are not the go-live party. They are the measurable change in the business after the project has handed over — cost out, revenue in, risk down, service better. If nobody owns the benefit after you close, you delivered an output and called it a win. The owner is usually an operational leader, not the PM forever. Your task is to make that explicit before you spend the budget.",
          "Organisational change is why 'the system is live' and 'nobody uses it' can both be true. Training, comms, role changes, incentives, and the unofficial process people will cling to are in this domain. Supporting that change is not a comms email on Friday. It is work with a sponsor who can move the org chart, not just the project plan.",
          "When a question smells like Business Environment, look for the word the delivery team is avoiding: regulator, benefit owner, operations, market, policy. The best next action is usually to engage the business owner and reassess value — not to add another sprint of features that will never be adopted.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Business Environment is compliance, benefits, external change, and organisational change. The project ends; the value and the new way of working do not manage themselves.",
          "Next: Agile and hybrid content — the predictive-to-adaptive spectrum, and why 'we are Agile' is not a method.",
        ],
      },
    ],
  },

  "agile-hybrid-content": {
    intro:
      "Hybrid is a spectrum, not a flag you plant after buying sticky notes. Predictive, adaptive, and the messy middle are choices about uncertainty, not a loyalty test.",
    sections: [
      {
        id: "spectrum-not-binary",
        title: "A spectrum, not a civil war",
        body: [
          "At one end: work with stable requirements, high cost of change, and a need for upfront design — construction, some regulated hardware, a cutover that can only happen once. Predictive planning earns its keep there. At the other end: high uncertainty, cheap change, and value from early feedback — most digital products. Adaptive loops earn their keep there.",
          "Most real work sits between. A regulated product may need predictive compliance evidence and adaptive discovery on the customer journey. A construction-adjacent digital twin may lock the physical interface and iterate the software. Calling the whole thing 'Agile' or 'Waterfall' is how you pick a slogan and then smuggle the other approach in through a side door.",
          "PMI's exam content assumes you can move along that spectrum without a religious conversion. So does the job. The question is never 'which tribe are we?' It is 'which parts of this work need a baseline and a change board, and which parts need a backlog and a review?'",
        ],
      },
      {
        id: "hybrid-on-purpose",
        title: "Hybrid on purpose, not by accident",
        body: [
          "Accidental hybrid looks like this: sprints on the wall, a Gantt that is the real plan, a retro cancelled because we are busy, and a change request process that only applies when Finance is watching. That is predictive delivery with extra meetings. It trains people to distrust both sides.",
          "Deliberate hybrid names the seams. Perhaps the contract and the go-live date are fixed, and scope inside the date is ordered by value. Perhaps architecture decisions are gated, and feature slices iterate. Perhaps vendor hardware is predictive and the integration software is adaptive. Write the seams down. Governance should match the seam, not fight it.",
          "Servant leadership still applies. The team doing adaptive work should not be forced into a monthly change board for every story. The team doing predictive work should not be told 'just be Agile' when the concrete has been poured. Your job is to protect the method that fits the work, not to flatten everything into the last conference talk you enjoyed.",
        ],
      },
      {
        id: "how-questions-are-written",
        title: "How these questions are written — and how the job rhymes",
        body: [
          "Stems will mix signals: a sponsor who wants a date, a team that wants to inspect and adapt, a regulator who wants a traceable artefact. Do not pick the answer that names your favourite framework. Pick the action that fits the constraint that cannot move, and tailor the rest.",
          "If uncertainty is the problem, a detailed twelve-month task list is not courage. If the constraint is a legal go-live window, 'we will discover the scope in sprint 14' is not courage either. The best next action is often to make the constraint explicit and propose a hybrid that honours it.",
          "Agile content on the exam is not a Scrum trivia night. It is mindset and practices: incremental value, feedback, servant leadership, backlog order, definition of done. You can use those practices inside a hybrid without pretending the entire organisation has become a start-up. We will practise the judgement next.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Treat delivery as a spectrum. Hybrid is a designed seam between predictive and adaptive work, not Scrum theatre on top of a frozen Gantt. Match governance to the seam.",
          "Next: situational judgement — choosing the best next action when the stem is messy and every option sounds vaguely professional.",
        ],
      },
    ],
  },

  "situational-judgement": {
    intro:
      "Situational questions are not a personality quiz. They ask for the best next action under a constraint — usually after someone has already done the obvious thing badly.",
    sections: [
      {
        id: "best-next-action",
        title: "Best next action, not best TED talk",
        body: [
          "Read the stem for what has already happened. If the PM has not spoken to the person, 'facilitate a conversation' beats 'escalate to the sponsor' and 'rewrite the charter.' If they have spoken twice and the blocker is above their authority, escalate. The exam punishes skipping steps and punishes lingering after the steps are done.",
          "Name the domain. A fight about design is often People. A baseline that no longer matches the work is Process. A law that moved is Business Environment. Mixed stems are normal. Start with the domain that is on fire, then check you have not ignored the others.",
          "Discard answers that are rude, secretive, or leap to HR. Discard answers that ignore a stated constraint ('the date cannot move'). Discard answers that collect more data forever when the house is already burning. What remains is usually investigate-then-act, or act-then-inform, depending on urgency.",
        ],
      },
      {
        id: "people-vs-process",
        title: "People problem or process problem",
        body: [
          "If two humans disagree, do not open with a new template. Talk, facilitate, decide. If the work has no owner, no definition of done, and no change path, a heartfelt 1:1 will not invent a control system. Use the matching task family.",
          "Servant leadership is a bias toward enabling the team, not a ban on governance. Removing an impediment is People. Installing a governance structure the work actually needs is Process. Both can be right in the same week. The wrong move is using one as a substitute for the other because it feels more 'modern.'",
          "When the options include 'do nothing and monitor,' ask whether a trigger exists. Monitor without a trigger is how registers go to sleep. When the options include 'update the plan,' ask whether anyone with authority has approved the change. Updating a plan in private is fiction.",
        ],
      },
      {
        id: "ethics-under-pressure",
        title: "Ethics when the options all look expensive",
        body: [
          "Honesty: do not hide a defect, a slip, or a conflict of interest because a sponsor 'needs good news.' Fairness: do not steer a vendor decision toward a friend. Responsibility: own the impact of a known quality gap. Respect: do not humiliate a team member in front of the steerco to look decisive.",
          "The 'best' action is sometimes the one that slows the celebration. That is not exam trickery. That is the job. You will not be handed a certificate for it here, and nobody reputable will promise you one. You will be handed a situation where the comfortable answer is a small lie.",
          "Practise the sentence: 'Here is what is true, here is the impact, here is what I recommend.' If you can say it without decorating the RAG, you are doing situational judgement. If you cannot, the domain does not matter — you are writing fiction for a living.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Judge the stem by domain, by what has already been tried, and by the constraint that cannot move. People tools for people problems, Process tools for missing loops, Business Environment tools when the outside world moved. Ethics is a veto, not a footnote.",
          "You have the three PMI task families and the hybrid spectrum. Use them on a live decision this week — even a small one. The next courses take the same judgement into portfolio work, transformation, and messier scenarios. No pass promise. Just a sharper next action.",
        ],
      },
    ],
  },

  "projects-programs-portfolios": {
    intro:
      "Project, program, and portfolio are not three words for 'a big piece of work.' They are three altitudes. Confusing them is how you get a project manager asked to 'just align the strategy' with a RAID log and a brave smile.",
    sections: [
      {
        id: "three-altitudes",
        title: "Three altitudes, three jobs",
        body: [
          "A project is temporary work to create a unique output — a product, service, or result — and then end. Success is typically delivery to agreed constraints and a clean handover. The PM's horizon is the life of that endeavour.",
          "A program is a group of related projects (and sometimes other work) coordinated so the organisation gets benefits it would not get by managing those projects as strangers. The program manager's job is interdependency, pacing, and benefits — not a mega-Gantt of every team's tasks. If you are scheduling everyone else's stand-up, you have fallen an altitude.",
          "A portfolio is the set of projects, programs, subsidiary portfolios, and related operations selected and managed together to achieve strategic objectives. The portfolio question is not 'are we on time?' It is 'are we funding the right mix, and should this still exist?' A portfolio that cannot kill or defer work is a to-do list with a strategy slide stapled to it.",
        ],
      },
      {
        id: "what-each-optimises",
        title: "What each level optimises — and what it must not steal",
        body: [
          "Projects optimise delivery of an output. Programs optimise related outcomes and shared constraints — a common architecture, a shared launch window, a benefit that only appears when three projects land in the right order. Portfolios optimise investment against strategy, capacity, and risk appetite.",
          "Theft between levels is common. A sponsor asks the project to 'own the benefit' with no operational receiver. A program asks every project for the same status pack in three formats. A portfolio treats every proposal as a project that must start, because saying no feels political. Each theft creates noise and hides the real decision.",
          "Write the noun on the work. If the thing has a unique output and an end date, it is a project. If the value is in the coordination of related change, it is a program. If the question is 'which bets do we place this year?', it is portfolio. Using 'program' as a prestige synonym for 'large project' is how organisations invent extra governance and still miss the benefit.",
        ],
      },
      {
        id: "why-the-distinction-pays",
        title: "Why the distinction pays for itself",
        body: [
          "Get the altitude right and the artefacts shrink. A project needs a charter, a plan, and a close. A program needs a benefits map, a dependency view, and a governance that resolves conflicts between projects. A portfolio needs selection criteria, capacity truth, and a rhythm for start/stop/continue. One template for all three is how none of them work.",
          "Reporting follows altitude. Project: milestone, risk, ask. Program: benefit trajectory, cross-project collision, decision needed. Portfolio: mix, strategic fit, capacity, and what you are not doing. Sending the board a project RAG for a portfolio conversation is how you get a two-hour archaeology session and no decision.",
          "You will go deeper on programs next. For now, practise the sentence in your current organisation: 'This is a project reporting into a program in a portfolio that has not yet said what it will stop.' If that sentence is true, you already know where the pain is.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Projects deliver unique outputs and end. Programs coordinate related work for benefits you cannot get in isolation. Portfolios select and balance investments against strategy. Do not steal jobs between altitudes.",
          "Next: program management — interdependencies, benefits, and the governance that stops related projects from colliding in the night.",
        ],
      },
    ],
  },

  "program-management": {
    intro:
      "A program is not a very large project with a loftier title. It is the coordination layer that makes related projects produce a benefit the organisation could not buy one project at a time.",
    sections: [
      {
        id: "why-programs-exist",
        title: "Why you bother with a program at all",
        body: [
          "You create a program when the value lives in the relationships: a shared customer journey across three products, a regulatory outcome that needs technology, process, and training to land together, or a capability that only exists when several outputs interlock. If the projects do not share a benefit or a critical dependency, you do not have a program. You have a folder.",
          "The program manager's scarce resource is attention at the seams. Shared vendors, shared architects, a launch window that only opens once, a benefit measure that no single project owns. Dive into every workstream's backlog and you will become an expensive status clerk. Stay only at strategy and the seams will tear without you noticing.",
          "Peel Boss test: if your weekly meeting is a parade of project RAGs with no decision about sequence, scope trade-offs, or benefit risk, you are running a status salon. A program board exists to resolve conflicts the projects cannot resolve alone.",
        ],
      },
      {
        id: "dependencies-and-pacing",
        title: "Dependencies, pacing, and the shared constraint",
        body: [
          "Map the dependencies that actually hurt: finish-to-start across projects, shared specialist capacity, a common data model, a communications blackout period. Then pace the work so project A does not finish a component project B cannot consume for four months. Inventory without a receiver is waste with a ribbon on it.",
          "Resource fights are program work. Two projects cannot both have the only integration lead in May. The project managers will each make a local case. Your job is to decide — or take a clear option to the sponsor — against the benefit, not against who emails more often.",
          "Change at program level is different from project change. A change in project A that looks small can move the benefit date for the whole program. Route those through program governance. Let projects keep local change control for things that do not move the shared outcome. One change board for every story is how you recreate a waterfall inside an agile costume.",
        ],
      },
      {
        id: "benefits-and-governance",
        title: "Benefits ownership and governance that can say no",
        body: [
          "Name the benefit owner who will still be there after the last project closes. Name the measures. Name the operational process that will produce the numbers. If the program manager is the only person who can explain the benefit, the benefit will retire when they do.",
          "Governance should be thin and decisive: a cadence that matches the risk, a membership that can actually unlock money and people, and a habit of killing or re-scoping a project that no longer serves the program. Adding a third reporting layer because the first two were ignored is not maturity. It is volume.",
          "Close projects on purpose inside a live program. A finished project that never hands over knowledge becomes a ghost dependency. A program that never closes becomes a standing organisation that has forgotten it was temporary. Both are common. Neither is impressive.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Programs exist for shared benefits and painful seams. Pace dependencies, resolve resource conflicts against the outcome, and keep governance able to stop work. Do not become the mega-PM of every task.",
          "Next: portfolio selection — how the organisation chooses which programs and projects deserve money, and which ones are optimism with a slide.",
        ],
      },
    ],
  },

  "portfolio-selection": {
    intro:
      "Portfolio selection is the adult conversation: given strategy, capacity, and risk appetite, which work do we start, continue, defer, or kill? Everything-is-a-priority is not a portfolio. It is a queue with better fonts.",
    sections: [
      {
        id: "criteria-before-charisma",
        title: "Criteria before charisma",
        body: [
          "Write the selection criteria before the first passionate sponsor enters the room. Strategic fit, expected benefit, cost, risk, capacity demand, compliance must-do, and time sensitivity are a typical set. Weight them in daylight. If you invent the scoring after you know who is in the room, you have built a justification engine.",
          "Must-do compliance work still belongs in the model. It consumes the same scarce people. Pretending a regulatory project is 'outside the portfolio' is how you over-commit the architects and then act shocked when the strategic bet slips.",
          "A score is a decision aid, not a priest. Two initiatives can tie. Then you talk about sequencing, option value, and political reality — out loud. A model that always 'proves' the CEO's favourite is not analysis. It is theatre with a spreadsheet.",
        ],
      },
      {
        id: "capacity-and-balance",
        title: "Capacity truth and a balanced mix",
        body: [
          "The constraint is almost never money in the abstract. It is the same twelve people everyone wants in Q3. A portfolio that approves work without a capacity view is signing fictional start dates. Show the load. If the integration guild is at 140%, the next approval is a decision to delay something else — or to buy capacity, not to 'go faster.'",
          "Balance the mix: short and long horizon, run and change, high risk / high option value versus dull-but-necessary, customer-facing versus plumbing. A portfolio of only shiny bets starves the platform. A portfolio of only plumbing starves the strategy. Balance is a design choice, not an accident of who shouted.",
          "Dependencies across the portfolio matter. Three programs that all assume the same data platform in the same quarter are not three strategies. They are one collision. Selection includes sequence. 'Yes, later' is a legitimate portfolio decision. It just does not feel like a ribbon-cutting.",
        ],
      },
      {
        id: "stop-and-continue",
        title: "Start, stop, continue — the verbs that prove you have a portfolio",
        body: [
          "Selection is not an annual ceremony. It is a rhythm. New information arrives: a benefit assumption dies, a market moves, a team is stuck. The portfolio should be able to stop or reshape work without treating it as a personal failure. Sunk cost is not a strategy.",
          "Continuing everything to 'keep people busy' is how you fund ghosts. Idle capacity is cheaper than a project that cannot produce a benefit. Redeploy the people. The organisation will invent a reason to keep the ghost if you do not offer a dignified stop.",
          "Document the decision: why this, why not that, what you will review, and what would make you stop. When a sponsor asks six months later why their idea is on the shelf, 'we discussed it in March' is not an answer. A one-page decision record is.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Select with published criteria, capacity truth, and a balanced mix. Must-do work still consumes the same people. The portfolio's rare skill is stopping, not starting.",
          "Next: benefits realisation — the part that continues after go-live, when the project team has gone to the next kick-off with the good biscuits.",
        ],
      },
    ],
  },

  "benefits-realisation": {
    intro:
      "Go-live is an output. A benefit is a change in the business that someone can measure after the balloons are in the bin. If you close the project and walk away, you have delivered hope.",
    sections: [
      {
        id: "output-is-not-outcome",
        title: "Output is not outcome",
        body: [
          "A new platform is an output. Fewer hours spent on rework, a shorter cycle time, a revenue change, a risk reduced — those are outcomes. Benefits realisation is the discipline of defining those outcomes early, assigning an owner who outlives the project, and tracking them until they appear or until you admit they will not.",
          "Write benefits as cause → change → measure. 'Improve customer experience' is a mood. 'Reduce average handle time from 9 minutes to 6 within two quarters of go-live, owned by the contact-centre director' is a benefit you can manage. The second version tells you what to instrument and who to bother when the number does not move.",
          "The PM often facilitates the definition. The owner is almost never the PM in year two. If you cannot name the operational leader, you do not have a benefit. You have a slide. Intel Academy standard: a slide is not a receiver.",
        ],
      },
      {
        id: "through-handover",
        title: "Design the handover or design a cliff",
        body: [
          "Benefits die at handover when operations inherit a system with no process change, no incentive change, and no time to learn. Build the realisation plan into the program or project from the start: training, role design, data for the measure, and a hypercare window with a named owner on both sides.",
          "Baseline the measure before you change anything. 'We think it was bad' is not a baseline. If you cannot measure today, part of the work is to install the measurement. Shipping without a baseline is how everyone argues about success using anecdotes and their favourite customer.",
          "Some benefits are delayed by design — a regulatory benefit that appears at the next audit, a cost-out that appears when a contract ends. Put those on a timeline with review dates. A benefits register that only lists go-live week is a launch checklist wearing a serious name.",
        ],
      },
      {
        id: "when-benefits-slip",
        title: "When the number does not move",
        body: [
          "If the output landed and the benefit did not, you have a diagnosis problem, not a cheerleading problem. Was the benefit assumption wrong? Did users not adopt? Did a dependency in another program fail? Is the measure dirty? Each answer implies a different next action: change the process, fund adoption, re-sequence, or stop claiming the benefit.",
          "Do not keep reporting 'on track for benefits' because the project RAG was green. That is how portfolios fund the next cousin of a failed idea. Honesty here is a Business Environment skill and a portfolio skill. It is also basic professionalism.",
          "Disbenefits exist. A faster process that burns out staff, a cost-out that destroys service, a feature that creates a new risk. Log them. A realisation plan that only admits upside is a brochure. Brochures do not help a steerco decide.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Define benefits as measurable changes with owners who outlive the project. Baseline, hand over, and keep reviewing after go-live. A green delivery RAG is not a realised benefit.",
          "Next: strategic alignment — how portfolio, program, and project stay connected to what the organisation said it was trying to do.",
        ],
      },
    ],
  },

  "strategic-alignment": {
    intro:
      "Strategy that never touches a portfolio decision is a PDF. Alignment is the ongoing work of funding what the strategy claims to want — and starving what it does not.",
    sections: [
      {
        id: "line-of-sight",
        title: "Line of sight, not a slogan on the charter",
        body: [
          "Every initiative should be able to complete the sentence: we are doing this so that strategic objective X moves, as shown by measure Y, owned by Z. If the sentence requires a poet, the work is not aligned. It is adjacent and hopeful.",
          "Alignment is not a keyword-stuffing exercise in the business case. 'Supports digital excellence' can be said of a printer refresh. Ask for the mechanism. Which customer journey, which cost line, which risk, which capability? Then ask what you would stop if this is truly the priority.",
          "Strategies change. A portfolio that cannot re-align is loyal to last year's offsite. When the objective moves, run the selection verbs again. Keeping the old mix because the teams are mid-flight is sometimes right — switching costs are real — and sometimes cowardice. Make the switching cost explicit and decide.",
        ],
      },
      {
        id: "translation-down",
        title: "Translate down without playing telephone",
        body: [
          "Strategy becomes portfolio themes, themes become programs and stand-alone projects, projects become outputs, outputs become operational change, change becomes benefits. Each translation loses information. Your job at each altitude is to keep the measure and the owner intact, not to invent a new purpose that is easier to status-report.",
          "Project charters that copy the corporate mission statement and then list a local IT output are how alignment becomes fiction. Write the local contribution. 'This project retires system A so that program B can offer a single client view, which is how we reduce onboarding time — the measure on the strategy map.' Specific or silent. Pick one.",
          "PMO reporting should show the map: objective → investment → status of benefits, not only a wall of project RAGs. A wall of green projects that do not move a strategic measure is a well-run distraction. Peel Boss will not clap for the wall.",
        ],
      },
      {
        id: "misalignment-is-a-decision",
        title: "Misalignment is a decision, not a surprise",
        body: [
          "Pet projects, shadow IT, and 'just a small team in marketing' are portfolio leaks. If they consume the same scarce specialists, they are in the portfolio whether the register admits it or not. Bring them into the light or admit you do not have a portfolio.",
          "Sometimes the organisation will fund misaligned work on purpose — a political promise, a founder hobby, a customer exception. Fine. Label it. Hidden misalignment is what wrecks capacity models. Visible exceptions can be managed. Invisible ones become the reason the 'strategic' program is always late.",
          "Your next action when you spot a leak is not a rant in the Slack channel. It is a short paper: capacity taken, benefit claimed, strategic objective affected, recommendation to stop, absorb, or relabel. Then a decision. Alignment without a decision rights is just commentary.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Keep a line of sight from objective to measure to owner to investment. Translate without inventing a new purpose. Treat leaks as portfolio decisions. Strategy is what you fund and what you stop.",
          "You now have the three altitudes — project, program, portfolio — plus benefits after go-live and alignment as a living practice. Use it on one real investment conversation this month. The next courses take the same honesty into enterprise agile change and harder scenario work.",
        ],
      },
    ],
  },

  "transformation-strategy": {
    intro:
      "Enterprise agile transformations do not stall because the organisation forgot to buy a framework logo. They stall on funding, organisational design, and culture — the boring machinery that decides whether teams can actually change how work is chosen and paid for.",
    sections: [
      {
        id: "why-they-stall",
        title: "Why they stall (it is not the missing scaled-agile badge)",
        body: [
          "The usual autopsy is wrong. Leadership bought training, stood up tribes or release trains, and hired coaches. Six months later, the annual budget still locks scope in January, architecture still sits in a committee that meets monthly, and middle managers are still rewarded for utilisation and local headcount. The logo was never the constraint.",
          "Three stall points dominate. Funding: project-shaped money that punishes learning. Organisational design: silos that own fragments of a customer journey. Culture: fear of visible failure, so every increment is a performance. Miss those and you have agile theatre — stand-ups in a waterfall body.",
          "Start with the outcome you want in the business, not with the operating model you admired at a conference. Faster cycle time to a paying customer? Fewer handoffs in a value stream? The ability to stop funding a bad bet in six weeks instead of sixteen months? Write that. Then ask which of funding, structure, or behaviour makes it impossible today.",
        ],
      },
      {
        id: "how-to-start",
        title: "How to start without boiling the ocean",
        body: [
          "Pick a thin slice of the organisation where the pain is real and the sponsor can actually move money and reporting lines. A 'transformation of everything by December' is a novel. A value stream with a named owner, a funding experiment, and permission to change the measures is a start.",
          "Sequence the constraints. If funding still requires a 40-page business case for every slice of learning, coaching the stand-up will not save you. If the org chart still splits 'the people who talk to customers' from 'the people who build,' your squads will re-create the silo in Slack. Do not start with the easiest ritual. Start with the constraint that makes the rituals fake.",
          "Be honest about what will not change yet. A regulated core may stay predictive while a digital channel iterates. That is a hybrid strategy, not a failure of nerve. Announcing 'we are now Agile' while the core stays untouched is how you create two cultures and one shared budget argument.",
        ],
      },
      {
        id: "coalition-not-a-hero",
        title: "A coalition, not a hero coach",
        body: [
          "Transformations led only by a PMO or only by a coaching vendor die when the vendor leaves. You need a sponsor who can change incentives, a finance partner who can change how money is released, and operational leaders who will own the new measures. The agile coach is necessary and not sufficient. Treat them as such.",
          "Write a transformation strategy as decisions, not as a journey metaphor. What we will stop funding. What we will measure instead of utilisation. Which design authority we will retire. Which value streams we will stand up first. Which policies we will rewrite. A journey map with no decisions is a mural.",
          "Expect the middle of the organisation to feel attacked. Their job was to hold the old system together. If you do not give them a role in the new one — product ownership, value-stream leadership, coaching — they will wait you out. Waiting you out is a rational strategy. Plan for it.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Stall points are funding, organisational design, and culture — not a missing framework brand. Start with a business outcome, a thin slice, and the constraint that makes rituals fake. Build a coalition that can move money and incentives.",
          "Next: operating models — structuring around value streams rather than around the silos that made the last transformation a re-org with stand-ups.",
        ],
      },
    ],
  },

  "operating-models": {
    intro:
      "An operating model is how work, money, and decisions flow. If you keep the silos and add squads, you have renamed the org chart. The customer will not notice the rename.",
    sections: [
      {
        id: "value-streams-not-silos",
        title: "Value streams, not ceremonial squads",
        body: [
          "A value stream is the end-to-end path from a customer need to a customer result — including the handoffs, queues, and approval lakes that currently make it slow. Organising around that path means a standing team (or a small set of teams) can move a slice of value without raising a project to cross four departments.",
          "Silos optimise local efficiency: a design queue, a build queue, a test queue, an operations queue. Each queue can look busy and healthy while the customer waits. Utilisation is a local trophy. Flow is the system prize. If your model still funds and manages the queues separately, the squads will spend their lives in alignment meetings.",
          "You do not need to redraw the entire company on a Friday. Identify one stream, name an owner who can see the whole path, and give them enough of the skills inside the boundary that 'waiting on another department' becomes the exception. The rest of the organisation can remain ugly for a while. Ugly and honest beats pretty and fictional.",
        ],
      },
      {
        id: "product-vs-project",
        title: "Product funding versus project packaging",
        body: [
          "Project packaging is: assemble strangers, deliver a scope, disband, hand a system to people who were not in the room. It fits unique, finite change. It is a poor default for a digital service that must evolve weekly. Product-shaped teams persist, own outcomes, and take work from a backlog ordered by value.",
          "Hybrid organisations will have both. A plant move is a project. The customer portal is a product. The operating model should say which work is which, and stop forcing product teams through a project stage-gate designed for capital construction. That gate is how you pay an agility tax and still miss the season.",
          "Decision rights sit in the model, not in a RACI nobody opens. Who can stop a release? Who can change the backlog order? Who can spend from the value-stream envelope? If those answers are 'a committee that meets monthly,' you have designed delay. If they are 'whoever shouted,' you have designed chaos. Write them at the seam.",
        ],
      },
      {
        id: "governance-that-matches",
        title: "Governance that matches the cadence",
        body: [
          "Predictive work wants baselines, change control, and stage gates that match irreversible cost. Adaptive work wants lightweight guardrails: architecture advice, security as a pipeline, a definition of done that includes compliance evidence, and a review that can redirect next increment. One governance flavour for both is how one of them suffocates.",
          "Shared platforms need a model too. If every value stream rebuilds identity, payments, and data, you have funded a museum of slightly different wheels. A platform team with a service-level promise and an internal customer is an operating-model choice. A central team that is only a ticket queue is the old silo with a new Jira project.",
          "Do not confuse a re-org with a model. Moving boxes on a slide does not change how money is requested or how success is measured. If those stay project-shaped, the boxes will drift back. We will take funding next, because money is how models become real or remain posters.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Organise around the customer path where you can, keep product teams persistent where the work is ongoing, and match governance to the type of work. A re-org without new decision rights is interior design.",
          "Next: agile funding — the annual budget habit that quietly cancels the operating model you just drew.",
        ],
      },
    ],
  },

  "agile-funding": {
    intro:
      "You cannot run adaptive delivery on a funding process that demands a fixed scope, a fixed date, and a heroic business case every January. The money is the method. Everything else is costume.",
    sections: [
      {
        id: "the-annual-trap",
        title: "The annual project trap",
        body: [
          "Classic funding asks for certainty you do not have: a detailed scope, a date, and a return, signed before anyone has built a slice. Teams then perform confidence. When reality arrives, they hide variance or run a change-control marathon. That process trains everyone to lie a little in order to get permission to learn.",
          "Agile funding releases money in increments against outcomes and capacity, not against a frozen work-breakdown of guesses. You fund a value stream or a product team for a horizon — a quarter is common — and you decide to continue, pivot, or stop using evidence from the last increment. The business case becomes thinner and more honest: hypothesis, measure, capacity, risks, and what would make you stop.",
          "Finance is not the enemy. Finance is protecting the organisation from unstructured spend. Bring them a control they can live with: an envelope, a review cadence, a kill criterion, and transparency of actuals. 'Trust us, we are Agile' is not a control. It is a request to be left alone, and they will not.",
        ],
      },
      {
        id: "envelopes-and-stops",
        title: "Envelopes, options, and the right to stop",
        body: [
          "Capacity funding says: these people, this cost, this outcome theme. New work competes inside the envelope. That forces the product conversation the annual list avoids — what we will not do. If everything still enters as a new project with new money, you have not changed funding. You have added a vocabulary.",
          "Stage funding for uncertain bets: a small envelope to test the riskiest assumption, a larger one if the measure moves, nothing if it does not. This is how you stop paying for a zombie for eighteen months because the original case was 'strategic.' Strategic is not a synonym for unkillable.",
          "Fixed-date, fixed-scope commitments still exist — contracts, regulations, events. Fund those predictively and say so. Hybrid funding is allowed. What is not allowed is pretending a discovery team has a predictive commitment so the portfolio pack looks uniform. Uniform packs are how surprises get a nice cover sheet.",
        ],
      },
      {
        id: "incentives-follow-money",
        title: "Incentives follow the money, not the poster",
        body: [
          "If leaders are still rewarded for spending the budget and shipping the original scope, they will fight incremental funding even while attending the agile town hall. Change the scorecard or accept the theatre. You cannot coach your way around a bonus scheme.",
          "Vendor contracts shaped as fixed scope will pull the work back to predictive no matter what the internal teams call themselves. If you need adaptive work from a supplier, buy capacity and outcomes, not a specification written before the learning. Otherwise you have outsourced the waterfall and kept the stand-up.",
          "Your next action as a transformation lead is often a conversation with Finance and a sponsor, not another team-level workshop. Workshops are cheaper than changing the capital process, which is why organisations buy so many of them. Be expensive in the right room.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Fund capacity and outcomes in increments; keep predictive funding where the commitment is truly fixed. Give Finance a real control. Stop unkillable 'strategic' spend. Money is the method.",
          "Next: culture change — the part no operating-model slide can do for you, and the part that decides whether people use the new permissions they were given.",
        ],
      },
    ],
  },

  "culture-change": {
    intro:
      "Culture is what people do when the coach has left the building. You cannot slide-deck it. You can change the conditions — incentives, safety, leadership behaviour — and wait to see whether the new story is true.",
    sections: [
      {
        id: "behaviour-not-values-posters",
        title: "Behaviour, not a values poster",
        body: [
          "If leaders punish visible failure and reward heroic firefighting, you will get hidden work and late surprises. If they ask for learning, fund small bets, and treat a stopped initiative as information, you will get earlier truth. The poster in the lobby is not a variable in that equation.",
          "Psychological safety is a delivery tool, not a wellness extra. A tester who cannot say 'this is not ready' without career damage will ship the defect and update the RAG to amber with a smile. Your transformation has then purchased speed on the way to an incident.",
          "Middle managers will reproduce the old culture if their only safe move is to protect their silo. Give them a new game: flow, outcomes, coaching, and a career path that does not require a large personal empire. If the only promotion path is 'more people reporting to me,' you have funded empire-building and called it agility.",
        ],
      },
      {
        id: "rituals-that-lie",
        title: "Rituals that lie and rituals that tell the truth",
        body: [
          "A stand-up used as a status extraction for management is the old culture in fifteen minutes. A retrospective that cannot name a manager-shaped impediment is a gratitude circle. A sprint review that cannot change the backlog is a demo for applause. Keep the names if you must. Change the power in the room or admit you kept the culture.",
          "Leaders belong in reviews as customers of the increment, not as distant recipients of a pack. If they only appear when something is red, they have trained the system to keep things amber. Show up when it is working. Ask what we learned. Ask what we will stop. That is culture work that does not require a workshop wristband.",
          "Do not confuse 'we sent everyone on a two-day course' with changed behaviour. Training can give language. Language without new decision rights is how people become fluent in a framework they are not allowed to use. Fluency without permission is a special kind of cynicism.",
        ],
      },
      {
        id: "ethics-and-honesty",
        title: "Honesty as a cultural practice",
        body: [
          "Transformations create winners and losers. Be honest about role changes. A 're-skilling journey' that is actually a redundancy plan will be smelled immediately and will poison every later message. Fairness and respect are not optional extras in a change programme. They are how you keep any remaining trust.",
          "Reporting culture is culture. If the transformation office needs a hockey-stick adoption chart for the next board, teams will invent maturity scores. Refuse the vanity. Ask for one or two outcome measures and a list of impediments leadership must move. That ask is a cultural intervention.",
          "You cannot make people 'have an agile mindset' as a KPI. You can stop punishing the behaviours the mindset requires. Start there. The mindset follows the conditions, not the all-hands speech.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Culture is incentives, safety, and what leaders do when the increment is ugly. Change the conditions; do not mandate a mindset. Rituals without new power are the old organisation on a shorter cadence.",
          "Next: measuring transformation — outcomes that show whether anything real moved, and the vanity metrics that only show the theatre was well attended.",
        ],
      },
    ],
  },

  "measuring-transformation": {
    intro:
      "Story points completed is a measure of how busy the theatre company was, not whether the play was any good. Transformation needs outcome measures. Activity metrics are how you decorate a stall.",
    sections: [
      {
        id: "outcomes-not-theatre",
        title: "Outcomes, not agile theatre",
        body: [
          "Vanity set: number of teams 'now Agile,' story points burned, ceremony attendance, training seats filled, a maturity score someone invented in a spreadsheet. Those can rise while customers wait longer, defects escape, and the budget process remains annual and fictional.",
          "Outcome set, pick a few: lead time from idea to customer-usable increment, change fail rate, time to restore, customer outcome measures you already claim to care about, employee retention in the affected streams, and the time it takes to make a funding decision. If those are flat, the transformation is a costume.",
          "Do not drown the board in twenty new charts. Two or three outcome measures plus a short list of systemic impediments is enough. A transformation dashboard that needs a narrator and a legend the size of a novella is not transparency. It is camouflage.",
        ],
      },
      {
        id: "baselines-and-honesty",
        title: "Baseline before you celebrate",
        body: [
          "Measure the old system first. If you do not know last quarter's lead time, you cannot claim this quarter improved it. 'It feels faster' is how coaches keep contracts and how cynics stockpile jokes. Instrument the path. Ugly data is still data.",
          "Separate team-level flow metrics from enterprise transformation metrics. A team can improve its cycle time inside a system that still takes nine months to fund the next slice. Both views are useful. Only one of them tells you whether the company changed. Do not let local improvement launder a global stall.",
          "Targets that punish honesty will recreate the old RAG fiction. If amber is a career event, everything will be green until it is a press incident. Prefer ranges, trends, and narrative about what you are trying next. Peel Boss does not need a fake 17% agility uplift. Peel Boss needs to know whether the constraint moved.",
        ],
      },
      {
        id: "what-to-stop-reporting",
        title: "What to stop reporting — and what to do with the truth",
        body: [
          "Stop reporting transformation progress as a percentage complete of a Gantt called 'Agile Journey.' A culture and a funding model are not a tunnel you bore to 100%. Report decisions made: envelopes shifted, gates retired, value streams named, incentives rewritten. Decisions are the increment of a transformation.",
          "When the measures say nothing moved, the next action is not a louder town hall. Return to the stall points: funding, design, culture. Measure the constraint. If Finance still needs a predictive case for every slice, that cycle time is your metric. If a silo still owns a mandatory queue, that wait time is your metric.",
          "Close the loop with the portfolio. A transformation that cannot stop a workstream that contradicts the new model is not a transformation. It is a parallel universe with a Slack channel. Use the selection verbs. Then keep measuring. This course does not end with a certificate that the organisation is now Agile. It ends with a habit of telling the truth about whether value got faster, cheaper, or more honest.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Measure customer and system outcomes, not ceremony theatre. Baseline first. Report decisions and constraint movement. Story points are not transformation.",
          "You now have a working view of why enterprise agile change stalls and how to start, fund, design, and measure without buying another logo. Use one outcome measure and one constraint on a live change. Advanced scenario work is next if you want to pressure-test the judgement.",
        ],
      },
    ],
  },

  "complex-scenarios": {
    intro:
      "Complex stems are not trying to trick you into a trivia fail. They stack constraints — people, process, environment — and ask whether you can find the best next action without setting fire to the wrong layer.",
    sections: [
      {
        id: "read-the-stem",
        title: "Read the stem like a crime scene",
        body: [
          "Underline what has already been tried. Underline the constraint that cannot move. Underline who has authority. Underline the domain signals: a fight, a missing baseline, a regulator, a benefit owner who has vanished. Most wrong answers ignore one of those underlines and look decisive anyway.",
          "Multi-factor does not mean 'do everything in one step.' It means the situation has more than one true thing in it. Your job is to pick the next action that unlocks the rest, not the action that would be correct three steps later. Escalating past a conversation you have not had is a common way to look senior and be wrong.",
          "Time pressure in the stem is information, not a command to skip ethics or skip the people involved. 'The sponsor wants an answer by Friday' still allows you to gather the one fact that changes the answer. It does not allow you to invent a green RAG because Friday is awkward.",
        ],
      },
      {
        id: "domain-first",
        title: "Domain first, framework second",
        body: [
          "Ask which task family is on fire. If two technical leads will not speak, People is alight even if the schedule is also slipping. Fixing only the Gantt teaches the organisation that conflict is a scheduling issue. If the method no longer fits the uncertainty, Process — specifically tailoring — is alight even if everyone is being very polite.",
          "When Business Environment moves — a law, a merger, a market shock — do not treat it as a team-motivation problem. Reassess compliance and benefits with the people who own those words. A retrospective will not repeal a regulation.",
          "Framework names in the options are bait. 'Implement Scrum,' 'create a WBS,' 'run a Monte Carlo' can all be right in some universe. In this universe, the stem tells you whether you need a conversation, a change request, or a compliance review. Pick the verb that matches the fire.",
        ],
      },
      {
        id: "work-a-stack",
        title: "Work a stack without drowning",
        body: [
          "Example shape: a hybrid programme, a vendor late, two stakeholders in a status war, and a benefit date tied to a marketing campaign. Do not write a novel. Sequence: confirm the vendor fact (Process / procurement), stop the status war with a facilitated fact-pack (People), then take the campaign constraint to the sponsor with options (Business Environment / benefits). The best next action is usually the first of those you have not done.",
          "Write options as decisions, not as moods. 'Accept a two-week slip and move the campaign,' 'descope the vendor slice and ship a thinner offer,' 'pay for crash capacity.' Three options and a recommendation beat a paragraph about how complex it all is. Complexity is not a deliverable.",
          "You will practise hybrid seams, ethical collisions, and tailoring in the next lessons. The habit to take with you is mechanical: stem, domain, tried-already, authority, next verb. It is not glamorous. It is how you stop answering the question you wish you had been asked.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Complex scenarios stack domains. Find what has been tried, what cannot move, and who can act. Choose the next verb, not the whole novel. Framework names are optional; the task family is not.",
          "Next: hybrid delivery — designing the seam between predictive and adaptive work when both are honestly required.",
        ],
      },
    ],
  },

  "hybrid-delivery": {
    intro:
      "Hybrid delivery is a designed operating choice: which work is baselined and changed formally, which work learns in increments, and how those two systems meet without lying to each other.",
    sections: [
      {
        id: "name-the-seams",
        title: "Name the seams before you name the ceremonies",
        body: [
          "Typical honest hybrids: a fixed regulatory dossier with an adaptive product behind it; a predictive vendor lead-time with adaptive integration; a fixed launch event with a backlog that can thin. Write the seam in one sentence. If you cannot, you do not have a hybrid. You have two religions sharing a budget.",
          "At the seam, define the artefacts both sides will respect. Perhaps the adaptive team offers a forecast range and a committed increment; the predictive side offers a change-controlled interface and a date. If each side only produces artefacts for its own church, the first delay will become a blame festival.",
          "Governance must be bilingual. A monthly steerco can still exist. It should not demand story-level change requests, and it should not pretend a construction milestone can 'pivot' because a coach said so. Ask for decisions at the right granularity. Everything else is tourism.",
        ],
      },
      {
        id: "planning-both-clocks",
        title: "Two clocks, one outcome",
        body: [
          "Predictive work runs on a baseline clock: critical path, float, earned value if you are in that world. Adaptive work runs on a flow clock: increment, review, reorder. The program or project manager's job is to translate. 'The interface is late two weeks on the vendor path; the backlog must drop the dependent slice or we miss the campaign.' That sentence is hybrid management. Two status dialects with no translation is how executives hear noise.",
          "Integration events are sacred. Joint reviews, joint risk, a single definition of what 'ready for the other side' means. Do not let the adaptive team say 'done' when the predictive side cannot consume the output. Done at the seam is done for the other clock, not done for your board.",
          "Risk belongs on both clocks. A vendor slip is a predictive risk with a date trigger. A discovery that the user does not want the feature is an adaptive risk that should stop spend. Putting both only on the Gantt, or only on the board, hides one of them. Intel Academy note: hidden risk does not become smaller because your tool cannot display it.",
        ],
      },
      {
        id: "failure-modes",
        title: "The usual ways hybrid becomes a lie",
        body: [
          "The Gantt is the real plan and the sprint is decoration. Or the opposite: the backlog is the real plan and the contractual milestones are treated as optional until Legal arrives. Both are accidental hybrids. Someone has to say which commitment is binding.",
          "Staffing a hybrid with people who have only ever done one side, then mocking the other side in Slack, is a People-domain failure with Process symptoms. Pair them. Translate. If you need a specialist to run the compliance clock, hire one. Do not ask a Scrum Master to invent a dossier by instinct.",
          "When the stem offers 'pick one method for the whole programme,' check whether the work is actually uniform. If it is not, the best next action is to tailor by work type and explain the seam to the sponsor — not to force a purity that will be smuggled around by Tuesday.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Design the seam, translate the two clocks, and define done for the other side. Accidental hybrid is two methods in a trench coat. Deliberate hybrid is a sentence the sponsor can repeat.",
          "Next: stakeholder dilemmas — competing interests, ethics, and the next action when every option disappoints someone with a title.",
        ],
      },
    ],
  },

  "stakeholder-dilemmas": {
    intro:
      "A dilemma is not a communication preference. It is two legitimate interests that cannot both be fully met — or one legitimate interest and one unethical request wearing a smile.",
    sections: [
      {
        id: "compete-in-daylight",
        title: "Put the competition in daylight",
        body: [
          "Marketing wants the date. Engineering wants the defect fixed. Finance wants the spend stopped. Operations wants a handover they can staff. If you keep those conversations in separate rooms, you become the translator who accidentally picks a winner. Put the interests on one page: what each party needs, what they fear, and the constraint that is actually locked.",
          "Interests are not positions. 'We must have all the features' may be 'we already sold it' or 'we are scared of looking incomplete at a conference.' The second version has options. The first version is a wall. Your People-domain task is to get to the interest before you run a Process weapon.",
          "Do not fake consensus. If the disagreement is the finding, record both views and take a decision to the person with authority. Fake alignment in the minutes is how dilemmas return as incidents. Peel Boss would rather have an honest split than a warm lie.",
        ],
      },
      {
        id: "ethics-when-asked-to-bend",
        title: "Ethics when someone asks you to bend",
        body: [
          "The Code's four values — responsibility, respect, fairness, honesty — are not decoration for a study group. They are vetoes. Hide a known safety or security defect: honesty and responsibility fail. Steer a procurement to a friend: fairness fails. Humiliate a junior to satisfy a sponsor's temper: respect fails.",
          "The best next action is usually to refuse the unethical request, state the fact, and use the formal channel — compliance, sponsor, policy — not to 'manage the stakeholder' by becoming their accomplice. You can still be useful: offer a lawful option, a phased message, a date you can defend. Usefulness is not the same as compliance with a bad ask.",
          "Conflicts of interest should be declared early, when they are boring. Declaring after the decision looks like you were caught. If you are the conflict, step back from the decision. That is not drama. It is hygiene.",
        ],
      },
      {
        id: "power-and-the-quiet-ones",
        title: "Power, the quiet ones, and the next action",
        body: [
          "High-power stakeholders can create dilemmas by ignoring the quiet ones who will operate the result. Your job includes bringing operations, compliance, or the end user into the room before the decision, not after the demo. A dilemma discovered at go-live is just a late identification failure.",
          "When two high-power people demand opposite things, do not pick a favourite in private. Facilitate a decision with criteria — benefit, risk, constraint — and a single owner. If they will not decide, escalate the deadlock as the issue. Sitting on it so you remain 'liked' is how you become the owner of both failures.",
          "Document the decision and the dissent. When the loser of the dilemma resurfaces in a month, you need more than memory. A one-line rationale in the log is professionalism. 'We all agreed' when you did not is how trust dies in the People domain and how audits fail in Business Environment.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Surface interests, refuse unethical asks, declare conflicts, and take deadlocks to authority with options. Consensus theatre is not stakeholder management.",
          "Next: tailoring the approach — choosing a method for the context you actually have, not the context on last year's conference badge.",
        ],
      },
    ],
  },

  "tailoring-approach": {
    intro:
      "Tailoring is a decision: given uncertainty, risk, regulation, team skill, and stakeholder need, which practices do we use, and which do we leave on the shelf? It is not a guilty compromise. It is the job.",
    sections: [
      {
        id: "context-variables",
        title: "Read the context before you pick a brand",
        body: [
          "Useful variables: how much you do not know, how expensive late change is, how regulated the evidence trail is, how stable the team is, how many vendors sit on the critical path, and how much the sponsor can tolerate a range instead of a date. Those variables point to practices. They do not point to a fandom.",
          "High uncertainty and cheap change: small increments, frequent review, a backlog, a definition of done. High cost of change and stable requirements: more design up front, a baseline, formal change. High regulation: build the evidence into whichever clock you use. Low team skill in a method: do not pick the method that requires fluency you do not have without a coaching plan.",
          "A sponsor who 'wants Agile' and a contract that is fixed-scope fixed-price is a tailoring problem, not a motivational one. Either change the contract, or tailor toward predictive control and use adaptive practices only where they do not breach the commitment. Pretending both are fully true is how you get a dispute and a retro.",
        ],
      },
      {
        id: "practices-not-packages",
        title: "Practices, not package deals",
        body: [
          "You can take a daily coordination huddle without taking a two-week sprint. You can take a change board without taking a 400-line Gantt. You can take a product backlog without retiring a milestone that Legal requires. Tailoring is assembling a system that fits. It is not 'a bit of everything so nobody is upset.'",
          "Write the tailoring down: what we are doing, what we are not, why, and when we will revisit. A team that cannot explain its own method will drift back to the loudest person's habit. A sponsor who cannot hear the 'why' will impose theirs in week three.",
          "Re-tailor when the context changes. A discovery that has found a stable design can shift toward more predictive planning for the build-out. A predictive plan that has hit a wall of unknown interfaces can shift a slice to spikes and increments. Tailoring is not a one-time ceremony at kickoff. It is Process-domain maintenance.",
        ],
      },
      {
        id: "what-you-must-not-tailor-away",
        title: "What you must not tailor away",
        body: [
          "Ethics, safety, and required compliance evidence are not optional practices. You can change how you produce the evidence. You cannot change whether it exists because 'we are being lightweight.' Lightweight that skips the regulator is just late heavyweight with legal fees.",
          "You also should not tailor away a way to see status, a way to change the plan, a way to own risks, and a way to close. Those Process tasks can be thin. They cannot be absent. A sticky note on a wall is a tool. The absence of any tool is a hope.",
          "When a scenario asks you to choose a method, the best next action is often to assess the variables with the team and sponsor, then propose a tailored approach — not to impose the method you passed a quiz on. We will work that judgement in short scenarios next. No score. No pass promise. Just the habit of matching method to context.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Tailor from context variables, assemble practices on purpose, write the choice down, and re-tailor when the world changes. Do not tailor away ethics, safety, or the minimum control loops.",
          "Next: a final mock review — a handful of short scenarios with a recommended next action and a rationale. It is practice, not a replica exam.",
        ],
      },
    ],
  },

  "final-mock-review": {
    intro:
      "Five short situations. For each, a recommended next action and why — not a timed paper, not a score, and not a promise about any exam. Use them to test the habit: domain, constraint, tried-already, next verb.",
    sections: [
      {
        id: "scenario-hybrid-date",
        title: "Scenario 1 — The date is locked, the backlog is not",
        body: [
          "A sponsor has committed a launch date to the market. The product team works in two-week increments and is still discovering scope. A PMO lead wants the team to produce a full predictive schedule 'so we can be sure.' The contract with a hardware vendor is already fixed. Engineering says a complete task list would be fiction.",
          "Recommended next action: tailor on purpose. Treat the date and the vendor interface as predictive constraints. Order the product backlog by value so the thinnest viable offer can hit the date. Take the scope-versus-date trade-off to the sponsor in one page. Do not invent a detailed schedule you already know is false, and do not pretend the date is flexible because the team likes Scrum.",
          "Rationale: this is hybrid delivery and tailoring, not a tribal vote. Honesty about uncertainty is Process. Protecting a public date is Business Environment. Forcing a fake Gantt trains everyone to ignore the plan. A designed seam is the professional move.",
        ],
      },
      {
        id: "scenario-ethics-defect",
        title: "Scenario 2 — Good news, if we omit the defect",
        body: [
          "Two days before a steerco, testing finds a security defect in a feature the sponsor has already previewed to a customer. A senior stakeholder asks you to keep the pack green and 'handle it quietly after.' The team lead agrees it is real. A vendor who bid on the last contract also mentioned they have tickets to an industry event if the relationship 'stays smooth.'",
          "Recommended next action: refuse the omission. Report the defect, the impact, and options (delay the demo'd feature, mitigate, or accept residual risk with an accountable owner). Decline the tickets and declare the conflict if it exists. Do not wait until after the customer conversation to become honest.",
          "Rationale: honesty and responsibility veto the comfortable pack. Fairness vetoes the gift. People-domain courage, Business Environment risk, and a Process change to the release contents. Managing the stakeholder by joining the fiction is how incidents get keynote slots.",
        ],
      },
      {
        id: "scenario-people-conflict",
        title: "Scenario 3 — Two architects, one silent stand-up",
        body: [
          "Two senior architects disagree on the integration pattern. The daily coordination meeting has become a status mumble. The schedule is starting to slip. A delivery manager suggests you pick one architect and reassign the other 'to send a message.' Neither architect has been asked to a facilitated decision session. The sponsor is unaware.",
          "Recommended next action: facilitate a structured decision with criteria (risk, time, reversibility, compliance), record the outcome, and only then update the plan. Do not start with a reassignment. Do not escalate past a conversation you have not run. If they still deadlock, escalate the decision, not the personalities.",
          "Rationale: this is a People-domain conflict task first. The nuclear option is a later move and a poor first one. Process updates follow the decision. Skipping to HR theatre would look decisive and waste two specialists you still need.",
        ],
      },
      {
        id: "scenario-regulation-shift",
        title: "Scenario 4 — The rule moved at noon",
        body: [
          "A regulator publishes guidance that affects your data-retention design. The team is mid-increment. The product owner wants to 'park it on the backlog' so velocity does not dip. Operations will inherit the system in six weeks. Nobody from compliance is in the review.",
          "Recommended next action: pause the affected slice long enough to assess compliance impact with the compliance owner. Re-plan scope, evidence, and the handover. Inform the sponsor of benefit and date impact. Do not bury a legal change under story-point hygiene.",
          "Rationale: Business Environment — compliance and organisational change — outranks a local flow metric. Story points are not the transformation, and they are not the exam of whether you understood the domain. Parking a regulator is how you schedule a finding.",
        ],
      },
      {
        id: "scenario-portfolio-pet",
        title: "Scenario 5 — The pet project and the full guild",
        body: [
          "A well-liked executive wants a new initiative started 'this quarter.' Your portfolio already has the only integration guild at 130% load. The initiative's benefit story is a slogan. A program already in flight will miss its benefit date if the guild is split. Someone suggests you 'just be Agile and parallelise.'",
          "Recommended next action: show the capacity fact, the benefit comparison, and a recommendation to defer or to stop something else. Do not start the pet work on charm. If leadership still wants it, label it an explicit exception and name what will slip. Write the decision down.",
          "Rationale: portfolio selection and strategic alignment. Parallelising a scarce specialist is not agility. It is a wish. Funding without a stop is how transformations and portfolios both become theatre. The next action is a decision, not a kick-off.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "In each case the pattern held: name the domain on fire, honour the hard constraint, refuse the ethical shortcut, and take the next verb — facilitate, disclose, assess, or decide — rather than the theatrical one. Hybrid was a seam, not a slogan. Tailoring was a written choice. Benefits and capacity outranked charm.",
          "This was a reasoning drill, not a replica paper and not a score. There is no pass promise attached to finishing it. Take one live dilemma this week and write the next action and the rationale in four lines. If you can do that without decorating the RAG, you are practising the craft these courses were for.",
        ],
      },
    ],
  },
}
