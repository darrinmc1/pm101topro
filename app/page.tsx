import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Hero } from "components/home/hero";
import { HowItWorks } from "components/home/how-it-works";
import { LevelShowcase } from "components/home/level-showcase";
import { ToolTeaser } from "components/home/tool-teaser";
import { Testimonials } from "components/home/testimonials";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <LevelShowcase />
      <ToolTeaser />
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Users Say</h2>
          <Testimonials />
        </div>
      </section>
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Level Up Your PM Skills?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of project managers who are transforming their careers.
          </p>
          <Link href="/sign-up">
            <Button size="lg">Get Started for Free</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
