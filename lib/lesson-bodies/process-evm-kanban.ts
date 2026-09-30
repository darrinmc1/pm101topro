import type { LessonBodies } from "./types"

export const processEvmKanbanBodies: LessonBodies = {
  "initiating-processes": {
    intro:
      "Initiating is not a kickoff with sandwiches. It is the short, formal act of saying this work is authorised, someone is accountable for it, and we know whose lives it will disturb. Skip it and you will spend planning arguing about whether the project exists.",
    sections: [
      {
        id: "what-initiating-does",
        title: "What initiating is actually for",
        body: [
          "The initiating process group answers three questions: why this work, who has authority to spend and decide, and who will be affected. In the PMBOK process model that is principally developing the project charter and identifying stakeholders. Everything else is planning dressed up as enthusiasm.",
          "You can initiate a project or a phase. A programme that treats every phase as a continuation of last year's vibe is how scope inherits itself. A phase gate that re-asks 'is this still the right work?' is initiating done properly, not bureaucracy for its own sake.",
          "Process groups are a way to organise work, not a religion and not a pass certificate. The exam also uses domains — People, Process, Business Environment — and situational judgement. Learn the model so you can place a task; do not confuse placing a task with 'I will now pass something.'",
        ],
      },
      {
        id: "charter-as-authority",
        title: "The charter is authority, not stationery",
        body: [
          "A charter authorises the project, names the project manager, and records the shared understanding between sponsor and PM: purpose, high-level objectives, known constraints, and the envelope of money and time. It is not a schedule. If it has a Gantt chart, you have started planning and forgotten to get permission.",
          "The sponsor signs it. That signature is what you point at when someone tries to add a mobile app in week two without moving a date. A charter you wrote and signed yourself is a diary. Useful for your feelings. Useless in a resource fight.",
          "Keep it short enough that a busy sponsor will actually read it. Purpose in plain English, success in something you could measure at close, exclusions that prevent the 'we assumed' conversation. A ten-page charter is a plan that has not admitted what it is.",
        ],
      },
      {
        id: "stakeholders-start-here",
        title: "Stakeholders are an initiating output, not a later favour",
        body: [
          "Identify stakeholders now, while the list is still a list and not a surprise veto. Anyone who can affect the work or be affected by it belongs on it — including the quiet compliance function and the operations team who will inherit the mess.",
          "Write more than a name. Interest, influence, and what they will care about when this goes wrong. You will refine the register in planning; initiating is when you refuse to start with only the people who were copied on the first email.",
          "If the sponsor cannot name a success measure and three people who will shout if you miss it, you are not ready to plan. You are ready for another conversation. Planning a vacuum is how teams get very organised about the wrong problem.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Initiating authorises the work, appoints the PM, and starts the stakeholder list. The charter is a short authority document, not a plan. Process groups are the PMBOK process model; domains are the other exam lens. Neither is a promise.",
          "Next: Planning processes — the largest group, and the one where the plans have to agree with each other or the baseline is fiction.",
        ],
      },
    ],
  },

  "planning-processes": {
    intro:
      "Planning is where the project stops being a speech and becomes a set of decisions that can be baselined. It is the largest process group because every knowledge area grows a plan, and those plans have to survive contact with one another. A folder of disconnected documents is a library, not a management system.",
    sections: [
      {
        id: "planning-is-a-web",
        title: "Planning is a web, not a waterfall of templates",
        body: [
          "You do not write the scope plan, then the schedule, then the cost plan as if each were a completed essay. Scope changes the work packages; work packages change duration; duration and resources change cost; risk changes all three. If your plans cannot refer to each other, one of them is already a lie.",
          "The project management plan is the integrator: how you will execute, monitor, and control, plus the subsidiary plans for scope, schedule, cost, quality, resources, communications, risk, procurement, and stakeholder engagement. You do not need a novella for each. You need enough that a stranger could see how a change in one place ripples.",
          "Progressive elaboration is not an excuse for vagueness. Early plans are rightly coarse. They still need owners, assumptions, and a date when the next level of detail is due. 'We will figure it out in execution' is how planning becomes a kickoff slide.",
        ],
      },
      {
        id: "baselines-are-the-point",
        title: "Baselines are why you bothered",
        body: [
          "When planning is good enough, you freeze scope, schedule, and cost as the performance measurement baseline. That freeze is a decision, not a mood. After it, deviation is a change or a variance — not a quiet edit to the spreadsheet so the line still looks straight.",
          "Get the people who will be measured against the baseline to help build it. A schedule the team never saw is a hostage note. A budget finance never recognised is a wish. Sign-off is not ceremony; it is how you later say 'this is what we agreed' without sounding like you invented it yesterday.",
          "Watch the assumption log. Plans fail less from missing tasks than from 'the vendor environment will be ready in June' sitting untested until June. If an assumption would change the baseline if it were false, it needs an owner and a check date. Hope is not a subsidiary plan.",
        ],
      },
      {
        id: "enough-planning",
        title: "Enough planning is a judgement, not a page count",
        body: [
          "Under-planning shows up as firefighting and surprise dependencies. Over-planning shows up as a team that cannot start because the document set is still 'in review.' Your job is to judge which constraint is currently the dangerous one — usually the one nobody wants to name.",
          "Tailor. A six-week internal tool does not need the same planning stack as a regulated multi-vendor programme. Using every process because a diagram showed them all is cargo-cult PMBOK. Skipping integration because you are 'agile now' is how hybrids invent two baselines that disagree.",
          "Planning does not end when execution starts. You re-plan when authorised change lands, when a phase starts, and when reality makes the current baseline dishonest. Treating the plan as a relic is how monitoring becomes archaeology.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Planning connects subsidiary plans through an integrated project management plan, then freezes a baseline you can measure. Elaborate as you learn; do not confuse a template pile with a plan. Tailor the stack to the risk, not the diagram.",
          "Next: Executing processes — directing the work, managing the team, and resisting the urge to call activity a result.",
        ],
      },
    ],
  },

  "executing-processes": {
    intro:
      "Executing is where deliverables appear and where the plan meets other people's calendars. Directing work is coordination, not heroics. If your status report is a list of meetings you attended, you are executing a diary.",
    sections: [
      {
        id: "direct-the-work",
        title: "Direct and manage the work — then prove it exists",
        body: [
          "The core executing process is getting authorised work done and producing the outputs the baseline promised. That includes approved changes, not just the original scope. A team busy on last week's interpretation of the charter is executing something. It may not be the project.",
          "Manage project knowledge while you are at it. Decisions, rationale, and 'we already tried that' walk out of the building unless you capture them. A shared space that nobody updates is not knowledge management. It is a graveyard with search.",
          "Procurements and vendor work sit here too: you conduct the buying you planned, then you manage the relationship so the contract is not the only person in the room who knows what 'done' means. A PO is not a deliverable.",
        ],
      },
      {
        id: "people-quality-comms",
        title: "Team, quality, and communications are execution, not extras",
        body: [
          "Acquire, develop, and manage the team in this group. You are often borrowing people who still report to someone else. That is not a personal failing; it is the job. Clarity, impediment removal, and escalating resource conflicts to the person who can actually move a functional manager beat motivational posters.",
          "Manage quality here means building the work the way you said you would — checklists, reviews, definition of done — not waiting for a test phase to discover the process was theatre. Inspection later is control. Prevention now is execution. Confusing the two is how 'we test at the end' becomes a personality.",
          "Communications and stakeholder engagement are work, not courtesy. The plan said who gets what, when. Executing that plan is how rumours stay unemployed. Silence is also a message. It usually says 'invent your own status.'",
        ],
      },
      {
        id: "risk-responses-are-work",
        title: "Risk responses and change requests are also work",
        body: [
          "Implementing a risk response is executing, not 'monitoring.' If the fallback vendor was the mitigation, someone has to brief them and pay the retainer. A response that lives only in the register is a wish with a colour.",
          "Work will generate change requests. Your job in execution is to route them through integrated change control, not to absorb 'small' ones because the requester is senior and the team is tired. Execution without a change path is how baselines die of a thousand favours.",
          "Do not wait for the monitoring meeting to notice that the work is the wrong work. Execution produces data — completed packages, defect counts, vendor dates. If you only look at those numbers in a steerco pack, you have outsourced control to a slide.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Executing directs authorised work, grows the team, builds quality in, runs communications, implements risk responses, and feeds change control. Activity is not earned value. Knowledge that is not captured will need to be rediscovered, usually in week twelve.",
          "Next: Monitoring and controlling — the parallel group that compares that work to the baseline and decides what to do about the gap.",
        ],
      },
    ],
  },

  "monitoring-controlling": {
    intro:
      "Monitoring and controlling is not a phase you start when someone is nervous. It runs beside execution: compare performance to the baseline, decide whether the gap is noise or a decision, and change the plan only on purpose. If the register and the baseline only move during a crisis, you are doing incident management with extra columns.",
    sections: [
      {
        id: "monitor-then-control",
        title: "Monitor is seeing. Control is acting.",
        body: [
          "Monitor and control project work means collecting performance data, comparing it to the plan, and recommending corrective or preventive action. Seeing a slip and writing 'noted' is monitoring. Changing resource, sequence, or scope through the proper path is control. One without the other is a weather report.",
          "Control processes exist for scope, schedule, cost, quality, resources, communications, risk, procurement, and stakeholder engagement because each baseline and plan can drift independently. A green schedule next to a bleeding cost line is not 'mostly fine.' It is two stories, and someone will pick the cheerful one.",
          "Validate scope is acceptance of deliverables, not a vibe in a demo. Control scope is keeping the approved scope the approved scope. Teams that skip formal acceptance discover at close that 'everyone liked it' is not a signature.",
        ],
      },
      {
        id: "integrated-change-control",
        title: "Integrated change control is the spine",
        body: [
          "Perform integrated change control is where requests are reviewed against the whole baseline — scope, schedule, cost, quality, risk — and approved, deferred, or rejected by the right authority. A change approved in a corridor is how you get two baselines and one argument.",
          "Configuration and version matter. If nobody can say which specification the team is building, control is already lost. The change log is the audit trail for the inevitable 'why did this take longer?' conversation. Memory is not a configuration system.",
          "Thresholds should be set in planning: what the PM can approve, what the sponsor must see, what needs the steering group. Inventing the threshold when the request arrives is how seniority becomes the process. That process always approves the last person who spoke.",
        ],
      },
      {
        id: "when-to-intervene",
        title: "Intervene on a trigger, not a feeling",
        body: [
          "Decide in advance what 'off' means: a variance threshold, a missed leading indicator, a risk trigger. Then look on a cadence that matches the project's pulse. Weekly for short, high-change work. Fortnightly if you can honestly claim calm. Monthly is how surprises mature into press releases.",
          "Corrective action repairs a deviation that has already happened. Preventive action reduces the chance of one that has not. Both are changes to how you work and should be treated as such. 'We will try harder' is neither. It is a slogan with a burn-down chart.",
          "Escalate residual performance that no longer fits your authority. A forecast that now threatens the business case belongs with the sponsor, with options, before the milestone is already missed. Late honesty is still a status surprise. Early honesty with a recommendation is the job.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Monitoring compares work to the baseline. Control acts — including integrated change control with a named authority. Use triggers and a standing cadence. 'Noted' is not a control action.",
          "Next: Closing processes — formal acceptance, handover, and the lessons that do not die in a folder called Final_v3.",
        ],
      },
    ],
  },

  "closing-processes": {
    intro:
      "Closing is the process group teams skip because they are already mentally on the next project. Work that 'just stops' leaves access open, invoices floating, and a customer who is not sure whether to clap. Formal close is a professional act, not a cake.",
    sections: [
      {
        id: "what-closing-includes",
        title: "What closing actually includes",
        body: [
          "Close the project or phase: confirm that accepted deliverables are complete, complete contractual close-out, release resources, archive records, and update organisational process assets. If any of those are missing, you have paused, not closed.",
          "Final acceptance is not a demo with applause. It is the documented handshake against the acceptance criteria you should have written in planning. 'They have been using it for weeks' is evidence of occupancy, not of close. Get the signature. Then stop spending.",
          "Phase close is initiating's twin. You hand over what this phase produced, capture what you learned, and re-authorise the next phase if the work continues. Treating a multi-phase programme as one endless execute is how lessons arrive three years late, wearing a different project name.",
        ],
      },
      {
        id: "lessons-that-get-used",
        title: "Lessons learned that someone might read",
        body: [
          "Write lessons as cause, effect, and advice — not as 'communication could have been better,' which is the corporate equivalent of weather. 'The vendor environment slipped two weeks because the access request sat with Security; next time raise the request at charter and put Security on the stakeholder register' is a lesson.",
          "Hold the session before the team evaporates. People are honest while the bruises are fresh and silent once they have a new Slack channel. Facilitation matters: silent write first, then cluster. The loudest person does not get to author the organisation's memory.",
          "Store them where the next PM will look — the process-asset library, the PMO, the team wiki you actually search. A lessons file on a laptop that is about to be wiped is how organisations pay for the same surprise twice and call it culture.",
        ],
      },
      {
        id: "handover-and-admin",
        title: "Handover and the unglamorous admin",
        body: [
          "Operations need more than a binary. They need runbooks, known defects, support contacts, and a named owner for the first month of 'it is live and on fire.' A handover meeting without artefacts is a story. Stories do not page anyone at 2 a.m.",
          "Admin close: accounts, licences, access, leftover budget, and the procurement trail. Leaving contractor access open is not generosity. It is a finding. Leaving money unreconciled is how finance invents a new stakeholder: you, next quarter.",
          "Tell the organisation it is finished. Stakeholders who are not told will continue to send requests into a team that no longer exists. Closure is a communication, not only a checklist. Then resist the urge to keep a 'tiny bit of support' that becomes an unpaid second project.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Closing accepts the work, hands it over, releases people and money, archives the record, and writes lessons someone can use. Process groups gave you a model for authorise–plan–do–check–close. The exam also uses domains and situations; this course did not promise a pass, and neither does a tidy close-out pack.",
          "You now have a working map of the PMBOK process model. Use it to place the next decision on a live project: which group am I in, and what does 'done' look like here? That question beats memorising a poster.",
        ],
      },
    ],
  },

  "evm-fundamentals": {
    intro:
      "Earned value management is three numbers that must not be allowed to merge in a status sentence: what you planned to have earned by now, what you have actually earned, and what you spent getting it. Mix them and you will report 'we are at 60%' to a sponsor who thinks that means time, money, and product in the same breath. It does not.",
    sections: [
      {
        id: "planned-value",
        title: "Planned value: the authorised work you meant to have finished",
        body: [
          "Planned value (PV) is the budgeted value of the work scheduled to be completed by the status date. If the performance measurement baseline said four of ten equal packages should be done by now, and the budget at completion (BAC) is £100,000, PV is £40,000. PV is a statement about the plan, not about reality.",
          "You cannot invent PV in the meeting. It comes from a baselined schedule with a budget spread across the work — often a time-phased cost baseline. If you have no baseline, you do not have earned value. You have a conversation and a spreadsheet that agrees with whoever last edited it.",
          "PV moves only when the baseline moves through change control, or when the calendar reaches the next planned chunk of work. It does not move because the team feels busy. Feelings do not have a BAC.",
        ],
      },
      {
        id: "ev-and-ac",
        title: "Earned value and actual cost: progress versus the receipt",
        body: [
          "Earned value (EV) is the budgeted value of the work actually completed. If those ten packages are £10,000 each and three are done to the agreed definition of done, EV is £30,000 — even if you are in week four, even if people worked weekends. EV is about product, measured in the same money units as the baseline. It is not hours. It is not optimism.",
          "Actual cost (AC) is what you spent to achieve that EV. Labour, vendors, licences — the real outflow. If you have spent £35,000 to complete those three packages, AC is £35,000. AC does not care what you planned to spend. Receipts are stubborn like that.",
          "The usual smear is reporting '% complete' without saying of what. Percent of calendar, percent of budget spent, and percent of scope done are three different stories. EV forces you to pick the third and price it at budgeted rates. That is the whole trick. It is not mysticism. It is refusing to let spend impersonate progress.",
        ],
      },
      {
        id: "walkthrough",
        title: "A small walkthrough you can reuse",
        body: [
          "Take a project with BAC = £100,000, ten equal work packages, ten weeks. At the end of week five the plan said five packages done, so PV = £50,000. The team has finished four packages to the definition of done, so EV = £40,000. Finance shows £50,000 spent, so AC = £50,000.",
          "In English: you are halfway through the calendar and halfway through the budget, but only 40% of the authorised work is done. You have spent the money of five packages to buy four. Anyone who reports 'we are at 50%' without those three letters is choosing a comforting denominator.",
          "Hold these three figures still. The next lessons will subtract and divide them. If you cannot explain PV, EV, and AC on a whiteboard with round numbers, do not proceed to indexes. An index built on a muddled EV is a confident error.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "PV is the budgeted value of work scheduled by now. EV is the budgeted value of work actually finished. AC is what you spent. Same units, three meanings. Our running example: PV £50,000, EV £40,000, AC £50,000, BAC £100,000.",
          "Next: cost and schedule variance — subtraction that tells you whether the gap is money, time, or both.",
        ],
      },
    ],
  },

  "variances": {
    intro:
      "A variance is a subtraction with a sign that means something. Cost variance and schedule variance are how you stop saying 'a bit behind' as if it were a measurement. Negative is unfavourable for both. The arithmetic is not the hard part. The hard part is not rounding the story back into a fog.",
    sections: [
      {
        id: "cost-variance",
        title: "Cost variance: EV minus AC",
        body: [
          "Cost variance (CV) = EV − AC. Using the running figures: £40,000 − £50,000 = −£10,000. You have earned ten thousand less than you spent. That is over budget on the work done, not 'the budget is half gone so we are fine.' Half gone with 40% earned is the opposite of fine.",
          "Positive CV means you delivered that work for less than its budgeted value. Enjoy it briefly, then ask why — cheaper vendor, skipped test, or a definition of done that quietly shrank. A pretty CV that was bought by undeclared scope cut is a fraud with a green cell.",
          "CV is about the work completed, not the work remaining. A healthy CV on a thin slice of the project can still hide a disaster in the next package. Report it with the percentage complete so nobody thinks a small sample is the whole novel.",
        ],
      },
      {
        id: "schedule-variance",
        title: "Schedule variance: EV minus PV",
        body: [
          "Schedule variance (SV) = EV − PV. Here: £40,000 − £50,000 = −£10,000. You have earned ten thousand less than the plan said you would have earned by this date. That is behind schedule in money units, which offends people who wanted days. It is still the standard measure because it uses the same currency as the baseline.",
          "SV does not tell you whether the critical path is late. A team can earn value on fat, easy packages while the one task that gates go-live sits untouched. Use SV as a portfolio health number, then look at the network. Treating SV as a substitute for the critical path is how late projects have cheerful charts.",
          "Positive SV means more budgeted work is done than was scheduled by now — ahead. Same scepticism applies: did you sequence the valuable work, or the work that was easy to tick? Earned value rewards completion. It does not automatically reward completion of the right thing.",
        ],
      },
      {
        id: "read-the-pair",
        title: "Read CV and SV as a pair",
        body: [
          "Both negative: over budget and behind — our example. You are late and expensive on what you have finished. That is a delivery problem, not a reporting problem. Both positive: ahead and under — rare, and worth checking you have not forgotten a chunk of scope.",
          "Negative CV, positive SV: you bought speed with money — overtime, extra vendors, crashing. That can be a conscious trade. Say so. Positive CV, negative SV: you are cheap and late, which often means the team is under-resourced or blocked, not 'efficient.' Cheap delay is still delay.",
          "Zero is on plan, not a moral victory. And a variance without a date is a rumour. Always pair the numbers with the status date and the BAC so a sponsor can see the scale. −£10,000 on a £100,000 project is not the same conversation as −£10,000 on a £4 million programme. The formula does not know that. You do.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "CV = EV − AC. SV = EV − PV. Negative is unfavourable. Our example is −£10,000 on both: overspent on the work done, and behind the plan. Read them together, then check the critical path before you celebrate or panic.",
          "Next: performance indexes — the same figures as ratios, which is how you talk about efficiency instead of a one-off gap.",
        ],
      },
    ],
  },

  "performance-indexes": {
    intro:
      "Indexes turn the same three numbers into efficiency. A variance says how large the gap is. An index says how well you convert spend and time into earned work — which is what you need if anyone is about to ask whether the rest of the project will behave.",
    sections: [
      {
        id: "cpi",
        title: "CPI: value earned per pound spent",
        body: [
          "Cost performance index (CPI) = EV / AC. In the example: £40,000 / £50,000 = 0.80. You are getting 80 pence of budgeted value for every pound you spend. A CPI of 1.00 is on plan. Above 1 is better cost efficiency; below 1 is worse. This is not a vibe. It is a ratio.",
          "Sponsors understand 'we get eighty pence in the pound' faster than they understand −£10,000 CV, because the ratio scales. The same CPI on the next £50,000 of spend is a forecast, which is why the next lesson exists. Do not call 0.80 'broadly on track' unless you enjoy being asked to define 'broadly' in a steering pack.",
          "CPI can lie if EV is inflated — percent-complete guesses, partial credit for work that is not done, or a baseline that already hid contingency in every package. Garbage EV divided by honest AC is still garbage. Protect the definition of done or the index becomes interior decoration.",
        ],
      },
      {
        id: "spi",
        title: "SPI: value earned versus value planned",
        body: [
          "Schedule performance index (SPI) = EV / PV. Here: £40,000 / £50,000 = 0.80. You are earning value at 80% of the planned rate. Same rule: 1.00 on plan, above 1 ahead of the plan's earning rate, below 1 behind.",
          "SPI shares SV's blind spot. You can have a respectable SPI while the critical path is dead. You can have a weak SPI because you scheduled a mountain of work in a month the team was never going to swallow — a planning error wearing a performance costume. Read SPI, then read the network.",
          "Near the end of a project SPI tends to crawl toward 1.00 because almost everything planned has either been done or re-baselined. That late-project hug is not a recovery miracle. If you need schedule insight in the last stretch, look at remaining duration on the critical path, not at an index that is running out of unfinished planned value to compare against.",
        ],
      },
      {
        id: "using-indexes",
        title: "Use the indexes; do not worship them",
        body: [
          "A useful pair: CPI for money efficiency, SPI for earning rate, both dated. 'CPI 0.80, SPI 0.80 at week five of ten, BAC £100,000' is a status sentence. 'Indexes are a bit soft' is a weather report. Add the trend if you have two or three status dates — a CPI falling from 0.95 to 0.80 is a different story from a stable 0.80 you already funded.",
          "Do not average your way to comfort. A workstream at 1.20 and another at 0.50 is not 'about 0.85, so nearly fine.' The second workstream is a project. Report the aggregate and the offender.",
          "Indexes below 1 are not a moral failing and indexes above 1 are not a personality. They are prompts: why, is it typical, and what will we change? If nothing will change, you are collecting decimals. The next lesson is what you do with them when someone asks what the project will cost.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "CPI = EV / AC. SPI = EV / PV. Our example is 0.80 and 0.80: eighty pence in the pound, and 80% of the planned earning rate. One is not 'on track.' Protect EV quality or the ratios are theatre.",
          "Next: forecasting EAC — three formulae, three assumptions, and the damage done when you pick the cheerful one by habit.",
        ],
      },
    ],
  },

  "forecasting-eac": {
    intro:
      "Estimate at completion (EAC) is a forecast of what the whole project will cost if we are honest about the remaining work. There is not one true formula. There are assumptions. Pick the assumption on purpose or the forecast will quietly assume the second half of the project will be a saint.",
    sections: [
      {
        id: "eac-atypical",
        title: "EAC = AC + BAC − EV — when the variance was a one-off",
        body: [
          "This formula says: keep the money already spent, then finish the remaining work at the original budgeted rate. Remaining work is BAC − EV. Add AC. In the example: £50,000 + £100,000 − £40,000 = £110,000. You overran by £10,000 on the work done; you claim you will not do that again.",
          "Use it when the overrun had a cause that is finished — a one-off vendor bill, a storm, a mistaken purchase — and the remaining work looks like the original estimate. That is a strong claim. Write the cause down. If you cannot name why the past will not repeat, you are not using this formula. You are hoping with algebra.",
          "Estimate to complete (ETC) under this assumption is BAC − EV = £60,000. EAC is just AC + ETC. If finance asks 'how much more will you need,' answer with ETC and the assumption, not with a shrug and a contingency shaped like a guess.",
        ],
      },
      {
        id: "eac-typical",
        title: "EAC = BAC / CPI — when this efficiency is the new normal",
        body: [
          "If the cost efficiency you have demonstrated is typical of the remaining work, the whole job will cost BAC / CPI. Here: £100,000 / 0.80 = £125,000. You will keep getting 80 pence in the pound until the end. ETC is then EAC − AC = £75,000, not the original remaining £60,000.",
          "This is the default when nobody can point to a structural change — no new team, no de-risked design, no removed scope. Past performance is the evidence. Teams dislike this formula because it is rude. That is a feature. A CPI of 0.80 that you 'expect to improve' without a named change is a novel, not a forecast.",
          "If CPI is still unstable — week two of a ten-week project, or a single ugly invoice — do not treat this EAC as destiny. Say the sample is thin. A ratio from a small EV is a weather vane in a cupboard.",
        ],
      },
      {
        id: "eac-both",
        title: "EAC = AC + (BAC − EV) / (CPI × SPI) — when time is costing money too",
        body: [
          "When cost inefficiency and schedule inefficiency will both persist — late work that also burns money, overtime, extended vendor retainers — divide the remaining budgeted work by the product of the indexes. CPI × SPI here is 0.80 × 0.80 = 0.64. Remaining £60,000 / 0.64 = £93,750. Add AC: EAC = £50,000 + £93,750 = £143,750.",
          "Use this when being late makes the remaining work more expensive, not merely later. A delayed go-live that keeps a contractor team on the clock is the usual suspect. If schedule delay does not change cost (a fixed-price package already paid), this formula over-punishes. Do not use it to look 'rigorous.' Use it when the assumption is true.",
          "Variance at completion (VAC) = BAC − EAC. Under the three assumptions you get −£10,000, −£25,000, and −£43,750. Put the assumption in the sentence: 'If the one-off overrun does not repeat, EAC is £110k. If current cost efficiency persists, £125k. If late-and-expensive persists, about £144k.' Then ask the sponsor which future they are funding. That is a decision. A single EAC with no label is a magic trick.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "AC + BAC − EV assumes remaining work at the original rate. BAC / CPI assumes current cost efficiency continues. AC + (BAC − EV) / (CPI × SPI) assumes cost and schedule inefficiency both keep biting. Our example forecasts £110k, £125k, and £143,750. Name the assumption.",
          "Next: reporting EVM — the same numbers in English a sponsor can use, without a formula sheet for a security blanket.",
        ],
      },
    ],
  },

  "reporting-evm": {
    intro:
      "An earned-value report that leads with formulae is a worksheet, not a status. Sponsors funded an outcome. Translate the indexes into a sentence about money, progress, and the decision you need. If they wanted a tutorial on CPI they would have enrolled.",
    sections: [
      {
        id: "english-first",
        title: "Lead with English, park the algebra",
        body: [
          "Start with the story: 'At week five of ten we have completed 40% of the authorised work, spent 50% of the budget, and planned to be at 50% complete. We are behind and overspent on the work done. CPI is 0.80 — eighty pence in the pound. SPI is 0.80.' Then, if anyone asks, show PV, EV, and AC. Most people will not ask. They will ask what happens next.",
          "Name the forecast with its assumption in the same breath. 'If this cost rate continues, we finish at about £125,000 against a £100,000 BAC — a £25,000 overrun. If the £10,000 overrun was a one-off and we return to plan rates, £110,000. If being late keeps costing us, closer to £144,000.' Three futures beat one fake-precise number.",
          "Put the decision on the page. 'I need you to choose: recover schedule with overtime (that will worsen CPI), descope two packages, or accept a later date and the £125k forecast.' A report that ends with 'we are monitoring' has told them nothing they could not have guessed from your face.",
        ],
      },
      {
        id: "what-not-to-do",
        title: "What not to put in the pack",
        body: [
          "Do not hide a 0.80 CPI under a green RAG because the milestone is still 'possible' if nobody sleeps. RAG should match the forecast you are willing to sign. Amber that lasts three months without a change request is red with better manners.",
          "Do not report EV you cannot defend. Partial credit on a half-built package, or '% complete' from a team lead who is also asking for more time, will be discovered the first time a sponsor traces a package. One inflated EV poisons every index downstream. That is not a rounding issue. That is a credibility issue.",
          "Do not dump every control account. Leadership needs movement, the few indexes that change a decision, and the exception. A twelve-tab workbook is how you train people to read only the cover slide — and then blame you when the cover slide was cheerful.",
        ],
      },
      {
        id: "cadence-and-trust",
        title: "A cadence that keeps the numbers honest",
        body: [
          "Calculate on a standing date with a frozen status of work — the same definition of done each time. Midweek 'quick' EV updates that use a different percent-complete rule are how trends become modern art. Consistency beats freshness.",
          "Show the trend, not only the latest point. CPI 0.80 after 0.92 and 0.86 is a slide. CPI 0.80 after 0.79 and 0.80 is a stable, unpleasant fact. The management response is different. A sparkline earns more trust than a paragraph that says 'challenging.'",
          "When you re-baseline, say so in the report. Indexes that jump back to 1.00 because the plan was rewritten are not a recovery. They are a new exam with the answers filled in. Re-baselining can be honest and necessary. Pretending it was performance is how EVM gets a reputation as fiction.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Tell the sponsor what is done, what was planned, what was spent, what that means in pence per pound and earning rate, which EAC assumption you are using, and what decision you need. Park the formulae below the fold. Never paint a 0.80 as green.",
          "You now have a working EVM practice: PV, EV, AC, variances, indexes, forecasts, and a report in English. Run the walkthrough on a live workstream this week — even a small one. Four honest numbers beat a status adjective.",
        ],
      },
    ],
  },

  "lean-principles": {
    intro:
      "Lean is a bias about waste, not a board tool and not a personality. Value is what the customer will pay for or wait for. Everything else is a candidate for removal — including the heroic utilisation that keeps everyone busy while the work sits. Busy is a local optimum. Flow is the point.",
    sections: [
      {
        id: "value-and-waste",
        title: "Value, and the wastes that impersonate it",
        body: [
          "Start with the value stream: the steps a piece of work actually takes from request to usable result. Walk it. Time how long it sits versus how long someone touches it. The usual finding is that most of the calendar is waiting — for review, for a specialist, for a decision, for an environment that is 'nearly ready.'",
          "The classic wastes are easy to spot once you are looking: transporting work between queues, inventory of half-finished items, motion and hand-off theatre, waiting, overproduction (starting work nobody asked for), over-processing (the gold-plated form), and defects that come back. Unused talent — people who can see the fix and are not allowed to make it — is the waste organisations add when they treat staff as pairs of hands.",
          "Do not hunt waste with a witch trial. Ask what delay or rework the customer would notice. A daily status meeting that produces no decision is over-processing. A backlog of started stories is inventory. A defect found in production is the expensive edition of a miss that could have been a cheaper review. Name the waste in the work, not in the people.",
        ],
      },
      {
        id: "flow-over-utilisation",
        title: "Flow beats utilisation theatre",
        body: [
          "A team at 100% utilisation has no slack to finish, review, or absorb a blocker. Work then queues. Queues grow cycle time. Cycle time growth is how you get a department that is fully booked and a customer who is still waiting. That is not a paradox. That is a full motorway.",
          "Optimise the stream, not the local hero. A designer who is 'efficient' because they keep starting new files while development is clogged is producing inventory. Reward finishing, not starting. If your metrics clap for utilisation, you will get utilisation, and the waste will move to the next column and hide.",
          "Make work visible before you 'improve' it. Invisible queues — in inboxes, in 'I am just finishing something' — are how waste denies it exists. The next lesson is the system that makes the queue undeniable. Lean without visibility is a sermon.",
        ],
      },
      {
        id: "respect-and-pull",
        title: "Respect for people, and stop pushing work in",
        body: [
          "Lean without respect is just cost-cutting in a nicer font. The people who do the work can see the waste. Your job is to give them a way to say so and a policy that lets them stop starting. If only the PM is allowed to name a bottleneck, you have a reporting culture, not a lean one.",
          "Push systems assign work because capacity exists or a date exists: 'you are free, take this.' Pull systems start work when the downstream step has a slot. Push maximises starting. Pull protects finishing. Most project plans are push documents. That is not a crime. Pretending a pushed start date is a pull system is.",
          "One improvement at a time is already a lean habit. If you remove five wastes in a week you will not know which change helped. Stabilise, see, then change. The board, the limit, and the metrics exist to make that possible — they are not the philosophy. Do not buy stickers and call it lean.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Lean hunts waste in the value stream and prefers flow over looking busy. The usual wastes hide as inventory, waiting, defects, and unused judgement. Pull starts work when there is a slot; push starts work because a plan is lonely.",
          "Next: Kanban systems — making the work and the queue visible so pull is a rule, not a mood.",
        ],
      },
    ],
  },

  "kanban-systems": {
    intro:
      "A Kanban system is a visible workflow with an explicit policy for how work enters and moves. A board that is a wallpaper of tickets is not a system. It is a to-do list that learned to stand up. The cards are not the point. The agreement is the point.",
    sections: [
      {
        id: "visualise-the-real-flow",
        title: "Visualise the flow you actually have",
        body: [
          "Map columns to the real states work sits in — Ready, In development, Review, Waiting on vendor, Done — not the three you copied from a template. If work regularly vanishes into 'with Dave,' Dave is a column. Hidden states are hidden queues.",
          "Each card should be a single unit you could finish and count: a story, a change, a ticket. Cards that are secret projects in a trench coat destroy every metric you will meet in two lessons. Split them. If you cannot split them, you do not have an item. You have a hope.",
          "Policies belong on the board: what 'Ready' means, what 'Done' means, who can pull, what happens when a card is blocked. A board without policies is interior decoration. People will invent private rules, then argue about why the other column is being unreasonable.",
        ],
      },
      {
        id: "pull-not-push",
        title: "Pull: start because there is a slot, not because there is a Monday",
        body: [
          "In a pull system, a person takes the next ready item when they have capacity in their column — and only then. Nobody assigns six things on Monday because the sprint fairy arrived. Assignment is push. Pull is a signal: there is space, so replenish.",
          "Replenishment is a meeting with a purpose: fill the Ready column up to its limit, in priority order, with items that meet the entry policy. It is not a status tour. If replenishment becomes a two-hour wander through the backlog, you have reinvented sprint planning and forgotten the limit.",
          "Blocked work stays visible. A card that sits in a 'blocked' swimlane for a fortnight is a management failure on display, which is the point. Moving it back to 'Ready' to tidy the board is how systems lie. Kanban is rude on purpose. Rude and true beats polite and late.",
        ],
      },
      {
        id: "system-not-team-hobby",
        title: "It is a system for the stream, not a team hobby",
        body: [
          "Kanban can sit on a Scrum team, a service desk, or a portfolio. The mechanics do not require sprints. They require a stream of similar work, a visible path, and a willingness to limit what is mid-flight. If your work is a one-off construction sequence with no repeating flow, you may want a network diagram more than a board. Tools are not moral.",
          "Classes of service — expedite, standard, fixed date — are policies for when something may break the usual order. An expedite lane with no limit is a hole in the system. Everything becomes expedite by week three. If leadership wants a fast lane, they also own the rule for how rare it is.",
          "Do not start by buying a tool. Start with the states, the policies, and a physical or simple digital board the team will actually update. A neglected Jira project is still a neglected system. The next lesson is the policy that makes the board more than a picture: the WIP limit.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "A Kanban system visualises real states, attaches explicit policies, and pulls work when there is a slot. Cards are countable items. Hidden queues and unlimited expedite lanes are how boards become fiction.",
          "Next: WIP limits — the policy that makes pull real, and the slogan that fails the first time someone is anxious.",
        ],
      },
    ],
  },

  "wip-limits": {
    intro:
      "A work-in-progress limit is a policy: a maximum number of items allowed in a state, enforced when it is inconvenient. It is not a slogan on a wiki, and it is not 'we try not to start too much.' If you break the limit whenever a sponsor is in the room, you have a poster.",
    sections: [
      {
        id: "why-limits-speed-you",
        title: "Why a limit makes work finish faster",
        body: [
          "Uncapped WIP is how a team starts twelve things and finishes none. Each item waits on review, on a specialist, on a decision. People context-switch and call it collaboration. Calendar time per item grows even as utilisation looks heroic. The motorway is full; nothing is arriving.",
          "A limit forces a choice: finish or help finish, rather than open a new card. That is uncomfortable in organisations that reward visible starting. It is also how review queues shrink and blockers become the main event instead of a footnote. You cannot hide a bottleneck when the column is full and the policy says stop.",
          "Little's Law, in the form you can say aloud: if you keep more items in play, and you do not magically raise throughput, each item spends longer in the system. Cut WIP and, if throughput holds, cycle time falls. That is not a slogan. It is a relationship you will measure in the next lesson. The limit is how you choose the WIP term on purpose.",
        ],
      },
      {
        id: "set-and-enforce",
        title: "Set a limit you can defend, then defend it",
        body: [
          "Start from the real column, not a blog post. Count how many items already sit in 'In development' in a typical week. Set the limit at or slightly below that, or at roughly the number of people who can actually work that state — then watch. A limit of 1 on a team of eight is a stunt. A limit of 40 is a compliment to chaos.",
          "Write it on the column. When someone wants to pull past it, the answer is not 'just this once' unless you have a class-of-service rule for that once. The adult move is: swarm the stuck item, split the card, or escalate the blocker. Starting a fifteenth item is how you vote against the policy while nodding in the retrospective.",
          "Limits are experiments. If a column is always empty, the limit may be too tight or the upstream policy is starving the system. If a column is always slammed against the cap and items age, you found a constraint — capacity, skill, or wait on another team. Change one thing. Recalibrate with a week of data, not with a feeling in a crisis.",
        ],
      },
      {
        id: "politics-of-limits",
        title: "The politics: who is allowed to break the rule",
        body: [
          "Sponsors will ask you to 'just start' the urgent extra. Translate: they are asking to raise WIP and therefore cycle time on everything else, including their first urgent extra. Say that in English. Offer a swap — what stops so this can start — or an explicit temporary limit raise with an end date. Silent yes is how policies die.",
          "Personal WIP matters as much as column WIP. A person with six 'in progress' items is a private push system. Pairing, swarming, and 'only one active card' are policies too. If only the board is limited and every human is a hoarder, you have decorated the constraint.",
          "Do not use a limit to punish. Use it to make the constraint discussable. A team that hits the cap and holds a five-minute huddle is using the system. A PM who uses the cap to scold is using a ruler. You will get compliance and hidden work in drawers.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "A WIP limit is an enforced maximum, set from the real system, adjusted with data. It exists so you finish and expose bottlenecks. Breaking it without a class-of-service rule is how you return to a full motorway.",
          "Next: flow metrics — cycle time, lead time, throughput, the cumulative flow diagram, and Little's Law as something you can see, not recite.",
        ],
      },
    ],
  },

  "flow-metrics": {
    intro:
      "Flow metrics tell you how work moves, not how busy people looked. Cycle time, lead time, and throughput are different questions. A cumulative flow diagram makes the queues visible. Little's Law ties them together so you cannot brag about throughput while sitting on a pile of half-done work and calling it a pipeline.",
    sections: [
      {
        id: "three-clocks",
        title: "Cycle time, lead time, throughput — stop using them as synonyms",
        body: [
          "Cycle time is how long an item spends from the moment the team starts it until it meets done. Lead time is how long the customer waits from request (or from Ready) until done. Throughput is how many items finish per week or per sprint. If you report only one, say which. 'Faster' without a noun is advertising.",
          "A short cycle time with a long lead time means work waits in a queue before anyone starts — a Ready column that is a warehouse. A healthy cycle time with miserable throughput means you are finishing rarely, perhaps because items are huge or the system is blocked. Do not celebrate a fast cycle on the only ticket that moved.",
          "Measure from the same policies you wrote on the board. If 'start' means three different things, your cycle-time chart is a short story collection. Ageing work — items whose clocks are still running — is a leading indicator. The item that has sat in Review for three weeks will not become faster because you averaged the ones that slipped through.",
        ],
      },
      {
        id: "cfd",
        title: "The cumulative flow diagram: queues as a picture",
        body: [
          "A CFD stacks, over time, how many items are in each state. The top line is arrivals into the system; the bands are the queues; the bottom growth is done. Parallel, stable bands mean arrivals and departures roughly match. A band that widens is a queue growing — usually WIP rising in that state.",
          "Read it left to right. A sudden vertical jump in arrivals is a push event: someone dumped a batch. A flat 'Done' band while other bands fatten is a system that is starting and not finishing. That picture will end an argument faster than your speech about focus. Bring the picture.",
          "Do not need a perfect tool. A weekly count per column on a spreadsheet will draw the same lesson. Beauty is optional. A widening Review band is not. If the CFD is only opened at the quarterly showcase, you are using it as art.",
        ],
      },
      {
        id: "littles-law",
        title: "Little's Law without the textbook voice",
        body: [
          "In a stable system, average WIP equals throughput times average cycle time. Rearranged: average cycle time is WIP divided by throughput. Ten items in progress, two finishing a week, and you should not be surprised if items spend about five weeks in the machine. You can argue with the team. You cannot argue with the relationship for long.",
          "Unstable systems — wildly varying arrivals, items that change size, lots of cancelled work — make the averages wobble. That does not make the idea useless. It tells you to stop pretending a single average is a promise. Use a range: half our items finish inside n days; some take much longer. The tail is where sponsors get hurt.",
          "Management levers follow the law. To cut cycle time you reduce WIP or raise throughput (or both). Raising throughput without shrinking item size or removing a bottleneck is a wish. Reducing WIP is the lever you already have a policy for. If cycle time is bad and WIP is high, you do not have a mystery. You have a choice you have not made.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Cycle time is start to done; lead time is request to done; throughput is finishes per period. The CFD shows growing queues as widening bands. Little's Law: more WIP at the same throughput means longer cycle time. Measure from written policies.",
          "Next: continuous improvement — kaizen, PDCA, root cause, and one change at a time so you can tell what worked. That lesson is written for flow systems and for quality systems; the loop is the same.",
        ],
      },
    ],
  },

  "continuous-improvement": {
    intro:
      "Continuous improvement is a loop, not a suggestion box that empties into a graveyard. Whether you are evolving a flow system or a quality system, the job is the same: see a defect or a delay, find a cause, change one thing, check whether the system actually moved, then standardise or try again. A mural of sticky notes is not kaizen. It is stationery.",
    sections: [
      {
        id: "kaizen-and-the-system",
        title: "Kaizen: evolve the system, not the heroics",
        body: [
          "Kaizen is small, ongoing change by the people who do the work — to the process, the policy, the definition of done, the hand-off, the check. It is not a transformation programme with a logo, and it is not asking individuals to 'be more careful' after a miss. If the system produces the error, coaching a person is how you keep the error and add shame.",
          "Flow teams improve the board, the limits, the entry criteria, the review SLA. Quality teams improve the standard, the inspection point, the supplier check, the training that actually matches the work. Same idea: the system is allowed to change. A process you cannot edit is a museum. Museums do not ship.",
          "Respect shows up as time to improve. A team at 100% utilisation will not kaizen; they will apologise. Put improvement on the capacity plan — a slice of the week, a slot on the board — or admit you only wanted the poster. Unused talent was a waste two lessons ago. It is also a quality failure: the people who saw the root cause were not allowed to act.",
        ],
      },
      {
        id: "pdca-and-root-cause",
        title: "PDCA, and root cause before you add a step",
        body: [
          "Plan–Do–Check–Act is the smallest honest loop. Plan a change and a measure. Do it on a limited slice. Check the measure and the side effects. Act: adopt, adjust, or drop. Skipping Check is how organisations collect initiatives. Skipping Act is how they run the same pilot until the sponsor changes.",
          "Root cause before corrective action. Five whys, a fishbone, a look at the last three incidents — whatever gets you past the first convenient villain. 'Add an approval' is the most popular non-cause in corporate life. Sometimes the cause is an unclear standard, a tool that cannot do the job, a WIP policy that forces haste, or a measure that rewards starting. Fix that. Do not grow a process garden on top of a guess.",
          "Corrective action repairs this instance and the condition that produced it. Preventive action stops a related miss you have not had yet. Both need an owner and a check date. 'Lessons learned: communicate better' is neither. It is a toast. Quality control found the defect; improvement is what you do to the system so the next lot does not fail the same way.",
        ],
      },
      {
        id: "one-change",
        title: "One improvement at a time — then look",
        body: [
          "If you change the WIP limit, the review policy, and the vendor SLA in the same week, you have anecdotes, not evidence. Pick the constraint that is hurting now — the ageing Review band, the repeating defect type, the rework loop — and change one policy. Hold the others still long enough to see the CFD, the escape rate, or the cycle-time tail move.",
          "Retrospectives, quality huddles, and kaizen events fail the same way: twenty actions, no owners, no Check. Leave with one change, one measure, one date. Park the rest on a backlog of improvements that is allowed to be short. A long improvement backlog is inventory. You already know what inventory does to cycle time.",
          "Standardise what worked so the improvement is not a folk memory. Update the working agreement, the quality procedure, the board policy, the checklist. Then the next person does not have to be a hero. If you cannot point to the written change, you did not finish Act. You had a good conversation. Conversations do not survive a reorg.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Kaizen changes the system in small steps. PDCA keeps you honest. Root cause before you add a gate. One improvement, one measure, then write down what you adopted. The loop serves lean flow and quality alike — waste, defects, and delay are cousins.",
          "If this closes Kanban & Lean Flow, take one policy change onto a live board this week. If you are in Quality Management, the same loop is what you will report next: a metric without a change story is decoration. Either way, do not collect twenty actions. Finish one.",
        ],
      },
    ],
  },
}
