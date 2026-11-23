import type { Metadata } from "next"
import Link from "next/link"
import { CreateAccountLink } from "@/components/create-account-link"
import { INTRO_PRICE_TERMS, REFUND_POLICY, SELLER_NAME } from "@/lib/legal"
import { FREE_ITEMS, PACKS, PLAN } from "@/lib/pricing"

export const metadata: Metadata = {
  title: "Pricing – pm101toPro",
  description:
    "PM101 plan is A$9/month inc GST, with a limited-time A$5 first month when you create a free account. Template packs are one-off. No checkout on this page.",
}

const ctaClass =
  "inline-flex items-center justify-center rounded-lg bg-accent-action px-4 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-glow"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border bg-surface py-16">
        <div className="container">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            One price map
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            A$9 a month. The first month is A$5 if you make a free account.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Prices are in Australian dollars and include GST. Sold by {SELLER_NAME}. This page does not take a card.
          </p>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-bold">Free</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Three things stay free. They are labelled free. The rest of the library is the plan, not a lifetime pass.
        </p>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {FREE_ITEMS.map((item) => (
            <li key={item.id} className="rounded-xl border border-success/30 bg-surface p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-success">Free</p>
              <h3 className="mt-2 text-xl font-bold">
                <Link href={item.href} className="hover:underline">
                  {item.name}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-xl border border-accent/40 bg-surface p-6 md:p-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent">Plan</p>
          <h2 className="mt-2 text-3xl font-bold">
            {PLAN.name} · {PLAN.priceLabel}{" "}
            <span className="text-lg font-medium text-muted-foreground">{PLAN.taxLabel}</span>
          </h2>
          <p className="mt-3 text-lg">
            {PLAN.introLabel}. {PLAN.introWho}
          </p>
          <p className="mt-2 text-muted-foreground">{PLAN.renewal}</p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            {PLAN.includes.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <CreateAccountLink className={`${ctaClass} mt-8`} />
        </div>

        <h2 className="mt-12 text-2xl font-bold">Template packs</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          One-off downloads. Not a subscription, and not part of the monthly plan. The Project Charter stays in the free list.
        </p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {PACKS.map((pack) => (
            <li key={pack.id} className="rounded-xl border border-border bg-surface p-6">
              <h3 className="text-xl font-bold">{pack.name}</h3>
              <p className="mt-1 text-lg">
                {pack.priceLabel} <span className="text-sm text-muted-foreground">{pack.taxLabel}</span>
              </p>
              <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                {pack.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <CreateAccountLink className={`${ctaClass} mt-6`} />
            </li>
          ))}
        </ul>

        <div className="mt-12 max-w-3xl space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>{INTRO_PRICE_TERMS}</p>
          <p>{REFUND_POLICY}</p>
          <p>
            Checkout is not open. There is no buy button. {SELLER_NAME} is the seller when a plan or pack is charged.
          </p>
        </div>
      </section>
    </div>
  )
}
