import type { LessonBodies } from "./types"

export const agileToolsCertsBodies: LessonBodies = {
  "safe-overview": {
    intro:
      "SAFe is a set of patterns for coordinating many agile teams on a shared cadence. It is not a personality transplant for your organisation, and copying the posters without changing decision rights is how you get stand-ups that last forty minutes and a 'release train' that never leaves the station.",
    sections: [
      {
        id: "what-safe-actually-is",
        title: "What SAFe is — and what the brochure leaves out",
        body: [
          "The Scaled Agile Framework (SAFe) describes how teams, a train of teams, and — if you need it — a portfolio sit together. The unit of delivery at scale is the Agile Release Train (ART): a long-lived group of teams aligned to a value stream, planning and releasing on a shared Program Increment (PI). Configurations exist — Essential is the core; Large Solution, Portfolio, and Full add layers when the work actually needs them. Start at the smallest configuration that matches the mess you have, not the org chart you wish you had.",
          "SAFe is useful when several teams share a product, a platform, or a date that none of them can hit alone. It is overhead when you have two teams who already talk. If your 'scale' problem is a missing product owner or a sponsor who will not rank work, a framework will not invent either. It will give you extra ceremonies in which the same absence is more expensive.",
          "Treat it as a kit of practices, not a religion. PI Planning, a program board, and a cadence are portable ideas. The trademarked role names are optional. Organisations that succeed pick the few mechanisms that fix coordination, then stop decorating. Organisations that fail buy the training, rename every manager a coach, and keep the same annual budget theatre.",
        ],
      },
      {
        id: "the-operating-pieces",
        title: "The pieces a working PM actually uses",
        body: [
          "An ART typically holds several teams — often on the order of fifty to a hundred-plus people — who plan together every PI (commonly eight to twelve weeks: a handful of iterations plus an Innovation and Planning iteration). Product Management owns the program backlog of features. A System Architect looks after the runway so teams are not discovering the platform in week ten. The Release Train Engineer (RTE) is the train's facilitator, not its executive. If your RTE is secretly the programme director with a new badge, you have not scaled agile. You have rebranded a PMO.",
          "Work arrives as features that fit a PI, split into stories the teams can finish. Prioritisation at train level is supposed to use economic thinking — Weighted Shortest Job First (WSJF) is the SAFe-branded version of 'cheap, valuable, urgent work first.' If every feature is High/High, you do not have a method. You have a queue of politics. Your job as a PM adjacent to an ART is to keep features small enough to sequence and honest enough to refuse.",
          "Cadence is the point. Shared planning, shared integration, shared review. Without a common heartbeat, 'we are all agile' means twelve different sprint end-dates and a dependency that nobody notices until the demo. Write down the cadence for your train this week: PI length, planning dates, and who may accept a feature as done. If those three are fuzzy, the rest of SAFe is costume.",
        ],
      },
      {
        id: "cargo-cult-scale",
        title: "How scaling frameworks fail in the wild",
        body: [
          "Cargo-cult SAFe looks busy. Teams sprint. The train has a name. The walls have strings. Meanwhile, features are still assigned by a steering committee that meets monthly, architects approve every story, and 'PI objectives' are last quarter's roadmap copied into a template. Inspection without the authority to adapt is just a more colourful status pack.",
          "The failure mode to watch is local optimisation with a scaled vocabulary. One team hits its sprint goals while the increment cannot integrate. Another team is 'predictable' because it only pulls work with no dependencies — which means the hard work sat on the board in red string. Scaling is supposed to make those trade-offs visible. If your metrics celebrate team velocity and ignore an unreleasable increment, you are measuring the wrong animal.",
          "Use SAFe where the coordination tax is real. Drop or shrink anything that does not change a decision. And do not let a consultant's maturity score replace a simple test: can several teams commit to a shared increment, see their dependencies, and change the plan when the first week proves the plan wrong? If not, you are not 'not ready for SAFe.' You are not ready to scale, and no configuration fixes that.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "SAFe coordinates teams on a train, on a PI cadence, with features, an RTE, and optional portfolio layers. Configurations exist; most organisations need fewer of them than the slideware implies. Copied ceremonies without decision rights are cargo cult.",
          "Next: PI Planning — the two-day event that either creates a shared plan or reveals, in public, that you never had one.",
        ],
      },
    ],
  },

  "pi-planning": {
    intro:
      "PI Planning is the ART's planning meeting with the cameras on. Two days, every team in the same (physical or virtual) room, a draft plan that gets punched in public, and a confidence vote that is worthless if people are punished for voting two. Done well, it is cheaper than twelve weeks of quiet collision.",
    sections: [
      {
        id: "before-you-book-two-days",
        title: "Do the unglamorous work before day one",
        body: [
          "PI Planning fails in the prep, not in the icebreaker. Product Management needs a ranked program backlog of features that could actually fit a PI — sized, split, and with acceptance that is not 'the steering group likes it.' Architecture needs a short briefing on what must be true (and what is still a bet). The RTE needs a room or a tool setup that lets teams see one program board, not seven personal Miro boards that will never be merged.",
          "Invite the people who can change the plan: Product Owners, Scrum Masters or team coaches, tech leads, business owners who will later accept PI objectives, and the architects who will otherwise appear in week six as a surprise constraint. A planning event of only delivery staff produces a schedule that leadership will overwrite on Monday. That is not alignment. That is a dress rehearsal for the real decisions, held without the decision-makers.",
          "Send a pre-read and a capacity reality check. Teams should know holidays, support load, and reserved work before they forecast. A team that 'commits' at 100% of theoretical hours is writing fiction with better markers. If capacity is unknown, stop and get it. Planning without capacity is how you leave with a beautiful board and a PI that was already late on the way out of the car park.",
        ],
      },
      {
        id: "the-two-days",
        title: "What the two days are for",
        body: [
          "The opening is context, not theatre: why this PI matters, what the product vision is, what the architecture will and will not support. Then teams break out. They pull features, draft sprint-level plans, write PI objectives in language a business owner can accept, and put dependencies on a shared program board. The board is the product of the event. If dependencies live only in someone's notes, you held a workshop, not a planning PI.",
          "Draft-plan review is where honesty earns its keep. Teams present what they think they can do and what they need from others. Management and business owners do not 'motivate' the room by adding scope. They resolve conflicts: this feature over that one, this dependency moved, this objective uncommitted because the vendor date is a wish. A review that only applauds is how you discover in week three that three teams planned the same integration week and none of them planned the integration.",
          "Day two adjusts, then locks a version of the truth. Risks get ROAMed — Resolved, Owned, Accepted, or Mitigated — with names, not vibes. Teams vote confidence in the PI plan. A low vote is a finding. If the room always votes five because the last person who voted two was taken aside, you have a climate problem, not a plan. End with PI objectives that a business owner will actually sign, including uncommitted objectives for the work that is a bet.",
        ],
      },
      {
        id: "after-the-applause",
        title: "After: the plan is a hypothesis with owners",
        body: [
          "Publish the program board, the PI objectives, and the ROAM list within a day. Owners confirm dependencies they accepted. A dependency that nobody confirmed is not a dependency. It is a hope that will become an issue with better lighting. Book the first ART sync and the mid-PI inspection now, while calendars are still ashamed of themselves.",
          "Protect the Innovation and Planning iteration if you have one. It is for hardening, innovation, and the next planning prep — not a secret sprint you fill because someone promised a date in the corridor. Burning the IP iteration is how trains lose the only slack that made the next PI planning sane.",
          "When the first week proves a feature will not fit, change the plan in the open. PI Planning is not a contract with the universe. It is a baseline you inspect. Quietly dropping an objective so the confidence vote still 'looks good' is how the next planning event starts from a lie.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Prep the backlog, capacity, and the people who can decide. Use the two days to produce a program board, PI objectives, and ROAMed risks. Treat a low confidence vote as data. Publish owners within a day.",
          "Next: cross-team dependencies — how to see them, shrink them, and stop pretending a red string is a delivery strategy.",
        ],
      },
    ],
  },

  "cross-team-dependencies": {
    intro:
      "A dependency is a promise that another team must keep before yours can finish. Most 'collaboration issues' are unmanaged dependencies wearing a smile. Visualise them early, reduce them on purpose, and give the remainder an owner who will notice when the promise slips.",
    sections: [
      {
        id: "see-them-before-they-bite",
        title: "See them before they bite",
        body: [
          "Write dependencies as team A needs X from team B by date, or this feature cannot meet its PI objective. 'We should stay in touch' is not a dependency. It is a social hope. Put the real ones on a program board, a dependency board, or a simple table if your tool is theatre: from, to, what, needed-by, status. If it is not visible to both teams and the RTE, it does not exist until it explodes.",
          "Hunt the types, not just the tickets. Sequencing dependencies (we cannot test until you ship the API). Shared-people dependencies (the only security reviewer is on three trains). Shared-system dependencies (one environment, six teams, a freeze nobody scheduled). Knowledge dependencies (only one person understands the billing engine). People-dependencies are the ones organisations refuse to write down because the org chart finds them embarrassing. Write them down anyway.",
          "Do this in PI Planning and again every week in the ART sync. A dependency discovered in the last iteration of the PI is an issue with extra paperwork. Walk the board and ask, for each red string: is the providing team still on the hook, and has anything moved? Silence is how strings become folklore.",
        ],
      },
      {
        id: "reduce-then-manage",
        title: "Reduce first. Manage what is left.",
        body: [
          "The cheapest dependency is the one you delete. Split the feature so one team owns an end-to-end slice. Add a temporary mock or feature flag so the consumer is not blocked on a perfect provider. Move a specialist into the team for a PI instead of booking them as a visiting deity. Architects who keep drawing more integration points are not 'aligning the enterprise.' They are manufacturing queueing theory.",
          "What you cannot delete needs a contract lighter than a legal one: an agreed interface, an integration date, and a fallback. 'We'll pair in Slack' is not a contract. 'Contract tests in the shared repo by 12 May; if they fail, consumer uses the stub and the feature is uncommitted' is a contract. Put the fallback on the board. A fallback invented during the outage is just adrenaline with a Jira key.",
          "Cap work-in-progress that is waiting on another team. A board full of blocked cards is not a busy team. It is a queue you are too polite to refuse. Pulling more local work while a critical dependency sits amber is how you hit sprint goals and miss the increment. That is a local win and a train loss. Say it in the room while there is still time to swap scope.",
        ],
      },
      {
        id: "own-the-handshake",
        title: "Own the handshake",
        body: [
          "Every material dependency has two owners: a provider who can actually do the work, and a consumer who will escalate when the date moves. 'The platform team' is not an owner. Neither is 'architecture.' If the only person who can open the firewall is in another directorate, that person is on the board whether their manager enjoys the visibility or not.",
          "Integrate continuously, not in a ceremonial week-twelve 'merge fest.' Small, frequent integration makes dependency slippage a this-week problem. A single integration weekend at the end of the PI is how you learn — loudly — that three teams built compatible stories and an incompatible system.",
          "Report dependency health the way you report risks: new ones, slipped dates, and decisions needed. Leadership does not need every string. They need 'Feature 14 will miss unless Team B's API lands this Friday or we descope the mobile client.' That sentence is why the board exists. A wall of red wool with no ask is interior decoration.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Write dependencies as who, what, and when. Visualise them where both teams can see them. Delete what you can; contract and integrate the rest. Name owners, not departments.",
          "Next: portfolio kanban — how work above the train is supposed to flow, and why an epic parking lot is not a strategy.",
        ],
      },
    ],
  },

  "portfolio-kanban": {
    intro:
      "A portfolio kanban is how an organisation decides which big bets are allowed to consume teams. Without it, every loud idea becomes an epic and every epic becomes a quiet tax on the ARTs. The board is not decoration for the strategy offsite — it is a WIP-limited system for funding hypotheses.",
    sections: [
      {
        id: "epics-are-bets",
        title: "Epics are bets, not slogans",
        body: [
          "A portfolio epic is a significant initiative that needs a hypothesis: who benefits, what outcome would prove we were right, and what MVP would test it without standing up a five-year programme. 'Digital transformation' is not an epic. It is a weather system. 'If we replace the quote journey for brokers, submission time drops by X and we kill the parallel spreadsheet' is an epic you can analyse.",
          "SAFe-style portfolio flow usually moves work through something like Funnel → Reviewing → Analysing → Portfolio Backlog → Implementing → Done. Names vary. The discipline does not. Funnel is cheap to enter. Analysing costs people. Implementing costs whole trains. If entering the funnel requires a thirty-page business case, you have built a waterfall with stickers. If everything in the funnel is already funded, you do not have a funnel. You have a guilt list.",
          "Write a lean case while the idea is still allowed to die. Cost of delay, expected outcome, leading indicator, and what you will stop doing if the MVP fails. A case that can only conclude 'proceed' is a press release. Portfolios that cannot kill work in Analysing will kill it later, in production, at full day-rate.",
        ],
      },
      {
        id: "wip-is-the-strategy",
        title: "WIP limits are the strategy",
        body: [
          "The scarce resource is not ideas. It is ART capacity and leadership attention. A WIP limit on Analysing and Implementing forces a ranking conversation that a two-hundred-row roadmap politely avoids. When the Implementing column is full, a new epic is a decision to pause or finish something else. If that sentence is unsayable in your organisation, the kanban will become a mural.",
          "Guardrails matter more than the tool: capacity allocation (how much of the trains goes to keep-the-lights-on versus new value), spending thresholds, and who may approve an epic leaving Analysing. Publish them. A portfolio that 'aligns' in a two-hour meeting and then funds whatever arrives by email is not lean. It is an unofficial second board with worse manners.",
          "Review the board on a standing cadence with the people who can actually stop or start work. Move cards only when evidence moved. An epic that has sat in Analysing for two quarters is either understaffed analysis or a political hostage. Name which. Stale epics train everyone to treat the portfolio as fiction — and then they start unofficial projects in the shadows, which is how you get a shadow portfolio with better coffee.",
        ],
      },
      {
        id: "connect-to-the-trains",
        title: "Connect the board to the trains, or stop pretending",
        body: [
          "An epic in Implementing should decompose into features a train can pull in a PI — with a product manager who owns the split. If the portfolio board and the program backlog do not share parents, you have two organisations politely ignoring each other. PMs sit on that seam: translate epic intent into features, and translate train reality back when the MVP will not fit the fantasy date.",
          "Do not flood an ART with three 'must-do' epics and then ask why PI predictability collapsed. That collapse is the portfolio working as designed: too much WIP, hidden as inspiration. Finish or pause. Half-implementing four strategies is how you get none.",
          "Measure flow at this level the same way you would on a team board: ageing, throughput of epics to Done, and time in Analysing. A portfolio that only reports 'number of epics in flight' is reporting inventory and calling it ambition. Inventory is not value. It is work you have chosen not to finish.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Treat epics as hypotheses with an MVP and a kill condition. Limit WIP so strategy is a choice, not a parking lot. Connect Implementing to features a train can actually pull.",
          "Next: agile metrics — flow, predictability, and value, and the numbers that make leadership feel informed while teaching the organisation the wrong lesson.",
        ],
      },
    ],
  },

  "agile-metrics": {
    intro:
      "Agile metrics are supposed to help a team or a train change its behaviour. Most dashboards help a steering group decorate a slide. Measure flow, predictability, and outcomes — and refuse vanity figures that punish the people who told you the truth.",
    sections: [
      {
        id: "flow-before-theatre",
        title: "Flow before theatre",
        body: [
          "Start with four flow measures you can explain in a corridor. Work in progress (how much is started). Throughput (how many items finish per period). Cycle time (how long from start to done). Flow efficiency (active time versus waiting time), if you can measure wait without lying. These tell you whether the system is clogged. A burn-down that hits zero because you split stories on the last day tells you the team can edit Jira.",
          "Plot ageing, not just averages. An average cycle time of six days can hide an item that has been 'in review' for a month. Ageing work is where dependencies and fear live. Pull the oldest blocked item into the weekly conversation before you discuss velocity. Velocity without ageing is a speedometer with the handbrake on.",
          "Compare a team to its own history, never to the team next door. Different work, different size of story, different definition of done. Cross-team velocity league tables are how you train people to inflate estimates and refuse hard work. If someone asks for a 'normalised story point' across the ART, they are asking for a fiction that will be used in a performance conversation. Say no, and offer throughput of similarly sized slices instead.",
        ],
      },
      {
        id: "predictability-without-theatre",
        title: "Predictability is say/do, not heroics",
        body: [
          "Predictability at team level is: of what we forecast for the sprint or PI, what did we finish, and what did we learn? At ART level, SAFe's PI predictability measure (planned PI objectives versus achieved) is useful if objectives were honest. If teams sandbag to hit 100%, or leadership stuffs the plan after the vote, the number is a costume.",
          "Uncommitted objectives exist so you can be ambitious without lying. Use them. A train that always hits 100% of a timid plan is not predictable in a way customers care about. A train that hits 80% of a stretching plan and can explain the miss is a system you can steer. Write the miss as a cause, not a vibe: dependency slipped, scope grew, capacity was fiction.",
          "Forecast with ranges and recent throughput, not a single date extracted from a Gantt that nobody updates. 'Based on the last three PIs, this feature size usually lands in one PI; the integration risk makes two more likely' is a professional sentence. 'Go-live is 14 November' when the program board is mostly red is how PMs become narrators of a disaster they could see from June.",
        ],
      },
      {
        id: "value-and-weapons",
        title: "Value, and numbers that become weapons",
        body: [
          "Output is not value. Stories completed, points burned, and features launched are activity. Pair them with an outcome: conversion, cycle time for the customer, incidents, revenue, or a leading indicator you named in the epic hypothesis. If nobody can name the outcome, you are funding motion. Motion photographs well. It does not survive a benefits review.",
          "Never use sprint velocity as a performance metric for individuals. Never use escaped defects as a stick without looking at test environments and last-minute scope. People will game whatever you hang a bonus on. They are not immoral. They are adapting. Choose measures that stay useful after they are gamed — customer outcomes and flow — or accept that you are running a theatre of targets.",
          "Show a short set, every time: flow (WIP, ageing, throughput), predictability (say/do with reasons), and one or two outcomes. Kill the twenty-metric dashboard that nobody can act on. If a number did not change a decision this month, stop collecting it. Measurement is a cost. Unread measurement is a cost with a colour palette.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Measure flow (WIP, throughput, cycle time, ageing), predictability as honest say/do, and outcomes rather than points. Do not compare team velocities. Do not weaponise the dashboard.",
          "You now have a working picture of agile at scale: what SAFe is for, how PI Planning creates a shared baseline, how dependencies are reduced and owned, how a portfolio kanban limits bets, and which numbers deserve airtime. Use one of them on a live train this week — a cleaner program board will teach you more than another framework diagram.",
        ],
      },
    ],
  },

  "timelines-and-gantt": {
    intro:
      "A Gantt chart is a bar chart that looks like a decision. It is a model of sequence and time — useful when dependencies are real, decorative when the bars are fiction. Learn to read one, build a simple one, and stop treating the printout as a contract with Thursday.",
    sections: [
      {
        id: "what-the-bars-are-claiming",
        title: "What the bars are actually claiming",
        body: [
          "A timeline shows when work is supposed to happen. A Gantt chart adds duration, start and finish, and — if you are doing the job — predecessors. The bar is not progress. The bar is a forecast. Progress is a separate field you update from reality. A chart that is 80% complete because someone dragged the percent-complete handle is a confidence trick you played on yourself.",
          "Read left to right for sequence, top to bottom for work breakdown, and the connecting lines for dependencies. Finish-to-start is the common one: B cannot start until A finishes. Start-to-start and finish-to-finish exist; misuse them and you will invent a schedule that only the software understands. If you cannot explain a link in a sentence, delete the link. Mystery predecessors are how a one-day slip becomes a three-week mystery.",
          "Milestones are dates with meaning: a decision, a freeze, a release, a regulatory window. They have zero duration. Do not use a milestone as a hiding place for a month of unplanned work. Stakeholders love milestones because they look like commitments. Your job is to attach each one to the work that must be true — and to the owner who will say when it is not.",
        ],
      },
      {
        id: "build-a-small-honest-one",
        title: "Build a small, honest schedule",
        body: [
          "Start from deliverables, not from a tool template with fifty summary rows. List the work packages that must finish, the order they must finish in, and a duration you would defend to the person doing the work. Get the durations from them. A Gantt built entirely by the PM in a quiet hour is a novel. Novels are allowed to have plot holes. Projects are not.",
          "Enter dependencies before you enter dates. Dates are a result of sequence plus capacity, plus any hard constraints (a conference, a legal date, an environment freeze). If you type the end date first and then squeeze the bars to fit, you have produced a sales artefact. It will look excellent in the steering pack. It will also be wrong on day one, which is traditional, and still not a virtue.",
          "Keep it shallow enough to update. A 400-row Gantt that nobody touches after baseline is a museum. For most teams, a two-level view is enough: summary deliverables for leadership, a handful of successor tasks for the people sequencing work. If you need the third level, use it in the working file and show the summary in the meeting. Clarity is a filter, not a lack of rigour.",
        ],
      },
      {
        id: "when-gantt-helps-and-lies",
        title: "When a Gantt helps — and when it lies",
        body: [
          "Use a Gantt when sequence and a date interact: migrations, launches with a freeze, vendor lead times, anything with a genuine critical path. The critical path is the longest chain of dependent work. Slip there and the end date slips. Slip on a task with float and you have used up slack, not the deadline. Knowing which is which is the whole point of the diagram. Pretty bars without that distinction are a timeline in formal wear.",
          "Do not use a Gantt as the daily board for a team that pulls from a backlog. They will not update it. You will chase them. Everyone will hate the chart and still believe it, which is the worst combination. Pair the views: the board for flow this week, a thin timeline for the dates that other teams and vendors must meet. Two views of one plan. Two plans is how you get two truths and a Friday argument.",
          "Re-baseline only when an approved change says so. If the bars have been quietly slid every week so the project is always 'on track,' you are running a video game with god mode enabled. Show the baseline versus the forecast. The gap is the conversation. Hiding the gap is how Gantts earned their reputation as confident fiction.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "A Gantt is a sequence model, not proof. Enter dependencies before dates, take durations from the people who will do the work, and reserve it for work where order and a deadline actually interact. Update from reality or stop showing it.",
          "Next: collaboration basics — comments, mentions, and the single source of truth that stops your timeline living in six inboxes.",
        ],
      },
    ],
  },

  "collaboration-basics": {
    intro:
      "Collaboration tools fail the same way spreadsheets fail: a second copy appears, and suddenly nobody knows which one is true. Comments, mentions, and shared docs are useful only if the work has one home. Your job is to name that home and be politely tedious until people use it.",
    sections: [
      {
        id: "one-home-for-the-work",
        title: "One home for the work",
        body: [
          "Pick a system of record for tasks, decisions, and files — or a tight pair, such as the tracker for work and the wiki for decisions. Write it down in one paragraph. 'We track work in X. We do not accept new scope that exists only in email. Decisions that change the plan are logged in Y.' If you cannot say that in a paragraph, you do not have a toolset. You have an archipelago.",
          "Redirect, do not shame. When someone briefs a change in a thread, thank them and move the action onto the card with a link back. The third time, they will start there. The tenth time, a senior person will still email you a screenshot. Move that too. Single source of truth is a habit enforced by the PM, not a setting in the admin panel.",
          "Kill the shadow tracker. The spreadsheet 'just for me' becomes the real plan within a fortnight because it is easier to edit than the official board. If the official board is unusable, fix the board. If the spreadsheet exists because someone does not trust the team to update the tool, you have a behaviour problem. A second system will not repair trust. It will hide the distrust until the two plans disagree in a steerco.",
        ],
      },
      {
        id: "comments-that-close",
        title: "Comments that close, mentions that ask",
        body: [
          "Comment on the work item, not in a side-channel that the next person will never see. Write the decision, the ask, or the blocker. 'FYI' comments that tag eight people are how mention fatigue is born. If nobody needs to act, do not mention them. If someone needs to act, mention one owner and a date. 'Can you confirm the API freeze by Thursday?' is a comment. '@team thoughts?' is a shrug with notifications.",
          "Close the loop on the same thread. When the answer arrives in a meeting, go back and write it on the card. Future you — and the person who joins in week six — should not have to reconstruct a decision from three tools and a hallway. A card that says 'agreed in standup' with no substance is a breadcrumb that leads to a cliff.",
          "Use mentions as a queue, not a siren. If everything is urgent, nothing is. Batch non-urgent questions. Escalate genuinely blocked work with a status change plus a mention, not a louder ping. People learn to ignore a tool the same way they learn to ignore a PM: too many false alarms, then silence when it matters.",
        ],
      },
      {
        id: "meetings-and-the-record",
        title: "Meetings feed the record. They are not the record.",
        body: [
          "A standup or weekly that does not update the board is a radio play. Open the tool in the meeting. Move the cards. Capture the decision while the people who made it are still in the room. 'We'll update Jira later' is how later becomes never and the board becomes a museum of last Tuesday.",
          "Store files where the work lives, with names a stranger can search. Final_v3_USE_THIS is a cry for help. One current document, one owner, old versions in history. If legal needs a frozen copy, export it and say so. Do not fork the working file into a parallel universe called 'steering version' that quietly diverges.",
          "Access is part of collaboration. A 'shared' folder that half the vendors cannot see will recreate email attachments by Thursday. Check permissions when you onboard someone, not when they miss a review. And do not put secrets in a comment thread that will be exported to a contractor next quarter. The tool is a room. Know who is in it.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Name one system of record and retire the shadow copies. Comment on the work with a single owner and a date. Use meetings to update the record, not to replace it.",
          "Next: choosing a tool — team size, method, and admin cost, without a vendor bake-off dressed up as strategy.",
        ],
      },
    ],
  },

  "choosing-a-tool": {
    intro:
      "The right tool is the one your team will update, that matches how you actually plan, and that someone will administer on a wet Wednesday. The wrong one is the platform that won a demo. Choose on constraints, not on feature count, and do not expect software to supply the discipline you skipped.",
    sections: [
      {
        id: "fit-the-work-not-the-demo",
        title: "Fit the work, not the demo",
        body: [
          "Start from how work arrives and how you sequence it. A flow team living on a board needs a first-class kanban, WIP limits, and cheap card movement. A delivery with vendors, freezes, and a critical path needs dependencies and a timeline that is not a toy. A Scrum team needs a backlog that can be ordered this afternoon, not a Gantt with sprint stickers. If the tool fights the method, people will open a spreadsheet. The spreadsheet will win.",
          "Team size changes the problem. Five people can live in a lightweight tracker and a shared doc. Fifty people need permissions, a shared taxonomy, and reporting that does not require a priest. Five hundred need administration as a real role. Buying an 'enterprise' suite for a team of six is how you spend two months configuring workflows nobody asked for. Buying a sticky-note app for a programme is how you lose the audit trail and then commission a second tool in a panic.",
          "Integrations are part of fit. If engineering lives in one system and you invent another that will never sync, you have chosen dual entry. Dual entry lasts until the first busy week. Then your tool is decorative. Prefer the tool the doers already open, or a thin layer that reads from it. A PM tool that the team treats as 'your system' will be updated when you nag, which is to say: not enough.",
        ],
      },
      {
        id: "admin-cost-and-switching",
        title: "Admin cost is the price you pretend is free",
        body: [
          "Every tool needs an owner: fields, permissions, the board template, the graveyard of old projects. If nobody is named, the first enthusiastic person becomes unpaid admin, then they leave, then the workflows rot. Estimate the hours before you buy. A cheaper licence with a day a week of admin is not cheaper. Put the name in the decision record.",
          "Count the switching cost honestly. Export quality, training, parallel-run time, and the month where both tools are 'source of truth.' Moving house mid-project is a delivery risk. Sometimes it is still right — the current tool cannot do dependencies and you are about to run a migration. Say that. Do not switch because a senior person saw a product tour and felt a feeling.",
          "Security, residency, and procurement are constraints, not afterthoughts. If your organisation cannot put customer data in a given cloud, the delightful startup tool is a hobby. Check that before you run a trial with real work. Trials with real work become production. Production without a data conversation becomes a conversation with legal, which is a ceremony nobody enjoys.",
        ],
      },
      {
        id: "decide-and-stop-shopping",
        title: "Decide, then stop shopping",
        body: [
          "Run a short trial with one real slice of work and the people who will click every day. Score a handful of must-haves you wrote down first: board or timeline, permissions, reporting, admin load, cost at your actual seat count. Do not score fifty nice-to-haves. Vendors are good at nice-to-haves. Nice-to-haves are how you buy a cockpit for a bicycle.",
          "Write the decision: what you picked, what you rejected, and what you will not customise in year one. Custom fields multiply like rabbits and then nobody knows which 'priority' is the real one. Start with a default workflow and change it only when a weekly pain is obvious. Configuration is not progress. It is a project that pretends it is enabling the project.",
          "Revisit only when the constraint changes — team size, method, or a compliance rule — not when a new logo appears. Tool-chasing is a way to avoid the harder work: a ranked backlog, an honest timeline, and a team that updates the board. Software will not attend the standup for you. If that is the feature you wanted, you wanted a different career problem.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Choose for method, team size, integrations, and admin cost. Trial with real work, write the decision, and stop shopping. A tool the team will not update is a licence fee attached to a lie.",
          "You have the Tools 101 spine: why tools exist, boards and backlogs, timelines that admit they are models, a single source of truth, and a selection approach that is not a vendor parade. Pick one improvement on your current stack this week — usually killing a shadow tracker — and let the official system become true by use.",
        ],
      },
    ],
  },

  "why-certify": {
    intro:
      "A certification is a signal: you invested time, you share a vocabulary, and a third party was willing to stamp a syllabus. It is not a job, a personality, or a promise you will pass. Treat it as a tool for a specific market conversation, not as a personality upgrade you buy on a payment plan.",
    sections: [
      {
        id: "what-the-letters-signal",
        title: "What the letters actually signal",
        body: [
          "Hiring filters are lazy on purpose. A requisition that says 'PMP required' often means 'we need a shared language and a way to thin the pile.' The letters get you past a gate. They do not do the interview, the case exercise, or the first nasty stakeholder meeting. Anyone who tells you otherwise is selling a course. Anyone who tells you letters never matter has never applied through a portal that auto-rejects.",
          "Inside an organisation, a cert can authorise you to be taken seriously in rooms that fetishise them — government frameworks, consultancies, clients who put credentials in the statement of work. It can also mark you as the person who will be asked to 'bring some rigour,' which is code for unpaid process design. Know which game you are walking into.",
          "What a cert does not signal: that you can run a project. Plenty of credentialed PMs cannot hold a baseline. Plenty of uncredentialed ones can. If your experience already opens the doors you want, you may not need the stamp this year. If the doors you want are shut by policy, the stamp is a key, not a personality.",
        ],
      },
      {
        id: "when-it-is-worth-the-hours",
        title: "When it is worth the hours",
        body: [
          "It is worth it when a specific role or client list asks for a named credential, when you need structured study because your experience is narrow, or when a shared framework will help you talk to PMO and audit without inventing a dialect. Write the target down: role, geography, methodology. 'I should get certified' is not a target. It is a mood that vendors are excellent at monetising.",
          "It is not worth it when you are collecting logos to soothe a career panic, when your employer will not give you the hours or the project variety the exam assumes, or when you need a job next month and the prep window is longer than your runway. A failed or abandoned prep is a cost. So is passing and then discovering the roles you want wanted a different stamp — or none.",
          "Count the full price: exam fees, memberships, required training if any, retake risk, and evenings you will not spend delivering. Then count the opportunity: a portfolio piece, a harder assignment at work, or a reference from a sponsor may move a hiring manager more than another badge. Sometimes you do both. Do not do the badge instead of the work and call it a strategy.",
        ],
      },
      {
        id: "study-without-the-cult",
        title: "Study without joining a cult",
        body: [
          "If you sit an exam, treat it as a language test plus scenario judgement. Learn the official vocabulary well enough to answer in their dialect. Then keep a separate column in your notes: how this idea shows up on a live project, and where the exam oversimplifies. Mixing the two in your head is how you recite process groups in a standup and lose the room.",
          "Use one current official outline or handbook as the spine. Blog piles and stale question dumps are how people memorise last year's emphasis. Check the issuer's site for the live exam content outline before you buy a binder that has been in a cupboard since a different version of the guide.",
          "Do not let a prep programme talk to you as if a pass is inevitable. Pass rates are not your pass. Book the exam when mock scores are stably above the line you set, not when the payment plan says 'you are ready.' Walking in underprepared to 'just see' is how you buy a retake and a story you will tell too often.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Certifications signal shared language and a filter-friendly stamp. They do not guarantee a job or a pass. Choose them against a named market target, and price the full cost against other ways to get credible.",
          "Next: CAPM versus PMP — same family, different eligibility, and why you should read PMI's current handbook instead of a blog that still quotes last decade's hours.",
        ],
      },
    ],
  },

  "capm-vs-pmp": {
    intro:
      "CAPM and PMP are both PMI credentials sitting on related bodies of knowledge. They are not the same exam, the same eligibility bar, or the same signal in a hiring filter. Pick from the role you can honestly evidence — and check the current handbook before you quote hours you saw on a forum.",
    sections: [
      {
        id: "two-exams-one-family",
        title: "Two exams, one family",
        body: [
          "The Project Management Professional (PMP) is PMI's experienced-practitioner credential. The Certified Associate in Project Management (CAPM) is the earlier-career sibling: same neighbourhood of ideas, lighter eligibility, different exam. Both assume you can speak PMI's current dialect — process thinking, people skills, and, on newer outlines, agile and hybrid questions. Neither is a licence to practise. Neither is a personality.",
          "Eligibility is the fork. PMP expects a combination of education and documented project leadership hours that CAPM does not. CAPM expects less project experience and, depending on the current path, education or PMI-authorised study. The exact hour numbers and degree rules change. Do not memorise a LinkedIn graphic. Open PMI's current certification handbook and the exam content outline, and write your path from those pages.",
          "If you already lead projects end to end and can evidence it, PMP is usually the credential job ads mean when they say 'PMP.' Sitting CAPM first is not required, and it is not a consolation prize. It is the right stamp when you cannot yet meet PMP eligibility, or when you want structured vocabulary before you have led enough work. Taking CAPM because a sales page said 'start here' when you already qualify for PMP is how you spend money on a signal the filter will ignore.",
        ],
      },
      {
        id: "what-hiring-actually-does",
        title: "What hiring actually does with the letters",
        body: [
          "In many private-sector product shops, PMP is optional and a Scrum stamp or a shipped portfolio talks louder. In government, integrators, and some regulated programmes, PMP is a checkbox with a budget code. CAPM helps you past 'some credential' screens; it rarely substitutes for PMP where PMP was named. Read the advert like a scope statement. If it says PMP, CAPM is not a creative interpretation.",
          "Maintenance is part of the product. PMI credentials typically need continuing certification requirements over a cycle — points, and a fee. Factor that in. An expired credential is an awkward line on a CV and a renewal project you did not schedule. If you will not maintain it, do not sit it as a trophy.",
          "Do not invent experience to clear the PMP application. PMI can audit. Your application should map to real projects with real hours you can defend. Padding a register to 'hit the number' is how you gamble a credential and, worse, practise lying about scope. If you are short, you are short. Take the work, or take CAPM, or wait. The handbook is not a dare.",
        ],
      },
      {
        id: "prepare-like-a-pm",
        title: "Prepare like a PM, not like a lottery ticket",
        body: [
          "Map the current exam content outline to a study calendar with weekly throughput you will actually hit. Use PMI-authorised material or the current standard as the spine. Question banks help you practise judgement; they are not the syllabus. If your only prep is memorising 200 'dump' items, you will meet a scenario question and discover you studied a different sport.",
          "Translate as you go. For each domain, write one sentence on how you already do it at work — or how you do not. The exam rewards their model. Your job rewards reality. Keeping both in view is how you pass without becoming the person who quotes process groups at a team that asked for a decision.",
          "Book when your mocks are stably at the standard you set, with time for weak domains. Build in a retake as a risk, not as the plan. And do not announce a pass date on LinkedIn before you have a candidate number. Public deadlines are motivating until they are a second project you are failing in public.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "PMP is the experienced PMI credential; CAPM is the earlier-career one. Eligibility and hours differ — check the current handbook, do not quote a blog. Apply only to experience you can defend. Neither exam guarantees a pass or a role.",
          "Next: Scrum certifications — different organisations, different bets, and why CSM and PSM are not two stickers for the same jar.",
        ],
      },
    ],
  },

  "scrum-certifications": {
    intro:
      "Scrum credentials come from more than one organisation, and they are not interchangeable stamps. CSM and PSM both say you can talk about Scrum. They are built differently, maintained differently, and read differently by people who bother to look past the logo on your CV.",
    sections: [
      {
        id: "two-orgs-two-bets",
        title: "Two organisations, two bets",
        body: [
          "Certified ScrumMaster (CSM) is issued by Scrum Alliance. The usual path is a live course with a Certified Scrum Trainer, then an exam. You are paying for facilitated exposure as much as for a test. Professional Scrum Master (PSM) is issued by Scrum.org. There is no mandatory class; there is a demanding exam and optional training. You are paying to prove you can pass their questions. Neither path promises you will pass. Course attendance is not competence, and a high exam score is not a team that trusts you in a retrospective.",
          "Product-side siblings exist: CSPO (Alliance) and PSPO (Scrum.org), plus further levels — A-CSM, PSM II, and so on. More letters are not a career. They are a ladder for people who want depth in that syllabus. If you do not facilitate or own a backlog, an advanced Scrum Master badge is cosplay.",
          "Other agile stamps (PMI-ACP, various ICAgile courses, SAFe role credentials) sit in adjacent markets. They are not 'higher Scrum.' They are different syllabi. Stacking them because a catalogue exists is how you become a badge collector with a stale LinkedIn banner and a team that still cannot finish a sprint.",
        ],
      },
      {
        id: "pick-for-the-room-you-want",
        title: "Pick for the room you want",
        body: [
          "Look at the jobs and the culture, not at which logo is prettier. Some employers treat CSM as the familiar name because trainers have been in the market for years. Some engineering organisations prefer PSM because the exam has a reputation for being harder to bluff. Some care about neither and will watch you run a planning session. Read six adverts in your target market. Let that frequency choose. Your favourite blog's preference is not a market.",
          "If you need a structured introduction and learn better in a room, a good CSM (or equivalent) class can be worth the fee — provided the trainer will let you practise facilitation, not just recite the Guide. If you already work as a Scrum Master and want a sharp test of the current Scrum Guide, PSM is a clean bet. Taking both in the same quarter is usually insecurity with a receipt.",
          "Match the credential to the role. A delivery PM who occasionally sits in stand-ups does not need a Scrum Master cert to be allowed to speak. A full-time Scrum Master who cannot name the three accountabilities without looking at a mug should study, whether or not they sit an exam. The Guide is free. The gap is not the fee.",
        ],
      },
      {
        id: "after-the-pdf",
        title: "After the PDF arrives",
        body: [
          "A certification expires or needs renewal on some paths; others are lifetime for a given level. Read the small print before you call it done. Then put the credential to work on a live team: one better-facilitated event, one backlog refinement that produces ready stories, one impediment you actually removed. If nothing in your week changed, you bought stationery.",
          "Do not correct people's language for sport. Newly certified Scrum Masters who police the word 'sprint zero' in every conversation create resistance, not empiricism. Use the Guide as a diagnostic: where are we opaque, where do we not inspect, where can we not adapt? That is the job. Vocabulary theatre is a hobby.",
          "If you fail an exam, you have data, not a character judgement. Scrum.org in particular is known for being unforgiving of fuzzy answers. Restudy the Guide and the areas you missed. Do not immediately buy a higher-level exam to 'prove' something. That is how people collect fails in ascending order.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "CSM (Scrum Alliance, typically course-led) and PSM (Scrum.org, exam-led) are different products. Choose from your target market and how you learn. A badge without a change in how you run the week is a PDF.",
          "Next: PRINCE2 and other method credentials — process-heavy, popular in UK government, and easy to collect if you confuse a method with a career.",
        ],
      },
    ],
  },

  "prince2-and-others": {
    intro:
      "PRINCE2 is a process-based method: principles, themes, and a defined project lifecycle with stages and tolerances. It is common in UK government and in organisations that inherited that dialect. It is not 'the British PMP,' and treating it as a universal upgrade is how you arrive in a product team speaking the wrong language.",
    sections: [
      {
        id: "what-prince2-is-for",
        title: "What PRINCE2 is actually for",
        body: [
          "PRINCE2 (PRojects IN Controlled Environments) gives you a grammar for justification, roles (including a Project Board), stage gates, exception management, and a product-based planning habit. Foundation tests whether you know the method. Practitioner tests whether you can apply it to a scenario. Both are typically offered through accredited training organisations and an exam institute — currently in the PeopleCert / AXELOS neighbourhood. Check the live handbook for the version (including PRINCE2 Agile) before you buy a course that is teaching last year's book.",
          "The method shines when a sponsor needs controlled stages, a business case that is allowed to kill the work, and tolerances that tell you when to escalate instead of absorbing quietly. That is why public sector and large integrators still ask for it. It is heavier than a startup needs, and it becomes parody when every two-week piece of work gets a full set of management products nobody reads.",
          "PRINCE2 Agile is the official attempt to keep the governance spine and allow iterative delivery. It is not a free pass to skip the business case. If your organisation wants both a Board and a Scrum team, you still need one decision path. Two methods without a seam is how you write PID and sprint goals that disagree, then hold two status meetings about it.",
        ],
      },
      {
        id: "regional-reality",
        title: "Regional reality, not brand loyalty",
        body: [
          "In much of the UK public sector and its suppliers, PRINCE2 Practitioner is a familiar filter. In North America, PMP usually occupies that slot. In agile product organisations on either side of the Atlantic, neither may matter. Geography and sector choose your next stamp more honestly than a global 'best cert' list written by someone selling all of them.",
          "Other credentials you will meet: APM's family (UK, competence and membership flavoured), PMI-ACP (PMI's agile exam), various ISO or IPMA paths, and vendor or framework stamps (SAFe, ITIL if you have wandered into service management). Each is a dialect. Collecting three entry-level dialects in a year is not versatility. It is a shopping habit.",
          "Read the role. A PMO analyst in Whitehall and a Scrum Master in a scale-up should not share a default path. If a recruiter says 'any cert will do,' believe them only after you have seen the longlist. Often they mean a specific one and are being polite. Ask which names have appeared on recent successful hires.",
        ],
      },
      {
        id: "use-the-method-or-dont-sit-it",
        title: "Use the method, or do not sit the exam",
        body: [
          "If you pursue PRINCE2, practise the parts that travel: a business case that states benefits and dis-benefits, stage boundaries with a real go/no-go, tolerances that trigger exception reports, and a product breakdown that is not a task list in costume. Those habits help even when nobody wants the full manual. Memorising process names without ever writing an exception report is how you pass Foundation and still surprise a Board.",
          "Tailor in the open. PRINCE2 expects tailoring. An organisation that 'does PRINCE2' but skips the business case updates and the Project Board is not tailored. It is labelled. Your job as a PM is to name which management products this project will actually keep alive — and to refuse the rest, in writing, so audit does not discover a fictional set of logs in month nine.",
          "Do not sit Practitioner as a weekend trophy if you will never see a Project Board. The exam will teach you a scenario language. Without a place to use it, the language fades and the renewal cycle (where it applies) becomes a tax on a credential you cannot explain in a work example. That is a poor portfolio piece.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "PRINCE2 is a process method with Foundation and Practitioner levels, strong in UK government and similar cultures. It is not a substitute PMP. Other stamps are dialects — pick from sector and geography.",
          "Next: building your path — sequencing credentials around the role you actually want, instead of assembling a badge album.",
        ],
      },
    ],
  },

  "building-your-path": {
    intro:
      "A certification path is a sequence attached to a role, a sector, and a calendar you can fund. It is not a Pokédex. Choose the next stamp that unlocks a conversation you cannot have today — then go back to delivering something someone can point at.",
    sections: [
      {
        id: "start-from-the-role",
        title: "Start from the role, not the catalogue",
        body: [
          "Write one paragraph: the role you want in two to three years, the sector and country, and the methods that room already speaks. Then list the credentials that appear on real adverts for that role — frequency, not folklore. Your path is that list, in an order you can become eligible for. Everything else is a distraction with a coupon code.",
          "Typical honest sequences, not laws: an early-career generalist might take CAPM or a Scrum credential before PMP eligibility exists. A UK government delivery manager might need PRINCE2 Practitioner before anyone cares about PMP. A Scrum Master who already runs teams might sit PSM and skip PMI entirely. A programme manager moving toward PMO leadership might want PMP plus the organisation's local governance dialect. Copy the sequence that matches the paragraph, not a generic '101 to Pro' fantasy ladder.",
          "Do one credential at a time. Parallel prep for two exams is how both get a half-effort and a resit. Finish, apply it for a quarter, then decide whether the next stamp is still the bottleneck. Often the bottleneck has moved to experience, a security clearance, or a domain (data, construction, clinical) that no PM exam covers.",
        ],
      },
      {
        id: "eligibility-and-evidence",
        title: "Eligibility is a project. Evidence is the product.",
        body: [
          "Work backwards from the handbook. If PMP needs documented hours you do not have, the next 'certification' is a project where you lead — or CAPM, or a wait. If a Scrum course is the constraint, book the course when you can practise the week after, not three months before a busy release. Treat eligibility gaps as scope, not as personal failure.",
          "Keep an evidence file as you go: charters, PI plans, risk registers, a before-and-after board, a note from a sponsor. Hiring conversations and some applications will ask you to talk about work, not logos. The file also stops you from applying to PMP with a memory of hours that will not survive an audit.",
          "Ask your employer what they will fund and what they will count as development time. Get it in writing. A verbal 'we support certification' that dies at the purchase-order stage is a risk you should have logged. If they will not fund it, that is information about whether the stamp is for their filter or only for your next filter.",
        ],
      },
      {
        id: "stop-collecting",
        title: "Stop collecting. Start compounding.",
        body: [
          "Set a kill rule. If a credential will not change the conversations you can enter this year, do not sit it. If you already have the stamp the market asked for, further entry-level badges are diminishing returns. Advanced levels in the same family can be worth it when the work got harder — not when you are bored on a Sunday.",
          "Revisit the path when the role changes. Moving from team-level Scrum into a train or a PMO changes the dialect. Doubling down on a third Scrum logo while your new job is portfolio governance is nostalgia. Update the paragraph. Update the sequence. That is change control for your career, which is a project you are allowed to re-baseline.",
          "Measure the path the way you would a benefit: interviews reached, scope of roles you are trusted with, and whether your week looks more like the job you wanted. Do not measure it in logos per year. A quiet year in which you ran a nasty integration and wrote a clean lessons-learned note will outrank a noisy year of exam receipts. The receipts are easier to photograph. The work is what the next sponsor remembers.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Build a path from role, sector, and live eligibility rules. One credential at a time, evidenced by work you can show. Stop when the next badge would not change a conversation.",
          "You now have an honest map of why certs exist, how CAPM and PMP differ, how Scrum stamps split by organisation, where PRINCE2 actually travels, and how to sequence without becoming a collector. Check the current issuer handbooks before you spend, then pick one next action — a handbook page, a conversation with your manager about funding, or a project assignment that creates hours you can defend.",
        ],
      },
    ],
  },
}
