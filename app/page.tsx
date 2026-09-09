import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { LevelShowcase } from "@/components/home/level-showcase"
import { ToolTeaser } from "@/components/home/tool-teaser"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <LevelShowcase />

      {/* Mid-page conversion banner */}
      <section className="border-y border-border bg-accent/5">
        <div className="container py-14 text-center">
          <h2 className="text-2xl font-extrabold tracking-tightest text-foreground sm:text-3xl">
            Ready to level up your PM career?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-pretty">
            Join learners building real project management skills — from Agile sprints to PMP certification prep.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="w-full sm:w-auto gap-2">
              <Link href="/sign-up">
                Start for Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <ToolTeaser />

      {/* Bottom CTA */}
      <section className="border-t border-border bg-background">
        <div className="container py-16 text-center">
          <h2 className="text-2xl font-extrabold tracking-tightest text-foreground sm:text-3xl">
            Your next project starts here
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto text-pretty">
            Explore every course, use the AI tools, and track your progress from 101 to Pro.
          </p>
          <Button asChild size="lg" className="mt-6 gap-2">
            <Link href="/courses">
              Explore All Courses
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden border-t border-border bg-background/95 backdrop-blur-sm px-4 py-3 gap-3">
        <Button asChild size="sm" className="flex-1 gap-1">
          <Link href="/sign-up">
            Get Started Free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild size="sm" variant="outline" className="flex-1">
          <Link href="/courses">Browse Courses</Link>
        </Button>
      </div>
    </>
  )
}
