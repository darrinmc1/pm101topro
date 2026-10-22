import type { LessonBodies } from "./types"

export const starterMeetingsQualityNegoBodies: LessonBodies = {
  "reading-the-room": {
    intro:
      "Every organisation has a slide deck culture and a corridor culture. The first is what people present. The second is how work actually moves. Reading the room is the skill of mapping both without turning politics into a personality.",
    sections: [
      {
        id: "two-cultures",
        title: "What people do when the deck is closed",
        body: [
          "Start with observable behaviour, not vibes. Who can stop a decision with a raised eyebrow? Whose 'quick question' in a thread actually means no? Which meeting is theatre, and which one is where the work is agreed? Write this down privately. A culture map in your notebook is a tool. A culture rant in the team chat is a career choice.",
          "Ask how the last similar project really finished — not the case study, the post-mortem nobody circulated. You will hear which constraints were official and which were enforced: a finance freeze that arrives every December, a legal review that always takes three weeks, a sponsor who signs nothing until operations have nodded. Those are operating facts. Treat them as such.",
          "Unspoken rules are still rules. If status is never challenged in the room but always rewritten afterwards, your job is to get the rewrite into the room. If bad news travels only through one person, that person is a bottleneck whether their title says so or not. You are not there to admire the anthropology. You are there to stop being surprised by it.",
        ],
      },
      {
        id: "politics-as-information",
        title: "Politics is information. Cynicism is a hobby.",
        body: [
          "Organisational politics is the competition for scarce attention, budget, and cover. It exists in every place that has more than one priority. Naming it is adult. Building an identity around how broken it all is will make you entertaining at lunch and useless in a steerco. Cynicism is a costume. You can wear it in the kitchen; it is a poor operating system for a first project.",
          "Map interests, not villains. The operations lead who blocks your go-live may be protecting a weekend rota, not sabotaging your milestone. The finance partner who rejects the business case may have been burned by last year's 'strategic' overrun. Ask what they are accountable for. Then ask what would make them comfortable saying yes. That is politics as information.",
          "Do not become a faction. The new PM who immediately joins the 'delivery versus the business' club has chosen a side before they have a fact. Your credibility later will depend on being able to carry a hard message in both directions. That is harder if you have already announced that one half of the building is the problem.",
        ],
      },
      {
        id: "how-to-map-it",
        title: "A room map you can actually use",
        body: [
          "For each material decision, note three things: who formally decides, who can veto in practice, and who will have to live with the result. If those three names are different — they often are — you now know why last month's 'agreed' decision unravelled. Put the veto and the operator in the conversation before the decision, not after the surprise.",
          "Watch the first ten minutes of a standing meeting. Who speaks first? Who is never interrupted? Who is interrupted constantly? Who stays silent and then emails the sponsor? Those patterns tell you whose voice you must deliberately make audible if you want the real risk on the table. Silence is not alignment. It is often self-preservation.",
          "Test your reading with a small, low-stakes action. Circulate a one-page decision note and see who replies, who forwards, and who ignores it. The org chart is a hypothesis. The reply-all thread is data. Update the map when the data disagrees with your first week's story — especially if that story flattered you.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Read behaviour, not slogans. Treat politics as a map of interests and vetoes, not a reason to become professionally disappointed. Write down who decides, who can stop a decision, and who inherits the outcome — then put those people in the room before the vote.",
          "Next: building credibility fast — how small kept promises beat a dazzling first-month performance.",
        ],
      },
    ],
  },

  "building-credibility": {
    intro:
      "Credibility is not a personality trait and it is not a slide called 'vision.' It is a ledger. People trust you when the things you said would happen, happened — in the size and the week you named.",
    sections: [
      {
        id: "the-ledger",
        title: "A promise kept on Thursday beats a laminated vision",
        body: [
          "In the first month, shrink the unit of commitment. 'I will send the cleaned risk list by 4pm Wednesday' is a promise you can keep. 'I will transform how we deliver' is a slogan that will still be unpaid in June. Write your commitments down where the other person can see them. Then close them in public. The ledger is visible on purpose.",
          "Under-commit on timing by enough that you can be early without sandbagging. If you need a day, say Friday morning, not 'later today' while you still have four meetings. New PMs leak trust in drips: a late note here, a forgotten intro there. Nobody writes a formal complaint. They just stop believing the next date.",
          "When you cannot keep a promise, say so before the deadline, with a new time and a reason that is not a weather report. 'The vendor pack is incomplete; you will have the decision note by 10am Thursday' is a repair. Silence until Thursday afternoon is how a small miss becomes a story about you.",
        ],
      },
      {
        id: "different-currencies",
        title: "Sponsors, teams, and different currencies",
        body: [
          "Sponsors buy predictability and bad news with a proposed response. They do not need you to be the most technical person in the room. They need you to surface a decision while there is still a choice. A crisp escalation — options, recommendation, date by which delay becomes a decision — is how you look senior before you feel it.",
          "Delivery teams buy protection of their time and honesty about what is actually in the sprint. Do not perform solidarity by promising to 'shield them from stakeholders' and then folding in the next meeting. Take the request, bring the trade-off back, and let the team see you use their estimate rather than a hopeful one you invented in the corridor.",
          "Stakeholders outside the core team buy being told the truth at a speed they can use. A weekly note that names what changed, what you need, and what can wait will do more than a charming kickoff. Charm expires. A reliable cadence does not. If you are charming and late, you are still late.",
        ],
      },
      {
        id: "what-burns-it",
        title: "What burns trust faster than incompetence",
        body: [
          "Incompetence can be coached. Surprise cannot. Hiding a slip so you can 'fix it first' trains people to assume the status is fiction. Bring the slip with a next action. People will forgive a miss they heard about on Tuesday. They will not forgive the same miss discovered in a steerco they were not warned about.",
          "Do not trade in gossip as a shortcut to belonging. Repeating 'everyone knows legal is the blocker' may win a knowing look and lose the one relationship you need when the contract is actually stuck. Take the constraint to the person who owns it. Ask what would unblock it. That is slower and it is how adults work.",
          "Stop collecting open loops. 'I'll look into that' said twelve times is twelve invisible promises. Keep a visible list of what you have taken on, and close or refuse items every week. Refusing with an alternative — 'not this week; I can do the vendor chase or the RAID tidy, not both' — is credibility. Infinite hospitality is how new PMs become a helpdesk with a Gantt chart.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Treat credibility as a ledger of small, dated promises. Keep them, or renegotiate before they expire. Give sponsors decisions, teams honest trade-offs, and everyone else a cadence. Surprise and infinite open loops will cost you more than a wrong estimate.",
          "Next: a first-project checklist you can run in the opening fortnight — charter, stakeholders, risks, cadence, and decision rights.",
        ],
      },
    ],
  },

  "first-project-checklist": {
    intro:
      "A first project does not fail because you lacked a certification. It fails because five boring things were never made explicit: what we are doing, who cares, what could break it, when we talk, and who decides. This is the checklist. Use it as a working pack, not a poster.",
    sections: [
      {
        id: "charter-and-risks",
        title: "Charter and risks, or you are improvising",
        body: [
          "If there is no charter, write a one-pager and get it signed or refused. Purpose in a sentence. Success in two or three testable outcomes. In scope and out of scope as lists, not adjectives. Constraints that are actually locked — date, budget, regulation, platform. 'Improve the customer journey' is a toast. 'Cut checkout from five steps to three before the November freeze' is a project.",
          "Name the sponsor and the day-to-day owner. If those are the same person, note it; you have a concentration risk. If nobody will put their name on the purpose, you do not have a project. You have a hope that is using people's calendars. Stop building the plan until someone will own the why.",
          "Write a first-cut risk list of the few uncertainties that would actually change the plan — cause, event, effect, owner. Do not produce a forty-row template to look diligent. Five risks with owners beat a register that exists to prove you have heard of risk. Review it on a cadence from week one, or it is a prop.",
        ],
      },
      {
        id: "stakeholders-and-rights",
        title: "Stakeholders, cadence, and who decides",
        body: [
          "List named people, not departments. For each: what they care about, what they can block, and how they want to be informed. A row that says 'Finance' is a confession that you have not made a phone call. The person who rejects purchase orders has a name. Put it in the register and ask them how late is too late for a paper.",
          "Set the operating cadence in writing: a short team huddle, a weekly delivery review, and a decision forum that can actually decide. Each meeting needs a purpose and an output. If the weekly is a tour of slides nobody will use, cancel it and replace it with a written update plus a thirty-minute decision slot. Cadence is a system. Recurring invites are not.",
          "Write decision rights before you need them. Who can change scope? Who can spend? Who can move the go-live? Who can accept the product? A one-page table is enough. When a request arrives, you point at the table instead of inventing authority in the moment. Ambiguous decision rights are how 'we all agreed' becomes three contradictory emails on Friday.",
        ],
      },
      {
        id: "run-the-fortnight",
        title: "Run the first fortnight as a system",
        body: [
          "Days one to three: read whatever exists, book the people on the stakeholder list, and ask the same three questions you used in week one — what is working, what is not, what would help. Do not redesign the process on day two. You are still collecting the constraints that made the process look foolish.",
          "Days four to seven: draft the one-page charter, the named stakeholder list, the top risks, the cadence, and the decision table. Send them as a pack. Ask for corrections, not applause. A sponsor who marks the out-of-scope list is doing you a favour. A sponsor who says 'looks good' without reading it is a risk — book twenty minutes and walk it.",
          "Week two: lock the first review dates, confirm risk owners in writing, and run the cadence once so it is real. Close two small promises in public. If something is already off, raise it with a proposed response. The checklist is complete when the pack exists and has been used, not when the template is pretty.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Five artefacts: a one-page charter, named stakeholders, a short owned risk list, a cadence with outputs, and a decision-rights table. Write them in the first fortnight and use them. A template you never send is stationery.",
          "Next: finding a mentor — how to ask for a specific hour of judgement, not a vague offer to 'pick someone's brain.'",
        ],
      },
    ],
  },

  "finding-a-mentor": {
    intro:
      "A mentor is not a brand accessory and it is not a monthly coffee that becomes a status report about your feelings. It is a specific person who will spend scarce attention on a specific problem you are actually facing. Ask like a professional, not like a networking brochure.",
    sections: [
      {
        id: "not-a-subscription",
        title: "Mentors are not a streaming service",
        body: [
          "You do not need 'a mentor' in the abstract. You need judgement on a type of problem: how this organisation escalates, how this sponsor likes bad news, how to run a vendor dispute, how to survive a first steerco. The right person is someone who has done that recently and will tell you the unpolished version. A famous leader who has not been near a RAID log in a decade is a keynote, not a mentor.",
          "One person will not cover the lot. A delivery lead can teach you how the team actually estimates. A finance partner can teach you when a business case is theatre. A PM two years ahead of you can teach you the local landmines. That is a bench, not a failure to find a guru. Collecting one 'official mentor' and ignoring everyone else is how people outsource their development to a calendar series.",
          "Skip the performance of networking. 'I would love to pick your brain' is a request to be entertained. Busy people decline it, or they accept once and then dodge you. Specificity is respect. Vague admiration is work you have asked them to invent.",
        ],
      },
      {
        id: "the-specific-ask",
        title: "Ask for a specific hour, not a vibe",
        body: [
          "Write the ask in four lines: who you are, the decision or mess you are in, the one or two questions you want help with, and a proposed thirty minutes with an agenda attached. Offer two times. Attach the one-pager they would need so they are not doing homework. If they cannot do a meeting, ask whether they would comment on the one-pager instead. Make saying yes cheap.",
          "Example: 'I am three weeks into X. I need to escalate a vendor slip to Y without looking like I am dumping it. Can I have thirty minutes Thursday or Friday to walk a one-page options note?' That is a request a decent colleague can honour. 'Would you be my mentor?' is a lifestyle proposal. Most people who would actually help you will flinch at the second and answer the first.",
          "If they say no, thank them and ask who they would send you to. If they say yes, send the pre-read the day before and start on time. Bring a recommendation you are willing to be talked out of. Mentors are not there to invent your job while you take notes like a tourist.",
        ],
      },
      {
        id: "use-it-well",
        title: "Use the hour so they will give you another",
        body: [
          "Open with the decision, not your autobiography. Ten minutes of context, then the question. Write down what you will do differently by a date. Close by telling them the action. After you have done it, send a four-line note: what you tried, what happened, what you would do next. That loop is how a one-off becomes a relationship. People mentor those who close the loop. They avoid those who only collect wisdom.",
          "Do not turn the mentor into your shadow sponsor. They are not there to fight your battles in rooms they do not own, and asking them to is how you spend the relationship in one withdrawal. Use them to sharpen the note you will take yourself. Then take it.",
          "Review the bench twice a year. If you only ever ask the same person about the same flavour of panic, you are not growing — you are rehearsing. Add someone who will disagree with your default move. A mentor who only agrees with you is a mirror with a meeting invite.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Ask for help on a named problem, with a short pre-read and a proposed half-hour. Build a bench, not a guru. Close the loop after you act so the next hour is earned.",
          "You now have a starter practice: read the organisation, keep a credibility ledger, run a first-project pack, and ask for mentorship like a professional. Use the checklist on a live piece of work this week. A one-page charter that exists beats a career plan that does not.",
        ],
      },
    ],
  },

  "facilitation-techniques": {
    intro:
      "A well-designed agenda still dies if one person filibusters, three arguments run at once, and the quiet expert never speaks. Facilitation is the in-room craft: who talks, for how long, and what happens to the useful thing that does not belong on this item.",
    sections: [
      {
        id: "stack-and-timebox",
        title: "The stack and the timebox",
        body: [
          "The stack is a visible queue of who speaks next. When three hands go up, write the names — or say them aloud — and take them in order. It stops the loudest person from becoming the agenda. It also stops you from 'facilitating' by nodding at whoever makes eye contact first. If you are remote, the chat queue is the stack. Read it. Do not discover a raised hand in the last ninety seconds.",
          "Timebox each item and say the remaining minutes out loud. 'We have six minutes to decide, not to explore the history of the vendor.' When the box ends, you have three honest moves: decide, park with an owner, or book a smaller follow-up with the people who actually need to argue. Extending by default is how a thirty-minute meeting becomes a memorial service for the next meeting.",
          "Hold the box even when the conversation is interesting. Interesting is not the test. The test is whether this room, at this hour, can produce the outcome on the invite. If a senior person blows through the box, name the trade: 'We can finish this and drop item four, or we park this and keep the decision on item four.' Make them choose. Silent overrun is how you train the room that time is decorative.",
        ],
      },
      {
        id: "parking-lot",
        title: "The parking lot is a promise, not a skip",
        body: [
          "A parking lot is a written list of important points that are off the current question. Capture the point in a clause, not a shrug — 'dependency on the data-migration date' — and name who will take it and when it returns. Then go back to the item. The parking lot exists so the meeting can stay on one conversation without pretending the side issue was stupid.",
          "A parking lot that is never revisited is a skip with nicer stationery. End the meeting by reading it. Every item gets an owner and a next slot, or it gets deleted because it was a vent. If you consistently park the same topic, that topic is the real meeting and you have been running a decoy.",
          "Use it on process fights as well as content. 'We should always invite architecture' is not a decision about this vendor. Park it as a working-agreement item and finish the vendor choice. Mixing meta-debate with the live decision is how rooms spend forty minutes on seating policy and five on the thing that costs money.",
        ],
      },
      {
        id: "quiet-voices",
        title: "Making quiet people audible",
        body: [
          "The person who knows the integration is brittle is often not the person who enjoys a crowd. Build a beat for them: two minutes of silent writing before discussion, a round-robin on the actual decision, or a direct ask — 'Priya, you have lived this interface — what would break?' A general 'any thoughts from the room?' will be answered by the same two people who answered it last week.",
          "Protect the answer. If a senior voice dismisses it in a clause, park the dismissal and finish the capture. 'Let's get it on the list, then challenge it.' You are not hosting a consensus hug. You are stopping power from editing the minutes in real time. If you cannot do that in the room, you will do it badly afterwards in a private chat, which is worse.",
          "Watch remote and in-room hybrids. The quiet person on the call is competing with the people who can mutter at the table. Call on the call first. Repeat what they said so the room heard it. If you only ever harvest the conference-room energy, you have not facilitated a hybrid meeting. You have hosted an audience.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Run a visible stack, say the timebox out loud, and treat overrun as a trade. Park off-topic points with an owner and a return date. Design a beat that makes the quiet expert audible, and protect their point long enough to write it down.",
          "Next: remote meetings — where cameras are not the point, and one conversation at a time is the whole job.",
        ],
      },
    ],
  },

  "remote-meetings": {
    intro:
      "Remote meetings fail for the same reason corridor meetings fail: no outcome, three conversations at once, and the homework done in the room. Cameras are a lighting preference. Design is the work.",
    sections: [
      {
        id: "not-the-cameras",
        title: "Cameras are not a culture",
        body: [
          "Mandating cameras will not create a decision. It will create a row about bedrooms and bandwidth. If someone needs to be seen — a new joiner, a sensitive negotiation, a workshop that uses faces as a check on confusion — say so in the invite and why. For a status huddle, a shared board and a spoken stack will beat a grid of tired faces performing attention.",
          "What you can insist on is presence of a different kind: the pre-read opened, the decision named, and one person speaking. A camera on while someone answers Slack in another window is not engagement. It is set dressing. Design the meeting so wandering has a cost — a round, a vote, a written recommendation — rather than policing foreheads.",
          "Hybrid is the hard mode. The room will form a side conversation the call cannot hear. Put one facilitator on the queue and one on the room, or accept that you are running two meetings that share a slide. Repeat decisions out loud. Type them where both sides can see. If you cannot do that, split the session rather than pretend the people on the speakerphone were in the room.",
        ],
      },
      {
        id: "async-prep",
        title: "The meeting starts in the pre-read",
        body: [
          "Send the decision note, the options, and the ask at least a working day ahead. People in other time zones cannot 'quickly glance' at 9am your time. If the pack is not ready, move the meeting. A remote session that opens with a cold thirty-slide tour is a broadcast. Broadcasts do not need twelve people on mute.",
          "Ask for written comments before you gather. A thread or a column on the note — support, object, question — means you spend the hour on disagreement, not on discovering opinions that could have been typed. If nobody comments, you may not need the meeting. You may need a deadline and a default: 'We proceed with option B on Thursday unless someone objects with a reason.'",
          "Keep the live slot short and single-purpose. Forty-five minutes with one decision beats ninety minutes of 'catch-up' that could have been a paragraph. Remote fatigue is real and it is not an excuse for sloppiness; it is a constraint. Respect it the way you would respect a room booking that ends when the next team arrives.",
        ],
      },
      {
        id: "one-conversation",
        title: "One conversation at a time",
        body: [
          "Remote rooms multiply side channels: chat, reactions, private messages, a second document. Pick one spoken conversation and one written place for the stack. If chat is the stack, you must work it. If chat is a second meeting, mute it or you will lose the first. Announce the rule at the start so you are not shushing people like a supply teacher.",
          "Use names and a visible queue. 'I have Dev, then Ana, then I will check chat.' Interrupt overlaps early and lightly. Two people talking at once on a laggy call produces heat and no sentence anyone can minute. You are not being rude. You are making a recording that future-you can turn into an action.",
          "Do not 'go around the room' for atmosphere. Go around the decision. A fifteen-second position from each required voice — yes, no, or what they need — is a tool. A tour of how everyone's week has been is a social club. There is a place for that. It is not the vendor-approval slot you invited eight people to.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Do not confuse cameras with attention. Put the work in a pre-read, collect written positions, and keep the live hour for the disagreement. Run one spoken conversation and one stack. Hybrid rooms need the decision typed where both sides can see it.",
          "Next: decision-making in meetings — who decides, how it is recorded, and what you do with dissent.",
        ],
      },
    ],
  },

  "decision-making": {
    intro:
      "A meeting that 'almost decided' has decided nothing. The universe does not grade on effort. A usable decision has a named decider, a written outcome, and a record of the dissent you did not talk out of the room.",
    sections: [
      {
        id: "name-the-decider",
        title: "Name the decision and the person who owns it",
        body: [
          "Write the decision as a sentence before the meeting: 'We will choose vendor A or B for the payments rebuild, to start procurement this month.' If you cannot write the sentence, you do not have a decision item. You have a discussion, which may be useful, and should be labelled as such so nobody thinks a nod was a mandate.",
          "Name the decider on the invite. Consensus is a method, not a hiding place. If the sponsor decides after advice, say so. If the product owner decides inside a policy, say so. If a committee must vote, say what majority or whose veto counts. Rooms that 'decide together' often discover later that one person who was not in the room can unwind it.",
          "If the decider is absent, do not improvise a substitute unless that substitute is already on the decision-rights table. You can refine options and record a recommendation. You cannot honestly close a choice the owner has not made. Fake closure is how you get to re-run the meeting with extra humiliation.",
        ],
      },
      {
        id: "record-it",
        title: "Record it like you mean it",
        body: [
          "Before you leave the item, read the decision back: what was chosen, what was not, any conditions, and the date it takes effect. Type it where the attendees can see it — a shared note, a ticket, the decision log. A decision that lives only in your memory is a rumour you are offering to defend later.",
          "Log the alternatives you rejected and why, in a clause each. Future-you will be asked 'why didn't we just do B?' in a month when B's risks are forgotten. 'B missed the data-residency constraint; A did not' is a gift to that conversation. 'We preferred A' is how you get to have the meeting again.",
          "Put the decision in the system of record the same day — the log, the charter change, the ticket, the mail to the people who were not present but are bound by it. A brilliant room and a silent aftermath is how organisations develop parallel truths. The corridor version will win if you do not publish.",
        ],
      },
      {
        id: "dissent",
        title: "Dissent is data. Note it.",
        body: [
          "Ask once, explicitly: 'Who is not persuaded, and what would you want on the record?' Then write the objection without sanding it into 'the team discussed concerns.' Named dissent does two jobs. It keeps the objector in the work — they were heard — and it gives you a trigger. If their feared event starts happening, you already know what to reopen.",
          "Do not hunt consensus until everyone is slightly miserable and the clock is dead. Legitimate disagreement after a fair hearing is a normal output. The decider decides. The dissent is attached. People who lose a clean argument will often still deliver. People who were steamrolled will deliver compliance and a sequel in the next forum.",
          "If dissent reveals that you had the wrong decider or a missing constraint, stop. That is not awkwardness to be managed. That is the meeting working. Re-staff the decision rather than forcing a vote you already know will be reversed by legal, security, or the person who owns the budget.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "A decision is a sentence with a decider, a written outcome, rejected alternatives, and dated effect. Note dissent by name and reason. Publish the same day. 'We were broadly aligned' is not a record.",
          "Next: after the meeting — minutes people can use, and actions with owners and dates before the day ends.",
        ],
      },
    ],
  },

  "post-meeting": {
    intro:
      "The meeting is not finished when the call ends. It is finished when actions have owners and dates, and the people who were not in the room can see what changed. Minutes written next Wednesday are archaeology.",
    sections: [
      {
        id: "usable-minutes",
        title: "Minutes that a stranger could act on",
        body: [
          "Write for someone who was not there. Decisions first, then actions, then a short note of material discussion. Do not transcribe the hour. Nobody will read a novella of who said what about the weather in the data centre. They will read a list of what is now true.",
          "Use the words the room used for the decision, not a softened paraphrase. If the room said 'we will not do the mobile app in this release,' do not write 'mobile will be considered in a later phase' unless that was the decision. Soft minutes create a second negotiation in email.",
          "Include links to the artefacts you pointed at — the options note, the board, the log. Minutes without the objects are a story about documents. Minutes with the objects are a working pack. If your organisation has a decision log, the meeting note should update it, not compete with it.",
        ],
      },
      {
        id: "actions-same-day",
        title: "Owner, verb, date — the same day",
        body: [
          "Every action needs a single human owner, a verb, and a date. 'Team to look at vendor' is a wish. 'Sam to send the revised scorecard to finance by Thursday 4pm' is an action. If two people 'own' it, nobody does. If there is no date, it will be discovered in the next meeting as if the last one was a dream.",
          "Send the action list the same day, while the room still remembers agreeing. Same day is the standard because memory decays and calendars fill. A Friday meeting whose actions appear on Monday morning has already lost the weekend and half the excuses. Put the items in the tracker the team actually uses, not only in an email that will be searched for in a panic.",
          "Confirm owners rather than assigning the unwilling in absentia. If Priya was not there, you do not get to volunteer her Friday. Write 'proposed owner: Priya — confirm by tomorrow' and chase. An owner who never confirmed is not an owner. They are a plot device.",
        ],
      },
      {
        id: "close-the-loop",
        title: "Close the loop or the next meeting is a reunion",
        body: [
          "Start the next session with the action list, not a new slide tour. Done, slipped with a new date, or escalated. If the same action slips twice, it is not an action. It is a blocked piece of work and needs a different conversation: authority, dependency, or a decision to drop it.",
          "Tell the people who were not invited what they are now bound by. A decision that changes a team's week should not reach them as corridor news. A six-line mail or a ticket they already watch is enough. Silence is how you get 'nobody told us' — which is often true and always expensive.",
          "Parked items from the meeting belong on the same list. If you facilitated beautifully and then lost the parking lot, you ran a clean hour that produced a mess. The after-work is the product. The meeting was the factory.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Minutes: decisions, then actions, in the room's actual words, the same day. Actions: one owner, one verb, one date, confirmed. Open the next meeting on that list, and tell the people who were not present what now constrains them.",
          "You now have a meeting practice: design the outcome, facilitate the stack and the quiet voices, run remote as async-plus-one-conversation, decide on the record, and close the same day. Use it on the next standing meeting you own. One cleaned action list will teach the organisation faster than a manifesto about meeting culture.",
        ],
      },
    ],
  },

  "quality-planning": {
    intro:
      "Quality is not a vibe at the end of the project and it is not a department that 'does testing.' Planning quality means deciding, before you build, what good looks like, how you will know, and which defects you refuse to discover in front of a customer.",
    sections: [
      {
        id: "three-jobs",
        title: "Plan, assure, control — three jobs, not three synonyms",
        body: [
          "Quality planning decides the standard, the measures, and the approach. Quality assurance checks that the process would produce that standard if people follow it. Quality control inspects the thing that came out. If you only have the third, you have a scrap bin with a dashboard. If you only have the first, you have a policy.",
          "Prevention sits in planning and assurance: write the standard, design the review, train the check, stop the defect being born. Inspection sits in control: measure the output against the standard and decide whether it passes. Both are needed. Organisations that fall in love with inspection are paying to find yesterday's mistake. Organisations that fall in love with policy are paying for a binder.",
          "Say this distinction out loud with the sponsor. Many will ask for 'more QA' when they mean 'more testing at the end.' That request is a cost profile. If they want fewer escapes to production, the work is upstream: clearer acceptance criteria, earlier reviews, a build that cannot silently skip a check. Agree which job they are funding.",
        ],
      },
      {
        id: "standards-that-can-fail",
        title: "Standards and metrics that can actually fail",
        body: [
          "A standard is usable when a competent person could fail it. 'High quality' cannot fail. 'Zero Sev-1 defects in the first ten working days after go-live' can. 'The report matches the finance extract to the penny on the agreed sample' can. Write measures that a sceptic could audit. If the only person who can tell whether you passed is the person who built it, you do not have a standard. You have a compliment.",
          "Pick a short list that matches the risk of this product. A payments change and an internal newsletter do not deserve the same instrumentation. Defect escapes, failed acceptance tests, rework hours, and customer-found issues are usually more honest than a satisfaction smiley. Do not invent a suite of metrics to look mature. Invent the few that would change a release decision.",
          "Define the sample and the source. 'Customer satisfaction is high' is a mood. 'We will use the last release's defect density on the payments service as the baseline and we will not release if the UAT escape rate exceeds it' is a rule. Rules can be argued with. Moods can only be performed.",
        ],
      },
      {
        id: "the-plan",
        title: "The quality management plan as an operating document",
        body: [
          "Keep it short enough that people will open it: standards, environments, who reviews what, entry and exit for test, what happens when a check fails, and who can waive a defect. A waiver path matters. If the only way to ship with a known issue is to pretend you did not know, you will get excellent fiction.",
          "Tie reviews to the work, not to a phase named after a textbook. A design review before the expensive build. A checklist on the pull request. A test that must pass in the shared environment. If the plan assumes a six-week test phase you do not have, it is a novel. Rewrite it for the cadence you actually run.",
          "Get the people who will do the work to mark the plan. Testers, developers, operations, and the person who will accept the product. A plan written only by the PM is a hypothesis about other people's jobs. Their edits are the quality of the plan. Your job is to make the trade-offs visible when their edits cost time.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Planning sets the standard and the approach. Assurance watches the process. Control inspects the output. Write measures that can fail, keep the plan short enough to operate, and agree waivers in daylight.",
          "Next: quality assurance — how you build the standard into the workflow so you are not relying on a heroic test phase.",
        ],
      },
    ],
  },

  "quality-assurance": {
    intro:
      "Assurance is the unglamorous question: if people follow the way we work, would a good thing come out? It is audits, checklists, and design of the path — not a second test team with a friendlier name.",
    sections: [
      {
        id: "process-not-widget",
        title: "Watch the path, not only the widget",
        body: [
          "Control asks whether this build passed. Assurance asks whether the way you produce builds would catch the failure next time. A project can pass every test in a month and still have no assurance if the tests were a one-off heroics session nobody could repeat. Repeatability is the point. Heroics are a risk you enjoyed.",
          "Look at the workflow for places a defect is born: unclear acceptance criteria, no review on the risky change, an environment that is not like production, a handoff with no owner. Fix those and you prevent classes of error. Adding another inspection at the end prevents nothing. It sorts the wreckage.",
          "Write the few checks that must happen for work to move — definition of ready, review on the interface change, a test that exercises the payment path, a release checklist. If a check is optional under time pressure, it is not a check. It is a suggestion, and suggestions lose to the date.",
        ],
      },
      {
        id: "build-it-in",
        title: "Build the standard into the way work moves",
        body: [
          "Put the quality gate where the work already is. A pull-request template that asks for the risk and the test evidence. A ticket that cannot move to 'done' without the acceptance lines ticked by someone who did not write the code. A design review booked when the interface is cheap to change. People follow the path of least resistance. Make the decent path the easy one.",
          "Train the check, do not only publish it. Walk the first two reviews with the team. Show what 'good enough' looks like and what gets sent back. A checklist nobody has seen used will be filled in as theatre — every box ticked, every box meaningless. The first reviews are the standard. The document is the reminder.",
          "When a gate fails, the work stops or it goes back. It does not sneak around through a private environment and a friendly conversation. If leadership wants to waive, use the waiver path you wrote in the plan. A gate that can be walked around in the dark is a prop. People learn which world they are in by watching one exception.",
        ],
      },
      {
        id: "audits-without-inquisition",
        title: "Audits without the inquisition",
        body: [
          "A light assurance review is a structured look at whether the path is being used: sample a few items, ask where the evidence lives, and note the gap. It is not a hunt for a culprit. If the checklist is unusable, that is a process finding. If one person is skipping it to hit a date they were given no room on, that is a planning finding. Both are useful. Neither requires a courtroom.",
          "Timebox it. An hour on a sample every fortnight beats a quarterly inquisition that produces a forty-page report and no change. Write three findings and one change you will make to the workflow. If the audit never changes the path, it is inspection with extra adjectives.",
          "Share the findings with the people who do the work, not only with a quality committee. The point is a better path next Tuesday. A finding that only exists on a slide for a governance forum is how assurance becomes a sport for people who do not ship.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Assurance is whether the process would produce the standard again. Put gates on the path work already takes, teach the first reviews, and keep exceptions on the waiver path. Sample the path on a short cadence and change the path when it fails.",
          "Next: quality control — inspection, testing, and acceptance criteria that can actually decide a release.",
        ],
      },
    ],
  },

  "quality-control": {
    intro:
      "Control is inspection with a purpose: does this output meet the standard we planned, and who is allowed to say so? It is necessary. It is also the most expensive moment to discover that nobody agreed what 'done' meant.",
    sections: [
      {
        id: "inspection-with-purpose",
        title: "Inspect to decide, not to decorate a dashboard",
        body: [
          "Every control activity should change a decision: ship, fix, waive, or stop. Tests that nobody uses to decide are a hobby funded by the project. Write the decision the test supports before you write the hundredth case. 'If the reconciliation fails on the agreed sample, we do not go live' is a control. 'We ran a lot of tests' is a weather report.",
          "Match the depth to the risk. A change to a rate-calculation path deserves more than a click-through of the happy path. A copy change on a help article does not need a performance lab. Teams that test everything equally will test the scary thing late, because the easy things ate the week. That is not rigour. That is a queue with no priority.",
          "Record what you inspected, against which standard, and the result. A pass with no sample is a rumour. A fail with no owner is a mood. Control artefacts exist so a sceptic could replay the check. If only the tester's memory holds the evidence, you are one holiday away from a mystery.",
        ],
      },
      {
        id: "acceptance-first",
        title: "Acceptance criteria before the argument",
        body: [
          "Write acceptance criteria when the work is still cheap — in the ticket, the story, the specification — as observable checks. 'Given this account, when we post this payment, the ledger shows X and the customer sees Y.' The person who will accept the product should mark those lines. If they refuse to, you do not have an acceptor. You have an audience for a demo.",
          "Do not negotiate the meaning of 'done' in the last test cycle. That argument belongs in planning. Late negotiation is how 'we thought you meant the full file' becomes a weekend. When a criterion was genuinely missed, treat it as a scope or plan change: cost, time, or a waiver. Pretending it was always implied is how trust leaves the test team.",
          "Separate defects from change requests. A defect is a failure against an agreed criterion. A change request is a new criterion. Mixing them lets stakeholders smuggle scope through the bug list. It also lets delivery teams dismiss real defects as 'enhancements.' The distinction is a professional act. Keep it even when it is inconvenient.",
        ],
      },
      {
        id: "prevention-still-wins",
        title: "Prevention still beats inspection",
        body: [
          "Inspection at the end is how you buy a very expensive surprise. Use control data to feed the path: if the same class of defect keeps arriving, the assurance check is wrong or missing. A growing pile of late defects is not a sign you need more testers by default. It is a sign the work is entering test unfinished. Say that with the counts you have, not with a speech about culture.",
          "Stop the line when the standard says so. A PM who 'finds a way' to ship past a failed control without a waiver has taught the organisation that dates beat standards. You will not get that authority back with a retrospective. If the date is truly immovable, the honest move is a reduced scope or an explicit residual risk owned by the sponsor.",
          "Keep the customer-found defect as a first-class signal. If users are finding issues your controls never look for, your standard is incomplete. Add the check. Do not only add a warmer apology. Control that never learns from escapes is a ritual.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Control inspects output against a planned standard to support a ship, fix, waive, or stop decision. Write acceptance criteria before the build, keep defects distinct from new scope, and use escapes to fix the path — not only the instance.",
          "Next you will cover continuous quality improvement — root cause and corrective action — which already sits in this course. Then the course closes on quality reporting: how you tell the story of the standard without turning a dashboard into wallpaper.",
        ],
      },
    ],
  },

  "quality-reporting": {
    intro:
      "Quality reporting is how you tell people whether the standard is holding, without drowning them in charts that never change a decision. A dashboard nobody uses to choose is interior decoration.",
    sections: [
      {
        id: "audience-first",
        title: "Different rooms need different truths",
        body: [
          "The team needs movement: which checks failed, which defects are blocking, what was waived. The sponsor needs residual risk and a decision: ship, slip, or cut. A regulator or audit function needs evidence against a named standard. One slide that tries to please all three will please none, and it will be unread by Thursday.",
          "Lead with the decision you need, then the two or three measures that support it. 'We need a waiver on defect 184 or a two-day slip; escape rate in UAT is above the last-release baseline' is a report. A heatmap of fourteen greens and a red nobody can explain is a poster. If you cannot name the ask, do not send the pack yet.",
          "Say what you are not measuring. Sponsors fill silence with the metric they used at their last company. If you are not tracking a satisfaction score because the sample would be nonsense, write that. Honesty about the gap is a quality behaviour. A fake number is how reporting becomes a second product, with its own defects.",
        ],
      },
      {
        id: "measures-that-move",
        title: "Show movement, not a museum of traffic lights",
        body: [
          "Report change: new escapes, scores that worsened, gates skipped, waivers used, and defects that aged. A chart that has been green for six weeks with no narrative is either a triumph you should claim in a sentence or a metric that cannot fail. Find out which. Stale green is a credibility leak; it trains people to stop reading.",
          "Use counts and dates a sceptic could check. 'Three Sev-2 defects open, oldest nine days, owner Ana, target Friday.' That sentence can be argued with. 'Quality is broadly on track' cannot. Broadly is where projects go to be polite. Polite reports are how surprises get a head start.",
          "Separate process health from product health. A beautiful review-compliance score can sit next to a product that fails acceptance. If you mix them, leadership will pick the prettier number. Show both, and say which one should change this week's plan.",
        ],
      },
      {
        id: "cadence-and-trace",
        title: "A cadence, and a trail someone else could follow",
        body: [
          "Put quality on the same calendar as status, in a slot that can produce a decision. A monthly quality forum that cannot stop a release is a book club. If the release train is weekly, the quality read needs to match or you are decorating last week's train.",
          "Keep the evidence behind the sentence: which run, which environment, which sample, which waiver. You will be asked. 'The test lead said it was fine' is not a trail. It is a person you have volunteered as a single point of failure. Store the artefact where the next PM could find it if you were on a beach.",
          "When the story is bad, send it early with options. Quality reporting that arrives after the go/no-go as a confession is issue management. The job is to make the residual risk visible while someone can still choose. That is the same discipline as risk reporting, with defects instead of hypotheticals.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Report to the decision in the room. Show movement and residual risk, not a museum of greens. Keep evidence a sceptic could replay, and put quality on the same cadence as the release choice.",
          "You now have a quality practice: plan a standard that can fail, assure the path, control the output, improve from causes, and report for decisions. Use it on the next release you touch. One waiver written in daylight beats a dozen defects discovered by customers who do not read your dashboard.",
        ],
      },
    ],
  },

  "principled-negotiation": {
    intro:
      "Principled negotiation, as taught in the Harvard method, is a way to stop bargaining like two people defending slogans. You separate the humans from the problem, talk about interests, invent options, and test them against a standard that is not either ego.",
    sections: [
      {
        id: "four-moves",
        title: "Four moves, not a personality transplant",
        body: [
          "The method is simple to say and easy to abandon under heat: separate people from the problem; focus on interests, not positions; invent options for mutual gain; insist on objective criteria. You already met positions, interests, BATNA and ZOPA. This lesson is how you run the conversation so those ideas survive contact with a tense sponsor.",
          "It is not a request that anyone stop having feelings. People stay attached to face, fairness, and fear of looking weak in front of their own team. You deal with that on a human channel — acknowledgement, a private word, time — and you keep the problem on the table as a shared puzzle. Mixing the two is how a scope discussion becomes a referendum on who is being 'difficult.'",
          "Prepare on paper. Their likely position, the interest underneath, your interest, two options that are not cheap compromises, and a criterion you could both point at — a regulation, a capacity number, a previous release's evidence, a policy. Walking in with only your position is how you become the person who 'won't be flexible,' which is often code for 'came empty-handed.'",
        ],
      },
      {
        id: "people-and-problem",
        title: "Separate the people from the problem",
        body: [
          "Name the behaviour or the constraint, not the character. 'The November freeze is a hard constraint, so the mobile app and the payments cut cannot both land' is a problem. 'Product never understands delivery' is a person. The second may feel true at 6pm. It cannot be negotiated. It can only be resented.",
          "If someone is angry, do not win the hour by scoring them. Let them say the sentence, reflect the interest you heard, and put it on the board. 'You need something you can show at the conference' is a problem statement you can work. 'Calm down' is how you add a second problem. You are not a therapist. You are keeping the problem solvable.",
          "Watch your own face. Sarcasm in a negotiation is a weapon that looks clever and costs options. If you need to vent, do it after, with someone who is not in the deal. In the room, you are allowed to be plain. You are not allowed to be cheap. Plain is 'I cannot commit to that date with this scope.' Cheap is a joke about whose bonus depends on it.",
        ],
      },
      {
        id: "interests-options-criteria",
        title: "Interests, options, and a standard that is not your mood",
        body: [
          "Ask why, then ask why that matters, until you have an interest you could meet another way. 'We need it in three weeks' may be a conference, a regulatory window, or a fear of looking slow next to a competitor. Those three interests suggest different options. Treating them as one position will get you a sulk or a surrender.",
          "Invent options before you commit to a split-the-difference. A phased release, a smaller first market, a borrowed specialist for two weeks, a written residual risk the sponsor owns — these are options. Splitting a date down the middle is often a compromise that satisfies neither interest and wrecks the plan. Mutual gain is not softness. It is refusing to collapse to one axis.",
          "Anchor the close on a criterion: capacity from the team's last similar increment, a legal date, a budget line, a security standard. 'Because I need it' is a position. 'Because the environment is shared and last quarter's work of this size took six weeks' is a criterion. If they reject the criterion, ask what they would accept as fair evidence. That question is the method working.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Prepare interests, options, and a criterion. Keep people and problems on different channels. Do not close by splitting the difference if a better option exists. Use BATNA when the zone of agreement is empty — walking away is a result, not a tantrum.",
          "Next: scope negotiation — how you make every added 'small thing' show the trade, without turning yourself into the project's no-machine.",
        ],
      },
    ],
  },

  "scope-negotiation": {
    intro:
      "Scope creep is not a villain in a cape. It is a sequence of unpaid yeses, each of them reasonable in isolation. Your job is to make the trade visible before you smile, so the organisation can choose what it is actually buying.",
    sections: [
      {
        id: "the-unpaid-yes",
        title: "'Just a small change' is how projects grow a second personality",
        body: [
          "Treat every addition as a change to the charter, however tiny the requester believes it is. You do not need a ceremony for a label tweak. You do need the habit of asking what it displaces. The danger is not the single request. It is the tenth one that never had to compete with the work you already promised.",
          "Write the current in-scope and out-of-scope lists where requesters can see them. When the mobile app arrives as a 'quick extra,' you point at the exclusion and the date. You are not being difficult. You are being the person who remembers there is a box. People who never point at the box become the box.",
          "Log the asks you refuse and the asks you accept. A change log is not bureaucracy for its own sake. It is how you show a sponsor, in one page, that the project is not late because the team is slow. It is late because the organisation bought a second project on the quiet. That story needs evidence. Charm will not do.",
        ],
      },
      {
        id: "show-the-trade",
        title: "Make the trade visible before anyone relaxes",
        body: [
          "Answer in a shape, not a mood: 'Yes, if we drop X or move the date by Y or add Z capacity.' Three levers is enough. Do not invent a fourth from hope. If you do not yet know the cost, say 'not until we have a size from the people who would build it' and give a time for that size. A fast yes with a fictional estimate is how you buy a slower no later.",
          "Put the choice with the person who owns the constraint. If the date is the sponsor's, the sponsor picks the descope. If the budget is finance's, finance sees the number. Do not absorb the trade into your personal flexibility. That feels helpful and trains the organisation that scope is free if they ask you nicely.",
          "Use objective criteria from the last similar piece of work. 'The last payments increment of this shape took a fortnight and slipped when we added statements' is a better anchor than 'I have a bad feeling.' If they reject the analogy, ask for a better one. You are negotiating the model of the work, not your right to have a spine.",
        ],
      },
      {
        id: "no-with-a-path",
        title: "When the answer is no, say what you can do",
        body: [
          "A bare no ends the conversation and starts a second one without you. A no with a path — 'not in this release; I can put it first in the next, or we can open a change with a cost by Thursday' — keeps you in the problem. That is principled negotiation applied to scope: the interest might be 'be seen to respond to the customer,' which a dated next-release slot can meet.",
          "Do not hide behind 'the process.' Processes are easy to hate. Show the interest you are protecting: the conference date, the team's already-committed work, the regulatory window. People can argue with a process. They have a harder time arguing with a consequence they also own.",
          "If the requester goes around you, do not sulk in the corridor. Take the same trade-off note to the decider and ask them to choose in writing. Circumvention is information about decision rights. Use it to repair the table, not to start a feud. Feuds are satisfying. They are not a scope strategy.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Every addition displaces something. Show the trade — scope, date, or capacity — and put the choice with the owner of the constraint. Refuse with a path that still meets the interest if you can. Keep a log so the second project cannot pretend it was always the first.",
          "Next: resource negotiation — people and time as interests, not a headcount argument you lose by volume.",
        ],
      },
    ],
  },

  "resource-negotiation": {
    intro:
      "Resources are not a pool of interchangeable hours sitting in a cupboard labelled 'the team.' They are specific people, at specific moments, with other work that will not vanish because your milestone is eloquent. Negotiate the interest, not the slogan.",
    sections: [
      {
        id: "not-a-pool",
        title: "People are not fungible, and timing is the scarce bit",
        body: [
          "Headcount is a position: 'I need two more developers.' The interest is usually a skill in a window — an integrator who has done this API before, in May, before the freeze. A generalist in July does not meet that interest. If you argue only for bodies, you will lose to someone whose slide has a bigger number, or you will win and still miss the window.",
          "Write what you need as a capability, a duration, and a start. 'A payments engineer who has shipped this stack, four weeks, from 12 May, or the go-live moves.' That sentence can be matched against other work. 'More resource' cannot. It can only be escalated as a complaint about how unsupported you are.",
          "Name the work you will stop if you do not get them. A resource ask without a descope is a request that the existing team become faster by oratory. Line managers hear that every week. They will give you sympathy and the person who happens to be least busy, which is not always the person who can do the job.",
        ],
      },
      {
        id: "interests-not-headcount",
        title: "Negotiate interests on both sides of the table",
        body: [
          "The manager you are asking has interests too: a production rota, another project's date, a person they are trying not to burn out, a hiring gap they cannot admit in your meeting. Ask what would make a yes possible. A later start, a shorter burst, a shadow from your side, a written agreement that their other date moves — those are options. Demanding a name by Friday is a position.",
          "Bring a criterion they can use with their own boss: the critical path, the cost of slip, the skill you cannot substitute. 'Because we are important' is not a criterion. Every project in the building thinks that. 'If we miss 15 June we miss the regulatory window and the fine sits with X' is a criterion. Let them carry that upstairs. Do not ask them to carry a vibe.",
          "Trade what you can actually trade. Perhaps you can take a junior plus a named review from a senior. Perhaps you can move a low-risk workstream. Perhaps you can fund a contractor for the window and release them. Mutual gain here is ugly and practical. It is not a workshop about collaboration values.",
        ],
      },
      {
        id: "after-the-yes",
        title: "A yes without a start date is still a no",
        body: [
          "Confirm the name, the percentage, the start, and what they will stop doing. Put it in the plan and in a mail the line manager sees. Handshake allocations evaporate on the first production incident. If you cannot get a name, you do not have a resource. You have a mood that will be 'still being worked' in the next steerco.",
          "Watch the first two weeks. If the person is in three other stand-ups, you negotiated a fiction. Raise it as a capacity fact, not a character judgement. 'We have 30% of what we were assigned; here is the new forecast' is a control loop. 'They are not committed' is a feud you will not win.",
          "Do not hoard people past the interest. If the window closes and you still have a specialist 'just in case,' you are now the person other PMs complain about in the kitchen. Release them in public. Generosity with a scarce skill is how your next ask gets heard. Hoarding is how you win May and lose the organisation.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Ask for a capability in a window, not a headcount slogan. Meet the other manager's interests with options and a criterion they can reuse. Confirm names and starts in writing, and release people when the interest is met.",
          "Next: difficult conversations — facts, a clear request, and the discipline of not turning a disagreement into a story about who is reasonable.",
        ],
      },
    ],
  },

  "difficult-conversations": {
    intro:
      "A difficult conversation is not a performance of bravery. It is a short meeting with facts, the impact, and a request. Without the request, you have shared a mood and given the other person nothing they can do.",
    sections: [
      {
        id: "facts-then-story",
        title: "Facts first. Then the story, labelled as a story.",
        body: [
          "Write the facts you could show a sceptic: dates missed, scope added, a decision that was not recorded, a person who was not in the room. Then write the story you are tempted to tell — 'they do not respect the process,' 'I am being set up.' Leave the story off the table, or label it as your inference. People can work with a date. They will fight a diagnosis of their character until the building closes.",
          "Open with the shared purpose and the fact. 'We said 12 May for the vendor drop. It is the 18th and we do not have a new date. I need a date or a decision to switch to the fallback.' That is a conversation. 'I am frustrated by the lack of accountability' is a TED talk the other person did not buy a ticket for.",
          "Do not stack ten grievances to feel ready. One conversation, one cluster of facts, one request. A laundry list teaches them to wait until you have exhausted yourself. It also makes it easy to pick the weakest item and debate that until the hour dies. You can have a second conversation. You cannot have a trial.",
        ],
      },
      {
        id: "the-request",
        title: "The request is the point",
        body: [
          "End with something they could do by a date: send the scorecard, attend the decision, accept a slip, name a deputy, stop adding scope without a trade. A request is observable. 'I need you to be more engaged' is not. If you cannot name the behaviour, you are not ready to have the conversation. You are ready to complain to a mentor, which is a different and useful hour.",
          "Offer a path that protects their interest if you can see it. 'If the conference is the driver, we can ship a thin slice on that date and park the rest' keeps the method you already practised. A request with no option is sometimes necessary — safety, legality, a hard no — but do not skip the option out of theatrical firmness. Firmness is the date and the owner, not the jaw.",
          "Say what you will do if the request is refused. That is your BATNA, said without theatre: escalate to the sponsor on Thursday with the options note, stop the workstream, or accept the residual risk in writing. A difficult conversation with no alternative is a plea. Pleas are heard as optional.",
        ],
      },
      {
        id: "after-the-hour",
        title: "Write it down. Then do the next decent thing.",
        body: [
          "Send a short record the same day: facts stated, request made, what was agreed, what remains open. Do not write a prosecution transcript. Do not write nothing. Silence lets both of you invent a kinder version. The kinder version will not survive the next miss.",
          "If they escalate or reframe you as 'difficult,' stay on the facts and the request. Take the same note to the decider. Do not open a parallel campaign in the kitchen. You can be right and still lose the room if you become a faction of one. The note is your reputation. The corridor is theirs.",
          "Repair the working relationship on the next ordinary piece of work. A clean action, a kept promise, a credit in public. Difficult conversations that become identities — you as the only adult, them as the problem — are how projects get a subplot. You already know cynicism is a poor operating system. This is where that line earns its keep.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Prepare facts you could show, leave character stories off the table, and close with one observable request and a dated alternative. Record the hour the same day and return to ordinary kept promises.",
          "You now have a negotiation practice: interests and BATNA, the Harvard four moves, visible scope trades, resources as capabilities in a window, and difficult conversations that ask for something. Use it on the next real no you owe someone. A short note with a trade will do more than a reputation for being 'strong.'",
        ],
      },
    ],
  },
}
