'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { SITE_URL } from '@/lib/site';
import QuoteButton from '@/components/QuoteButton';

interface CityPageTemplateProps {
  cityName: string;
  citySlug: string;
  state: string;
  phoneNumber: string;
  latitude: string;
  longitude: string;
  zipCodes?: string[];
  neighborhoods: string[];
  contentSections: {
    overview: string;
    whyChooseUs: string;
    localInfo: string;
    serviceAreas: string;
  };
  landmarks?: Array<{
    name: string;
    address: string;
    url?: string;
    description?: string;
  }>;
  businessDistricts?: Array<{
    name: string;
    description: string;
    link: string;
  }>;
  permitInfo?: {
    cityName: string;
    phoneNumber: string;
    requirements: string;
  };
  roofingServices?: Array<{
    service: string;
    description: string;
    useCases: string[];
  }>;
}

export default function CityPageTemplate({
  cityName,
  citySlug,
  state,
  phoneNumber,
  latitude,
  longitude,
  zipCodes = [],
  neighborhoods,
  contentSections,
  landmarks,
  businessDistricts,
  permitInfo,
  roofingServices
}: CityPageTemplateProps) {
  const [activeService, setActiveService] = useState('replacement');
  
  const canonicalUrl = `${SITE_URL}/locations/${citySlug}`;
  
  // Use roofingServices from cityData if available, otherwise use default services
  const defaultServices = [
    {
      id: 'replacement',
      name: 'Roof Replacement',
      description: 'Complete roof replacement services with premium materials designed for Utah\'s climate.',
      features: ['Full roof replacement', 'Premium materials', 'Expert installation', 'Warranty included'],
      image: '/images/skyridge/skyridge_image_001.webp',
    },
    {
      id: 'repairs',
      name: 'Roof Repairs',
      description: 'Fast and reliable repairs for leaks, storm damage, and general wear and tear.',
      features: ['Leak detection & repair', 'Shingle replacement', 'Emergency repairs', 'Flashing repair'],
      image: '/images/skyridge/skyridge_image_002.webp',
    },
    {
      id: 'insurance',
      name: 'Insurance Claims',
      description: 'Expert assistance with insurance claims after storm damage or other covered events.',
      features: ['Claim filing assistance', 'Damage assessment', 'Insurance coordination', 'Maximize coverage'],
      image: '/images/skyridge/skyridge_image_003.webp',
    },
    {
      id: 'additional',
      name: 'Additional Services',
      description: 'Solar installation, siding, gutters, and commercial roofing solutions.',
      features: ['Solar installation', 'Siding services', 'Gutter systems', 'Commercial roofing'],
      image: '/images/skyridge/skyridge_image_004.webp',
    },
  ];

  // Convert roofingServices to services format if available
  const services = roofingServices && roofingServices.length > 0
    ? roofingServices.map((rs, index) => ({
        id: rs.service.toLowerCase().replace(/\s+/g, '-'),
        name: rs.service,
        description: rs.description,
        features: rs.useCases,
        image: `/images/skyridge/skyridge_image_${String(index + 1).padStart(3, '0')}.webp`,
      }))
    : defaultServices;

  const cityFAQs = [
    {
      question: `What roofing services does Sky Ridge Roofing offer in ${cityName}?`,
      answer: `We offer comprehensive roofing services in ${cityName}, including roof replacement, roof repairs, insurance claims assistance, and additional services like solar installation, siding, and gutters. Our team is experienced with ${cityName}'s unique weather conditions and building requirements.`
    },
    {
      question: `How do I know if I need a roof replacement in ${cityName}?`,
      answer: `Signs that you may need a roof replacement include missing or damaged shingles, leaks or water damage, roof age over 20 years, granules in your gutters, sagging or drooping roof, and high energy bills. Utah's climate can be harsh on roofs, so regular inspections are important. Our team can perform a free inspection to assess your roof's condition.`
    },
    {
      question: `Do you help with insurance claims in ${cityName}?`,
      answer: `Yes! We specialize in helping ${cityName} homeowners navigate the insurance claims process. We can assess storm damage, document everything for your claim, communicate directly with your insurance company, and ensure you get the coverage you deserve. We understand the common types of damage that occur in Utah and how to properly document them.`
    },
    {
      question: `What areas of ${cityName} do you serve?`,
      answer: `We serve all of ${cityName} and surrounding areas, including neighborhoods like ${neighborhoods.slice(0, 3).join(', ')}, and more.${zipCodes.length > 0 ? ` We cover ZIP codes ${zipCodes.join(', ')} and all surrounding areas.` : ''} Contact us to confirm we service your specific location.`
    },
  ];

  const nearbyCities = [
    'Salt Lake City', 'Provo', 'Ogden', 'West Valley City', 'Sandy',
    'Orem', 'Layton', 'Taylorsville', 'St. George', 'Logan',
    'Murray', 'South Jordan', 'Draper', 'Riverton', 'Herriman',
    'West Jordan', 'Midvale', 'Millcreek', 'Cottonwood Heights', 'Holladay',
    'Bountiful', 'American Fork', 'Lehi', 'Spanish Fork'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full Screen Image */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/skyridge/skyridge_image_005.webp"
            alt={`Professional Roofing Services in ${cityName}, ${state}`}
            fill
            className="object-cover"
            priority={true}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 text-sm text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <span className="mx-2">/</span>
            <span>{state}</span>
            <span className="mx-2">/</span>
            <span className="text-white">{cityName}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Expert Roofing Services in {cityName}, {state}
              </h1>
              
              <a 
                href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl mb-4"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {phoneNumber}
              </a>
              
              <p className="text-white text-lg">Mon - Fri: 8 am - 6 pm | Sat: 9 am - 4 pm</p>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-6 max-w-xs">
                <div className="mb-4">
                  <Image
                    src="/images/skyridge/skyridge_image_010.webp"
                    alt={`Roofing services in ${cityName}`}
                    width={200}
                    height={120}
                    className="w-full h-auto rounded"
                  />
                </div>
                <p className="text-gray-900 text-sm mb-4">
                  Professional roofing services in {cityName}, {state}
                </p>
                <Link 
                  href="/services"
                  className="inline-block w-full bg-blue-700 hover:bg-blue-800 text-white text-center px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Professional Roofing Services in {cityName}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {contentSections.overview}
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="font-semibold text-gray-900 mb-3">With Sky Ridge Roofing, you'll enjoy:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Licensed & insured roofing professionals
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Fast response times for all your roofing needs
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Transparent pricing with no hidden fees
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Expert insurance claims assistance
                </li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                Call for a Free Estimate: <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="text-blue-600 hover:text-blue-700">{phoneNumber}</a>
              </p>
              <QuoteButton className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 px-8 py-3 rounded-lg text-lg shadow-lg">
                Get Free Quote
              </QuoteButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Roofing Services in {cityName}
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              We provide comprehensive roofing services for residential and commercial properties throughout {cityName}, {state}.
            </p>

            {/* Service Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeService === service.id
                      ? 'bg-blue-700 text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-600'
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
              {services.map((service) => (
                <div key={service.id} className={activeService === service.id ? 'block' : 'hidden'}>
                  <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {service.name}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <p className="font-semibold text-gray-900 mb-3">What's Included:</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <span className="text-blue-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link 
                href={`/services/${activeService === 'replacement' ? 'roof-replacement' : activeService === 'repairs' ? 'roof-repairs' : activeService === 'insurance' ? 'insurance-claims' : 'additional-services'}`}
                className="inline-block bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg mb-4"
              >
                Learn More About This Service
              </Link>
            </div>
          </div>
        </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Sky Ridge Roofing in {cityName}?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {contentSections.whyChooseUs}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Local Expertise</h3>
                  <p className="text-gray-700">We understand {cityName}'s unique weather patterns and building requirements</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Fast Response</h3>
                  <p className="text-gray-700">Quick response times for all your roofing needs in {cityName}</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Quality Materials</h3>
                  <p className="text-gray-700">We use premium materials designed to withstand Utah's climate</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Licensed & Insured</h3>
                  <p className="text-gray-700">Fully licensed and insured in the State of Utah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Areas We Serve in {cityName}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Neighborhoods</h3>
              <ul className="space-y-2 text-gray-700">
                {neighborhoods.map((neighborhood, index) => (
                  <li key={index}>• {neighborhood}</li>
                ))}
              </ul>
            </div>

            {zipCodes.length > 0 && (
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">ZIP Codes</h3>
                <p className="text-gray-700 mb-2">We serve the following ZIP codes:</p>
                <p className="text-gray-600">{zipCodes.join(', ')}</p>
                <p className="text-sm text-gray-500 mt-4">
                  Don't see your area? Contact us to confirm we service your location.
                </p>
              </div>
            )}
          </div>

          {businessDistricts && businessDistricts.length > 0 && (
            <div className="max-w-5xl mx-auto mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Business Districts</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {businessDistricts.map((district, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                    <h4 className="font-semibold text-gray-900 mb-2">{district.name}</h4>
                    <p className="text-gray-700 text-sm">{district.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {landmarks && landmarks.length > 0 && (
            <div className="max-w-5xl mx-auto mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Local Landmarks</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {landmarks.map((landmark, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {landmark.url ? (
                        <a href={landmark.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                          {landmark.name}
                        </a>
                      ) : (
                        landmark.name
                      )}
                    </h4>
                    <p className="text-gray-600 text-sm mb-1">{landmark.address}</p>
                    {landmark.description && (
                      <p className="text-gray-700 text-sm">{landmark.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {permitInfo && (
            <div className="max-w-3xl mx-auto mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Permit Information</h3>
              <p className="text-gray-700 mb-2">
                <strong>City:</strong> {permitInfo.cityName}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> <a href={`tel:${permitInfo.phoneNumber.replace(/\D/g, '')}`} className="text-blue-600 hover:text-blue-700">{permitInfo.phoneNumber}</a>
              </p>
              <p className="text-gray-700">{permitInfo.requirements}</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            {cityFAQs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Our {cityName} Customers Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Sky Ridge Roofing did an amazing job replacing our roof in {cityName}. The team was professional, clean, and completed the work on time. Highly recommend!"
              </p>
              <p className="text-sm text-gray-600 font-semibold">- Sarah J., {cityName}</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "We had storm damage and needed help with our insurance claim. Sky Ridge Roofing handled everything and made the process so easy. Great service!"
              </p>
              <p className="text-sm text-gray-600 font-semibold">- Michael C., {cityName}</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Fast response time and excellent workmanship. Our new roof looks fantastic and we feel confident it will last for years to come."
              </p>
              <p className="text-sm text-gray-600 font-semibold">- Jennifer M., {cityName}</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/testimonials"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Serving {cityName} and Surrounding Areas
          </h2>
          
          <div className="mb-12">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(cityName + ', Utah')}&output=embed&z=11`}
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Cities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            We Also Serve These Nearby Cities
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {nearbyCities.filter(city => city !== cityName).slice(0, 12).map((city) => (
              <Link
                key={city}
                href={`/locations/${city.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-blue-600 hover:text-blue-700 hover:underline transition-colors text-center"
              >
                {city}
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/locations"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              View All Locations
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Free Estimate in {cityName}?
          </h2>
          <p className="text-xl mb-8">
            Contact Sky Ridge Roofing today for expert roofing services in {cityName}, {state}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="inline-block bg-white text-blue-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Call {phoneNumber}
            </a>
            <QuoteButton variant="outline" className="px-10 py-4 text-lg">
              Get Free Quote
            </QuoteButton>
          </div>
        </div>
      </section>
    </div>
  );
}

