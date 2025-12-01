import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteFormSection from '@/app/components/QuoteFormSection';
import FAQSchema from '@/app/components/FAQSchema';

export const metadata: Metadata = {
  title: "How Much Does It Cost to Rent a Dumpster in Salt Lake City? | Icon Dumpsters",
  description: 'Get transparent pricing for dumpster rental in Salt Lake City, Utah. Learn about costs, compare dumpster vs. dump, weekly rates, junk removal prices, and find the most popular dumpster size. Call (801) 918-6000.',
  keywords: 'dumpster rental cost Salt Lake City, SLC dumpster prices, dumpster rental Salt Lake City Utah, how much does dumpster cost SLC, Salt Lake City dumpster rental pricing',
  alternates: {
    canonical: 'https://icondumpsters.com/pricing/dumpster-rental-cost-salt-lake-city',
  },
  openGraph: {
    title: "How Much Does It Cost to Rent a Dumpster in Salt Lake City? | Icon Dumpsters",
    description: "Get transparent pricing for dumpster rental in Salt Lake City, Utah. Learn about costs, compare options, and find the best dumpster size for your project.",
    url: 'https://icondumpsters.com/pricing/dumpster-rental-cost-salt-lake-city',
    siteName: 'Icon Dumpsters',
    type: 'article',
    locale: 'en_US',
    images: [
      {
        url: 'https://icondumpsters.com/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp',
        width: 1200,
        height: 630,
        alt: 'Dumpster Rental in Salt Lake City, Utah',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "How Much Does It Cost to Rent a Dumpster in Salt Lake City? | Icon Dumpsters",
    description: "Get transparent pricing for dumpster rental in Salt Lake City, Utah.",
    images: ['https://icondumpsters.com/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp'],
  },
};

const faqData = [
  {
    question: "How much does it cost to rent a dumpster in Salt Lake City?",
    answer: "Dumpster rental costs in Salt Lake City typically range from $375 to $635, depending on the size you need. A 15-yard dumpster starts at $375-$415, a 20-yard dumpster costs $415-$465, and a 30-yard dumpster ranges from $465-$525. These prices include delivery, pickup, disposal fees up to the weight allowance, and basic permit assistance. Salt Lake City may require a permit for street placement ($25-$50), which we can help you obtain."
  },
  {
    question: "How much does it cost to rent a dumpster in Utah?",
    answer: "Dumpster rental costs across Utah range from $299 to $650, with an average of $425. Prices vary by city due to different disposal facility fees, distance to landfills, and local permit requirements. Salt Lake City, being the largest metro area, typically has rates in the $375-$635 range. Smaller Utah cities may have slightly lower rates due to proximity to disposal facilities. All our quotes include delivery, pickup, and standard disposal fees."
  },
  {
    question: "Is it cheaper to get a dumpster or go to the dump?",
    answer: "For most projects, renting a dumpster is more cost-effective and convenient than making multiple trips to the dump. Here's why: A 15-yard dumpster rental ($375-$415) holds about 3-4 pickup truck loads. If you make 3-4 trips to the dump yourself, you'd pay $25-$50 per trip in disposal fees ($75-$200 total), plus your time, fuel costs, vehicle wear, and the hassle of loading/unloading. Dumpster rental gives you 7 days to fill it at your own pace, includes all disposal fees, and saves you time and effort. However, for very small amounts (less than one truckload), a single dump trip might be cheaper."
  },
  {
    question: "How much does it cost to rent a dumpster for a week?",
    answer: "Dumpster rental for one week in Salt Lake City typically costs $375-$525 depending on size. Our standard rental period is 7 days, which is included in the base price. A 15-yard dumpster starts at $375 for 7 days, a 20-yard dumpster starts at $415, and a 30-yard dumpster starts at $465. All prices include delivery, pickup, disposal fees up to the weight allowance, and driveway protection boards. If you need the dumpster longer than 7 days, we can extend the rental period for an additional daily fee."
  },
  {
    question: "What is the minimum price for junk removal?",
    answer: "The minimum price for junk removal services in Salt Lake City typically starts around $150-$200 for a single truckload pickup. Most junk removal companies charge $200-$400 per truckload, with additional fees for heavy items, stairs, or difficult access. In comparison, our 15-yard dumpster rental starts at $375 for 7 days, which holds 3-4 truckloads worth of debris. For projects with multiple items or ongoing work, dumpster rental provides better value. However, for single-item removal or very small amounts, junk removal may be more convenient."
  },
  {
    question: "Is renting a dumpster worth it?",
    answer: "Yes, renting a dumpster is worth it for most projects because it saves time, money, and effort. Benefits include: 1) Cost-effective for multiple loads (one dumpster holds 3-4 truckloads), 2) Convenience (7 days to fill at your own pace), 3) All-inclusive pricing (delivery, pickup, disposal fees included), 4) No vehicle wear or fuel costs, 5) Professional disposal and recycling, 6) Suitable for ongoing projects. Dumpster rental is especially worth it for home renovations, cleanouts, construction projects, or any project generating substantial debris. For very small amounts (less than one truckload), a single dump trip might be more economical."
  },
  {
    question: "What size dumpster is rented the most?",
    answer: "The 20-yard dumpster is the most popular size rented in Salt Lake City. It's the perfect middle ground for most projects, holding 4-6 pickup truck loads of debris. The 20-yard dumpster is ideal for whole-home decluttering, medium renovations, light commercial refreshes, and multi-room cleanouts. It costs $415-$465 and includes 3 tons of weight allowance. While the 15-yard is great for smaller projects and the 30-yard for large construction, the 20-yard dumpster offers the best balance of capacity and price for most Salt Lake City homeowners and contractors."
  }
];

export default function DumpsterRentalCostSaltLakeCityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FAQSchema 
        faqs={faqData}
        pageUrl="https://icondumpsters.com/pricing/dumpster-rental-cost-salt-lake-city"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0d9488] to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-purple-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link href="/pricing" className="hover:text-white">Pricing</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">Salt Lake City</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How Much Does It Cost to Rent a Dumpster in Salt Lake City?
          </h1>
          
          <p className="text-xl text-purple-100 mb-8 max-w-3xl">
            Get transparent, upfront pricing for dumpster rental in Salt Lake City, Utah. 
            We break down costs, compare options, and help you choose the right dumpster size for your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
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
              className="inline-flex items-center justify-center bg-[#0d9488] border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-800 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Quick Answer Section */}
          <div className="max-w-4xl mx-auto mb-16 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dumpster Rental Costs in Salt Lake City
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Dumpster rental in Salt Lake City typically costs <strong className="text-[#0d9488]">$375 to $635</strong>, 
                depending on the size you need. Here's a breakdown of our pricing:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-teal-50 rounded-lg p-6 border-2 border-[#0d9488]">
                  <h3 className="text-2xl font-bold text-[#0d9488] mb-2">15 Yard</h3>
                  <p className="text-3xl font-bold text-gray-900 mb-2">$375-$415</p>
                  <p className="text-sm text-gray-600">Includes 2 tons</p>
                  <p className="text-sm text-gray-600 mt-2">Best for: Single-room remodels, small cleanouts</p>
                </div>
                <div className="bg-teal-50 rounded-lg p-6 border-2 border-[#0d9488]">
                  <h3 className="text-2xl font-bold text-[#0d9488] mb-2">20 Yard</h3>
                  <p className="text-3xl font-bold text-gray-900 mb-2">$415-$465</p>
                  <p className="text-sm text-gray-600">Includes 3 tons</p>
                  <p className="text-sm text-gray-600 mt-2">Best for: Whole-home cleanouts, medium renovations</p>
                </div>
                <div className="bg-teal-50 rounded-lg p-6 border-2 border-[#0d9488]">
                  <h3 className="text-2xl font-bold text-[#0d9488] mb-2">30 Yard</h3>
                  <p className="text-3xl font-bold text-gray-900 mb-2">$465-$525</p>
                  <p className="text-sm text-gray-600">Includes 4 tons</p>
                  <p className="text-sm text-gray-600 mt-2">Best for: Large remodels, construction projects</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                <strong>All prices include:</strong> Delivery, pickup, disposal fees up to the weight allowance, 
                driveway protection boards, and basic permit assistance. The standard rental period is 7 days.
              </p>

              <p className="text-gray-700">
                <strong>Note:</strong> Salt Lake City may require a permit ($25-$50) if the dumpster needs to be placed 
                on a public street or sidewalk. We can help you obtain this permit.
              </p>
            </div>
          </div>

          {/* Detailed Q&A Sections */}
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Question 1: Cost in Utah */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How Much Does It Cost to Rent a Dumpster in Utah?
              </h2>
              <p className="text-gray-700 mb-4">
                Dumpster rental costs across Utah range from <strong>$299 to $650</strong>, with an average of <strong>$425</strong>. 
                Prices vary by city due to several factors:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Disposal facility fees:</strong> Different landfills and transfer stations charge different rates</li>
                <li><strong>Distance to disposal facilities:</strong> Longer distances mean higher fuel costs</li>
                <li><strong>Local permit requirements:</strong> Some cities require permits for street placement</li>
                <li><strong>Demand and competition:</strong> Metro areas like Salt Lake City may have slightly higher rates</li>
              </ul>
              <p className="text-gray-700">
                Salt Lake City, being the largest metro area, typically has rates in the $375-$635 range. Smaller Utah cities 
                may have slightly lower rates due to proximity to disposal facilities. All our quotes include delivery, pickup, 
                and standard disposal fees, so you know exactly what you're paying upfront.
              </p>
            </div>

            {/* Question 2: Dumpster vs. Dump */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Is It Cheaper to Get a Dumpster or Go to the Dump?
              </h2>
              <p className="text-gray-700 mb-4">
                For most projects, <strong>renting a dumpster is more cost-effective and convenient</strong> than making multiple 
                trips to the dump yourself. Here's a detailed comparison:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Dumpster Rental Advantages:</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Cost-effective for multiple loads:</strong> A 15-yard dumpster ($375-$415) holds 3-4 pickup truck loads</li>
                  <li><strong>All-inclusive pricing:</strong> Delivery, pickup, and disposal fees are included</li>
                  <li><strong>Time savings:</strong> 7 days to fill at your own pace vs. multiple trips</li>
                  <li><strong>No vehicle wear:</strong> No wear and tear on your truck</li>
                  <li><strong>No fuel costs:</strong> We handle all transportation</li>
                  <li><strong>Professional disposal:</strong> Materials are properly sorted and recycled when possible</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Going to the Dump Yourself:</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Disposal fees:</strong> $25-$50 per trip (3-4 trips = $75-$200)</li>
                  <li><strong>Fuel costs:</strong> Multiple trips add up</li>
                  <li><strong>Time investment:</strong> Loading, driving, unloading, repeat</li>
                  <li><strong>Vehicle wear:</strong> Extra wear on your truck</li>
                  <li><strong>Physical labor:</strong> Loading and unloading debris multiple times</li>
                </ul>
              </div>

              <p className="text-gray-700">
                <strong>Bottom line:</strong> For projects generating 2+ truckloads of debris, dumpster rental is almost always 
                cheaper and more convenient. For very small amounts (less than one truckload), a single dump trip might be more economical.
              </p>
            </div>

            {/* Question 3: Weekly Rental Cost */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How Much Does It Cost to Rent a Dumpster for a Week?
              </h2>
              <p className="text-gray-700 mb-4">
                Dumpster rental for one week in Salt Lake City typically costs <strong>$375-$525</strong> depending on size. 
                Our standard rental period is <strong>7 days</strong>, which is included in the base price.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-teal-50 rounded-lg p-4">
                  <p className="font-bold text-lg text-gray-900">15 Yard</p>
                  <p className="text-2xl font-bold text-[#0d9488]">$375</p>
                  <p className="text-sm text-gray-600">for 7 days</p>
                </div>
                <div className="bg-teal-50 rounded-lg p-4">
                  <p className="font-bold text-lg text-gray-900">20 Yard</p>
                  <p className="text-2xl font-bold text-[#0d9488]">$415</p>
                  <p className="text-sm text-gray-600">for 7 days</p>
                </div>
                <div className="bg-teal-50 rounded-lg p-4">
                  <p className="font-bold text-lg text-gray-900">30 Yard</p>
                  <p className="text-2xl font-bold text-[#0d9488]">$465</p>
                  <p className="text-sm text-gray-600">for 7 days</p>
                </div>
              </div>

              <p className="text-gray-700">
                All prices include delivery, pickup, disposal fees up to the weight allowance, and driveway protection boards. 
                If you need the dumpster longer than 7 days, we can extend the rental period for an additional daily fee. 
                Just let us know your timeline when you order.
              </p>
            </div>

            {/* Question 4: Minimum Junk Removal Price */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What Is the Minimum Price for Junk Removal?
              </h2>
              <p className="text-gray-700 mb-4">
                The minimum price for junk removal services in Salt Lake City typically starts around <strong>$150-$200</strong> 
                for a single truckload pickup. Most junk removal companies charge <strong>$200-$400 per truckload</strong>, 
                with additional fees for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Heavy items (appliances, furniture)</li>
                <li>Stairs or difficult access</li>
                <li>Special handling requirements</li>
                <li>Multiple pickup locations</li>
              </ul>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Dumpster Rental vs. Junk Removal:</h3>
                <p className="text-gray-700 mb-2">
                  Our 15-yard dumpster rental starts at <strong>$375 for 7 days</strong>, which holds <strong>3-4 truckloads</strong> 
                  worth of debris. That's equivalent to $93-$125 per truckload, compared to $200-$400 per truckload for junk removal.
                </p>
                <p className="text-gray-700">
                  <strong>For projects with multiple items or ongoing work, dumpster rental provides significantly better value.</strong> 
                  However, for single-item removal or very small amounts, junk removal may be more convenient.
                </p>
              </div>
            </div>

            {/* Question 5: Is It Worth It */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Is Renting a Dumpster Worth It?
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>Yes, renting a dumpster is worth it for most projects</strong> because it saves time, money, and effort. 
                Here's why:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Cost-Effective
                  </h3>
                  <p className="text-gray-700">
                    One dumpster holds 3-4 truckloads. At $375-$415 for a 15-yard dumpster, that's $93-$125 per truckload 
                    vs. $200-$400 for junk removal.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Convenient
                  </h3>
                  <p className="text-gray-700">
                    Get 7 days to fill the dumpster at your own pace. No need to schedule multiple pickups or rush your project.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    All-Inclusive
                  </h3>
                  <p className="text-gray-700">
                    Delivery, pickup, disposal fees, and permit assistance are all included. No hidden costs or surprises.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Professional
                  </h3>
                  <p className="text-gray-700">
                    Materials are properly sorted, recycled when possible, and disposed of according to regulations.
                  </p>
                </div>
              </div>

              <p className="text-gray-700">
                <strong>Dumpster rental is especially worth it for:</strong> Home renovations, whole-house cleanouts, 
                construction projects, estate cleanouts, or any project generating substantial debris. For very small 
                amounts (less than one truckload), a single dump trip might be more economical.
              </p>
            </div>

            {/* Question 6: Most Popular Size */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What Size Dumpster Is Rented the Most?
              </h2>
              <p className="text-gray-700 mb-4">
                The <strong>20-yard dumpster is the most popular size</strong> rented in Salt Lake City. It's the perfect 
                middle ground for most projects, offering the best balance of capacity and price.
              </p>
              
              <div className="bg-teal-50 rounded-lg p-6 mb-4">
                <h3 className="font-bold text-xl text-[#0d9488] mb-3">Why the 20-Yard Dumpster is Most Popular:</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Perfect capacity:</strong> Holds 4-6 pickup truck loads of debris</li>
                  <li><strong>Ideal for common projects:</strong> Whole-home decluttering, medium renovations, light commercial refreshes</li>
                  <li><strong>Great value:</strong> Costs $415-$465 and includes 3 tons of weight allowance</li>
                  <li><strong>Not too big, not too small:</strong> Big enough for most projects without paying for unused space</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-lg text-gray-900 mb-2">15 Yard</p>
                  <p className="text-sm text-gray-600">Best for: Small projects, single-room remodels</p>
                </div>
                <div className="bg-teal-100 rounded-lg p-4 border-2 border-[#0d9488]">
                  <p className="font-bold text-lg text-[#0d9488] mb-2">20 Yard ⭐ Most Popular</p>
                  <p className="text-sm text-gray-600">Best for: Most home projects, whole-home cleanouts</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-lg text-gray-900 mb-2">30 Yard</p>
                  <p className="text-sm text-gray-600">Best for: Large construction, major remodels</p>
                </div>
              </div>
            </div>

          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-[#0d9488] to-teal-700 rounded-2xl shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-purple-100 mb-6">
              Get a free, no-obligation quote for your dumpster rental in Salt Lake City. 
              Our team will help you choose the perfect size and schedule delivery.
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
                className="inline-flex items-center justify-center bg-[#0d9488] border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-800 transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/dumpster-rental-salt-lake-city-ut" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-[#0d9488] mb-2">Dumpster Rental Salt Lake City</h3>
              <p className="text-gray-600 text-sm">Learn more about our dumpster rental services in Salt Lake City</p>
            </Link>
            <Link href="/pricing/dumpster-rental-costs" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-[#0d9488] mb-2">Dumpster Rental Costs Guide</h3>
              <p className="text-gray-600 text-sm">Comprehensive guide to dumpster rental pricing in Utah</p>
            </Link>
            <Link href="/dumpster-sizes" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-[#0d9488] mb-2">Dumpster Sizes Guide</h3>
              <p className="text-gray-600 text-sm">Find the right dumpster size for your project</p>
            </Link>
          </div>
        </div>
      </section>

      <QuoteFormSection 
        title="Get Your Free Quote Today"
        description="Tell us about your project and we'll provide a transparent, all-inclusive quote for dumpster rental in Salt Lake City."
      />
    </div>
  );
}

