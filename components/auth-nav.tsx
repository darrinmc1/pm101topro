"use client"

import dynamic from "next/dynamic"
import { useClerkState } from "@/components/clerk-wrapper"

const ClerkSection = dynamic(() => import("@/components/clerk-auth-nav"), {
  ssr: false,
  loading: () => <div className="h-8 w-20 animate-pulse rounded-md bg-surface-raised" />,
})

export function AuthNav() {
  const { enabled, pending } = useClerkState()

  if (pending) {
    return <div className="h-8 w-20 animate-pulse rounded-md bg-surface-raised" />
  }

  if (!enabled) return null

  return <ClerkSection />
}
