"use client"

import { useEffect, useRef } from "react"

/**
 * Home-only charter glass: lifts toward the reader on scroll.
 * Not a generic sink-parallax plane. Disabled for prefers-reduced-motion.
 */
export function useCharterGlassLift<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0
    const update = () => {
      const y = window.scrollY
      const lift = Math.min(y * 0.145, 84)
      const scale = 1 + Math.min(y * 0.00016, 0.038)
      const glow = Math.min(0.28 + y * 0.00045, 0.5)
      el.style.transform = `translate3d(0, ${(-lift).toFixed(1)}px, 0) scale(${scale.toFixed(4)})`
      el.style.transformOrigin = "50% 20%"
      el.style.filter = `drop-shadow(0 22px 40px hsl(224 76% 18% / ${glow.toFixed(3)}))`
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return ref
}
