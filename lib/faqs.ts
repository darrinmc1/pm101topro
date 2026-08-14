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
      "Two free generations are included with the same meter as AI documents. After that, Status Cleaner is part of $19/mo Pro. Checkout is coming — we are not charging cards yet.",
  },
]

export const SITE_FAQS: FaqItem[] = [
  ...STATUS_FAQS,
  {
    id: "free-courses",
    question: "Are the courses really free?",
    answer:
      "Yes. All four course levels stay free. The paid SKU is $19/mo Pro, and it is for AI documents after two free generations — not for the course library.",
  },
  {
    id: "ai-docs",
    question: "How do the AI document tools work?",
    answer:
      "Pick a document type (charter, risk register, RACI, status report, and more), answer a short questionnaire, and get an editable markdown draft. Everyone gets two free AI generations. After that, unlimited drafts are $19/mo Pro. Checkout coming.",
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
