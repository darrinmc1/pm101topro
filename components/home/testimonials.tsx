import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Sarah K.",
    role: "Junior PM, Tech Startup",
    avatar: "SK",
    stars: 5,
    quote:
      "I went from zero PM experience to confidently running sprints in 6 weeks. The structured path from 101 to Pro is exactly what I needed — no fluff, just real skills.",
  },
  {
    name: "Marcus T.",
    role: "Operations Manager → PM",
    avatar: "MT",
    stars: 5,
    quote:
      "The AI document tools alone are worth it. I generated a full project charter in minutes that my stakeholders actually approved first time. Saved me hours of back-and-forth.",
  },
  {
    name: "Priya R.",
    role: "PMP Candidate",
    avatar: "PR",
    stars: 5,
    quote:
      "Finally a platform that covers traditional AND Agile without making you pick a side. The level rail keeps me motivated and I always know what to study next.",
  },
  {
    name: "James O.",
    role: "Team Lead, Construction",
    avatar: "JO",
    stars: 5,
    quote:
      "I manage projects in a non-tech industry and was worried this wouldn't apply to me. Every lesson connected directly to my real work. Highly recommend.",
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
          From first-time project leads to seasoned managers preparing for certification — here's what our community says.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className="flex flex-col gap-4 border-border bg-background p-6">
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-border pt-10">
          <p className="text-sm font-medium text-muted-foreground">Learners from teams at</p>
          {["Accenture", "NHS", "Deloitte", "Capgemini", "KPMG", "Vodafone"].map((logo) => (
            <span
              key={logo}
              className="text-sm font-bold tracking-wide text-muted-foreground/50 uppercase"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
