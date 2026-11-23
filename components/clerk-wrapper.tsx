"use client"

import dynamic from "next/dynamic"
import { createContext, useContext } from "react"
import type { ReactNode } from "react"
import { usePathname } from "next/navigation"

import { isClerkAuthPath } from "@/lib/clerk-paths"

const ClerkDynamicProvider = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.ClerkProvider),
  { ssr: true },
)

const ClerkUiContext = createContext(false)

export function useClerkUi() {
  return useContext(ClerkUiContext)
}

export function ClerkProviderWrapper({
  enabled,
  children,
}: {
  enabled: boolean
  children: ReactNode
}) {
  const pathname = usePathname() || "/"
  const active = enabled && isClerkAuthPath(pathname)

  const tree = active ? (
    <ClerkDynamicProvider
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      signInForceRedirectUrl="/dashboard"
      signUpForceRedirectUrl="/dashboard"
      afterSignOutUrl="/"
    >
      {children}
    </ClerkDynamicProvider>
  ) : (
    <>{children}</>
  )

  return <ClerkUiContext.Provider value={active}>{tree}</ClerkUiContext.Provider>
}
