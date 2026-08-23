import { Metadata } from 'next'
import { Check, X, Minus } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Tools | Compare & Choose the Right Plan',
  description: 'Explore our AI-powered tools and see how they compare to alternatives. Find the right plan for your needs.',
}

const tools = [
  {
    name: 'AI Writing Assistant',
    description: 'Generate high-quality content, emails, and copy in seconds.',
    category: 'Content',
  },
  {
    name: 'AI Code Helper',
    description: 'Debug, refactor, and generate code across all major languages.',
    category: 'Development',
  },
  {
    name: 'AI Data Analyzer',
    description: 'Turn raw data into actionable insights with natural language queries.',
    category: 'Analytics',
  },
  {
    name: 'AI Image Generator',
    description: 'Create stunning visuals from text prompts in multiple styles.',
    category: 'Design',
  },
]

type FeatureValue = boolean | string

const comparisonFeatures: { feature: string; us: FeatureValue; competitorA: FeatureValue; competitorB: FeatureValue }[] = [
  { feature: 'Unlimited AI requests', us: true, competitorA: false, competitorB: false },
  { feature: 'All tools in one platform', us: true, competitorA: false, competitorB: true },
  { feature: 'Custom AI fine-tuning', us: true, competitorA: false, competitorB: false },
  { feature: 'API access', us: true, competitorA: true, competitorB: false },
  { feature: 'Team collaboration', us: true, competitorA: true, competitorB: false },
  { feature: 'Priority support', us: true, competitorA: false, competitorB: false },
  { feature: 'Data privacy & no training on your data', us: true, competitorA: false, competitorB: true },
  { feature: 'Offline / on-premise option', us: true, competitorA: false, competitorB: false },
  { feature: 'Starting price', us: '$19/mo', competitorA: '$49/mo', competitorB: '$39/mo' },
]

function FeatureCell({ value }: { value: FeatureValue }) {
  if (typeof value === 'string') {
    return <span className="text-sm font-semibold text-gray-900">{value}</span>
  }
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100">
        <Check className="w-4 h-4 text-green-600" />
      </span>
    )
  }
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-50">
      <X className="w-4 h-4 text-red-400" />
    </span>
  )
}

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            AI Tools Suite
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Every AI tool you need,<br />
            <span className="text-indigo-600">in one place</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Stop juggling five subscriptions. Our premium suite gives you writing, coding, analytics, and design AI — all under one roof, at a fraction of the cost.
          </p>
          <a
            href="#compare"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            See how we compare
          </a>
        </div>
      </section>

      {/* Tool Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">What&apos;s included</h2>
          <p className="text-gray-500 text-center mb-10">Every tool is available on the Premium plan — no add-ons, no surprises.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow bg-white"
              >
                <span className="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded mb-3">
                  {tool.category}
                </span>
                <h3 className="font-bold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-500">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="compare" className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">How we compare</h2>
          <p className="text-gray-500 text-center mb-10">
            See why teams choose us over piecemeal alternatives.
          </p>

          {/* Desktop table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white border-b border-gray-200">
                  <th className="text-left px-6 py-4 font-semibold text-gray-500 w-1/2">Feature</th>
                  <th className="px-6 py-4 text-center">
                    <span className="inline-block bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">Our Platform</span>
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-400">Competitor A</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-400">Competitor B</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center">
                        <FeatureCell value={row.us} />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center">
                        <FeatureCell value={row.competitorA} />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center">
                        <FeatureCell value={row.competitorB} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {comparisonFeatures.map((row) => (
              <div key={row.feature} className="bg-white rounded-xl border border-gray-200 p-4">
                <p className="font-semibold text-gray-800 mb-3">{row.feature}</p>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <p className="text-indigo-600 font-bold mb-1">Us</p>
                    <div className="flex justify-center"><FeatureCell value={row.us} /></div>
                  </div>
                  <div>
                    <p className="text-gray-400 font-semibold mb-1">Comp. A</p>
                    <div className="flex justify-center"><FeatureCell value={row.competitorA} /></div>
                  </div>
                  <div>
                    <p className="text-gray-400 font-semibold mb-1">Comp. B</p>
                    <div className="flex justify-center"><FeatureCell value={row.competitorB} /></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 text-center mt-4">Competitor data based on publicly available pricing and feature pages as of 2024.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-indigo-600">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to upgrade your workflow?</h2>
          <p className="text-indigo-200 mb-8">Join thousands of teams who replaced multiple subscriptions with one powerful platform.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pricing"
              className="inline-block bg-white text-indigo-600 font-bold px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              View Pricing
            </a>
            <a
              href="/signup"
              className="inline-block border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
