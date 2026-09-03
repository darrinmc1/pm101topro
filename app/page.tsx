import { Newsreader, IBM_Plex_Mono } from "next/font/google"
import { Hero } from "@/components/home/hero"
import { LevelShowcase } from "@/components/home/level-showcase"
import { ProSku } from "@/components/home/pro-sku"
import { ToolTeaser } from "@/components/home/tool-teaser"
import { PmWisdom } from "@/components/pm-wisdom"

const kickoffSerif = Newsreader({
  subsets: ["latin"],
  variable: "--font-kickoff-serif",
  display: "swap",
})

const kickoffMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-kickoff-mono",
  display: "swap",
})

export default function HomePage() {
  return (
    <div className={`${kickoffSerif.variable} ${kickoffMono.variable}`}>
      <Hero />
      <LevelShowcase />
      <ToolTeaser />
      <ProSku />
      <section className="border-b border-border py-12">
        <div className="container max-w-xl">
          <PmWisdom />
        </div>
      </section>
    </div>
  )
}
