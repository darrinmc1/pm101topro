import Link from "next/link"
import { BrandMark } from "@/components/brand-mark"

const FOOTER_LINKS = [
  { href: "/courses", label: "Courses" },
  { href: "/tools", label: "Tools" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <BrandMark />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            From your first project to running the room. Free project management
            courses across every methodology, plus AI-powered document tools.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="container flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 pm101toPro.com</p>
          <p className="font-mono text-muted-foreground/50">
            {/* Footer easter egg — cycles through PM jokes on each visit */}
            {
              [
                "From PM 101 to Pro.",
                "Burndown not included.",
                "May contain trace elements of scope creep.",
                "Estimated: 2 weeks. Actual: ∞.",
                "Change requests welcome (results may vary).",
              ][Math.floor(Math.random() * 5)]
            }
          </p>
        </div>
      </div>
    </footer>
  )
}
