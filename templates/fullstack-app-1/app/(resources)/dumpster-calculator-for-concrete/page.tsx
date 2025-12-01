"use client";

import ImageWithFallback from "@/app/components/ImageWithFallback";
import RelatedPages from '@/app/components/RelatedPages';
import Link from "next/link";
import Analytics from "@/app/components/PageAnalytics";
import ArticleSchema from "@/app/components/ArticleSchema";
import DumpsterCalculator from "@/app/components/DumpsterCalculator";
import FAQSchema from "@/app/components/FAQSchema";

export default function DumpsterCalculatorForConcrete() {
  return (
    <>
      <Analytics
        pageName="Dumpster Calculator for Concrete: Estimate Concrete Disposal Costs"
        pageType="article"
        articleId="dumpster-calculator-for-concrete"
      />
      <ArticleSchema
        title="Dumpster Calculator for Concrete: Estimate Concrete Disposal Costs"
        description="Use our concrete dumpster calculator to estimate the right dumpster size and costs for concrete disposal. Calculate concrete weight, volume, and rental costs for Utah projects."
        author="Icon Dumpsters"
        publishedDate="2025-01-27"
        modifiedDate="2025-01-27"
        imageUrl="/images/concrete.webp"
        articleUrl="https://icondumpsters.com/dumpster-calculator-for-concrete"
        category="CONCRETE"
        readTime="PT8M"
      />
      <FAQSchema
        pageUrl="https://icondumpsters.com/dumpster-calculator-for-concrete"
        faqs={[
          {
            question: "How much does concrete weigh per cubic yard?",
            answer: "Concrete typically weighs 2.5 tons (5,000 pounds) per cubic yard. This weight can vary slightly depending on the concrete mix, moisture content, and reinforcement materials. Our concrete dumpster calculator accounts for these variations."
          },
          {
            question: "What size dumpster do I need for concrete disposal?",
            answer: "For concrete disposal, you typically need a larger dumpster due to the weight. A 20-yard dumpster can hold about 8 cubic yards of concrete (20 tons), while a 30-yard dumpster can hold 12 cubic yards (30 tons). Use our calculator for precise estimates."
          },
          {
            question: "How much does it cost to dispose of concrete?",
            answer: "Concrete disposal costs vary by location and dumpster size. In Utah, concrete disposal typically costs $400-800 for a 20-yard dumpster and $500-1000 for a 30-yard dumpster. Our calculator provides instant pricing based on your specific project."
          },
          {
            question: "Can I put concrete in a regular dumpster?",
            answer: "Yes, you can put concrete in a regular roll-off dumpster, but you need to consider weight limits. Concrete is very heavy, so you'll likely need a larger dumpster than you would for other materials. Always check weight limits before loading."
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
              <li className="text-gray-900 font-medium">Concrete Dumpster Calculator</li>
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
              Dumpster Calculator for Concrete: Estimate Concrete Disposal Costs
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Use our concrete dumpster calculator to estimate the right <Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link> and costs for concrete disposal. 
              Calculate concrete weight, volume, and rental costs for Utah projects with accurate <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link>.
            </p>
            
            {/* Social Sharing */}
            <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-200">
              <span className="text-sm text-gray-600 font-medium">Share this article:</span>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    const title = encodeURIComponent('Dumpster Calculator for Concrete: Estimate Concrete Disposal Costs');
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
                    const title = encodeURIComponent('Dumpster Calculator for Concrete: Estimate Concrete Disposal Costs');
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
                    const title = encodeURIComponent('Dumpster Calculator for Concrete: Estimate Concrete Disposal Costs');
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
              alt="Concrete Dumpster Calculator - Calculate concrete disposal costs and dumpster size requirements"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              fallbackSrc="/images/concrete.jpg"
            />
          </div>

          {/* Calculator Section */}
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Concrete Dumpster Calculator</h2>
              <p className="text-lg text-gray-600 mb-6">
                Calculate the perfect <Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link> and cost for your concrete disposal project. Enter your project details below.
              </p>
            </div>
            <DumpsterCalculator />
          </section>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Understanding Concrete Disposal Requirements</h2>
            <p>
              Concrete disposal is one of the most challenging aspects of construction and demolition projects due to its weight and volume. 
              Our concrete dumpster calculator helps you accurately estimate the <Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link> and costs needed for your concrete disposal project.
            </p>

            <h3>Why Concrete Disposal Requires Special Planning</h3>
            <p>
              Concrete is significantly heavier than most construction materials, which means:
            </p>
            <ul>
              <li><strong>Weight Limits:</strong> You'll reach dumpster weight limits before volume limits</li>
              <li><strong>Transportation Costs:</strong> Heavy loads require special equipment and permits</li>
              <li><strong>Disposal Fees:</strong> Concrete disposal often has different <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link> than general waste</li>
              <li><strong>Processing Requirements:</strong> Concrete may need to be crushed or recycled</li>
            </ul>

            <h3>Concrete Weight Calculations</h3>
            <p>
              Understanding concrete weight is crucial for proper dumpster sizing:
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Concrete Weight Formula</h4>
              <p className="text-trust-blue-dark">
                <strong>Concrete Weight = Volume × Density</strong>
              </p>
              <ul className="text-trust-blue-dark mt-3 space-y-1">
                <li>• <strong>Standard Concrete:</strong> 2.5 tons per cubic yard (5,000 lbs)</li>
                <li>• <strong>Reinforced Concrete:</strong> 2.7-3.0 tons per cubic yard</li>
                <li>• <strong>Lightweight Concrete:</strong> 1.5-2.0 tons per cubic yard</li>
                <li>• <strong>Concrete with Rebar:</strong> Add 0.1-0.2 tons per cubic yard</li>
              </ul>
            </div>

            <h3>Common Concrete Disposal Scenarios</h3>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Driveway Removal</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Average driveway: 20' × 20' × 4" = 5 cubic yards</li>
                  <li>• Weight: ~12.5 tons</li>
                  <li>• Recommended: 20-yard dumpster</li>
                  <li>• Cost: $400-600</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Foundation Removal</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Small foundation: 30' × 40' × 8" = 30 cubic yards</li>
                  <li>• Weight: ~75 tons</li>
                  <li>• Recommended: Multiple 30-yard dumpsters</li>
                  <li>• Cost: $1,500-2,500</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Sidewalk Removal</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Average sidewalk: 50' × 4' × 4" = 2.5 cubic yards</li>
                  <li>• Weight: ~6.25 tons</li>
                  <li>• Recommended: 15-yard dumpster</li>
                  <li>• Cost: $300-500</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Patio Removal</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Average patio: 15' × 15' × 4" = 3.3 cubic yards</li>
                  <li>• Weight: ~8.25 tons</li>
                  <li>• Recommended: 20-yard dumpster</li>
                  <li>• Cost: $400-600</li>
                </ul>
              </div>
            </div>

            <h3><Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link> Guidelines for Concrete Projects</h3>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900"><Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link></th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Concrete Capacity</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Weight Limit</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Typical Cost</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">15-Yard</td>
                    <td className="px-4 py-3 text-sm text-gray-700">6 cubic yards</td>
                    <td className="px-4 py-3 text-sm text-gray-700">3 tons</td>
                    <td className="px-4 py-3 text-sm text-gray-700">$300-500</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Small patios, walkways</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">20-Yard</td>
                    <td className="px-4 py-3 text-sm text-gray-700">8 cubic yards</td>
                    <td className="px-4 py-3 text-sm text-gray-700">4 tons</td>
                    <td className="px-4 py-3 text-sm text-gray-700">$400-600</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Driveways, large patios</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">30-Yard</td>
                    <td className="px-4 py-3 text-sm text-gray-700">12 cubic yards</td>
                    <td className="px-4 py-3 text-sm text-gray-700">6 tons</td>
                    <td className="px-4 py-3 text-sm text-gray-700">$500-800</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Foundations, large projects</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Calculating Your Concrete Volume</h3>
            <p>
              To use our concrete dumpster calculator effectively, you need to estimate your concrete volume:
            </p>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg my-6">
              <h4 className="text-lg font-semibold text-purple-900 mb-3">Concrete Volume Calculation</h4>
              <p className="text-teal-800 mb-3">
                <strong>Volume = Length × Width × Thickness (in feet)</strong>
              </p>
              <p className="text-teal-800 mb-3">
                <strong>Convert to cubic yards: Volume ÷ 27</strong>
              </p>
              <p className="text-teal-800">
                <strong>Example:</strong> 20' × 20' × 0.33' (4 inches) = 132 cubic feet ÷ 27 = 4.9 cubic yards
              </p>
            </div>

            <h3>Special Considerations for Concrete Disposal</h3>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
              <h4 className="text-lg font-semibold text-yellow-900 mb-3">⚠️ Important Concrete Disposal Notes</h4>
              <ul className="text-yellow-800 space-y-2">
                <li><strong>Weight Limits:</strong> Concrete will likely reach weight limits before volume limits</li>
                <li><strong>Breaking Required:</strong> Large concrete pieces may need to be broken down</li>
                <li><strong>Reinforcement:</strong> Concrete with rebar weighs more and may require special handling</li>
                <li><strong>Moisture Content:</strong> Wet concrete weighs more than dry concrete</li>
                <li><strong>Recycling Options:</strong> Many concrete materials can be recycled for cost savings</li>
              </ul>
            </div>

            <h3>Cost Factors for Concrete Disposal</h3>
            <p>
              Several factors influence concrete disposal costs:
            </p>
            <ul>
              <li><strong>Volume and Weight:</strong> Larger volumes and heavier loads cost more</li>
              <li><strong>Location:</strong> Distance from disposal facilities affects <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link></li>
              <li><strong>Processing Requirements:</strong> Crushing or recycling may have additional costs</li>
              <li><strong>Equipment Needs:</strong> Special equipment for loading heavy concrete</li>
              <li><strong>Permits:</strong> Some areas require special permits for concrete disposal</li>
            </ul>

            <h3>Tips for Cost-Effective Concrete Disposal</h3>
            <ol>
              <li><strong>Break Down Large Pieces:</strong> Smaller pieces are easier to load and transport</li>
              <li><strong>Consider Recycling:</strong> Many concrete materials can be recycled for reduced costs</li>
              <li><strong>Optimize Loading:</strong> Distribute weight evenly in the dumpster</li>
              <li><strong>Plan Multiple Pickups:</strong> For large projects, consider staged disposal</li>
              <li><strong>Check Local Options:</strong> Some areas have concrete recycling facilities</li>
            </ol>

            <h3>Concrete Recycling and Environmental Benefits</h3>
            <p>
              Concrete disposal doesn't have to be wasteful. Many concrete materials can be recycled:
            </p>
            <ul>
              <li><strong>Crushed Concrete:</strong> Can be used as base material for new construction</li>
              <li><strong>Concrete Aggregate:</strong> Recycled concrete can replace natural aggregates</li>
              <li><strong>Environmental Benefits:</strong> Reduces landfill waste and natural resource consumption</li>
              <li><strong>Cost Savings:</strong> Recycling may reduce disposal costs</li>
            </ul>

            <h3>Why Choose Icon Dumpsters for Concrete Disposal?</h3>
            <p>
              Icon Dumpsters specializes in concrete disposal with:
            </p>
            <ul>
              <li><strong>Heavy-Duty Equipment:</strong> Dumpsters designed for heavy concrete loads</li>
              <li><strong>Experience:</strong> Years of experience handling concrete disposal projects</li>
              <li><strong>Recycling Partnerships:</strong> Connections with concrete recycling facilities</li>
              <li><strong>Accurate <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link>:</strong> Transparent <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link> with no hidden fees</li>
              <li><strong>Professional Service:</strong> Expert advice on concrete disposal requirements</li>
            </ul>

            <div className="bg-teal-50 p-8 rounded-lg my-8 text-center">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Ready to Calculate Your Concrete Disposal Costs?</h3>
              <p className="text-teal-800 mb-6">
                Use our concrete dumpster calculator above to get an instant quote, or call us at <strong>(801) 918-6000</strong> 
                for personalized assistance with your concrete disposal project.
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
                  View Demolition Dumpster Options
                </Link>
              </div>
              <p className="text-sm text-teal-700 mt-4">
                <Link href="/demolition-dumpster" className="underline font-semibold">Contractors and commercial projects:</Link> Our specialized 12-yard concrete dumpster offers flat-rate pricing with no weight limits - perfect for heavy concrete disposal.
              </p>
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
                <Link href="/concrete-debris-calculator" className="block p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Concrete Debris Calculator</h3>
                  <p className="text-sm text-gray-600 mb-3">Calculate concrete waste volume and disposal costs</p>
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
