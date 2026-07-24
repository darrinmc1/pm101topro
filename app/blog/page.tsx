import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { BLOG_POSTS, formatDate } from "@/lib/blog"
import { PmWisdom } from "@/components/pm-wisdom"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical project management writing — charters, risk, stakeholders, Agile and more from the pm101toPro team.",
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS

  return (
    <>
      <section className="border-b border-border">
        <div className="container py-14">
          <h1 className="text-4xl font-extrabold tracking-tightest text-foreground">The blog</h1>
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Short, practical reads on running real projects — the stuff between the lessons.
          </p>
        </div>
      </section>

      <section className="container py-12">
        {/* Featured */}
        <Link href={`/blog/${featured.slug}`} className="group block">
          <Card className="border-border bg-surface p-8 transition-colors hover:border-accent/50">
            <Badge variant="outline">{featured.category}</Badge>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground text-balance">
              {featured.title}
            </h2>
            <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              {featured.excerpt}
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
              <span>{formatDate(featured.date)}</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {featured.readMins} min read
              </span>
              <span className="ml-auto inline-flex items-center gap-1 font-medium text-accent">
                Read
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Card>
        </Link>

        {/* Grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card className="flex h-full flex-col border-border bg-surface p-6 transition-colors hover:border-accent/50">
                <Badge variant="outline">{post.category}</Badge>
                <h3 className="mt-3 text-lg font-semibold text-foreground text-balance">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{formatDate(post.date)}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readMins} min
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <div className="mx-auto max-w-lg">
          <PmWisdom />
        </div>
      </section>
    </>
  )
}
