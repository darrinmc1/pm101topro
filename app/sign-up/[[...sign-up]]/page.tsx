import { isClerkKeyUsable } from "@/lib/clerk-config"

function SignUpUnavailable() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <p className="max-w-sm text-center text-sm text-muted-foreground">
        Sign-up is temporarily unavailable.
      </p>
    </div>
  )
}

export default async function SignUpPage() {
  if (!isClerkKeyUsable()) return <SignUpUnavailable />
  const { ClerkSignUp } = await import("@/components/clerk-sign-up")
  return <ClerkSignUp />
}
