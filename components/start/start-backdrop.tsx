"use client"

import { useParallax } from "@/hooks/use-parallax"

/** Lighter motion than home — one grid plane only. */
export function StartBackdrop() {
  const gridRef = useParallax<HTMLDivElement>(0.05)
  return (
    <div
      ref={gridRef}
      className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40"
      aria-hidden="true"
    />
  )
}
