import { LEGAL_EXAMPLE_NOTICE } from "@/lib/legal-notice"
import { cn } from "@/lib/utils"

export function LegalExampleNotice({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs leading-relaxed text-muted-foreground", className)}>
      {LEGAL_EXAMPLE_NOTICE}
    </p>
  )
}
