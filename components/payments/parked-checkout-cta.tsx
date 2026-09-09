"use client"

import type { ReactNode } from "react"
import { PAYMENTS_ENABLED } from "@/lib/payments"
import { ProWaitlistForm } from "@/components/payments/pro-waitlist-form"

/**
 * Gate for parked Stripe/Buy controls.
 * Waitlist now. Pass the existing checkout control as `checkout` — do not delete it.
 */
export function ParkedCheckoutCta({
  checkout,
  waitlistLabel,
  className,
}: {
  checkout: ReactNode
  waitlistLabel?: string
  className?: string
}) {
  if (PAYMENTS_ENABLED) return <>{checkout}</>
  return <ProWaitlistForm label={waitlistLabel} className={className} />
}
