"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { useUser } from "@clerk/nextjs"

export default function UsageRecorder() {
  const pathname = usePathname()
  const { isLoaded, isSignedIn } = useUser()

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !pathname) return
    const key = `pm101_seen:${pathname}`
    try {
      if (sessionStorage.getItem(key)) return
      sessionStorage.setItem(key, "1")
    } catch {
      return
    }
    fetch("/api/usage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname }),
    }).catch(() => {})
  }, [isLoaded, isSignedIn, pathname])

  return null
}
