import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock, BookOpen, TrendingUp, Users, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Project Management Blog | PMP Prep, Agile, PMO Setup | PM-Mastery",
  description: "Expert insights on PMP certification prep, Agile frameworks, PMO setup, risk management, and project management best practices. Free resources for aspiring and experienced PMs.",
  keywords: "PMP certification prep, Agile project management, PMO setup guide, project management tips, PMBOK guide, Scrum framework, risk management, project manager career",
}

const featuredPosts = [
  {
    slug: "pmp-certification-study-guide-2024",
    title: "The Complete PMP Certification Study Guide for 2024",
    description: "Everything you need to know to pass the PMP exam on your first attempt. Covers PMBOK 7th edition, exam format, study timeline, and proven preparation strategies.",
    category: "PMP Prep",
    readTime: "18 min read",
    date: "2024-01-15",
    featured: true,
    tags: ["PMP", "Certification", "PMBOK", "Exam Prep"],
  },
  {
    slug: "agile-vs-waterfall-choosing-right-methodology",
    title: "Agile vs Waterfall: How to Choose the Right Methodology for Your Project",
    description: "A practical comparison of Agile and Waterfall methodologies with real-world examples. Learn when to use each approach and how hybrid models can bridge the gap.",
    category: "Agile Frameworks",
    readTime: "12 min read",
    date: "2024-01-22",
    featured: true,
    tags: ["Agile", "Waterfall", "Methodology", "Scrum"],
  },
  {
    slug: "how-to-set-up-pmo-from-scratch",
    title: "How to Set Up a PMO from Scratch: A Step-by-Step Guide",
    description: "Building a Project Management Office requires careful planning and stakeholder buy-in. This guide walks you through every phase from initial assessment to full deployment.",
    category: "PMO Setup",
    readTime: "15 min read",
    date: "2024-02-01",
    featured: true,
    tags: ["PMO", "Governance", "Strategy", "Leadership"],
  },
]

const allPosts = [
  {
    slug: "project-risk-management-framework",
    title: "Building a Robust Project Risk Management Framework",
    description: "Learn how to identify, assess, and mitigate project risks before they derail your timeline and budget. Includes free risk register template.",
    category: "Risk Management",
    readTime: "10 min read",
    date: "2024-02-08",
    tags: ["Risk", "Templates", "Planning"],
  },
  {
    slug: "scrum-master-vs-project-manager",
    title: "Scrum Master vs Project Manager: Key Differences Explained",
    description: "Confused about the difference between a Scrum Master and a Project Manager? This breakdown clarifies roles, responsibilities, and when you need each.",
    category: "Agile Frameworks",
    readTime: "8 min read",
    date: "2024-02-14",
    tags: ["Scrum", "Roles", "Agile"],
  },
  {
    slug: "earned-value-management-guide",
    title: "Earned Value Management: The PM's Guide to Tracking Project Performance",
    description: "Master EVM metrics including CPI, SPI, EAC, and VAC. Understand how to use earned value analysis to forecast project outcomes and communicate status to stakeholders.",
    category: "PMP Prep",
    readTime: "14 min read",
    date: "2024-02-20",
    tags: ["EVM", "PMP", "Metrics", "Reporting"],
  },
  {
    slug: "stakeholder-management-strategies",
    title: "Stakeholder Management Strategies That Actually Work",
    description: "Effective stakeholder management is the difference between project success and failure. Discover proven techniques for mapping, engaging, and communicating with stakeholders.",
    category: "Leadership",
    readTime: "11 min read",
    date: "2024-02-27",
    tags: ["Stakeholders", "Communication", "Leadership"],
  },
  {
    slug: "project-charter-template-guide",
    title: "How to Write a Project Charter That Gets Approved Every Time",
    description: "A well-crafted project charter sets the foundation for success. Learn the essential components, common mistakes to avoid, and download our free template.",
    category: "Templates",
    readTime: "9 min read",
    date: "2024-03-05",
    tags: ["Charter", "Templates", "Initiation"],
  },
  {
    slug: "kanban-board-setup-guide",
    title: "Setting Up Your First Kanban Board: A Practical Guide",
    description: "Kanban is one of the most flexible Agile frameworks available. This guide shows you how to design, implement, and optimize a Kanban board for your team.",
    category: "Agile Frameworks",
    readTime: "10 min read",
    date: "2024-03-12",
    tags: ["Kanban", "Agile", "Workflow"],
  },
  {
    slug: "pmo-kpis-metrics-dashboard",
    title: "Essential PMO KPIs and Metrics Every Executive Wants to See",
    description: "Demonstrate PMO value with the right metrics. This guide covers portfolio performance, resource utilization, delivery predictability, and how to build an executive dashboard.",
    category: "PMO Setup",
    readTime: "13 min read",
    date: "2024-03-19",
    tags: ["PMO", "KPIs", "Reporting", "Dashboard"],
  },
  {
    slug: "project-manager-career-path",
    title: "The Project Manager Career Path: From Coordinator to CPO",
    description: "Map out your PM career progression with clarity. Understand the skills, certifications, and experience needed at each level from entry-level coordinator to Chief Project Officer.",
    category: "Career",
    readTime: "12 min read",
    date: "2024-03-26",
    tags: ["Career", "Growth", "Certifications"],
  },
  {
    slug: "critical-path-method-explained",
    title: "Critical Path Method (CPM) Explained with Real Examples",
    description: "The Critical Path Method is essential for scheduling complex projects. Learn how to calculate the critical path, identify float, and use CPM to prevent schedule overruns.",
    category: "PMP Prep",
    readTime: "11 min read",
    date: "2024-04-02",
    tags: ["CPM", "Scheduling", "PMP", "Planning"],
  },
  {
    slug: "remote-team-project-management",
    title: "Managing Remote Project Teams: Tools, Tactics, and Best Practices",
    description: "Remote project management presents unique challenges. Discover the tools, communication strategies, and leadership approaches that keep distributed teams aligned and productive.",
    category: "Leadership",
    readTime: "10 min read",
    date: "2024-04-09",
    tags: ["Remote", "Teams", "Tools", "Communication"],
  },
  {
    slug: "agile-transformation-roadmap",
    title: "Agile Transformation Roadmap: Moving Your Organization from Waterfall to Agile",
    description: "Organizational Agile transformation is a journey, not a switch. This roadmap covers change management, pilot programs, scaling frameworks, and measuring transformation success.",
    category: "Agile Frameworks",
    readTime: "16 min read",
    date: "2024-04-16",
    tags: ["Agile", "Transformation", "Change Management", "SAFe"],
  },
  {
    slug: "project-budget-management-tips",
    title: "Project Budget Management: How to Deliver On Budget Every Time",
    description: "Budget overruns are one of the top reasons projects fail. Learn proven techniques for accurate estimation, cost tracking, variance analysis, and budget recovery strategies.",
    category: "Planning",
    readTime: "12 min read",
    date: "2024-04-23",
    tags: ["Budget", "Cost Management", "Planning", "PMP"],
  },
]

const categories = [
  { name: "All Topics", count: 15, active: true },
  { name: "PMP Prep", count: 4 },
  { name: "Agile Frameworks", count: 4 },
  { name: "PMO Setup", count: 2 },
  { name: "Risk Management", count: 1 },
  { name: "Leadership", count: 2 },
  { name: "Career", count: 1 },
  { name: "Templates", count: 1 },
]

const categoryColors: Record<string, string> = {
  "PMP Prep": "bg-blue-100 text-blue-800",
  "Agile Frameworks": "bg-green-100 text-green-800",
  "PMO Setup": "bg-purple-100 text-purple-800",
  "Risk Management": "bg-red-100 text-red-800",
  "Leadership": "bg-orange-100 text-orange-800",
  "Career": "bg-yellow-100 text-yellow-800",
  "Templates": "bg-teal-100 text-teal-800",
  "Planning": "bg-indigo-100 text-indigo-800",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl">
            <Badge className="bg-blue-600 text-white mb-4">PM Knowledge Hub</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Project Management Insights & Resources
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              In-depth guides on PMP certification prep, Agile frameworks, PMO setup, and everything you need to advance your project management career. Written by certified PMs with real-world experience.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-slate-800 rounded-full px-4 py-2 text-sm">
                <BookOpen className="h-4 w-4 text-blue-400" />
                <span>15 In-Depth Articles</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800 rounded-full px-4 py-2 text-sm">
                <TrendingUp className="h-4 w-4 text-green-400" />
                <span>Updated Weekly</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800 rounded-full px-4 py-2 text-sm">
                <Award className="h-4 w-4 text-yellow-400" />
                <span>Expert-Authored</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold">15+</div>
              <div className="text-blue-200 text-sm">Expert Articles</div>
            </div>
            <div>
              <div className="text-2xl font-bold">5</div>
              <div className="text-blue-200 text-sm">Topic Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold">Free</div>
              <div className="text-blue-200 text-sm">Templates Included</div>
            </div>
            <div>
              <div className="text-2xl font-bold">PMP</div>
              <div className="text-blue-200 text-sm">Certified Authors</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl py-16">
        {/* Featured Posts */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Featured Articles</h2>
              <p className="text-slate-600 mt-1">Our most comprehensive guides to get you started</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.slug} className="border-2 border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] || "bg-slate-100 text-slate-700"}`}>
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-snug group-hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed mb-4">
                    {post.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm hover:gap-2 transition-all"
                  >
                    Read Article <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Category Filter + All Posts */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">All Articles</h2>
              <p className="text-slate-600 mt-1">Browse our complete library of PM resources</p>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat.active
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.name} <span className="opacity-70">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Post Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post) => (
              <Card key={post.slug} className="border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] || "bg-slate-100 text-slate-700"}`}>
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-base leading-snug group-hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-sm leading-relaxed mb-3">
                    {post.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Topic Deep-Dives Section */}
        <section className="mt-20 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Explore by Topic</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Whether you're preparing for the PMP exam, implementing Agile, or building a PMO, we have dedicated resources for every stage of your journey.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">PMP Certification Prep</h3>
              <p className="text-slate-600 text-sm mb-4">Comprehensive guides covering PMBOK 7th edition, exam strategies, practice questions, and study schedules to help you pass the PMP on your first attempt.</p>
              <ul className="text-sm text-slate-700 space-y-1 mb-4">
                <li className="flex items-center gap-2"><span className="text-blue-500">→</span> PMBOK 7th Edition Overview</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">→</span> Earned Value Management</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">→</span> Critical Path Method</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">→</span> Budget Management</li>
              </ul>
              <span className="text-blue-600 text-sm font-medium">4 articles →</span>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-xl p-6">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Agile Frameworks</h3>
              <p className="text-slate-600 text-sm mb-4">From Scrum and Kanban to SAFe and LeSS, explore practical guides on implementing and scaling Agile methodologies in your organization.</p>
              <ul className="text-sm text-slate-700 space-y-1 mb-4">
                <li className="flex items-center gap-2"><span className="text-green-500">→</span> Agile vs Waterfall</li>
                <li className="flex items-center gap-2"><span className="text-green-500">→</span> Scrum Master vs PM</li>
                <li className="flex items-center gap-2"><span className="text-green-500">→</span> Kanban Board Setup</li>
                <li className="flex items-center gap-2"><span className="text-green-500">→</span> Agile Transformation</li>
              </ul>
              <span className="text-green-600 text-sm font-medium">4 articles →</span>
            </div>

            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">PMO Setup & Governance</h3>
              <p className="text-slate-600 text-sm mb-4">Step-by-step guidance for establishing, running, and demonstrating the value of a Project Management Office at any organizational scale.</p>
              <ul className="text-sm text-slate-700 space-y-1 mb-4">
                <li className="flex items-center gap-2"><span className="text-purple-500">→</span> PMO from Scratch</li>
                <li className="flex items-center gap-2"><span className="text-purple-500">→</span> PMO KPIs & Metrics</li>
                <li className="flex items-center gap-2"><span className="text-purple-500">→</span> Executive Dashboards</li>
                <li className="flex items-center gap-2"><span className="text-purple-500">→</span> Portfolio Management</li>
              </ul>
              <span className="text-purple-600 text-sm font-medium">2 articles →</span>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 text-white text-center">
          <BookOpen className="h-12 w-12 mx-auto mb-4 text-blue-200" />
          <h2 className="text-3xl font-bold mb-4">Get New PM Articles in Your Inbox</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">
            Join 2,000+ project managers who receive our weekly insights on PMP prep, Agile best practices, and career growth strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-6 py-3">
              Subscribe Free
            </Button>
          </div>
          <p className="text-blue-200 text-sm mt-4">No spam. Unsubscribe anytime. Join 2,000+ PMs.</p>
        </section>

        {/* SEO Content Block */}
        <section className="mt-16 prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">About Our Project Management Resources</h2>
          <div className="grid md:grid-cols-2 gap-8 not-prose">
            <div>
              <p className="text-slate-600 leading-relaxed mb-4">
                PM-Mastery's blog is dedicated to helping project managers at every career stage develop the skills, knowledge, and credentials needed to excel. Our content covers the full spectrum of project management disciplines — from foundational concepts for those just starting out, to advanced techniques for seasoned professionals pursuing executive roles.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our PMP certification prep content is aligned with the latest PMI Examination Content Outline (ECO) and PMBOK 7th Edition. We break down complex concepts like Earned Value Management, Critical Path Method, and risk quantification into practical, actionable guides.
              </p>
            </div>
            <div>
              <p className="text-slate-600 leading-relaxed mb-4">
                For organizations adopting Agile, our framework guides cover Scrum, Kanban, SAFe, and hybrid approaches. We provide honest comparisons, implementation roadmaps, and lessons learned from real transformation projects.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our PMO setup guides are particularly popular with newly appointed PMO directors and project management leaders tasked with building governance structures from scratch. Each guide includes templates, checklists, and stakeholder communication strategies.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
