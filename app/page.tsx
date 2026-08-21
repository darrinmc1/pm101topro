import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { LevelShowcase } from "@/components/home/level-showcase"
import { ToolTeaser } from "@/components/home/tool-teaser"
import { PmWisdom } from "@/components/pm-wisdom"

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <LevelShowcase />
      <ToolTeaser />
      <section className="border-b border-border py-12">
        <div className="container max-w-xl">
          <PmWisdom />
        </div>
      </section>
    </>
  )
}
