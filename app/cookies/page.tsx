import type { Metadata } from "next"
import { CookiesPage } from "@/components/legal/cookies-content"

export const metadata: Metadata = {
  title: "Cookies – pm101toPro",
}

export default function Page() {
  return (
    <CookiesPage
      siteName="PM101toPro"
      domain="pm101topro.com"
      supportEmail="admin@pm101topro.com"
    />
  )
}
