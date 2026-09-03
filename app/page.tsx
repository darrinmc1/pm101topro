import { Hero } from "@/components/home/hero"
import { LevelShowcase } from "@/components/home/level-showcase"
import { ProSku } from "@/components/home/pro-sku"
import { ToolTeaser } from "@/components/home/tool-teaser"
import { PmWisdom } from "@/components/pm-wisdom"

export default function HomePage() {
  return (
    <>
      <Hero />
      <LevelShowcase />
      <ToolTeaser />
      <ProSku />
      <section className="border-b border-border py-12">
        <div className="container max-w-xl">
          <PmWisdom />
        </div>
      </section>
    </>
  )
}
