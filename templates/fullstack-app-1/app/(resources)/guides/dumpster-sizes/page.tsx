import { Metadata } from "next";
import Link from "next/link";
import ImageWithFallback from "@/app/components/ImageWithFallback";
import sizesHero from "../../images/Screenshot 2025-08-21 223011.png";
import QuoteForm from "@/app/components/QuoteForm";
import FeesAndSurcharges from "@/app/components/FeesAndSurcharges";
import AvailableTodayBadge from "@/app/components/AvailableTodayBadge";
import BookNowBanner from "@/app/components/BookNowBanner";
import Hero from '@/app/components/hero';
import RelatedPages from "@/app/components/RelatedPages";
import FifteenYardDimensions from "@/app/components/FifteenYardDimensions";
import TwentyYardDimensions from "@/app/components/TwentyYardDimensions";
import ThirtyYardDimensions from "@/app/components/ThirtyYardDimensions";

export const metadata: Metadata = {
  title: "Dumpster Sizes & Dimensions Guide | Icon Dumpsters Utah",
  description: "Complete guide to dumpster sizes: 15, 20, 30 yard roll-off dumpsters plus specialized 10-yard dirt, 10-yard mixed load, and 12-yard concrete dumpsters.",
  keywords: "dumpster sizes, 15 yard dumpster, 20 yard dumpster, 30 yard dumpster, 10 yard dirt dumpster, 10 yard mixed load dumpster, 12 yard concrete dumpster, roll off dumpster, rolloff dumpster, dumpster rental, dumpster rental near me, roll off dumpster dimensions, dumpster weight limits, Utah dumpster rental sizes, concrete disposal dumpster, dirt disposal dumpster",
  alternates: {
    canonical: 'https://icondumpsters.com/guides/dumpster-sizes',
  },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: "Dumpster Sizes & Dimensions Guide | Icon Dumpsters Utah",
    description: "Complete guide to dumpster sizes: 15, 20, 30 yard roll-off dumpsters plus specialized 10-yard dirt, 10-yard mixed load, and 12-yard concrete dumpsters.",
    url: 'https://icondumpsters.com/guides/dumpster-sizes',
    images: [
      {
        url: 'https://icondumpsters.com/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp',
        width: 1200,
        height: 630,
        alt: 'Roll Off Dumpster Sizes and Dimensions',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dumpster Sizes & Dimensions Guide | Icon Dumpsters Utah",
    description: "Complete guide to dumpster sizes: 15, 20, 30 yard roll-off dumpsters plus specialized 10-yard dirt, 10-yard mixed load, and 12-yard concrete dumpsters.",
    images: ['https://icondumpsters.com/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DumpsterSizes() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header>
        <Hero />
      </header>

      {/* Middle Section - White Background with Table */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Roll Off Dumpster Sizes and Dimensions
            </h2>
            <div className="flex items-center justify-center"><AvailableTodayBadge /></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Review the estimated dimensions and capacities of common roll off sizes to find the most 
              efficient and affordable fit for your project.
            </p>
          </div>
          
          {/* Equipment Showcase */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Professional Equipment</h3>
              <p className="text-gray-600">High-quality, well-maintained roll-off dumpsters ready for your project</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="/images/optimized/dumpster500x500-1.webp"
                  alt="15 yard roll-off dumpster rental Utah - perfect size for small home projects and cleanouts"
                  className="w-full h-full object-cover"
                  fallbackSrc="/images/dumpster500x500-1.webp"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="/images/optimized/dumpster500x500-2.webp"
                  alt="20 yard roll-off dumpster rental Utah - ideal size for medium construction projects"
                  className="w-full h-full object-cover"
                  fallbackSrc="/images/dumpster500x500-2.webp"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp"
                  alt="Roll-off dumpster delivery service Utah - same-day dumpster rental with professional delivery"
                  className="w-full h-full object-cover"
                  fallbackSrc="/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp"
                />
              </div>
            </div>
          </div>

          {/* Modern Dumpster Sizes Table */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0d9488] rounded-full mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">All Dumpster Sizes & Specifications</h3>
              <p className="text-gray-600">Complete overview of our standard and specialized dumpster options</p>
            </div>

            {/* Standard Dumpsters Section */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-2 bg-[#0d9488] rounded-full mr-3"></span>
                Standard Dumpsters
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 15 Yard */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
                  <div className="w-full bg-gray-50 p-4">
                    <ImageWithFallback 
                      src="/images/optimized/IMG_3190.webp" 
                      alt="15 yard roll-off dumpster rental Utah - small dumpster size for home renovations and garage cleanouts" 
                      className="w-full h-64 object-contain object-center" 
                      fallbackSrc="/images/optimized/IMG_3190.webp" 
                    />
                  </div>
                  <div className="p-6">
                    <h5 className="font-bold text-gray-900 text-lg mb-2">15 Yard</h5>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div><strong>Dimensions:</strong> 14.5' × 7.75' × 4.67' (L × W × D)</div>
                      <div><strong>Weight Limit:</strong> 3 <Link href="https://icondumpsters.com/tonnage-calculator" className="text-[#0d9488] hover:text-teal-700 underline font-semibold">tons</Link></div>
                      <div><strong>Loading:</strong> Level with top</div>
                      <div><strong>Best For:</strong> Small projects</div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-[#0d9488] font-semibold">Most Popular</span>
                      <div className="w-8 h-8 bg-[#0d9488] rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 20 Yard */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
                  <div className="w-full bg-gray-50 p-4">
                    <ImageWithFallback 
                      src="/images/optimized/icondumpsters_general_ba0f9e76_4560_41f1_ac6e_8d70ccbdc964.webp" 
                      alt="20 yard roll-off dumpster rental Utah - medium dumpster size for kitchen renovations and construction projects" 
                      className="w-full h-64 object-contain object-center" 
                      fallbackSrc="/images/optimized/icondumpsters_general_ba0f9e76_4560_41f1_ac6e_8d70ccbdc964.webp" 
                    />
                  </div>
                  <div className="p-6">
                    <h5 className="font-bold text-gray-900 text-lg mb-2">20 Yard</h5>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div><strong>Dimensions:</strong> 17.08&apos; × 7.54&apos; × 5.00&apos; (L × W × D)</div>
                      <div><strong>Weight Limit:</strong> 4 <Link href="https://icondumpsters.com/tonnage-calculator" className="text-[#0d9488] hover:text-teal-700 underline font-semibold">tons</Link></div>
                      <div><strong>Loading:</strong> Level with top</div>
                      <div><strong>Best For:</strong> Medium projects</div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-teal-600 font-semibold">Great Value</span>
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-50 to-purple-1000 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 30 Yard */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
                  <div className="w-full bg-gray-50 p-4">
                    <ImageWithFallback 
                      src="/images/optimized/20b0d4b0-5063-428e-a8ae-ad785e70ceae.webp" 
                      alt="30 Yard Roll-off Dumpster for Utah Dumpster Rental" 
                      className="w-full h-64 object-contain object-center" 
                      fallbackSrc="/images/optimized/20b0d4b0-5063-428e-a8ae-ad785e70ceae.png" 
                    />
                  </div>
                  <div className="p-6">
                    <h5 className="font-bold text-gray-900 text-lg mb-2">30 Yard</h5>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div><strong>Dimensions:</strong> 22.0&apos; × 7.92&apos; × 6.0&apos; (L × W × D)</div>
                      <div><strong>Weight Limit:</strong> 6 <Link href="https://icondumpsters.com/tonnage-calculator" className="text-[#0d9488] hover:text-teal-700 underline font-semibold">tons</Link></div>
                      <div><strong>Loading:</strong> Level with top</div>
                      <div><strong>Best For:</strong> Large projects</div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-teal-600 font-semibold">Large Capacity</span>
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 15 Yard Dimensions Graphic */}
            <div className="mb-12 mt-12">
              <FifteenYardDimensions />
            </div>

            {/* 20 Yard Dimensions Graphic */}
            <div className="mb-12 mt-12">
              <TwentyYardDimensions />
            </div>

            {/* 30 Yard Dimensions Graphic */}
            <div className="mb-12 mt-12">
              <ThirtyYardDimensions />
            </div>

            {/* Specialized Dumpsters Section */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Specialized Dumpsters
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 10 Yard Dirt */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 mb-4">
                      <ImageWithFallback 
                        src="/images/optimized/IMG_3190.webp" 
                        alt="10 Yard Clean Dirt Disposal Dumpster for Utah Dumpster Rental" 
                        className="w-full h-32 object-contain object-center rounded-lg" 
                        fallbackSrc="/images/optimized/IMG_3190.jpg" 
                      />
                    </div>
                    <h5 className="font-bold text-gray-900 text-lg mb-2">10 Yard Dirt</h5>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div><strong>Dimensions:</strong> 16.46' x 8' x 2.67'</div>
                      <div><strong>Weight Limit:</strong> Flat rate</div>
                      <div><strong>Loading:</strong> Level with top</div>
                      <div><strong>Best For:</strong> Clean dirt & soil</div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-action-orange font-semibold">Clean Dirt Only</span>
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 10 Yard Mixed */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-4 mb-4">
                      <ImageWithFallback 
                        src="/images/optimized/IMG_3190.webp" 
                        alt="10 Yard Mixed Load Disposal Dumpster for Utah Dumpster Rental" 
                        className="w-full h-32 object-contain object-center rounded-lg" 
                        fallbackSrc="/images/optimized/IMG_3190.jpg" 
                      />
                    </div>
                    <h5 className="font-bold text-gray-900 text-lg mb-2">10 Yard Mixed</h5>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div><strong>Dimensions:</strong> 16.46' x 8' x 2.67'</div>
                      <div><strong>Weight Limit:</strong> Standard weight allowance</div>
                      <div><strong>Loading:</strong> Level with top</div>
                      <div><strong>Best For:</strong> Mixed loads</div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-red-600 font-semibold">Mixed Load</span>
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 12 Yard Concrete */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 mb-4">
                      <ImageWithFallback 
                        src="/images/optimized/IMG_3190.webp" 
                        alt="12 Yard Concrete Disposal Dumpster for Utah Dumpster Rental" 
                        className="w-full h-32 object-contain object-center rounded-lg" 
                        fallbackSrc="/images/optimized/IMG_3190.jpg" 
                      />
                    </div>
                    <h5 className="font-bold text-gray-900 text-lg mb-2">12 Yard Concrete</h5>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div><strong>Dimensions:</strong> 16.46' x 8' x 2.67'</div>
                      <div><strong>Weight Limit:</strong> Flat rate</div>
                      <div><strong>Loading:</strong> Level with top</div>
                      <div><strong>Best For:</strong> Concrete projects</div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-gray-600 font-semibold">Heavy Duty</span>
                      <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <a href="https://icondumpsters.com/free-quote" className="inline-flex items-center bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-3 rounded-lg hover:from-teal-700 hover:to-teal-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Get Your Free Quote
              </a>
            </div>
          </div>

          {/* Fees Table */}
          <div className="mt-12">
            <FeesAndSurcharges />
          </div>

          <div className="mt-12">
            <BookNowBanner />
          </div>
          
          {/* Additional Notes */}
          <div className="mt-8 text-sm text-gray-600 max-w-4xl mx-auto">
            <p>
              <strong>Note:</strong> Dimensions and weight limits may vary slightly by location and dumpster manufacturer. 
              Always confirm exact specifications with your local provider before loading. Overloading may result in 
              additional fees or refusal of pickup.
            </p>
          </div>

          {/* Comprehensive Dumpster Size Guide */}
          <div className="mt-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              Complete Dumpster Size Guide
            </h3>
            
            <div className="mb-8">
              <p className="text-gray-600 mb-6 text-center">
                Choose the perfect dumpster size for your project. All rentals include delivery, pickup, and landfill fees.
              </p>
            </div>

            {/* Detailed Dumpster Sizes Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse min-w-full">
                <thead>
                  <tr className="bg-[#0d9488] text-white">
                    <th className="p-2 sm:p-4 text-left text-xs sm:text-sm">Dumpster Size</th>
                    <th className="p-2 sm:p-4 text-left text-xs sm:text-sm">Dimensions</th>
                    <th className="p-2 sm:p-4 text-left text-xs sm:text-sm">Weight Capacity</th>
                    <th className="p-2 sm:p-4 text-left text-xs sm:text-sm">Equivalent Capacity</th>
                    <th className="p-2 sm:p-4 text-left text-xs sm:text-sm">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {/* 15 Yard Dumpster */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-2 sm:p-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-12 h-12 sm:w-16 sm:h-16">
                          <ImageWithFallback 
                            src="/images/optimized/IMG_3190.webp" 
                            alt="15 yard roll-off dumpster rental Utah - perfect dumpster size for small home projects and garage cleanouts" 
                            className="w-full h-full object-cover rounded"
                            fallbackSrc="/images/optimized/IMG_3190.webp"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-xs sm:text-sm">15 Yard Dumpster</h3>
                          <p className="text-xs text-gray-600">Most Popular</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">14.5' × 7.75' × 4.67' (L × W × D)</td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">1-2 tons</td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">4-5 pickup truckloads</td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">Small renovations, garage cleanouts, yard waste</td>
                  </tr>

                  {/* 20 Yard Dumpster */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-2 sm:p-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-12 h-12 sm:w-16 sm:h-16">
                          <ImageWithFallback 
                            src="/images/optimized/icondumpsters_general_ba0f9e76_4560_41f1_ac6e_8d70ccbdc964.webp" 
                            alt="20 yard roll-off dumpster rental Utah - ideal dumpster size for medium construction projects and home renovations" 
                            className="w-full h-full object-cover rounded"
                            fallbackSrc="/images/optimized/icondumpsters_general_ba0f9e76_4560_41f1_ac6e_8d70ccbdc964.webp"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-xs sm:text-sm">20 Yard Dumpster</h3>
                          <p className="text-xs text-gray-600">Great Value</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">17.08' × 7.54' × 5.00' (L × W × D)</td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">2-3 tons</td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">6 pickup truckloads</td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">Medium renovations, construction debris, multiple rooms</td>
                  </tr>

                  {/* 30 Yard Dumpster */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-2 sm:p-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-12 h-12 sm:w-16 sm:h-16">
                          <ImageWithFallback 
                            src="/images/optimized/20b0d4b0-5063-428e-a8ae-ad785e70ceae.webp" 
                            alt="30 yard roll-off dumpster rental Utah - large dumpster size for major construction projects, whole house renovations, and commercial work" 
                            className="w-full h-full object-cover rounded"
                            fallbackSrc="/images/optimized/20b0d4b0-5063-428e-a8ae-ad785e70ceae.png"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-xs sm:text-sm">30 Yard Dumpster</h3>
                          <p className="text-xs text-gray-600">Large Projects</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">22.0' × 7.92' × 6.0' (L × W × D)</td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">2-4 tons</td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">9 pickup truckloads</td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">Major renovations, construction projects, commercial work</td>
                  </tr>

                  {/* 10 Yard Clean Dirt Disposal Dumpster */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-2 sm:p-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-12 h-12 sm:w-16 sm:h-16">
                          <ImageWithFallback 
                            src="/images/optimized/IMG_3190.webp" 
                            alt="10 Yard Clean Dirt Disposal Dumpster for Utah Dumpster Rental - Perfect for Dirt and Soil Projects" 
                            className="w-full h-full object-cover rounded"
                            fallbackSrc="/images/optimized/IMG_3190.jpg"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-xs sm:text-sm">10 Yard Clean Dirt Disposal</h3>
                          <p className="text-xs text-gray-600">Dirt & Soil Projects</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">16.46' long x 8' wide x 2.67' high</td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">Flat Rate</td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">4 pickup truckloads</td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">Clean dirt, soil, landscaping projects, garden waste</td>
                  </tr>

                  {/* 10 Yard Mixed Load Disposal Dumpster */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-2 sm:p-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-12 h-12 sm:w-16 sm:h-16">
                          <ImageWithFallback 
                            src="/images/optimized/IMG_3190.webp" 
                            alt="10 Yard Mixed Load Disposal Dumpster for Utah Dumpster Rental" 
                            className="w-full h-full object-cover rounded"
                            fallbackSrc="/images/optimized/IMG_3190.jpg"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-xs sm:text-sm">10 Yard Mixed Load Disposal</h3>
                          <p className="text-xs text-gray-600">Mixed Load</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">16.46' long x 8' wide x 2.67' high</td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">Standard weight allowance</td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">4 pickup truckloads</td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">Mixed construction debris, concrete, dirt, general waste</td>
                  </tr>

                  {/* 12 Yard Concrete Disposal Dumpster */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-2 sm:p-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-12 h-12 sm:w-16 sm:h-16">
                          <ImageWithFallback 
                            src="/images/optimized/IMG_3190.webp" 
                            alt="12 Yard Concrete Disposal Dumpster for Utah Dumpster Rental - Perfect for Concrete Projects" 
                            className="w-full h-full object-cover rounded"
                            fallbackSrc="/images/optimized/IMG_3190.jpg"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-xs sm:text-sm">12 Yard Concrete Disposal</h3>
                          <p className="text-xs text-gray-600">Concrete Projects</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">16.46' long x 8' wide x 2.67' high</td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">Flat Rate</td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">5 pickup truckloads</td>
                    <td className="p-2 sm:p-4 text-gray-700 text-xs sm:text-sm">Concrete, asphalt, brick, stone, heavy materials</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Additional Information */}
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">What's Included</h4>
                <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>• Delivery and pickup</li>
                  <li>• Landfill fees (up to weight limit)</li>
                  <li>• 7-day rental period</li>
                  <li>• Professional service</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Weight Limits</h4>
                <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>• <a href="/15-yard-dumpster-rental" className="text-[#0d9488] hover:underline font-medium">15 Yard</a>: Perfect for medium renovations</li>
                  <li>• <a href="/20-yard-dumpster-rental" className="text-[#0d9488] hover:underline font-medium">20 Yard</a>: Ideal for large home projects</li>
                  <li>• <a href="/30-yard-dumpster-rental" className="text-[#0d9488] hover:underline font-medium">30 Yard</a>: Best for major renovations</li>
                  <li>• <a href="/40-yard-dumpster-rental" className="text-[#0d9488] hover:underline font-medium">40 Yard</a>: Extra large for commercial projects</li>
                  <li>• 10 Yard Clean Dirt: Flat rate (no weight limit)</li>
                  <li>• 10 Yard Mixed Load: Standard weight allowance</li>
                  <li>• 12 Yard Concrete: Flat rate (no weight limit)</li>
                  <li>• Additional weight fees apply</li>
                </ul>
              </div>
            </div>

            {/* Accepted & Prohibited Items Section */}
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
                Accepted & Prohibited Dumpster Rental Items
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Accepted Items */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-500 rounded-lg p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-50 to-purple-1000 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-teal-700">Accepted Items</h4>
                  </div>
                  
                  <ul className="text-sm sm:text-base text-gray-700 space-y-2 mb-4">
                    <li>• Household junk</li>
                    <li>• Yard waste</li>
                    <li>• Furniture</li>
                    <li>• Construction debris</li>
                    <li>• Demolition debris</li>
                    <li>• Wood & drywall</li>
                    <li>• Cardboard & paper</li>
                    <li>• Light landscaping debris</li>
                    <li>• General trash</li>
                  </ul>

                  <div className="bg-teal-600 text-white p-3 rounded-lg">
                    <h5 className="font-bold text-sm sm:text-base mb-2">SPECIALTY ITEMS WE TAKE</h5>
                    <ul className="text-xs sm:text-sm space-y-1">
                      <li>• Concrete, Dirt, Heavy Materials: Heavy Duty Dumpster Required</li>
                      <li>• Mattresses / Box Springs: $25 / each</li>
                      <li>• Freon Appliances: $30 / each</li>
                    </ul>
                  </div>
                </div>

                {/* Prohibited Items */}
                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-red-700">Prohibited Items</h4>
                  </div>
                  
                  <ul className="text-sm sm:text-base text-gray-700 space-y-2 mb-4">
                    <li>• Tires</li>
                    <li>• Paint</li>
                    <li>• Batteries</li>
                    <li>• Oil</li>
                    <li>• Sealed containers</li>
                    <li>• Railroad ties</li>
                    <li>• Asbestos</li>
                    <li>• Hazardous vehicle parts</li>
                    <li>• Etc.</li>
                  </ul>

                  <div className="bg-red-600 text-white p-3 rounded-lg">
                    <h5 className="font-bold text-sm sm:text-base mb-2">PROHIBITED ITEMS NOTICE</h5>
                    <p className="text-xs sm:text-sm mb-2">
                      Some materials are prohibited due to landfill restrictions and safety rules.
                    </p>
                    <p className="text-xs sm:text-sm mb-2">
                      Extra charges may apply—or we may not be able to take the load.
                    </p>
                    <p className="text-xs sm:text-sm font-semibold">
                      Call or text us at (801) 918-6000 before you load it if you're unsure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Rent a Dumpster?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://icondumpsters.com/#quote-form" 
                className="inline-flex items-center bg-[#0d9488] text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                Order Online
              </a>
              <button 
                className="inline-flex items-center bg-[#0d9488] text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                (801) 918-6000
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section - Light Gray Background with Features */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Icon Dumpsters
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* World-Class Customer Service */}
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">World-Class Customer Service</h3>
              <p className="text-gray-600">
                Our experienced team is here to help you every step of the way, from your first call to final pickup.
              </p>
            </div>
            
            {/* Prompt Delivery and Pickup */}
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prompt Delivery and Pickup</h3>
              <p className="text-gray-600">
                Prompt delivery and pickup ensures your project stays on schedule, keeping your site clean and efficient.
              </p>
            </div>
            
            {/* Multiple Jobsite Services for a Fair Price */}
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multiple Jobsite Services for a Fair Price</h3>
              <p className="text-gray-600">
                Reliable service for a fair price. Comprehensive waste management solutions that fit your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Quote Form Section */}
       <section className="bg-gray-50 py-16">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
               Get Your Free Quote
             </h2>
             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
               Ready to get started? Fill out the form below and we'll get back to you with a custom quote for your project.
             </p>
           </div>

           {/* Internal Linking Section */}
           <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" aria-label="Related pages">
             <RelatedPages pageType="service" />
           </nav>

           <div className="max-w-2xl mx-auto">
             <QuoteForm />
           </div>
         </div>
       </section>
     </main>
   );
 }
