import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { LevelShowcase } from "@/components/home/level-showcase"
import { ToolTeaser } from "@/components/home/tool-teaser"

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <LevelShowcase />
      <ToolTeaser />
    </>
  )
}
