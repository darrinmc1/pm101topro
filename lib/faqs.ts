export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const STATUS_FAQS: FaqItem[] = [
  {
    id: "what-is-status-cleaner",
    question: "What is Status Cleaner?",
    answer:
      "A one-job AI tool on pm101toPro. Paste a messy project update, Slack dump, or stand-up notes. It returns a cleaned RAG status, the biggest risk, what you need from leadership, and next actions — using the PM101 reporting-up method, with citations to real courses, lessons, and document types.",
  },
  {
    id: "not-chat",
    question: "Is this a chatbot for the whole site?",
    answer:
      "No. Status Cleaner does one job: turn a status dump into an executive-ready update. It is not chat-with-your-courses. For documents like charters and risk registers, use the AI document generator.",
  },
  {
    id: "method",
    question: "What is the PM101 status method?",
    answer:
      "From the Reporting up lesson in Working with Stakeholders: answer three questions — are we on track (Green/Amber/Red with teeth), what is the biggest risk or issue right now, and what do you need from me? Supporting detail sits below the fold. Escalate early, with a proposed solution.",
  },
  {
    id: "citations",
    question: "Where do the citations come from?",
    answer:
      "Only from the live pm101toPro archive: real course titles, lesson slugs, and document types (Status Report, Risk Register, and the rest of the generator set). Nothing is invented.",
  },
  {
    id: "price",
    question: "How much does Status Cleaner cost?",
    answer:
      "One free generation is included with the same meter as AI documents. After that it ships with paid plans (Early Adopter $5/mo, Pro $10/mo). Standalone list price is $29/month if you only want the cleaner.",
  },
]

export const SITE_FAQS: FaqItem[] = [
  ...STATUS_FAQS,
  {
    id: "free-courses",
    question: "Are the courses really free?",
    answer:
      "Yes. The course library is free to browse. The first lesson of every course is free with no account. Paid plans unlock unlimited AI tools, template packs, and early-adopter pricing.",
  },
  {
    id: "ai-docs",
    question: "How do the AI document tools work?",
    answer:
      "Pick a document type (charter, risk register, RACI, status report, and more), answer a short questionnaire, and get an editable markdown draft. Free accounts get one shared AI generation; paid plans include unlimited drafts.",
  },
  {
    id: "methodologies",
    question: "Which methodologies do you cover?",
    answer:
      "Traditional, Agile, PMP/PMI, and general practice — from 101 Beginner through Intermediate, Advanced, and PMO level.",
  },
]

export function faqsToJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
