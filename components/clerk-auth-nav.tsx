"use client"

import { useUser, UserButton, SignInButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

export default function ClerkAuthNav() {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded) {
    return <div className="h-8 w-20 animate-pulse rounded-md bg-surface-raised" />
  }

  if (isSignedIn && user) {
    return (
      <UserButton
        afterSignOutUrl="/"
        appearance={{
          elements: {
            avatarBox: "h-8 w-8",
          },
        }}
      />
    )
  }

  return (
    <SignInButton mode="modal">
      <Button variant="ghost" size="sm">
        Sign in
      </Button>
    </SignInButton>
  )
}
