"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useClerkUi } from "@/components/clerk-wrapper"

const ClerkSection = dynamic(() => import("@/components/clerk-auth-nav"), {
  ssr: false,
  loading: () => (
    <div className="h-8 w-20 animate-pulse rounded-md bg-surface-raised" />
  ),
})

export function AuthNav() {
  const clerkUi = useClerkUi()

  if (!clerkUi) {
    return (
      <Button variant="ghost" size="sm" asChild>
        <Link href="/sign-in" prefetch={false}>
          Sign in
        </Link>
      </Button>
    )
  }

  return <ClerkSection />
}
