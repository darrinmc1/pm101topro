"use client"

import Link from "next/link"

export function AuthUnavailable({
  title,
  body,
}: {
  title: string
  body: string
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
        <Link
          href="/courses"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-accent-action px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-glow"
        >
          Browse the courses
        </Link>
      </div>
    </div>
  )
}
