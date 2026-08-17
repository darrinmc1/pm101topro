import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { BLOG_POSTS, formatDate, getPost } from "@/lib/blog"
import HumorBreak from "@/components/humor-break"

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: "Post not found" }
  return { title: post.title, description: post.excerpt }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <article className="container max-w-2xl py-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        All posts
      </Link>

      <div className="mt-6">
        <Badge variant="outline">{post.category}</Badge>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tightest text-foreground text-balance sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>{formatDate(post.date)}</span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readMins} min read
          </span>
        </div>
      </div>

      <div className="mt-8 space-y-5">
        <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{post.excerpt}</p>
        {post.body.map((paragraph, i) => (
          <div key={i}>
            <p className="leading-relaxed text-foreground text-pretty">
              {paragraph}
            </p>
            {i === 1 && <HumorBreak tag="general" />}
          </div>
        ))}
      </div>
    </article>
  )
}
