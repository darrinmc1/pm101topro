import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClerkWrapper } from "@/components/clerk-wrapper"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "pm101toPro – Project Management Courses & Training",
    template: "%s – pm101toPro",
  },
  description:
    "Practical project management courses covering PMP, Agile, Scrum, and PMO. Go from your first project to running the room with structured lessons and AI-powered tools.",
  metadataBase: new URL("https://pm101topro.com"),
  openGraph: {
    siteName: "pm101toPro",
    type: "website",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "pm101toPro",
  url: "https://pm101topro.com",
  logo: "https://pm101topro.com/logo.png",
  description:
    "Practical project management training covering PMP, Agile, Scrum, and PMO — from your first project to running the room.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: "https://pm101topro.com/about",
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "pm101toPro",
  url: "https://pm101topro.com",
  description:
    "Practical project management courses covering PMP, Agile, Scrum, and PMO.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://pm101topro.com/courses?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <ClerkWrapper>{children}</ClerkWrapper>
        <Analytics />
      </body>
    </html>
  )
}
