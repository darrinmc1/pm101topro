import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center mb-12">Flexible Pricing for Every Team</h1>
      <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
        Choose the plan that best fits your needs. Start with our free tier and scale as you grow.
      </p>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {/* Free Tier */} 
        <div className="border rounded-lg p-8 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-4">Free</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Perfect for individuals and small teams starting out.</p>
            <p className="text-5xl font-bold mb-6">$0<span className="text-xl font-normal text-gray-500 dark:text-gray-400">/month</span></p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-8">
              <li className="flex items-center"><span className="w-5 h-5 mr-2">✅</span> Core PM Tools</li>
              <li className="flex items-center"><span className="w-5 h-5 mr-2">✅</span> Limited Course Access</li>
              <li className="flex items-center"><span className="w-5 h-5 mr-2">✅</span> Community Support</li>
            </ul>
          </div>
          <Link href="/sign-up">
            <Button variant="outline" className="w-full">Start for Free</Button>
          </Link>
        </div>

        {/* Pro Tier */} 
        <div className="border rounded-lg p-8 shadow-xl bg-primary text-white flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-4">Pro</h3>
            <p className="text-gray-200 dark:text-gray-300 mb-6">Unlock advanced features and full course library.</p>
            <p className="text-5xl font-bold mb-6">$29<span className="text-xl font-normal text-gray-200 dark:text-gray-300">/month</span></p>
            <ul className="space-y-3 text-white mb-8">
              <li className="flex items-center"><span className="w-5 h-5 mr-2">✅</span> All Free features</li>
              <li className="flex items-center"><span className="w-5 h-5 mr-2">✅</span> Full Course Access</li>
              <li className="flex items-center"><span className="w-5 h-5 mr-2">✅</span> Priority Support</li>
              <li className="flex items-center"><span className="w-5 h-5 mr-2">✅</span> Advanced Analytics</li>
            </ul>
          </div>
          <Link href="/sign-up">
            <Button className="w-full">Choose Pro</Button>
          </Link>
        </div>

        {/* Enterprise Tier */} 
        <div className="border rounded-lg p-8 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-4">Enterprise</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Custom solutions for large organizations.</p>
            <p className="text-5xl font-bold mb-6">Contact Us<span className="text-xl font-normal text-gray-500 dark:text-gray-400">/month</span></p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-8">
              <li className="flex items-center"><span className="w-5 h-5 mr-2">✅</span> All Pro features</li>
              <li className="flex items-center"><span className="w-5 h-5 mr-2">✅</span> Dedicated Account Manager</li>
              <li className="flex items-center"><span className="w-5 h-5 mr-2">✅</span> Custom Integrations</li>
              <li className="flex items-center"><span className="w-5 h-5 mr-2">✅</span> SSO & Enhanced Security</li>
            </ul>
          </div>
          <Link href="/contact">
            <Button variant="outline" className="w-full">Contact Sales</Button>
          </Link>
        </div>
      </div>

      <section className="mt-24 text-center">
        <h2 className="text-4xl font-bold mb-8">Trusted by Leading Companies</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img src="/logos/logo-1.svg" alt="Company Logo 1" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/logos/logo-2.svg" alt="Company Logo 2" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/logos/logo-3.svg" alt="Company Logo 3" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/logos/logo-4.svg" alt="Company Logo 4" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="/logos/logo-5.svg" alt="Company Logo 5" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
        </div>
      </section>
    </div>
  );
}
