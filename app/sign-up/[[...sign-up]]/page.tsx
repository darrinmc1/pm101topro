import type { Metadata } from "next"
import { SignUpGate } from "@/components/sign-up-gate"

export const metadata: Metadata = {
  title: "Sign up – pm101toPro",
}

export default function SignUpPage() {
  return <SignUpGate />
}
