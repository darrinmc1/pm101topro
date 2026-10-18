import { PRO_PRICE_LABEL } from "@/lib/pricing"

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
    answer: `Two free generations are included. After that, Status Cleaner is part of ${PRO_PRICE_LABEL}.`,
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
