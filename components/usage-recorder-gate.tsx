"use client"

import dynamic from "next/dynamic"
import { useClerkState } from "@/components/clerk-wrapper"

const Recorder = dynamic(() => import("@/components/usage-recorder"), { ssr: false })

export function UsageRecorderGate() {
  const { active } = useClerkState()
  if (!active) return null
  return <Recorder />
}
