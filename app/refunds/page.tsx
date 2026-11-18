import type { Metadata } from "next"
import Link from "next/link"
import {
  CONTACT_EMAIL,
  INTRO_PRICE_TERMS,
  REFUND_POLICY,
  SELLER_NAME,
} from "@/lib/legal"

export const metadata: Metadata = {
  title: "Refunds – pm101toPro",
  description: "Refunds for PM101toPro. Sold by TTPN Pty Ltd. 3-day refund. Cancel anytime.",
}

export default function RefundsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Legal</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Refunds</h1>
          <p className="text-lg text-slate-600">Sold by {SELLER_NAME}.</p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <p className="text-lg leading-relaxed text-slate-700">{REFUND_POLICY}</p>
        <p className="mt-6 leading-relaxed text-slate-700">{INTRO_PRICE_TERMS}</p>
        <p className="mt-6 leading-relaxed text-slate-700">
          Email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 underline">
            {CONTACT_EMAIL}
          </a>{" "}
          to ask for a refund. The same rules are in the{" "}
          <Link href="/terms" className="text-blue-600 underline">
            terms
          </Link>
          . Prices are on the{" "}
          <Link href="/pricing" className="text-blue-600 underline">
            pricing page
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
