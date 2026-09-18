import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, X, Zap, BookOpen, Wrench, Trophy, Star, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Pricing | WebDevPath",
  description: "Choose the plan that fits your learning goals. Start free, upgrade when you're ready to accelerate your web development career.",
}

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Start your web development journey with no commitment.",
    cta: "Get Started Free",
    ctaHref: "/register",
    highlight: false,
    badge: null,
    features: [
      { text: "Access to 20+ beginner lessons", included: true },
      { text: "HTML & CSS fundamentals", included: true },
      { text: "Interactive code editor", included: true },
      { text: "Community forum access", included: true },
      { text: "Progress tracking", included: true },
      { text: "JavaScript & React courses", included: false },
      { text: "Project-based learning paths", included: false },
      { text: "Certificate of completion", included: false },
      { text: "1-on-1 mentor sessions", included: false },
      { text: "Job placement support", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "Everything you need to go from beginner to job-ready developer.",
    cta: "Start Pro — 7 Days Free",
    ctaHref: "/register?plan=pro",
    highlight: true,
    badge: "Most Popular",
    features: [
      { text: "Everything in Free", included: true },
      { text: "Full JavaScript & React courses", included: true },
      { text: "50+ project-based challenges", included: true },
      { text: "Certificate of completion", included: true },
      { text: "Offline lesson downloads", included: true },
      { text: "Priority community support", included: true },
      { text: "Monthly live Q&A sessions", included: true },
      { text: "1-on-1 mentor sessions", included: false },
      { text: "Job placement support", included: false },
      { text: "Resume & portfolio review", included: false },
    ],
  },
  {
    name: "Career",
    price: "$49",
    period: "per month",
    description: "Accelerate your career with mentorship and job placement support.",
    cta: "Start Career — 7 Days Free",
    ctaHref: "/register?plan=career",
    highlight: false,
    badge: "Best Value",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "4 x 1-on-1 mentor sessions/month", included: true },
      { text: "Job placement support", included: true },
      { text: "Resume & portfolio review", included: true },
      { text: "LinkedIn profile optimization", included: true },
      { text: "Mock technical interviews", included: true },
      { text: "Direct recruiter introductions", included: true },
      { text: "Salary negotiation coaching", included: true },
      { text: "Lifetime course access", included: true },
      { text: "Private Slack community", included: true },
    ],
  },
]

const faqs = [
  {
    q: "Can I really start for free?",
    a: "Yes — no credit card required. Our Free plan gives you access to 20+ beginner lessons covering HTML and CSS fundamentals. Upgrade only when you're ready to go deeper.",
  },
  {
    q: "What happens after my 7-day free trial?",
    a: "After your trial ends, you'll be charged the monthly rate for your chosen plan. You can cancel anytime before the trial ends and you won't be charged a thing.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your account settings. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "How long does it take to become job-ready?",
    a: "Most Pro students complete the core curriculum in 4–6 months studying part-time. Career plan students with mentorship support typically land their first role within 6–9 months.",
  },
  {
    q: "Do you offer student or team discounts?",
    a: "Yes! We offer 30% off for verified students and volume pricing for teams of 5 or more. Contact us at hello@webdevpath.co for details.",
  },
]

const stats = [
  { icon: Users, value: "12,000+", label: "Active learners" },
  { icon: Trophy, value: "78%", label: "Job placement rate" },
  { icon: Clock, value: "4–6 mo", label: "Avg. time to job-ready" },
  { icon: Star, value: "4.9 / 5", label: "Average rating" },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Transparent Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Invest in your future,{" "}
            <span className="text-primary">not your debt</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Start completely free. Upgrade when you're ready to accelerate. Every paid plan includes a{" "}
            <strong>7-day free trial</strong> — no credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-green-500" /> No credit card to start</span>
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-green-500" /> Cancel anytime</span>
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-green-500" /> 30-day money-back guarantee</span>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y bg-muted/40 py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label}>
              <Icon className="h-5 w-5 mx-auto mb-1 text-primary" />
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative flex flex-col p-8 ${
                tier.highlight
                  ? "border-primary shadow-lg shadow-primary/10 ring-2 ring-primary"
                  : ""
              }`}
            >
              {tier.badge && (
                <Badge
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 ${
                    tier.highlight ? "bg-primary text-primary-foreground" : ""
                  }`}
                  variant={tier.highlight ? "default" : "secondary"}
                >
                  {tier.badge}
                </Badge>
              )}

              <div className="mb-6">
                <h2 className="text-xl font-bold mb-1">{tier.name}</h2>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                  <span className="text-muted-foreground mb-1">/{tier.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <Button
                asChild
                className="w-full mb-8"
                variant={tier.highlight ? "default" : "outline"}
                size="lg"
              >
                <Link href={tier.ctaHref}>
                  {tier.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <ul className="space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3 text-sm">
                    {feature.included ? (
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground/40 mt-0.5 shrink-0" />
                    )}
                    <span className={feature.included ? "" : "text-muted-foreground/50"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* ROI section */}
      <section className="py-20 px-4 bg-muted/40 border-y">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">The math is simple</h2>
            <p className="text-muted-foreground">
              Compare the cost of learning here vs. traditional alternatives.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-3 text-muted-foreground" />
              <h3 className="font-semibold mb-1">Coding Bootcamp</h3>
              <p className="text-3xl font-bold text-destructive mb-2">$15,000+</p>
              <p className="text-sm text-muted-foreground">Average cost, 3–6 months full-time, often requires quitting your job.</p>
            </Card>
            <Card className="p-6 text-center border-primary ring-2 ring-primary">
              <Zap className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-1">WebDevPath Career Plan</h3>
              <p className="text-3xl font-bold text-primary mb-2">~$300</p>
              <p className="text-sm text-muted-foreground">6 months at $49/mo. Learn at your own pace, keep your current job.</p>
            </Card>
            <Card className="p-6 text-center">
              <Wrench className="h-8 w-8 mx-auto mb-3 text-muted-foreground" />
              <h3 className="font-semibold mb-1">CS Degree</h3>
              <p className="text-3xl font-bold text-destructive mb-2">$40,000+</p>
              <p className="text-sm text-muted-foreground">4-year commitment. Valuable, but not required for most web dev roles.</p>
            </Card>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            The average starting salary for a junior web developer is{" "}
            <strong className="text-foreground">$65,000–$85,000/year</strong>. Your investment pays back in the first month.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <blockquote className="text-xl font-medium mb-6">
            &ldquo;I went from zero coding knowledge to landing a $72k junior developer role in 7 months.
            The Career plan&apos;s mock interviews and recruiter introductions were the difference-maker.
            Best $343 I&apos;ve ever spent.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
              MR
            </div>
            <div className="text-left">
              <p className="font-semibold text-sm">Marcus R.</p>
              <p className="text-xs text-muted-foreground">Junior Frontend Developer @ Stripe</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-muted/40 border-t">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-8">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <h3 className="font-semibold mb-2">{q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact our team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to start building?</h2>
          <p className="text-muted-foreground mb-8">
            Join 12,000+ developers who chose a smarter path to their first tech job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/register">
                Start for free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/courses">Browse courses first</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
