import { PrivacyPage } from "@/components/legal/privacy-content"
import { getSupportEmail } from "@/lib/support-email"

export default function Page() {
  return (
    <PrivacyPage
      siteName="PM101toPro"
      domain="pm101topro.com"
      supportEmail={getSupportEmail() ?? undefined}
    />
  )
}
