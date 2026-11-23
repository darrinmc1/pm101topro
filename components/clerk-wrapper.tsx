"use client"

import dynamic from "next/dynamic"
import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { ClerkMode } from "@/lib/clerk-config"

const PRODUCTION_HOSTS = new Set(["pm101topro.com", "www.pm101topro.com"])

const ClerkDynamicProvider = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.ClerkProvider),
  { ssr: true },
)

type ClerkState = { enabled: boolean; pending: boolean }

const ClerkStateContext = createContext<ClerkState>({ enabled: false, pending: false })

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
  const [enabled, setEnabled] = useState(mode === "development")
  const [pending, setPending] = useState(mode === "production")

  useEffect(() => {
    if (mode !== "production") {
      setEnabled(mode === "development")
      setPending(false)
      return
    }
    const host = window.location.hostname.toLowerCase()
    setEnabled(PRODUCTION_HOSTS.has(host))
    setPending(false)
  }, [mode])

  const state = { enabled, pending }
  if (!enabled) {
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
