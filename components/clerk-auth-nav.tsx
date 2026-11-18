"use client"

import { useUser, UserButton, SignInButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { CreateAccountLink } from "@/components/create-account-link"

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
    <div className="flex items-center gap-2">
      <CreateAccountLink className="text-sm font-medium text-muted-foreground hover:text-foreground" />
      <SignInButton mode="modal">
        <Button variant="ghost" size="sm">
          Sign in
        </Button>
      </SignInButton>
    </div>
  )
}
