import type { LessonBodies } from "./types"

export const changePmoResourcesBodies: LessonBodies = {
  "change-models": {
    intro:
      "Change models are tools with jobs, not religions. ADKAR, Kotter, and Prosci will all visit your steerco as if they were the one true method. Your job is to pick the one that answers the question you actually have — and to refuse the laminated conversion experience.",
    sections: [
      {
        id: "three-models-three-jobs",
        title: "Three models, three jobs",
        body: [
          "ADKAR is a person-level diagnostic: Awareness, Desire, Knowledge, Ability, Reinforcement. It asks whether one human can do the new thing on Tuesday. It does not care about your town hall. If a team lead has Awareness and no Desire, more slides will not help. You have a motivation problem wearing a communications badge.",
          "Kotter is an organisational sequence — eight steps from urgency through coalition, vision, permission to act, short-term wins, consolidation, and anchoring. It is a programme spine, not a buffet. Skipping 'create urgency' and starting at 'generate short-term wins' is how you get a cake with no oven. The room claps; the work does not move.",
          "Prosci is a method that wraps ADKAR in an organisational change process: prepare the approach, manage the change, sustain the outcomes. It is useful when you need a shared language across a portfolio. It is not a personality. Buying the toolkit does not make middle managers less tired, and a certification on the wall does not substitute for a sponsor who will actually say no to the old way.",
        ],
      },
      {
        id: "choose-without-worship",
        title: "Choose without worship",
        body: [
          "Use ADKAR when the failure is individual: people know the date and still do the old process. Interview a handful of affected staff and score each letter honestly. The first letter that is weak is your intervention. Do not run a full campaign because the model has five letters and you like completeness.",
          "Use Kotter when the failure is political: no coalition, no urgency, a vision that lives in a deck. If the sponsor will not spend political capital, Kotter will diagnose that in week one. That diagnosis is the product. Pretending you can 'do Kotter' without a coalition is how change teams become internal comms with a loftier job title.",
          "Use Prosci — or any structured wrapper — when several workstreams must change in the same organisation and you need a common cadence. Compare them in one sentence for the sponsor: ADKAR finds the stuck person; Kotter sequences the organisation; Prosci industrialises the work. If the sponsor cannot repeat that sentence, you have over-taught the model and under-taught the decision.",
        ],
      },
      {
        id: "models-in-the-week",
        title: "A model is a weekly question, not a mural",
        body: [
          "Pick one primary model for this change and write the weekly question it forces. ADKAR: which letter is failing for which role? Kotter: which step is actually incomplete? Prosci: which workstream has no sustain plan? One question, reviewed on a cadence, beats a wall of colourful chevrons nobody can act on.",
          "Do not stack all three and call it 'best practice.' Stacking models is how you get a 40-page change strategy and a go-live that still surprises the service desk. If you need a second model, use it as a check, not a second religion. ADKAR can audit whether Kotter's vision reached the people who type.",
          "Write the choice down with a date. When a consultant arrives with a different favourite, you can say which job you hired the current model to do. 'We already have a model' is a complete sentence. 'We're model-agnostic' is how every framework gets a slide and none of them get an owner.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "ADKAR diagnoses one person. Kotter sequences an organisation. Prosci industrialises the work across workstreams. Pick one primary model, write the weekly question it forces, and refuse to worship the diagram.",
          "Next you will map stakeholder impact — who is actually affected, how their work changes, and why a name on a list is not a map.",
        ],
      },
    ],
  },

  "stakeholder-impact": {
    intro:
      "A stakeholder list is a mailing list. An impact map says what changes in someone's week: the process they lose, the skill they must grow, the status they fear giving up. If you cannot describe the Tuesday after go-live for each group, you are not managing change. You are announcing it.",
    sections: [
      {
        id: "impact-is-a-work-change",
        title: "Impact is a change to the work, not a feeling",
        body: [
          "Write impact as a sentence: role → what they do today → what they must do after → what breaks if they do not. 'Finance is a stakeholder' is filing. 'Finance lose a week of month-end ritual and gain a login they do not trust yet' is a map. The second version tells you what to train, what to measure, and who will quietly keep a shadow spreadsheet.",
          "Separate types of impact or you will treat them as one mood. Process impact: the steps change. Tool impact: the system changes. Role impact: who decides changes. Status impact: who looks competent changes. People resist the last two while you keep explaining the first two. That mismatch is why 'we communicated' and 'they still hate it' can both be true.",
          "Do not outsource the map to the change manager alone. The PM sees the plan. Operations sees the Tuesday. HR sees the role anxiety. The sceptic in the room sees the unofficial process everyone actually uses. Your job is to run the conversation until the unofficial process is on the page. If it is not on the page, it will win.",
        ],
      },
      {
        id: "severity-timing-readiness",
        title: "Severity, timing, and readiness — not a heat map for the pack",
        body: [
          "Score each group on how much their week changes, when the change hits, and how ready they are. A high-severity, low-readiness group at go-live is your critical path. A low-severity group who merely want a newsletter are not. Treating them the same is how the people who can stop the change get a round-robin email and a sense of being managed.",
          "Timing matters more than most maps admit. Some groups are hit at design (the people whose process you are about to redesign without them). Some are hit at training. Some are hit the first month-end after go-live. If you only map 'at launch,' you will be charming in week one and abandoned in week five, when the real work arrives and the project team has already booked the drinks.",
          "Readiness is evidence, not optimism. Ask what they can already do, what they have survived before, and whether their manager will protect time. A team that just finished a painful migration is not 'experienced at change.' They are tired. Scoring them Green because they have been through it is how programmes confuse scar tissue with capability.",
        ],
      },
      {
        id: "use-the-map",
        title: "Use the map or it becomes interior decoration",
        body: [
          "The map exists to sequence work. High-impact, low-readiness groups get earlier involvement, better managers in the room, and more practice — not a later webinar. Low-impact groups get a clean, short message and a place to ask questions. If every group is 'high,' you have not prioritised. You have flattered.",
          "Give each material group an owner who can actually reach them — usually their line manager, not the project. The change team can write the brief. They cannot sit next to someone on a Wednesday and watch them do the new process. If the owner is 'comms,' you have assigned a channel, not a human.",
          "Revisit the map when scope moves. A late integration that pulls another department in is a new impact, not a footnote in the RAID log. A map that still shows last quarter's org chart is training people to ignore you. Pruning and adding rows is the work. Laminating the first workshop output is a souvenir.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Write impact as a change to the week's work. Score severity, timing, and readiness with evidence. Sequence involvement from the map, assign line-manager owners, and update it when the design moves.",
          "Next: communication strategy — messaging by audience and moment, not a single all-staff email that proves you announced something.",
        ],
      },
    ],
  },

  "communication-strategy": {
    intro:
      "A single all-staff email is not a strategy. It is a receipt that you announced something. Change communication is who hears what, at which moment, through a channel they already use — and what you want them to do before Friday.",
    sections: [
      {
        id: "audience-not-everyone",
        title: "Audience is a decision, not a distribution list",
        body: [
          "Segment from the impact map. Sponsors need decisions and residual risk. Line managers need what to say to their team this week and what to stop doing. Users need what changes in their next shift. The wider organisation needs a short 'this is happening, here is who it does not affect.' If those four messages are the same paragraph, three of the audiences will delete it.",
          "Write from their Tuesday, not from the programme's self-image. 'We are transforming the operating model' is a slogan. 'From 12 May you raise incidents in ServiceNow, not the shared inbox; the inbox will be closed' is a message. People can act on the second. The first is for the intranet banner and the people who design intranet banners.",
          "Name the sender. A message about 'how your team will work' should come from their manager, with the change team supplying the words. A message about funding and non-negotiables should come from the sponsor. When the PMO sends everything, the organisation learns that change is a central newsletter. Central newsletters are optional. Manager conversations are not — if you design them that way.",
        ],
      },
      {
        id: "moments-that-matter",
        title: "Moments, not a content calendar that congratulates itself",
        body: [
          "Plan around moments: first rumour, formal announce, design involvement, training invite, go-live week, first real deadline after go-live, and the point where the old process dies. Each moment has a job. Announce creates Awareness. Go-live week needs Ability support, not another vision film. The first month-end needs a human in the room, not a recap of the benefits case.",
          "Say what is true at this moment, including what you do not know. 'The vendor date is not locked; we will confirm by 3 June; until then do not cancel the old run' is communication. 'Exciting progress' is how you train people to wait for the leak. Uncertainty stated with a date is adult. Cheerfulness without a date is how rumours get a head start.",
          "Repeat the few facts that must stick: what changes, when, what to do, where to get help, what is ending. People do not fail to 'engage' because you lacked a campaign name. They fail because the one sentence they needed was buried under a journey metaphor. If the sentence does not fit on a manager's stand-up note, it is not ready.",
        ],
      },
      {
        id: "channels-and-feedback",
        title: "Channels they already use — and a way to talk back",
        body: [
          "Use the channels the audience already opens. A team that lives in a shift briefing will not find your Yammer post. A leadership cohort that only reads the Friday pack will not watch a twelve-minute video. Match channel to habit. Inventing a 'change hub' is fine as a library. It is a poor primary channel unless someone already works there.",
          "Build a return path. Comments, office hours, a named contact, a manager briefing they can ask questions in. Broadcast without a return path is a tannoy. You will not hear the unofficial process winning until it shows up in the adoption numbers — or in a complaint that reaches the sponsor first.",
          "Measure whether the message arrived, not whether you sent it. Sample five people in a high-impact group the day after a key moment and ask them to repeat what changes for them. If they cannot, the artefact failed. Sending is an activity. Repeating it back is the test. Activities look busy in a RAID; tests change the next message.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Segment by impact, write from their Tuesday, and pick a sender they already believe. Plan moments, not a campaign mood. Use existing channels, keep a return path, and test whether the one sentence stuck.",
          "Next: training and adoption — practice, support, and measurement that change behaviour, not a slide dump with an attendance sheet.",
        ],
      },
    ],
  },

  "training-adoption": {
    intro:
      "Attendance is not adoption. A slide deck is a souvenir. Behaviour changes in the week after the session, when nobody is watching the facilitator and the old process is still one click away. Design for that week, or you have run hospitality.",
    sections: [
      {
        id: "practice-not-slides",
        title: "Practice on the real work, not a tour of the interface",
        body: [
          "Build training around the two or three tasks that define the role after go-live. A finance user should close a period, not click every menu because the vendor's deck is in that order. A manager should approve the new request, not hear a history of the programme. If the exercise is not the job, the job will not transfer.",
          "Put the system they will actually use in front of them — or a truthful rehearsal of it. Screenshots of last month's build teach people to distrust you when the buttons have moved. Timebox the talking. The room should spend more minutes doing the task than listening to why the task exists. Why belongs in a five-minute frame; the rest is reps.",
          "Split by role. A combined session 'so everyone hears the same thing' guarantees that nobody gets enough practice and everyone hears content that is not theirs. Sameness is not fairness. Fairness is enough reps on the work they will be judged on. The combined session is cheaper to schedule. It is also why you get a room of polite faces and a Monday of shadow processes.",
        ],
      },
      {
        id: "support-after-the-room",
        title: "Support after the room is the product",
        body: [
          "Name what happens in the first ten days: floor walkers, office hours, a champion on each team, a place to raise defects without shame. Training without support is a cliff. People will pass the session and fail the first live Tuesday, then invent a workaround that becomes folklore.",
          "Line managers own the week, not the trainer. The trainer leaves. The manager still assigns work. If the manager does not protect time, check the new output, and stop accepting the old one, your session was a courtesy. Brief managers on what 'good' looks like this week and what to do when someone reverts. That briefing is training too. It is the one most programmes skip because it requires a conversation with people who are already late for something else.",
          "Make help faster than the workaround. If the unofficial spreadsheet answers in thirty seconds and the service desk answers in two days, you already know who wins. Put answers where the work happens: a short job aid on the first screen, a named person on the team, a defect path that is not a philosophy. Speed is a change tool. Charm is not.",
        ],
      },
      {
        id: "measure-behaviour",
        title: "Measure the behaviour, not the hospitality",
        body: [
          "Pick two or three leading indicators that the new work is happening: percentage of requests in the new system, old-form volume, time to complete the critical task, error rate, or 'manager has reviewed live output.' 'Attended training' is a hospitality metric. It tells you the room was occupied. It does not tell you the process moved.",
          "Set a review date before go-live. Ten days and thirty days are enough to see whether practice stuck. Look at the groups from your impact map, not a single corporate average. An average that is Green can hide a department that has not started. Averages are how programmes congratulate themselves while a shadow process becomes the real one.",
          "When the number is bad, change the intervention, not the target. More slides for a group that has Knowledge and no Ability is theatre. They need practice and a manager who will not accept the old output. Write that diagnosis in ADKAR terms if it helps the sponsor hear it. Then spend the hours on the letter that is actually failing.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Train the real tasks, by role, on a truthful system. Support the first ten days through managers and fast help. Measure whether the new work is happening, not whether people sat in a room.",
          "Next: sustaining change — owners, metrics, and the unglamorous act of turning the old process off.",
        ],
      },
    ],
  },

  "sustaining-change": {
    intro:
      "Projects end. Old processes do not, unless someone kills them. Sustain is owners who stay, metrics that still get read, and a date when the unofficial path stops working. Everything else is a wrap-up slide with cake.",
    sections: [
      {
        id: "owners-after-the-project",
        title: "Owners who remain after the bunting comes down",
        body: [
          "Name an operational owner for the new way of working before go-live — a person with a day job in the line, not a project role that expires. The owner decides what 'good' looks like next quarter, chases the metric, and has the standing to refuse a workaround. 'The change team' is not an owner. They are leaving. That is the point of a project.",
          "Write the handover as work, not a folder. What is the cadence? Who reviews the numbers? What is the escalation if adoption drops? Which defects still sit with IT? A SharePoint site is a filing cabinet. A thirty-minute monthly review with a named chair is a system. If you cannot point to the next three dates, you have not handed over. You have unburdened yourself.",
          "Keep a sponsor for the first quarter after go-live, even if they only see a one-page metric. The organisation will test whether the new way is optional. A sponsor who has already moved on to the next announcement is how 'optional' wins. You do not need them in the weeds. You need them when someone important asks to reopen the old form 'just for my team.'",
        ],
      },
      {
        id: "metrics-that-stay-honest",
        title: "Metrics that stay honest after the project glow fades",
        body: [
          "Keep a short set: one adoption metric, one quality or error metric, one pain metric the original case promised to remove. If the case said month-end would shrink, measure month-end. Do not replace it with a satisfaction score because the satisfaction score is easier to Green. Easy Green is how sustain becomes a mood.",
          "Review on a standing cadence with the operational owner, not as a project meeting that nobody has the heart to cancel. Ten minutes on the three numbers and one action. If the meeting is always 'too full,' the organisation is telling you sustain is not a priority. Believe it, then escalate that fact rather than adding a fourth dashboard.",
          "Publish movement, not a gallery. 'Old-form volume fell from 40% to 8%; remaining volume is Team B; owner is booking their switch-off date.' That sentence is sustain. A heatmap of twelve culture indices is a mural. Murals do not turn processes off.",
        ],
      },
      {
        id: "stop-the-old-process",
        title: "Stop the old process. On a date. With a lock.",
        body: [
          "If the old form, inbox, or workaround still works, people will use it. They are not resisting. They are efficient. Dual running is a temporary bridge with an end date, not a personality trait of a cautious culture. Write the switch-off date when you write the go-live date. A bridge without an end is a new road you did not intend to fund.",
          "Make the old path fail closed: disable the form, close the inbox, remove the permission, stop accepting the spreadsheet as an input. Announce it twice — two weeks before, and on the morning. Provide the help path in the same message. A lock without help is cruelty. Help without a lock is a suggestion. Suggestions lose to habit.",
          "Expect one senior exception request. Treat it as a decision, not a vibe. If you grant it, give it an expiry and a public reason. If you grant it quietly and forever, you have taught the organisation that sustain is negotiable for people with a title. That lesson travels faster than your benefits case.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Sustain is an operational owner, a short metric set on a standing cadence, a sponsor who will refuse the old way for one more quarter, and a lock on the unofficial path. Dual running needs an end date. Help without a lock is a suggestion.",
          "You now have a working change practice: models as tools, impact as a map, communication by audience and moment, training that changes behaviour, and sustain that outlives the project. Use it on a live change this month — even a small one. A switch-off date with an owner beats a framework wall.",
        ],
      },
    ],
  },

  "defining-mandate": {
    intro:
      "A PMO without a mandate is a helpdesk with a loftier job title. The mandate is a sponsor who will spend political capital, a charter that says what you exist to do, and authority limits that say what you can stop, start, and escalate. Everything else is stationery.",
    sections: [
      {
        id: "sponsor-is-not-a-logo",
        title: "The sponsor is not a logo on the pack",
        body: [
          "The PMO sponsor is the senior person who owns the reason the office exists and will decide when another function tries to ignore it. They fund it, defend the few rules, and take the escalation when a project refuses intake. A sponsor who 'loves the idea of a PMO' and then goes quiet in steerco has given you a compliment, not a mandate.",
          "Get a name, a meeting cadence, and one sentence they will say in public: what the PMO is for this year. If they cannot say the sentence, you do not have air cover. You have a reporting line. Those are different. A reporting line gets you invited. Air cover gets a late project told to use the process anyway.",
          "Do not accept a committee as a substitute unless one person can still break a tie. Committees sponsor by average, which means they sponsor nothing sharp. When the first fight arrives — and it will — you need a human who can say 'this is in, that is out' before the room redesigns your job in real time.",
        ],
      },
      {
        id: "charter-that-can-be-used",
        title: "A charter you can point at in a disagreement",
        body: [
          "Write one to two pages: purpose, in-scope services, out-of-scope temptations, the few decisions the PMO can make, the decisions it only recommends, and how success will be judged in ninety days. If it reads like a capability brochure, it will be treated like one. Brochures do not stop a director from bypassing intake.",
          "Purpose is a problem statement, not a vision. 'Reduce surprise delivery risk and make cross-project resource fights visible' is a purpose. 'Drive excellence and empower the enterprise' is a mural. You cannot escalate against a mural. You can escalate against a purpose that a late project is currently violating.",
          "List the temptations explicitly: running projects for people, owning the whole methodology religion, becoming the minutes service, building a 40-slide operating model before you have removed one pain. If you do not write the exclusions, they will become your week. The organisation will fill any silence with tasks it does not want to own.",
        ],
      },
      {
        id: "authority-limits",
        title: "Authority limits — the adult section",
        body: [
          "State what you can stop (work that has not passed intake), what you can start (a standard status, a risk view, a resource snapshot), and what you can only escalate (a sponsor who will not fund a dependency, a portfolio that is 140% allocated). 'We influence best practice' is how you become optional. Optional PMOs die in the first budget round.",
          "Match the authority to what the organisation will actually tolerate this year. A new PMO that claims it can halt any project will be walked around. A PMO that can refuse to report a project that will not use the intake form has a small, real power. Small real power beats theatrical power that nobody honours. You can grow the former. The latter is a costume.",
          "Publish the limits to the people who will test them. Project managers, functional heads, and the sponsor's peers. When someone asks you to 'just be flexible this once,' you should be able to point to the line and the person who set it. Flexibility without a published line is not customer service. It is how the mandate dissolves one exception at a time.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Mandate is a sponsor with a public sentence, a short charter with a purpose and exclusions, and authority limits the organisation will honour this year. Influence without a stop/start/escalate line is a helpdesk.",
          "Next: PMO model selection — supportive, controlling, or directive, fitted to readiness rather than to the model you admired at a conference.",
        ],
      },
    ],
  },

  "pmo-model-selection": {
    intro:
      "Supportive, controlling, and directive are degrees of authority, not a maturity ladder you climb to prove seriousness. The question is what this organisation will accept this year — and what problem you were hired to reduce. Pick for fit. Ambition without readiness is a coup with a RACI.",
    sections: [
      {
        id: "three-models",
        title: "The three models, without the brochure language",
        body: [
          "Supportive provides templates, coaching, and a place to ask. It does not stop work. It wins when the organisation is competent but inconsistent, and when forcing compliance would create a shadow portfolio by Friday. The risk is becoming a stationery cupboard that people thank and then ignore.",
          "Controlling sets a few mandatory standards — intake, status, change, risk — and checks them. It can withhold a report, a stage gate, or a resource view until the basics are present. It wins when the pain is chaos across projects, not ignorance inside one. The risk is turning into the process police whose metrics are 'forms completed' while delivery still surprises the board.",
          "Directive supplies or directs the project managers, owns prioritisation mechanics, and can move people across the portfolio. It wins in a crisis, a tightly coupled programme, or a culture that already accepts central allocation. The risk is owning every failure and every grudge. Directive in a sceptical culture is not leadership. It is a fight you will not have the hours for.",
        ],
      },
      {
        id: "fit-to-readiness",
        title: "Fit the model to readiness, not to your CV",
        body: [
          "Readiness is evidence: do sponsors already escalate through a centre, or do they route around it? Are project managers trained, or borrowed and drowning? Is there a single view of demand, or twelve spreadsheets that do not add up? A directive model on twelve spreadsheets just gives you a thirteenth owner. A supportive model in a crisis just gives you a nicer template for the fire.",
          "Ask the sponsor which pain they will back in public. If they will not back a gate, you are not controlling, whatever the slide says. If they will not back central staffing, you are not directive. The model is the authority they will spend, written down. Everything else is cosplay. Write their answer in the charter before you hire to the fantasy.",
          "Hybrid is allowed if it is explicit. Supportive on delivery method, controlling on intake and status, is a common adult mix. 'Mostly supportive but we might be directive if needed' is how staff and project managers hear two different jobs and trust neither. Name the services that are mandatory. Name the ones that are offered. Do not let 'flexible' mean 'we will decide when someone shouts.'",
        ],
      },
      {
        id: "evolve-on-purpose",
        title: "Evolve on purpose, on a date",
        body: [
          "You can tighten later. You cannot easily loosen after you have made enemies enforcing rules you did not have the mandate for. Start at the lightest model that still removes the sponsor's stated pain. If the pain is 'we cannot see status,' controlling on status is enough. Do not bolt on resource command because a textbook said the next level is directive.",
          "Set a review at ninety days: keep, tighten one service, or drop a service that is theatre. Use the same three tests you will use for value — a pain removed, a decision improved, a metric trusted. If none of those moved, the model is wrong or the mandate was fiction. Changing the org chart at that point is cheaper than adding headcount to a model nobody obeys.",
          "Tell the organisation the model in one sentence they can repeat. 'We run intake and a single status; we coach everything else.' If they cannot repeat it, they will invent a more frightening version. Fear of a directive PMO is how you get a boycott of a supportive one. Clarity is cheaper than a roadshow.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Supportive offers, controlling mandates a few standards, directive allocates. Fit the model to the pain the sponsor will back and the readiness you can evidence. Hybrid is fine if mandatory and optional are named. Start light; tighten on a dated review.",
          "Next: PMO processes — the few day-one rhythms worth enforcing, and the playbook pages you should refuse to write yet.",
        ],
      },
    ],
  },

  "pmo-processes": {
    intro:
      "Day one needs a handful of processes people will actually use: intake, status, change, risk, and a resource view. Few, enforced. A forty-page operating model is a brochure that postpones the first useful Friday.",
    sections: [
      {
        id: "few-and-enforced",
        title: "Few processes, enforced — or they are literature",
        body: [
          "Five processes is plenty. Each should have a trigger, an owner, a one-page how, and a consequence if skipped. Intake without a consequence is a suggestion box. Status without a consequence is a creative writing club. The consequence can be small: no steerco slot, no resource view, no 'official' status. Small and real beats dramatic and ignored.",
          "Write them so a busy PM can finish them on a Thursday. If intake takes a workshop and a fifteen-page business case, you have built a barrier for the honest and a bypass for the powerful. The powerful will go to the sponsor. The honest will drown. That is how PMOs earn a reputation for slowing the wrong work.",
          "Do not add a process because a framework listed it. Add it when a repeated pain has a name. Benefits realisation, knowledge management, and a full stage-gate cathedral can wait until the five basics are boringly true. Boredom is a quality signal. If the basics are still a weekly argument, you do not have a maturity gap. You have an enforcement gap.",
        ],
      },
      {
        id: "the-five",
        title: "The five that earn their keep from week one",
        body: [
          "Intake: a short request that answers why this, why now, what it needs, and what it displaces. Someone with mandate accepts, rejects, or parks. Parked is a decision. A queue that only grows is a parking lot you are too polite to call a no. Publish the list. Invisible intake is how pet projects stay pets.",
          "Status and change: one status shape for every project the PMO will speak about — plan versus actual, top risks, decisions needed. Change is a one-page request that names impact on date, cost, and scope, with a known approver. Risk is a living top-five, not a register of forty ghosts. If you cannot see movement in those three, you are collecting artefacts. Artefacts do not escalate.",
          "Resource view: who is committed where, at what percentage, for which horizon. It will be ugly and incomplete at first. That is still more honest than twelve managers each believing they have the same person at 80%. You are not trying to win an accuracy prize in month one. You are trying to make the over-allocation visible enough that a grown-up has to look at it.",
        ],
      },
      {
        id: "run-them-weekly",
        title: "Run them on a calendar, not as a transformation",
        body: [
          "Put intake review, status collection, and the resource snapshot on the same weekly rhythm. Ten minutes each with the people who own the data. If the meeting is always skipped, the process is already dead; the document is a memorial. Kill the meeting or kill the skip. Do not keep both and call it 'adoption in progress.'",
          "Coach once, then apply the rule. The first month you teach the status shape. The second month you refuse to present a project that will not use it. Kindness without a second month is how you become the team that nags. Nagging is not a process. It is a mood the organisation learns to wait out.",
          "Keep a public exception log. When you waive intake for a 'special' initiative, write why and when it will come back through the front door. Hidden exceptions are how the powerful teach everyone else that the PMO is optional. Visible exceptions, dated, keep the rule intact. Invisible ones delete it.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Day one: intake, status, change, risk, resource view. Each needs a trigger, an owner, a short how, and a real consequence. Run them weekly. Publish exceptions. Refuse the forty-page model until these five are boring.",
          "Next: staffing the PMO — capability you can deploy, not headcount theatre that looks like a department.",
        ],
      },
    ],
  },

  "staffing-pmo": {
    intro:
      "A PMO is staffed for capability, not for the org chart to look serious. Six coordinators and no one who can run a portfolio conversation is a reception desk. Hire the skills the mandate requires. Headcount is a budget line. Capability is what shows up in the meeting.",
    sections: [
      {
        id: "roles-that-earn-keep",
        title: "Roles that earn their keep",
        body: [
          "Start from the services in the charter, not from a generic PMO structure you admired. If you run intake and status, you need someone who can challenge a woolly request and write a one-page that a sponsor will read. If you run a resource view, you need someone who will sit with functional managers and not blink first. If you only have 'PMO analyst,' you have a title looking for a job.",
          "Typical useful shapes: a lead who can hold the sponsor and say no; a planner or analyst who keeps the five processes true; a coach who can lift a struggling PM without taking the project off them. You may wear two of those hats at the start. That is fine. Three hats and a full exception log is how the lead becomes the bottleneck and the processes become rumours.",
          "Do not staff a communications officer, a benefits lead, and a tooling specialist before the five processes work. Those roles can be real later. Early, they become a way to look busy while intake is still a shared inbox. The organisation can smell a department that was hired to exist. It will route around it and then ask, at year-end, what you were for.",
        ],
      },
      {
        id: "capability-not-theatre",
        title: "Capability, not headcount theatre",
        body: [
          "Write the capabilities as verbs: challenge a business case, facilitate a nasty resource trade, keep a risk top-five honest, teach a PM the status shape in thirty minutes. Interview for the verb. A CV full of tools and frameworks is not a verb. You can teach a tool. You cannot quickly teach someone to hold a silence while a director rewrites history.",
          "Borrow before you hire when the mandate is still being tested. A strong PM on rotation, a finance partner two days a week, a data person who can make the resource view less humiliating. Borrowed people also export the PMO into the line when they go back. That is useful. A fortress of permanent junior staff is how you become 'those people on the fourth floor.'",
          "Watch the theatre tells: matching another organisation's headcount, hiring to the full model on day one, creating deputies so the chart has a second box. If the sponsor asked for visibility in ninety days, a deputy does not create visibility. A working status shape does. Spend the first seats on the bottleneck skill. Empty boxes look like ambition. They cost like ambition too.",
        ],
      },
      {
        id: "how-they-work",
        title: "How the small team actually works",
        body: [
          "Give each person a service they own, not a slice of every meeting. Ownership means they can improve the one-pager and they are blamed when it goes stale. Shared ownership of everything is how nothing has a name when it fails. The lead still holds the sponsor. The rest should not need the lead to collect a status.",
          "Protect time for coaching and for the weekly rhythm. A PMO that is 100% in other people's meetings has no time to make the resource view true. You will preach utilisation discipline to the organisation and model the opposite. They will notice. Hypocrisy is a staffing choice.",
          "Plan the first hire you do not yet have as a dated gap, not a vibe. 'If controlling on resource stays in the mandate after ninety days, we need a planner who can run the conflict conversation.' That sentence belongs in the sponsor review. 'We need more people' does not. More people is how theatre asks for a sequel.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Staff from the charter's services. Hire for verbs. Borrow before you build a fortress. Give each person a service to own, protect time for the weekly rhythm, and treat the next seat as a dated gap tied to the mandate.",
          "Next: demonstrating PMO value — one pain, one decision, one trusted metric in ninety days, not a forty-slide operating model.",
        ],
      },
    ],
  },

  "pmo-roi": {
    intro:
      "A PMO proves value in ninety days by removing one pain, improving one decision, and making one metric trusted. A forty-slide operating model is a brochure. Brochures do not survive a budget conversation with a sceptical CFO.",
    sections: [
      {
        id: "ninety-day-triple",
        title: "The ninety-day triple — pain, decision, metric",
        body: [
          "Pick one pain the sponsor already feels: late surprises, invisible demand, status that cannot be compared, resource fights that arrive as shouting. Remove it in a way a sceptic can see. 'We now refuse to present a project without the one-page status' is a pain removed if steerco used to sit through twelve different novels. 'We launched a community of practice' is a hobby unless it changed a Friday.",
          "Improve one decision. A parked intake that freed a scarce engineer. A change request that was rejected with numbers instead of mood. A portfolio conversation where two projects stopped pretending they both had the same person. Write the decision down with the date and the alternative that was not taken. Value that cannot be retold as a decision will be retold as overhead.",
          "Make one metric trusted. Trusted means two sceptical people will use it without running their own spreadsheet. A resource view that functional heads correct but do not replace. A delivery date set that matches what PMs say in the corridor. Accuracy can wait; trust cannot. A precise number nobody believes is a decoration. An ugly number everyone uses is an asset.",
        ],
      },
      {
        id: "refuse-the-brochure",
        title: "Refuse the forty-slide operating model",
        body: [
          "An operating model deck is a delay tactic with typography. It feels like progress because it photographs well. It does not change Tuesday. If someone demands the model, give them the charter, the five processes, and the ninety-day triple. That is the operating model. The rest is furniture you can design after the furniture is being used.",
          "Vanity metrics will try to join the story: templates downloaded, training seats filled, number of projects 'touched.' Count them privately if you must. Do not lead with them. A sponsor who is still being surprised does not care how many templates you have. Leading with activity is how PMOs sound busy and optional at the same time.",
          "Tell the story in the organisation's units: weeks of surprise avoided, pounds not spent on the rejected duplicate, hours returned when status stopped being a scavenger hunt. If you cannot find units yet, you are not ready to claim value. You are ready to keep working. Claiming early with fog is how you get a reputation for spin, which is fatal in a function that sells honesty.",
        ],
      },
      {
        id: "make-it-a-habit",
        title: "Report value the way you report delivery",
        body: [
          "Put the triple on a monthly one-pager for the sponsor: pain status, decisions this month, metric movement, and one ask. Same day each month. Consistency is how you become believed. A quarterly spectacular is how you become a presentation. Presentations are easy to cancel.",
          "Invite a sceptic to mark the page. If they will not initial that the metric is the one they use, you do not have a trusted metric. That disagreement is useful in month two. It is humiliating in month eleven, when the budget is discussed and they produce their own numbers. Better to lose an argument early than to lose a function late.",
          "At ninety days, recommend keep, tighten, or cut. Cut is a professional option. A PMO that cannot name a service to stop will be asked to stop entirely by someone who can. Survival is not a purpose. The purpose was in the charter. If you met it, say so and name the next pain. If you missed it, say so and name the change. Either sentence is value. A third year of 'building the foundation' is not.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Ninety days: one visible pain removed, one decision improved and dated, one metric two sceptics will use. Lead with the organisation's units, not activity counts. Report monthly. At ninety days, keep, tighten, or cut.",
          "You now have a PMO you can stand up without a costume: a mandate, a model that fits, five enforced processes, a small capable team, and a value story that survives a CFO. Run the ninety-day triple on the real portfolio. A trusted ugly number beats a beautiful operating model that never left the slide.",
        ],
      },
    ],
  },

  "capacity-planning": {
    intro:
      "Capacity is what people can actually do after you subtract leave, meetings, BAU, and the promises already made. Demand is a forecast with an argument. The gap between them is the plan. A spreadsheet that shows them equal is usually a wish that learned to use SUM().",
    sections: [
      {
        id: "capacity-is-not-headcount",
        title: "Capacity is not a headcount times five days",
        body: [
          "Start with named people or named skill pools, then apply a reality factor. A 'full-time' analyst who sits in twelve hours of recurring meetings is not ten days a fortnight. Neither is someone at 80% on BAU and 80% on your project unless they have given up sleep. Write the assumptions. Hidden optimism is how capacity plans become fiction with a version number.",
          "Separate types of capacity or you will add the unaddable. A senior engineer is not interchangeable with two juniors. A security reviewer is not 'an IT resource.' Skill, seniority, and the right to decide are different scarce things. If your plan only has FTE, you will discover the constraint in week six, when the one person who can sign the design is on leave you did not model.",
          "Include the calendar the organisation pretends not to have: year-end, school holidays, the conference that removes your architects, the audit that steals your testers. Capacity without a calendar is a laboratory number. Laboratory numbers do not survive June. Update monthly; a quarterly refresh is how summer arrives as a surprise.",
        ],
      },
      {
        id: "demand-with-an-argument",
        title: "Demand is a forecast, not a backlog of hopes",
        body: [
          "Collect demand as work that wants people: projects in flight, projects that have passed intake, BAU that is real, and a thin slice of 'likely to start.' Do not load the plan with every idea in a strategy deck. Strategy decks are not a queue. If it has not survived intake, it is a story. Stories do not get named people.",
          "Ask each request for profile, not just a total: which skills, which months, what is fixed versus movable. A project that needs the same three people in the same fortnight as everyone else is a collision, not a rounding error. Totals hide collisions. Profiles reveal them. If a sponsor will only give you a total, your first job is to refuse to plan from it.",
          "Date the demand. A number without a month is a slogan. Re-forecast when scope moves or a start date slips. Stale demand is how you keep a team 'reserved' for work that has already died, while live work steals from the only pool that still had slack. Killing dead demand is a capacity increase. It is also free, which is why it is strangely unpopular.",
        ],
      },
      {
        id: "the-gap-is-the-plan",
        title: "The gap is the decision, not a formatting problem",
        body: [
          "Show the gap by month and skill. Over-allocation is a decision waiting: descope, delay, hire, contract, or stop something. Under-allocation is also a decision: do not invent work to look busy, and do not hoard people 'in case.' Hoarding is how unofficial projects get staffed while the portfolio pretends it is disciplined.",
          "Take the ugly picture to the people who can change demand. A capacity plan that stays in the PMO is a diary. A capacity plan that forces a portfolio conversation is a tool. Bring two options, not a plea. 'If we start Project C in May, Project B slips six weeks or we buy two contractors; here is the cost of each.' That is planning. 'We're stretched' is weather.",
          "Revisit on a standing cadence — monthly is the slowest that still deserves the word 'plan.' If nothing ever changes in the numbers, you are not planning. You are maintaining a museum of last quarter's optimism. Museums are educational. They are not how you staff next month.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Capacity is named people or skills after reality factors and the real calendar. Demand is dated, profiled work that has earned a place in the queue. The gap is a decision for people who can change demand, brought with options.",
          "Next: resource allocation — treating the assignment as a decision about who does not get the person, not as a spreadsheet that says yes to everyone.",
        ],
      },
    ],
  },

  "resource-allocation": {
    intro:
      "Allocation is a decision: this person, this work, this horizon, and therefore not that work. A spreadsheet that lists everyone as assigned is a wish that learned to use a drop-down. Wishes do not show up on Monday.",
    sections: [
      {
        id: "decision-not-wish",
        title: "If nobody lost, you did not allocate",
        body: [
          "A real allocation names the individual or the only-available skill, the percentage, the start and end, and the work that was refused or delayed as a result. If every request got a name, either you had slack you had not admitted or you double-booked. Double-booking is the more popular explanation. It photographs as a complete plan until the first Tuesday.",
          "Get the assignment confirmed by the person who actually manages the individual's time — usually a functional lead, not the PM who wants them. A PM typing a name into a plan is a request. A functional lead saying 'yes, 60% from 2 June' is an allocation. Confusing those two is how projects publish Gantt charts that the humans have never agreed to.",
          "Write the horizon. 'Support as needed' is not an allocation. It is a guilt trip. Four weeks at 50% can be managed. Open-ended 20% across five projects is how you get a senior person who is in every meeting and finishing nothing. If you cannot name an end date, you do not have a plan. You have a habit.",
        ],
      },
      {
        id: "criteria-in-the-room",
        title: "Decide with criteria, not with who shouted last",
        body: [
          "Agree the few criteria before the fight: legal or safety deadlines, committed external dates, value or cost of delay, and unique skill. Then apply them in the room with the options visible. Criteria you invent after a director has already lost will be heard as a weapon. Criteria you published last month will be heard as a process. Same numbers. Different politics.",
          "Prefer whole people on fewer things. Two people at 50% on four projects each is not flexibility. It is a meeting tax. Context-switching is a capacity leak you will not see if you only track percentages. A 50% allocation that requires six stand-ups is not 50%. It is a rounding error with a calendar.",
          "Record the decision in one line: who, where, instead of what, who agreed. When the loser returns in a fortnight to renegotiate from memory, the line is the adult in the room. 'We discussed it' is not a record. Memory is how the loudest person reallocates you in the corridor.",
        ],
      },
      {
        id: "reallocate-on-purpose",
        title: "Reallocate on purpose when the world changes",
        body: [
          "Plans rot. A slip, a sickness, a scope cut, a surprise audit — any of these should trigger a reallocation conversation, not a silent shuffle in the sheet. Silent shuffles teach people that the published plan is decorative. Decorative plans make the next honest conversation harder, because nobody believes the starting point.",
          "Freeze allocations for a freeze window when you need stability — a release fortnight, a year-end close. Publish the freeze and the exception path. A freeze nobody knows about is just a PMO mood. A freeze with an exception path is a rule. Rules can be kept. Moods get walked around.",
          "Do not use the sheet to hide a no. If the answer is 'not this quarter,' say it where demand is decided. Moving someone to 5% so the cell is not empty is how you keep a project 'green' on resourcing while the work waits. Empty and honest beats full and fictional. Fictional fullness is the most common allocation style in organisations that 'have a resource plan.'",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Allocation names the person, the percentage, the horizon, and the work that lost. Confirm with the functional lead. Use published criteria, prefer fewer concurrent assignments, and record the decision. Reallocate in the open; freeze on purpose; never hide a no as 5%.",
          "Next: resource conflict resolution — escalating with options, not with a weather report about being stretched.",
        ],
      },
    ],
  },

  "conflict-resolution": {
    intro:
      "Resource conflicts are a feature of a live portfolio, not a failure of politeness. The professional move is to escalate early with options and a recommendation. 'We're stuck' is a weather report. Weather reports do not free an engineer.",
    sections: [
      {
        id: "name-the-conflict",
        title: "Name the conflict while it is still a choice",
        body: [
          "A conflict exists when two pieces of committed work need the same scarce person or skill in the same window. Feelings of busyness are not a conflict. A calendar that adds to 140% is. Write it as: who, which two (or three) demands, which dates, what happens if each side loses. Until it is written that way, you are arguing about vibes.",
          "Detect it from the resource view, not from the shouting. If you only notice when two PMs are already in a corridor, you are late. Late conflicts arrive as moral claims — 'my project is more important' — because the planning window has closed and only status remains. Early conflicts can still move a date. That is why the view exists.",
          "Do not ask the scarce person to choose. They will choose the louder manager or the work they prefer, which may be rational for them and disastrous for the portfolio. Their job is to say what is true about effort and skill. The choice is a management decision. Loading it onto the individual is how organisations punish their most useful people.",
        ],
      },
      {
        id: "escalate-with-options",
        title: "Escalate with options, or do not bother",
        body: [
          "Take two or three options to the person who can change demand — usually a sponsor or portfolio head, not 'the PMO' as a vibe. Option A: delay B by four weeks. Option B: cut scope on A to release ten days. Option C: buy a contractor at this cost and this ramp risk. Add a recommendation. An escalation without a recommendation is a complaint with a meeting invite.",
          "Put costs in the organisation's units: missed regulatory date, extra month of dual running, pounds, a customer commitment already made. Do not put costs in PMO units ('process non-compliance'). Nobody funds those. If you cannot yet cost an option, say the range and the unknown. A honest range beats a fake precise number that will be remembered when it is wrong.",
          "Timebox the decision. 'Need a call by Thursday or we default to Option A because the vendor window will not move.' Defaults are kind. Open-ended escalations are how both projects keep spending as if they won. While you wait for courage, the scarce person is already doing neither job well. That cost does not appear on either status until it is too late to look competent.",
        ],
      },
      {
        id: "after-the-call",
        title: "After the call: write it, then hold it",
        body: [
          "Record the decision, the option not taken, and the review date if the losing work is only deferred. Tell both PMs and the functional lead the same day. A decision that travels by rumour will be re-litigated by the person who was not in the room. Speed is part of the resolution. So is the same sentence in all three inboxes.",
          "Watch for the unofficial re-trade. The losing sponsor will try the corridor. Your job is to point at the record and the next formal window, not to re-run the meeting because someone has found a new adjective. If new facts arrive — a date moved, a person resigned — that is a new conflict. A new adjective is not a new fact.",
          "If the same two projects collide every month, you do not have a series of conflicts. You have a portfolio that will not choose. Take that pattern to the sponsor as a mandate issue: too much started, or a model that cannot allocate. Resolving the same fight monthly is not diligence. It is a tax you are paying for an unmade strategy.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Write conflicts as scarce person, competing demands, dates, and loss on each side. Do not make the individual choose. Escalate with two or three costed options, a recommendation, and a default date. Record the outcome and treat repeats as a portfolio problem.",
          "Next: utilisation metrics — why 100% is a warning light, and what 'good' looks like when slack is how surprises get absorbed.",
        ],
      },
    ],
  },

  "utilisation-metrics": {
    intro:
      "Utilisation is the share of capacity spent on planned work. 100% is a warning, not a goal. A team with no slack cannot absorb a surprise, so every surprise becomes an incident — and then a hero story you will be asked to repeat until someone goes on sick leave.",
    sections: [
      {
        id: "what-it-measures",
        title: "What utilisation measures — and what it pretends to",
        body: [
          "Define the numerator and denominator in one sentence. Typical: booked project and agreed BAU hours divided by available hours after leave. If you include every meeting, you will invent a crisis. If you exclude the meetings that are the job, you will invent spare capacity. Write the rule. Then do not change it mid-quarter because a director did not like the colour.",
          "Split by role. A tester at 85% and an architect at 110% are not 'the team at 95%.' Averages hide the constraint. The constraint is the person whose calendar is already a crime. Report the constraint and the pool, not a single corporate percentage that exists to be Green.",
          "Do not confuse utilisation with productivity or value. A person can be 90% utilised on work that should have been killed at intake. A person can be 60% utilised because you cannot start the next thing until a vendor moves. The first is a portfolio problem. The second is a schedule problem. Raising utilisation in either case without looking is how you get busy fools and then a briefing about culture.",
        ],
      },
      {
        id: "hundred-is-a-warning",
        title: "100% is a warning light",
        body: [
          "At 100% there is no slack for the defect, the audit, the illness, or the question from a sponsor that is actually two days of work. Those things still arrive. They arrive as overtime, silent de-scoping, or a missed date that 'could not have been foreseen.' It could. You foresaw it when you celebrated a full book.",
          "Aim for a band, not a goal line. Many knowledge teams are healthy in the 70–85% planned band, with the rest as slack for the unplanned work that is, in fact, the job. The right band depends on how lumpy the surprises are. A stable factory can run tighter. A change portfolio cannot. If your organisation's only target is 100%, you are not measuring utilisation. You are measuring obedience to a finance myth.",
          "Watch the people at 110% and the people at 40% with equal seriousness. Over is a burn and quality risk. Under may be a demand problem, a skill mismatch, or a manager hoarding. Both are decisions. Only reporting the average lets both continue. The hero at 110% will be your next single point of failure. The person at 40% will become a rumour about 'PMO inefficiency' unless you explain the gap.",
        ],
      },
      {
        id: "use-without-perverse",
        title: "Use the number without teaching people to game it",
        body: [
          "Never use utilisation as a personal scorecard for knowledge work. People will book phantom tasks, sit in meetings to look allocated, and hide the slack you need. You asked for a theatre. They will supply it. They are not dishonest. They are responding to the incentive with the professionalism you trained into them.",
          "Use it to find conversations: which skill is the constraint, which project is the silent overtime engine, where slack has vanished before a risky window. Then go and look. The metric is a flashlight. It is not a verdict. Verdicts belong to people who have seen the week.",
          "Publish the definition next to the chart. When someone says 'utilisation is down,' you should be able to say 'against this denominator, for this pool, and here is the slack we are holding for June go-live.' If you cannot, the number will be used against you by whoever needed a stick that day. Undefined metrics are communal weapons. Defined ones are tools.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Define hours in and hours out. Report the constraint, not just the average. Treat 100% as a warning; hold slack on purpose. Do not score individuals. Use the number to find the next conversation, and keep the definition next to the chart.",
          "Next: workforce planning — hire, contract, or build a pipeline without treating people as interchangeable widgets.",
        ],
      },
    ],
  },

  "workforce-planning": {
    intro:
      "Workforce planning is how you close a capacity gap that will not yield to shuffling the same twelve people. Hire, contract, or build a pipeline — and refuse the fantasy that people are interchangeable widgets with a role name. The widget fantasy is how you replace a senior BA and discover the knowledge was never in the job description.",
    sections: [
      {
        id: "hire-contract-build",
        title: "Hire, contract, or build — pick on purpose",
        body: [
          "Hire when the skill is enduring, the work is not a spike, and you need the knowledge to stay. Hiring is slow and honest. If the gap is this quarter and the vacancy is a fourteen-week circus, a hire is not a plan for this quarter. It is a plan for the next gap. Say that out loud so nobody 'staffs' a May risk with a July start date.",
          "Contract when the spike is real, the skill is scarce inside, or you are buying time while a hire crawls through process. Write the end date and the knowledge you must extract before it. A contractor who leaves with the system in their head is a future incident. You did not buy capacity. You rented a secret.",
          "Build a pipeline when the same scarce skill keeps appearing on the conflict log: grow a deputy, rotate a strong PM through the PMO, train two people on the brittle interface. Pipelines are slow, which is why they must start before the crisis. Starting a pipeline during the crisis is called hope. Hope is not a workforce plan. It is a status colour.",
        ],
      },
      {
        id: "not-widgets",
        title: "People are not widgets with a grade",
        body: [
          "Plan in skills and context, not just role titles. 'A BA' is not the BA who knows the billing engine and the political history of Finance. If the work needs that context, write it. Replacing them with a grade-matched stranger is how programmes stay 'fully resourced' on the chart and late in the building. The chart will not apologise.",
          "Protect the humans you keep overloading. The person who is in every conflict is not a flexible resource. They are a single point of failure with a name. Your plan should include a deputy, a stop on new work, or an exit from a committee that exists from habit. If the only strategy is 'they are resilient,' you have a moral plan and a fragile portfolio.",
          "Do not move people as if loyalty were free. A sudden reallocation that ignores the work they cared about will get you the body and lose you the mind. Explain the criteria, the horizon, and what happens to the work they leave. You still may have to move them. You do not have to treat them as a cell in a sheet. Cells do not take the next job elsewhere. People do.",
        ],
      },
      {
        id: "plan-on-a-horizon",
        title: "A horizon, a review, and a number you will defend",
        body: [
          "Keep a simple view two or three quarters out: known leavers, known peaks, skills that only one person holds, hires already in flight. That is enough to brief a sponsor. A twenty-tab strategic workforce model is a consultancy souvenir unless someone updates it when a person resigns. Most do not. Prefer a one-page that is true on Monday.",
          "Tie actions to the capacity gap you already showed. 'We need two contractors in July because the resource view is 130% on integration, and the pipeline for internal skill is a September course.' That sentence can be funded. 'We need to invest in our people' cannot. It is true and useless, which is a dangerous combination in a budget meeting.",
          "Review when the portfolio changes, not only at annual planning. Annual planning is where workforce fiction goes to get a stamp. A mid-year resignation, a new mandatory programme, a hiring freeze — each is a re-plan. If your workforce page cannot change in a week, it is not a plan. It is a poster from the offsite. Posters do not staff October.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Hire for enduring skill, contract for spikes with an extraction date, build pipelines before the crisis. Plan skills and context, not widgets. Protect the overloaded name. Keep a short horizon tied to the capacity gap, and re-plan when the portfolio moves.",
          "You now have a resource practice that can survive contact with a Monday: capacity versus demand, allocation as a decision, conflicts escalated with options, utilisation as a warning light, and a workforce plan that treats people as people. Use the ugly gap on a live portfolio this month. A dated option beats a full spreadsheet that nobody believes.",
        ],
      },
    ],
  },
}
