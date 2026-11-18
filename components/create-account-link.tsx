import Link from "next/link"
import { ACCOUNT_CTA_HREF, ACCOUNT_CTA_LABEL } from "@/lib/pricing"
import { cn } from "@/lib/utils"

export function CreateAccountLink({
  className,
}: {
  className?: string
}) {
  return (
    <Link href={ACCOUNT_CTA_HREF} className={cn(className)}>
      {ACCOUNT_CTA_LABEL}
    </Link>
  )
}
