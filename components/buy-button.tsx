"use client"

import { useState } from "react"
import { LegalExampleNotice } from "@/components/legal-example-notice"
import { MerchantOfRecordDisclosure } from "@/components/merchant-of-record-disclosure"
import { NotifyForm } from "@/components/notify-form"
import { Button } from "@/components/ui/button"
import { CHECKOUT_OFFERS, offerIsPurchasable, type CheckoutSku } from "@/lib/offers"
import { REFUND_POLICY } from "@/lib/refund-policy"
import { getSupportEmail } from "@/lib/support-email"

/**
 * Buy stays a disabled "Coming soon: $…" control, and never calls
 * /api/checkout, unless NEXT_PUBLIC_STRIPE_ENABLED is "true" AND the offer's
 * available flag is true. The server flag STRIPE_ENABLED is a separate gate.
 */
export function BuyButton({
  sku,
  fullWidth = false,
  size = "lg",
}: {
  sku: CheckoutSku
  fullWidth?: boolean
  size?: "sm" | "default" | "lg"
}) {
  const offer = CHECKOUT_OFFERS[sku]
  const supportEmail = getSupportEmail()
  const onSale = offerIsPurchasable(offer)

  return (
    <div className={fullWidth ? "w-full" : "max-w-md"}>
      {onSale ? (
        <EnabledBuy sku={sku} fullWidth={fullWidth} size={size} label={`Buy — ${offer.priceLabel}`} />
      ) : (
        <Button type="button" disabled aria-disabled="true" size={size} className={fullWidth ? "w-full" : ""}>
          Coming soon: {offer.priceLabel}
        </Button>
      )}

      <MerchantOfRecordDisclosure compact className="mt-3" />
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{REFUND_POLICY}</p>
      {offer.legalNotice ? <LegalExampleNotice className="mt-2" /> : null}

      {supportEmail ? (
        <p className="mt-2 text-xs text-muted-foreground">
          Questions about a purchase?{" "}
          <a href={`mailto:${supportEmail}`} className="text-foreground underline-offset-4 hover:underline">
            {supportEmail}
          </a>
        </p>
      ) : null}

      {onSale ? null : (
        <div className="mt-4 rounded-xl border border-border bg-background/40 p-4 text-left">
          <p className="mb-1 text-sm font-semibold text-foreground">Notify me when checkout opens</p>
          <p className="mb-3 text-sm text-muted-foreground">
            Checkout is not open yet. Leave your email and we&apos;ll tell you when Pro can be purchased.
          </p>
          <NotifyForm source={`waitlist-${sku}`} />
        </div>
      )}
    </div>
  )
}

function EnabledBuy({
  sku,
  fullWidth,
  size,
  label,
}: {
  sku: CheckoutSku
  fullWidth: boolean
  size: "sm" | "default" | "lg"
  label: string
}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onBuy() {
    setError(null)
    setLoading(true)
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sku }),
      })
      if (res.status === 401) {
        const next = encodeURIComponent(window.location.pathname)
        window.location.href = `/sign-in?redirect_url=${next}`
        return
      }
      const data = (await res.json().catch(() => null)) as { url?: string; error?: string } | null
      if (res.ok && data?.url) {
        window.location.href = data.url
        return
      }
      setError(data?.error ?? "Checkout is not available right now.")
      setLoading(false)
    } catch {
      setError("Checkout is not available right now.")
      setLoading(false)
    }
  }

  return (
    <>
      <Button type="button" onClick={onBuy} disabled={loading} size={size} className={fullWidth ? "w-full" : ""}>
        {loading ? "Redirecting…" : label}
      </Button>
      {error ? <p className="mt-2 text-xs text-red-400">{error}</p> : null}
    </>
  )
}
