"use client"

import dynamic from "next/dynamic"
import { AuthUnavailable } from "@/components/auth-unavailable"
import { useClerkState } from "@/components/clerk-wrapper"

const SignUpPanel = dynamic(() => import("@/components/sign-up-panel").then((mod) => mod.SignUpPanel))

export function SignUpGate() {
  const { enabled, pending } = useClerkState()
  if (pending) {
    return <div className="min-h-[calc(100vh-4rem)]" />
  }
  if (!enabled) {
    return (
      <AuthUnavailable
        title="Accounts are off"
        body="Creating an account is not connected on this site yet. The courses and tools are still open."
      />
    )
  }
  return <SignUpPanel />
}
