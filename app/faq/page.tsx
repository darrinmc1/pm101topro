import type { Metadata } from "next"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SITE_FAQS, faqsToJsonLd } from "@/lib/faqs"

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Straight answers on pm101toPro courses, AI document tools, Status Cleaner, and pricing.",
}

export default function FaqPage() {
  const faqLd = faqsToJsonLd(SITE_FAQS)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <section className="border-b border-border bg-surface">
        <div className="container py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">FAQs</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tightest text-foreground">
            Straight answers. No steerco theatre.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Courses, Status Cleaner, document tools, and pricing — the same facts we publish in{" "}
            <Link href="/llm.txt" className="text-accent hover:underline">
              llm.txt
            </Link>{" "}
            and{" "}
            <Link href="/pricing.json" className="text-accent hover:underline">
              pricing.json
            </Link>
            .
          </p>
        </div>
      </section>
      <section className="container max-w-3xl py-14">
        <Accordion type="single" collapsible>
          {SITE_FAQS.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-10 text-sm text-muted-foreground">
          Still stuck?{" "}
          <Link href="/about" className="text-accent hover:underline">
            About pm101toPro
          </Link>{" "}
          ·{" "}
          <Link href="/tools/status" className="text-accent hover:underline">
            Try Status Cleaner
          </Link>
        </p>
      </section>
    </>
  )
}
