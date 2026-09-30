import type { LessonBodies } from "./types"

export const pmoExamCommsBodies: LessonBodies = {
  "pmo-types-models": {
    intro:
      "A PMO is not a shared drive with a logo. It is an office with a defined amount of authority over how projects are run — and the fastest way to make it hated is to claim more authority than the organisation will actually grant.",
    sections: [
      {
        id: "the-three-models",
        title: "Supportive, controlling, and directive",
        body: [
          "A supportive PMO is a service. It offers templates, training, coaching, and a place to ask 'has anyone done this before?' Project managers keep the decision rights. Use it when the organisation is new to structured delivery, or when skilled PMs already exist and mainly need a common language. The failure mode is becoming a stationery cupboard: lots of artefacts, no behaviour change.",
          "A controlling PMO sets standards and checks that they are used. It may require a charter, a risk register, a stage gate, or a reporting format — and it has enough teeth to send work back. Use it when leadership wants comparable data across projects and is willing to enforce the minimum. The failure mode is audit theatre: forms completed so the PMO goes away, while the real decisions happen in a side chat.",
          "A directive PMO assigns the project managers and owns delivery method. The projects report into the office, not merely through it. Use it when the work is high-stakes, tightly coupled, or the organisation has learned the hard way that optional process is optional. The failure mode is a bottleneck dressed as governance: every decision queues behind one overworked head of PMO.",
          "These are positions on a spectrum, not job titles. A PMO can be supportive for small internal change and controlling for regulated programmes. Write down where you sit for each class of work. If you cannot say who decides and who merely advises, you do not have a model. You have a meeting series.",
        ],
      },
      {
        id: "match-the-authority",
        title: "Match the model to the authority you actually have",
        body: [
          "Start with the question the org chart is trying not to answer: can this office stop a project, change a method, or only send a helpful email? If the answer is 'email,' do not publish a controlling mandate. You will spend six months writing standards that sponsors ignore, then wonder why 'adoption' is a problem.",
          "Read the culture before you photocopy a target operating model. A professional-services firm with strong partners will reject a directive PMO as a land grab. A bank that has just failed an audit will not be soothed by a supportive office and a smile. The right model is the one leadership will fund and enforce when it is inconvenient.",
          "If you are standing the office up, pick the lightest model that solves the actual pain. Inconsistent reporting? Controlling on the pack, supportive on everything else. Chronic delivery failure on a few strategic bets? Directive on those, leave the rest alone. Empire-building is how PMOs get reorganised out of existence by the next incoming COO.",
        ],
      },
      {
        id: "make-the-offer-explicit",
        title: "Make the offer explicit",
        body: [
          "Write a one-page service catalogue: what the PMO does, what it does not do, who it serves, and what it needs in return. 'We will run the portfolio review and coach new PMs. We will not write your status report for you after week four.' Ambiguity is how every fire becomes the PMO's problem.",
          "Name the customers. A PMO that tries to delight project managers, sponsors, finance, and audit equally will please none of them. Decide whose problem you are primarily hired to solve this year — usually leadership's visibility, or delivery quality — and design the model around that.",
          "Revisit the model when the work changes. A supportive office that worked at twenty people will not hold a fifty-project portfolio. A directive office built for a transformation can become a drag once the transformation is business-as-usual. Models are decisions with a date, not identities.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Supportive advises, controlling standardises and checks, directive owns delivery. Pick the lightest model the pain requires, and only claim the authority leadership will actually back.",
          "Next: governance frameworks — decision rights and gates that mean something, rather than a slide titled 'governance' with a circle in the middle.",
        ],
      },
    ],
  },

  "governance-frameworks": {
    intro:
      "Governance is not a steering committee that listens to a pack and says 'keep going.' It is the set of decision rights and gates that decide who can spend, who can change scope, and who can stop the work — before the spend is already gone.",
    sections: [
      {
        id: "decision-rights",
        title: "Decision rights, written down",
        body: [
          "Start with a short list of decisions that actually move money or date: start a project, change scope or budget beyond a threshold, accept a residual risk, slip a committed date, or close and hand over. For each, name the person (not the forum) who decides, who advises, and who must be informed. Forums that 'own' decisions own nothing.",
          "Thresholds stop every change landing on the same desk. A PM can approve a two-day slip inside contingency. A sponsor approves a scope cut. The portfolio board approves a new workstream that eats someone else's capacity. If every decision escalates, you do not have governance. You have a queue.",
          "Publish the rights where people will trip over them — the charter template, the change form, the first page of the steerco pack. A RACI buried in a 40-page framework is a rumour. People will invent their own rights by Friday.",
        ],
      },
      {
        id: "gates-with-teeth",
        title: "Gates that can actually say no",
        body: [
          "A gate is a scheduled decision with evidence: is this still the right work, with a plan that fits the next phase, and an owner who can run it? Typical gates sit at idea, business case, delivery start, go-live, and close. The names matter less than the question: what would make us stop?",
          "Write entry criteria in verbs and artefacts, not vibes. 'Risks owned, supplier contracted, operational owner named, benefits measure agreed.' If the gate can be passed with a confident presentation and no evidence, it is a ceremony. Ceremonies do not protect the portfolio.",
          "Allow a conditional pass. 'Proceed, but dual-source the vendor by 1 May or we stop.' A binary yes/no with no conditions teaches people to hide problems until after the meeting. Conditions keep the gate honest without pretending every project is either perfect or dead.",
        ],
      },
      {
        id: "assurance-not-surveillance",
        title: "Assurance, not surveillance",
        body: [
          "Assurance asks whether the project is telling the truth and whether the method fits the risk. It is a sample, a review, or a health check — not a second status meeting that re-asks every metric. If the PMO re-does the PM's job, you have hired two people to distrust each other.",
          "Scale assurance to risk. A six-week internal tool does not need a three-line-of-defence review. A customer-facing release with a regulatory date does. Publishing one assurance path for everything is how small projects drown and large ones slip through on charm.",
          "Record gate decisions in one place the next person can find. When a sponsor asks why you started a project that later failed, 'we discussed it' is not governance. A dated decision, the evidence, and the conditions are.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Governance is decision rights plus gates with evidence. Name the person, set thresholds, write entry criteria, and keep assurance proportional to risk.",
          "Next: portfolio management — using those rights to select the right work, not merely to supervise whatever already got funded in a corridor.",
        ],
      },
    ],
  },

  "portfolio-management": {
    intro:
      "A portfolio is not a list of every project someone once approved. It is a deliberate set of investments chosen to fit strategy and capacity — which means the PMO's most useful product is often a well-argued no.",
    sections: [
      {
        id: "select-the-work",
        title: "Select the work; do not just inventory it",
        body: [
          "Project management asks 'are we doing this right?' Portfolio management asks 'are we doing the right things?' If the office only reports status on whatever is already running, it is a news service. Selection is the job: compare proposed work against strategy, capacity, risk, and the benefits you can actually measure.",
          "Use a short intake: problem, outcome, cost range, who will own the benefit, and what stops if we say yes. Demand that arrives as a slide titled 'strategic initiative' with no capacity ask is not a proposal. It is a wish that wants a colour on a roadmap.",
          "Score enough to rank, not enough to fake science. A simple forced rank — strategy fit, value, risk, effort — beats a 28-criteria model nobody believes. When two scores are close, that is a leadership conversation, not a reason to add another weighting until the favourite wins.",
        ],
      },
      {
        id: "balance-and-capacity",
        title: "Balance the mix against real capacity",
        body: [
          "Portfolios die of addition. A new regulatory project does not create new senior engineers. Map the scarce people and the scarce calendar — year-end freeze, audit window, peak trading — and show what gets delayed if the new work starts. Capacity is the constraint most boards prefer not to see.",
          "Balance types of work, not just totals. All-run-the-business and no-change is stagnation. All-transformation and no-keep-the-lights-on is how the operational platform catches fire during the transformation. A healthy mix is a decision: how much change this organisation can absorb this year.",
          "Kill or pause on purpose. A portfolio that never stops anything is not ambitious. It is unmanaged. Write the stop rule before you need it: benefit no longer stands, a higher-value item needs the same people, or a gate condition was missed. Stopping work is a portfolio success if the capacity goes somewhere better.",
        ],
      },
      {
        id: "the-portfolio-conversation",
        title: "Run a conversation, not a parade",
        body: [
          "The portfolio review should decide: start, stop, slow, or fund a change. If the hour is a tour of green-amber-red tiles, you have built a cinema. Send the pack in advance. Spend the room on the three items that need a choice.",
          "Make trade-offs visible in one view: what we would drop to start the new thing. Executives who 'want it all' are often not being greedy. They have never been shown the shared resource. Your job is the picture, not a lecture about prioritisation theory.",
          "Keep a parked list. Ideas that lost this quarter should not vanish into folklore and then reappear as emergencies. A visible park — with a next review date — is how you stay honest without pretending every good idea can start on Monday.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Portfolio work is selection and balance against strategy and capacity. Rank simply, show what stops if something starts, and use the review to decide — not to narrate.",
          "Next: maturity models — how to assess the office and the organisation without turning 'level 3' into a personality.",
        ],
      },
    ],
  },

  "maturity-models": {
    intro:
      "A maturity model is a diagnostic, not a destination. The useful move is to find the one bottleneck that is actually hurting delivery — then improve that, rather than chasing a level so the annual report can say you have one.",
    sections: [
      {
        id: "what-maturity-is",
        title: "What maturity models are for",
        body: [
          "Most PMO maturity models describe a ladder: ad hoc practice, repeatable standards, defined process, managed measurement, then optimisation. The labels vary. The idea does not. You are trying to see whether delivery depends on heroics or on a system that would survive the current head of PMO leaving.",
          "Treat the model as a conversation starter with evidence. 'We are level 2 on risk because registers exist but are not reviewed' is useful. 'We are targeting level 4 by December' is a slogan until you name the behaviour that would have to change.",
          "Do not confuse process density with maturity. An organisation can have a 90-page methodology and still run every project as an exception. Maturity is whether agreed practices are used on the work that matters, and whether the results are inspected. Paper is cheap. Habit is not.",
        ],
      },
      {
        id: "assess-without-theatre",
        title: "Assess without grading your own homework",
        body: [
          "Pick a simple scale and a small set of practices: intake, planning, risk, change, reporting, benefits, and close. Score each with evidence — artefacts, interviews, and a sample of live projects — not a workshop where everyone votes themselves a B+.",
          "Sample the messy projects, not the showcase. The transformation with the colourful roadmap will look mature. The nine-month integration that has no owner for the operational handover will tell you the truth. If you only assess the poster children, you will write a flattering report and change nothing.",
          "Separate PMO maturity from organisational maturity. The office can be excellent at standards while sponsors still bypass gates. Write both scores. Improving the PMO while leadership ignores it is how you burn out a competent team.",
        ],
      },
      {
        id: "one-bottleneck",
        title: "Improve one bottleneck",
        body: [
          "After the assessment, pick the constraint that is currently wasting the most money or trust. Inconsistent reporting that blinds the portfolio. No intake, so everything is a priority. Risk registers that are never reviewed. One theme, one quarter, one measure of 'better.'",
          "Design a small intervention: a mandatory one-page intake, a monthly portfolio kill-or-keep, a standard gate pack. Resist the urge to launch a 'maturity programme' with seven workstreams. That is how the PMO becomes a project that needs a PMO.",
          "Re-assess the same slice later. If reporting was the bottleneck, look at whether leadership now makes a decision from the pack. A higher model score with the same surprises in steerco is not improvement. It is stationery.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Use a maturity model to diagnose, not to decorate. Assess with evidence from ordinary projects, then improve one bottleneck until a behaviour changes.",
          "Next: PMO reporting — the few metrics leadership will actually act on, and the ones that only make the dashboard look employed.",
        ],
      },
    ],
  },

  "pmo-reporting": {
    intro:
      "A PMO dashboard that nobody uses to decide is a mural. Reporting earns its keep when a sponsor changes funding, scope, or sequence because of a number they believe — and can explain to someone else.",
    sections: [
      {
        id: "metrics-that-act",
        title: "Few metrics, each with an action",
        body: [
          "Leadership will act on a short set: are we still doing the right work, will we hit the dates we promised, is the money still honest, and what decision is stuck? That is portfolio health, delivery confidence, financial variance, and open decisions. Everything else is optional colour.",
          "Define each metric so two PMs would calculate it the same way. 'On track' that means 'the PM is optimistic' in one project and 'earned value is within 5%' in another is how dashboards become fiction. Write the rule. Train it. Reject packs that invent a private definition.",
          "Attach an action to movement. A date confidence that dropped should come with a choice: descope, add capacity, or accept the slip. A metric with no implied decision is a trivia question. Executives stop reading trivia by the third month.",
        ],
      },
      {
        id: "rag-with-teeth",
        title: "RAG that can be red",
        body: [
          "Red–amber–green is useful only if red is allowed. Publish the criteria: red means a committed outcome will miss unless something changes this cycle; amber means a risk or issue that will become red without action; green means the plan still holds. If red requires a public hanging, you will get a field of amber forever.",
          "Do not average a project to green. A green schedule with a red benefit owner is not a green project. Show the split — time, cost, scope, risk, benefits — and let the worst material dimension set the conversation. Composite scores exist to hide the thing that will embarrass someone.",
          "Explain the last change. 'Amber because the vendor slipped two weeks; decision needed: mock the interface or move UAT.' Movement plus a request is reporting. A static traffic light with a paragraph of plot summary is a novel.",
        ],
      },
      {
        id: "the-pack-as-a-product",
        title: "Treat the pack as a product",
        body: [
          "One portfolio page for the board. A deeper cut for the PMO and sponsors. Do not send the same 30-slide deck to both and hope they scroll. If a director needs a briefing, write the briefing. If they need the register, link it. Attention is the scarce resource.",
          "Cadence beats completeness. A fortnightly pack that is three days old beats a perfect monthly archaeology. Lock the data cut-off, name it, and stop chasing late returns that delay the whole set. A PM who cannot file on time is already telling you something.",
          "Retire charts that have not changed a decision in two cycles. Beautiful burn-ups that nobody discusses are how reporting grows until it needs its own project manager. Ask, once a quarter, which slide we would miss. Delete the others.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Report a few defined metrics that imply a decision. Let red be red. Split the dimensions, show movement, and keep a short pack for the people who fund the work.",
          "You now have the spine of a PMO: a model with real authority, governance that can refuse, a portfolio that selects, a maturity habit that fixes one constraint, and reporting leadership can use. Put one of those into a live conversation this week — preferably the no you have been postponing.",
        ],
      },
    ],
  },

  "exam-structure": {
    intro:
      "The PMP exam is a situational test against PMI's current Exam Content Outline, not a recitation of a textbook chapter. This lesson maps how the exam is built so you can study the right kind of judgement — not so anyone can promise you a result.",
    sections: [
      {
        id: "three-domains",
        title: "Three domains, not a process parade",
        body: [
          "The current exam is organised by domains: People, Process, and Business Environment. People covers team leadership, conflict, stakeholder engagement, and the messy human work. Process covers how work is planned, delivered, and controlled — predictive, agile, and hybrid. Business Environment covers compliance, value delivery, and the organisation outside the team.",
          "PMI publishes domain weightings in the Exam Content Outline. Confirm the current weights, item count, and sitting time in the handbook and ECO in force when you book. Those numbers move. A blog post from three years ago is not a source.",
          "Questions are mostly scenarios. You are asked what you should do next, what you should have done, or which approach fits the constraints. Memorising definitions helps you read the vocabulary. It does not, by itself, pick the best option when two answers both sound responsible.",
        ],
      },
      {
        id: "agile-hybrid-mix",
        title: "A large agile and hybrid mix",
        body: [
          "Expect a substantial share of items to assume agile or hybrid delivery — stand-ups, backlogs, incremental value, servant leadership, and the judgement to mix approaches on one piece of work. Studying only predictive process language leaves a hole the exam will find.",
          "Hybrid questions are not 'pick agile or waterfall.' They are 'the contract is fixed-scope and the tech is uncertain — what do you do?' Good answers protect the constraint that is actually locked and adapt the rest. Bad answers apply a favourite method as a personality.",
          "You will also see predictive language: baselines, change control, earned value, and closing. The exam is not a conversion camp. It tests whether you can recognise the life cycle in the scenario and behave accordingly. If the question says the plan is approved and baselined, do not 'just add it to the sprint.'",
        ],
      },
      {
        id: "process-model-still-matters",
        title: "PMBOK language still appears — as a process model",
        body: [
          "Process groups and knowledge areas are still the vocabulary of the process model many courses and the PMBOK® Guide use. The exam may use that language. It is also testing the domains and situational judgement above. Learn the map so you can navigate a question. Do not treat the map as the exam.",
          "Read every item as: what is being asked, what is constrained, and what is the best next action for a project manager in that situation. 'Best' usually means you engage the right person, use the agreed process, and protect value — not that you heroically invent a shortcut.",
          "Use PMI's current handbook for rules on breaks, unscored items, and what happens if you stop. Do not plan your sitting from a forum memory. Confirm, then practise under that clock.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "The exam is domain-based — People, Process, Business Environment — with a large agile and hybrid mix and a lot of situational judgement. Confirm current logistics in the PMI handbook. Treat process groups and knowledge areas as the process model, not as the whole test.",
          "Next: process groups — the five-group model, how the groups overlap, and how they sit beside the domains you will actually be scored on.",
        ],
      },
    ],
  },

  "process-groups": {
    intro:
      "The five process groups are a model of how project work is organised in PMBOK language: initiating, planning, executing, monitoring and controlling, and closing. They are not five phases you march through once — and they are not the same thing as the exam's scoring domains.",
    sections: [
      {
        id: "the-five-groups",
        title: "The five groups as a process model",
        body: [
          "Initiating authorises the work and names the manager: charter, high-level stakeholders, a reason the project exists. Planning builds the baselines and the approach — scope, schedule, cost, quality, risk, resources, communications, procurement, and how you will engage people. Executing is the doing and the leading. Monitoring and controlling compares reality to the plan and triggers change. Closing confirms acceptance, hands over, and releases the team.",
          "In a predictive project the groups are easier to see as a sequence. In agile work the same ideas still happen: you still authorise, still plan the next slice, still deliver, still inspect, still close an increment or a release. The cadence is shorter. The names in the room may be backlog, sprint, and review. The exam expects you to recognise the purpose, not to demand a Gantt.",
          "Monitoring and controlling is not a phase after executing. It runs alongside. If you only 'control' when a milestone explodes, you were not controlling. You were surprised. The model puts that loop in parallel on purpose.",
        ],
      },
      {
        id: "not-a-waterfall-staircase",
        title: "They overlap; they are not a staircase",
        body: [
          "Planning does not end on a date. A change to scope re-enters planning. A new stakeholder in month six re-enters initiating work for that person. Closing one phase can sit next to executing another. Drawing five boxes in a line is a training poster. Real projects loop.",
          "When a question describes work, ask which group's purpose is in play. A sponsor asking for a new product line mid-project is not 'just execute.' You are back in initiating and planning for that slice, plus change control if a baseline exists. Candidates who only see the loudest activity pick the loudest wrong answer.",
          "Do not force every scenario into a group name if the question is really about a domain behaviour — coaching a team, navigating a compliance change, choosing a hybrid approach. The process model helps you structure delivery. The exam also tests whether you can lead people and read the business context.",
        ],
      },
      {
        id: "groups-versus-domains",
        title: "Process groups versus exam domains",
        body: [
          "Process groups describe a flow of work. Domains describe what the exam scores: people skills, process skill, and business-environment skill. A single scenario can sit in Executing as a process-group idea and in People as a domain item. Study both maps. Do not collapse them into one list to memorise.",
          "If you trained on older materials that treated the exam as 'know the 49 processes,' update your mental model. Those processes are still a useful catalogue of what PMs do. The current sitting is built from the ECO. Match your practice questions to domains and life cycles, not only to process-group trivia.",
          "Use the groups as a checklist when a scenario feels messy: has this work been authorised? Is there a plan for this change? Are we delivering or still debating? Are we comparing to a baseline? Has anyone accepted the output? That sequence finds the missing step more reliably than rereading a definition.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Five groups: initiate, plan, execute, monitor and control, close. They overlap and repeat. They are a process model, not the exam's domain structure — learn both.",
          "Next: knowledge areas — the other half of the PMBOK map, and how to use them without turning study into a flashcard factory.",
        ],
      },
    ],
  },

  "knowledge-areas": {
    intro:
      "Knowledge areas group the process model by subject: integration, scope, schedule, cost, quality, resources, communications, risk, procurement, and stakeholders. Learn them as a map of concerns that must stay joined — not as ten silos to recite under exam lights.",
    sections: [
      {
        id: "the-ten-areas",
        title: "Ten areas, one project",
        body: [
          "Integration is the joining work: charter, plan, directing delivery, managing change, and close. Scope defines what is in and out. Schedule and cost are the time and money baselines. Quality is the standard the output must meet. Resources are people and things. Communications is who knows what, when. Risk is uncertainty. Procurement is work you buy. Stakeholders are the humans who can help or sink the thing.",
          "You do not 'do risk' on Tuesdays and 'do stakeholders' on Wednesdays. A late vendor is procurement, risk, schedule, and a stakeholder conversation. The area names help you notice which concern you ignored. They are not a rota.",
          "Agile language maps onto the same concerns with different artefacts. A product backlog is scope and priority. A sprint review is quality and stakeholder engagement. A retrospective is resource and process improvement. If a question uses Scrum words, answer the concern, not the brand.",
        ],
      },
      {
        id: "integration-is-the-job",
        title: "Integration is the actual job",
        body: [
          "Most 'best next action' items are integration in disguise. Someone wants a change: you assess impact across areas, follow the agreed control, and update the plan. Someone wants a shortcut: you protect the baseline or the increment's definition of done. The exam rewards the PM who joins the dots, not the specialist who only sees their favourite area.",
          "Watch for answers that optimise one area and wreck another. Crashing the schedule by exhausting the team is a resource and quality problem. Accepting a cheaper vendor without residual-risk ownership is procurement theatre. The better option usually names the trade-off and the person who must accept it.",
          "Change control sits here. If work is baselined, you do not quietly absorb scope because the sponsor asked nicely in a corridor. If work is agile, you do not ignore a mid-sprint dump either — you take it to the product owner and the backlog. Same integration instinct, different mechanism.",
        ],
      },
      {
        id: "how-the-exam-uses-the-map",
        title: "How the exam uses this language",
        body: [
          "You may see area names, process names, or neither — just a situation. Use the map to ask: which concern is in trouble, and what process would a competent PM use? Then check the domain: is this really a people item dressed in process vocabulary?",
          "Do not invent a requirement to memorise every tool and technique list. Know the purpose of a charter, a baseline, a RAID-style register, a stakeholder analysis, a definition of done, and a benefits measure. Know when earned value informs a conversation and when a burn-down does. Depth on purpose beats a graveyard of acronyms.",
          "When you revise, take one scenario and walk it across areas: what happens to scope, time, cost, risk, and people if this decision lands? That habit is closer to the exam than highlighting a textbook until it glows.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Ten knowledge areas are a map of concerns; integration is how they stay one project. Use the map to find the ignored constraint. The exam still speaks this language while scoring domains and judgement.",
          "Next: practice questions — how to read a scenario, and a few worked examples with the reasoning made visible.",
        ],
      },
    ],
  },

  "practice-questions": {
    intro:
      "PMP items are short stories with a trap door. The skill is not recalling a slogan. It is reading what is asked, what is constrained, and which option is the best next action for a project manager — then knowing why the almost-right answer is almost.",
    sections: [
      {
        id: "how-to-read-a-scenario",
        title: "Read the scenario before you read yourself",
        body: [
          "First, find the question stem: what should the project manager do next, do first, have done, or avoid? 'Next' and 'first' are not synonyms for 'the most dramatic thing.' They mean the immediate competent step, which is often analyse, engage, or use the agreed process — not implement a solution you invented in the corridor.",
          "Second, list the constraints the story already gave you: life cycle (predictive, agile, hybrid), whether a baseline or backlog exists, who has authority (sponsor, product owner, functional manager), and any hard external fact (regulation, contract, safety). Answers that ignore a stated constraint are wrong even when they sound like leadership.",
          "Third, eliminate options that are abdication (ignore, wait and hope), ego (decide alone on someone else's authority), or method-fanaticism (apply Scrum to a locked predictive contract without analysis, or freeze a backlog while the building is on fire). What remains is usually 'engage the right person with an impact assessment' or 'follow the control that already exists.'",
        ],
      },
      {
        id: "worked-examples",
        title: "Worked examples — with the rationale",
        body: [
          "Example A. Mid-project, a sponsor asks you to add a feature. The date and budget are fixed. A team lead says 'we can try.' Best next action: assess the impact on the baselines (or the backlog and increment), present options — descope something else, move a date, or add cost — and take the change through the agreed control. Why not 'try'? Hope is not a change process. Why not 'refuse'? You do not own the trade-off; you own the analysis. The stem is asking for integration and honesty, not toughness.",
          "Example B. Two senior stakeholders disagree on priority. One wants speed, the other wants a compliance check that will add a sprint. Best next action: make the constraint explicit — what is mandatory versus preferred — and facilitate a decision with the person who owns the outcome (sponsor or product owner), using the risk and the regulation as evidence. Why not pick a side in Slack? You would be substituting your preference for their authority. Why not 'build both'? Capacity is not created by optimism.",
          "Example C. A predictive project is halfway; the customer wants the remaining work delivered in increments so they can learn. Best next action: assess contract, governance, team skill, and what would remain fixed, then propose a hybrid approach with a clear definition of done for each increment. Why not 'we cannot — the methodology is waterfall'? The exam rewards fitting the approach to the need. Why not 'switch the whole project to agile tomorrow'? You would be ignoring the half already baselined and the people who have to live with it.",
        ],
      },
      {
        id: "common-almost-rights",
        title: "The almost-right answers",
        body: [
          "PMI-flavoured options often include a meeting, a document, or an escalation. The meeting is right when you lack information or alignment. The document is right when the plan or the decision is not recorded. Escalation is right when the decision exceeds your authority and you have already done the analysis. They are wrong when they delay a decision you are already empowered to make.",
          "People-domain items punish public humiliation, ignoring conflict, and 'telling the team to be professional.' They reward private conversation, root cause, and coaching. Process-domain items punish skipping change control and inventing scope. Business-environment items punish treating regulation as optional because the backlog is full.",
          "When two answers both look adult, prefer the one that uses existing agreements and the smallest next step that unblocks the work. The exam is not looking for a hero arc. It is looking for a professional who can still find the process when the story is annoying.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Read the stem, the constraints, then the best next action. Worked examples reward impact analysis, the right decision-maker, and a life cycle that fits — not 'try,' not method loyalty, not a corridor yes.",
          "Next: exam strategy — time, elimination, and flag-and-return. Still not a promise. Still not a brain dump.",
        ],
      },
    ],
  },

  "exam-strategy": {
    intro:
      "Strategy on this exam is logistics and judgement under a clock. It is not a set of leaked items, and it is not a guarantee. Confirm the current sitting rules in the PMI handbook, then practise the habits below until they are boring.",
    sections: [
      {
        id: "time-as-a-budget",
        title: "Treat time as a budget",
        body: [
          "Before you sit, take the official duration and item count from the current handbook and decide a pace: roughly how long you can spend on a typical item, and how much reserve you want for flagged ones. Do not import a minute-count from a stranger's blog. Do the arithmetic yourself from this year's rules.",
          "Move on when you have a defensible choice. A five-minute argument with yourself on item 12 is how you rush the People scenarios at the end — which are often longer stories. Mark, pick the best current answer, and leave. Indecision is not rigour. It is a spend.",
          "Build stamina in practice with full-length, timed sets that mix predictive and agile. Short untimed quizzes teach content. They do not teach what your brain does at item 140. Sit at a table. Use the same scratch habits you will use on the day. Surprises belong in the scenario, not in your routine.",
        ],
      },
      {
        id: "elimination",
        title: "Eliminate before you fall in love",
        body: [
          "Cover the options and answer the stem in a short phrase: 'impact analysis, then sponsor.' Then look. If your phrase is there, good. If not, do not immediately abandon it — check whether you missed a constraint. Anchoring on option B because it has the word 'collaborate' is how marketing verbs beat you.",
          "Strike abdication, ethics problems, and authority theft first. Then strike the method that ignores the life cycle in the story. Then strike the option that skips a control that already exists. What is left is usually the adult step. If two remain, pick the one that is next, not the one that finishes the whole plot.",
          "Beware absolute words — always, never, only — unless the story is about safety, law, or a hard policy. PMI scenarios are full of 'it depends,' which on the exam means 'it depends on the constraint they already told you.'",
        ],
      },
      {
        id: "flag-and-return",
        title: "Flag-and-return — and what you will not do",
        body: [
          "Flag items that are long, hybrid, or calculating. Answer them anyway with a best guess so a blank is never your plan. Return in a second pass with leftover time. Often a later question loosens a phrase that was stuck. Do not flag half the exam. That is not a strategy. That is panic with a feature enabled.",
          "Use the on-screen tools you practised with. If you change an answer on review, change it only when you find a constraint you missed — not because the option 'feels warmer' on a third reading. First-pass reasoning, with the stem in front of you, is usually cleaner than fatigue reasoning.",
          "Do not use brain dumps, recalled item lists, or 'this will be on the test' documents. They are unethical, often wrong, and a poor way to learn judgement. Study the ECO, a current reputable prep source, and your own worked errors. The exam changes. Stolen items do not stay current, and they were never a professional strategy.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Confirm handbook rules, budget time, eliminate the unethical and the unconstrained, and flag-and-return a few items — not half the paper. No dumps. No pass promise.",
          "You have a map: domains and mix, process groups, knowledge areas, how to read a scenario, and how to sit the clock. Use it to practise judgement on mixed questions this week. The credential is earned in the room. The study is so the room is familiar.",
        ],
      },
    ],
  },

  "communication-foundations": {
    intro:
      "Communication is not 'keeping people informed.' It is getting a specific audience to understand a specific thing, through a channel they will actually use, in time to change what they do. Everything else is noise with a friendly tone.",
    sections: [
      {
        id: "audience-then-channel",
        title: "Audience first, then channel",
        body: [
          "Start with who must do or decide something, and what they need in order to do it. A sponsor needs the decision, the options, and the cost of delay. A team needs the constraint and the next increment of work. An operational owner needs the date they inherit the thing. One email that tries to serve all three will serve none.",
          "Match the channel to the job. Urgent, ambiguous, or emotional work wants a conversation — call, huddle, walk. Stable status and a record want writing. Complex trade-offs want a short live session with a pre-read. Putting a sensitive headcount issue in a group chat is not transparency. It is a future incident.",
          "Push versus pull. Push when they must see it (a decision due Friday). Pull when it is reference (the plan, the register). If everything is push, people mute you. If everything is pull, they will swear they were never told. Design both, and say where the source of truth lives.",
        ],
      },
      {
        id: "the-message",
        title: "Say the point, then the evidence",
        body: [
          "Lead with the sentence that matters: 'We need a decision by Thursday: slip two weeks or drop the reporting module.' Then the two facts that make it true. Then the ask. People who write the history first and the ask in paragraph six are writing a diary. Diaries do not get replies.",
          "Use their language, not your methodology. 'The sprint is amber because velocity dropped' is your dialect. 'The May release will miss unless we cut scope or add a tester' is theirs. Translate. If they have to decode you, they will wait for the meeting they can skip.",
          "Close the loop. Communication that does not check understanding is broadcasting. For material messages, ask them to play back the decision or the date. It feels pedantic for ten seconds and saves a month of 'I thought you meant.'",
        ],
      },
      {
        id: "noise-and-cadence",
        title: "Reduce noise on purpose",
        body: [
          "Agree a cadence so people stop asking 'any update?' Weekly written status, a fortnightly steerco, a daily team huddle — pick what the work needs, then stop inventing extra forums because someone was anxious on a Tuesday.",
          "Name a single place for decisions. Chat is for speed. The log is for truth. If decisions live in six threads, you do not have communication. You have archaeology. When you decide live, write the decision before you stand up.",
          "Watch your own volume. A PM who sends four 'quick notes' a day trains people to wait for the fifth. Batch the non-urgent. Escalate the actually urgent. If everything is flagged important, nothing is.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Pick the audience and the job, then the channel. Lead with the point and the ask. Push what must be seen, pull the rest, and keep one place for decisions.",
          "Next: running meetings — the live version of this discipline, where an hour can either produce a decision or produce another meeting.",
        ],
      },
    ],
  },

  "running-meetings": {
    intro:
      "A meeting is expensive conversation. It is justified when the outcome cannot be reached asynchronously — a decision, a genuine working session, or a relationship that is about to snap. If you cannot name the outcome, you are hosting a sitcom.",
    sections: [
      {
        id: "outcome-before-agenda",
        title: "Outcome before agenda",
        body: [
          "Write the outcome as a sentence: 'Leave with a go/no-go,' 'leave with owners on the top five risks,' 'unblock the interface design.' Then build the smallest agenda that can produce that sentence. An agenda that is a list of topics is a tour. Tours end with 'good discussion.'",
          "Send a pre-read that is short enough to be read. If the decision needs a paper, the paper arrives in time for people to disagree in the margins, not in minute 50. People who refuse to read are a stakeholder problem. People who cannot read because you sent 40 slides at 22:00 are your problem.",
          "Invite the people who can decide or who hold a fact nobody else has. Optional attendees should be optional. A meeting of twelve 'for visibility' is how visibility dies. The others get the note.",
        ],
      },
      {
        id: "facilitate-the-hour",
        title: "Facilitate like you mean it",
        body: [
          "Open with the outcome and the time. Park anything that does not serve it. You are not rude for protecting the hour. You are rude if you let a side plot spend everyone else's week.",
          "Get the quiet facts in the room. Silent writing, a round-robin, or a direct question to the person who will have to live with the decision. The first speaker — often the most senior — will otherwise set a weather system the rest of the table politely inhabits.",
          "When the room is stuck, name the constraint: date, money, policy, or taste. Arguments that sound personal are often two constraints colliding. Put them on the wall. If you cannot resolve them here, say so and name the decision-maker and the date. An unresolved argument that ends because the calendar says so will return, angrier, as a hallway veto.",
        ],
      },
      {
        id: "decisions-that-stick",
        title: "Leave with something that survives the corridor",
        body: [
          "Write decisions in the room: what was agreed, who owns the next action, by when, and who needs to know. Read them back before you close. Memory is a poor minute-taker, especially for the people who lost the argument.",
          "Send the note the same day. Three lines beat a transcript. Link the artefacts. If an action has no owner, it was a wish. If it has no date, it is décor.",
          "Refuse meetings that should be a document. A status meeting where people read slides they could have sent is a tax. Move status to writing and keep the live slot for exceptions and decisions. You will be accused of being process-heavy. You will also get Friday afternoon back.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Name the outcome, invite only the people who can produce it, facilitate the constraint, and write the decision before anyone stands up.",
          "Next: written updates — the async pack people will actually read, including a RAG that is allowed to be red.",
        ],
      },
    ],
  },

  "written-updates": {
    intro:
      "A written update is a product for busy people: if they need you in the room to interpret it, it is a teaser, not an update. The job is one page they can trust — and a RAG that still means something when the news is bad.",
    sections: [
      {
        id: "one-page-they-read",
        title: "One page, read from the top",
        body: [
          "Open with the headline: on track, at risk, or off — against the outcome you promised, not against your mood. Then the two or three facts that justify it. Then the decision you need, if any. Readers who must hunt for the ask will not hunt. They will wait for your meeting, which you were trying to avoid.",
          "Write for a single primary audience. A sponsor pack that also tries to be the team's board is how you get a document nobody finishes. Team detail lives in the tool. Leadership gets the exception, the forecast, and the choice.",
          "Keep a stable shape so people know where to look: outcome, status, movement since last time, risks that changed, decisions required. Novelty in structure is not freshness. It is a tax on memory.",
        ],
      },
      {
        id: "rag-with-teeth-comms",
        title: "RAG with teeth",
        body: [
          "Green means the plan still holds. Amber means a threat that will become a miss without action this cycle. Red means a committed outcome will miss unless something changes now. Publish those definitions. Then use them. A culture that punishes red produces amber fiction and a surprise.",
          "Give the RAG a sentence of teeth: what changed, what you are doing, and what you need. 'Amber — vendor build slipped five days. We have re-sequenced UAT. Need sponsor to accept a one-week slip or drop the analytics slice by Friday.' That is an update. 'Amber — challenging vendor landscape' is weather.",
          "Do not hide a red dimension inside a green average. If benefits are red and schedule is green, say both. Composite cheerfulness is how programmes walk into a go-live with no one to operate the thing.",
        ],
      },
      {
        id: "async-as-a-habit",
        title: "Make async a habit, not a dump",
        body: [
          "Send on a predictable cadence, from a predictable place, at a predictable length. Friday afternoon novels train people to skim on Monday and miss the decision buried in paragraph nine. If you need a long annex, link it. The update stays short.",
          "Separate signal from chatter. Chat can say 'pack is up.' The pack holds the status. Do not split the truth across a thread, a slide, and a hallway conversation and then wonder why finance has a different date.",
          "When nothing material changed, write that — one line — and skip the performance of busyness. Silence makes people invent a crisis. Twelve paragraphs of 'continuing to progress' make them invent a mute button.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "One page, stable shape, headline then ask. RAG with published teeth and no greenwash. Same cadence, one source of truth.",
          "Next: active listening — how to hear the interest under the position, which is what most 'alignment' problems actually are.",
        ],
      },
    ],
  },

  "active-listening": {
    intro:
      "People rarely walk in and state their real constraint. They walk in with a position — 'we need it in May,' 'this vendor is fine,' 'the team is the problem' — and a quieter interest underneath. Listening is how you find the interest before you negotiate the furniture.",
    sections: [
      {
        id: "position-versus-interest",
        title: "The interest under the position",
        body: [
          "A position is the demand. An interest is the reason. 'No more scope' might mean a regulatory date, a bonus tied to go-live, or a team already on nights. If you argue the position, you get a tug of war. If you ask what happens if they do not get it, you get a problem you can design around.",
          "Listen for stakes, fears, and success pictures. 'I need weekly reporting' may mean 'I was burned last year and I will not be surprised in front of the board again.' You might satisfy that with a reliable exception report rather than another two-hour meeting. You will not hear that if you are already composing your rebuttal.",
          "Do not psychoanalyse. You are not their therapist. You are trying to learn the constraint they will not put in writing until they trust you will not use it against them. Repeat the constraint, not their personality.",
        ],
      },
      {
        id: "practices-that-work",
        title: "Practices that are not theatre",
        body: [
          "Use their words back, then the implication: 'You are saying the May date is fixed because of the conference. If we protect May, scope or cost has to move — is that the trade you want?' That is listening with a spine. Nodding while you wait to talk is not.",
          "Ask one more question than feels polite. 'What would good look like in June?' 'What have you already tried?' 'Who else will overrule this in a fortnight?' The last one saves projects. Hidden stakeholders are the interest you forgot to invite.",
          "Shut up after you ask. Count a slow five. People fill silence with the useful sentence. If you leap in to be helpful, you will hear your own plan, which you already knew.",
        ],
      },
      {
        id: "use-what-you-heard",
        title: "Use what you heard",
        body: [
          "Write the interest down where it can change the work: a stakeholder note, a risk, a success criterion. Listening that never leaves your head is a warm feeling. It is not management.",
          "Play it back in the next artefact. 'You said surprise is the failure mode — so the pack will flag movement, not just status.' People relax when they see their actual concern in the system. They escalate when they only see your template.",
          "When interests conflict, you have found the real project. That is the next lesson. Listening does not dissolve conflict. It stops you fighting the slogan instead of the constraint.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Positions are demands; interests are constraints and fears. Reflect the constraint, ask one more question, and put what you heard into the plan.",
          "Next: handling conflict — treating the fight as competing constraints, not as a personality problem you can smile out of existence.",
        ],
      },
    ],
  },

  "handling-conflict": {
    intro:
      "Most project conflict is not two difficult people. It is two legitimate constraints in the same calendar — date versus quality, compliance versus cost, one scarce specialist — and you treat that as a design problem first, because personality is the residue that remains after the constraints are on the table.",
    sections: [
      {
        id: "name-the-constraints",
        title: "Name the competing constraints",
        body: [
          "Get the fight out of character and onto variables. 'You are being unreasonable' becomes 'you need the compliance pack; they need the May launch.' Write both. If you cannot write them, you are still in the slogan layer. Stay there and the argument will follow you home.",
          "Check the facts before you mediate the feelings. Is the date actually external? Is the regulation real? Is the specialist actually unique? A surprising number of conflicts collapse when one 'must' turns out to be a preference in a loud voice. A surprising number do not — and then you have a real trade-off.",
          "Separate heat from content. People raise their voice when they have been ignored, surprised, or made to look careless. Acknowledge the heat in one sentence — 'you found out in the pack, that was badly done' — then return to the constraint. Therapy can wait. The date cannot.",
        ],
      },
      {
        id: "facilitate-the-trade",
        title: "Facilitate a trade, not a winner",
        body: [
          "Offer options that protect different constraints: slip the date and keep the check; keep the date and cut scope; keep both and add cost. Make the chooser explicit. You facilitate. You do not pick a favourite sponsor because they are nicer in meetings.",
          "Use the smallest room that can decide. A public argument in a steerco of fifteen is sport. A working session with the two owners and you is work. Bring the evidence, not the audience. If the decision needs a board, take a recommendation, not a live brawl.",
          "Timebox the unresolved. 'We decide Friday or the default is we hold the regulatory scope and move the conference demo to a subset.' Defaults prevent hostage-taking. Without a default, the louder calendar wins by running out the clock.",
        ],
      },
      {
        id: "when-it-is-people",
        title: "When it really is people",
        body: [
          "After the constraints are clear, you may still have behaviour: undermining, stonewalling, or a personal conflict leaking into the work. Address it privately, specifically, and early. 'In yesterday's meeting you contradicted the agreed date in front of the vendor. If the date is wrong, bring it to me before the call.' Vague requests to 'be more collaborative' are wallpaper.",
          "Escalate behaviour that exceeds your authority — formal performance, harassment, ethics — through the actual line and HR path. Do not run a shadow disciplinary process because you have a RACI. And do not leave the delivery constraint unowned while everyone waits for a personality to improve.",
          "Write the outcome of the conflict the way you write any decision: the trade, the owner, the date. Conflict that 'ended well' with no artefact will reopen at the next status. Peace is a recorded choice.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Put constraints on the table, test which 'musts' are real, offer trades to the person who can choose, and record the result. Deal with leftover behaviour privately and through the proper line.",
          "You now have a working comms practice: the right channel, meetings with outcomes, writing people will act on, listening for interests, and conflict as competing constraints. Use it on the next argument you were going to win by sending a longer email.",
        ],
      },
    ],
  },
}
