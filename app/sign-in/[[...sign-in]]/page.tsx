import type { Metadata } from "next"
import { SignInGate } from "@/components/sign-in-gate"

export const metadata: Metadata = {
  title: "Sign in – pm101toPro",
}

export default function SignInPage() {
  return <SignInGate />
}
