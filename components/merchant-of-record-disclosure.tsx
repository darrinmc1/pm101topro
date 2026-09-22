import { MERCHANT_OF_RECORD_DISCLOSURE } from "@/lib/merchant"
import { cn } from "@/lib/utils"

type MerchantOfRecordDisclosureProps = {
  className?: string
  /** Visually quieter variant for dense checkout/CTA clusters. */
  compact?: boolean
}

export function MerchantOfRecordDisclosure({
  className,
  compact = false,
}: MerchantOfRecordDisclosureProps) {
  return (
    <p
      className={cn(
        "text-muted-foreground",
        compact ? "text-[11px] leading-relaxed" : "text-xs leading-relaxed",
        className
      )}
    >
      {MERCHANT_OF_RECORD_DISCLOSURE}
    </p>
  )
}
