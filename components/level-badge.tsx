import { Badge } from "@/components/ui/badge"
import { LEVEL_LABEL, type Level } from "@/lib/content"

const LEVEL_VARIANT: Record<Level, "secondary" | "warning" | "default" | "pmo"> = {
  "101": "secondary",
  intermediate: "warning",
  advanced: "default",
  pmo: "pmo",
}

export function LevelBadge({
  level,
  className,
}: {
  level: Level
  className?: string
}) {
  return (
    <Badge variant={LEVEL_VARIANT[level]} className={className}>
      {LEVEL_LABEL[level]}
    </Badge>
  )
}
