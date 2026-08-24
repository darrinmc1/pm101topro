import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { LevelShowcase } from "@/components/home/level-showcase"
import { ToolTeaser } from "@/components/home/tool-teaser"

export const metadata: Metadata = {
  title: "pm101toPro – Project Management Training",
  description:
    "Practical project management training covering PMP, Agile, Scrum, and PMO — from your first project to running the room.",
}

export default function HomePage() {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "pm101toPro",
    url: "https://www.pm101topro.com",
    description:
      "Practical project management training covering PMP, Agile, Scrum, and PMO — from your first project to running the room.",
    offers: [
      {
        "@type": "Offer",
        name: "Free Project Management Courses",
        price: "0",
        priceCurrency: "USD",
        url: "https://www.pm101topro.com/courses",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <Hero />
      <HowItWorks />
      <LevelShowcase />
      <ToolTeaser />
    </>
  )
}
