import { cn } from "@/lib/utils"
import { LEVEL_ORDER, LEVEL_LABEL, type Level } from "@/lib/content"

const NODES: { level: Level; short: string }[] = [
  { level: "pmo", short: "Pro" },
  { level: "advanced", short: "Adv" },
  { level: "intermediate", short: "Int" },
  { level: "101", short: "101" },
]

export function LevelRail({
  completionPercent,
  currentLevel,
  className,
}: {
  completionPercent: number
  currentLevel: Level
  className?: string
}) {
  const pct = Math.max(0, Math.min(100, completionPercent))

  return (
    <div className={cn("flex gap-3", className)} aria-hidden="true">
      <div className="relative flex w-6 flex-col items-center">
        {/* track */}
        <div className="absolute inset-y-2 w-[3px] rounded-full bg-surface-raised" />
        {/* fill grows from bottom */}
        <div
          className="absolute bottom-2 w-[3px] rounded-full bg-gradient-to-t from-accent-secondary to-accent shadow-blue-glow transition-all"
          style={{ height: `calc(${pct}% - 1rem)` }}
        />
        {/* nodes */}
        <div className="relative flex h-full flex-col justify-between py-1">
          {NODES.map((node) => {
            const nodeIndex = LEVEL_ORDER.indexOf(node.level)
            const currentIndex = LEVEL_ORDER.indexOf(currentLevel)
            const reached = nodeIndex <= currentIndex
            const isCurrent = node.level === currentLevel
            return (
              <span
                key={node.level}
                className={cn(
                  "h-3 w-3 rounded-full border-2 transition-colors",
                  reached
                    ? "border-accent bg-accent"
                    : "border-surface-raised bg-background",
                  isCurrent && "animate-pulse-node",
                )}
              />
            )
          })}
        </div>
      </div>

      <div className="flex flex-col justify-between py-0.5 text-[11px] font-medium">
        {NODES.map((node) => (
          <span
            key={node.level}
            className={cn(
              node.level === currentLevel
                ? "text-foreground"
                : "text-muted-foreground",
            )}
          >
            {LEVEL_LABEL[node.level].split(" ")[0]}
          </span>
        ))}
      </div>
    </div>
  )
}
