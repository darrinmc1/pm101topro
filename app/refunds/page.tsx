import type { Metadata } from "next"
import Link from "next/link"
import { REFUND_POLICY } from "@/lib/refund-policy"

export const metadata: Metadata = {
  title: "Refunds",
  description: REFUND_POLICY,
  robots: { index: false, follow: false },
}

export default function RefundsPage() {
  return (
    <section className="container max-w-2xl py-24">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">Refunds</h1>
      <p className="mt-4 leading-relaxed text-muted-foreground">{REFUND_POLICY}</p>
      <p className="mt-4 text-sm text-muted-foreground">
        Plans are on the <Link href="/pricing" className="text-foreground underline-offset-4 hover:underline">pricing page</Link>.
        To request a refund, use the{" "}
        <Link href="/contact" className="text-foreground underline-offset-4 hover:underline">contact form</Link>.
      </p>
    </section>
  )
}
