import Link from "next/link"

interface TermsPageProps {
  siteName: string
  domain: string
  companyName?: string
}

export function TermsPage({ siteName, domain, companyName = siteName }: TermsPageProps) {
  const lastUpdated = "24 October 2026"

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-3">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Terms &amp; Conditions</h1>
          <p className="text-lg text-slate-600">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 md:px-6 py-12">
        <div className="prose prose-slate max-w-none">
          <p className="lead text-lg text-slate-600">
            Please read these Terms &amp; Conditions (&ldquo;Terms&rdquo;) carefully before using the {siteName} website
            (the &ldquo;Service&rdquo;), operated by {companyName} (&ldquo;us,&rdquo; &ldquo;we,&rdquo; or &ldquo;our&rdquo;).
          </p>

          <p className="text-sm text-slate-500 mt-2">
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part,
            you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.
          </p>

          <hr className="my-8" />

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Accounts</h2>
            <p className="text-slate-700 mb-3">
              When you create an account with us, you guarantee that the information you provide is accurate, complete,
              and current at all times. Inaccurate, incomplete, or obsolete information may result in immediate termination
              of your account.
            </p>
            <p className="text-slate-700 mb-3">
              You are responsible for safeguarding the password and for any activities or actions under your account.
              You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
            <p className="text-slate-700">
              We may refuse service, close an account, or remove content.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Use of the site</h2>
            <p className="text-slate-700 mb-3">
              The courses, document tools, and templates on {siteName} can be read and used without a purchase.
              They are provided as is. We may change or remove a page.
            </p>
            <p className="text-slate-700">
              This site does not sell a subscription, take a card, or run a checkout. There is no charge, and so there is nothing to refund. If that changes, these Terms will say so before a page asks you to pay.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
            <p className="text-slate-700 mb-3">
              All content on {siteName} — including courses, lessons, templates, tools, articles, graphics, logos,
              and code — is the property of {companyName} or its content creators and is protected by applicable
              intellectual property laws.
            </p>
            <p className="text-slate-700 mb-3">
              <strong>What you may do:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-1">
              <li>Access and view content for your personal, non-commercial use</li>
              <li>Download templates for your own business use</li>
              <li>Share links to public pages on social media</li>
            </ul>
            <p className="text-slate-700 mb-3">
              <strong>What you may NOT do:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-1">
              <li>Re-sell, redistribute, or sublicense any content or templates</li>
              <li>Reproduce courses or materials for commercial training programs without written permission</li>
              <li>Copy, modify, or create derivative works of the platform itself</li>
              <li>Use our content to train AI models or for similar machine-learning purposes</li>
            </ul>
            <p className="text-slate-700">
              If you believe your intellectual property has been infringed, use the <Link href="/contact" className="text-blue-600 underline">contact form</Link>.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. User Conduct</h2>
            <p className="text-slate-700 mb-3">
              You agree not to use the Service for any unlawful purpose or in violation of these Terms. Prohibited
              behavior includes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-1">
              <li>Attempting to access accounts, systems, or data without authorization</li>
              <li>Uploading malicious code, viruses, or harmful content</li>
              <li>Interfering with the operation of the Service</li>
              <li>Harassing, abusing, or threatening other users or staff</li>
              <li>Using automated tools (scrapers, bots) to extract content without permission</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
            <p className="text-slate-700 mb-3">
              The Service may contain links to third-party websites or services that are not owned or controlled by us.
              We have no control over and assume no responsibility for the content, privacy policies, or practices of
              any third-party websites.
            </p>
            <p className="text-slate-700">
              Sign-in is provided by Clerk. The site is hosted on Vercel, which also provides analytics. Contact-form messages and list signups are sent to the operator of this site. Those services have their own terms.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
            <p className="text-slate-700 mb-3">
              To the fullest extent permitted by applicable law, {companyName} shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising out of or related to your use of the
              Service, whether based on warranty, contract, tort (including negligence), or any other legal theory.
            </p>
            <p className="text-slate-700">
              The educational content provided is for informational purposes only and does not constitute professional
              advice. Always consult qualified professionals for advice specific to your situation.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
            <p className="text-slate-700 mb-3">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason,
              including breach of these Terms. Upon termination, your right to use the Service ceases immediately.
            </p>
            <p className="text-slate-700">
              You can stop using the Service at any time. To ask about an account or about data we hold, use the <Link href="/contact" className="text-blue-600 underline">contact form</Link>. Intellectual property, limitation of liability, and governing law survive termination.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
            <p className="text-slate-700 mb-3">
              We reserve the right to modify or replace these Terms at any time. Material changes will be notified
              via email (if you have an account) or by posting a notice on the Service. Your continued use of the
              Service after any changes constitutes acceptance of the new Terms.
            </p>
            <p className="text-slate-700">
              It is your responsibility to review these Terms periodically. The &ldquo;Last updated&rdquo; date at the
              top of this page indicates when changes were last made.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
            <p className="text-slate-700">
              These Terms shall be governed and construed in accordance with the laws of the State of Delaware, United
              States, without regard to its conflict of law provisions. Our failure to enforce any right or provision
              of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
            <p className="text-slate-700">
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-disc pl-6 mt-2 text-slate-700 space-y-1">
              <li>Contact form: <Link href="/contact" className="text-blue-600 underline">{domain}/contact</Link></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
