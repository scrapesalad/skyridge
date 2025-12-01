export const dynamic = 'force-static';

﻿import Image from "next/image";
import QuoteForm from "./components/QuoteForm";
import TrustSection from "./components/TrustSection";
import QuickQuoteButton from "./components/QuickQuoteButton";
import FeesAndSurcharges from "./components/FeesAndSurcharges";
import AvailableTodayBadge from "./components/AvailableTodayBadge";
import { track } from "./components/analytics";
import OptimizedImage from "./components/OptimizedImage";
import ImageWithFallback from "./components/ImageWithFallback";
import Hero from "./components/hero";
import PricingCalculator from "./components/PricingCalculator";
import ServiceAreasMobileTabs from "./components/ServiceAreasMobileTabs";
import FAQSchema from "./components/FAQSchema";
import StrategicInternalLinks from "./components/StrategicInternalLinks";
import VideoWithErrorHandling from "./components/VideoWithErrorHandling";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Utah Dumpster Rentals | Same-Day Delivery | Icon",
  description: "Find dumpster rentals near me in Utah. Same-day delivery on 15-30 yard roll-off dumpsters. Residential & commercial service. Call (801) 918-6000.",
  keywords: ['dumpster rentals near me', 'dumpster rental near me', 'utah dumpster rental', 'construction waste removal', 'residential dumpster rental', 'commercial dumpster rental', 'roll off dumpster near me'],
  alternates: { canonical: 'https://icondumpsters.com/' },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'Utah Dumpster Rentals | Same-Day Delivery | Icon',
    description: 'Find dumpster rentals near me in Utah. Same-day delivery on 15-30 yard roll-off dumpsters. Residential & commercial service. Call (801) 918-6000.',
    url: 'https://icondumpsters.com/',
    images: [{ url: '/images/ca97086c-729c-480f-a90d-d117c1278945.webp', width: 1200, height: 630, alt: 'Icon Dumpsters - Utah Dumpster Rental Services' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function Home() {
  return (
    <main className="min-h-screen relative bg-gradient-to-br from-purple-50 via-white to-purple-100 overflow-hidden">
      {/* Cool gradient wipe backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-200/20 via-pink-200/20 to-purple-300/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-100/30 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-300/10 to-blue-300/10 rounded-full blur-3xl"></div>
      {/* Note: Structured data is handled globally by the StructuredData component in layout.tsx */}

      {/* Optimized Hero Section */}
      <header className="relative z-10">
        <Hero />
      </header>

      {/* Veterans Discount Banner */}
      <section className="relative z-10 bg-gradient-to-r from-red-600 via-red-700 to-blue-800 py-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/Gemini_Generated_Image_edjn42edjn42edjn.png"
                alt="Veterans Discount - 10% Off Dumpster Rentals"
                width={200}
                height={150}
                className="rounded-lg shadow-lg"
                priority
                unoptimized
              />
            </div>
            
            {/* Center: Discount Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Thank You for Your Service!
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-1">
                <span className="font-bold text-3xl md:text-4xl">10% OFF</span> All Dumpster Rentals
              </p>
              <p className="text-base text-white/80">
                Active duty, veterans, and military families receive special pricing on all our dumpster rental services.
              </p>
            </div>
            
            {/* Right: CTA */}
            <div className="flex-shrink-0">
              <a
                href="/cart"
                className="inline-block bg-white text-red-700 px-6 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Your Discount →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dumpsters for Any Cleanup Section */}
      <section className="relative z-10 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 text-center mb-12">
            Dumpsters for Any Cleanup
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Renting Multiple Dumpsters */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="mb-6">
                  <Image
                    src="/images/optimized/dumpsters-1200w.webp"
                    alt="Multiple Dumpsters - Icon Dumpsters"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Renting Multiple Dumpsters?
                </h3>
                
                <p className="text-center text-gray-600 mb-6">
                  We can provide a customized quote online today.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-700 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Nationwide coverage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-700 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">One expert contact</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-700 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Multiple jobsite solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-teal-700 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">All jobs organized in one portal</span>
                  </li>
                </ul>
                
                <div className="text-center">
                  <a 
                    href="/frequent-buyers"
                    className="inline-block w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg mb-3"
                  >
                    Get Your Quote
                  </a>
                  <a 
                    href="/frequent-buyers"
                    className="text-[#f97316] hover:underline font-semibold"
                  >
                    Unlock Pro-Level Perks
                  </a>
                </div>
              </div>
            </div>

            {/* Renting One Dumpster */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="mb-6">
                  <Image
                    src="/images/optimized/dumpster500x200-4.jpg"
                    alt="Single Dumpster Rental - Icon Dumpsters"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Renting One Dumpster?
                </h3>
                
                <p className="text-center text-gray-600 mb-6">
                  Let us handle the details — you focus on the cleanup.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#f97316] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Dumpster sizes for any mess</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#f97316] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Fair prices, no surprises</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#f97316] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Expert help, every step</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#f97316] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Simple online pickup requests</span>
                  </li>
                </ul>
                
                <div className="text-center">
                  <a 
                    href="/pricing/dumpster-prices"
                    className="inline-block w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg"
                  >
                    Check Your Price
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Transparency Section - Fully Collapsible */}
      <section id="pricing-calculator" className="relative z-10 py-8 bg-gradient-to-br from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <details className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <summary className="cursor-pointer p-8 hover:bg-teal-50 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0d9488] mb-2">
              Transparent Pricing - No Hidden Fees
            </h2>
                  <p className="text-gray-600">
                    Click to use our pricing calculator
                  </p>
                </div>
                <svg className="w-8 h-8 text-teal-700 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </summary>
            
            <div className="p-8 pt-0">
              <div className="text-center mb-8">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get an instant quote with our live pricing calculator. Best of all, what you see is what you pay. That means there are no surprises and no hidden fees.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-red-50 border-2 border-red-200 rounded-lg px-4 py-2">
              <svg className="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-red-700">
                Veterans: Get 10% OFF - Check the veteran discount box in the calculator below
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Pricing Calculator */}
            <div className="order-1 lg:order-1">
              <PricingCalculator />
            </div>

            {/* Pricing Benefits */}
            <div className="order-2 lg:order-2 space-y-8">
                  <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#0d9488] mb-6">Why Our Pricing is Better</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-teal-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">No Hidden Fees</h4>
                      <p className="text-gray-600">Delivery, pickup, and disposal are all included in the price you see.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-teal-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Competitive Rates</h4>
                      <p className="text-gray-600">Fair, transparent pricing backed by reliable service and honest business practices.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-teal-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Price Lock Guarantee</h4>
                      <p className="text-gray-600">Your quote is locked in for 30 days. No price increases after booking. <a href="/terms-of-service#price-lock-guarantee" className="text-[#0d9488] hover:underline text-sm">Terms apply</a></p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-teal-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Satisfaction Guarantee</h4>
                      <p className="text-gray-600">We're committed to making it right if you're not satisfied. <a href="/terms-of-service#satisfaction-guarantee" className="text-[#0d9488] hover:underline text-sm">See policy</a></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Example */}
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Sample Pricing</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>15-Yard Dumpster (7 days)</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold">$349</span>
                      <span className="text-purple-200 text-sm block">Starting Price</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>20-Yard Dumpster (7 days)</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold">$375</span>
                      <span className="text-purple-200 text-sm block">Starting Price</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>30-Yard Dumpster (7 days)</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold">$450</span>
                      <span className="text-purple-200 text-sm block">Starting Price</span>
                    </div>
                  </div>
                  <div className="border-t border-purple-400 pt-4">
                    <p className="text-xs text-purple-100">Prices vary by location and project. Additional fees may apply for overage, permits, or special materials. Call for exact quote.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
          </details>
        </div>
      </section>




      {/* First Time Renting Section */}
      <section className="relative z-10 bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#f97316] mb-6">
                First Time Renting a Dumpster? We're Here to Help
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Renting a dumpster isn't something you do every day. In fact, most Icon Dumpsters customers are renting a dumpster for the very first time. That's why we're dedicated to creating a simple, seamless experience. We walk with you through the entire process, from choosing the right dumpster to preparing for delivery. Plus, we help you fill your dumpster correctly so you never have to worry about what happens next.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                For in-depth how-tos and answers to all of your dumpster rental questions, our <a href="/dumpster-rental-101" className="text-[#0d9488] hover:underline font-semibold">Dumpster Rental 101 Guide</a> is a great place to start! Our team is always available to help, too. As a result, renting a dumpster becomes easy and stress-free.
              </p>
              <a 
                href="/dumpster-rental-101"
                className="inline-block bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-lg shadow-lg"
              >
                Get Started With Dumpster Rental 101
              </a>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/result.png"
                  alt="Icon Dumpsters customer service team helping first-time dumpster rental customer"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section - Compact */}
      <section className="relative z-10 bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#f97316] text-center mb-8">
            Our Trusted Partners
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            <a 
              href="https://utahwatergardens.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
              title="Utah Water Gardens - Pond & Water Feature Partner"
            >
              <span className="text-gray-600 text-xl font-semibold">Utah Water Gardens</span>
            </a>
            <a 
              href="https://tntdump.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
              title="TNT Dump - Roll-off Dumpster Partner"
            >
              <span className="text-gray-600 text-xl font-semibold">TNT Dump</span>
            </a>
            <a 
              href="https://www.oedlandscape.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
              title="Outdoor Escapes & Design - Landscape Design Partner"
            >
              <span className="text-gray-600 text-xl font-semibold">Outdoor Escapes & Design</span>
            </a>
          </div>
        </div>
      </section>

      {/* Dumpster Rental Sizes Section */}
      <section className="relative z-10 bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d9488] mb-4">
              Standard Dumpsters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* 15 Yard Dumpster */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow">
              <div className="mb-6 flex justify-center bg-white rounded-lg p-4">
                <Image
                  src="/images/optimized/icondumpsters_general_ba5e61b5_fe0f_4ef5_a4ac_f7e040df3345-768w.png"
                  alt="15 Yard Dumpster - Icon Dumpsters"
                  width={300}
                  height={220}
                  className="object-contain"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0d9488] mb-4">15 Yard</h3>
              <div className="space-y-3 mb-4">
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Dimensions:</span> 14.5' × 7.75' × 4.67' (L × W × D)</p>
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Weight Limit:</span> 8 tons</p>
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Loading:</span> Level with top</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">Best For:</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Small projects</li>
                  <li>• Garage cleanouts</li>
                  <li>• Minor renovations</li>
                </ul>
              </div>
              <a href="/15-yard-dumpster-rental" className="inline-flex items-center text-[#0d9488] hover:text-teal-700 font-semibold">
                Most Popular
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* 20 Yard Dumpster */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow">
              <div className="mb-6 flex justify-center bg-white rounded-lg p-4">
                <Image
                  src="/images/ba0f9e76-4560-41f1-ac6e-8d70ccbdc964 - Copy.png"
                  alt="20 Yard Dumpster - Icon Dumpsters"
                  width={300}
                  height={220}
                  className="object-contain"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0d9488] mb-4">20 Yard</h3>
              <div className="space-y-3 mb-4">
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Dimensions:</span> 17.08' × 7.54' × 5.00' (L × W × D)</p>
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Weight Limit:</span> 11 tons</p>
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Loading:</span> Level with top</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">Best For:</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Medium projects</li>
                  <li>• Kitchen remodels</li>
                  <li>• Roofing projects</li>
                </ul>
              </div>
              <a href="/20-yard-dumpster-rental" className="inline-flex items-center text-[#0d9488] hover:text-teal-700 font-semibold">
                Great Value
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* 30 Yard Dumpster */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow">
              <div className="mb-6 flex justify-center bg-white rounded-lg p-4">
                <Image
                  src="/images/optimized/20b0d4b0-5063-428e-a8ae-ad785e70ceae.webp"
                  alt="30 Yard Dumpster - Icon Dumpsters"
                  width={300}
                  height={220}
                  className="object-contain"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0d9488] mb-4">30 Yard</h3>
              <div className="space-y-3 mb-4">
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Dimensions:</span> 22.0' × 7.92' × 6.0' (L × W × D)</p>
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Weight Limit:</span> 12 tons</p>
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Loading:</span> Level with top</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">Best For:</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Large projects</li>
                  <li>• New construction</li>
                  <li>• Major demolitions</li>
                </ul>
              </div>
              <a href="/30-yard-dumpster-rental" className="inline-flex items-center text-[#0d9488] hover:text-teal-700 font-semibold">
                Large Capacity
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Specialized Dumpsters Section */}
          <div className="text-center mb-4 mt-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d9488] mb-4">
              Specialized Dumpsters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* 10 Yard Dirt */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow">
              <div className="mb-6 flex justify-center bg-orange-50 rounded-lg p-4">
                <Image
                  src="/images/optimized/icondumpsters_general_img_3190.webp"
                  alt="10 Yard Dirt Dumpster - Icon Dumpsters"
                  width={280}
                  height={200}
                  className="object-contain"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">10 Yard Dirt</h3>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Dimensions:</span> 16.46' × 8' × 2.67'</p>
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Weight Limit:</span> Flat rate</p>
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Loading:</span> Level with top</p>
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Best For:</span> Clean dirt & soil</p>
              </div>
              <a href="/services/construction-dumpster-rental" className="inline-flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Clean Dirt Only
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* 10 Yard Mixed */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow">
              <div className="mb-6 flex justify-center bg-pink-50 rounded-lg p-4">
                <Image
                  src="/images/optimized/icondumpsters_general_img_3190.webp"
                  alt="10 Yard Mixed Dumpster - Icon Dumpsters"
                  width={280}
                  height={200}
                  className="object-contain"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">10 Yard Mixed</h3>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Dimensions:</span> 16.46' × 8' × 2.67'</p>
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Weight Limit:</span> Standard weight allowance</p>
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Loading:</span> Level with top</p>
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Best For:</span> Mixed loads</p>
              </div>
              <a href="/services/residential-dumpster-rental" className="inline-flex items-center justify-center w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Mixed Load
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* 12 Yard Concrete */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow">
              <div className="mb-6 flex justify-center bg-gray-50 rounded-lg p-4">
                <Image
                  src="/images/optimized/icondumpsters_general_img_3190.webp"
                  alt="12 Yard Concrete Dumpster - Icon Dumpsters"
                  width={280}
                  height={200}
                  className="object-contain"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">12 Yard Concrete</h3>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Dimensions:</span> 16.46' × 8' × 2.67'</p>
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Weight Limit:</span> Flat rate</p>
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Loading:</span> Level with top</p>
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Best For:</span> Concrete projects</p>
              </div>
              <a href="/services/construction-dumpster-rental" className="inline-flex items-center justify-center w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Heavy Duty
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/guides/dumpster-sizes"
              className="inline-flex items-center text-[#0d9488] hover:text-teal-700 font-semibold text-lg"
            >
              View All Dumpster Sizes
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Nationwide Contractor Pricing Section */}
      <section className="relative z-10 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Section - Visuals and Branding */}
            <div className="relative">
              {/* Blueprint-style background */}
              <div className="absolute inset-0 bg-white/10 rounded-lg" style={{
                backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
              <div className="relative p-8 text-center">
                {/* Tools Icons */}
                <div className="flex items-center justify-center gap-6 mb-6">
                  {/* Wrench */}
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {/* Hard Hat */}
                  <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                  {/* Hammer */}
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                {/* Contractor Pricing Banner */}
                <div className="bg-white rounded-lg p-4 mb-4 inline-block">
                  <div className="text-teal-800 font-bold text-lg">CONTRACTOR PRICING</div>
                </div>
                <div className="text-white">
                  <div className="text-sm text-teal-200 mb-1">POWERED BY</div>
                  <div className="text-2xl font-bold">Icon Dumpsters</div>
                </div>
              </div>
            </div>

            {/* Right Section - Text and Call to Action */}
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Utah Contractor Pricing</h2>
              <p className="text-lg text-teal-100 mb-6">
                Working on a large or recurring project? You can tap into our contractor pricing for customized savings. Plus, we offer priority delivery anywhere in Utah.
              </p>
              <a 
                href="/frequent-buyers" 
                className="text-teal-200 hover:text-white underline font-semibold mb-6 inline-block"
              >
                See Contractor Options
              </a>
              <div className="mt-6">
                <a 
                  href="tel:801-918-6000"
                  className="inline-flex items-center bg-lime-500 hover:bg-lime-600 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call 801-918-6000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How a Dumpster Rental Works Section */}
      <section className="relative z-10 bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f97316] mb-8">
              How a Dumpster Rental Works
            </h2>
            {/* Video Player */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-video bg-gray-200">
                <VideoWithErrorHandling src="/rolloff.mp4" />
              </div>
            </div>
          </div>

          {/* How to Rent in 4 Steps */}
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#f97316]">
              How to Rent a Dumpster in 4 Easy Steps
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-teal-800 mb-2">1. Schedule Your Rental</h4>
                <p className="text-gray-700">
                  First, we'll find the right dumpster for you at an affordable rate. Next, we'll get your rental on the schedule right away.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-teal-800 mb-2">2. Prepare for Delivery</h4>
                <p className="text-gray-700">
                  Next, prepare for delivery. The good news is you don't need to be there for drop-off. Just make sure the area is clear of any obstructions before we arrive.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-teal-800 mb-2">3. Fill Your Dumpster</h4>
                <p className="text-gray-700">
                  After delivery, you can typically keep your dumpster from 5-10 days. This gives you plenty of time to clean up at your own pace.
                </p>
                </div>
                </div>

            {/* Step 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-teal-800 mb-2">4. Schedule Your Pickup</h4>
                <p className="text-gray-700">
                  Finally, request a date for pickup using our simple online form. Once you're done, we'll haul everything away for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dumpster Rentals Made Easy Section */}
      <section className="relative z-10 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center">
              <svg className="w-12 h-12 text-white mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              <span className="text-3xl font-bold text-white">Icon Dumpsters</span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            Dumpster Rentals Are Easier With Icon Dumpsters
          </h2>
          <p className="text-xl sm:text-2xl text-teal-100 text-center mb-12">
            Save Money and Time on Your Dumpster Rental
          </p>

          {/* Two Column Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <div className="text-white">
              <p className="text-base sm:text-lg leading-relaxed">
                Dumpster rental prices vary greatly from company to company, depending on the size, location, debris type and terms of the dumpster rental. That's why Icon Dumpsters offers simple flat-rate pricing. This way, you'll know the total cost upfront. You'll receive a customized quote to avoid overpaying for services you don't need, and you'll get better terms than many of our competitors.
              </p>
            </div>
            <div className="text-white">
              <p className="text-base sm:text-lg leading-relaxed">
                Whether you're a homeowner or a contractor, our roll off dumpster service can help with all types of cleanups. No project is too big or small. We deliver to residential driveways, construction sites, businesses and more. Learn more about how we simplify dumpster rentals, and discover how we can help you find a dumpster for rent in your area.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/pricing/dumpster-prices"
              className="w-full sm:w-auto inline-block bg-white text-teal-800 font-semibold px-8 py-4 rounded-lg hover:bg-teal-50 transition-colors text-center border-2 border-white"
            >
              How Much Does It Cost to Rent a Dumpster?
            </a>
            <a 
              href="/dumpster-rental-101"
              className="w-full sm:w-auto inline-block bg-transparent text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-center border-2 border-white"
            >
              What is a Roll Off Dumpster?
            </a>
          </div>
        </div>
      </section>

      {/* Experience Counts Section */}
      <section className="relative z-10 bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#f97316] mb-6">
                Experience Counts
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Icon Dumpsters is a Utah dumpster rental company that provides local, personalized service. We've been in business since 
                2015 and have rented out thousands of dumpsters across the Wasatch Front. When you call us to order, you'll work with a 
                team of experts who will provide you with the best possible experience.
              </p>
              <p className="text-lg text-gray-700">
                Every member of our team is an experienced problem-solver at heart. They'll find the right waste removal solution for your 
                specific project. Are you trying to clear out a basement or backyard shed? We have the perfect size dumpster rental for you. Planning 
                a demolition project downtown? We have a large inventory of dumpsters to help you clear away the debris.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/optimized/dumpster500x200-4.jpg"
                  alt="Icon Dumpsters professional team with dumpster - experienced Utah dumpster rental service"
                  width={500}
                  height={200}
                  className="w-full h-auto"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Dumpster for Your Job Section */}
      <section className="relative z-10 bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 mb-4">
              We've Got the Right Roll Off Dumpster Rental for Your Job
            </h2>
            <p className="text-lg text-gray-700">
              Call us before you rent a dumpster, and save more.
            </p>
          </div>

          {/* Services Grid - 3 columns on desktop */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Residential Dumpster Rentals */}
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/residential-dumpsters-test2.webp"
                  alt="Residential Dumpster Rentals Icon"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <h3 className="text-xl font-bold text-teal-700 mb-4">Residential Dumpster Rentals</h3>
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                Residential roll off dumpsters are great for household cleanups, home improvement projects and general junk removal. 
                You can fill the container with furniture, carpet, boxes, clothes, toys, appliances and more.
              </p>
              <a 
                href="/services/residential-dumpster-rental"
                className="inline-block border-2 border-teal-700 text-teal-700 px-6 py-2 rounded hover:bg-teal-700 hover:text-white transition-colors font-semibold text-sm"
              >
                Dumpsters for Any Home Project
              </a>
            </div>

            {/* Construction Dumpster Rentals */}
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/construction-dumpsters-test2.webp"
                  alt="Construction Dumpster Rentals Icon"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <h3 className="text-xl font-bold text-teal-700 mb-4">Construction Dumpster Rentals</h3>
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                Construction debris dumpsters are perfect for any renovation job, from small home remodels to large demolition projects. 
                These containers can hold drywall, flooring, tile, lumber, windows, glass, siding and other building materials.
              </p>
              <a 
                href="/services/construction-dumpster-rental"
                className="inline-block border-2 border-teal-700 text-teal-700 px-6 py-2 rounded hover:bg-teal-700 hover:text-white transition-colors font-semibold text-sm"
              >
                Containers for Every Contractor
              </a>
            </div>

            {/* Yard Waste Dumpster Rentals */}
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/yard-waste-dumpsters-test2.webp"
                  alt="Yard Waste Dumpster Rentals Icon"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <h3 className="text-xl font-bold text-teal-700 mb-4">Yard Waste Dumpster Rentals</h3>
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                If you're working on general yardwork or a landscaping project, we've got you covered. Our yard waste roll off dumpsters 
                make it easy to get rid of shrubs, grass clippings, dirt, small branches and leaves. This keeps your yard clean and organized.
              </p>
              <a 
                href="/services/yard-waste-dumpster-rental"
                className="inline-block border-2 border-teal-700 text-teal-700 px-6 py-2 rounded hover:bg-teal-700 hover:text-white transition-colors font-semibold text-sm"
              >
                Bins for Your Landscaping Project
              </a>
            </div>
          </div>

          {/* Bottom Row - 2 columns centered */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Concrete Dumpster Rentals */}
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/concrete-dumpsters-test2.webp"
                  alt="Concrete Dumpster Rentals Icon"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <h3 className="text-xl font-bold text-teal-700 mb-4">Concrete Dumpster Rentals</h3>
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                Tearing down a retaining wall or replacing your driveway? We offer 10 and 20 yard roll off dumpsters for "clean" concrete 
                loads. This makes heavy debris removal as easy as possible.
              </p>
              <a 
                href="/services/construction-dumpster-rental"
                className="inline-block border-2 border-teal-700 text-teal-700 px-6 py-2 rounded hover:bg-teal-700 hover:text-white transition-colors font-semibold text-sm"
              >
                Easy Concrete Debris Removal
              </a>
            </div>

            {/* Roofing Dumpster Rentals */}
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/roofing-dumpsters-test2.webp"
                  alt="Roofing Dumpster Rentals Icon"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <h3 className="text-xl font-bold text-teal-700 mb-4">Roofing Dumpster Rentals</h3>
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                Roofing dumpster rentals are used only for disposing of shingles and sheathing. We offer a range of roll off container 
                sizes for roofing projects at affordable rates. This helps keep your project costs low.
              </p>
              <a 
                href="/services/construction-dumpster-rental"
                className="inline-block border-2 border-teal-700 text-teal-700 px-6 py-2 rounded hover:bg-teal-700 hover:text-white transition-colors font-semibold text-sm"
              >
                Affordable Shingle Disposal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services CTA Section */}
      <section className="relative z-10 bg-gradient-to-r from-teal-600 to-teal-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Explore All Our Dumpster Rental Services
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              From residential cleanouts to large-scale construction projects, we offer comprehensive dumpster rental solutions for every need. Discover our full range of services and find the perfect solution for your project.
            </p>
            <a 
              href="/services"
              className="inline-block bg-white text-teal-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-50 transition-colors shadow-lg"
            >
              View All Dumpster Rental Services →
            </a>
          </div>
        </div>
      </section>

      {/* Popular Blog Posts Section */}
      <section className="relative z-10 bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Blog Posts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert tips, guides, and insights about dumpster rentals, home improvement, and waste management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <a href="/blog/yard-landscaping/the-best-privacy-trees-you-can-easily-plant-in-your-yard" className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">The Best Privacy Trees You Can Easily Plant In Your Yard</h3>
              <p className="text-gray-600 text-sm">Learn about the best privacy trees for your yard and landscaping projects.</p>
            </a>
            
            <a href="/blog/decluttering-cleanouts/home-hacks-5-tips-to-organize-your-bedroom" className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Home Hacks: 5 Tips To Organize Your Bedroom</h3>
              <p className="text-gray-600 text-sm">Simple tips to organize your bedroom and create a peaceful sanctuary.</p>
            </a>
            
            <a href="/blog/yard-landscaping/7-simple-tips-for-a-low-maintenance-garden" className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">7 Simple Tips For A Low Maintenance Garden</h3>
              <p className="text-gray-600 text-sm">Create a beautiful garden with minimal maintenance and effort.</p>
            </a>
            
            <a href="/blog/home-improvement/10-home-decor-mistakes-you-need-to-avoid" className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">10 Home Decor Mistakes You Need To Avoid</h3>
              <p className="text-gray-600 text-sm">Common home decor mistakes and how to avoid them for a better living space.</p>
            </a>
            
            <a href="/blog/yard-landscaping/4-luxury-garden-design-ideas-you-can-accomplish-now" className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">4 Luxury Garden Design Ideas You Can Accomplish Now</h3>
              <p className="text-gray-600 text-sm">Transform your garden with these luxury design ideas you can implement today.</p>
            </a>
            
            <a href="/blog/dumpster-services/faq-will-a-residential-roll-off-dumpster-rental-fit-in-my-driveway" className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">FAQ: Will A Residential Roll Off Dumpster Rental Fit In My Driveway?</h3>
              <p className="text-gray-600 text-sm">Learn about dumpster sizes and whether they'll fit in your driveway.</p>
            </a>
            
            <a href="/blog/home-improvement/transforming-your-attic-a-step-by-step-guide-to-finish-an-attic" className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transforming Your Attic: A Step-By-Step Guide To Finish An Attic</h3>
              <p className="text-gray-600 text-sm">Complete guide to finishing your attic and creating additional living space.</p>
            </a>
            
            <a href="/blog/decluttering-cleanouts/how-to-prevent-garage-flooding-with-15-tips-and-tricks" className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How To Prevent Garage Flooding With 15 Tips And Tricks</h3>
              <p className="text-gray-600 text-sm">Protect your garage from flooding with these practical tips and solutions.</p>
            </a>
            
            <a href="/blog/seasonal-projects/fall-cleaning-checklist-simplify-your-cleaning-for-busy-days" className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fall Cleaning Checklist: Simplify Your Cleaning For Busy Days</h3>
              <p className="text-gray-600 text-sm">Streamline your fall cleaning with this comprehensive checklist.</p>
            </a>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/blog"
              className="inline-block bg-[#0d9488] text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              View All Dumpster Rental Blog Posts
            </a>
          </div>
        </div>
      </section>

      {/* We Speak Your Language Section */}
      <section className="relative z-10 bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Large Dumpster Image */}
          <div className="max-w-4xl mx-auto mb-8">
            <Image
              src="/images/optimized/-2484955712329217818-enhance-2.1x-textai-1920w.jpg"
              alt="Icon Dumpsters Roll Off Container - Professional Dumpster Rental Service"
              width={1200}
              height={400}
              className="w-full h-auto rounded-lg"
              loading="lazy"
              quality={85}
            />
          </div>

          {/* Explanatory Text */}
          <div className="max-w-5xl mx-auto text-center mb-8">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              We speak your language! In the hauling business, dumpster rentals can be called by many different names, such as debris boxes, 
              containers, roll off containers, temporary containers, bins, tubs, roll off dumpsters or cans. But rest assured, they all mean 
              the same thing at Icon Dumpsters: a hassle-free waste removal option for the kinds of messes you can't leave at the curb. We know 
              the ins and outs of the waste industry, so we can answer any questions you have about renting a dumpster.
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-8">
            <a 
              href="/services"
              className="inline-block border-2 border-teal-700 text-teal-700 px-8 py-3 rounded hover:bg-teal-700 hover:text-white transition-colors font-semibold"
            >
              Learn More About Our Dumpster Rental Services
            </a>
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="relative z-10 bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Teal Footer Bar */}
          <div className="bg-gradient-to-r from-teal-700 to-teal-600 py-8 rounded-lg">
            <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center sm:text-left">
                Rent a Dumpster Today
              </h3>
              <a 
                href="/cart"
                className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3 rounded font-semibold text-lg transition-colors shadow-lg"
              >
                Order Online
              </a>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}

