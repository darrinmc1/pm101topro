"use client"

import dynamic from "next/dynamic"

const isClerkConfigured =
  typeof process !== "undefined" &&
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.startsWith("pk_")

const Recorder = isClerkConfigured
  ? dynamic(() => import("@/components/usage-recorder"), { ssr: false })
  : null

export function UsageRecorderGate() {
  if (!Recorder) return null
  return <Recorder />
}
