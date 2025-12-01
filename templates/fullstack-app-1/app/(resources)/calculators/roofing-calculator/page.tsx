"use client";

import ImageWithFallback from "@/app/components/ImageWithFallback";
import RelatedPages from '@/app/components/RelatedPages';
import Link from "next/link";
import Analytics from "@/app/components/PageAnalytics";
import ArticleSchema from "@/app/components/ArticleSchema";
import DumpsterCalculator from "@/app/components/DumpsterCalculator";
import FAQSchema from "@/app/components/FAQSchema";

export default function RoofingDumpsterCalculator() {
  return (
    <>
      <Analytics
        pageName="Roofing Dumpster Calculator: Calculate Roofing Waste Disposal Costs"
        pageType="article"
        articleId="roofing-dumpster-calculator"
      />
      <ArticleSchema
        title="Roofing Dumpster Calculator: Calculate Roofing Waste Disposal Costs"
        description="Use our roofing dumpster calculator to estimate the right dumpster size and costs for roofing waste disposal. Calculate roofing material weight, volume, and rental costs for Utah projects."
        author="Icon Dumpsters"
        publishedDate="2025-01-27"
        modifiedDate="2025-01-27"
        imageUrl="/images/dumpsterSmallBanner4.jpeg"
        articleUrl="https://icondumpsters.com/roofing-dumpster-calculator"
        category="ROOFING"
        readTime="PT9M"
      />
      <FAQSchema
        pageUrl="https://icondumpsters.com/roofing-dumpster-calculator"
        faqs={[
          {
            question: "How much roofing waste does a typical roof replacement generate?",
            answer: "A typical roof replacement generates 1-2 tons of waste per 1,000 square feet of roof area. For a 2,000 sq ft home, you can expect 2-4 tons of roofing waste. Our roofing dumpster calculator can help you estimate the exact amount for your project."
          },
          {
            question: "What size dumpster do I need for roofing waste?",
            answer: "For roofing projects, you typically need a 20-yard or 30-yard dumpster. A 20-yard dumpster can handle most residential roof replacements (up to 3,000 sq ft), while a 30-yard dumpster is better for larger homes or commercial projects. Use our calculator for precise estimates."
          },
          {
            question: "How much does it cost to dispose of roofing waste?",
            answer: "Roofing waste disposal costs vary by project size and location. In Utah, roofing waste disposal typically costs $400-600 for a 20-yard dumpster and $500-800 for a 30-yard dumpster. Our calculator provides instant pricing based on your specific project."
          },
          {
            question: "Can I put roofing materials in a regular dumpster?",
            answer: "Yes, you can put roofing materials in a regular roll-off dumpster. However, roofing waste can be heavy and bulky, so you'll likely need a larger dumpster than you would for general construction waste. Always check weight limits before loading."
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
              <li className="text-gray-900 font-medium">Roofing Dumpster Calculator</li>
            </ol>
          </nav>

          {/* Article Meta */}
          <header className="mb-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-6 text-sm text-gray-600">
              <span className="bg-action-orange text-white px-3 py-1 rounded-full text-xs font-semibold">ROOFING</span>
              <span>9 min read</span>
              <span>•</span>
              <span>January 27, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Roofing Dumpster Calculator: Calculate Roofing Waste Disposal Costs
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Use our roofing dumpster calculator to estimate the right <Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link> and costs for roofing waste disposal. 
              Calculate roofing material weight, volume, and rental costs for Utah projects with accurate <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link>.
            </p>
            
            {/* Social Sharing */}
            <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-200">
              <span className="text-sm text-gray-600 font-medium">Share this article:</span>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    const title = encodeURIComponent('Roofing Dumpster Calculator: Calculate Roofing Waste Disposal Costs');
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
                    const title = encodeURIComponent('Roofing Dumpster Calculator: Calculate Roofing Waste Disposal Costs');
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
                    const title = encodeURIComponent('Roofing Dumpster Calculator: Calculate Roofing Waste Disposal Costs');
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
              src="/images/optimized/dumpsterSmallBanner4.webp"
              alt="Roofing Dumpster Calculator - Calculate roofing waste disposal costs and dumpster size requirements"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              fallbackSrc="/images/dumpsterSmallBanner4.webp"
            />
          </div>

          {/* Calculator Section */}
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Roofing Dumpster Calculator</h2>
              <p className="text-lg text-gray-600 mb-6">
                Calculate the perfect <Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link> and cost for your roofing project. Enter your project details below.
              </p>
            </div>
            <DumpsterCalculator />
          </section>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Understanding Roofing Waste Disposal Requirements</h2>
            <p>
              Roofing projects generate significant amounts of waste that require proper planning and disposal. Whether you're replacing 
              shingles, removing an entire roof, or doing a tear-off project, our roofing dumpster calculator helps you estimate the 
              right <Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link> and understand the costs involved.
            </p>

            <h3>Types of Roofing Waste and Their Characteristics</h3>
            <p>
              Roofing waste varies significantly depending on the type of roofing material being removed:
            </p>
            <ul>
              <li><strong>Asphalt Shingles:</strong> Most common, relatively heavy, can be recycled</li>
              <li><strong>Wood Shakes/Shingles:</strong> Lighter weight, may contain preservatives</li>
              <li><strong>Metal Roofing:</strong> Heavy but recyclable, valuable scrap material</li>
              <li><strong>Tile Roofing:</strong> Very heavy, fragile, requires careful handling</li>
              <li><strong>Slate Roofing:</strong> Extremely heavy, valuable for reuse</li>
              <li><strong>Underlayment:</strong> Lightweight but bulky, includes felt paper and synthetic materials</li>
            </ul>

            <h3>Calculating Roofing Waste Volume and Weight</h3>
            <p>
              To accurately estimate your roofing dumpster needs, consider these factors:
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Roofing Waste Estimation Formula</h4>
              <p className="text-trust-blue-dark">
                <strong>Waste Volume = Roof Area × Waste Factor × Number of Layers</strong>
              </p>
              <ul className="text-trust-blue-dark mt-3 space-y-1">
                <li>• <strong>Asphalt Shingles:</strong> 1-2 tons per 1,000 sq ft (single layer)</li>
                <li>• <strong>Wood Shakes:</strong> 0.5-1 ton per 1,000 sq ft</li>
                <li>• <strong>Metal Roofing:</strong> 1-1.5 tons per 1,000 sq ft</li>
                <li>• <strong>Tile Roofing:</strong> 2-3 tons per 1,000 sq ft</li>
                <li>• <strong>Waste Factor:</strong> Add 10-20% for underlayment and debris</li>
              </ul>
            </div>

            <h3>Common Roofing Project Scenarios</h3>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Small Residential Roof</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• 1,500 sq ft roof area</li>
                  <li>• Single layer asphalt shingles</li>
                  <li>• Waste: ~2-3 tons</li>
                  <li>• Recommended: 15-yard dumpster</li>
                  <li>• Cost: $300-500</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Medium Residential Roof</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• 2,500 sq ft roof area</li>
                  <li>• Double layer asphalt shingles</li>
                  <li>• Waste: ~5-6 tons</li>
                  <li>• Recommended: 20-yard dumpster</li>
                  <li>• Cost: $400-600</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Large Residential Roof</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• 3,500 sq ft roof area</li>
                  <li>• Multiple layers or tile roofing</li>
                  <li>• Waste: ~8-10 tons</li>
                  <li>• Recommended: 30-yard dumpster</li>
                  <li>• Cost: $500-800</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Commercial Roof</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• 5,000+ sq ft roof area</li>
                  <li>• Commercial roofing materials</li>
                  <li>• Waste: 12+ tons</li>
                  <li>• Recommended: Multiple dumpsters</li>
                  <li>• Cost: $800-1,500</li>
                </ul>
              </div>
            </div>

            <h3><Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link> Guidelines for Roofing Projects</h3>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900"><Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link></th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Roof Area Capacity</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Weight Limit</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Typical Cost</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">15-Yard</td>
                    <td className="px-4 py-3 text-sm text-gray-700">1,500-2,000 sq ft</td>
                    <td className="px-4 py-3 text-sm text-gray-700">3 tons</td>
                    <td className="px-4 py-3 text-sm text-gray-700">$300-500</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Small homes, single layer</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">20-Yard</td>
                    <td className="px-4 py-3 text-sm text-gray-700">2,000-3,000 sq ft</td>
                    <td className="px-4 py-3 text-sm text-gray-700">4 tons</td>
                    <td className="px-4 py-3 text-sm text-gray-700">$400-600</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Medium homes, double layer</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">30-Yard</td>
                    <td className="px-4 py-3 text-sm text-gray-700">3,000-5,000 sq ft</td>
                    <td className="px-4 py-3 text-sm text-gray-700">6 tons</td>
                    <td className="px-4 py-3 text-sm text-gray-700">$500-800</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Large homes, tile roofs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Calculating Your Roof Area</h3>
            <p>
              To use our roofing dumpster calculator effectively, you need to calculate your roof area:
            </p>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg my-6">
              <h4 className="text-lg font-semibold text-purple-900 mb-3">Roof Area Calculation</h4>
              <p className="text-teal-800 mb-3">
                <strong>For Simple Gable Roofs:</strong> Length × Width × Pitch Factor
              </p>
              <p className="text-teal-800 mb-3">
                <strong>Pitch Factors:</strong>
              </p>
              <ul className="text-teal-800 space-y-1">
                <li>• 4/12 pitch: 1.06</li>
                <li>• 6/12 pitch: 1.12</li>
                <li>• 8/12 pitch: 1.20</li>
                <li>• 10/12 pitch: 1.30</li>
                <li>• 12/12 pitch: 1.41</li>
              </ul>
              <p className="text-teal-800 mt-3">
                <strong>Example:</strong> 40' × 30' × 1.12 (6/12 pitch) = 1,344 sq ft
              </p>
            </div>

            <h3>Special Considerations for Roofing Projects</h3>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
              <h4 className="text-lg font-semibold text-yellow-900 mb-3">⚠️ Important Roofing Disposal Notes</h4>
              <ul className="text-yellow-800 space-y-2">
                <li><strong>Weather Considerations:</strong> Rain can significantly increase weight of roofing materials</li>
                <li><strong>Multiple Layers:</strong> Each layer adds weight and volume to disposal needs</li>
                <li><strong>Underlayment:</strong> Don't forget to account for felt paper and synthetic underlayment</li>
                <li><strong>Nails and Fasteners:</strong> These add weight and can damage dumpster liners</li>
                <li><strong>Recycling Options:</strong> Asphalt shingles can often be recycled for cost savings</li>
              </ul>
            </div>

            <h3>Cost Factors for Roofing Waste Disposal</h3>
            <p>
              Several factors influence roofing waste disposal costs:
            </p>
            <ul>
              <li><strong>Roof Size:</strong> Larger roofs generate more waste and require larger dumpsters</li>
              <li><strong>Material Type:</strong> Different roofing materials have different weights and disposal costs</li>
              <li><strong>Number of Layers:</strong> Multiple layers increase weight and volume</li>
              <li><strong>Location:</strong> Distance from disposal facilities affects <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link></li>
              <li><strong>Recycling Options:</strong> Some materials can be recycled for reduced costs</li>
            </ul>

            <h3>Tips for Cost-Effective Roofing Waste Disposal</h3>
            <ol>
              <li><strong>Plan Ahead:</strong> Schedule your dumpster delivery before starting the roof tear-off</li>
              <li><strong>Separate Materials:</strong> Separate recyclable materials to reduce disposal costs</li>
              <li><strong>Optimize Loading:</strong> Load materials efficiently to maximize dumpster capacity</li>
              <li><strong>Consider Recycling:</strong> Asphalt shingles can often be recycled for cost savings</li>
              <li><strong>Weather Planning:</strong> Avoid loading wet materials which weigh significantly more</li>
            </ol>

            <h3>Roofing Material Recycling and Environmental Benefits</h3>
            <p>
              Many roofing materials can be recycled, providing both environmental and cost benefits:
            </p>
            <ul>
              <li><strong>Asphalt Shingles:</strong> Can be ground and used in new asphalt products</li>
              <li><strong>Metal Roofing:</strong> Highly recyclable and valuable as scrap</li>
              <li><strong>Wood Shakes:</strong> Can be chipped for mulch or biomass fuel</li>
              <li><strong>Tile Roofing:</strong> Can often be reused or crushed for aggregate</li>
              <li><strong>Environmental Benefits:</strong> Reduces landfill waste and conserves natural resources</li>
            </ul>

            <h3>Why Choose Icon Dumpsters for Roofing Projects?</h3>
            <p>
              Icon Dumpsters specializes in roofing waste disposal with:
            </p>
            <ul>
              <li><strong>Experience:</strong> Years of experience handling roofing waste disposal projects</li>
              <li><strong>Proper Equipment:</strong> Dumpsters designed for heavy roofing materials</li>
              <li><strong>Recycling Partnerships:</strong> Connections with roofing material recycling facilities</li>
              <li><strong>Flexible Scheduling:</strong> Delivery and pickup times that work with your project timeline</li>
              <li><strong>Competitive <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link>:</strong> Transparent <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link> with no hidden fees</li>
            </ul>

            <div className="bg-teal-50 p-8 rounded-lg my-8 text-center">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Ready to Calculate Your Roofing Waste Disposal Costs?</h3>
              <p className="text-teal-800 mb-6">
                Use our roofing dumpster calculator above to get an instant quote, or call us at <strong>(801) 918-6000</strong> 
                for personalized assistance with your roofing waste disposal project.
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
                  Commercial Demolition Dumpsters
                </Link>
              </div>
              <p className="text-sm text-teal-700 mt-4">
                <Link href="/demolition-dumpster" className="underline font-semibold">Roofing professionals:</Link> Check out our demolition dumpster page for specialized solutions designed for contractors and commercial projects.
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
                <Link href="/dumpster-calculator-for-concrete" className="block p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Concrete Calculator</h3>
                  <p className="text-sm text-gray-600 mb-3">Calculate concrete disposal costs and dumpster size</p>
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
