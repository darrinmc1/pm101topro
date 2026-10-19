import type { Metadata } from "next"
import { TermsPage } from "@/components/legal/terms-content"

export const metadata: Metadata = {
  title: "Terms – pm101toPro",
}

export default function Page() {
  return (
    <TermsPage
      siteName="PM101toPro"
      domain="pm101topro.com"
      supportEmail="admin@pm101topro.com"
    />
  )
}
