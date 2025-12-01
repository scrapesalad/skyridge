'use client';

import { useEffect } from 'react';
import ImageWithFallback from './ImageWithFallback';

interface DumpsterSizeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DumpsterSizeModal({ isOpen, onClose }: DumpsterSizeModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Complete Dumpster Size Guide</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              Choose the perfect dumpster size for your project. All rentals include delivery, pickup, and landfill fees.
            </p>
          </div>

          {/* Dumpster Sizes Table */}
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
                          alt="15 Yard Roll-off Dumpster for Utah Dumpster Rental - Perfect for Small Projects" 
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
                          alt="20 Yard Roll-off Dumpster for Utah Dumpster Rental - Ideal for Medium Projects" 
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
                          alt="30 yard roll-off dumpster rental Utah - large dumpster size for major construction projects, whole house renovations, and large cleanouts" 
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
                <li>• 15 Yard: Perfect for medium renovations</li>
                <li>• 20 Yard: Ideal for large home projects</li>
                <li>• 30 Yard: Best for major renovations</li>
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

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-gray-600 mb-4 text-sm sm:text-base">Ready to get started?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://icondumpsters.com/#quote-form"
                className="inline-flex items-center bg-[#0d9488] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium text-sm sm:text-base"
                onClick={onClose}
              >
                Get Free Quote
              </a>
              <a
                href="tel:801-918-6000"
                className="inline-flex items-center bg-[#0d9488] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (801) 918-6000
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
