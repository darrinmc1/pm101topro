import { CookiesPage } from "@/components/legal/cookies-content"
import { getSupportEmail } from "@/lib/support-email"

export default function Page() {
  return (
    <CookiesPage
      siteName="PM101toPro"
      domain="pm101topro.com"
      supportEmail={getSupportEmail() ?? undefined}
    />
  )
}
