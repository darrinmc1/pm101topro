import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { LessonBody } from "@/lib/lesson-body"
import { getDocType } from "@/lib/documents"
import { Button } from "@/components/ui/button"

export function LessonContent({ body }: { body: LessonBody }) {
  const practiceDoc = body.practiceDocId ? getDocType(body.practiceDocId) : undefined

  return (
    <article className="prose-invert max-w-none">
      <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{body.intro}</p>

      {body.sections.map((section) => (
        <section key={section.id} id={section.id} className="mt-10 scroll-mt-24">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">{section.title}</h2>
          <div className="mt-3 space-y-4">
            {section.body.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-muted-foreground text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}

      {practiceDoc && (
        <div className="mt-12 rounded-xl border border-accent/30 bg-accent/5 p-6">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">Practice this</p>
          <h3 className="mt-2 text-lg font-semibold text-foreground">{practiceDoc.name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Turn theory into a real deliverable. Generate a {practiceDoc.name.toLowerCase()} with the AI tool and adapt
            it to your own project.
          </p>
          <Button asChild className="mt-4">
            <Link href={`/tools/${practiceDoc.id}`}>
              Open the generator
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      )}
    </article>
  )
}
