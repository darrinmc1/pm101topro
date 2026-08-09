// app/api/feedback/route.ts - feedback endpoint used by <FeedbackWidget/>.
// Persists to the shared Empire Supabase `feedback` table (status: "new") via the
// Supabase REST API. The "Empire — Feedback to GitHub Issue" workflow then picks up
// new rows and files a GitHub issue, routing by the full page URL's domain.

import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://radlwbqfzrzmgdldyifi.supabase.co";
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

const VALID_CATEGORIES = ["Bug", "Suggestion", "Content Request", "Other"];
const FEEDBACK_TYPE: Record<string, string> = {
  Bug: "bug",
  Suggestion: "suggestion",
  "Content Request": "content_request",
  Other: "general",
};

// Simple in-memory rate limit (per-server-instance).
const rateLimit = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
function rateLimited(ip: string) {
  const now = Date.now();
  const e = rateLimit.get(ip);
  if (!e || now > e.reset) {
    rateLimit.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  e.count += 1;
  return e.count > MAX_PER_WINDOW;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await req.json().catch(() => ({}));
  const { rating, category, message, email, page, website } = body as {
    rating?: number;
    category?: string;
    message?: string;
    email?: string;
    page?: string;
    website?: string;
  };

  // Honeypot - reject silently if filled.
  if (website && website !== "") {
    return NextResponse.json({ message: "Thank you for your feedback." });
  }

  if (!rating || !category || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (rating < 1 || rating > 5) {
    return NextResponse.json({ error: "Rating must be 1-5" }, { status: 400 });
  }
  if (!VALID_CATEGORIES.includes(category)) {
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });
  }

  // Resolve the full page URL (widget sends window.location.href; fall back to host).
  const origin =
    req.headers.get("origin") ??
    (req.headers.get("host") ? `https://${req.headers.get("host")}` : null);
  const pageUrl =
    page && page.startsWith("http")
      ? page
      : origin && page
      ? `${origin}${page.startsWith("/") ? page : `/${page}`}`
      : origin ?? null;

  if (!SERVICE_KEY) {
    console.error("[feedback] SUPABASE_SERVICE_ROLE_KEY is not set");
    return NextResponse.json(
      { error: "Feedback is temporarily unavailable. Please try again later." },
      { status: 503 }
    );
  }

  const res = await fetch(`${SUPABASE_URL}/rest/v1/feedback`, {
    method: "POST",
    headers: {
      apikey: SERVICE_KEY,
      Authorization: `Bearer ${SERVICE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify([
      {
        category,
        rating,
        message: message.trim(),
        page: page ?? null,
        page_url: pageUrl,
        email: email?.trim() || null,
        ip_address: ip,
        feedback_type: FEEDBACK_TYPE[category] ?? "general",
        status: "new",
      },
    ]),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("[feedback] supabase insert failed", res.status, detail);
    return NextResponse.json({ error: "Failed to submit feedback." }, { status: 502 });
  }

  return NextResponse.json({ message: "Thank you for your feedback. We read every note!" });
}
