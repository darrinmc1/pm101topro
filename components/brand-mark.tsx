import { cn } from "@/lib/utils"

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <span
        className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-accent shadow-blue-glow"
        aria-hidden="true"
      >
        <span className="h-4 w-[3px] rounded-full bg-accent-foreground" />
        <span className="absolute bottom-1.5 h-1.5 w-1.5 rounded-full bg-accent-secondary" />
        <span className="absolute top-1.5 h-1.5 w-1.5 rounded-full bg-accent-foreground" />
      </span>
      <span className="text-lg font-extrabold tracking-tightest text-foreground">
        pm101<span className="text-accent">toPro</span>
      </span>
    </span>
  )
}
