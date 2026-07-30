"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const ClerkSection = dynamic(() => import("@/components/clerk-auth-nav"), {
  ssr: false,
  loading: () => (
    <div className="h-8 w-20 animate-pulse rounded-md bg-surface-raised" />
  ),
})

const isClerkConfigured =
  typeof process !== "undefined" &&
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.startsWith("pk_")

export function AuthNav() {
  if (!isClerkConfigured) {
    return (
      <Button variant="ghost" size="sm" asChild>
        <Link href="/sign-in">Sign in</Link>
      </Button>
    )
  }

  return <ClerkSection />
}
