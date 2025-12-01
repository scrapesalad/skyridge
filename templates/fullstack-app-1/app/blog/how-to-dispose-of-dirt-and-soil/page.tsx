import { Metadata } from 'next'
import ImageWithFallback from '../../components/ImageWithFallback'
import Link from 'next/link'
import RelatedPages from '../../components/RelatedPages'
import FAQSchema from '../../components/FAQSchema'

export const metadata: Metadata = {
  title: 'How to Dispose of Dirt and Soil: Complete Guide for Landscaping & Excavation Projects',
  description: 'Learn how to properly dispose of dirt and soil from landscaping, excavation, and construction projects. Complete guide covering disposal methods, costs, dumpster rental, and recycling options.',
  keywords: 'how to dispose of dirt, soil disposal, dirt removal, landscaping dirt disposal, excavation dirt removal, dirt dumpster rental, soil dumpster, fill dirt disposal',
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'How to Dispose of Dirt and Soil: Complete Guide for Landscaping & Excavation Projects',
    description: 'Learn how to properly dispose of dirt and soil from landscaping, excavation, and construction projects. Complete guide covering disposal methods, costs, and dumpster rental.',
    type: 'article',
    url: 'https://icondumpsters.com/blog/how-to-dispose-of-dirt-and-soil',
    images: [
      {
        url: '/images/result.png',
        width: 1200,
        height: 630,
        alt: 'How to dispose of dirt and soil - complete guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Dispose of Dirt and Soil: Complete Guide for Landscaping & Excavation Projects',
    description: 'Learn how to properly dispose of dirt and soil from landscaping, excavation, and construction projects.',
    images: ['/images/result.png']
  },
  alternates: { canonical: 'https://icondumpsters.com/blog/how-to-dispose-of-dirt-and-soil' },
  robots: 'index, follow'
}

const faqData = [
  {
    question: "How do I dispose of dirt from my yard?",
    answer: "The best way to dispose of dirt from your yard is to rent a specialized dirt dumpster. Our 10-yard clean dirt dumpster is perfect for yard projects, offering flat-rate pricing ($299 for 7 days) with no weight limits. Dirt weighs 1.5-2 tons per cubic yard, so standard dumpsters quickly exceed weight limits. For small amounts, you can also take it to a local transfer station, but dumpster rental is more convenient for larger projects."
  },
  {
    question: "How much does it cost to dispose of dirt?",
    answer: "Dirt disposal costs vary by method. Our specialized dirt dumpster rental costs $299 for 7 days (flat-rate, no weight limits). Transfer station fees are typically $25-$50 per truckload. For large projects, dumpster rental is more cost-effective. Professional dirt removal services charge $200-$400 per truckload. The most economical option depends on the amount of dirt - dumpster rental is best for 2+ truckloads."
  },
  {
    question: "Can I put dirt in a regular dumpster?",
    answer: "You can put dirt in a regular dumpster, but it's not ideal. Dirt is very heavy (1.5-2 tons per cubic yard), so you'll quickly exceed weight limits on standard dumpsters, resulting in expensive overage fees ($45-$68 per additional ton). Our specialized dirt dumpster uses flat-rate pricing with no weight limits, making it much more cost-effective for dirt disposal. For clean dirt only, our clean dirt dumpster is the best choice."
  },
  {
    question: "What size dumpster do I need for dirt removal?",
    answer: "For dirt removal, our 10-yard clean dirt dumpster is perfect. A 10-yard dumpster can hold 8-10 cubic yards of dirt, which is equivalent to 12-20 tons. This is enough for most landscaping projects, small excavations, or yard work. For larger projects, you may need multiple dumpsters or scheduled pickups. Our team can help you estimate the right size based on your project."
  },
  {
    question: "Can dirt be recycled or reused?",
    answer: "Yes, clean dirt can be recycled and reused! Clean fill dirt is valuable and can be used as fill material, topsoil, or for landscaping projects. We coordinate dirt recycling and reuse whenever possible, which helps reduce environmental impact and may provide cost savings. When you rent our dirt dumpster, let us know if you're interested in recycling options."
  },
  {
    question: "What's the difference between clean dirt and contaminated soil?",
    answer: "Clean dirt is soil that's free of contaminants, debris, organic matter, and hazardous materials. It can be recycled or reused. Contaminated soil contains pollutants, chemicals, or hazardous materials and requires special disposal at licensed facilities. Our clean dirt dumpster accepts only clean dirt - contaminated soil requires specialized disposal services. Always check your dirt before disposal."
  },
  {
    question: "How much does dirt weigh?",
    answer: "Dirt weight varies by type: topsoil weighs about 1.3-1.5 tons per cubic yard (2,600-3,000 pounds), fill dirt weighs 1.5-1.8 tons per cubic yard (3,000-3,600 pounds), and wet or compacted dirt can weigh 2.0-2.5 tons per cubic yard (4,000-5,000 pounds). This is why specialized dirt dumpsters with no weight limits are essential for dirt disposal projects."
  },
  {
    question: "Can I dispose of dirt from excavation work?",
    answer: "Yes, our dirt dumpster rental is perfect for excavation work. Whether you're excavating for foundations, basements, utility installation, or site preparation, our clean dirt dumpster handles the soil removal efficiently. For large excavation projects, you may need multiple dumpsters or scheduled pickups. We can coordinate delivery and pickup around your excavation schedule."
  }
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
} as const;

export default function HowToDisposeOfDirtAndSoil() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0d9488] via-teal-700 to-[#0d9488] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-4 text-sm text-purple-100">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span>How to Dispose of Dirt and Soil</span>
          </nav>
          
          <div className="relative h-56 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-xl mx-auto max-w-5xl bg-white flex items-center justify-center mb-8">
            <ImageWithFallback 
              src="/images/result.png" 
              fallbackSrc="/images/result.png" 
              alt="How to dispose of dirt and soil - complete guide" 
              fill 
              className="object-cover" 
            />
          </div>
          
          <div className="text-center">
            <span className="inline-block px-3 py-1 text-sm font-semibold bg-white/20 rounded-full mb-4">
              Landscaping & Construction
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              How to Dispose of Dirt and Soil: Complete Guide
            </h1>
            <p className="text-purple-100 text-lg md:text-xl max-w-3xl mx-auto">
              Everything you need to know about disposing of dirt and soil from landscaping, excavation, and construction projects. 
              Learn about disposal methods, costs, dumpster rental, and recycling options.
            </p>
            <div className="flex items-center justify-center text-purple-100 mt-4">
              <time dateTime="2025-01-15">January 15, 2025</time>
              <span className="mx-2">•</span>
              <span>Icon Dumpsters</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <div className="bg-green-50 border-l-4 border-[#0d9488] p-6 rounded-r-lg mb-8">
            <p className="text-lg text-gray-700 m-0">
              <strong>Quick Summary:</strong> Disposing of dirt and soil from landscaping or construction projects requires 
              proper planning. Dirt is heavy (1.5-2 tons per cubic yard), making specialized disposal methods essential. 
              This guide covers all disposal options, from dumpster rental to recycling.
            </p>
          </div>

          <h2>Why Proper Dirt Disposal Matters</h2>
          <p>
            Proper dirt disposal is important for several reasons:
          </p>
          <ul>
            <li><strong>Weight considerations:</strong> Dirt is extremely heavy - standard disposal methods may not work</li>
            <li><strong>Cost efficiency:</strong> Wrong disposal method can result in expensive fees</li>
            <li><strong>Environmental impact:</strong> Clean dirt can be recycled, reducing waste</li>
            <li><strong>Legal compliance:</strong> Some areas have regulations about soil disposal</li>
            <li><strong>Space management:</strong> Large amounts of dirt need proper handling</li>
          </ul>

          <h2>Dirt Disposal Methods: Which is Right for You?</h2>
          
          <h3>Method 1: Specialized Dirt Dumpster Rental (Recommended)</h3>
          <p>
            <Link href="/services/dirt-dumpster-rental" className="text-[#0d9488] hover:text-teal-700 font-semibold">Renting a specialized dirt dumpster</Link> is the best option for most projects:
          </p>
          
          <div className="bg-teal-50 border-2 border-[#0d9488] rounded-lg p-6 my-6">
            <h4 className="font-bold text-gray-900 mb-3">Benefits of Dirt Dumpster Rental:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>No weight limits:</strong> Fill it completely without worrying about overweight fees</li>
              <li>• <strong>Flat-rate pricing:</strong> Our 10-yard dirt dumpster costs $299 for 7 days - no surprises</li>
              <li>• <strong>Convenience:</strong> Dumpster delivered to your location, pickup when full</li>
              <li>• <strong>Perfect size:</strong> Holds 8-10 cubic yards (12-20 tons) of dirt</li>
              <li>• <strong>Recycling coordination:</strong> We help coordinate dirt recycling when possible</li>
            </ul>
            <div className="mt-4">
              <Link 
                href="/services/dirt-dumpster-rental" 
                className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Learn More About Dirt Dumpster Rental →
              </Link>
            </div>
          </div>

          <h3>Method 2: Transfer Station (Small Projects Only)</h3>
          <p>
            For very small amounts of dirt (less than one truckload), you can take it to a local transfer station:
          </p>
          <ul>
            <li><strong>Cost:</strong> $25-$50 per truckload</li>
            <li><strong>Best for:</strong> Small yard projects, garden bed removal</li>
            <li><strong>Limitations:</strong> Requires truck, multiple trips for larger projects</li>
            <li><strong>Time:</strong> Must load, drive, unload yourself</li>
          </ul>
          <p>
            <strong>Note:</strong> For 2+ truckloads, dumpster rental is more cost-effective and convenient.
          </p>

          <h3>Method 3: Professional Dirt Removal Service</h3>
          <p>
            Professional services will come and remove dirt for you:
          </p>
          <ul>
            <li><strong>Cost:</strong> $200-$400 per truckload</li>
            <li><strong>Best for:</strong> When you don't want to handle disposal yourself</li>
            <li><strong>Limitations:</strong> Expensive for multiple loads, must schedule pickup</li>
            <li><strong>Convenience:</strong> They handle everything, but costs add up quickly</li>
          </ul>

          <h3>Method 4: Dirt Recycling and Reuse</h3>
          <p>
            Clean dirt can often be recycled or reused:
          </p>
          <ul>
            <li><strong>Fill material:</strong> Used for construction fill and grading</li>
            <li><strong>Topsoil:</strong> Clean dirt can be processed into topsoil</li>
            <li><strong>Landscaping:</strong> Reused in other landscaping projects</li>
            <li><strong>Environmental benefit:</strong> Reduces waste and conserves resources</li>
          </ul>
          <p>
            When you rent our <Link href="/services/dirt-dumpster-rental" className="text-[#0d9488] hover:text-teal-700 font-semibold">dirt dumpster</Link>, 
            we coordinate recycling whenever possible.
          </p>

          <h2>Understanding Dirt Weight: Why Specialized Dumpsters Matter</h2>
          <p>
            Dirt is extremely heavy, which is why specialized disposal is essential:
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Dirt Weight Per Cubic Yard</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Topsoil</h4>
                <p className="text-gray-700 mb-2"><strong>1.3-1.5 tons per cubic yard</strong> (2,600-3,000 pounds)</p>
                <p className="text-sm text-gray-600">Lighter, organic-rich soil from surface layers</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Fill Dirt / Subsoil</h4>
                <p className="text-gray-700 mb-2"><strong>1.5-1.8 tons per cubic yard</strong> (3,000-3,600 pounds)</p>
                <p className="text-sm text-gray-600">Heavier, compacted soil from deeper layers</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Wet or Compacted Dirt</h4>
                <p className="text-gray-700 mb-2"><strong>2.0-2.5 tons per cubic yard</strong> (4,000-5,000 pounds)</p>
                <p className="text-sm text-gray-600">Saturated or heavily compacted soil</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Clay Soil</h4>
                <p className="text-gray-700 mb-2"><strong>1.6-2.0 tons per cubic yard</strong> (3,200-4,000 pounds)</p>
                <p className="text-sm text-gray-600">Dense clay soil common in Utah</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
            <h4 className="font-bold text-yellow-900 mb-2">⚠️ Why Standard Dumpsters Don't Work</h4>
            <p className="text-yellow-800 m-0">
              Standard dumpsters have 2-5 ton weight limits. Dirt fills only 1-2 cubic yards before hitting the limit, 
              resulting in expensive overage fees ($45-$68 per additional ton). Our specialized dirt dumpster has no weight 
              limits and uses flat-rate pricing, making it much more cost-effective.
            </p>
          </div>

          <h2>Common Dirt Disposal Scenarios</h2>
          
          <h3>Landscaping Projects</h3>
          <p>
            Landscaping projects often generate dirt that needs disposal:
          </p>
          <ul>
            <li><strong>Garden bed removal:</strong> Removing old soil from garden beds</li>
            <li><strong>Yard renovation:</strong> Disposing of dirt from yard grading or leveling</li>
            <li><strong>Landscaping cleanup:</strong> Removing excess dirt from landscaping projects</li>
            <li><strong>Topsoil replacement:</strong> Disposing of old topsoil when replacing</li>
          </ul>
          <p>
            Our <Link href="/services/dirt-dumpster-rental" className="text-[#0d9488] hover:text-teal-700 font-semibold">dirt dumpster rental</Link> is perfect for landscaping projects, 
            offering convenient disposal with flat-rate pricing.
          </p>

          <h3>Excavation Work</h3>
          <p>
            Excavation projects generate large amounts of dirt:
          </p>
          <ul>
            <li><strong>Foundation excavation:</strong> Dirt from digging foundations</li>
            <li><strong>Basement digging:</strong> Soil removal for basement construction</li>
            <li><strong>Utility installation:</strong> Dirt from trenching for utilities</li>
            <li><strong>Site preparation:</strong> Grading and leveling for construction</li>
          </ul>
          <p>
            For large excavation projects, multiple dumpsters or scheduled pickups may be needed. 
            We can coordinate delivery and pickup around your excavation schedule.
          </p>

          <h3>Grading and Leveling Projects</h3>
          <p>
            Grading projects often produce excess dirt:
          </p>
          <ul>
            <li><strong>Site grading:</strong> Removing excess dirt from grading work</li>
            <li><strong>Land leveling:</strong> Disposing of dirt from leveling projects</li>
            <li><strong>Drainage work:</strong> Dirt removal for drainage improvements</li>
          </ul>

          <h2>Cost Comparison: Dirt Disposal Methods</h2>
          
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Comparison (10 cubic yards of dirt):</h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="p-3 font-bold text-gray-900">Method</th>
                  <th className="p-3 font-bold text-gray-900">Cost</th>
                  <th className="p-3 font-bold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold">Dirt Dumpster Rental</td>
                  <td className="p-3">$299 (7 days)</td>
                  <td className="p-3">Flat-rate, no weight limits, most convenient</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold">Transfer Station (3 trips)</td>
                  <td className="p-3">$75-$150</td>
                  <td className="p-3">Plus fuel, time, vehicle wear - less convenient</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-semibold">Professional Removal (3 loads)</td>
                  <td className="p-3">$600-$1,200</td>
                  <td className="p-3">Most expensive, but most convenient</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Note:</strong> For 2+ truckloads, dumpster rental is typically the most cost-effective option.
            </p>
          </div>

          <h2>Clean Dirt vs. Contaminated Soil</h2>
          <p>
            Understanding the difference is crucial for proper disposal:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Clean Dirt (Accepted)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Clean fill dirt</li>
                <li>• Topsoil</li>
                <li>• Subsoil</li>
                <li>• Sand and gravel</li>
                <li>• Clay (clean)</li>
                <li>• Free of contaminants</li>
                <li>• Can be recycled</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contaminated Soil (Not Accepted)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Soil with chemicals</li>
                <li>• Oil-contaminated soil</li>
                <li>• Paint-contaminated soil</li>
                <li>• Soil with hazardous materials</li>
                <li>• Requires special disposal</li>
                <li>• Must use licensed facilities</li>
              </ul>
            </div>
          </div>

          <h2>Preparing Dirt for Disposal</h2>
          <p>
            To ensure smooth disposal:
          </p>
          <ul>
            <li><strong>Remove debris:</strong> Remove rocks larger than 6 inches, roots, and organic matter</li>
            <li><strong>Keep it clean:</strong> Ensure dirt is free of contaminants, chemicals, or hazardous materials</li>
            <li><strong>Break up clumps:</strong> Loosen compacted dirt for easier loading</li>
            <li><strong>Keep it dry:</strong> Wet dirt is heavier and harder to handle</li>
            <li><strong>Separate if needed:</strong> Keep clean dirt separate from mixed materials</li>
          </ul>

          <h2>Dirt Recycling: Environmental Benefits</h2>
          <p>
            Clean dirt can be recycled and reused, providing environmental benefits:
          </p>
          <ul>
            <li><strong>Reduces landfill waste:</strong> Keeps valuable material out of landfills</li>
            <li><strong>Conserves resources:</strong> Reuses existing material instead of extracting new</li>
            <li><strong>Cost savings:</strong> Recycled dirt may cost less to dispose of</li>
            <li><strong>Sustainability:</strong> Supports environmentally responsible practices</li>
          </ul>
          
          <p>
            When you rent our <Link href="/services/dirt-dumpster-rental" className="text-[#0d9488] hover:text-teal-700 font-semibold">dirt dumpster</Link>, 
            we coordinate recycling whenever possible. This helps reduce environmental impact and may provide cost savings.
          </p>

          <h2>Tips for Efficient Dirt Disposal</h2>
          
          <div className="bg-blue-50 rounded-lg p-6 my-6">
            <h3 className="font-bold text-gray-900 mb-4">Pro Tips:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Rent dumpster early:</strong> Have dumpster on-site before starting work</li>
              <li>• <strong>Load efficiently:</strong> Distribute weight evenly in dumpster</li>
              <li>• <strong>Keep it clean:</strong> Only clean dirt in clean dirt dumpster</li>
              <li>• <strong>Plan for volume:</strong> Dirt compacts - you may have more than expected</li>
              <li>• <strong>Consider recycling:</strong> Ask about recycling options when renting</li>
              <li>• <strong>Time it right:</strong> Schedule pickup when dumpster is full</li>
            </ul>
          </div>

          <h2>When to Use a Dirt Dumpster vs. Other Methods</h2>
          
          <div className="bg-gray-50 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Dirt Dumpster Rental If:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• You have 2+ truckloads of dirt</li>
              <li>• Project is ongoing (landscaping, excavation)</li>
              <li>• You want convenience and cost-effectiveness</li>
              <li>• You need time to fill (7 days included)</li>
              <li>• You want flat-rate pricing with no surprises</li>
            </ul>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Choose Transfer Station If:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• You have less than one truckload</li>
              <li>• You have a truck and want to save money</li>
              <li>• It's a one-time small project</li>
            </ul>
          </div>

          <h2>Conclusion</h2>
          <p>
            Proper dirt disposal requires understanding weight, costs, and disposal methods. For most projects involving 
            dirt and soil, <Link href="/services/dirt-dumpster-rental" className="text-[#0d9488] hover:text-teal-700 font-semibold">renting a specialized dirt dumpster</Link> is the most cost-effective and convenient option.
          </p>
          
          <p>
            Our 10-yard clean dirt dumpster offers flat-rate pricing ($299 for 7 days) with no weight limits, making it 
            perfect for landscaping, excavation, and construction projects. We also coordinate dirt recycling whenever possible, 
            helping reduce environmental impact.
          </p>
          
          <p>
            Ready to dispose of dirt from your project? <Link href="/#quote-form" className="text-[#0d9488] hover:text-teal-700 font-semibold">Get a free quote</Link> for 
            dirt dumpster rental, or call us at <a href="tel:8019186000" className="text-[#0d9488] hover:text-teal-700 font-semibold">(801) 918-6000</a> to discuss your project.
          </p>

          {/* FAQ Section */}
          <div className="bg-gray-50 rounded-lg p-8 my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <FAQSchema faqs={faqData} pageUrl="https://icondumpsters.com/blog/how-to-dispose-of-dirt-and-soil" />
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <details key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <summary className="cursor-pointer font-semibold text-lg text-gray-900 mb-2">
                    {faq.question}
                  </summary>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#0d9488] to-teal-700 rounded-2xl p-8 text-white text-center my-12">
            <h2 className="text-3xl font-bold mb-4">Need to Dispose of Dirt or Soil?</h2>
            <p className="text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
              Get a free quote for our specialized dirt dumpster rental. Flat-rate pricing, no weight limits, 
              perfect for landscaping and excavation projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:8019186000"
                className="inline-flex items-center justify-center bg-white text-[#0d9488] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (801) 918-6000
              </a>
              <a 
                href="/#quote-form"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0d9488] transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>

        </article>

        {/* Related Resources */}
        <section className="mt-12">
          <RelatedPages pageType="guide" />
        </section>
      </main>
    </div>
  );
}





