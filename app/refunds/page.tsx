import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "pm101toPro",
  robots: { index: false, follow: false },
}

export default function RefundsPage() {
  return (
    <section className="container py-24">
      <h1 className="max-w-xl text-2xl font-bold tracking-tight text-foreground text-balance">
        All content is free while we finish setting up.
      </h1>
    </section>
  )
}
