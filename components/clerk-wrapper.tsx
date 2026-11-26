"use client"

import dynamic from "next/dynamic"
import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import type { ClerkMode } from "@/lib/clerk-config"
import { isClerkAuthPath } from "@/lib/clerk-paths"

const PRODUCTION_HOSTS = new Set(["pm101topro.com", "www.pm101topro.com"])

const ClerkDynamicProvider = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.ClerkProvider),
  { ssr: true },
)

type ClerkState = {
  /** This site's publishable key is allowed on the current host. */
  enabled: boolean
  /** Host check has not finished, and this route would mount Clerk. */
  pending: boolean
  /** ClerkProvider is mounted. Only sign-in, sign-up, and dashboard. */
  active: boolean
}

const ClerkStateContext = createContext<ClerkState>({
  enabled: false,
  pending: false,
  active: false,
})

export function useClerkState() {
  return useContext(ClerkStateContext)
}

export function ClerkProviderWrapper({
  mode,
  children,
}: {
  mode: ClerkMode
  children: ReactNode
}) {
  const pathname = usePathname() || "/"
  const onAuthPath = isClerkAuthPath(pathname)
  const [hostAllowed, setHostAllowed] = useState(mode === "development")
  const [hostPending, setHostPending] = useState(mode === "production")

  useEffect(() => {
    if (mode !== "production") {
      setHostAllowed(mode === "development")
      setHostPending(false)
      return
    }
    const host = window.location.hostname.toLowerCase()
    setHostAllowed(PRODUCTION_HOSTS.has(host))
    setHostPending(false)
  }, [mode])

  // Browser Clerk stays off public pages, and off entirely unless the key is
  // this site's own instance (see clerkMode). A key for another domain never
  // reaches ClerkProvider.
  const active = hostAllowed && onAuthPath
  const state: ClerkState = {
    enabled: hostAllowed,
    pending: hostPending && onAuthPath,
    active,
  }

  if (!active) {
    return <ClerkStateContext.Provider value={state}>{children}</ClerkStateContext.Provider>
  }

  return (
    <ClerkStateContext.Provider value={state}>
      <ClerkDynamicProvider
        signInUrl="/sign-in"
        signUpUrl="/sign-up"
        signInForceRedirectUrl="/dashboard"
        signUpForceRedirectUrl="/dashboard"
        afterSignOutUrl="/"
      >
        {children}
      </ClerkDynamicProvider>
    </ClerkStateContext.Provider>
  )
}
