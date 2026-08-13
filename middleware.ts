import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/api/subscribe(.*)",
  "/api/send-email(.*)",
])

const clerkConfigured = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.startsWith("pk_") &&
    process.env.CLERK_SECRET_KEY,
)

const BLOCKED_SCRAPERS = [
  "Diffbot", "Bytespider", "Imagesift",
  "FacebookBot", "meta-externalagent", "DataForSeoBot", "DotBot",
  "Meltwater", "PetalBot",
  "Scrapy", "python-requests", "aiohttp", "httpx",
  "Go-http-client", "Java/", "okhttp",
]

const AEO_PATHS = [
  "/llm.txt",
  "/llms.txt",
  "/pricing",
  "/pricing.json",
  "/faq",
  "/tools",
  "/tools/status",
  "/about",
  "/courses",
]

const SAFE_PATHS = ["/_next/", "/favicon", "/og-image", "/opengraph", "/icon"]

const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW = 60_000
const RATE_LIMIT_MAX = 60

function applySecurity(request: NextRequest) {
  const url = request.nextUrl.pathname
  const userAgent = request.headers.get("user-agent") || ""
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown"
  const response = NextResponse.next()

  const isAeoPath = AEO_PATHS.some((p) => url === p || url.startsWith(`${p}/`)) || url === "/"
  if (!isAeoPath) {
    response.headers.set("X-Robots-Tag", "noai, noimageai")
  }
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

  const uaLower = userAgent.toLowerCase()
  for (const bot of BLOCKED_SCRAPERS) {
    if (uaLower.includes(bot.toLowerCase())) {
      if (url.startsWith("/api/") || url.startsWith("/admin/")) {
        return new NextResponse("Forbidden", { status: 403 })
      }
      if (!isAeoPath) {
        response.headers.set("X-Robots-Tag", "noindex, nofollow, noai, noimageai")
      }
    }
  }

  if (!SAFE_PATHS.some((p) => url.startsWith(p))) {
    const now = Date.now()
    const entry = rateLimit.get(ip)

    if (!entry || now > entry.resetAt) {
      rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    } else {
      entry.count++
      if (entry.count > RATE_LIMIT_MAX) {
        return new NextResponse("Too Many Requests", {
          status: 429,
          headers: { "Retry-After": "60" },
        })
      }
    }

    if (rateLimit.size > 10000) {
      const cutoff = now - RATE_LIMIT_WINDOW
      for (const [key, val] of rateLimit) {
        if (val.resetAt < cutoff) rateLimit.delete(key)
      }
    }
  }

  return response
}

export default clerkConfigured
  ? clerkMiddleware(async (auth, request: NextRequest) => {
      if (isProtectedRoute(request)) {
        await auth.protect()
      }
      return applySecurity(request)
    })
  : (request: NextRequest) => applySecurity(request)

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|images/|favicon.ico).*)",
  ],
}
