/**
 * 9 Sep cash-site payment gate.
 *
 * Default OFF: waitlist now. Parked Stripe/Buy markup stays in the tree —
 * do not delete it. Flip later with NEXT_PUBLIC_PAYMENTS_ENABLED=true
 * on Preview only (never Production) once checkout is wired.
 */
export const PAYMENTS_ENABLED =
  process.env.NEXT_PUBLIC_PAYMENTS_ENABLED === "true"

export const PRO_WAITLIST_SOURCE = "pro-waitlist" as const
