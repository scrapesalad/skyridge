"use client";

import ImageWithFallback from "@/app/components/ImageWithFallback";
import RelatedPages from '@/app/components/RelatedPages';
import Link from "next/link";
import Analytics from "@/app/components/PageAnalytics";
import ArticleSchema from "@/app/components/ArticleSchema";
import ConcreteCalculator from "@/app/components/ConcreteCalculator";
import FAQSchema from "@/app/components/FAQSchema";

export default function ConcreteDebrisCalculator() {
  return (
    <>
      <Analytics
        pageName="Concrete Debris Calculator: Calculate Concrete Waste & Disposal Costs"
        pageType="article"
        articleId="concrete-debris-calculator"
      />
      <ArticleSchema
        title="Concrete Calculator: Calculate Concrete Volume, Weight & Quantity Needed"
        description="Use our free concrete calculator to estimate the volume and weight of concrete needed for slabs, footings, columns, stairs, and more. Calculate concrete requirements for your construction project."
        author="Icon Dumpsters"
        publishedDate="2025-01-27"
        modifiedDate="2025-01-27"
        imageUrl="/images/concrete.webp"
        articleUrl="https://icondumpsters.com/concrete-debris-calculator"
        category="CONCRETE"
        readTime="PT8M"
      />
      <FAQSchema
        pageUrl="https://icondumpsters.com/concrete-debris-calculator"
        faqs={[
          {
            question: "How do I calculate concrete debris volume?",
            answer: "To calculate concrete debris volume, measure the length × width × thickness of the concrete structure, then convert to cubic yards by dividing by 27. For example, a 20' × 20' × 4\" driveway = 400 sq ft × 0.33' = 132 cubic feet ÷ 27 = 4.9 cubic yards."
          },
          {
            question: "How much does concrete debris weigh?",
            answer: "Concrete debris typically weighs 2.5 tons per cubic yard (5,000 pounds). This weight can vary depending on the concrete mix, moisture content, and reinforcement materials. Our concrete debris calculator accounts for these variations."
          },
          {
            question: "What size dumpster do I need for concrete debris?",
            answer: "For concrete debris, you typically need a larger dumpster due to the weight. A 20-yard dumpster can hold about 8 cubic yards of concrete (20 tons), while a 30-yard dumpster can hold 12 cubic yards (30 tons). Use our calculator for precise estimates."
          },
          {
            question: "How much does it cost to dispose of concrete debris?",
            answer: "Concrete debris disposal costs vary by location and dumpster size. In Utah, concrete disposal typically costs $400-800 for a 20-yard dumpster and $500-1000 for a 30-yard dumpster. Our calculator provides instant pricing based on your specific project."
          }
        ]}
      />
      <div className="min-h-screen bg-white">
        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><Link href="https://icondumpsters.com/" className="hover:text-teal-600 transition-colors">Home</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href="https://icondumpsters.com/blog" className="hover:text-teal-600 transition-colors">Blog</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-gray-900 font-medium">Concrete Debris Calculator</li>
            </ol>
          </nav>

          {/* Article Meta */}
          <header className="mb-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-6 text-sm text-gray-600">
              <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-semibold">CONCRETE</span>
              <span>8 min read</span>
              <span>•</span>
              <span>January 27, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Concrete Calculator: Calculate Volume, Weight & Quantity Needed
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Use our free concrete calculator to estimate the volume and weight of concrete needed for your project. 
              Calculate concrete requirements for slabs, footings, columns, stairs, curbs, and more. Supports multiple units and shapes.
            </p>
            
            {/* Social Sharing */}
            <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-200">
              <span className="text-sm text-gray-600 font-medium">Share this article:</span>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    const title = encodeURIComponent('Concrete Debris Calculator: Calculate Concrete Waste & Disposal Costs');
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
                  }}
                  className="bg-trust-blue text-white p-2 rounded-lg hover:bg-trust-blue-dark transition-colors"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    const title = encodeURIComponent('Concrete Debris Calculator: Calculate Concrete Waste & Disposal Costs');
                    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
                  }}
                  className="bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-500 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.665 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                <button
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    const title = encodeURIComponent('Concrete Debris Calculator: Calculate Concrete Waste & Disposal Costs');
                    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
                  }}
                  className="bg-trust-blue-dark text-white p-2 rounded-lg hover:bg-blue-800 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <ImageWithFallback
              src="/images/optimized/concrete.webp"
              alt="Concrete Debris Calculator - Calculate concrete waste volume and disposal costs"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              fallbackSrc="/images/concrete.jpg"
            />
          </div>

          {/* Calculator Section */}
          <section className="mb-16">
            <ConcreteCalculator />
          </section>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Understanding Concrete Calculations</h2>
            <p>
              Whether you're planning a new construction project and need to calculate how much concrete to order, or 
              you're removing existing concrete and need to estimate disposal costs, accurate calculations are essential 
              for proper planning and budgeting.
            </p>

            <h3>How to Calculate Concrete Volume</h3>
            <p>
              Calculating concrete volume requires understanding the dimensions and thickness of the concrete structure. 
              Our calculator supports multiple shapes including slabs, footings, columns, circular structures, curbs, and stairs:
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Concrete Volume Calculation Formula</h4>
              <p className="text-trust-blue-dark">
                <strong>Volume = Length × Width × Thickness (in feet)</strong>
              </p>
              <p className="text-trust-blue-dark">
                <strong>Cubic Yards = Volume ÷ 27</strong>
              </p>
              <ul className="text-trust-blue-dark mt-3 space-y-1">
                <li>• <strong>1 cubic yard = 27 cubic feet</strong></li>
                <li>• <strong>Convert inches to feet:</strong> Divide by 12 (e.g., 4" = 0.33 feet)</li>
                <li>• <strong>Example:</strong> 20' × 20' × 0.33' = 132 cubic feet ÷ 27 = 4.9 cubic yards</li>
              </ul>
            </div>

            <h3>Common Concrete Structures and Their Calculations</h3>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Driveway Removal</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Average size: 20' × 20' × 4"</li>
                  <li>• Volume: 5 cubic yards</li>
                  <li>• Weight: ~12.5 tons</li>
                  <li>• Recommended: 20-yard dumpster</li>
                  <li>• Cost: $400-600</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Sidewalk Removal</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Average size: 50' × 4' × 4"</li>
                  <li>• Volume: 2.5 cubic yards</li>
                  <li>• Weight: ~6.25 tons</li>
                  <li>• Recommended: 15-yard dumpster</li>
                  <li>• Cost: $300-500</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Patio Removal</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Average size: 15' × 15' × 4"</li>
                  <li>• Volume: 3.3 cubic yards</li>
                  <li>• Weight: ~8.25 tons</li>
                  <li>• Recommended: 20-yard dumpster</li>
                  <li>• Cost: $400-600</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Foundation Removal</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Average size: 30' × 40' × 8"</li>
                  <li>• Volume: 30 cubic yards</li>
                  <li>• Weight: ~75 tons</li>
                  <li>• Recommended: Multiple dumpsters</li>
                  <li>• Cost: $1,500-2,500</li>
                </ul>
              </div>
            </div>

            <h3>Concrete Weight Calculations</h3>
            <p>
              Understanding concrete weight is crucial for proper dumpster sizing and cost estimation:
            </p>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Concrete Type</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Weight per Cubic Yard</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Weight per Cubic Foot</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Common Uses</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Standard Concrete</td>
                    <td className="px-4 py-3 text-sm text-gray-700">2.5 tons</td>
                    <td className="px-4 py-3 text-sm text-gray-700">150 lbs</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Driveways, sidewalks</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Reinforced Concrete</td>
                    <td className="px-4 py-3 text-sm text-gray-700">2.7-3.0 tons</td>
                    <td className="px-4 py-3 text-sm text-gray-700">160-180 lbs</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Foundations, structures</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Lightweight Concrete</td>
                    <td className="px-4 py-3 text-sm text-gray-700">1.5-2.0 tons</td>
                    <td className="px-4 py-3 text-sm text-gray-700">90-120 lbs</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Decorative elements</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Concrete with Rebar</td>
                    <td className="px-4 py-3 text-sm text-gray-700">2.6-2.8 tons</td>
                    <td className="px-4 py-3 text-sm text-gray-700">155-170 lbs</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Structural elements</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3><Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link> Requirements for Concrete Debris</h3>
            <p>
              Due to its weight, concrete debris requires careful dumpster sizing:
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
              <h4 className="text-lg font-semibold text-yellow-900 mb-3">⚠️ Important Weight Considerations</h4>
              <ul className="text-yellow-800 space-y-2">
                <li><strong>Weight Limits:</strong> Concrete will likely reach weight limits before volume limits</li>
                <li><strong>Dumpster Sizing:</strong> You'll need larger dumpsters than volume suggests</li>
                <li><strong>Multiple Pickups:</strong> Large projects may require multiple dumpsters</li>
                <li><strong>Breaking Required:</strong> Large concrete pieces may need to be broken down</li>
                <li><strong>Special Equipment:</strong> May require heavy equipment for loading</li>
              </ul>
            </div>

            <h3>Step-by-Step Concrete Debris Calculation</h3>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg my-6">
              <h4 className="text-lg font-semibold text-purple-900 mb-3">Calculation Process</h4>
              <ol className="text-teal-800 space-y-2">
                <li><strong>Measure Dimensions:</strong> Length × Width × Thickness</li>
                <li><strong>Convert Units:</strong> Ensure all measurements are in feet</li>
                <li><strong>Calculate Volume:</strong> Multiply dimensions to get cubic feet</li>
                <li><strong>Convert to Cubic Yards:</strong> Divide by 27</li>
                <li><strong>Calculate Weight:</strong> Multiply by 2.5 tons per cubic yard</li>
                <li><strong>Add Waste Factor:</strong> Add 10-20% for irregular shapes</li>
                <li><strong>Choose <Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link>:</strong> Based on weight capacity</li>
              </ol>
            </div>

            <h3>Concrete Debris Disposal Cost Factors</h3>
            <p>
              Several factors influence concrete debris disposal costs:
            </p>
            <ul>
              <li><strong>Volume and Weight:</strong> Larger volumes and heavier loads cost more</li>
              <li><strong>Breaking Requirements:</strong> Large pieces may need to be broken down</li>
              <li><strong>Reinforcement Materials:</strong> Rebar and other materials affect weight</li>
              <li><strong>Location:</strong> Distance from disposal facilities affects <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link></li>
              <li><strong>Recycling Options:</strong> Some concrete can be recycled for reduced costs</li>
            </ul>

            <h3>Tips for Cost-Effective Concrete Debris Disposal</h3>
            <ol>
              <li><strong>Break Down Large Pieces:</strong> Smaller pieces are easier to load and transport</li>
              <li><strong>Separate Materials:</strong> Remove rebar and other metals for recycling</li>
              <li><strong>Consider Recycling:</strong> Many concrete materials can be recycled</li>
              <li><strong>Plan Multiple Pickups:</strong> For large projects, consider staged disposal</li>
              <li><strong>Optimize Loading:</strong> Distribute weight evenly in the dumpster</li>
            </ol>

            <h3>Concrete Recycling and Environmental Benefits</h3>
            <p>
              Concrete debris doesn't have to be wasted. Many concrete materials can be recycled:
            </p>
            <ul>
              <li><strong>Crushed Concrete:</strong> Can be used as base material for new construction</li>
              <li><strong>Concrete Aggregate:</strong> Recycled concrete can replace natural aggregates</li>
              <li><strong>Environmental Benefits:</strong> Reduces landfill waste and natural resource consumption</li>
              <li><strong>Cost Savings:</strong> Recycling may reduce disposal costs</li>
            </ul>

            <h3>Why Choose Icon Dumpsters for Concrete Debris Disposal?</h3>
            <p>
              Icon Dumpsters specializes in concrete debris disposal with:
            </p>
            <ul>
              <li><strong>Heavy-Duty Equipment:</strong> Dumpsters designed for heavy concrete loads</li>
              <li><strong>Experience:</strong> Years of experience handling concrete disposal projects</li>
              <li><strong>Recycling Partnerships:</strong> Connections with concrete recycling facilities</li>
              <li><strong>Accurate <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link>:</strong> Transparent <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link> with no hidden fees</li>
              <li><strong>Professional Service:</strong> Expert advice on concrete disposal requirements</li>
            </ul>

            <div className="bg-teal-50 p-8 rounded-lg my-8 text-center">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Ready to Calculate Your Concrete Debris Disposal Costs?</h3>
              <p className="text-teal-800 mb-6">
                Use our concrete debris calculator above to get an instant quote, or call us at <strong>(801) 918-6000</strong> 
                for personalized assistance with your concrete debris disposal project.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                <Link 
                  href="https://icondumpsters.com/#quote-form" 
                  className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold inline-block"
                >
                  Get Your Free Quote
                </Link>
                <Link 
                  href="/demolition-dumpster" 
                  className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold inline-block"
                >
                  View Demolition Dumpsters
                </Link>
              </div>
            </div>

            {/* Related Calculators Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 my-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Other Dumpster Calculators
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/dumpster-calculator" className="block p-6 bg-teal-50 rounded-xl border-2 border-teal-200 hover:border-teal-400 transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">All Calculators</h3>
                  <p className="text-sm text-gray-600 mb-3">Browse our complete suite of dumpster calculators</p>
                  <span className="text-teal-600 font-semibold">View All →</span>
                </Link>
                <Link href="/dumpster-calculator/quote" className="block p-6 bg-blue-50 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Quote Calculator</h3>
                  <p className="text-sm text-gray-600 mb-3">Get instant pricing estimates for your dumpster rental</p>
                  <span className="text-blue-600 font-semibold">Get Quote →</span>
                </Link>
                <Link href="/dumpster-size-calculator" className="block p-6 bg-purple-50 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Size Calculator</h3>
                  <p className="text-sm text-gray-600 mb-3">Find the perfect dumpster size for your project</p>
                  <span className="text-purple-600 font-semibold">Calculate Size →</span>
                </Link>
                <Link href="/tonnage-calculator" className="block p-6 bg-orange-50 rounded-xl border-2 border-orange-200 hover:border-orange-400 transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Tonnage Calculator</h3>
                  <p className="text-sm text-gray-600 mb-3">Estimate material weights to avoid overweight charges</p>
                  <span className="text-orange-600 font-semibold">Calculate Weight →</span>
                </Link>
                <Link href="/demolition-calculator" className="block p-6 bg-red-50 rounded-xl border-2 border-red-200 hover:border-red-400 transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Demolition Calculator</h3>
                  <p className="text-sm text-gray-600 mb-3">Calculate dumpster needs for demolition projects</p>
                  <span className="text-red-600 font-semibold">Calculate →</span>
                </Link>
                <Link href="/roofing-calculator" className="block p-6 bg-purple-50 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Roofing Calculator</h3>
                  <p className="text-sm text-gray-600 mb-3">Estimate dumpster size for roofing projects</p>
                  <span className="text-purple-600 font-semibold">Calculate →</span>
                </Link>
                <Link href="/dumpster-calculator-for-concrete" className="block p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Concrete Calculator (Alt)</h3>
                  <p className="text-sm text-gray-600 mb-3">Alternative concrete disposal calculator</p>
                  <span className="text-gray-600 font-semibold">Calculate →</span>
                </Link>
                <Link href="/demolition-dumpster" className="block p-6 bg-orange-50 rounded-xl border-2 border-orange-300 hover:border-orange-500 transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Demolition Dumpster Guide</h3>
                  <p className="text-sm text-gray-600 mb-3">Commercial demolition dumpsters for contractors</p>
                  <span className="text-orange-600 font-semibold">Learn More →</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
