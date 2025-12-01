import { Metadata } from 'next'
import ImageWithFallback from '@/app/components/ImageWithFallback'
import Link from 'next/link'
import Hero from '@/app/components/hero';

export const metadata: Metadata = {
  title: 'Home Renovation Waste Disposal: Complete Guide for 2025',
  description: 'Master home renovation waste disposal with our comprehensive guide. Learn proper disposal methods, recycling strategies, and cost-saving tips for your renovation project.',
  keywords: 'home renovation waste disposal, renovation debris removal, home renovation cleanup, renovation waste management, home renovation guide',
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'Home Renovation Waste Disposal: Complete Guide for 2025',
    description: 'Master home renovation waste disposal with our comprehensive guide. Learn proper disposal methods, recycling strategies, and cost-saving tips for your renovation project.',
    type: 'article',
    url: 'https://icondumpsters.com/home-renovation-waste-disposal-complete-guide',
    images: [
      {
        url: '/images/dumpster500x500-1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Home renovation waste disposal guide with proper cleanup and recycling strategies'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Renovation Waste Disposal: Complete Guide for 2025',
    description: 'Master home renovation waste disposal with our comprehensive guide. Learn proper disposal methods, recycling strategies, and cost-saving tips for your renovation project.',
    images: ['/images/dumpster500x500-1.jpeg']
  },
  alternates: { canonical: 'https://icondumpsters.com/home-renovation-waste-disposal-complete-guide' },
  robots: 'index, follow'
}

export default function HomeRenovationWasteDisposalGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Table of Contents */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
          <nav className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <a href="https://icondumpsters.com/#planning" className="block text-trust-blue hover:text-trust-blue-dark transition-colors">
                  1. Planning Your Waste Disposal
                </a>
                <a href="https://icondumpsters.com/#dumpster-sizing" className="block text-trust-blue hover:text-trust-blue-dark transition-colors">
                  2. Choosing the Right Dumpster Size
                </a>
                <a href="https://icondumpsters.com/#recycling" className="block text-trust-blue hover:text-trust-blue-dark transition-colors">
                  3. Recycling and Reuse Opportunities
                </a>
              </div>
              <div>
                <a href="https://icondumpsters.com/#disposal-methods" className="block text-trust-blue hover:text-trust-blue-dark transition-colors">
                  4. Proper Disposal Methods
                </a>
                <a href="https://icondumpsters.com/#cost-optimization" className="block text-trust-blue hover:text-trust-blue-dark transition-colors">
                  5. Cost Optimization Strategies
                </a>
                <a href="https://icondumpsters.com/#safety" className="block text-trust-blue hover:text-trust-blue-dark transition-colors">
                  6. Safety and Best Practices
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* Article Content */}
        <div className="prose max-w-none">
          <section id="planning">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Planning Your Waste Disposal</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Home renovation waste disposal planning is often an afterthought, but it's actually one of the most critical aspects 
              of a successful project. I've learned through years of managing renovations that poor waste planning can derail 
              your entire timeline and blow your budget.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The average home renovation generates 2-5 tons of waste, and without proper planning, you'll find yourself 
              scrambling to find disposal solutions when you're already behind schedule.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Key Takeaway</h3>
              <p className="text-trust-blue-dark">
                Planning your waste disposal strategy before starting demolition can save you 25-40% on disposal costs 
                and prevent project delays due to waste management issues.
              </p>
            </div>

            {/* First Image */}
            <div className="my-8">
              <ImageWithFallback
                src="/images/optimized/dumpster500x500-1.webp"
                alt="Home renovation project with organized waste management planning"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 text-center mt-2">
                Proper planning ensures your renovation stays on schedule and within budget
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Start by assessing your renovation scope and estimating the types and amounts of waste you'll generate. 
              Different materials require different disposal methods, and understanding this upfront will help you choose 
              the right waste management strategy.
            </p>
          </section>

          <section id="dumpster-sizing" className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing the Right Dumpster Size</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Choosing the wrong dumpster size is one of the most expensive mistakes homeowners make during renovations. 
              Too small, and you're paying for multiple pickups. Too large, and you're wasting money on unused capacity.
            </p>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-400 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Size Selection Guide</h3>
              <p className="text-teal-800">
                For most home renovations: 10-yard dumpsters handle small projects like bathroom remodels, 20-yard containers 
                work for medium projects like kitchen renovations, and 30-yard dumpsters are ideal for large projects or whole-house remodels.
              </p>
            </div>

            {/* Second Image */}
            <div className="my-8">
              <ImageWithFallback
                src="/images/optimized/dumpster500x500-2.webp"
                alt="Different dumpster sizes for home renovation projects"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 text-center mt-2">
                Choose the right size to avoid costly overage fees and multiple pickups
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                             I always recommend using our <Link href="https://icondumpsters.com/choose-dumpster-size" className="text-trust-blue hover:text-trust-blue-dark underline">dumpster size selection guide</Link> to get accurate calculations. 
              It's saved me thousands in overage charges over the years.
            </p>
          </section>

          <section id="recycling" className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Recycling and Reuse Opportunities</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Home renovations offer excellent opportunities for recycling and reusing materials, which can significantly 
              reduce your disposal costs while being environmentally responsible. Many materials that seem like waste 
              can actually be valuable to others.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">Recycling Success</h3>
              <p className="text-yellow-800">
                On a recent kitchen renovation, we were able to recycle 70% of the waste materials, including cabinets, 
                appliances, and construction debris, saving over $800 in disposal costs.
              </p>
            </div>

            {/* Third Image */}
            <div className="my-8">
              <ImageWithFallback
                src="/images/optimized/dumpsterSmallBanner.webp"
                alt="Home renovation materials being sorted for recycling and reuse"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 text-center mt-2">
                Strategic sorting maximizes recycling potential and reduces disposal costs
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              For comprehensive guidance on construction waste management, check out our <Link href="https://icondumpsters.com/construction-waste-management-guide" className="text-trust-blue hover:text-trust-blue-dark underline">construction waste management guide</Link>. 
              It covers everything from recycling strategies to compliance requirements.
            </p>
          </section>

          <section id="disposal-methods" className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Proper Disposal Methods</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Different types of renovation waste require different disposal methods. Understanding these requirements 
              is crucial for compliance, safety, and cost-effectiveness. Improper disposal can result in fines, 
              environmental damage, and safety hazards.
            </p>

            {/* Fourth Image */}
            <div className="my-8">
              <ImageWithFallback
                src="/images/optimized/dumpsterSmallBanner2.webp"
                alt="Proper disposal methods for home renovation waste"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 text-center mt-2">
                Proper disposal methods ensure compliance and protect the environment
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hazardous materials like lead paint, asbestos, and certain types of insulation require special handling 
              and disposal. For these materials, you'll need to work with specialized waste management companies 
              that can handle hazardous waste properly.
            </p>
          </section>

          <section id="cost-optimization" className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cost Optimization Strategies</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Renovation waste disposal costs can quickly add up, but with smart strategies, you can significantly 
              reduce these expenses. The key is to think of waste management as an investment rather than just a cost.
            </p>
            
            <div className="bg-teal-50 border-l-4 border-purple-400 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Cost-Saving Strategy</h3>
              <p className="text-teal-800">
                Consider renting a dumpster for the entire project duration rather than scheduling multiple pickups. 
                Many companies offer weekly or monthly rates that are more cost-effective than daily rentals.
              </p>
            </div>

            {/* Fifth Image */}
            <div className="my-8">
              <ImageWithFallback
                src="/images/optimized/dumpsterSmallBanner4.webp"
                alt="Cost-effective home renovation waste disposal solutions"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 text-center mt-2">
                Smart waste management strategies reduce costs while improving project efficiency
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                             To get accurate pricing for your specific project, use our <Link href="https://icondumpsters.com/dumpster-calculator" className="text-trust-blue hover:text-trust-blue-dark underline">dumpster rental cost calculator</Link>. 
              It factors in your location, project type, and timeline to give you realistic cost estimates.
            </p>
          </section>

          <section id="safety" className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety and Best Practices</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Safety should always be the top priority when managing renovation waste. From proper handling techniques 
              to safe disposal methods, following best practices will protect you, your family, and the environment.
            </p>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-semibold text-red-900 mb-3">Safety First</h3>
              <p className="text-red-800">
                Always wear appropriate personal protective equipment when handling renovation waste, including gloves, 
                safety glasses, and dust masks. Some materials can be hazardous to your health.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              For construction projects specifically, our <Link href="https://icondumpsters.com/construction-dumpster-rental-guide-2025" className="text-trust-blue hover:text-trust-blue-dark underline">construction dumpster rental guide</Link> provides 
              detailed safety protocols and best practices for managing construction waste.
            </p>
          </section>

          {/* Conclusion */}
          <section className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Home renovation waste disposal doesn't have to be overwhelming or expensive. With proper planning, 
              smart strategies, and the right resources, you can manage your renovation waste efficiently and cost-effectively.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Remember, the key to success is planning ahead and treating waste management as an integral part of your 
              renovation project, not an afterthought. The investment in proper planning will save you money, time, 
              and headaches throughout your project.
            </p>
            
            <div className="text-center mt-8">
              <Link 
                href="https://icondumpsters.com/#quote-form" 
                className="inline-flex items-center px-8 py-4 bg-trust-blue text-white font-semibold rounded-lg hover:bg-trust-blue-dark transition-colors shadow-lg hover:shadow-xl"
              >
                Get Renovation Quote
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
