"use client"

import dynamic from "next/dynamic"
import type { ReactNode } from "react"

const isClerkConfigured =
  typeof process !== "undefined" &&
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.startsWith("pk_")

// Dynamically import ClerkProvider so it only initializes at runtime
// when a valid key is present. During SSR/SSG with no key, renders
// children directly.
const ClerkDynamicProvider = isClerkConfigured
  ? dynamic(
      () => import("@clerk/nextjs").then((mod) => mod.ClerkProvider),
      { ssr: true, loading: () => null }
    )
  : null

export function ClerkProviderWrapper({ children }: { children: ReactNode }) {
  if (!ClerkDynamicProvider) {
    return <>{children}</>
  }
  return <ClerkDynamicProvider>{children}</ClerkDynamicProvider>
}
