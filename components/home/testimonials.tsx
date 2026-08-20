import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    quote:
      "I went from zero PM experience to confidently running a cross-functional product launch in under three months. The structured path made all the difference.",
    name: "Sarah K.",
    role: "Associate Product Manager",
    initials: "SK",
  },
  {
    quote:
      "The AI document tools alone are worth it. I generated a full project charter in minutes that my director called 'the most polished one she'd seen from a junior PM'.",
    name: "Marcus T.",
    role: "Junior Project Manager",
    initials: "MT",
  },
  {
    quote:
      "Finally a resource that covers Agile AND traditional PM without making you feel like you have to pick a side. Real-world practical, not exam-prep fluff.",
    name: "Priya R.",
    role: "Scrum Master turned PM",
    initials: "PR",
  },
]

export function Testimonials() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="container py-16">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">What learners say</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tightest text-foreground text-balance">
          Trusted by PMs at every stage
        </h2>
        <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          From first-time project leads to seasoned managers levelling up — here's what our community has to say.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className="flex flex-col border-border bg-background p-6">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-border pt-10">
          <p className="w-full text-center text-sm font-medium text-muted-foreground">Joined by learners from teams at</p>
          <span className="text-sm font-semibold text-foreground/50 tracking-wide uppercase">Startups</span>
          <span className="text-muted-foreground">&bull;</span>
          <span className="text-sm font-semibold text-foreground/50 tracking-wide uppercase">Agencies</span>
          <span className="text-muted-foreground">&bull;</span>
          <span className="text-sm font-semibold text-foreground/50 tracking-wide uppercase">Enterprises</span>
          <span className="text-muted-foreground">&bull;</span>
          <span className="text-sm font-semibold text-foreground/50 tracking-wide uppercase">Non-profits</span>
          <span className="text-muted-foreground">&bull;</span>
          <span className="text-sm font-semibold text-foreground/50 tracking-wide uppercase">Government</span>
        </div>
      </div>
    </section>
  )
}
