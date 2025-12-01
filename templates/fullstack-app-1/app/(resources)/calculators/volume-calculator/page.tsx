"use client";

import ImageWithFallback from "@/app/components/ImageWithFallback";
import RelatedPages from '@/app/components/RelatedPages';
import Link from "next/link";
import Analytics from "@/app/components/PageAnalytics";
import ArticleSchema from "@/app/components/ArticleSchema";
import DumpsterCalculator from "@/app/components/DumpsterCalculator";
import FAQSchema from "@/app/components/FAQSchema";

export default function DumpsterVolumeCalculator() {
  return (
    <>
      <Analytics
        pageName="Dumpster Volume Calculator: Calculate Dumpster Capacity & Dimensions"
        pageType="article"
        articleId="dumpster-volume-calculator"
      />
      <ArticleSchema
        title="Dumpster Volume Calculator: Calculate Dumpster Capacity & Dimensions"
        description="Use our dumpster volume calculator to determine the right dumpster size for your project. Calculate dumpster dimensions, capacity, and volume requirements for Utah projects."
        author="Icon Dumpsters"
        publishedDate="2025-01-27"
        modifiedDate="2025-01-27"
        imageUrl="/images/dumpster500x500-2.jpeg"
        articleUrl="https://icondumpsters.com/dumpster-volume-calculator"
        category="CALCULATOR"
        readTime="PT7M"
      />
      <FAQSchema
        pageUrl="https://icondumpsters.com/dumpster-volume-calculator"
        faqs={[
          {
            question: "How do I calculate dumpster volume?",
            answer: "Dumpster volume is calculated by multiplying length × width × height. For example, a 20-yard dumpster is typically 17.08' × 7.54' × 5.00' which equals approximately 20 cubic yards. Our dumpster volume calculator can help you determine the exact volume you need."
          },
          {
            question: "What are the dimensions of different dumpster sizes?",
            answer: "15-yard dumpsters are typically 16&apos; × 8&apos; × 4.5&apos;, 20-yard dumpsters are 17.08&apos; × 7.54&apos; × 5.00&apos;, and 30-yard dumpsters are 18.25&apos; × 7.25&apos; × 6.63&apos;. These dimensions can vary slightly by manufacturer. Use our calculator to find the exact dimensions for your project."
          },
          {
            question: "How much can I fit in a 20-yard dumpster?",
            answer: "A 20-yard dumpster can hold approximately 20 cubic yards of material, which is equivalent to about 6 pickup truck loads or 10-12 tons of debris. This is enough for most home renovation projects or medium-sized construction jobs."
          },
          {
            question: "What's the difference between cubic yards and tons?",
            answer: "Cubic yards measure volume (space), while tons measure weight. Different materials have different densities, so 1 cubic yard of concrete weighs about 2.5 tons, while 1 cubic yard of wood weighs about 0.5 tons. Our calculator accounts for material density."
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
              <li className="text-gray-900 font-medium">Dumpster Volume Calculator</li>
            </ol>
          </nav>

          {/* Article Meta */}
          <header className="mb-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-6 text-sm text-gray-600">
              <span className="bg-trust-blue text-white px-3 py-1 rounded-full text-xs font-semibold">CALCULATOR</span>
              <span>7 min read</span>
              <span>•</span>
              <span>January 27, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Dumpster Volume Calculator: Calculate Dumpster Capacity & Dimensions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Use our dumpster volume calculator to determine the right <Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link> for your project. 
              Calculate dumpster dimensions, capacity, and volume requirements for Utah projects with accurate measurements.
            </p>
            
            {/* Social Sharing */}
            <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-200">
              <span className="text-sm text-gray-600 font-medium">Share this article:</span>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    const title = encodeURIComponent('Dumpster Volume Calculator: Calculate Dumpster Capacity & Dimensions');
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
                    const title = encodeURIComponent('Dumpster Volume Calculator: Calculate Dumpster Capacity & Dimensions');
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
                    const title = encodeURIComponent('Dumpster Volume Calculator: Calculate Dumpster Capacity & Dimensions');
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
              src="/images/optimized/dumpster500x500-2.webp"
              alt="Dumpster Volume Calculator - Calculate dumpster capacity and dimensions for your project"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              fallbackSrc="/images/dumpster500x500-2.webp"
            />
          </div>

          {/* Calculator Section */}
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Dumpster Volume Calculator</h2>
              <p className="text-lg text-gray-600 mb-6">
                Calculate the perfect <Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link> and volume for your project. Enter your project details below.
              </p>
            </div>
            <DumpsterCalculator />
          </section>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            {/* Content Outline Box */}
            <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border-l-4 border-purple-400">
              <h3 className="text-teal-800 font-bold mb-4 text-lg">📋 What You'll Learn in This Guide:</h3>
              <ul className="text-teal-700 space-y-2">
                <li>• Understanding Dumpster Volume Calculations</li>
                <li>• Standard Dumpster Dimensions and Capacities</li>
                <li>• Volume vs. Weight Considerations</li>
                <li>• Material Density and Volume Factors</li>
                <li>• How to Calculate Your Project Volume</li>
                <li>• Common Project Volume Examples</li>
                <li>• Tips for Accurate Volume Estimation</li>
                <li>• Cost Efficiency Through Proper Sizing</li>
              </ul>
            </div>

            <h2>Understanding Dumpster Volume and Capacity</h2>
            <p>
              Choosing the right <Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link> for your project requires understanding volume calculations and capacity limits. 
              Our dumpster volume calculator helps you determine the exact volume you need and ensures you don't overpay for 
              unnecessary capacity or underestimate your requirements.
            </p>

            <h3>How Dumpster Volume is Calculated</h3>
            <p>
              Dumpster volume is measured in cubic yards, which is the standard unit for construction and waste disposal:
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Volume Calculation Formula</h4>
              <p className="text-trust-blue-dark">
                <strong>Volume = Length × Width × Height (in feet)</strong>
              </p>
              <p className="text-trust-blue-dark">
                <strong>Cubic Yards = Volume ÷ 27</strong>
              </p>
              <ul className="text-trust-blue-dark mt-3 space-y-1">
                <li>• <strong>1 cubic yard = 27 cubic feet</strong></li>
                <li>• <strong>1 cubic yard = 3 feet × 3 feet × 3 feet</strong></li>
                <li>• <strong>Standard dumpster heights are typically 4.5-6 feet</strong></li>
              </ul>
            </div>

            <h3>Standard Dumpster Dimensions and Volumes</h3>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900"><Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link></th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Dimensions (L×W×H)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Volume (Cubic Yards)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Volume (Cubic Feet)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Weight Capacity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">15-Yard</td>
                    <td className="px-4 py-3 text-sm text-gray-700">16' × 8' × 4.5'</td>
                    <td className="px-4 py-3 text-sm text-gray-700">15 cubic yards</td>
                    <td className="px-4 py-3 text-sm text-gray-700">405 cubic feet</td>
                    <td className="px-4 py-3 text-sm text-gray-700">3 tons</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">20-Yard</td>
                    <td className="px-4 py-3 text-sm text-gray-700">22' × 8' × 4.5'</td>
                    <td className="px-4 py-3 text-sm text-gray-700">20 cubic yards</td>
                    <td className="px-4 py-3 text-sm text-gray-700">540 cubic feet</td>
                    <td className="px-4 py-3 text-sm text-gray-700">4 tons</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">30-Yard</td>
                    <td className="px-4 py-3 text-sm text-gray-700">18&apos; × 8&apos; × 6&apos;</td>
                    <td className="px-4 py-3 text-sm text-gray-700">30 cubic yards</td>
                    <td className="px-4 py-3 text-sm text-gray-700">810 cubic feet</td>
                    <td className="px-4 py-3 text-sm text-gray-700">6 tons</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Volume vs. Weight: Understanding the Difference</h3>
            <p>
              It's important to understand the difference between volume (space) and weight when choosing a dumpster:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Volume (Cubic Yards)</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Measures the space the dumpster can hold</li>
                  <li>• Important for bulky, lightweight materials</li>
                  <li>• Examples: cardboard, insulation, furniture</li>
                  <li>• You'll fill up before reaching weight limits</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Weight (<Link href="https://icondumpsters.com/tonnage-calculator" className="text-[#0d9488] hover:text-teal-700 underline font-semibold">Tons</Link>)</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Measures the weight the dumpster can hold</li>
                  <li>• Important for heavy, dense materials</li>
                  <li>• Examples: concrete, dirt, metal</li>
                  <li>• You'll reach weight limits before filling up</li>
                </ul>
              </div>
            </div>

            <h3>Material Density and Volume Calculations</h3>
            <p>
              Different materials have different densities, which affects how much you can fit in a dumpster:
            </p>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Material Type</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Weight per Cubic Yard</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Volume Factor</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">20-Yard Capacity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Cardboard/Paper</td>
                    <td className="px-4 py-3 text-sm text-gray-700">0.1 tons</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Volume limited</td>
                    <td className="px-4 py-3 text-sm text-gray-700">~15 cubic yards</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Wood/Lumber</td>
                    <td className="px-4 py-3 text-sm text-gray-700">0.5 tons</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Volume limited</td>
                    <td className="px-4 py-3 text-sm text-gray-700">~18 cubic yards</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Construction Debris</td>
                    <td className="px-4 py-3 text-sm text-gray-700">1.0 tons</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Balanced</td>
                    <td className="px-4 py-3 text-sm text-gray-700">~20 cubic yards</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Dirt/Soil</td>
                    <td className="px-4 py-3 text-sm text-gray-700">1.5 tons</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Weight limited</td>
                    <td className="px-4 py-3 text-sm text-gray-700">~13 cubic yards</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Concrete</td>
                    <td className="px-4 py-3 text-sm text-gray-700">2.5 tons</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Weight limited</td>
                    <td className="px-4 py-3 text-sm text-gray-700">~8 cubic yards</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>How to Calculate Your Project Volume</h3>
            <p>
              To accurately estimate your dumpster volume needs, follow these steps:
            </p>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg my-6">
              <h4 className="text-lg font-semibold text-purple-900 mb-3">Step-by-Step Volume Calculation</h4>
              <ol className="text-teal-800 space-y-2">
                <li><strong>Measure your project area:</strong> Length × Width × Height (if applicable)</li>
                <li><strong>Convert to cubic yards:</strong> Volume ÷ 27</li>
                <li><strong>Add waste factor:</strong> Multiply by 1.1-1.3 for typical projects</li>
                <li><strong>Consider material density:</strong> Heavy materials may require larger dumpsters</li>
                <li><strong>Use our calculator:</strong> For precise estimates based on your specific project</li>
              </ol>
            </div>

            <h3>Common Project Volume Examples</h3>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Kitchen Remodel</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• 200 sq ft kitchen</li>
                  <li>• Cabinets, countertops, appliances</li>
                  <li>• Volume: ~8-10 cubic yards</li>
                  <li>• Recommended: 15-yard dumpster</li>
                  <li>• Cost: $300-500</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Bathroom Remodel</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• 100 sq ft bathroom</li>
                  <li>• Tile, fixtures, drywall</li>
                  <li>• Volume: ~4-6 cubic yards</li>
                  <li>• Recommended: 15-yard dumpster</li>
                  <li>• Cost: $300-500</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Basement Cleanout</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• 1,000 sq ft basement</li>
                  <li>• Furniture, boxes, miscellaneous</li>
                  <li>• Volume: ~15-20 cubic yards</li>
                  <li>• Recommended: 20-yard dumpster</li>
                  <li>• Cost: $400-600</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Whole House Cleanout</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• 2,000 sq ft home</li>
                  <li>• Furniture, appliances, debris</li>
                  <li>• Volume: ~25-35 cubic yards</li>
                  <li>• Recommended: 30-yard dumpster</li>
                  <li>• Cost: $500-800</li>
                </ul>
              </div>
            </div>

            <h3>Tips for Accurate Volume Estimation</h3>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
              <h4 className="text-lg font-semibold text-yellow-900 mb-3">⚠️ Volume Estimation Tips</h4>
              <ul className="text-yellow-800 space-y-2">
                <li><strong>Overestimate rather than underestimate:</strong> It's better to have extra capacity</li>
                <li><strong>Consider material compression:</strong> Some materials compact when loaded</li>
                <li><strong>Account for irregular shapes:</strong> Use average dimensions for complex areas</li>
                <li><strong>Include all project phases:</strong> Don't forget demolition, construction, and cleanup</li>
                <li><strong>Plan for multiple pickups:</strong> Large projects may need staged disposal</li>
              </ul>
            </div>

            <h3>Why Volume Matters for Cost Efficiency</h3>
            <p>
              Understanding dumpster volume helps you optimize costs:
            </p>
            <ul>
              <li><strong>Right-sizing:</strong> Choose the smallest dumpster that meets your needs</li>
              <li><strong>Multiple dumpsters:</strong> Sometimes two smaller dumpsters cost less than one large one</li>
              <li><strong>Loading efficiency:</strong> Proper loading maximizes volume utilization</li>
              <li><strong>Project planning:</strong> Accurate volume estimates help with project scheduling</li>
            </ul>

            <h3>Using Our Dumpster Volume Calculator</h3>
            <p>
              Our dumpster volume calculator takes the guesswork out of sizing:
            </p>
            <ol>
              <li><strong>Enter project details:</strong> Specify your project type and size</li>
              <li><strong>Select materials:</strong> Choose the types of waste you'll be disposing</li>
              <li><strong>Get instant results:</strong> Receive accurate volume and cost estimates</li>
              <li><strong>Compare options:</strong> See different <Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link> and their costs</li>
              <li><strong>Book with confidence:</strong> Order the right size for your project</li>
            </ol>

            <h3>Why Choose Icon Dumpsters for Volume-Optimized Solutions?</h3>
            <p>
              Icon Dumpsters helps you get the most value from your dumpster rental:
            </p>
            <ul>
              <li><strong>Accurate Sizing:</strong> Our calculator ensures you get the right size</li>
              <li><strong>Expert Advice:</strong> Professional guidance on volume requirements</li>
              <li><strong>Flexible Options:</strong> Multiple <Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link> to meet your needs</li>
              <li><strong>Cost Transparency:</strong> Clear <Link href="/pricing/dumpster-prices" className="text-trust-blue hover:underline">pricing</Link> with no hidden fees</li>
              <li><strong>Efficient Service:</strong> Quick delivery and pickup to maximize your rental time</li>
            </ul>

            {/* Call to Action */}
            <div className="mt-12 p-8 bg-gradient-to-r from-[#0d9488] to-teal-700 rounded-xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Calculate Your Dumpster Volume Needs?</h3>
              <p className="text-purple-100 mb-6">
                Use our dumpster volume calculator above to get an instant quote, or call us for personalized assistance with your dumpster sizing and volume requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="https://icondumpsters.com/#quote-form" 
                  className="bg-white text-[#0d9488] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get <Link href="/#quote-form" className="text-trust-blue hover:underline">free quote</Link>
                </Link>
                <a 
                  href="tel:(801) 918-6000" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0d9488] transition-colors"
                >
                  Call (801) 918-6000
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="https://icondumpsters.com/demolition-dumpster-calculator" className="group">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <ImageWithFallback 
                    src="/images/optimized/dumpster500x500-1.webp" 
                    alt="Demolition Dumpster Calculator - Professional Utah Dumpster Services" 
                    className="group-hover:scale-105 transition-transform duration-500" 
                    fallbackSrc="/images/dumpster500x500-1.webp"
                    fill={true}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0d9488] transition-colors">
                    Demolition Dumpster Calculator: Calculate Your Project Needs & Costs
                  </h4>
                  <p className="text-gray-600">Use our demolition dumpster calculator to estimate the right <Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link>, weight capacity, and rental costs for your demolition project.</p>
                </div>
              </div>
            </Link>
            
            <Link href="https://icondumpsters.com/dumpster-calculator-for-concrete" className="group">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <ImageWithFallback 
                    src="/images/optimized/concrete.webp" 
                    alt="Dumpster Calculator for Concrete - Utah Dumpster Rental for Concrete Disposal" 
                    className="group-hover:scale-105 transition-transform duration-500" 
                    fallbackSrc="/images/concrete.jpg"
                    fill={true}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0d9488] transition-colors">
                    Dumpster Calculator for Concrete: Estimate Concrete Disposal Costs
                  </h4>
                  <p className="text-gray-600">Use our concrete dumpster calculator to estimate the right <Link href="/guides/dumpster-sizes" className="text-trust-blue hover:underline">dumpster sizes</Link> and costs for concrete disposal and demolition projects.</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
