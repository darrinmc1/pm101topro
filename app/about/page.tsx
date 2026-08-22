import type { Metadata } from "next"
import Link from "next/link"
import { Award, BookOpen, Users, TrendingUp, CheckCircle, ArrowRight, Star, Globe, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "About PM-Mastery | Expert Project Management Training & Coaching",
  description: "PM-Mastery helps project managers earn PMP certification, implement Agile frameworks, and build high-performing PMOs. Learn about our approach, instructors, and proven methodology.",
  keywords: "PMP certification training, project management coaching, Agile training, PMO consulting, project management courses, PMP exam prep, certified project manager",
}

const stats = [
  { value: "2,400+", label: "PMs Trained", icon: Users },
  { value: "94%", label: "PMP Pass Rate", icon: Award },
  { value: "15+", label: "Years Experience", icon: Clock },
  { value: "40+", label: "Countries Reached", icon: Globe },
]

const values = [
  {
    title: "Practical Over Theoretical",
    description: "Every concept we teach is grounded in real project experience. We use case studies, templates, and worked examples — not just textbook definitions.",
    icon: TrendingUp,
  },
  {
    title: "Exam-Ready Confidence",
    description: "Our PMP prep methodology is built around the actual exam experience. We cover predictive, agile, and hybrid approaches as required by the current ECO.",
    icon: Award,
  },
  {
    title: "Career-Long Support",
    description: "We don't just help you pass an exam. Our community and resources support your growth from coordinator to director and beyond.",
    icon: Users,
  },
  {
    title: "Up-to-Date Content",
    description: "Project management evolves. Our content is continuously updated to reflect the latest PMI standards, Agile practices, and industry trends.",
    icon: BookOpen,
  },
]

const expertise = [
  {
    area: "PMP Certification Preparation",
    description: "Comprehensive PMP exam prep aligned with PMBOK 7th Edition and the current PMI Examination Content Outline. Our structured approach covers all three domains: People, Process, and Business Environment.",
    topics: ["PMBOK 7th Edition", "Agile & Hybrid Approaches", "Practice Exams", "Study Schedules", "Earned Value Management", "Critical Path Method"],
    color: "blue",
  },
  {
    area: "Agile Framework Implementation",
    description: "From Scrum and Kanban to SAFe and LeSS, we help teams and organizations adopt Agile methodologies that fit their context. We cover both the mechanics and the mindset shift required for true agility.",
    topics: ["Scrum Framework", "Kanban Systems", "SAFe Implementation", "Agile Transformation", "Retrospectives", "Sprint Planning"],
    color: "green",
  },
  {
    area: "PMO Setup & Governance",
    description: "Building a PMO from scratch or maturing an existing one requires a clear strategy and stakeholder alignment. We provide frameworks, templates, and coaching for every stage of PMO development.",
    topics: ["PMO Charter", "Governance Frameworks", "Portfolio Management", "KPI Dashboards", "Resource Management", "Executive Reporting"],
    color: "purple",
  },
  {
    area: "Risk & Stakeholder Management",
    description: "Effective risk and stakeholder management separates good project managers from great ones. Our resources cover quantitative and qualitative risk analysis, stakeholder mapping, and communication planning.",
    topics: ["Risk Register", "Monte Carlo Analysis", "Stakeholder Mapping", "Communication Plans", "Issue Management", "Change Control"],
    color: "orange",
  },
]

const testimonials = [
  {
    name: "Sarah K.",
    role: "Senior PM, Fortune 500 Tech Company",
    quote: "PM-Mastery's PMP prep course was exactly what I needed. The practice exams were spot-on, and the EVM breakdowns finally made sense. Passed on my first attempt with above-target scores.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    role: "PMO Director, Healthcare Organization",
    quote: "The PMO setup guide was invaluable when I was tasked with building our PMO from scratch. The templates alone saved me weeks of work, and the governance framework gave me a solid foundation.",
    rating: 5,
  },
  {
    name: "Priya M.",
    role: "Agile Coach, Financial Services",
    quote: "The Agile transformation roadmap content helped me structure our organization's journey from Waterfall to Agile. Clear, practical, and based on real experience — not just theory.",
    rating: 5,
  },
]

const colorMap: Record<string, { bg: string; border: string; badge: string; dot: string }> = {
  blue: { bg: "bg-blue-50", border: "border-blue-100", badge: "bg-blue-100 text-blue-800", dot: "bg-blue-500" },
  green: { bg: "bg-green-50", border: "border-green-100", badge: "bg-green-100 text-green-800", dot: "bg-green-500" },
  purple: { bg: "bg-purple-50", border: "border-purple-100", badge: "bg-purple-100 text-purple-800", dot: "bg-purple-500" },
  orange: { bg: "bg-orange-50", border: "border-orange-100", badge: "bg-orange-100 text-orange-800", dot: "bg-orange-500" },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl">
            <Badge className="bg-blue-600 text-white mb-4">About PM-Mastery</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Helping Project Managers Build Careers That Last
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              PM-Mastery is a specialized project management training and coaching platform. We help aspiring and experienced PMs earn certifications, implement Agile frameworks, and build high-performing PMOs — with practical resources grounded in real-world experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/courses">Explore Our Courses</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                <Link href="/blog">Read Free Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 text-white py-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <Icon className="h-6 w-6 mx-auto mb-2 text-blue-200" />
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-800 mb-4">Our Mission</Badge>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Making Expert PM Knowledge Accessible to Everyone
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Project management is one of the most in-demand skill sets in the modern economy, yet quality training remains expensive and inaccessible for many professionals. PM-Mastery was founded to change that.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We believe that every project manager — regardless of industry, company size, or budget — deserves access to the knowledge and tools needed to deliver projects successfully and advance their career.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our free blog resources, affordable courses, and community support are designed to meet you where you are and take you where you want to go — whether that's passing the PMP exam, leading an Agile transformation, or building a world-class PMO.
              </p>
              <div className="space-y-3">
                {[
                  "PMP exam prep aligned with current PMI standards",
                  "Agile and hybrid methodology implementation guides",
                  "PMO setup frameworks and governance templates",
                  "Career development resources for all PM levels",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Why PMs Choose PM-Mastery</h3>
              <div className="space-y-6">
                {values.map((value) => {
                  const Icon = value.icon
                  return (
                    <div key={value.title} className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{value.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Areas of Expertise</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive PM Knowledge Coverage</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From PMP certification prep to enterprise PMO governance, our content covers the full spectrum of project management disciplines.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((area) => {
              const colors = colorMap[area.color]
              return (
                <div key={area.area} className={`${colors.bg} border ${colors.border} rounded-xl p-8`}>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{area.area}</h3>
                  <p className="text-slate-600 leading-relaxed mb-5">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.topics.map((topic) => (
                      <span key={topic} className={`text-xs font-medium px-3 py-1 rounded-full ${colors.badge}`}>
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Success Stories</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Project Managers Say</h2>
            <p className="text-slate-600">Real results from real project managers who used PM-Mastery resources.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-2 border-slate-100">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div>
                    <div className="font-semibold text-slate-900">{t.name}</div>
                    <div className="text-slate-500 text-sm">{t.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Who We Help</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">PM-Mastery Is Built For You If...</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "You're Preparing for the PMP Exam",
                description: "Whether you're just starting your PMP journey or have failed a previous attempt, our structured prep resources and practice exams will get you exam-ready with confidence.",
                cta: "Start PMP Prep",
                href: "/courses",
              },
              {
                title: "You're Leading an Agile Transformation",
                description: "If your organization is moving from Waterfall to Agile — or trying to scale Agile across teams — our framework guides and transformation roadmaps provide a clear path forward.",
                cta: "Explore Agile Resources",
                href: "/blog",
              },
              {
                title: "You're Building or Maturing a PMO",
                description: "From writing your PMO charter to designing executive dashboards, our PMO setup guides give you the frameworks, templates, and strategies to build a PMO that delivers real value.",
                cta: "PMO Setup Guide",
                href: "/blog",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{item.description}</p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
                >
                  {item.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Advance Your PM Career?</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of project managers who use PM-Mastery to earn certifications, implement better processes, and build careers they're proud of.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              <Link href="/courses">Browse Courses</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8">
              <Link href="/blog">Read Free Articles</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
