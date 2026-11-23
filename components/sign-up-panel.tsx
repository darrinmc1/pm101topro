"use client"

import { SignUp } from "@clerk/nextjs"

const appearance = {
  elements: {
    rootBox: "mx-auto w-full max-w-md",
    card: "bg-surface border-border shadow-xl",
    headerTitle: "text-foreground",
    headerSubtitle: "text-muted-foreground",
    socialButtonsBlockButton: "border-border text-foreground hover:bg-surface-raised",
    dividerLine: "bg-border",
    dividerText: "text-muted-foreground",
    formFieldLabel: "text-foreground",
    formFieldInput: "bg-background border-border text-foreground placeholder:text-muted-foreground",
    footerActionText: "text-muted-foreground",
    footerActionLink: "text-accent hover:text-accent/80",
    formButtonPrimary: "bg-accent-action text-accent-foreground hover:bg-accent-glow",
  },
}

export function SignUpPanel() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-12">
      <div className="mb-6 max-w-md text-center">
        <h1 className="text-2xl font-bold">Create a free account</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Email is enough. No card on this page. The A$5 first month is for people who do this.
        </p>
      </div>
      <SignUp appearance={appearance} />
    </div>
  )
}
