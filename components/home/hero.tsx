import Link from "next/link"
import { ArrowRight, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="container py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
            From first project to running the room
          </p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tightest text-foreground text-balance sm:text-5xl md:text-6xl">
            Master Project Management — Step by Step
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty max-w-2xl mx-auto">
            Practical PMP, Agile, Scrum, and PMO training with AI-powered tools that turn your learning into real deliverables.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="w-full sm:w-auto gap-2 text-base px-8 py-6">
              <Link href="/courses">
                Browse Courses
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto gap-2 text-base px-8 py-6">
              <Link href="/tools">
                <PlayCircle className="h-5 w-5" />
                Try Free AI Tools
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            No credit card required &middot; Free courses available
          </p>
        </div>
      </div>
    </section>
  )
}
