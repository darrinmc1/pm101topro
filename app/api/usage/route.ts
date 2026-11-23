import { auth, clerkClient } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { clerkEnabledForHost } from "@/lib/clerk-config"

export const dynamic = "force-dynamic"

type RecentPage = { path: string; at: string }

function cleanPath(value: unknown): string | null {
  if (typeof value !== "string") return null
  const path = value.split("?")[0]?.split("#")[0] ?? ""
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("..")) return null
  if (path.length > 200) return null
  return path
}

function readPages(metadata: Record<string, unknown> | undefined): RecentPage[] {
  const raw = metadata?.recentPages
  if (!Array.isArray(raw)) return []
  return raw.flatMap((entry) => {
    if (!entry || typeof entry !== "object") return []
    const path = cleanPath((entry as { path?: unknown }).path)
    const at = (entry as { at?: unknown }).at
    if (!path || typeof at !== "string") return []
    return [{ path, at }]
  })
}

export async function POST(request: Request) {
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host")
  if (!clerkEnabledForHost(host)) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  try {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ ok: false }, { status: 401 })
    }

    const body = await request.json().catch(() => null)
    const path = cleanPath(body && typeof body === "object" ? (body as { path?: unknown }).path : null)
    if (!path) {
      return NextResponse.json({ ok: false }, { status: 400 })
    }

    const client = await clerkClient()
    const user = await client.users.getUser(userId)
    const previous = readPages(user.privateMetadata as Record<string, unknown>)
    const now = new Date().toISOString()
    const last = previous[0]
    const sameRecent =
      last &&
      last.path === path &&
      Date.now() - Date.parse(last.at) < 30 * 60 * 1000
    if (!sameRecent) {
      const recentPages = [{ path, at: now }, ...previous.filter((entry) => entry.path !== path)].slice(0, 20)
      await client.users.updateUserMetadata(userId, {
        privateMetadata: {
          ...user.privateMetadata,
          recentPages,
        },
      })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[usage] not recorded", error instanceof Error ? error.name : "error")
    return NextResponse.json({ ok: false }, { status: 200 })
  }
}
