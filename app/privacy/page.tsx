import type { Metadata } from "next"
import { PrivacyPage } from "@/components/legal/privacy-content"

export const metadata: Metadata = {
  title: "Privacy – pm101toPro",
}

export default function Page() {
  return (
    <PrivacyPage
      siteName="PM101toPro"
      domain="pm101topro.com"
      supportEmail="admin@pm101topro.com"
    />
  )
}
