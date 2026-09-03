import { Check, Circle, PlayCircle } from "lucide-react"

/**
 * Frozen still of the real lesson viewer — "Your first project charter".
 * Copy is the live lesson excerpt. Not a laptop frame, not generated B-roll.
 */
const SIDEBAR = [
  { title: "What is a project?", done: true, current: false },
  { title: "The PM lifecycle", done: true, current: false },
  { title: "Key roles", done: true, current: false },
  { title: "Your first project charter", done: false, current: true },
  { title: "Quiz", done: false, current: false },
] as const

export function HeroLessonStill() {
  return (
    <div
      className="hero-lesson-still min-w-[640px] bg-[#0A0F1E] text-[#E8EEF7]"
      aria-hidden="true"
    >
      <div className="grid grid-cols-[240px_1fr]">
        <aside className="border-r border-[#243049] bg-[#12192B] p-4">
          <p className="text-[11px] text-[#8B9BB4]">What is Project Management?</p>
          <p className="mt-2 text-[10px] uppercase tracking-wider text-[#7B93C9]">
            101 Beginner track
          </p>
          <p className="mt-1 text-xs font-medium">60% complete</p>
          <ol className="mt-4 space-y-1">
            {SIDEBAR.map((item) => (
              <li
                key={item.title}
                className={
                  item.current
                    ? "flex items-center gap-2 rounded-md bg-[#1B2A4A] px-2 py-1.5 text-xs"
                    : "flex items-center gap-2 px-2 py-1.5 text-xs text-[#8B9BB4]"
                }
              >
                {item.done ? (
                  <Check className="h-3.5 w-3.5 shrink-0 text-[#5B8DEF]" />
                ) : item.current ? (
                  <PlayCircle className="h-3.5 w-3.5 shrink-0 text-[#5B8DEF]" />
                ) : (
                  <Circle className="h-3.5 w-3.5 shrink-0 opacity-50" />
                )}
                <span className="truncate">{item.title}</span>
              </li>
            ))}
          </ol>
        </aside>

        <div className="p-6">
          <p className="text-xs text-[#8B9BB4]">Lesson 4 of 5 · 10 min</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight">
            Your first project charter
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#B7C3D6]">
            The project charter is the document that officially starts a project.
            It&apos;s short, it&apos;s authoritative, and it&apos;s the single most
            important thing you can create before spending a dollar or writing a
            plan. If you leave this lesson and do one thing, write a charter for
            your next project.
          </p>
          <p className="mt-6 text-sm font-semibold">What a charter actually does</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#B7C3D6]">
            A project charter does three things: it formally authorises the
            project, it appoints the project manager, and it captures the shared
            understanding between the sponsor and the PM before planning begins.
            Without it, teams regularly discover mid-project that different people
            had fundamentally different ideas about what was being built.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#B7C3D6]">
            The charter is not a detailed plan. It doesn&apos;t list every task or
            nail down every date. It&apos;s a one-to-two-page document that answers
            the big questions: why are we doing this, what does success look like,
            who has authority, and what are the known constraints?
          </p>
        </div>
      </div>
    </div>
  )
}
