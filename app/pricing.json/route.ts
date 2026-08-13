import { NextResponse } from "next/server"
import { getPricingJson } from "@/lib/pricing"

export function GET() {
  return NextResponse.json(getPricingJson(), {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  })
}
