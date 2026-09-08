import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for individuals getting started",
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "Community support",
      "1 GB storage",
    ],
    cta: "Get Started",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For professionals who need more power",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "50 GB storage",
      "Custom integrations",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
    href: "/signup?plan=pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "For teams and organizations at scale",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Dedicated support",
      "SSO & advanced security",
      "Custom contracts",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    href: "/contact",
    highlighted: false,
  },
]

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-24 text-center bg-gradient-to-b from-background to-muted">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl max-w-3xl">
          Build faster, ship smarter
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          The all-in-one platform that helps teams collaborate, automate, and deliver results — from prototype to production.
        </p>
        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <Button asChild size="lg">
            <Link href="/signup">
              Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/demo">See a Demo</Link>
          </Button>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="px-4 py-20 bg-background" id="pricing">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Simple, transparent pricing</h2>
            <p className="mt-3 text-muted-foreground text-lg">
              Start free. Upgrade when you need more. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`flex flex-col ${
                  tier.highlighted
                    ? "border-primary shadow-lg ring-2 ring-primary"
                    : "border-border"
                }`}
              >
                <CardHeader>
                  {tier.highlighted && (
                    <div className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                      Most Popular
                    </div>
                  )}
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground ml-1 text-sm">/{tier.period}</span>
                  </div>
                  <CardDescription className="mt-2">{tier.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    asChild
                    className="w-full"
                    variant={tier.highlighted ? "default" : "outline"}
                  >
                    <Link href={tier.href}>{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/pricing"
              className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
            >
              View full pricing details and feature comparison &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-4 py-16 bg-muted text-center">
        <h2 className="text-2xl font-bold">Ready to get started?</h2>
        <p className="mt-3 text-muted-foreground">Join thousands of teams already using our platform.</p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/signup">
            Create your free account <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </main>
  )
}
