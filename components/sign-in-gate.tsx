"use client"

import dynamic from "next/dynamic"
import { AuthUnavailable } from "@/components/auth-unavailable"
import { useClerkState } from "@/components/clerk-wrapper"

const SignInPanel = dynamic(() => import("@/components/sign-in-panel").then((mod) => mod.SignInPanel))

export function SignInGate() {
  const { enabled, pending } = useClerkState()
  if (pending) {
    return <div className="min-h-[calc(100vh-4rem)]" />
  }
  if (!enabled) {
    return (
      <AuthUnavailable
        title="Sign-in is off"
        body="Sign-in is not connected on this site yet. The courses and tools are still open."
      />
    )
  }
  return <SignInPanel />
}
