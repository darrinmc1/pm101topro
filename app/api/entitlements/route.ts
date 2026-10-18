import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { userHasEntitlement } from "@/lib/entitlements"
import { CHECKOUT_OFFERS } from "@/lib/offers"

export const runtime = "nodejs"

/** Whether the signed-in Clerk user currently has Pro. Unsigned callers get pro: false. */
export async function GET() {
  let userId: string | null = null
  try {
    const session = await auth()
    userId = session.userId
  } catch {
    userId = null
  }

  if (!userId) {
    return NextResponse.json({ pro: false })
  }

  const pro = await userHasEntitlement(userId, CHECKOUT_OFFERS.pro.entitlementId)
  return NextResponse.json({ pro })
}
