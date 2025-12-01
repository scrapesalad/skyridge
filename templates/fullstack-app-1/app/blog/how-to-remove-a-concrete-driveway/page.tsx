import { Metadata } from 'next'
import ImageWithFallback from '../../components/ImageWithFallback'
import Link from 'next/link'
import RelatedPages from '../../components/RelatedPages'
import FAQSchema from '../../components/FAQSchema'

export const metadata: Metadata = {
  title: 'How to Remove a Concrete Driveway: Complete Step-by-Step Guide 2025',
  description: 'Learn how to remove a concrete driveway safely and efficiently. Complete guide covering tools, methods, costs, disposal, and when to hire professionals. Includes dumpster rental tips.',
  keywords: 'how to remove concrete driveway, concrete driveway removal, remove concrete driveway, concrete driveway demolition, driveway removal cost, concrete disposal, concrete dumpster rental',
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'How to Remove a Concrete Driveway: Complete Step-by-Step Guide 2025',
    description: 'Learn how to remove a concrete driveway safely and efficiently. Complete guide covering tools, methods, costs, disposal, and when to hire professionals.',
    type: 'article',
    url: 'https://icondumpsters.com/blog/how-to-remove-a-concrete-driveway',
    images: [
      {
        url: '/images/result.png',
        width: 1200,
        height: 630,
        alt: 'How to remove a concrete driveway - complete guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Remove a Concrete Driveway: Complete Step-by-Step Guide 2025',
    description: 'Learn how to remove a concrete driveway safely and efficiently. Complete guide covering tools, methods, costs, and disposal.',
    images: ['/images/result.png']
  },
  alternates: { canonical: 'https://icondumpsters.com/blog/how-to-remove-a-concrete-driveway' },
  robots: 'index, follow'
}

const faqData = [
  {
    question: "How much does it cost to remove a concrete driveway?",
    answer: "The cost to remove a concrete driveway varies based on size and method. DIY removal costs $200-$500 for tools and disposal, while professional removal costs $3-$8 per square foot. A typical 20x20 foot driveway (400 sq ft) costs $1,200-$3,200 for professional removal. Dumpster rental for concrete disposal adds $280-$600 depending on rental period. Our specialized concrete dumpster rental starts at $349 for 7 days with no weight limits."
  },
  {
    question: "Can I remove a concrete driveway myself?",
    answer: "Yes, you can remove a concrete driveway yourself if it's small (under 200 sq ft) and you have the right tools. You'll need a jackhammer, sledgehammer, pry bar, safety equipment, and a concrete dumpster for disposal. However, for larger driveways, driveways with rebar, or if you have physical limitations, hiring professionals is recommended. Professional removal is faster, safer, and often more cost-effective for large projects."
  },
  {
    question: "What tools do I need to remove a concrete driveway?",
    answer: "Essential tools include: electric or pneumatic jackhammer (rental $50-$100/day), sledgehammer (10-15 lbs), pry bar or wrecking bar, wheelbarrow, safety equipment (gloves, safety glasses, ear protection, steel-toed boots), and a concrete dumpster for disposal. For larger projects, you may need a skid steer or mini excavator. Always rent or purchase proper safety equipment before starting."
  },
  {
    question: "How do I dispose of concrete from driveway removal?",
    answer: "The best way to dispose of concrete from driveway removal is to rent a specialized concrete dumpster. Our 12-yard concrete dumpster rental is perfect for driveway removal, offering flat-rate pricing ($349 for 7 days) with no weight limits. Concrete weighs 2.5-3 tons per cubic yard, so standard dumpsters quickly exceed weight limits. A typical driveway produces 5-6 cubic yards of concrete, which fits perfectly in our specialized dumpster."
  },
  {
    question: "How long does it take to remove a concrete driveway?",
    answer: "Removal time depends on driveway size and method. A small driveway (200 sq ft) takes 1-2 days for DIY removal. A medium driveway (400 sq ft) takes 2-4 days DIY or 1 day with professional equipment. Large driveways (800+ sq ft) take 4-7 days DIY or 2-3 days professionally. Professional removal with heavy equipment is significantly faster. Plan for extra time if the driveway has rebar reinforcement."
  },
  {
    question: "Should I remove concrete driveway before or after new installation?",
    answer: "Always remove the old concrete driveway before installing a new one. This ensures proper base preparation, prevents height issues, and allows for proper drainage. Remove the old driveway, prepare the base (compacting, grading, adding base material), then pour the new concrete. Having a concrete dumpster on-site during removal makes the process more efficient."
  },
  {
    question: "Can concrete from driveway removal be recycled?",
    answer: "Yes, concrete from driveway removal can be recycled! Recycled concrete is crushed and reused as aggregate for new concrete, road base, or fill material. We coordinate concrete recycling whenever possible, which helps reduce environmental impact and may lower disposal costs. When you rent our concrete dumpster, let us know if you're interested in recycling options."
  },
  {
    question: "What size dumpster do I need for driveway removal?",
    answer: "For driveway removal, our 12-yard concrete dumpster is perfect. A typical 20x20 foot driveway (4 inches thick) produces about 5-6 cubic yards of broken concrete. Our 12-yard concrete dumpster can hold 8-10 cubic yards of broken concrete (20-30 tons), which is more than enough for most residential driveways. For larger driveways, you may need multiple dumpsters or scheduled pickups."
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

export default function HowToRemoveConcreteDriveway() {
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
            <span>How to Remove a Concrete Driveway</span>
          </nav>
          
          <div className="relative h-56 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-xl mx-auto max-w-5xl bg-white flex items-center justify-center mb-8">
            <ImageWithFallback 
              src="/images/result.png" 
              fallbackSrc="/images/result.png" 
              alt="How to remove a concrete driveway - step by step guide" 
              fill 
              className="object-cover" 
            />
          </div>
          
          <div className="text-center">
            <span className="inline-block px-3 py-1 text-sm font-semibold bg-white/20 rounded-full mb-4">
              Home Improvement
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              How to Remove a Concrete Driveway: Complete Step-by-Step Guide
            </h1>
            <p className="text-purple-100 text-lg md:text-xl max-w-3xl mx-auto">
              Everything you need to know about removing a concrete driveway, from tools and methods to costs and disposal. 
              Learn when to DIY and when to hire professionals.
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
          <div className="bg-blue-50 border-l-4 border-[#0d9488] p-6 rounded-r-lg mb-8">
            <p className="text-lg text-gray-700 m-0">
              <strong>Quick Summary:</strong> Removing a concrete driveway is a major project that requires proper tools, 
              safety equipment, and disposal planning. This guide covers everything from DIY methods to professional removal, 
              including costs, tools needed, and how to dispose of the concrete properly.
            </p>
          </div>

          <h2>Why Remove a Concrete Driveway?</h2>
          <p>
            There are several reasons you might need to remove a concrete driveway:
          </p>
          <ul>
            <li><strong>Cracks and damage:</strong> Extensive cracking, settling, or damage that's beyond repair</li>
            <li><strong>Replacement:</strong> Installing a new driveway with better materials or design</li>
            <li><strong>Drainage issues:</strong> Driveway causing water problems or poor drainage</li>
            <li><strong>Property improvements:</strong> Expanding or redesigning your property layout</li>
            <li><strong>Foundation problems:</strong> Driveway affecting your home's foundation</li>
          </ul>

          <h2>DIY vs. Professional Removal: Which Should You Choose?</h2>
          <p>
            Deciding between DIY and professional removal depends on several factors:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Choose DIY If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Driveway is small (under 200 sq ft)</li>
                <li>• You have physical strength and experience</li>
                <li>• You have access to tools (jackhammer rental)</li>
                <li>• Budget is a primary concern</li>
                <li>• No rebar or minimal reinforcement</li>
                <li>• You have time (1-4 days)</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hire Professionals If:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Driveway is large (400+ sq ft)</li>
                <li>• Heavy rebar reinforcement present</li>
                <li>• Limited physical ability or time</li>
                <li>• Need fast completion</li>
                <li>• Complex removal (near structures)</li>
                <li>• Want guaranteed results</li>
              </ul>
            </div>
          </div>

          <h2>Step-by-Step Guide: How to Remove a Concrete Driveway</h2>
          
          <h3>Step 1: Plan and Prepare</h3>
          <p>
            Before starting, create a removal plan:
          </p>
          <ul>
            <li><strong>Measure the driveway:</strong> Calculate square footage and thickness to estimate concrete volume</li>
            <li><strong>Check for utilities:</strong> Contact utility companies to mark gas, water, and electrical lines</li>
            <li><strong>Arrange disposal:</strong> <Link href="/services/concrete-dumpster-rental" className="text-[#0d9488] hover:text-teal-700 font-semibold">Rent a concrete dumpster</Link> in advance - our 12-yard concrete dumpster is perfect for driveway removal</li>
            <li><strong>Get permits:</strong> Check local regulations - some areas require permits for driveway removal</li>
            <li><strong>Notify neighbors:</strong> Let neighbors know about the noise and work schedule</li>
          </ul>

          <h3>Step 2: Gather Tools and Safety Equipment</h3>
          <p>
            Essential tools and equipment you'll need:
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 my-6">
            <h4 className="font-bold text-gray-900 mb-3">Required Tools:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Electric or pneumatic jackhammer:</strong> Rental $50-$100/day (essential for efficient removal)</li>
              <li>• <strong>Sledgehammer (10-15 lbs):</strong> For breaking smaller pieces</li>
              <li>• <strong>Pry bar or wrecking bar:</strong> For lifting and moving pieces</li>
              <li>• <strong>Wheelbarrow:</strong> For moving broken concrete</li>
              <li>• <strong>Shovel:</strong> For cleanup and base preparation</li>
              <li>• <strong>Measuring tape:</strong> For planning and measurement</li>
            </ul>
            
            <h4 className="font-bold text-gray-900 mb-3 mt-4">Safety Equipment:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Safety glasses or goggles</li>
              <li>• Hearing protection (earplugs or earmuffs)</li>
              <li>• Work gloves (heavy-duty)</li>
              <li>• Steel-toed boots</li>
              <li>• Long pants and long-sleeved shirt</li>
              <li>• Dust mask or respirator</li>
            </ul>
          </div>

          <h3>Step 3: Mark and Score the Driveway</h3>
          <p>
            Before breaking, mark the removal area:
          </p>
          <ul>
            <li>Use chalk or spray paint to mark the exact area to remove</li>
            <li>If removing only part of the driveway, score along the cut line with a concrete saw</li>
            <li>Mark any areas with rebar or reinforcement for special attention</li>
            <li>Plan your breaking pattern - start from edges and work inward</li>
          </ul>

          <h3>Step 4: Break the Concrete</h3>
          <p>
            This is the most physically demanding part:
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
            <h4 className="font-bold text-yellow-900 mb-2">⚠️ Safety First!</h4>
            <p className="text-yellow-800 m-0">
              Always wear safety equipment. Concrete can shatter unpredictably, sending sharp fragments flying. 
              Work methodically and take breaks to avoid fatigue.
            </p>
          </div>
          
          <h4>Breaking Technique:</h4>
          <ol>
            <li><strong>Start at edges:</strong> Begin breaking from the edges and work toward the center</li>
            <li><strong>Use jackhammer properly:</strong> Hold at a 45-degree angle, let the tool do the work</li>
            <li><strong>Break into manageable pieces:</strong> Aim for pieces 1-2 feet in size - small enough to move but large enough to be efficient</li>
            <li><strong>Work in sections:</strong> Break a section, remove it, then move to the next</li>
            <li><strong>Handle rebar carefully:</strong> Cut rebar with a reciprocating saw or angle grinder if needed</li>
          </ol>

          <h3>Step 5: Remove Broken Concrete</h3>
          <p>
            As you break concrete, move it to your dumpster:
          </p>
          <ul>
            <li>Load broken pieces into wheelbarrow</li>
            <li>Transport to your <Link href="/services/concrete-dumpster-rental" className="text-[#0d9488] hover:text-teal-700 font-semibold">concrete dumpster</Link></li>
            <li>Distribute weight evenly in dumpster</li>
            <li>Break large pieces further if needed to maximize space</li>
            <li>Keep work area clear for safety</li>
          </ul>

          <h3>Step 6: Clean Up and Prepare Base</h3>
          <p>
            Once all concrete is removed:
          </p>
          <ul>
            <li>Remove any remaining debris and dust</li>
            <li>Check base condition - remove damaged or unstable base material</li>
            <li>Grade and compact the base if installing new driveway</li>
            <li>Add new base material if needed (gravel, crushed stone)</li>
            <li>Ensure proper drainage slope</li>
          </ul>

          <h2>Cost Breakdown: Removing a Concrete Driveway</h2>
          <p>
            Understanding the costs helps you budget properly:
          </p>
          
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">DIY Removal Costs (400 sq ft driveway):</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Jackhammer rental (3 days): $150-$300</li>
              <li>• Safety equipment: $50-$100</li>
              <li>• <Link href="/services/concrete-dumpster-rental" className="text-[#0d9488] hover:text-teal-700 font-semibold">Concrete dumpster rental</Link> (7 days): $349</li>
              <li>• Tools (sledgehammer, pry bar): $50-$100</li>
              <li>• Permits (if required): $25-$100</li>
              <li><strong>Total DIY Cost: $624-$949</strong></li>
            </ul>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Professional Removal Costs (400 sq ft driveway):</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Professional removal: $1,200-$3,200 ($3-$8 per sq ft)</li>
              <li>• Disposal included or additional: $200-$500</li>
              <li><strong>Total Professional Cost: $1,400-$3,700</strong></li>
            </ul>
          </div>

          <h2>Concrete Disposal: The Right Way</h2>
          <p>
            Proper concrete disposal is crucial. Here's why our specialized concrete dumpster is the best choice:
          </p>
          
          <div className="bg-teal-50 border-2 border-[#0d9488] rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Why Use a Specialized Concrete Dumpster?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>No weight limits:</strong> Concrete weighs 2.5-3 tons per cubic yard - standard dumpsters would quickly exceed limits</li>
              <li>• <strong>Flat-rate pricing:</strong> Our 12-yard concrete dumpster costs $349 for 7 days - no surprise fees</li>
              <li>• <strong>Perfect size:</strong> Holds 8-10 cubic yards of broken concrete (20-30 tons)</li>
              <li>• <strong>Recycling coordination:</strong> We help coordinate concrete recycling when possible</li>
              <li>• <strong>Designed for heavy materials:</strong> Built specifically to handle concrete weight</li>
            </ul>
            <div className="mt-4">
              <Link 
                href="/services/concrete-dumpster-rental" 
                className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Learn More About Concrete Dumpster Rental →
              </Link>
            </div>
          </div>

          <h2>Common Challenges and Solutions</h2>
          
          <h3>Challenge: Heavy Rebar Reinforcement</h3>
          <p>
            If your driveway has heavy rebar:
          </p>
          <ul>
            <li>Use a reciprocating saw with metal-cutting blade to cut rebar</li>
            <li>Or use an angle grinder with cutting wheel</li>
            <li>Consider professional removal if rebar is extensive</li>
            <li>Rebar can stay attached to concrete pieces - it's fine for disposal</li>
          </ul>

          <h3>Challenge: Concrete Near Structures</h3>
          <p>
            When removing concrete near your home or other structures:
          </p>
          <ul>
            <li>Work carefully near foundations</li>
            <li>Use smaller tools (sledgehammer) near structures</li>
            <li>Consider professional removal for safety</li>
            <li>Protect nearby structures with plywood barriers</li>
          </ul>

          <h3>Challenge: Large Driveway Size</h3>
          <p>
            For large driveways (800+ sq ft):
          </p>
          <ul>
            <li>Consider professional removal for efficiency</li>
            <li>Or plan for multiple dumpsters or scheduled pickups</li>
            <li>Break into phases if doing DIY</li>
            <li>Allow extra time (4-7 days for DIY)</li>
          </ul>

          <h2>When to Hire Professionals</h2>
          <p>
            Professional removal is recommended when:
          </p>
          <ul>
            <li>Driveway is 400+ square feet</li>
            <li>Heavy rebar reinforcement present</li>
            <li>Limited time or physical ability</li>
            <li>Concrete near critical structures</li>
            <li>Need fast completion</li>
            <li>Want guaranteed results</li>
          </ul>
          
          <p>
            Professional contractors have heavy equipment (skid steers, mini excavators, concrete breakers) that make 
            removal much faster and more efficient. They also handle disposal and cleanup.
          </p>

          <h2>Concrete Recycling: Environmental Benefits</h2>
          <p>
            Concrete from driveway removal can be recycled:
          </p>
          <ul>
            <li><strong>Crushed concrete aggregate:</strong> Used in new concrete mixes</li>
            <li><strong>Road base:</strong> Used as base material for roads and driveways</li>
            <li><strong>Fill material:</strong> Used for construction fill</li>
            <li><strong>Environmental benefit:</strong> Reduces landfill waste and conserves natural resources</li>
          </ul>
          
          <p>
            When you rent our <Link href="/services/concrete-dumpster-rental" className="text-[#0d9488] hover:text-teal-700 font-semibold">concrete dumpster</Link>, 
            we coordinate recycling whenever possible. This helps reduce environmental impact and may provide cost savings.
          </p>

          <h2>Safety Tips for Concrete Driveway Removal</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
            <h3 className="font-bold text-red-900 mb-3">Critical Safety Reminders:</h3>
            <ul className="space-y-2 text-red-800">
              <li>• Always wear safety glasses - concrete fragments can cause serious eye injury</li>
              <li>• Use hearing protection - jackhammers are extremely loud</li>
              <li>• Wear steel-toed boots - protect feet from falling concrete</li>
              <li>• Use proper lifting technique - concrete is heavy, avoid back injury</li>
              <li>• Take breaks - fatigue leads to accidents</li>
              <li>• Keep work area clear - tripping hazards are dangerous</li>
              <li>• Watch for rebar - sharp edges can cause cuts</li>
              <li>• Stay hydrated - especially in hot weather</li>
            </ul>
          </div>

          <h2>Timeline: How Long Does Driveway Removal Take?</h2>
          <p>
            Removal time varies by method and driveway size:
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 my-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="p-3 font-bold text-gray-900">Driveway Size</th>
                  <th className="p-3 font-bold text-gray-900">DIY Time</th>
                  <th className="p-3 font-bold text-gray-900">Professional Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3">Small (200 sq ft)</td>
                  <td className="p-3">1-2 days</td>
                  <td className="p-3">4-6 hours</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3">Medium (400 sq ft)</td>
                  <td className="p-3">2-4 days</td>
                  <td className="p-3">1 day</td>
                </tr>
                <tr>
                  <td className="p-3">Large (800+ sq ft)</td>
                  <td className="p-3">4-7 days</td>
                  <td className="p-3">2-3 days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>After Removal: What's Next?</h2>
          <p>
            Once the driveway is removed:
          </p>
          <ol>
            <li><strong>Clean the base:</strong> Remove all debris and prepare the base</li>
            <li><strong>Evaluate base condition:</strong> Check for damage, settling, or drainage issues</li>
            <li><strong>Repair if needed:</strong> Add base material, compact, and grade</li>
            <li><strong>Plan new installation:</strong> Decide on new driveway material and design</li>
            <li><strong>Schedule installation:</strong> Coordinate with contractors if hiring professionals</li>
          </ol>

          <h2>Conclusion</h2>
          <p>
            Removing a concrete driveway is a major project that requires proper planning, tools, and disposal. 
            Whether you choose DIY or professional removal, having the right <Link href="/services/concrete-dumpster-rental" className="text-[#0d9488] hover:text-teal-700 font-semibold">concrete dumpster rental</Link> 
            makes the process much more manageable.
          </p>
          
          <p>
            Our specialized 12-yard concrete dumpster is perfect for driveway removal projects, offering flat-rate pricing 
            ($349 for 7 days) with no weight limits. This eliminates the worry of overweight fees that come with standard dumpsters.
          </p>
          
          <p>
            Ready to start your driveway removal project? <Link href="/#quote-form" className="text-[#0d9488] hover:text-teal-700 font-semibold">Get a free quote</Link> for 
            concrete dumpster rental, or call us at <a href="tel:8019186000" className="text-[#0d9488] hover:text-teal-700 font-semibold">(801) 918-6000</a> to discuss your project.
          </p>

          {/* FAQ Section */}
          <div className="bg-gray-50 rounded-lg p-8 my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <FAQSchema faqs={faqData} pageUrl="https://icondumpsters.com/blog/how-to-remove-a-concrete-driveway" />
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
            <h2 className="text-3xl font-bold mb-4">Ready to Remove Your Concrete Driveway?</h2>
            <p className="text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
              Get a free quote for our specialized concrete dumpster rental. Flat-rate pricing, no weight limits, 
              perfect for driveway removal projects.
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





