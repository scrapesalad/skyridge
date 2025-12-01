'use client';

import OptimizedImage from './OptimizedImage';
import FAQSchema, { dumpsterRentalFAQs } from './FAQSchema';
import StructuredData, { buildCityLocalBusinessSchema } from './StructuredData';
import { useState } from 'react';

interface CityPageTemplateProps {
  cityName: string;
  citySlug: string;
  state: string;
  phoneNumber: string;
  latitude: string;
  longitude: string;
  landmarks: Array<{
    name: string;
    address: string;
    url?: string;
    description?: string;
  }>;
  businessDistricts: Array<{
    name: string;
    description: string;
    link: string;
  }>;
  permitInfo: {
    cityName: string;
    phoneNumber: string;
    requirements: string;
  };
  contentSections: {
    overview: string;
    residentialServices: string[];
    commercialServices: string[];
    whyChooseUs: string;
    dumpsterSizes: Array<{
      size: string;
      description: string;
      useCases: string[];
    }>;
    localInfo: string;
    serviceAreas: string;
  };
}

export default function CityPageTemplate({
  cityName,
  citySlug,
  state,
  phoneNumber,
  latitude,
  longitude,
  landmarks,
  businessDistricts,
  permitInfo,
  contentSections
}: CityPageTemplateProps) {
  const [activeTab, setActiveTab] = useState('15');
  
  const canonicalUrl = `https://icondumpsters.com/dumpster-rental-${citySlug}-ut`;
  const parsedLatitude = Number.parseFloat(latitude);
  const parsedLongitude = Number.parseFloat(longitude);
  
  const locationSchema = buildCityLocalBusinessSchema({
    cityName,
    citySlug,
    state,
    phoneNumber,
    latitude: Number.isFinite(parsedLatitude) ? parsedLatitude : undefined,
    longitude: Number.isFinite(parsedLongitude) ? parsedLongitude : undefined,
  });
  
  const cityServiceSchema = {
    name: `${cityName} Dumpster Rental Services`,
    description: `Icon Dumpsters provides ${cityName}, ${state} homeowners, contractors, and facility managers with fast roll-off dumpster rentals, same-day delivery, and driveway-safe placement.`,
    provider: {
      name: 'Icon Dumpsters',
      url: 'https://icondumpsters.com',
      image: 'https://icondumpsters.com/IconDumpsters_Logo_Vector_Pantone267DarkerPurple.png',
    },
    areaServed: [`${cityName}, ${state}`, state, 'Utah'],
    serviceType: 'Dumpster Rental',
    serviceUrl: canonicalUrl,
  };
  
  const cityFAQs = [
    {
      question: `What should I do before my roll off dumpster arrives in ${cityName}?`,
      answer: `After you've scheduled your roll off container delivery, make sure the drop-off location is accessible and clear for the entire day. This means opening any entry gates to your property and moving potential obstacles out of the way. Planning to keep your dumpster rental in the street or blocking the sidewalk? Check with ${permitInfo.cityName} to see if you need a permit in advance. When you place an order, our team will share more tips to prepare.`
    },
    {
      question: `Why can't I dispose of certain items in my dumpster rental?`,
      answer: `While we accept most debris in our roll off containers, there are prohibited items we can't take off your hands. This includes tires, paint, oil, car batteries, and hazardous materials. Not only do these materials raise health concerns at the landfill, but they may damage your bin as well. Have questions about what you can't throw away while renting a dumpster? Get in touch with our team at ${phoneNumber}.`
    },
    ...dumpsterRentalFAQs.slice(0, 2),
  ];

  const dumpsterSizes = [
    {
      size: '10',
      capacity: '50-70 Trash Bags',
      idealFor: ['Attic cleanouts', 'Light demolition', 'Concrete disposal']
    },
    {
      size: '15',
      capacity: '80-100 Trash Bags',
      idealFor: ['Bathroom remodels', 'Roofing repairs', 'Small cleanouts']
    },
    {
      size: '20',
      capacity: '110-130 Trash Bags',
      idealFor: ['Partial home cleanouts', 'General construction', 'Roofing projects']
    },
    {
      size: '30',
      capacity: '170-190 Trash Bags',
      idealFor: ['Office cleanouts', 'Home additions', 'Decluttering before a move']
    }
  ];

  const nearbyCities = [
    'Cottonwood Heights', 'Draper', 'Herriman', 'Holladay', 'Kearns',
    'Magna', 'Midvale', 'Millcreek', 'North Salt Lake', 'Riverton',
    'Salt Lake City', 'Sandy', 'South Jordan', 'South Salt Lake',
    'Taylorsville', 'West Jordan', 'West Valley City'
  ];

  return (
    <>
      <StructuredData type="localBusiness" data={locationSchema} />
      <StructuredData type="service" data={cityServiceSchema} />
      <FAQSchema faqs={cityFAQs} pageUrl={canonicalUrl} />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section - Full Screen Image */}
        <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
          {/* Full Screen Background Image */}
          <div className="absolute inset-0 z-0">
            <OptimizedImage
              src="/images/optimized/icondumpsters_general_2484955712329217818_enhance_2_1x_textai.jpg"
              alt={`Blue Roll Off Dumpster in ${cityName}, UT`}
              fill
              className="object-cover"
              priority={true}
              sizes="100vw"
            />
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav className="mb-6 text-sm text-white/80">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="mx-2">/</span>
              <a href="/locations" className="hover:text-white transition-colors">Locations</a>
              <span className="mx-2">/</span>
              <span>Utah</span>
              <span className="mx-2">/</span>
              <span>Salt Lake City</span>
              <span className="mx-2">/</span>
              <span className="text-white">{cityName}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Content Area */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{
                  fontFamily: 'Rockwell, "Rockwell Nova", "Roboto Slab", "DejaVu Serif", "Sitka Small", serif'
                }}>
                  {cityName === 'Salt Lake City' 
                    ? 'Dumpster Rental Salt Lake City - Same Day Delivery'
                    : `Dumpster Rental ${cityName}, UT - Professional Service`}
                </h1>
                
                {/* Phone Number Button */}
                <a 
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl mb-4"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {phoneNumber}
                </a>
                
                {/* Operating Hours */}
                <p className="text-white text-lg">Mon - Fri: 6 am - 4 pm MST</p>
              </div>

              {/* Right Content Area - White Information Box Overlay */}
              <div className="relative">
                <div className="bg-white rounded-lg shadow-xl p-6 max-w-xs">
                  {/* Small Dumpster Image */}
                  <div className="mb-4">
                    <OptimizedImage
                      src="/images/optimized/icondumpsters_general_ba5e61b5_fe0f_4ef5_a4ac_f7e040df3345-480w.webp"
                      alt={`20 Yard Dumpster Spec Chart - Available dumpster sizes in ${cityName}`}
                      width={200}
                      height={120}
                      className="w-full h-auto rounded"
                    />
                  </div>
                  
                  {/* Descriptive Text */}
                  <p className="text-gray-900 text-sm mb-4">
                    Rent dumpsters in {cityName}, both small and large.
                  </p>
                  
                  {/* View Available Sizes Button */}
                  <a 
                    href="/guides/dumpster-sizes"
                    className="inline-block w-full bg-teal-700 hover:bg-teal-800 text-white text-center px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    View Available Sizes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rent a Roll Off Dumpster Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Rent a Roll Off Dumpster for an Affordable Rate
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                When you talk to our local {cityName} dumpster rental service, we'll recommend the right container for your job. We bundle your delivery, pickup and rental period into one low price for easy budgeting.
              </p>
              
              <div className="bg-teal-50 border-l-4 border-teal-600 p-6 mb-8">
                <p className="font-semibold text-gray-900 mb-3">With us, you'll enjoy:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    Professional service that's close to home.
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    Quick deliveries so you can get to work sooner.
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    Fair pricing that keeps your wallet happy.
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <p className="text-xl font-semibold text-gray-900 mb-4">
                  Call for an Affordable Rate: <a href={`tel:${phoneNumber}`} className="text-teal-600 hover:text-teal-700">{phoneNumber}</a>
                </p>
                <a 
                  href="/#quote-form"
                  className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all shadow-lg"
                >
                  Order Online
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Dumpster Sizes Section */}
        <section id="dumpster-sizes" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Household & Construction Dumpsters
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              These roll off dumpsters can be used for common household and commercial projects, including home cleanouts, remodeling, general construction and demolition.
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {dumpsterSizes.map((size) => (
                <button
                  key={size.size}
                  onClick={() => setActiveTab(size.size)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === size.size
                      ? 'bg-teal-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-teal-600'
                  }`}
                >
                  {size.size} yd
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
              {dumpsterSizes.map((size) => (
                <div key={size.size} className={activeTab === size.size ? 'block' : 'hidden'}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    {size.size} Yard Dumpster
                  </h3>
                  
                  <div className="border-t border-b border-gray-200 py-4 mb-6">
                    <p className="text-center">
                      <span className="font-semibold text-gray-900">Capacity:</span>{' '}
                      <span className="text-gray-700">{size.capacity}</span>
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-3">Ideal For:</p>
                    <ul className="space-y-2">
                      {size.idealFor.map((use, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <span className="text-teal-600 mr-2">•</span>
                          {use}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a 
                href={`tel:${phoneNumber}`}
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg mb-4"
              >
                Call for Best Pricing {phoneNumber}
              </a>
              <p className="text-sm text-gray-500 mt-4 max-w-3xl mx-auto">
                *Disclaimer: All dumpster dimensions may vary slightly but volume is accurate. Prices and availability are subject to change without notice. Capacity estimates are based on the volume of a 33 gallon trash bag.
              </p>
            </div>
          </div>
        </section>

        {/* Convenient Service Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get Convenient Dumpster Rental Service in {cityName} for Any Cleanup
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Whether you're cleaning out your garage or tackling a storefront remodel in {cityName}, we'll help you clean up without the hassle. Our helpful staff makes it easy to rent a dumpster for any junk removal project. We'll offer an expert size recommendation after learning about your job. Then, we'll schedule delivery when it works for you and pick up your dumpster when you're finished working. And for lengthy jobs, you can often keep your bin longer for a flat daily rate.
              </p>
              <p className="text-lg text-gray-700">
                Call us at <a href={`tel:${phoneNumber}`} className="text-teal-600 hover:text-teal-700 font-semibold">{phoneNumber}</a> to order a roll off dumpster today.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Work With Icon Dumpsters?
              </h2>
              <p className="text-lg text-gray-700">
                Our {cityName}-area dumpster rental service helps streamline the junk removal process. We eliminate out-of-the-way trips to the dump so you can work more efficiently. There are never hidden fees, and we're here to answer any questions you have along the way. With our low rates, quick deliveries and helpful support, we make renting a dumpster simple.
              </p>
            </div>
          </div>
        </section>

        {/* Materials Accepted Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What Materials Can Our Dumpster Rentals Take?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Household Debris */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-teal-600">
                  Accepted Household Debris
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• household junk</li>
                  <li>• carpet</li>
                  <li>• flooring</li>
                  <li>• appliances</li>
                  <li>• electronics</li>
                  <li>• furniture</li>
                  <li>• mattresses & box springs</li>
                  <li>• fixtures</li>
                  <li>• yard waste</li>
                  <li>• stumps</li>
                  <li>• gravel, stone & rock</li>
                </ul>
              </div>

              {/* Construction Debris */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-teal-600">
                  Accepted Construction and Heavy Debris
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• construction debris</li>
                  <li>• wood & drywall</li>
                  <li>• roofing materials</li>
                  <li>• concrete</li>
                  <li>• block</li>
                  <li>• brick</li>
                  <li>• dirt</li>
                  <li>• gravel, stone & rock</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-8 text-center max-w-3xl mx-auto">
              *Please call your sales representative to learn more about disposing of specific materials, as well as any items we cannot accept.
            </p>
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
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Excellent customer service! Delivery of dumpster was on time and placed with care."
                </p>
                <p className="text-sm text-gray-600 font-semibold">- Sharon B.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "You are TRULY AMAZING!! Thanks for making this so easy for us from start to finish! Will definitely be referring!"
                </p>
                <p className="text-sm text-gray-600 font-semibold">- Celia M.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "It went exactly as we expected. Professional, on-time, and hassle-free!"
                </p>
                <p className="text-sm text-gray-600 font-semibold">- Ralph C.</p>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/reviews"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Read All Reviews
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What should I do before my roll off dumpster arrives?
                </h3>
                <p className="text-gray-700">
                  After you've scheduled your roll off container delivery, make sure the drop-off location is accessible and clear for the entire day. This means opening any entry gates to your property and moving potential obstacles out of the way. Planning to keep your dumpster rental in the street or blocking the sidewalk? Check with {permitInfo.cityName} to see if you need a permit in advance. When you place an order, our team will share more tips to prepare.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Why can't I dispose of certain items in my dumpster rental?
                </h3>
                <p className="text-gray-700">
                  While we accept most debris in our roll off containers, there are prohibited items we can't take off your hands. This includes tires, paint, oil and car batteries. Not only do these materials raise health concerns at the landfill, but they may damage your bin as well. Have questions about what you can't throw away while renting a dumpster? Get in touch with our team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              How It Works
            </h2>
            
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Choose a size and delivery spot</h3>
                </div>
                <p className="text-gray-700 ml-16">
                  We require 60 feet of space in a straight line and 23 feet of vertical clearance.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Prepare for delivery</h3>
                </div>
                <p className="text-gray-700 ml-16">
                  Remove any vehicles, materials or low-hanging obstacles to ensure we can deliver your dumpster and to avoid a trip fee.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Fill up your dumpster</h3>
                </div>
                <p className="text-gray-700 ml-16">
                  Remember to keep your included weight limit in mind to prevent overage fees.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Schedule your pickup</h3>
                </div>
                <p className="text-gray-700 ml-16">
                  To ensure pickup and avoid a trip fee, your dumpster must be accessible and only contain approved debris piled no higher than the sidewalls.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                Call {phoneNumber} for instant pricing
              </p>
              <a 
                href="/#quote-form"
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg"
              >
                Order Online
              </a>
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

        {/* Related Dumpster Rental Pages - Internal Linking for SEO */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Popular Dumpster Rental Locations & Services
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              We provide professional dumpster rental services throughout Utah. Explore our service areas and specialized rental options.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Top Ranking City Pages */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Dumpster Rental by City</h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="/dumpster-rental-murray-ut" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      Dumpster Rental in Murray, UT
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/dumpster-rental-millcreek-ut" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      Dumpster Rental in Millcreek, UT
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/dumpster-rental-south-jordan-ut" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      Dumpster Rental in South Jordan, UT
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/dumpster-rental-salt-lake-city-ut" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      Dumpster Rental in Salt Lake City, UT
                    </a>
                  </li>
                </ul>
              </div>

              {/* Service Pages */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Dumpster Rental Services</h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="/services/roll-off-dumpster-rental" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      Roll-Off Dumpster Rental Services
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/services/residential-dumpster-rental" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      Residential Dumpster Rental Services
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/services/construction-dumpster-rental" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      Construction Dumpster Rental
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/services" 
                      className="text-teal-600 hover:text-teal-700 hover:underline font-semibold"
                    >
                      All Dumpster Rental Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Cities Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Looking for a dumpster closer to home? Find your location below:
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {nearbyCities.map((city) => (
                <a
                  key={city}
                  href={`/dumpster-rental-${city.toLowerCase().replace(/\s+/g, '-')}-ut`}
                  className="text-teal-600 hover:text-teal-700 hover:underline transition-colors"
                >
                  {city}
                </a>
              ))}
            </div>

            <div className="text-center">
              <a 
                href="/locations"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Find Location
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Have Questions?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Get in touch with us today and we'll walk you through the rental process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${phoneNumber}`}
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg"
              >
                Call {phoneNumber}
              </a>
              <a 
                href="/#quote-form"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg"
              >
                Order Online
              </a>
            </div>
          </div>
        </section>

        {/* Partner CTA */}
        <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Become a Hauling Partner
            </h2>
            <p className="text-xl mb-8">
              Want more business? Work with us and you can sell more dumpsters without the added overhead. Learn more about partnering with Icon Dumpsters.
            </p>
            <a 
              href="/frequent-buyers"
              className="inline-block bg-white text-teal-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Learn More
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
