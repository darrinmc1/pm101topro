import { TermsPage } from "@/components/legal/terms-content"
import { getSupportEmail } from "@/lib/support-email"

export default function Page() {
  return (
    <TermsPage
      siteName="PM101toPro"
      domain="pm101topro.com"
      supportEmail={getSupportEmail() ?? "admin@pm101topro.com"}
    />
  )
}
