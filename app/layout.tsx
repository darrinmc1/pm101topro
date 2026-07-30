import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
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
    default: "pm101toPro - From your first project to running the room",
    template: "%s · pm101toPro",
  },
  description:
    "Master project management from your first charter to running a PMO. Free courses across every methodology, plus AI-powered document tools.",
  generator: "v0.app",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
