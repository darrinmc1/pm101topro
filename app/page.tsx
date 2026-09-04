import { Hero } from "@/components/home/hero"
import { PathRail } from "@/components/home/path-rail"
import { WhatYouGet } from "@/components/home/what-you-get"
import { LevelShowcase } from "@/components/home/level-showcase"
import { ProSku } from "@/components/home/pro-sku"
import { ToolTeaser } from "@/components/home/tool-teaser"
import { PmWisdom } from "@/components/pm-wisdom"

export default function HomePage() {
  return (
    <>
      <Hero />
      <PathRail />
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
