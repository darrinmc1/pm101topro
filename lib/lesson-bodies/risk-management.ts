import type { LessonBodies } from "./types"

export const riskManagementBodies: LessonBodies = {
  "risk-frameworks": {
    intro:
      "A risk register that nobody opens is a spreadsheet with anxiety. A risk framework is the operating rhythm that keeps identification, analysis, and response from becoming a one-off workshop you forget by Thursday.",
    sections: [
      {
        id: "what-a-framework-is",
        title: "What a risk framework actually is",
        body: [
          "A risk framework is a repeatable way to find uncertainty, decide how much it matters, assign an owner, and check whether the response is still true. It is not a colour-coded grid you present once at kickoff and then treat as a completed chore.",
          "Most organisations already have a template. The failure mode is treating the template as the work. Filling in twenty rows during week one and never touching them again is how projects discover, late and loudly, that the vendor risk everyone 'knew about' had no owner and no trigger.",
          "A usable framework has four loops: identify, analyse, respond, and review. If any loop is missing, you do not have a framework. You have a list. Lists do not escalate themselves.",
        ],
      },
      {
        id: "identification-that-isnt-theatre",
        title: "Identification that is not theatre",
        body: [
          "Start with categories so the room does not only name the risks that already keep them up at night: delivery, technical, commercial, people, external, and compliance. Then ask what would have to be true for the plan to fail. That question surfaces more than 'what are you worried about?'",
          "Write risks as cause → uncertain event → effect. 'Vendor might be late' is a mood. 'If the integration environment is delayed two weeks, UAT slips and the regulatory window is missed' is a risk you can own. The second version tells you what to watch and what to do.",
          "Do not outsource identification to the PM alone. The PM sees schedule risk. The engineer sees the brittle interface. Finance sees the purchase-order lag. The sponsor sees the political risk nobody wants to type. Your job is to run the conversation, not to invent the register from a blank page and a brave smile.",
        ],
      },
      {
        id: "keep-it-alive",
        title: "Keep the framework alive",
        body: [
          "Pick a review cadence that matches the project's pulse. Weekly for a short, high-change delivery. Fortnightly for a calmer programme. Monthly is the slowest you should go if anyone still claims the project is 'risky.' A risk that is never reviewed is an assumption wearing a disguise.",
          "Give every material risk an owner who can actually spend time or money. 'The team' is not an owner. Neither is the PM by default. If the only person who can approve the fallback vendor is the sponsor, the sponsor owns that risk whether the org chart finds that convenient or not.",
          "Close risks that have expired. A register that still lists last quarter's office-move risk is training people to ignore the document. Pruning is a professional act. Hoarding expired rows is how the register becomes wallpaper.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "A risk framework is a four-loop rhythm: identify, analyse, respond, review. Write risks as cause, event, and effect. Assign owners who can act. Review on a cadence, and delete the dead rows.",
          "Next you will split qualitative scoring from quantitative analysis — when a matrix is enough, and when you need a number leadership can argue with honestly.",
        ],
      },
    ],
  },

  "qualitative-quantitative": {
    intro:
      "Not every risk needs a Monte Carlo model. Not every risk can be handled with a traffic-light matrix and hope. The skill is knowing which analysis earns its keep — and refusing to fake precision you do not have.",
    sections: [
      {
        id: "qualitative-first",
        title: "Qualitative analysis: the matrix that is allowed to be honest",
        body: [
          "Qualitative analysis scores likelihood and impact on a simple scale — often 1–5 or Low/Medium/High — then multiplies or maps them into an exposure rating. The point is ranking, not prophecy. You are deciding where attention goes this month.",
          "Calibrate the scale in the room. If everyone rates every risk High/High, the matrix is a panic button, not a tool. If everything is Medium, it is a comfort blanket. Define what High impact means in this project: missed go-live, six-figure overrun, regulatory breach, or reputational damage. Vague scales produce vague priorities.",
          "A matrix is enough when the decision is 'which five risks do we actively manage?' It is not enough when someone is asking whether to buy insurance, dual-source a vendor, or cancel a workstream. Those decisions need money attached, or at least a range.",
        ],
      },
      {
        id: "when-to-quantify",
        title: "When quantitative analysis is worth the hours",
        body: [
          "Quantitative analysis puts units on the uncertainty: days of delay, pounds or dollars of cost, or expected monetary value (EMV). EMV is probability × impact. A 30% chance of a £100k hit is a £30k exposure. Ugly, simple, and suddenly comparable across risks.",
          "Use it when the decision cost is high: contingency sizing, go/no-go, or a change that trades one expensive risk for another. Do not use it to decorate a steerco pack. A three-decimal EMV built from a guess is still a guess. It just looks like it went to university.",
          "If you lack data, say so. Analogous figures from the last similar project beat invented percentages. 'We do not know' is a professional sentence. 'Likelihood is 37%' when nobody measured anything is how PMs lose the room.",
        ],
      },
      {
        id: "dont-mix-the-signals",
        title: "Do not mix the signals",
        body: [
          "Keep qualitative scores for triage and quantitative figures for the few risks that change a decision. Mixing them on one slide — red boxes next to fake-precise pounds — teaches executives to distrust both.",
          "Re-score when the world changes. A risk that was Low/Low before the vendor went into administration is not still Low/Low because the spreadsheet cell has not been edited. Analysis is a timestamp, not a personality trait.",
          "Watch for false comfort. A beautiful heatmap can coexist with zero responses. Scoring is not mitigation. If the highest-scoring risk has no owner and no action, you have produced art.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Use qualitative scoring to rank attention. Use quantitative analysis — including EMV — when a decision needs a number. Do not invent precision. Re-score when facts change.",
          "Next: the response strategies themselves — avoid, transfer, mitigate, accept — and the equally important skill of picking one on purpose.",
        ],
      },
    ],
  },

  "risk-response-strategies": {
    intro:
      "Identifying a risk and then writing 'monitor' in the response column is how registers go to die. A response is a decision about who does what, by when, and what 'success' looks like if the risk moves.",
    sections: [
      {
        id: "the-four-threat-plays",
        title: "The four plays for threats",
        body: [
          "Avoid: change the plan so the risk cannot happen. Drop the risky integration. Use a proven vendor. Cut the scope that sits on the critical path. Avoidance is often the cheapest option that nobody wants, because it requires saying no.",
          "Transfer: move the impact to someone better placed to hold it — insurance, a fixed-price clause, or a specialist vendor. Transfer is not magic. You usually keep residual risk (the insurer argues, the vendor disputes the clause) and you always keep the relationship cost.",
          "Mitigate: reduce likelihood, impact, or both. A prototype reduces technical uncertainty. A backup resource reduces key-person risk. Mitigation should be a verb with a date, not a slogan. 'Improve communication' is not a mitigation. 'Weekly integration demo with the vendor from 12 May' is.",
          "Accept: choose to live with it, preferably with a trigger. Active acceptance means you watch a metric and have a fallback ready. Passive acceptance means you shrugged. Only use passive acceptance on risks that would not change a decision if they landed.",
        ],
      },
      {
        id: "opportunities",
        title: "Opportunities are not a motivational poster",
        body: [
          "The same four ideas flip for opportunities: exploit, share, enhance, accept. If a regulatory window might open early, exploiting it means having a release train ready. Sharing might mean partnering so you can take the upside you cannot capture alone.",
          "Most teams never log opportunities. They log only the monsters. That trains the organisation to treat uncertainty as purely negative, which is how you miss a cheaper vendor, a reusable component, or a sponsor who would fund a second increment if you asked while the first one is landing well.",
          "Write the opportunity with the same cause–event–effect discipline. 'We might finish early' is not useful. 'If UAT defects stay below the last-release rate, we can bring go-live forward two weeks and avoid the August freeze' is a decision waiting for a trigger.",
        ],
      },
      {
        id: "pick-one-on-purpose",
        title: "Pick one on purpose",
        body: [
          "A risk with three responses and no owner is a committee. Choose the primary strategy, name the residual risk, and fund the action. If mitigation costs more than the EMV of the risk, you are buying comfort, not value. Sometimes that is still rational — reputational risk does not always fit a spreadsheet — but say that out loud.",
          "Fallback plans belong on the high-impact risks. The fallback is what you do if the primary response fails. Dual-source the vendor. Have the rollback script. Know who calls the customer. A fallback invented during the incident is just adrenaline with a job title.",
          "Document the decision. When a risk lands and someone asks why you accepted it, 'we discussed it in March' is not an answer. A one-line rationale in the register is.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Threats: avoid, transfer, mitigate, accept. Opportunities: exploit, share, enhance, accept. Pick a primary strategy, name residual risk, and attach an owner and a date. 'Monitor' is not a strategy unless the trigger is explicit.",
          "Next: monitoring and control — how the register stays honest after the workshop glow fades.",
        ],
      },
    ],
  },

  "monitoring-control": {
    intro:
      "Risk control is the unglamorous half of the job: watching triggers, updating scores, and escalating before the issue has a name. If your register only moves when a crisis arrives, you are doing issue management with extra columns.",
    sections: [
      {
        id: "risks-vs-issues",
        title: "Risks become issues. Say it when they do.",
        body: [
          "A risk is uncertain. An issue has happened. The moment the vendor misses the drop, that row leaves the risk register and enters the issue log with an action, an owner, and a date. Keeping it in the risk list so the 'risk count' looks stable is theatre.",
          "Define triggers in advance. 'If the third-party API sandbox is not available by 15 June, raise as an issue and activate the mock-service fallback.' Triggers turn monitoring into a binary check instead of a vibe.",
          "Watch leading indicators, not just the disaster. Slippage on a predecessor task, a sudden silence from a vendor, or a sponsor who stops reading the pack are often the first movement. By the time the milestone is missed, you are writing an incident report.",
        ],
      },
      {
        id: "control-cadence",
        title: "A control cadence that survives busy weeks",
        body: [
          "Put risk review on the same calendar as status, not as an optional extra. Ten minutes on the top five risks in the weekly meeting beats a monthly two-hour archaeology session. If the meeting is always 'too full,' the project is telling you something about its real priorities.",
          "Update three fields every review: score, response status, and next action. If none of those changed, write 'no change — trigger still X.' Silence in the register is how people assume someone else is watching.",
          "Escalate residual risk that no longer fits the PM's authority. A risk that now threatens the business case belongs with the sponsor, not in a footnote. Escalating early with a proposed response is competence. Escalating after the damage is a status surprise.",
        ],
      },
      {
        id: "reporting-without-wallpaper",
        title: "Reporting without wallpaper",
        body: [
          "Leadership does not need all twenty-eight rows. They need movement: new high risks, scores that worsened, responses that stalled, and decisions they must make. A heatmap with no narrative is interior decoration.",
          "Be specific about what you want. 'Risk 12 requires a decision by Friday: accept a two-week delay or fund a second test environment.' That sentence is why the register exists.",
          "If the same top risk has sat unchanged for six weeks, either the response is working and you should say so, or the response is fictional and you should stop pretending. Stale top risks are a credibility leak.",
        ],
      },
      {
        id: "summary",
        title: "Summary & next steps",
        body: [
          "Promote risks to issues when they land. Use triggers, not vibes. Review on a standing cadence, report movement and decisions, and escalate residual risk that exceeds your authority.",
          "Next: risk workshops — how to run a room that surfaces real risks instead of polite generalities.",
        ],
      },
    ],
  },

  "risk-workshops": {
    intro:
      "A good risk workshop is a facilitated argument with a written output. A bad one is a brainstorm that produces thirty vague rows, two dominant voices, and a lingering sense that you 'did risk.' The difference is design.",
    sections: [
      {
        id: "before-the-room",
        title: "Design the session before you book the room",
        body: [
          "Decide the outcome: a ranked top ten with owners, not a complete inventory of the universe. Send a short pre-read: scope, constraints, and any existing register. People who walk in cold will only name the obvious risks, then check email.",
          "Invite the people who can see different failure modes — delivery, tech, commercial, operations, and at least one sceptic. A workshop of only enthusiasts produces a cheerful register. You want the person who will say the quiet part: the dependency that is already late.",
          "Timebox. Ninety minutes is plenty if you have a structure. Three hours is how you get diminishing returns and a parking lot the size of a car park. If you need more, run a second session on a specific category, not a longer first one.",
        ],
      },
      {
        id: "in-the-room",
        title: "In the room: silence, then structure",
        body: [
          "Start with two minutes of silent writing. It stops the first speaker from setting the entire agenda. Then collect, cluster, and rewrite into cause–event–effect before you score anything. Scoring unfinished sentences is how you get a confident matrix of nonsense.",
          "Facilitate the power dynamics. The senior person who says 'that's not a real risk' will shut the room down. Your job is to park the dismissal, finish the capture, and come back to challenge with evidence. You are not hosting a consensus hug. You are protecting the list from politics long enough to write it down.",
          "Score as a group, but do not average your way to Medium. If engineering says High and the sponsor says Low, that disagreement is the finding. Record both views and the rationale. Fake agreement is how workshops manufacture false confidence.",
        ],
      },
      {
        id: "after-the-workshop",
        title: "After: the part most teams skip",
        body: [
          "Within 48 hours, send the cleaned register: top risks, proposed responses, owners, and open questions. Ask owners to confirm or refuse. An owner who never confirmed is not an owner.",
          "Book the first review date before you leave the session. Workshops that end with 'we'll tidy this up' are how tidy never happens. The workshop is initiation. The cadence is the product.",
          "If the session produced more heat than light — a fight about scope disguised as a risk debate — that is useful. Write it down as a stakeholder or alignment risk and take it to the sponsor. Pretending the room was 'aligned' helps no one except the minutes.",
        ],
      },
      {
        id: "summary",
        title: "Course complete — what's next",
        body: [
          "Design for a ranked, owned output. Silent capture, then structured rewrite, then honest scoring. Confirm owners within two days and lock the first review date before the workshop ends.",
          "You now have a working risk practice: framework, analysis, response, control, and facilitation. Use it on a live project this week — even a small one. A register with five real risks beats a template with twenty ghosts.",
        ],
      },
    ],
  },
}
