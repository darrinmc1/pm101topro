import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { LevelShowcase } from "@/components/home/level-showcase"
import { ToolTeaser } from "@/components/home/tool-teaser"

export const metadata: Metadata = {
  title: "pm101toPro – Project Management Courses & Training",
  description:
    "Practical project management courses covering PMP, Agile, Scrum, and PMO. Go from your first project to running the room.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What project management courses does pm101toPro offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "pm101toPro offers practical project management courses covering PMP certification preparation, Agile methodologies, Scrum frameworks, and PMO governance — from beginner to advanced levels.",
      },
    },
    {
      "@type": "Question",
      name: "Are the project management courses free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "pm101toPro offers both free and premium courses. Many introductory lessons are free to access, with a paid plan unlocking the full course library and AI-powered document tools.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need prior experience to start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No prior experience is needed. pm101toPro is designed to take you from your very first project all the way to running a PMO, with a clear level progression that shows exactly where you are.",
      },
    },
    {
      "@type": "Question",
      name: "Does pm101toPro help with PMP certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. pm101toPro includes PMBOK-aligned courses specifically designed to build the knowledge base required for PMP certification, alongside practical project management skills.",
      },
    },
    {
      "@type": "Question",
      name: "What is the AI document tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AI document tool lets you generate professional project management documents — such as project charters, risk registers, and stakeholder plans — in minutes, based on what you've learned in the courses.",
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Hero />
      <HowItWorks />
      <LevelShowcase />
      <ToolTeaser />
    </>
  )
}
