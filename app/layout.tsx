import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClerkWrapper } from "@/components/clerk-wrapper"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "pm101toPro – Project Management Training",
    template: "%s | pm101toPro",
  },
  description:
    "Practical project management training covering PMP, Agile, Scrum, and PMO — from your first project to running the room.",
  metadataBase: new URL("https://www.pm101topro.com"),
  openGraph: {
    siteName: "pm101toPro",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "pm101toPro",
    url: "https://www.pm101topro.com",
    logo: "https://www.pm101topro.com/logo.png",
    description:
      "Practical project management training covering PMP, Agile, Scrum, and PMO — from your first project to running the room.",
    sameAs: [],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "pm101toPro",
    url: "https://www.pm101topro.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.pm101topro.com/courses?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        <ClerkWrapper>
          {children}
        </ClerkWrapper>
        <Analytics />
      </body>
    </html>
  )
}
