import { HeroLessonStill } from "@/components/home/hero-lesson-still"

export function CharterLessonStillFrame({
  caption = "Lesson · Your first project charter",
  tall = false,
}: {
  caption?: string
  tall?: boolean
}) {
  return (
    <figure
      id="charter-lesson-still"
      className="overflow-hidden rounded-xl border border-border bg-surface shadow-blue-glow"
    >
      <figcaption className="border-b border-border px-4 py-2 text-xs text-muted-foreground">
        {caption}
      </figcaption>
      <div className={`relative overflow-hidden ${tall ? "h-64 sm:h-72" : "h-52 sm:h-60"}`}>
        <div className="kickoff-pan origin-top-left">
          <HeroLessonStill />
        </div>
      </div>
    </figure>
  )
}
