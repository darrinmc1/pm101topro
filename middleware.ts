import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server"
import { clerkEnabledForHost } from "@/lib/clerk-config"

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/api/send-email(.*)"])

const BLOCKED_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "CCBot",
  "anthropic-ai",
  "Claude-Web",
  "Diffbot",
  "Bytespider",
  "cohere-ai",
  "PerplexityBot",
  "Imagesift",
  "FacebookBot",
  "meta-externalagent",
  "DataForSeoBot",
  "DotBot",
  "Meltwater",
  "Applebot-Extended",
  "Google-Extended",
  "PetalBot",
  "Scrapy",
  "python-requests",
  "aiohttp",
  "httpx",
  "curl",
  "wget",
  "Go-http-client",
  "Java/",
  "okhttp",
]

const SAFE_PATHS = ["/_next/", "/favicon", "/og-image", "/opengraph", "/icon"]

const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW = 60_000
const RATE_LIMIT_MAX = 60

function applyGuard(request: NextRequest): NextResponse {
  const url = request.nextUrl.pathname
  const userAgent = request.headers.get("user-agent") || ""
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  const response = NextResponse.next()

  response.headers.set("X-Robots-Tag", "noai, noimageai")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

  const uaLower = userAgent.toLowerCase()
  for (const bot of BLOCKED_BOTS) {
    if (uaLower.includes(bot.toLowerCase())) {
      if (url.startsWith("/api/") || url.startsWith("/admin/")) {
        return new NextResponse("Forbidden", { status: 403 })
      }
      response.headers.set("X-Robots-Tag", "noindex, nofollow, noai, noimageai")
    }
  }

  if (!SAFE_PATHS.some((path) => url.startsWith(path))) {
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

const withClerk = clerkMiddleware(async (auth, request) => {
  if (isProtectedRoute(request)) {
    await auth.protect()
  }
  return applyGuard(request)
})

export default function middleware(request: NextRequest, event: NextFetchEvent) {
  const host = request.headers.get("x-forwarded-host") ?? request.nextUrl.hostname
  if (!clerkEnabledForHost(host)) {
    return applyGuard(request)
  }
  return withClerk(request, event)
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|images/|favicon.ico).*)"],
}
