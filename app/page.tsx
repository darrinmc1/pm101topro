import { Hero } from "@/components/home/hero"
import { PathRail } from "@/components/home/path-rail"
import { WhatYouGet } from "@/components/home/what-you-get"
import { LevelShowcase } from "@/components/home/level-showcase"
import { ProSku } from "@/components/home/pro-sku"
import { ToolTeaser } from "@/components/home/tool-teaser"
import HumorBreak from "@/components/humor-break"
import { PmWisdom } from "@/components/pm-wisdom"

export default function HomePage() {
  return (
    <>
      <Hero />
      <PathRail />
      <section className="border-b border-border">
        <div className="container max-w-xl">
          <HumorBreak tag="general" />
        </div>
      </section>
      <WhatYouGet />
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
