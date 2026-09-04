import type { LessonBodies } from "./types"

export const scrumScheduleVendorBodies: LessonBodies = {
  "the-scrum-master-role": {
    intro:
      "A Scrum Master who assigns work, chases status, and 'owns the date' is a project manager in a cheaper hoodie. The role is servant-leader and process coach: you improve the system the team works in, you do not become the system.",
    sections: [
      {
        id: "servant-leader-not-pm",
        title: "Servant-leader, not a disguised command-and-control PM",
        body: [
          "The Scrum Master is accountable for Scrum being understood and enacted. That means coaching the team, the Product Owner, and the organisation on the rules, the artefacts, and the empiricism — transparency, inspection, adaptation. It does not mean you are the person who decides what gets built or who does which ticket.",
          "Servant-leadership here is specific, not saintly. You serve the Developers by protecting the Sprint Goal and clearing what they cannot clear. You serve the Product Owner by helping them manage a backlog that can actually be planned. You serve the organisation by making impediments visible instead of absorbing them as personal heroics.",
          "If the team waits for you to start the day, you have trained them to. A useful test: if you disappeared for a week, would the events still happen, the board still move, and the Sprint Goal still be the conversation? If the answer is no, you have been managing, not coaching.",
        ],
      },
      {
        id: "accountabilities",
        title: "What you are accountable for — and what you are not",
        body: [
          "You are accountable for the effectiveness of the Scrum Team: that planning produces a forecast and a goal, that the Daily Scrum is a planning meeting for the Developers, that the Review inspects a real Increment, and that the Retrospective produces a change the team will actually try. Effectiveness is a coaching outcome, not a status colour you paint on afterwards.",
          "You are not accountable for the product's commercial success. That sits with the Product Owner. You are not accountable for individual technical output. That sits with the Developers. Borrowing those accountabilities because the room is anxious is how the role collapses into a coordinator with a Scrum sticker.",
          "Authority is mostly influence. You can insist on the framework — timeboxes, a Definition of Done, a Sprint that does not silently extend. You cannot insist on a person's task list. When a stakeholder asks you to 'just make them go faster,' the professional answer is to inspect the system: WIP, dependencies, unclear backlog, missing skills. Speed is a symptom. Your job is the cause.",
        ],
      },
      {
        id: "authority-trap",
        title: "The authority trap",
        body: [
          "Organisations hire Scrum Masters and then ask for a RAID log, a resource plan, and a percentage-complete slide by Friday. Some of that reporting may be a real organisational need. Doing it by turning the Daily Scrum into your data-collection ritual is how you kill the only fifteen minutes the team has to replan their own work.",
          "The other trap is becoming the team's parent. They raise a flaky environment; you raise a ticket; they never learn the path. Coach the first time: who owns the environment, what is the service level, how do we escalate. Then step back. An impediment you permanently own is a job you have invented for yourself.",
          "Hold the line on the title. If the organisation needs a delivery manager, it should hire one and be honest. A Scrum Master who accepts command-and-control targets while preaching self-organisation is running two operating systems. The team will believe the one with the consequences.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "The Scrum Master is a servant-leader and process coach: accountable for Scrum's effectiveness, not for assigning work or owning the product. Serve the team, the Product Owner, and the organisation. Do not borrow other people's accountabilities because the room is nervous.",
          "Next you will put the role into the calendar — facilitating the Scrum events so they produce decisions and increments, not a well-attended theatre of updates.",
        ],
      },
    ],
  },

  "facilitating-ceremonies": {
    intro:
      "Scrum events are not ceremonies you attend to prove you are Agile. Each one has a job: forecast, replan, inspect the product, or improve the system. Facilitation is making that job happen in the timebox — including when the loudest person in the room would rather it did not.",
    sections: [
      {
        id: "events-have-jobs",
        title: "Each event has a job. Do not freelance.",
        body: [
          "Sprint Planning answers what the Sprint is for and how the work will start. The output is a Sprint Goal and a Sprint Backlog the Developers can stand behind. If planning becomes a two-hour argument about story points and nobody can say the goal in one sentence, you facilitated a scoring session, not a plan.",
          "The Daily Scrum is a 15-minute event for the Developers to inspect progress toward the Sprint Goal and adapt the day's plan. It is not a status report to you, the Product Owner, or a visiting director. If people speak to your face and then wait for instructions, stop the format and return the meeting to the board and the goal.",
          "The Sprint Review inspects the Increment with stakeholders and adapts the Product Backlog. Demonstration is a means. Feedback that changes the backlog is the point. The Retrospective inspects how the team worked and produces a small number of improvements they will try. A retro that ends with twenty sticky notes and zero owners is a group sigh. You are there to leave with a change.",
        ],
      },
      {
        id: "facilitate-not-perform",
        title: "Facilitate the room. Do not perform in it.",
        body: [
          "Facilitation is structure, airtime, and a written output. Open with the purpose and the timebox. Put work on a wall or a board, not in a monologue. When two people debate while eight watch, split the conversation or park it. Your success metric is whether the event produced its artefact — a goal, an adapted plan, a backlog change, an experiment — not whether you sounded wise.",
          "Protect the timebox without being a scold. A planning session that overruns because the backlog was not ready is information: refinement failed upstream. End on time and make that the impediment. Stretching every event 'just this once' teaches the organisation that Scrum time is optional and your calendar is not.",
          "Invite the right people and keep the wrong purpose out. Stakeholders belong in the Review. They do not belong in the Daily Scrum to 'get a feel.' The Product Owner belongs in Planning and the Review; they do not run the Retrospective. If a senior visitor turns an event into a performance review, you intervene. That is the job. Politeness that lets the framework die is not professionalism.",
        ],
      },
      {
        id: "failure-modes",
        title: "The failure modes you will meet in week two",
        body: [
          "Planning as commitment theatre: the team is pressured into a forecast they do not believe, then spend the Sprint quietly dropping work. Facilitate honesty. A smaller forecast that lands beats a heroic board that lies until Thursday.",
          "The Daily Scrum as a tour of tickets. People recite yesterday without looking at the Sprint Goal. Interrupt the ritual: 'Are we going to meet the goal? What is the one thing that would make that false?' If the answer is a dependency nobody owns, you now have an impediment, which is a better use of the sixteenth minute than another round of 'I will keep working on my tickets.'",
          "Skipped or shortened Reviews and Retrospectives under deadline pressure. That is eating the seed corn. The Review is how the product stays pointed at value. The Retrospective is the only standing appointment the team has to get less stupid. Cutting them to 'save time' is how you run the same Sprint until people leave.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Facilitate for the event's job: a Sprint Goal and backlog, a daily replan, an inspected Increment, a tried improvement. Hold the timebox. Keep status-seeking visitors from colonising the Daily Scrum. End with artefacts, not vibes.",
          "Next: removing impediments — how to tell a blocker from a complaint, and how to clear it without becoming the team's permanent concierge.",
        ],
      },
    ],
  },

  "removing-impediments": {
    intro:
      "An impediment is something slowing or stopping the team that they cannot reasonably remove themselves. An issue is something that has already happened and needs managing. Mixing the two is how you get a 'blocker' column that is really a mood.",
    sections: [
      {
        id: "impediment-vs-issue",
        title: "Impediments, issues, and things the team should own",
        body: [
          "An impediment is an obstacle to progress toward the Sprint Goal: a locked environment, a missing decision, a specialist who will not answer, a policy that forbids the only sensible test approach. It is still uncertain in the sense that it might be cleared in time — which is why you treat it with an owner, a next action, and a clock.",
          "An issue has landed. The environment is down. The vendor missed the drop. The decision was 'no.' Promote it. Issues get actions and dates, not a hopeful sticker on the impediment list so the count looks stable. The Scrum Master still helps, but the language matters: you are now recovering, not watching.",
          "Not every complaint is your job. 'This story is unclear' is a refinement problem the Product Owner and Developers can fix today. 'I do not like the coding standard' is a team working agreement. If you collect those, you become a suggestion box with a salary. Take what requires organisational muscle or cross-team coordination. Coach the rest back to the people who can move it before lunch.",
        ],
      },
      {
        id: "clearing-path",
        title: "Clear it like a professional, not a hero",
        body: [
          "Surface impediments daily, not in a monthly archaeology session. The Daily Scrum is a detection mechanism; the work of removal happens after. Write the impediment as cause, effect on the Sprint Goal, and the person who can actually spend political capital. 'Waiting on architecture' is a fog. 'If the API contract is not signed by Wednesday, checkout cannot start and the Sprint Goal is false' is a request.",
          "Age them. An impediment that is three days old is a different object from one raised this morning. Publish the age. Organisations that hate being measured on impediment age discover a sudden talent for decisions. Organisations that refuse to measure it will thank you for your 'passion' and change nothing.",
          "Use the smallest force that works. A Slack nudge, then a named owner, then the Product Owner, then the manager who owns the dependency, then the sponsor. Jumping straight to the steering committee because it feels decisive is how you spend credibility you will need later. Waiting forever because you dislike conflict is how the Sprint Goal dies politely.",
        ],
      },
      {
        id: "organisational-blockers",
        title: "Organisational impediments are the real job",
        body: [
          "Many impediments are not tickets. They are a shared 'DevOps' team with a six-week queue, a change-advisory board that meets after your Sprint ends, or a hiring freeze that left you without a tester. These will not yield to a cheerful sticky note. They need a narrative: cost of delay, failed Sprint Goals, and a proposed change to the system.",
          "Do not become the single pipe through which every organisational request must flow. That makes you a bottleneck wearing a helpful expression. Teach the team how to raise a request, who the counterpart is, and what 'done' looks like. You stay on the ones that require rank or that span teams who do not share a manager.",
          "Track patterns. Three Sprints blocked by the same environment is not three impediments. It is one structural defect you should be taking to whoever owns platforms. Repeating heroics is a process smell. If your week is a highlight reel of saves, the system is broken and you are decorating it.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Impediments block progress and can still be cleared. Issues have landed. Leave the team what they can fix. Write cause, Sprint Goal impact, and an owner; age the item; escalate with the smallest force that works. Organisational impediments need a cost-of-delay story, not another personal favour.",
          "Next: coaching the team — how self-organisation actually works when nobody reports to you and the Sprint Goal is still real.",
        ],
      },
    ],
  },

  "coaching-the-team": {
    intro:
      "Self-organisation is not a motivational poster and it is not anarchy. The team decides how to accomplish the work inside the Sprint. Your job is to build that muscle — which means resisting the urge to be the cleverest person with the plan.",
    sections: [
      {
        id: "self-organisation",
        title: "What self-organisation actually means",
        body: [
          "In Scrum, the Developers own the Sprint Backlog: they choose how to turn selected Product Backlog items into an Increment. Nobody — not you, not the Product Owner, not a neighbouring architect — assigns them tasks. If you are breaking stories into tasks and handing them out before Planning ends, you are running a work-breakdown session with extra sticky notes.",
          "Self-organisation needs constraints or it dissolves. The constraints are the Sprint Goal, the Definition of Done, the timebox, and the skills in the room. Coaching is tightening those constraints until they are honest, then getting out of the way. A team with a mushy Done and a goal that is really five goals will 'self-organise' into chaos and then ask you to manage them.",
          "Cross-functionality is part of the same idea. If every item waits for the one person who 'owns' deployments, you do not have a self-organising team. You have a queue. Coach pairing, shared ownership, and a board that makes the specialist bottleneck embarrassing. Hiring may still be required. Pretending the board will fix a missing skill is optimism with columns.",
        ],
      },
      {
        id: "coach-dont-assign",
        title: "Coach with questions. Assign only as a last resort.",
        body: [
          "Default to questions that return the problem to the team: What is the Sprint Goal asking of us today? Who is blocked by whom? What is the smallest experiment that would tell us if this approach works? People who are used to being managed will find this irritating. That irritation is often the work beginning.",
          "Teach working agreements instead of refereeing every dispute. How do we handle review comments? When do we swarm versus split? What does 'ready' mean before Planning? Write the answers down. A team that can cite its own rules needs you less, which is the point. A Scrum Master who is indispensable in every disagreement has failed at succession.",
          "Use the Retrospective as your main coaching arena, not a stream of mid-Sprint lectures. One improvement, owned, reviewed next time. If last Sprint's improvement vanished, that is the first agenda item. Coaching that never inspects its own advice is just a podcast the team did not subscribe to.",
        ],
      },
      {
        id: "accountability-without-command",
        title: "Accountability without a reporting line",
        body: [
          "The team is accountable to the Sprint Goal and to each other, not to your task list. Make progress visible: a board that is true, a burndown or burnup if it helps, a Daily Scrum that names risk to the goal. Visibility is a form of pressure that does not require you to perform disappointment.",
          "When someone consistently avoids the hard work, do not become their secret manager. Start with a direct conversation, then the team, then the functional manager who actually owns performance. Scrum does not repeal employment law or the org chart. Pretending it does leaves you with a 'people problem' and no lever.",
          "Psychological safety is not niceness. It is the ability to say 'this estimate is a lie' or 'I broke production' without being punished for the honesty. You model it by thanking the bearer of bad news and by stopping the senior visitor who uses the Review to score individuals. A team that feels unsafe will self-organise around hiding, which looks calm in your reports and expensive in your defect log.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Self-organisation means the Developers own how the Sprint Backlog gets to Done, inside clear constraints. Coach with questions, working agreements, and a Retrospective that inspects last Sprint's experiment. Hold accountability through visibility and the real org chart — not through assigned tickets.",
          "Next: working with the Product Owner — backlog health as a partnership, without quietly doing their job for them.",
        ],
      },
    ],
  },

  "working-with-po": {
    intro:
      "The Product Owner is accountable for maximising the value of the product and for the Product Backlog. You are not a junior PO, a ghost-writer of stories, or the person who 'translates the business.' You are the coach who keeps the backlog in a state the team can plan from.",
    sections: [
      {
        id: "backlog-health",
        title: "Backlog health is the relationship",
        body: [
          "A healthy backlog is ordered, refined enough at the top to plan a Sprint, and honest about what will never happen. Your interest in that health is selfish in the good way: Planning collapses without it, and collapsed Planning becomes your impediment list. Offer techniques — story slicing, acceptance criteria, a Definition of Ready the team agrees — rather than taking the keyboard.",
          "Refinement is a standing habit, not a rescue the day before Planning. Facilitate the conversation between the Product Owner and the Developers. The Developers say what they need to forecast. The Product Owner says why the item is next. You watch for epics wearing story costumes and for 'ready' items that still have an open legal question in the middle.",
          "Stakeholder noise is a backlog problem. When five departments want five different next items, the Product Owner must order. You can facilitate the room, surface cost of delay, and stop the meeting from becoming a promise factory. You cannot order the backlog for them because a director frowned. If you do, you now own the product and they own the alibi.",
        ],
      },
      {
        id: "not-the-po",
        title: "Do not do the Product Owner's job",
        body: [
          "Writing the entire backlog because 'they are busy' trains them to stay busy elsewhere. Pair on the first ten items, then hand it back. If the organisation has not given the Product Owner time or authority, that is an organisational impediment. Name it. A proxy Product Owner who is actually you is how Scrum becomes a delivery team with a project manager and a part-time customer.",
          "Do not become the decision-laundering service. 'The SM said the team cannot do that' is a sentence that should not exist. The Developers forecast. The Product Owner orders. You coach both. If a stakeholder wants a date for a scope that has never been refined, facilitate the trade-off: thinner slice, later date, or more capacity. Do not invent a date to end the meeting.",
          "Keep the accountabilities visible in the Review. The Product Owner invites stakeholders and decides what the feedback does to the backlog. You facilitate time, turn-taking, and the difference between an opinion and a decision. Stealing the demo because you are better at slides is a compliment you should refuse.",
        ],
      },
      {
        id: "shared-outcomes",
        title: "Shared outcomes, separate jobs",
        body: [
          "You share an outcome: a team that can empirically deliver value. You do not share a job description. Meet the Product Owner on a cadence that is not the Sprint events — fifteen minutes to look at backlog readiness, stakeholder weather, and whether the Sprint Goal is still a goal. That conversation prevents the ambush in Planning.",
          "When you disagree, disagree about the system. A Product Owner who changes the Sprint scope mid-flight is breaking the Sprint, not 'being Agile.' A Scrum Master who treats every change as a personal insult is being precious. Name the rule, name the cost, and let them choose with the facts on the table.",
          "If the Product Owner is absent, political, or a committee, escalate that as an impediment to the organisation. Scrum assumes a person with authority over the backlog. Coaching cannot replace a role the company refused to staff. You can keep the team from inventing a product strategy in the gap — that way lies a very confident wrong Increment.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Partner on backlog health: ordered, refined at the top, honest in the tail. Facilitate refinement and stakeholder rooms. Do not write the backlog, launder decisions, or steal the Review. Shared outcome, separate accountabilities.",
          "You now have the Scrum Master craft: the role, the events, impediments, coaching, and the Product Owner relationship. Use it on a live team this Sprint — pick one event to run for its actual job, and one impediment to write as cause, goal impact, and owner.",
        ],
      },
    ],
  },

  "activity-sequencing": {
    intro:
      "A list of tasks is a wish. A sequence is a claim about the world: what must finish, what may overlap, and what is waiting on concrete to cure. Get the dependencies wrong and your Gantt chart will still look decisive. It will also be fiction.",
    sections: [
      {
        id: "four-dependencies",
        title: "The four dependency types — FS, SS, FF, SF",
        body: [
          "Finish-to-Start (FS) is the default: B cannot start until A finishes. Design finishes, build starts. Most schedules are a pile of FS links because that is how people think when they are tired. Use it when it is true. Do not use it because the software offered it first.",
          "Start-to-Start (SS) means B cannot start until A has started — laying cable can begin once trenching has begun, not only when the whole trench is done. Finish-to-Finish (FF) means B cannot finish until A finishes — you cannot close testing until the last fix is in. These two are how you model genuine overlap instead of pretending work is a single-file queue.",
          "Start-to-Finish (SF) is rare and easy to fake. B cannot finish until A starts: the night shift cannot stand down until the day shift has begun; the legacy system cannot be decommissioned until the replacement is taking traffic. If you think you need SF, write the sentence in English first. If the sentence is really FS wearing a hat, use FS. Clever networks that nobody can explain will not survive the first change request.",
        ],
      },
      {
        id: "leads-and-lags",
        title: "Leads, lags, and the temptation to hide time",
        body: [
          "A lag is waiting time on a link. FS plus five days of lag: the successor starts five days after the predecessor finishes. Use it for things the calendar owns — concrete curing, statutory notice, a vendor's contractual review window. Do not use lag as a drawer for 'we are not sure,' or you will lose the uncertainty inside a number that looks like a fact.",
          "A lead is an overlap: a negative lag. FS with a two-day lead lets B start two days before A finishes. That is a decision to accept risk — you are building on work that is not done. Write why the lead is safe. A schedule full of undocumented leads is a fast-track you have not admitted to, and it will take its payment in rework.",
          "Prefer an explicit activity over a mysterious lag when someone has to do something in the gap: 'procurement approval,' 'environment refresh,' 'legal redlines.' Lags do not get owners. Activities do. Owners are how waiting time gets managed instead of merely displayed.",
        ],
      },
      {
        id: "network-diagram",
        title: "Build a network, not a pretty list",
        body: [
          "The precedence diagram (activities on nodes, arrows as dependencies) is the model underneath the Gantt chart. Start with the work packages, add the logic, then apply durations. If you start with dates and work backwards to 'dependencies,' you are drawing a picture of a promise, not a network of work.",
          "Every activity except the start needs a predecessor; every activity except the end needs a successor. Dangling tasks are how work falls out of the critical path calculation and then surprises you from a side alley. Open ends are not flexibility. They are unanalysed work.",
          "Sequence from the work, not the org chart. 'Design then the whole of engineering then the whole of test' is a departmental parade. Real products have components that can move in parallel and integration points that cannot. The network should embarrass false sequential thinking. If your diagram is a single snake, either the work is truly serial or you have not yet asked 'what could start once this has started?'",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Model the true relationship: FS, SS, FF, or the rare SF. Use lags for real waiting; use leads only as a named risk. Prefer owned activities to anonymous delays. Build a closed network from the work, then hang dates on it — not the other way round.",
          "Next: the critical path method — the longest path, the two kinds of float, and why shortening the wrong task is an expensive hobby.",
        ],
      },
    ],
  },

  "critical-path-method": {
    intro:
      "The critical path is the longest path through the network. It sets the shortest time the project can take if the logic and durations are true. Everything else has float — until you spend that float, at which point you have grown a second critical path and a surprised sponsor.",
    sections: [
      {
        id: "longest-path",
        title: "Longest path, not 'the important tasks'",
        body: [
          "Forward pass: earliest start and finish for each activity. Backward pass: latest start and finish. The path whose total duration is longest — typically the chain with zero total float — is critical. Miss a day there and the end date moves, unless you change logic, scope, or resources.",
          "Critical does not mean valuable or difficult. The procurement wait can be critical while a technically heroic module sits on a side path with two weeks of float. Stakeholders will argue with this. Show the network. Importance is a value conversation. Criticality is arithmetic. Mixing them is how you crash the interesting work and still miss the date.",
          "Near-critical paths matter. A path with two days of float is a week away from joining the crisis if anything sneezes. Watch the top two or three paths, not only the red bar the tool highlighted. Multiple critical paths are common once you stop pretending the plan is a single story.",
        ],
      },
      {
        id: "float-types",
        title: "Total float versus free float",
        body: [
          "Total float is how long an activity can slip without delaying the project end date. It is shared along a path. If three activities each appear to have ten days of total float, that is often the same ten days. The first one to use it spends it for the others. Treating total float as a personal slush fund is how 'we had float' becomes 'how are we late?'",
          "Free float is how long an activity can slip without delaying the early start of its immediate successor. It is local. Free float is the safer place to park a small delay or a resource dip, because you are not borrowing from the rest of the chain. If you have neither, you are on or next to the critical path whether the colour coding has caught up or not.",
          "Negative float means the imposed date and the network already disagree. The tool is telling you the promise is false. Do not 'solve' it by deleting logic or shrinking estimates until the bar turns green. That is a graphics exercise. Solve it with scope, sequence, resources, or a different date — in change control, not in a quiet edit.",
        ],
      },
      {
        id: "crash-the-right-task",
        title: "Why crashing the wrong task wastes money",
        body: [
          "Compression only moves the end date if it shortens the current critical path. Adding people to a task with float makes that bar shorter and your invoice longer. The project finish does not notice. You have purchased a tidier Gantt chart.",
          "Even on the critical path, not every task crashes well. Some work does not divide. Nine people cannot make a baby in a month, and nine developers cannot always make a module in a ninth of the time. Coordination cost, ramp-up, and specialism eat the theory. Estimate the crash cost and the days actually returned before you spend.",
          "After you crash, recompute. The path you shortened may hand the crown to a sibling path. The second cheque is often waiting there. This is why 'we added two people to the integration' can coincide with no movement on the milestone. The network moved the bottleneck. Nobody updated the story they tell in steerco.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "The critical path is the longest path and sets the minimum duration. Total float is shared and easy to spend twice; free float is local. Negative float is a broken promise, not a formatting error. Only shortening the current critical path can move the end date — and it may create a new one.",
          "Next: resource leveling — what to do when the network is elegant and the same three people are booked at 160 percent.",
        ],
      },
    ],
  },

  "resource-leveling": {
    intro:
      "A schedule that ignores who does the work is a thought experiment. Resource leveling is the moment the thought experiment meets the timesheet. The network may still be right. The dates often are not.",
    sections: [
      {
        id: "overallocation",
        title: "Overallocation is a fact, not a motivational opportunity",
        body: [
          "If the same engineer is assigned to two full-time critical activities in the same week, you do not have a commitment problem. You have a model that assumed a 160-hour human. Tools will show a nice peak. Reality will show a quiet delay on one of the two tasks and a person who stops answering Slack.",
          "Find overallocation before you baseline. Histogram the scarce roles — the architect, the tester, the only person who understands the general ledger. Peaks above capacity are decisions you have not yet made: slip a task, split work, add a person, or cut scope. Leaving the peak in the plan is how you discover the decision in week six, with less dignity.",
          "Named resources hide the problem better than generic roles. 'Developer' at 300 percent is obvious. 'Priya' at 100 percent on paper and 100 percent on a production-support rota is not in your file. Ask what else they do. The calendar you were not shown is still part of the project.",
        ],
      },
      {
        id: "leveling-vs-smoothing",
        title: "Leveling versus smoothing",
        body: [
          "Resource leveling resolves overallocation by delaying work until a person is free. The end date may move. That is the honest trade: you can have this logic and these people, or you can have that date, not both as a matter of willpower. Leveling is a schedule change. Treat it as one.",
          "Resource smoothing (sometimes called resource allocation within float) reshuffles work to flatten peaks without moving the project finish. You spend free float and unused total float. When the float runs out, smoothing cannot finish the job. Anyone who says 'just smooth it' on a schedule with no float is asking you to level and lie about it.",
          "Do not confuse either with 'smoothing the politics.' Spreading a person across six projects at 0.2 FTE each is not leveling. It is fragmentation. The switching cost will eat the 0.2. Prefer fewer assignments and a clear priority when two managers want the same Tuesday.",
        ],
      },
      {
        id: "after-you-level",
        title: "After you level, the critical path may change",
        body: [
          "Resource-constrained scheduling creates a new kind of criticality: a task is late because the person was elsewhere, not because the predecessor was late. The path that matters is now the chain of scarce people. Recalculate. Report the new date and the new critical work. A baseline taken before leveling is a souvenir.",
          "Watch for leveling that creates idle gaps you could have filled with discretionary work — documentation, refactoring, a spike. Smoothing leftover troughs is useful. Inventing busywork to make a utilisation chart look 'efficient' is how you destroy float you will want when the vendor slips.",
          "Document the rule you used. Priority to the critical path, then to near-critical, then to the work the sponsor named. If leveling is a late-night argument in the tool's options menu, nobody will be able to defend the date. A one-line rule in the schedule notes is how you survive the meeting where someone asks why their favourite task moved.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Overallocation is a modelling error until you decide. Leveling delays work and may move the finish. Smoothing uses float and cannot invent capacity. After either, recompute the path — resource constraints rewrite criticality.",
          "Next: schedule compression — crashing and fast-tracking, and the quality and risk bill that arrives after the date looks better.",
        ],
      },
    ],
  },

  "schedule-compression": {
    intro:
      "Compression is how you buy a shorter duration with money, risk, or both. It is not a pep talk and it is not 'the team will try harder.' If the date must move in, name the technique, name the path, and name what you are spending.",
    sections: [
      {
        id: "crashing",
        title: "Crashing: pay to shorten the critical path",
        body: [
          "Crashing adds resources — people, overtime, a second vendor shift, a faster machine — to critical activities to cut duration. You spend cost to buy calendar time. Do it only on the current critical path, and only on work that actually shortens when you add hands. Plot crash cost per day saved. Pick the cheapest days first. Stop when the next day costs more than the date is worth.",
          "Overtime is the crash people reach for because it needs no requisition. It works for a week. After that you are buying defects and slower thinking at a premium rate. If the business case for the date cannot survive paying for an extra person or a descoped increment, it cannot survive a month of tired heroes either.",
          "Brooks's observation still applies: adding people to late work can make it later while they ramp and while communication paths multiply. Crash early, on separable work, with a named onboarding plan. Crashing in the last fortnight is often just a more expensive way to miss the same milestone.",
        ],
      },
      {
        id: "fast-tracking",
        title: "Fast-tracking: overlap work that wanted to be sequential",
        body: [
          "Fast-tracking changes logic: you start a successor before its predecessor is finished — SS instead of FS, or a lead on an FS link. Design is still moving while build starts; training materials are written against a product that is not stable. You spend risk and rework to buy time. The date may improve. The defect log will have opinions.",
          "Fast-track only where a wrong assumption is cheap to reverse. Overlapping two vendor contracts before the interface is signed is how you pay twice. Overlapping test-case design with a stable API draft is often fine. Write the assumption you are violating. If you cannot, you are not fast-tracking. You are gambling and calling it a schedule strategy.",
          "Rework is the silent duration you did not put on the Gantt. A 30 percent chance of a two-week redo is not 'absorbed by the team.' Put a buffer or a decision gate on the overlap. Fast-tracking without a gate is how overlapping work becomes overlapping failure.",
        ],
      },
      {
        id: "price-of-speed",
        title: "The quality and risk cost — pay it on purpose",
        body: [
          "Every compression trades against quality, cost, or residual risk. Crashing can dilute review, split ownership, and create 'who changed that' defects. Fast-tracking can build on a design that will move. Neither is immoral. Pretending the trade is free is. Put the residual risk in the register with a trigger: defect rate, interface churn, overtime hours.",
          "Do not compress a path that is not critical, and do not compress to hide a scope conversation. If the date is sacred, something else is not — usually scope. A thinner Increment on the original date is often cheaper than a fully fantasised scope delivered by crash and prayer. Offer both options. Let the sponsor spend the money or the features.",
          "Record the decision. When someone later asks why quality dipped or why the second path is now critical, 'we had to hit the date' is not an answer. 'We crashed activities 14 and 22 at £X per day, accepted rework risk on the API overlap, and rejected a scope cut on 3 May' is an answer. Compression without a paper trail is just a rumour that the plan got tighter.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Crash: add cost to shorten critical work that actually divides. Fast-track: overlap sequential work and pay in risk and rework. Only the current critical path can move the date. Name the trade, log the residual risk, and write the decision down.",
          "Next: baselining the schedule — freeze the thing you have just been tempted to keep editing, then put change control on the door.",
        ],
      },
    ],
  },

  "baselining-schedule": {
    intro:
      "A baseline is the approved schedule you agree to be judged against. Until you freeze it, every date is a draft and nobody is late. After you freeze it, changes go through control — or the baseline is a mood board you update when the news is bad.",
    sections: [
      {
        id: "what-a-baseline-is",
        title: "What you are freezing",
        body: [
          "The schedule baseline is the agreed dates, logic, and milestones at a moment in time — usually the end of planning, once sequencing, critical path, and leveling have been done once for real. In a full performance measurement baseline it sits with scope and cost. For this course, treat the schedule baseline as the thing you will compare 'actual' to when someone asks if you are late.",
          "A baseline is not a forecast. The live schedule will move as you update progress, remaining duration, and approved changes. The baseline stays put so variance means something. If you overwrite the baseline every Friday to match reality, your variance is always zero and your credibility is a rounding error.",
          "Get the people who own the date to sign something short: this is the logic, these are the milestones, this is the assumption set. A baseline nobody accepted is a PM hobby. A baseline the sponsor initialled is a conversation you can have when week nine looks different from week one.",
        ],
      },
      {
        id: "freeze-then-control",
        title: "Freeze, then change-control — in that order",
        body: [
          "Updating progress is not changing the baseline. Mark actual starts, remaining work, and slipped successors. That is hygiene. Changing a committed milestone, inserting a workstream, or rewriting logic because a vendor 'needs more time' is a change. It needs impact on the end date, cost, and risk, and an approver who can live with the new promise.",
          "Re-baseline only when an approved change makes the old baseline a misleading story — a formal descoping, a funded delay, a killed workstream. Do it in the open. Keep the old baseline as history if the tool allows; people will ask what you originally promised. A quiet re-baseline after a bad month is how organisations learn not to read your charts.",
          "Thresholds help. You may slip a non-milestone activity by two days inside float without a committee. You may not move a go-live without the sponsor. Write the thresholds before the first panic. Inventing them during the panic produces either paralysis or a rubber stamp, depending on who is in the room.",
        ],
      },
      {
        id: "defending-the-baseline",
        title: "Defending the baseline without becoming a clerk",
        body: [
          "Report against it. Start with milestone variance and critical-path slack, not a tour of every bar that moved. 'Integration is six days late; total float on the go-live path is now two days; decision needed on overtime versus scope' is a baseline earning its keep. A 40-page Gantt in the appendix is optional. The variance sentence is not.",
          "When someone wants work that breaks the baseline, show the network, not your feelings. The new request has predecessors, a duration, and a resource. Park it on the path and watch the milestone move. People argue with PMs. They argue less with a successor that suddenly starts after the conference.",
          "Do not defend a baseline that was a lie. If you froze dates you already knew were impossible, change control will feel like bureaucracy and the team will be right. Baseline the schedule you would take a bet on after leveling and a first risk pass. Optimism belongs in the benefits case, not in the dates you will be quoted in six months.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Baseline the approved logic and dates after the network, path, and resources are honest. Update progress freely. Change milestones and logic through control. Re-baseline in the open when the story has formally changed. Report variance, not a chart you keep forgiving.",
          "You now have a working schedule practice: sequence the work, find the critical path and float, level the people, compress only with a named trade, then freeze and control. Apply it to one live plan this week — even a small one. A network with real links beats a date in a slide.",
        ],
      },
    ],
  },

  "vendor-selection": {
    intro:
      "Selecting a vendor is a decision under incomplete information, dressed as a procurement process. The RFx and the scorecard do not remove the uncertainty. They stop you awarding the work to whoever presented last and spoke most confidently about 'partnership.'",
    sections: [
      {
        id: "rfx-family",
        title: "RFI, RFP, RFQ — use the one you mean",
        body: [
          "A Request for Information (RFI) maps the market: who exists, what they sell, what 'good' might look like. Use it when you do not yet know enough to specify. A Request for Proposal (RFP) asks how they would solve a stated problem, at what price, with what team. A Request for Quotation (RFQ) asks for a price against a specification you already believe. Calling all three 'the RFP' is how you get essays when you needed a number, or a number when you still needed a design.",
          "Write the problem, the constraints, the must-haves, and the nice-to-haves before you issue. If the document is vague, you will score theatre. Vendors are rational: they will propose what they already have and call it your future. A crisp statement of work is the cheapest insurance in the pack.",
          "Timebox the process and say how you will decide. Vendors who invest in a bid deserve a date and a criterion. Internal stakeholders who want to 'keep options open' until the week before start-up are asking for a hostage situation with extra invoices. A selection calendar is part of the professional act.",
        ],
      },
      {
        id: "scoring-without-theatre",
        title: "Score with weights you wrote before you liked anyone",
        body: [
          "Build the scoring matrix before proposals land: criteria, weights, and what '5' means. Typical bones are capability, relevant experience, approach, team, commercial, security, and cultural fit with how you actually work. If you invent the weights after you have a favourite, the matrix is a costume for a decision you already made.",
          "Calibrate in the room. If every vendor is a 4.2, you have a politeness instrument. Force discrimination: who has done this in this regulated setting, who is proposing the A-team versus a logo and a bench. Score independently, then discuss the gaps. Averaging away a split — security says 1, the sponsor says 5 — is how you buy a charming residual risk.",
          "Price is a criterion, not the criterion. A cheap bid that failed due diligence is not value. A mid-priced bid with a named team, a credible plan, and a contract you can exit is often cheaper by month nine. If procurement's mandate is 'lowest compliant,' make compliance include the things that fail late: security, references, and the right to the work product.",
        ],
      },
      {
        id: "due-diligence",
        title: "Due diligence is the part people skip because the demo went well",
        body: [
          "Check the boring facts: financial health, insurance, ownership, where the data will live, who the subcontractors are, and whether the people in the pitch are the people in the SoW. Call the references and ask when it went wrong. A reference who only offers praise has been briefed. Ask 'what would you not use them for?'",
          "Security and privacy are not an appendix. If they will touch personal data, production systems, or your source code, run the questionnaire and the penetration-test conversation before award, not as a condition you will 'pick up in mobilisation.' Mobilisation is when you have no leverage and a go-live date.",
          "Watch for concentration you are about to create. If this vendor will also run your payments, your support, and your only integration layer, you are not selecting a supplier. You are selecting a dependency. That belongs in the risk conversation before the award letter, while you can still split the work or demand an escrow and an exit pack.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Use RFI to learn, RFP to compare approaches, RFQ to price a known spec. Weight the scorecard before you have a favourite. Diligence the finances, the people, the data, the subcontractors, and the lock-in — especially after a good demo.",
          "Next: contract types — fixed price, time and materials, cost-plus, and outcome-based — and who is actually holding the risk when the work goes sideways.",
        ],
      },
    ],
  },

  "contract-types": {
    intro:
      "A contract type is a risk allocation, not a procurement fashion. Someone will hold cost risk, someone will hold scope risk, and someone will hold the risk that 'done' was never defined. If you do not choose, the vendor's paper will choose for you.",
    sections: [
      {
        id: "who-holds-risk",
        title: "First question: who holds which risk?",
        body: [
          "Cost risk is who pays when the work takes longer or costs more than hoped. Scope-definition risk is who pays when 'the portal' meant different things. Performance risk is who pays when the thing works and nobody uses it — or it works and still misses the service level. Write those three on a whiteboard before you pick a contract shape.",
          "Buyers like to push all three to the vendor. Vendors price that, or they accept it and recover later in change requests. A cheap fixed price on a fuzzy scope is not a bargain. It is a change-control machine with a kickoff meeting.",
          "The professional move is to give each risk to the party who can best control it. The vendor can control how they staff a well-specified build. You control whether the stakeholders will stop inventing must-haves. An outcome the vendor cannot influence — your sales team's adoption — is a poor thing to put entirely in their fee.",
        ],
      },
      {
        id: "the-four-shapes",
        title: "Fixed price, T&M, cost-plus, outcome-based",
        body: [
          "Fixed price (lump sum): the vendor holds most cost risk if the scope is stable and clear. You hold the risk of having specified the wrong thing. Changes are formal and expensive, which is either discipline or a war, depending on how honest the original SoW was. Use it for bounded work: a migration with a known inventory, a fit-out, a defined integration.",
          "Time and materials: you hold cost risk; you gain flexibility. The vendor is paid for effort. Without a cap, a backlog, and a visible burn, T&M becomes a standing invitation to be busy. Use it for discovery, uncertain build, or staff augmentation — and put a ceiling, a review cadence, and a right to stop.",
          "Cost-plus (cost reimbursable): you pay actual cost plus a fee. You hold cost risk; the vendor has weak incentive to be frugal unless the fee rewards it. Common in work you cannot specify and cannot ask anyone to lump-sum. Outcome-based or performance-based contracts tie some or all payment to results — availability, conversion, a completed migration of N records. The vendor holds more performance risk if the metric is clean. If the metric is political, you have invented a dispute.",
        ],
      },
      {
        id: "pick-on-purpose",
        title: "Pick a shape on purpose — hybrids included",
        body: [
          "Hybrids are normal: fixed price for the known core, T&M for the uncertain edge, a bonus for an outcome you both can measure. What is not normal is a 'partnership' with no shape, no cap, and a slide that says 'win-win.' That is an unpriced option on your budget.",
          "Match the contract to the uncertainty you still have at award. If you are still discovering the problem, a fixed price will either be padded into absurdity or will detonate in week six. If you have a specification a third party could build from, T&M is how you pay for their learning twice. Be boring. Be accurate.",
          "Read the change and termination clauses while you still have alternatives. A fixed-price contract you cannot exit, or a T&M contract with a ninety-day notice and a team who hold all the passwords, has already decided your future. The type on the cover page is less important than whether you can stop, change, or leave.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Contract type allocates cost, scope, and performance risk. Fixed price suits clear scope; T&M suits uncertainty with a cap; cost-plus suits unspecifiable work; outcome-based suits a metric nobody can game. Give each risk to the party who can control it, and read the exit while you still have one.",
          "Next: vendor relationships — SLAs that mean something, and a governance rhythm that is not a monthly surprise.",
        ],
      },
    ],
  },

  "vendor-relationships": {
    intro:
      "The contract is the spine. The relationship is whether anyone uses it before they need a lawyer. Governance and SLAs are how you notice drift while you can still steer — not how you assemble evidence for a fight you have already lost.",
    sections: [
      {
        id: "slas-that-bite",
        title: "SLAs that can be measured, and remedies that exist",
        body: [
          "A service level agreement states a measurable target, how it is measured, over what window, and what happens if it is missed. 'High availability' is a brand promise. '99.9 percent monthly, excluding agreed maintenance, measured from the status page you both accept' is an SLA. If you cannot name the denominator, you do not have a level. You have a hope.",
          "Remedies should be boring and automatic: service credits, extra capacity, a required root-cause within a timebox, an escalation to a named executive. Credits that require a three-month argument are not remedies. They are a hobby for accounts payable. For work that can kill you — payments down, data wrong — add step-in rights or a kill switch, not only a coupon.",
          "Do not SLA vanity. Twelve metrics nobody reviews train both sides to ignore the report. Pick the few that match how failure actually hurts: time to restore, defect escape, lead time on changes, response to a Sev-1. Review them on a cadence. A green dashboard that nobody can reconcile to last Tuesday's outage is interior decoration.",
        ],
      },
      {
        id: "governance-cadence",
        title: "Governance is a calendar, not a vibe",
        body: [
          "Set a rhythm that matches the risk: operational huddle weekly, service review monthly, steering quarterly — or tighter if they are on your critical path. Each forum has an agenda, a decision right, and minutes that record actions. If the only meeting is 'catch-up,' you will catch up with the incident.",
          "Name the counterparts. You need a delivery lead who can commit the vendor's people, a commercial owner who can change the paper, and an executive sponsor on both sides for when those two disagree. A single 'account manager' who is really a salesperson will take your severity-2 and convert it into a roadmap conversation.",
          "RACI the interfaces. Who raises a change, who accepts an Increment, who can waive an SLA, who talks to your regulator. Ambiguity here is how two organisations both believe the other is late. Write it once. Point at it when the room gets loud. Updating the RACI is cheaper than a joint workshop about 'alignment' every quarter.",
        ],
      },
      {
        id: "day-to-day",
        title: "Day-to-day: manage the work, not the press release",
        body: [
          "See the work. A shared board, a burn against the cap, a demo of the Increment — the same empiricism you would use internally. A vendor who will only show you a status slide is managing your perceptions. That is a risk, not a communication style.",
          "Be a decent client. Frozen scope for the Sprint you asked them to join, a Product Owner who answers, environments that exist. Many 'vendor problems' are you. The relationship dies when you are chaotic and then perform disappointment in the monthly. Hold yourselves to the same Definition of Done you wrote into the SoW.",
          "Praise in public, escalate in the structure you agreed. Side channels to a friendly engineer feel faster and become how decisions vanish. When you must escalate, bring the SLA, the impact, and the request — not a novel about how you feel let down. Vendors have other clients. Clarity travels; mood does not.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "SLAs need a measure, a window, and an automatic remedy. Govern on a calendar with named counterparts and a RACI. Inspect the work, be a usable client, and escalate through the structure you wrote down.",
          "Next: vendor risk — concentration, data, and the exit you will wish you had designed while you still had alternatives.",
        ],
      },
    ],
  },

  "vendor-risk": {
    intro:
      "A third party is a risk you have outsourced and a dependency you have imported. The register should say which. Concentration, exit, and data are the three that turn a 'strategic partner' into a hostage situation with a QBR.",
    sections: [
      {
        id: "concentration-and-lock-in",
        title: "Concentration and the exit you cannot afford",
        body: [
          "Concentration risk is too much of your operation in one pair of hands: one cloud, one integrator, one payroll bureau, one person at the vendor who understands your build. When they fail, pause, or raise prices, you have no parallel path. Dual-run the critical pieces or accept the risk in writing with a trigger — not with a shrug because procurement liked the bundle.",
          "Lock-in is concentration's quieter cousin. Custom code that only they can compile, a proprietary data format, licences that punish you for leaving, staff who are legally theirs and practically your entire capability. Ask at selection: how would we leave in twelve weeks? If the answer is a smile, write the gap as a risk with a residual you can see.",
          "Financial and geopolitical health belong here too. A vendor in distress will cut the A-team, slow the patches, or sell the book of business. A vendor in a jurisdiction that can seize data is a compliance issue wearing a commercial contract. Annual diligence is not bureaucracy. It is checking the floor is still there.",
        ],
      },
      {
        id: "data-and-fourth-parties",
        title: "Data, access, and the people you did not contract",
        body: [
          "Know where the data lives, who can see it, how it is encrypted, and how you get it back — in a usable format, not a PDF of a database. Put return, deletion, and audit rights in the paper. Discovering at exit that your customer history is 'in the platform' is how you fund a migration you already paid for once.",
          "Fourth parties are the vendor's vendors. The impressive integrator may run on a single-region host or a subcontractor in a country your policy forbids. Ask for the chain. Right-to-audit that stops at their office door is a story. You need to know who else is in the blast radius.",
          "Access risk is operational. Shared admin accounts, leftover tokens, a support laptop that still has production. Joiners and leavers at the vendor should trigger the same revocation you would use internally. If that sounds fussy, read last year's incident reports from companies who found it fussy.",
        ],
      },
      {
        id: "watching-and-mitigating",
        title: "Watch it like any other material risk",
        body: [
          "Score third-party risk with the same discipline as internal risk: likelihood, impact, owner, trigger, response. 'Vendor might be late' is a mood. 'If the sandbox is not available by 15 June, UAT slips and the regulatory window is missed' is a risk you can mitigate with a mock, a second environment, or a descoped Increment.",
          "Mitigations are specific: escrow for source, a step-in clause, a second supplier for the commodity layer, a retained internal owner who still understands the system, insurance for the slice insurance actually covers. 'Manage the relationship' is not a mitigation. It is a hope that charm will substitute for options.",
          "Review on a cadence that matches how fast they can hurt you. A payments processor deserves more than an annual form. Promote to an issue when the trigger fires. A vendor risk that sits on red for a quarter with no decision is not being managed. It is being hosted.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Concentration, lock-in, money, and jurisdiction decide whether a vendor is a supplier or a single point of failure. Know the data path and the fourth parties. Write cause–event–effect, fund real options, and review on a clock that matches the blast radius.",
          "Next: contract exit — how to leave so the organisation still has the work, the data, and a pulse.",
        ],
      },
    ],
  },

  "contract-exit": {
    intro:
      "Exit is a project you should have scoped while you were still friends. If the first serious transition plan is written after the termination notice, the vendor is holding more of your organisation than your contract admitted.",
    sections: [
      {
        id: "exit-before-you-need-it",
        title: "Write the exit while you still have leverage",
        body: [
          "The contract should already say how termination works: for convenience, for cause, notice periods, fees, and what continues during the wind-down. It should also say what 'handover complete' means — data, documentation, access, introductions to fourth parties, and a period of reasonable assistance. If those clauses are thin, you are already negotiating exit at the worst possible time.",
          "Build an exit pack at onboarding, not at breakup: architecture as it really is, credentials in your vault, a list of batch jobs, who the named people are, where the source lives. Refresh it when the thing changes. An exit pack that is eighteen months stale is a treasure map to a building that has moved.",
          "Decide the trigger in peacetime. Renewal coming, repeated SLA breach, a change of control, a price you will not pay, a strategy that in-houses the work. A trigger turns a vague unhappiness into a programme with a date. Without one, organisations stay because leaving feels like a project, which it is.",
        ],
      },
      {
        id: "transition-not-farewell",
        title: "Transition is delivery, not a farewell lunch",
        body: [
          "Treat the exit as a project: scope, sequence, critical path, a baseline. Knowledge transfer is work packages with acceptance criteria — 'second-line can restore service from runbooks without a vendor bridge' — not a series of optional webinars. Shadowing, reverse shadowing, and a period where they are paid to be on the hook after you cut over are cheaper than a heroic weekend.",
          "Move the crown jewels first in the plan even if you execute in a safer order: identity, data export, source, admin rights, the integration that bills customers. Everything else is furniture. A transition that migrates the wiki and leaves production credentials on their laptop has the ceremony of leaving and none of the fact.",
          "Keep a commercial owner and a delivery owner on your side. The first handles notice, money, and disputes. The second handles the cutover. Mixing them is how a negotiation about fees delays a security revocation. Parallel tracks, one steerco, a single list of 'we are not live until.'",
        ],
      },
      {
        id: "refuse-hostage",
        title: "Refuse to be hostage — during the marriage, not after",
        body: [
          "Hostage looks like this: only they can change the thing; the data export is incomplete; the contract auto-renews; the people who understand it will be redeployed tomorrow; a licence clause makes the replacement product unusable with your data. You reduce that during the relationship — internal counterparts, escrow, portable formats, non-solicit that does not forbid a fair hire, no quiet auto-renew.",
          "Do not confuse politeness with leverage. You can be a good client and still run a fire drill: restore from their export, stand up the spare, time the RTO. A drill that fails in month four is a gift. A drill you never ran is how month thirty-six becomes a press inquiry.",
          "When you do leave, leave cleanly. Revoke access, collect devices, confirm deletion where the law and the contract require it, tell the stakeholders who to call now. A half-offboarded vendor is not a relationship. It is an untracked risk with a login. Close it like any other project: acceptance, lessons, archive. Then stop paying for the ghost.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Exit clauses and an exit pack belong at the start. Transition is a planned delivery with acceptance criteria, not a goodbye. Keep data, access, and knowledge on a path you control, and revoke what you no longer need. Hostages are made in the contract and the architecture, long before the notice letter.",
          "You now have a working vendor practice: select with a scorecard and diligence, allocate risk in the contract type, govern with SLAs that bite, watch third-party risk, and leave without asking permission of the dependency. Use it on one live supplier this month — start with the question 'how would we exit in twelve weeks?' and write down the honest answer.",
        ],
      },
    ],
  },
}
