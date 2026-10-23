import type { Metadata } from "next"
import { DashboardClient } from "@/components/dashboard-client"

export const metadata: Metadata = {
  title: "Dashboard - pm101toPro",
  description: "Lesson progress stored in this browser. No invented streak or saved documents.",
}

export default function DashboardPage() {
  return <DashboardClient />
}
