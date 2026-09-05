"use client"

import Link from "next/link"
import { Reveal } from "@/components/home/reveal"

const CARDS = [
  {
    kicker: "01",
    title: "Written lessons. Counted honestly.",
    body: "Twenty-five lessons are written. The rest of the catalog is still blank — we will not sell you a number we have not written.",
    href: "/courses",
    cta: "Browse topics",
  },
  {
    kicker: "02",
    title: "Traditional and Agile on one path.",
    body: "Same site, two ways of running work. Pick the method your sponsor already uses. No methodology cosplay.",
    href: "/courses",
    cta: "See the paths",
  },
  {
    kicker: "03",
    title: "Already have the date? Start there.",
    body: "If they handed you a project and no plan, week-one kickoff is a path page — not the site identity.",
    href: "/start",
    cta: "Given a project — don’t know where to start",
  },
] as const

export function WhatYouGet() {
  return (
    <section className="border-b border-border bg-background">
      <div className="container py-16 md:py-20">
        <Reveal>
          <p className="text-sm font-medium text-accent-secondary">What you get</p>
          <h2 className="mt-2 max-w-xl text-3xl font-bold tracking-tightest text-foreground">
            A training product, not a slogan stack.
          </h2>
        </Reveal>
      </div>

      <div className="stack-pin pb-8 md:pb-16">
        {CARDS.map((card, index) => (
          <div key={card.kicker} className="stack-slot">
          <article
            className="stack-card mx-auto w-full max-w-3xl px-6"
            style={{ top: `calc(5.5rem + ${index * 0.75}rem)`, zIndex: index + 1 }}
          >
            <div className="rounded-xl border border-border bg-surface p-6 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)] md:p-8">
              <p className="text-xs tabular-nums text-accent-secondary">{card.kicker}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                {card.title}
              </h3>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground md:text-base">
                {card.body}
              </p>
              <Link
                href={card.href}
                className="mt-5 inline-flex text-sm font-medium text-accent hover:text-accent-secondary"
              >
                {card.cta}
              </Link>
            </div>
          </article>
          </div>
        ))}
      </div>
    </section>
  )
}
