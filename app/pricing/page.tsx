import type { Metadata } from "next"
import { EmailSignup } from "@/components/email-signup"

export const metadata: Metadata = {
  title: "Coming soon",
  description: "Coming soon. Join the list and we will write when it is available.",
}

const COMING_SOON = {
  source: "pricing-coming-soon",
  eyebrow: "Coming soon",
  heading: "Coming soon - join the list",
  body: "Leave your email. We will write when it is available.",
  savedMessage: "Saved. We will write when it is available.",
  buttonLabel: "Join the list",
  headingLevel: "h1" as const,
}

export default function PricingPage() {
  return <EmailSignup {...COMING_SOON} />
}
