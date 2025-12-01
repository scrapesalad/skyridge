import type { Metadata } from "next";
import Link from "next/link";
import Hero from '@/app/components/hero';
import RelatedPages from '@/app/components/RelatedPages';

export const metadata: Metadata = {
  title: "Dumpster Calculators - Quote, Size & Tonnage | Icon Dumpsters",
  description: "Choose from our three specialized dumpster calculators: get instant quotes, find the right size, or calculate material weights. Professional tools for Utah dumpster rentals.",
  keywords: "dumpster calculator, dumpster quote calculator, dumpster size calculator, tonnage calculator, Utah dumpster rental calculator",
  alternates: { canonical: 'https://icondumpsters.com/dumpster-calculator' }};

export default function DumpsterCalculatorHubPage() {
  const calculators = [
    {
      title: "Quote Calculator",
      description: "Get instant pricing estimates for your dumpster rental with our advanced cost calculator",
      icon: "💰",
      features: [
        "Instant price estimates",
        "Veteran discounts",
        "Special rates & bundles",
        "Delivery date selection",
        "Multiple hub locations"
      ],
      link: "/dumpster-calculator/quote",
      color: "from-blue-500 to-teal-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Size Calculator",
      description: "Find the perfect dumpster size for your project with our intelligent size recommendation tool",
      icon: "📏",
      features: [
        "Project type analysis",
        "Material weight calculation",
        "Smart size recommendations",
        "Professional guidance",
        "Avoid wrong size orders"
      ],
      link: "/dumpster-size-calculator",
      color: "from-[#0d9488] to-emerald-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      borderColor: "border-purple-200"
    },
    {
      title: "Tonnage Calculator",
      description: "Estimate material weights to avoid overweight charges and choose the right dumpster",
      icon: "⚖️",
      features: [
        "Material weight estimation",
        "Volume to ton conversion",
        "Overweight prevention",
        "Cost calculation",
        "Professional guidance"
      ],
      link: "/tonnage-calculator",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Calculator Selection */}
        <div id="calculators" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Calculator
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've created three specialized tools to help you get the perfect dumpster rental. 
              Each calculator is designed for a specific need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {calculators.map((calculator, index) => (
              <div key={index} className="group">
                <Link href={calculator.link} className="block">
                  <div className={`${calculator.bgColor} rounded-2xl p-8 border-2 ${calculator.borderColor} hover:border-gray-300 transition-all duration-300 h-full group-hover:shadow-xl group-hover:-translate-y-1`}>
                    <div className={`w-20 h-20 bg-gradient-to-br ${calculator.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl">{calculator.icon}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      {calculator.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 text-center leading-relaxed">
                      {calculator.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {calculator.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-center">
                      <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${calculator.color} text-white rounded-lg font-semibold group-hover:scale-105 transition-transform duration-300`}>
                        Use {calculator.title}
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* How to Use Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How to Use Our Calculators
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Calculator</h4>
              <p className="text-gray-600 text-sm">
                Select the calculator that best fits your needs: <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link>, sizing, or weight estimation
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Enter Your Details</h4>
              <p className="text-gray-600 text-sm">
                Fill in project information, materials, dates, and other relevant details
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Get Your Results</h4>
              <p className="text-gray-600 text-sm">
                Receive instant calculations, recommendations, and next steps for your project
              </p>
            </div>
          </div>
        </div>

        {/* Why Use Our Calculators */}
        <div className="bg-gradient-to-br from-[#0d9488] to-teal-700 rounded-2xl p-8 text-white mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Why Use Our Professional Calculators?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Accurate estimates based on real Utah <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link> and conditions</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Professional guidance to avoid costly mistakes</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Instant results with no waiting or phone calls</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Special rates and discounts automatically applied</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Local expertise for Utah projects and regulations</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Direct connection to our team for personalized service</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Calculators Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            All Dumpster Calculators
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/dumpster-calculator/quote" className="block p-6 bg-blue-50 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Quote Calculator</h4>
              <p className="text-gray-600 text-sm mb-3">Get instant pricing estimates for your dumpster rental</p>
              <span className="text-blue-600 font-semibold">Get Quote →</span>
            </Link>
            <Link href="/dumpster-size-calculator" className="block p-6 bg-purple-50 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Size Calculator</h4>
              <p className="text-gray-600 text-sm mb-3">Find the perfect dumpster size for your project</p>
              <span className="text-purple-600 font-semibold">Calculate Size →</span>
            </Link>
            <Link href="/tonnage-calculator" className="block p-6 bg-orange-50 rounded-xl border-2 border-orange-200 hover:border-orange-400 transition-all">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Tonnage Calculator</h4>
              <p className="text-gray-600 text-sm mb-3">Estimate material weights to avoid overweight charges</p>
              <span className="text-orange-600 font-semibold">Calculate Weight →</span>
            </Link>
            <Link href="/demolition-calculator" className="block p-6 bg-red-50 rounded-xl border-2 border-red-200 hover:border-red-400 transition-all">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Demolition Calculator</h4>
              <p className="text-gray-600 text-sm mb-3">Calculate dumpster needs for demolition projects</p>
              <span className="text-red-600 font-semibold">Calculate →</span>
            </Link>
            <Link href="/roofing-calculator" className="block p-6 bg-purple-50 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Roofing Calculator</h4>
              <p className="text-gray-600 text-sm mb-3">Estimate dumpster size for roofing projects</p>
              <span className="text-purple-600 font-semibold">Calculate →</span>
            </Link>
            <Link href="/dumpster-calculator-for-concrete" className="block p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Concrete Calculator</h4>
              <p className="text-gray-600 text-sm mb-3">Calculate concrete disposal costs and dumpster size</p>
              <span className="text-gray-600 font-semibold">Calculate →</span>
            </Link>
            <Link href="/concrete-debris-calculator" className="block p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Concrete Debris Calculator</h4>
              <p className="text-gray-600 text-sm mb-3">Calculate concrete waste volume and disposal costs</p>
              <span className="text-gray-600 font-semibold">Calculate →</span>
            </Link>
            <Link href="/demolition-dumpster" className="block p-6 bg-orange-50 rounded-xl border-2 border-orange-300 hover:border-orange-500 transition-all">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Demolition Dumpster Guide</h4>
              <p className="text-gray-600 text-sm mb-3">Commercial demolition dumpsters for contractors</p>
              <span className="text-orange-600 font-semibold">Learn More →</span>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose the calculator that fits your needs, or call us directly for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(801) 918-6000"
              className="bg-[#0d9488] text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors font-medium text-lg"
            >
              Call (801) 918-6000
            </a>
            <a
              href="https://icondumpsters.com/#calculators"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-action-orange transition-colors font-medium text-lg"
            >
              Choose Calculator
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
