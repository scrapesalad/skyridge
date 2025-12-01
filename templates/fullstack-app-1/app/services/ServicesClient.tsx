'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Hero from '../components/hero';

export default function ServicesClient() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial'>('residential');

  // Set active tab based on URL parameter
  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'residential' || type === 'commercial') {
      setActiveTab(type);
    }
  }, [searchParams]);

  const residentialServices = [
    {
      title: 'Home Renovation',
      description: 'Perfect for kitchen remodels, bathroom updates, and home improvement projects',
      sizes: ['10 Yard', '15 Yard', '20 Yard'],
      icon: '🏠'
    },
    {
      title: 'Basement Cleanout',
      description: 'Clear out old furniture, appliances, and debris from your basement',
      sizes: ['15 Yard', '20 Yard', '30 Yard'],
      icon: '🏡'
    },
    {
      title: 'Garage Organization',
      description: 'Declutter your garage and create organized storage space',
      sizes: ['10 Yard', '15 Yard'],
      icon: '🚗'
    },
    {
      title: 'Yard Cleanup',
      description: 'Remove landscaping debris, tree branches, and garden waste',
      sizes: ['10 Yard', '15 Yard', '20 Yard'],
      icon: '🌳'
    },
    {
      title: 'Moving & Relocation',
      description: 'Dispose of unwanted items when moving to a new home',
      sizes: ['15 Yard', '20 Yard', '30 Yard'],
      icon: '📦'
    }
  ];

  const commercialServices = [
    {
      title: 'Construction Projects',
      description: 'Large-scale construction debris removal for commercial buildings',
      sizes: ['20 Yard', '30 Yard'],
      icon: '🏗️'
    },
    {
      title: 'Office Renovations',
      description: 'Commercial office space remodeling and renovation debris',
      sizes: ['15 Yard', '20 Yard'],
      icon: '🏢'
    },
    {
      title: 'Retail Store Cleanup',
      description: 'Store remodeling, fixture removal, and inventory cleanup',
      sizes: ['15 Yard', '20 Yard'],
      icon: '🛍️'
    },
    {
      title: 'Restaurant Remodeling',
      description: 'Kitchen equipment removal and restaurant renovation debris',
      sizes: ['20 Yard', '30 Yard'],
      icon: '🍽️'
    },
    {
      title: 'Warehouse Cleanout',
      description: 'Industrial warehouse cleanup and equipment disposal',
      sizes: ['20 Yard', '30 Yard'],
      icon: '🏭'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Type Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('residential')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'residential'
                  ? 'bg-white text-[#0d9488] shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Residential Services
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'commercial'
                  ? 'bg-white text-[#0d9488] shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Commercial Services
            </button>
          </div>
        </div>

        {/* Service Content */}
        <div className="space-y-12">
          {activeTab === 'residential' ? (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Residential Dumpster Rental Services
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Make your home projects easier with our convenient residential dumpster rentals. 
                  We deliver, you fill, we haul away - it's that simple!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {residentialServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Recommended Sizes:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.sizes.map((size, sizeIndex) => (
                          <span
                            key={sizeIndex}
                            className="px-3 py-1 bg-[#0d9488] text-white text-xs rounded-full"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Commercial Dumpster Rental Services
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Professional waste management solutions for businesses of all sizes. 
                  Keep your commercial projects on schedule with reliable dumpster service.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {commercialServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Recommended Sizes:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.sizes.map((size, sizeIndex) => (
                          <span
                            key={sizeIndex}
                            className="px-3 py-1 bg-[#0d9488] text-white text-xs rounded-full"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Icon Dumpsters?
            </h2>
            <p className="text-lg text-gray-600">
              We're Utah's trusted partner for all your waste management needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Same-day or next-day delivery available throughout Utah</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Service</h3>
              <p className="text-gray-600">Professional team with years of experience in waste management</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Transparent pricing with no hidden fees or surprises</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
