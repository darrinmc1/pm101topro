import { isClerkKeyUsable } from "@/lib/clerk-config"

function SignInUnavailable() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <p className="max-w-sm text-center text-sm text-muted-foreground">
        Sign-in is temporarily unavailable.
      </p>
    </div>
  )
}

export default async function SignInPage() {
  if (!isClerkKeyUsable()) return <SignInUnavailable />
  const { ClerkSignIn } = await import("@/components/clerk-sign-in")
  return <ClerkSignIn />
}
