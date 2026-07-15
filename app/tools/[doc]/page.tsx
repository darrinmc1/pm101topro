import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { DocumentWizard } from "@/components/tools/document-wizard"
import { DOC_TYPES, getDocType } from "@/lib/documents"

export function generateStaticParams() {
  return DOC_TYPES.map((doc) => ({ doc: doc.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ doc: string }>
}): Promise<Metadata> {
  const { doc } = await params
  const found = getDocType(doc)
  if (!found) return { title: "Tool not found" }
  return { title: `${found.name} Generator`, description: found.blurb }
}

export default async function ToolPage({ params }: { params: Promise<{ doc: string }> }) {
  const { doc } = await params
  const found = getDocType(doc)
  if (!found) notFound()

  const Icon = found.icon

  return (
    <div className="container max-w-3xl py-10">
      <Link
        href="/tools"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        All tools
      </Link>

      <div className="mt-6 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground text-balance">{found.name}</h1>
          <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">{found.blurb}</p>
        </div>
      </div>

      <div className="mt-8">
        <DocumentWizard doc={{ id: found.id, name: found.name, questions: found.questions }} />
      </div>
    </div>
  )
}
