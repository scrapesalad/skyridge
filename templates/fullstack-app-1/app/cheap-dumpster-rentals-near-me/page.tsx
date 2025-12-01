import type { Metadata } from 'next';
import Hero from '../components/hero';
import PageTemplate from '../components/PageTemplate';
import CalculatorBanner from '../components/CalculatorBanner';
import FAQSchema from '../components/FAQSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Cheap Dumpster Rentals - Best Budget Options 2025 | Icon Dumpsters",
  description: "Find cheap dumpster rentals near you. Budget-friendly dumpster rental options with transparent pricing. No hidden fees. Get instant quotes and save money.",
  keywords: [
    "cheap dumpster rentals near me",
    "budget dumpster rental near me",
    "affordable dumpster rental near me",
    "low cost dumpster rental near me",
    "inexpensive dumpster rental near me",
    "discount dumpster rental near me"
  ],
  openGraph: {
    title: "Cheap Dumpster Rentals - Best Budget Options 2025 | Icon Dumpsters",
    description: "Find cheap dumpster rentals near you. Budget-friendly dumpster rental options with transparent pricing. No hidden fees. Get instant quotes and save money.",
    url: 'https://icondumpsters.com/cheap-dumpster-rentals-near-me',
    siteName: 'Icon Dumpsters',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://icondumpsters.com/images/dumpster500x500-1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Cheap Dumpster Rentals Near Me - Icon Dumpsters',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/cheap-dumpster-rentals-near-me',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const cheapRentalsFAQs = [
  {
    question: "What makes a dumpster rental 'cheap' or budget-friendly?",
    answer: "Cheap dumpster rentals offer transparent pricing with no hidden fees, competitive rates compared to local competitors, and value-added services like free delivery and pickup. Look for companies that include basic rental period in the price and clearly state any additional costs upfront."
  },
  {
    question: "Are there any hidden fees with cheap dumpster rentals?",
    answer: "Reputable cheap dumpster rental companies provide transparent pricing with no hidden fees. The quoted price typically includes delivery, pickup, and a standard rental period (usually 7-10 days). Additional costs may apply for extended rental periods, overweight loads, or prohibited materials."
  },
  {
    question: "How can I find the cheapest dumpster rental near me?",
    answer: "Compare quotes from multiple local companies, ask about current promotions or discounts, consider smaller dumpster sizes if appropriate for your project, and look for companies offering free delivery and pickup. Online quote tools can help you quickly compare prices from different providers."
  }
];

export default function CheapDumpsterRentalsNearMe() {
  return (
    <PageTemplate>
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Budget Options Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cheap Dumpster Rental Options Near You</h2>
          <p className="text-lg text-gray-700 mb-8">
            Looking for cheap dumpster rentals near you? We offer budget-friendly options without compromising on quality or service. Here are our most affordable dumpster rental solutions for your project.
          </p>
          
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
            <h3 className="text-xl font-semibold text-orange-900 mb-3">💸 Finding Cheap Dumpster Rentals: What You Need to Know</h3>
            <p className="text-gray-700">
              When searching for cheap dumpster rentals near you, it's important to understand what "cheap" really means in the waste management industry. True value comes from transparent pricing, reliable service, and no hidden fees. Our budget-friendly dumpster rental options provide exceptional value without sacrificing quality or customer service. We believe everyone deserves access to affordable waste management solutions for their home improvement and construction projects.
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="mb-8">
            <img 
              src="/images/optimized/dumpster3-500x500-1.webp" 
              alt="Cheap dumpster rental options near you - budget-friendly waste management" 
              className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">15 Yard Dumpster</h3>
              <div className="text-3xl font-bold text-[#0d9488] mb-2">Starting at $299</div>
              <p className="text-gray-600 mb-4">Most budget-friendly option</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Perfect for small projects</li>
                <li>• Kitchen renovations</li>
                <li>• Bathroom remodels</li>
                <li>• Garage cleanouts</li>
                <li>• 7-day rental included</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 text-center bg-gradient-to-br from-purple-50 to-purple-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">20 Yard Dumpster</h3>
              <div className="text-3xl font-bold text-[#0d9488] mb-2">Starting at $349</div>
              <p className="text-gray-600 mb-4">Best value for money</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Most popular choice</li>
                <li>• Whole house cleanouts</li>
                <li>• Roofing projects</li>
                <li>• Deck demolition</li>
                <li>• 7-day rental included</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">30 Yard Dumpster</h3>
              <div className="text-3xl font-bold text-[#0d9488] mb-2">Starting at $399</div>
              <p className="text-gray-600 mb-4">Cost-effective for large projects</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Major renovations</li>
                <li>• Commercial projects</li>
                <li>• Large construction</li>
                <li>• Estate cleanouts</li>
                <li>• 7-day rental included</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">💰 Why Our Dumpster Rentals Are So Affordable</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-teal-800 mb-2">No Hidden Fees</h4>
                <p className="text-gray-700 text-sm">What you see is what you pay. No surprise charges or hidden costs.</p>
              </div>
              <div>
                <h4 className="font-semibold text-teal-800 mb-2">Competitive Pricing</h4>
                <p className="text-gray-700 text-sm">We offer some of the most competitive rates in the area.</p>
              </div>
              <div>
                <h4 className="font-semibold text-teal-800 mb-2">Included Services</h4>
                <p className="text-gray-700 text-sm">Delivery, pickup, and disposal are all included in our base price.</p>
              </div>
              <div>
                <h4 className="font-semibold text-teal-800 mb-2">Flexible Terms</h4>
                <p className="text-gray-700 text-sm">Extended rentals available at no extra cost when needed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Budget Dumpster Image */}
        <section className="mb-12">
          <img 
            src="/images/optimized/dumpster4-500x500-1.webp" 
            alt="Budget-friendly dumpster rental - how to save money on waste management" 
            className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
          />
        </section>

        {/* Money-Saving Tips Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Save Money on Dumpster Rentals Near You</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Money-Saving Strategies</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <div>
                    <strong>Choose the Right Size:</strong> Don't overpay for a larger dumpster than you need. Our team can help you choose the most cost-effective size.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <div>
                    <strong>Plan Your Project:</strong> Complete your project within the rental period to avoid additional fees.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <div>
                    <strong>Separate Materials:</strong> Some materials can be recycled for free, reducing disposal costs.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <div>
                    <strong>Book in Advance:</strong> Last-minute rentals may cost more. Plan ahead for better rates.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <div>
                    <strong>Compare Quotes:</strong> Get quotes from multiple companies to ensure you're getting the best deal.
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Avoid</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <div>
                    <strong>Oversized Dumpsters:</strong> Don't rent a 30-yard dumpster for a small bathroom remodel.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <div>
                    <strong>Hidden Fees:</strong> Avoid companies that don't clearly state all costs upfront.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <div>
                    <strong>Last-Minute Bookings:</strong> Emergency rentals often cost significantly more.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <div>
                    <strong>Overfilling:</strong> Exceeding weight limits results in expensive overage charges.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <div>
                    <strong>Prohibited Items:</strong> Including banned materials can result in additional fees.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cost Comparison Image */}
        <section className="mb-12">
          <img 
            src="/images/optimized/dumpster5-500x500-1.webp" 
            alt="Budget dumpster rental comparison - cheap waste management options" 
            className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
          />
        </section>

        {/* Budget Comparison Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Budget Dumpster Rental Comparison</h2>
          <p className="text-lg text-gray-700 mb-8">
            See how our affordable dumpster rental prices compare to other options in your area. We're committed to providing the best value for your money.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-4 text-left">Service</th>
                  <th className="border border-gray-300 p-4 text-left">Icon Dumpsters</th>
                  <th className="border border-gray-300 p-4 text-left">Competitor A</th>
                  <th className="border border-gray-300 p-4 text-left">Competitor B</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">15 Yard Dumpster</td>
                  <td className="border border-gray-300 p-4 text-teal-600 font-semibold">$299</td>
                  <td className="border border-gray-300 p-4">$350</td>
                  <td className="border border-gray-300 p-4">$325</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">20 Yard Dumpster</td>
                  <td className="border border-gray-300 p-4 text-teal-600 font-semibold">$349</td>
                  <td className="border border-gray-300 p-4">$400</td>
                  <td className="border border-gray-300 p-4">$375</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">30 Yard Dumpster</td>
                  <td className="border border-gray-300 p-4 text-teal-600 font-semibold">$399</td>
                  <td className="border border-gray-300 p-4">$450</td>
                  <td className="border border-gray-300 p-4">$425</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Delivery Fee</td>
                  <td className="border border-gray-300 p-4 text-teal-600 font-semibold">Included</td>
                  <td className="border border-gray-300 p-4">$50</td>
                  <td className="border border-gray-300 p-4">$25</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Pickup Fee</td>
                  <td className="border border-gray-300 p-4 text-teal-600 font-semibold">Included</td>
                  <td className="border border-gray-300 p-4">$50</td>
                  <td className="border border-gray-300 p-4">$25</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">💡 Pro Tip: Calculate Total Cost</h3>
            <p className="text-gray-700 mb-4">
              When comparing cheap dumpster rentals, make sure to calculate the total cost including all fees. Some companies advertise low base prices but add significant delivery and pickup fees.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-trust-blue-dark mb-2">Our Total Cost Example (20 Yard)</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Base rental: $349</li>
                  <li>• Delivery: $0 (included)</li>
                  <li>• Pickup: $0 (included)</li>
                  <li>• <strong>Total: $349</strong></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-trust-blue-dark mb-2">Competitor Total Cost Example</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Base rental: $375</li>
                  <li>• Delivery: $25</li>
                  <li>• Pickup: $25</li>
                  <li>• <strong>Total: $425</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Banner */}
        <CalculatorBanner />

        {/* Final Budget Image */}
        <section className="mb-12">
          <img 
            src="/images/optimized/dumpsterSmallBanner2.webp" 
            alt="Affordable dumpster rental service - cheap waste management near you" 
            className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
          />
        </section>

        {/* Budget-Friendly Tips Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Maximizing Value: Getting the Most from Cheap Dumpster Rentals</h2>
          <p className="text-lg text-gray-700 mb-8">
            Getting the best value from cheap dumpster rentals requires smart planning and understanding of the rental process. Here are proven strategies to maximize your investment and avoid common pitfalls that can increase costs.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Planning for Maximum Savings</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <div>
                    <strong>Accurate Size Estimation:</strong> Measure your project area and estimate debris volume. Our team can help you choose the most cost-effective dumpster size to avoid overpaying for unused capacity.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <div>
                    <strong>Timeline Planning:</strong> Complete your project within the rental period to avoid additional fees. Most cheap dumpster rentals include 7 days, which is sufficient for most projects.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <div>
                    <strong>Material Separation:</strong> Separate recyclable materials from general waste. Some materials can be recycled for free, reducing your overall disposal costs.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <div>
                    <strong>Weather Considerations:</strong> Plan your project during favorable weather conditions to avoid delays that could extend your rental period.
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost-Saving Strategies</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#0d9488] mr-2">•</span>
                  <div>
                    <strong>Bundle Services:</strong> If you need multiple services (delivery, pickup, disposal), bundling them with one company often provides better rates than separate services.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0d9488] mr-2">•</span>
                  <div>
                    <strong>Off-Season Booking:</strong> Winter months often have lower demand and better rates for dumpster rentals in many areas.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0d9488] mr-2">•</span>
                  <div>
                    <strong>Group Projects:</strong> Coordinate with neighbors or nearby projects to share dumpster costs and maximize efficiency.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0d9488] mr-2">•</span>
                  <div>
                    <strong>Local vs. National:</strong> Local companies often provide more competitive pricing and better service than national chains.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-red-900 mb-4">⚠️ Common Mistakes That Increase Costs</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Size Miscalculations</h4>
                <p className="text-gray-700 text-sm">Choosing a dumpster that's too small leads to multiple rentals, while oversized dumpsters waste money on unused capacity.</p>
              </div>
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Prohibited Materials</h4>
                <p className="text-gray-700 text-sm">Including banned items like hazardous waste or electronics can result in significant additional fees and complications.</p>
              </div>
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Weight Overages</h4>
                <p className="text-gray-700 text-sm">Exceeding weight limits (typically 1-3 tons depending on size) results in expensive overage charges at $55+ per ton.</p>
              </div>
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Last-Minute Changes</h4>
                <p className="text-gray-700 text-sm">Changing dumpster size or extending rental periods after delivery often incurs additional fees and administrative costs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions - Cheap Dumpster Rentals Near Me</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What's the cheapest dumpster rental size available?</h3>
              <p className="text-gray-700">
                Our 15-yard dumpster is typically the most affordable option, starting at $299. It's perfect for small to medium projects like kitchen renovations, bathroom remodels, or garage cleanouts.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Are there any hidden fees with cheap dumpster rentals?</h3>
              <p className="text-gray-700">
                No hidden fees! Our pricing is completely transparent. The only additional cost is weight overage at $55/ton, which is clearly stated upfront. Delivery, pickup, and disposal are all included in our base price.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How can I get the cheapest dumpster rental near me?</h3>
              <p className="text-gray-700">
                To get the cheapest dumpster rental, choose the right size for your project, plan to complete within the rental period, and compare quotes from multiple companies. We're confident our prices are among the most competitive in the area.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer discounts for longer rentals?</h3>
              <p className="text-gray-700">
                Yes, we offer flexible rental terms. If you need the dumpster longer than the standard 7 days, we can often extend the rental at no additional cost, making it even more cost-effective for your project.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0d9488] to-teal-700 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Cheap Dumpster Rental Quote Today</h2>
          <p className="text-xl mb-8">Don't overpay for dumpster rental. Get our competitive quote and save money on your project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://icondumpsters.com/#quote-form"
              className="bg-white text-[#0d9488] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Budget Quote
            </Link>
            <Link 
              href="tel:(801) 918-6000"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0d9488] transition-colors"
            >
              Call (801) 918-6000
            </Link>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}