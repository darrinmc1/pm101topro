"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CreateAccountLink } from "@/components/create-account-link"

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
      <div className="flex items-center gap-2">
        <CreateAccountLink className="text-sm font-medium text-muted-foreground hover:text-foreground" />
        <Button variant="ghost" size="sm" asChild>
          <Link href="/sign-in">Sign in</Link>
        </Button>
      </div>
    )
  }

  return <ClerkSection />
}
