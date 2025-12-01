import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import DumpsterCalculator from '../components/DumpsterCalculator';
import VideoWithErrorHandling from '../components/VideoWithErrorHandling';
import FAQSection from '../components/FAQSection';

export const metadata: Metadata = {
  title: "How Much Does It Cost to Rent a Dumpster? | Icon Dumpsters",
  description: 'Discover dumpster rental pricing in Utah. We break down the 5 key factors that affect your cost: location, size, debris type, weight, and rental period. Transparent flat-rate pricing with no surprises.',
  keywords: 'dumpster rental cost, dumpster prices, how much does a dumpster cost, dumpster rental rates, Utah dumpster pricing',
  openGraph: {
    title: "How Much Does It Cost to Rent a Dumpster? | Icon Dumpsters",
    description: "Discover dumpster rental pricing in Utah. Transparent flat-rate pricing with no surprises.",
    url: 'https://icondumpsters.com/pricing',
    siteName: 'Icon Dumpsters',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://icondumpsters.com/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp',
        width: 1200,
        height: 630,
        alt: 'Icon Dumpsters Utah',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "How Much Does It Cost to Rent a Dumpster? | Icon Dumpsters",
    description: "Discover dumpster rental pricing in Utah. Transparent flat-rate pricing with no surprises.",
    images: ['https://icondumpsters.com/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp'],
  },
  alternates: { canonical: 'https://icondumpsters.com/pricing' }
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0d9488] to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-purple-200 mb-4">
            <a href="/" className="hover:text-white">Home</a>
            <span className="mx-2">&gt;</span>
            <a href="/services" className="hover:text-white">Services</a>
            <span className="mx-2">&gt;</span>
            <span className="text-white">Pricing</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How Dumpster Prices Work
          </h1>
          
          <div className="max-w-2xl">
            <Image
              src="/images/optimized/dumpsters-1200w.webp"
              alt="Icon Dumpsters Professional Service"
              width={600}
              height={400}
              className="rounded-lg shadow-xl mb-8"
            />
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DumpsterCalculator />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Related Pricing Pages */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing Resources</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Link href="/pricing/transparent-pricing" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                <h3 className="text-xl font-semibold text-[#0d9488] mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">No hidden fees. Clear bundle pricing for all rental periods.</p>
              </Link>
              <Link href="/pricing/no-hidden-fees" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                <h3 className="text-xl font-semibold text-[#0d9488] mb-2">No Hidden Fees</h3>
                <p className="text-gray-600">What you see is what you pay. No surprise charges.</p>
              </Link>
              <Link href="/pricing/dumpster-rental-costs" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                <h3 className="text-xl font-semibold text-[#0d9488] mb-2">Dumpster Rental Costs</h3>
                <p className="text-gray-600">Complete pricing breakdown and cost factors.</p>
              </Link>
              <Link href="/pricing/competitive-pricing" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                <h3 className="text-xl font-semibold text-[#0d9488] mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">Fair pricing across Utah with ways to save.</p>
              </Link>
              <Link href="/pricing/dumpster-rental-cost-salt-lake-city" className="block p-6 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors border-2 border-[#0d9488]">
                <h3 className="text-xl font-semibold text-[#0d9488] mb-2">Dumpster Rental Cost in Salt Lake City</h3>
                <p className="text-gray-600">Complete pricing guide for SLC with answers to common cost questions.</p>
              </Link>
            </div>
          </div>
          
          {/* Pricing Range */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Much Does It Cost to Rent a Dumpster?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              It costs between <span className="font-bold text-[#0d9488]">$299 and $650</span> to rent a dumpster in Utah, 
              with an average of <span className="font-bold text-[#0d9488]">$425</span>. While that's a range, we work hard to pair 
              our customers with the right dumpster price for their project. We consider five key factors before offering a quote.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Ready to start cleaning? Get pricing now:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:8019186000"
                className="inline-flex items-center justify-center bg-[#0d9488] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (801) 918-6000
              </a>
              <a 
                href="/#quote-form"
                className="inline-flex items-center justify-center bg-white border-2 border-[#0d9488] text-[#0d9488] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-video bg-gray-200">
              <VideoWithErrorHandling src="/rolloff.mp4" />
            </div>
          </div>

          {/* 5 Factors Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              The 5 Factors That Determine Your Dumpster Rental Cost
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              We take your location, dumpster size, debris type, debris weight and rental period into account when offering a quote. 
              Here's how these five factors affect your dumpster cost.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Factor 1: Location */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Location</h3>
                <p className="text-gray-700">
                  Disposal fees, demand and fuel costs vary from city to city. It may cost less to rent a dumpster 
                  in a small Utah suburb than in Salt Lake City.
                </p>
              </div>

              {/* Factor 2: Dumpster Size */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Dumpster Size</h3>
                <p className="text-gray-700">
                  Our roll off dumpsters come in several different sizes, ranging from 15 to 30 cubic yards. The container size 
                  you need depends on your job and the debris you're tossing. The bigger the bin, the more your dumpster rental 
                  will typically cost.
                </p>
              </div>

              {/* Factor 3: Debris Type */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Debris Type</h3>
                <p className="text-gray-700">
                  Your disposal cost is determined by the type of debris you're throwing away. Our drivers must take household junk, 
                  yard waste and construction materials to different processing facilities. Depending on the city you're in, you might 
                  pay more if you're tossing difficult-to-process items.
                </p>
              </div>

              {/* Factor 4: Debris Weight */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Debris Weight</h3>
                <p className="text-gray-700">
                  Landfills charge disposal costs based on the tonnage of your debris. We'll provide a set weight limit when you 
                  rent a dumpster, and you must stay within it to avoid extra fees. If you're tossing heavy materials like brick or 
                  concrete, you can typically only fill your dumpster halfway to ensure a safe and successful pickup.
                </p>
              </div>

              {/* Factor 5: Rental Period */}
              <div className="bg-white rounded-xl shadow-lg p-8 md:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Rental Period</h3>
                <p className="text-gray-700">
                  We include the length of your rental period in your dumpster price. You can usually have your container on-site 
                  for seven to 10 days, but this depends on where you're located. If you need to keep your bin longer, we can 
                  often extend your rental period for a flat daily rate.
                </p>
              </div>
            </div>
          </div>

          {/* Contractor Pricing Callout */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Smarter Pricing for Contractors</h2>
              <p className="text-xl text-teal-100 mb-8">
                Big projects demand flexible solutions. Our contractor pricing helps you save with customized rates on tonnage, 
                debris type and project scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/frequent-buyers"
                  className="inline-flex items-center justify-center bg-white text-teal-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-colors"
                >
                  Request Contractor Pricing
                </a>
                <a 
                  href="tel:8019186000"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  Call (801) 918-6000
                </a>
              </div>
            </div>
          </div>

          {/* Flat-Rate vs Variable Pricing */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Differences Between Flat-Rate and Variable Pricing
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Icon Dumpsters offers flat-rate quotes so you know the full price of your dumpster rental from the start. 
              This is different from variable pricing, which often leads to costs adding up throughout your rental period.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Flat-Rate */}
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Flat-Rate Invoices</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Our dumpster rental prices bundle your rental period, delivery and pickup upfront. Your invoice also includes 
                  a set weight limit, which ranges from 1 to 10 tons depending on the size of your dumpster and what you're throwing away.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Know your total cost upfront
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Easier budgeting for your project
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    No surprise charges
                  </li>
                </ul>
              </div>

              {/* Variable Pricing */}
              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Variable Invoices</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Variable invoices aren't necessarily more expensive, but they obscure your total dumpster price. Unlike Icon Dumpsters, 
                  other dumpster rental companies may charge you separately for your rental and the landfill disposal. You won't know 
                  how much you're paying until the landfill has processed your materials.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Unknown final costs
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Hard to budget your project
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Potential surprise charges
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Fees Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Will I Ever Pay More Than a Flat Rate?
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              We make your roll off dumpster rental price as transparent as possible. However, in certain instances you may have to 
              pay more than you originally planned. To avoid surprise charges, make sure you're familiar with what dumpster rental 
              costs may be extra:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Per-item Costs */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Per-Item Costs</h3>
                <p className="text-gray-700">
                  You may be limited to how many mattresses, appliances and electronics you can throw in one dumpster. 
                  These items take longer for landfills to process, which increases disposal costs.
                </p>
              </div>

              {/* Overage Fees */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Overage Fees</h3>
                <p className="text-gray-700">
                  All our containers have a set weight limit that reflects the tonnage of debris covered in your dumpster price. 
                  Going over it will result in a prorated per-ton disposal fee of $55/ton.
                </p>
              </div>

              {/* Trip Fees */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Trip Fees</h3>
                <p className="text-gray-700">
                  If we can't deliver or pick up your roll off dumpster for any reason, you'll incur extra charges. This includes 
                  having parked cars or excess snow in your driveway.
                </p>
              </div>

              {/* Extension Fees */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Extension Fees</h3>
                <p className="text-gray-700">
                  Need to push back your project deadline? You can often extend your dumpster rental period for a flat daily rate 
                  of $25/day.
                </p>
              </div>

              {/* Cancellation Fees */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cancellation Fees</h3>
                <p className="text-gray-700">
                  If you cancel your dumpster rental after we've confirmed your order, there's no fee unless you wait until the 
                  last minute. We do charge a fee if you cancel after 3 p.m. the day before your scheduled delivery date.
                </p>
              </div>

              {/* Permit Fees */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Permit Fees</h3>
                <p className="text-gray-700">
                  Planning to keep your bin in the street or on public property? You might have to get a right-of-way permit from 
                  your local government. Permit prices typically range from $20 to $150.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection
            faqs={[
              {
                question: "How much to rent a dumpster for 1 week?",
                answer: "Dumpster rental for one week typically costs $299-$450 depending on size. Our 15-yard dumpster starts at $299 for 7 days, 20-yard dumpsters start at $349, and 30-yard dumpsters start at $450. All prices include delivery, pickup, and disposal fees. The standard rental period is 7 days, so you get a full week included in the base price."
              },
              {
                question: "How much to rent a small dumpster for a week?",
                answer: "Small dumpster rentals (10-15 yards) for one week typically cost $249-$349. Our 15-yard dumpster starts at $299 for a 7-day rental, which includes delivery, pickup, and disposal. This size is perfect for small projects like garage cleanouts, small bathroom remodels, or yard waste removal. For even smaller needs, we offer 10-yard dumpsters starting at $249."
              },
              {
                question: "Is renting a dumpster cheaper than junk removal?",
                answer: "For most projects with significant debris, dumpster rental is typically cheaper than junk removal. Dumpster rentals provide better value when you have multiple items, ongoing projects, or need time to fill the container. A 15-yard dumpster rental starts at $299 for 7 days, while junk removal typically costs $200-$400 per truckload. If you need multiple pickups, dumpster rental becomes significantly more cost-effective."
              },
              {
                question: "Is junk removal or dumpster rental cheaper?",
                answer: "Dumpster rental is usually cheaper for projects with substantial debris or ongoing work. A dumpster gives you 7 days to fill it at your own pace, while junk removal charges per truckload. For example, a 20-yard dumpster rental starts at $349 for a week, while junk removal typically costs $200-$400 per pickup. If you need 2-3 pickups, the dumpster rental saves money."
              },
              {
                question: "How much does junk removal charge?",
                answer: "Junk removal services typically charge $150-$500 per truckload, with most companies charging $200-$400 for a standard pickup. Pricing depends on volume, item types, and location. Many junk removal companies charge by the truckload or by volume, with additional fees for heavy items, stairs, or difficult access. For comparison, a dumpster rental often provides better value for larger projects, as you get 7 days of use and can fill it at your own pace."
              },
              {
                question: "What is the most affordable way to get rid of junk?",
                answer: "The most affordable way to get rid of junk depends on your situation. For large amounts of debris or ongoing projects, dumpster rental is typically the most cost-effective option. Our 15-yard dumpster starts at $299 for 7 days, giving you time to fill it completely. For smaller amounts, you might consider donating usable items to charity, selling items online, or taking items to a local transfer station yourself (if you have a truck)."
              }
            ]}
            title="Pricing & Cost Comparison FAQs"
            description="Get answers to common questions about dumpster rental pricing, cost comparisons, and finding the most affordable waste removal solution."
            pageUrl="https://icondumpsters.com/pricing"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0d9488] to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Customized Dumpster Price</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            The best way to know your full dumpster cost is to get a quote. We have you covered, whether you want to order your 
            affordable dumpster rental online or over the phone. If you have specific questions about your project, we recommend 
            speaking with our team directly.
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
              Get Free Quote Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

