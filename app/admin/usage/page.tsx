import type { Metadata } from "next"
import Link from "next/link"
import { headers } from "next/headers"
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server"
import { clerkEnabledForHost } from "@/lib/clerk-config"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Usage – pm101toPro",
  robots: { index: false, follow: false },
}

type RecentRow = { path: string; at: string; email: string }

export default async function AdminUsagePage() {
  const headerList = await headers()
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host")
  if (!clerkEnabledForHost(host)) {
    return (
      <section className="container py-16">
        <h1 className="text-3xl font-bold">Usage</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Sign-in is off until this site uses its own Clerk application. This page stays empty until then.
        </p>
      </section>
    )
  }

  let userId: string | null = null
  try {
    userId = (await auth()).userId
  } catch {
    userId = null
  }

  if (!userId) {
    return (
      <section className="container py-16">
        <h1 className="text-3xl font-bold">Usage</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Sign in with the existing pm101toPro account. This view is for the site owner.
        </p>
        <Link href="/sign-in" className="mt-6 inline-block text-accent hover:underline">
          Sign in
        </Link>
      </section>
    )
  }

  const user = await currentUser()
  const role = user?.publicMetadata?.role
  if (role !== "admin") {
    return (
      <section className="container py-16">
        <h1 className="text-3xl font-bold">Usage</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          This account is signed in. It is not marked as the owner. In the pm101toPro Clerk
          application, open your user and set public metadata to {`{"role":"admin"}`}.
        </p>
      </section>
    )
  }

  let userCount: number | null = null
  let recent: RecentRow[] = []
  let note = ""
  try {
    const client = await clerkClient()
    const list = await client.users.getUserList({ limit: 100 })
    userCount = list.totalCount
    if (list.totalCount > list.data.length) {
      note = `Recent pages below are from the first ${list.data.length} accounts. The count includes every account.`
    }
    for (const account of list.data) {
      const pages = account.privateMetadata?.recentPages
      if (!Array.isArray(pages)) continue
      const email = account.primaryEmailAddress?.emailAddress ?? account.id
      for (const entry of pages) {
        if (!entry || typeof entry !== "object") continue
        const path = (entry as { path?: unknown }).path
        const at = (entry as { at?: unknown }).at
        if (typeof path === "string" && typeof at === "string") {
          recent.push({ path, at, email })
        }
      }
    }
    recent.sort((a, b) => b.at.localeCompare(a.at))
    recent = recent.slice(0, 40)
  } catch {
    note = "Clerk did not return the account list."
  }

  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Usage</h1>
      <p className="mt-3 text-muted-foreground">
        Accounts: {userCount === null ? "unavailable" : userCount}
      </p>
      {note ? <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{note}</p> : null}
      <h2 className="mt-8 text-xl font-semibold">Recent pages</h2>
      {recent.length === 0 ? (
        <p className="mt-3 text-muted-foreground">
          No signed-in page opens recorded yet. A signed-in visit stores the path on that account.
        </p>
      ) : (
        <ul className="mt-4 divide-y divide-border rounded-xl border border-border">
          {recent.map((row) => (
            <li key={`${row.email}-${row.path}-${row.at}`} className="px-4 py-3 text-sm">
              <p className="font-medium">{row.path}</p>
              <p className="text-muted-foreground">
                {row.email} · {row.at}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
