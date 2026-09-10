import { ClerkProviderWrapper } from "@/components/clerk-wrapper"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FeedbackWidget } from "@/components/feedback-widget"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

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
  keywords: [
    "project management",
    "PMP",
    "Agile",
    "Scrum",
    "PMO",
    "project charter",
    "risk register",
  ],
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0A0F1E",
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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProviderWrapper>
      <html
        lang="en"
        className={`dark bg-background ${inter.variable} ${jetbrainsMono.variable}`}
      >
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
        <body className="font-sans">
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <FeedbackWidget />
          {process.env.NODE_ENV === "production" && <Analytics />}
        </body>
      </html>
    </ClerkProviderWrapper>
  )
}
