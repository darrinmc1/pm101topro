import { Check, X, Zap, BookOpen, Briefcase } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Free",
    icon: BookOpen,
    price: 0,
    period: null,
    description: "Perfect for exploring PM fundamentals and getting a feel for the platform.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    features: [
      { text: "Access to 3 beginner courses", included: true },
      { text: "PM Glossary & quick-reference tools", included: true },
      { text: "Community blog & articles", included: true },
      { text: "1 AI-powered document draft per month", included: true },
      { text: "Downloadable templates (basic set)", included: true },
      { text: "Intermediate & advanced courses", included: false },
      { text: "Unlimited AI document generation", included: false },
      { text: "Full template library (50+ templates)", included: false },
      { text: "Progress tracking & certificates", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Pro",
    icon: Zap,
    price: 19,
    period: "month",
    description: "Everything you need to level up fast — from IC to senior PM.",
    cta: "Start 7-Day Free Trial",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most Popular",
    features: [
      { text: "All Free features", included: true },
      { text: "Full course library (30+ courses)", included: true },
      { text: "Unlimited AI document generation", included: true },
      { text: "Full template library (50+ templates)", included: true },
      { text: "Progress tracking & certificates", included: true },
      { text: "Downloadable resources & cheat sheets", included: true },
      { text: "New courses added monthly", included: true },
      { text: "Email support (48-hr response)", included: true },
      { text: "1-on-1 coaching sessions", included: false },
      { text: "Team seats & admin dashboard", included: false },
    ],
  },
  {
    name: "Teams",
    icon: Briefcase,
    price: 49,
    period: "month",
    description: "Upskill your entire PM team with shared access, reporting, and coaching.",
    cta: "Contact Us",
    ctaHref: "mailto:hello@pm101topro.com?subject=Teams%20Plan%20Inquiry",
    highlight: false,
    badge: "Up to 5 seats",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Up to 5 team seats", included: true },
      { text: "Team admin dashboard & progress reports", included: true },
      { text: "Centralised billing", included: true },
      { text: "Priority support (24-hr response)", included: true },
      { text: "Monthly group Q&A with a senior PM", included: true },
      { text: "Custom onboarding session", included: true },
      { text: "1-on-1 coaching sessions (2/seat/mo)", included: true },
      { text: "Custom learning paths", included: true },
      { text: "Dedicated account manager", included: false },
    ],
  },
];

export const metadata = {
  title: "Pricing | PM 101 to Pro",
  description:
    "Simple, transparent pricing for every stage of your PM career. Start free, upgrade when you're ready.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Simple, transparent pricing
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          No hidden fees. No confusing bundles. Pick the plan that matches where
          you are in your PM journey — and cancel any time.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-6xl mx-auto px-4 pb-24 grid gap-8 md:grid-cols-3">
        {tiers.map((tier) => {
          const Icon = tier.icon;
          return (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border ${
                tier.highlight
                  ? "border-indigo-500 bg-indigo-950/40 shadow-xl shadow-indigo-900/30"
                  : "border-gray-800 bg-gray-900"
              } p-8`}
            >
              {/* Badge */}
              {tier.badge && (
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full ${
                    tier.highlight
                      ? "bg-indigo-500 text-white"
                      : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {tier.badge}
                </span>
              )}

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2 rounded-lg ${
                    tier.highlight ? "bg-indigo-500/20" : "bg-gray-800"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      tier.highlight ? "text-indigo-400" : "text-gray-400"
                    }`}
                  />
                </div>
                <h2 className="text-xl font-bold">{tier.name}</h2>
              </div>

              {/* Price */}
              <div className="mb-4">
                {tier.price === 0 ? (
                  <span className="text-4xl font-extrabold">Free</span>
                ) : (
                  <>
                    <span className="text-4xl font-extrabold">${tier.price}</span>
                    <span className="text-gray-400 ml-1">/ {tier.period}</span>
                  </>
                )}
              </div>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {tier.description}
              </p>

              {/* CTA */}
              <Link
                href={tier.ctaHref}
                className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-colors mb-8 ${
                  tier.highlight
                    ? "bg-indigo-500 hover:bg-indigo-400 text-white"
                    : "bg-gray-800 hover:bg-gray-700 text-white"
                }`}
              >
                {tier.cta}
              </Link>

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-gray-600 mt-0.5 shrink-0" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? "text-gray-200" : "text-gray-600"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>

      {/* FAQ / Reassurance */}
      <section className="max-w-3xl mx-auto px-4 pb-24">
        <h2 className="text-2xl font-bold text-center mb-10">Common questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Can I cancel my Pro plan at any time?",
              a: "Yes. Cancel from your account settings before your next billing date and you won't be charged again. You keep access until the end of the period you've paid for.",
            },
            {
              q: "What happens after the 7-day free trial?",
              a: "If you don't cancel during the trial, your card is charged the monthly Pro rate. We'll send you a reminder email 24 hours before the trial ends.",
            },
            {
              q: "Do you offer annual billing?",
              a: "Annual plans are coming soon and will save you ~20%. Join the waitlist by emailing hello@pm101topro.com.",
            },
            {
              q: "Can I add more than 5 seats to the Teams plan?",
              a: "Absolutely. Reach out to us and we'll put together a custom quote for larger teams.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-gray-800 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
