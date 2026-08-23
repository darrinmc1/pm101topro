import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ClipboardList } from "lucide-react"
import { StatusCleaner } from "@/components/tools/status-cleaner"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { STATUS_FAQS, faqsToJsonLd } from "@/lib/faqs"
import { AI_FREE_LIMIT, PRO_PRICE_LABEL, PRO_PRICE_USD, SITE_URL, STATUS_CLEANER } from "@/lib/pricing"

export const metadata: Metadata = {
  title: "Status Cleaner",
  description: STATUS_CLEANER.tagline,
  alternates: { canonical: STATUS_CLEANER.path },
}

export default function StatusCleanerPage() {
  const faqLd = faqsToJsonLd(STATUS_FAQS)
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "pm101toPro Status Cleaner",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: STATUS_CLEANER.url,
    description: STATUS_CLEANER.tagline,
    isPartOf: {
      "@type": "WebSite",
      name: "pm101toPro",
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      name: PRO_PRICE_LABEL,
      price: PRO_PRICE_USD,
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
      url: `${SITE_URL}/pricing`,
      description: `Included in ${PRO_PRICE_LABEL}. ${AI_FREE_LIMIT} free generations on the shared AI meter. Checkout coming.`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

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
            <ClipboardList className="h-6 w-6" />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent-secondary">
              Paid · {PRO_PRICE_LABEL} after {AI_FREE_LIMIT} free
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground text-balance">
              Status Cleaner
            </h1>
            <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">
              {STATUS_CLEANER.tagline} Built on the Reporting up lesson — RAG with teeth, the
              biggest risk, and a clear ask — citing real courses, lessons, and document types.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <StatusCleaner />
        </div>

        <section className="mt-14" aria-labelledby="status-faq-heading">
          <h2 id="status-faq-heading" className="text-xl font-semibold text-foreground">
            FAQs
          </h2>
          <Accordion type="single" collapsible className="mt-4">
            {STATUS_FAQS.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </>
  )
}
