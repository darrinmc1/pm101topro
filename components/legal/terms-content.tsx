import Link from "next/link"
import {
  CONTACT_EMAIL,
  INTRO_PRICE_TERMS,
  LEGAL_UPDATED,
  REFUND_POLICY,
  SELLER_NAME,
} from "@/lib/legal"
import { PLAN } from "@/lib/pricing"

export function TermsPage({ siteName }: { siteName: string }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-3">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Terms &amp; Conditions</h1>
          <p className="text-lg text-slate-600">Last updated: {LEGAL_UPDATED}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 md:px-6 py-12">
        <div className="prose prose-slate max-w-none">
          <p className="lead text-lg text-slate-600">
            These Terms &amp; Conditions (&ldquo;Terms&rdquo;) cover the {siteName} website (the &ldquo;Service&rdquo;).
            The seller is {SELLER_NAME} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
          </p>
          <p className="text-sm text-slate-500 mt-2">
            By using the Service you agree to these Terms. If you do not agree, do not use the Service.
          </p>

          <hr className="my-8" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. The seller</h2>
            <p className="text-slate-700 mb-3">
              Paid plans and one-off packs, when they are offered, are sold by {SELLER_NAME}.
              A card statement may show TTPN or TTPN* plus the product name.
            </p>
            <p className="text-slate-700">
              Questions about these Terms:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 underline">{CONTACT_EMAIL}</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Accounts</h2>
            <p className="text-slate-700 mb-3">
              A free account needs an email address you can access. You are responsible for activity under that account
              and for telling us if you think someone else is using it.
            </p>
            <p className="text-slate-700">
              We may refuse, suspend, or close an account that breaks these Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. Prices</h2>
            <p className="text-slate-700 mb-3">
              Prices are in Australian dollars and include GST. The current map is on the{" "}
              <Link href="/pricing" className="text-blue-600 underline">pricing page</Link>.
            </p>
            <p className="text-slate-700 mb-3">
              The {PLAN.name} is {PLAN.priceLabel} {PLAN.taxLabel}. {INTRO_PRICE_TERMS}
            </p>
            <p className="text-slate-700 mb-3">
              The A$5 first month is a limited-time intro price for people who create a free account with their email.
              It is not a permanent rate.
            </p>
            <p className="text-slate-700">
              Template collections are one-off packs. They are not a subscription, and they are not included in the
              monthly plan unless the pricing page says so. We do not sell lifetime access, and we do not sell an
              unlimited plan.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Cancellation</h2>
            <p className="text-slate-700">
              You can cancel a subscription anytime. Cancellation stops the next renewal. You keep access until the
              end of the period you have already paid for.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Refunds</h2>
            <p className="text-slate-700 mb-3">{REFUND_POLICY}</p>
            <p className="text-slate-700">
              To ask for a refund, email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 underline">{CONTACT_EMAIL}</a>.
              The same wording is on the{" "}
              <Link href="/refunds" className="text-blue-600 underline">refunds page</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Intellectual property</h2>
            <p className="text-slate-700 mb-3">
              Courses, lessons, templates, tools, and the site itself belong to {SELLER_NAME} or its licensors.
              You may use them for your own work. You may not resell them, republish a course as your own training,
              or use the content to train a model.
            </p>
            <p className="text-slate-700">
              If you think we have used your material without permission, email {CONTACT_EMAIL}.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Acceptable use</h2>
            <p className="text-slate-700 mb-3">Do not:</p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-1">
              <li>Break into accounts or systems</li>
              <li>Upload malware</li>
              <li>Interfere with the Service</li>
              <li>Harass other people</li>
              <li>Scrape the site with automated tools</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. Advice</h2>
            <p className="text-slate-700">
              The Service is training and document drafting. It is not legal, financial, or professional project advice
              for your organisation. You still have to run the project.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">9. Liability</h2>
            <p className="text-slate-700">
              To the extent the law allows, {SELLER_NAME} is not liable for indirect, incidental, or consequential
              loss arising from use of the Service. Nothing in these Terms excludes, restricts, or modifies rights
              that cannot be excluded under the Australian Consumer Law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">10. Governing law</h2>
            <p className="text-slate-700">
              These Terms are governed by the laws of Queensland, Australia. You can still rely on the Australian
              Consumer Law where it applies to you.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">11. Changes</h2>
            <p className="text-slate-700">
              We may update these Terms. The date at the top of this page is when they last changed. If you keep
              using the Service after a change, you accept the updated Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">12. Contact</h2>
            <p className="text-slate-700">
              {SELLER_NAME}<br />
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 underline">{CONTACT_EMAIL}</a>
            </p>
            <p className="text-slate-700 mt-3">
              You can also use the <Link href="/contact" className="text-blue-600 underline">contact form</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
