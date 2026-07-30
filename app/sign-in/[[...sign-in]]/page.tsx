import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <SignIn
        appearance={{
          elements: {
            rootBox: "mx-auto w-full max-w-md",
            card: "bg-surface border-border shadow-xl",
            headerTitle: "text-foreground",
            headerSubtitle: "text-muted-foreground",
            socialButtonsBlockButton:
              "border-border text-foreground hover:bg-surface-raised",
            dividerLine: "bg-border",
            dividerText: "text-muted-foreground",
            formFieldLabel: "text-foreground",
            formFieldInput:
              "bg-background border-border text-foreground placeholder:text-muted-foreground",
            footerActionText: "text-muted-foreground",
            footerActionLink: "text-accent hover:text-accent/80",
            formButtonPrimary:
              "bg-accent text-accent-foreground hover:bg-accent/90",
          },
        }}
      />
    </div>
  )
}
