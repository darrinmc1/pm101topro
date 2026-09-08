import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { LevelShowcase } from "@/components/home/level-showcase"
import { ToolTeaser } from "@/components/home/tool-teaser"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export const metadata: Metadata = {
  title: "pm101toPro – Project Management Training from Beginner to Pro",
  description:
    "Structured project management courses covering PMP, Agile, Scrum and PMO — plus AI-powered tools to build real deliverables faster.",
}

const TESTIMONIALS = [
  {
    name: "Sarah K.",
    role: "Senior PM, FinTech",
    quote:
      "I went from zero PM experience to leading a cross-functional team in under six months. The structured level path made all the difference — I always knew exactly what to learn next.",
    metric: "Promoted within 5 months",
  },
  {
    name: "James O.",
    role: "Scrum Master, Healthcare",
    quote:
      "The Agile and Scrum modules are the most practical I've found anywhere. Real templates, real scenarios. I passed my PSM I on the first attempt after completing the track.",
    metric: "Passed PSM I first attempt",
  },
  {
    name: "Priya M.",
    role: "PMO Analyst → PMO Lead",
    quote:
      "The AI document tools alone saved me hours every week. Combined with the PMO governance courses, I had everything I needed to step into a leadership role with confidence.",
    metric: "40% salary increase after promotion",
  },
  {
    name: "Tom R.",
    role: "IT Project Manager",
    quote:
      "I'd tried other PM courses but they were all theory and no practice. pm101toPro gives you actual deliverables to build as you learn — my portfolio got me hired within two months.",
    metric: "New role secured in 8 weeks",
  },
]

const STATS = [
  { value: "5,000+", label: "Students trained" },
  { value: "92%", label: "Course completion rate" },
  { value: "40%", label: "Average salary increase" },
  { value: "4.8 / 5", label: "Average student rating" },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <LevelShowcase />

      {/* Social proof stats */}
      <section className="border-t border-border bg-surface">
        <div className="container py-14">
          <p className="text-center text-sm font-medium uppercase tracking-widest text-accent">
            Trusted by project managers worldwide
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
                <span className="text-3xl font-extrabold tracking-tight text-foreground">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border">
        <div className="container py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Student success stories
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tightest text-foreground text-balance">
            Real results from real project managers
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t) => (
              <Card
                key={t.name}
                className="flex flex-col gap-4 border-border bg-surface p-6"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                  <p className="mt-2 inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                    {t.metric}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ToolTeaser />
    </>
  )
}
