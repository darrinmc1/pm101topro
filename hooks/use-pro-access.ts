"use client"

import { useEffect, useState } from "react"

/** True when the signed-in user has an active Pro entitlement. */
export function useProAccess() {
  const [pro, setPro] = useState(false)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch("/api/entitlements")
        const data = (await res.json().catch(() => null)) as { pro?: boolean } | null
        if (!cancelled && data?.pro) setPro(true)
      } catch {
        /* unsigned or offline — stay on the free meter */
      } finally {
        if (!cancelled) setChecked(true)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  return { pro, checked }
}
