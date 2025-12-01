import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from '../components/hero';
import PageTemplate from "../components/PageTemplate";
import RelatedPages from "../components/RelatedPages";
import FAQSchema, { residentialWasteFAQs } from "../components/FAQSchema";
import StrategicInternalLinks from "../components/StrategicInternalLinks";

import OptimizedImage from '../components/OptimizedImage';
export const metadata: Metadata = {
  title: "Dumpster Rental Services in Utah | Icon Dumpsters",
  description: 'Residential, commercial, and industrial dumpster rentals across Utah. Heavy-duty roll-offs for construction, warehouses, and home projects. Call (801) 918-6000.',
  keywords: 'residential dumpster rental, commercial dumpster rental, industrial dumpster rental, Utah roll-off containers',
    openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: "Dumpster Rental Services in Utah | Icon Dumpsters",
    description: "Residential, commercial, and industrial dumpster rentals across Utah. Heavy-duty roll-offs for construction, warehouses, and home projects. Call (801) 918-6000.",
    url: 'https://icondumpsters.com/services',
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
    title: "Dumpster Rental Services in Utah | Icon Dumpsters",
    description: "Residential, commercial, and industrial dumpster rentals across Utah. Heavy-duty roll-offs for construction, warehouses, and home projects. Call (801) 918-6000.",
    images: ['https://icondumpsters.com/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp'],
  },
  alternates: { canonical: 'https://icondumpsters.com/services' },
  robots: { index: true, follow: true }
};

export default function Services() {
  const priorityServices = [
    {
      slug: 'same-day-dumpster',
      label: 'Same-Day Dumpster Delivery',
      description: 'Rush delivery with live ETAs for emergency cleanups, inspections, and short-notice projects.',
    },
    {
      slug: 'dumpster-rental-near',
      label: 'Dumpster Rental Near Me',
      description: 'Neighborhood-focused routes that keep Salt Lake County homeowners covered within hours.',
    },
    {
      slug: 'disaster-cleanup',
      label: 'Disaster Cleanup Dumpsters',
      description: 'Coordinated debris boxes for fire, flood, and storm response across the Wasatch Front.',
    },
    {
      slug: 'restaurant-cleanout',
      label: 'Restaurant & Hospitality Cleanouts',
      description: 'Food-service aware hauling for equipment swaps, remodels, and tenant improvements.',
    },
    {
      slug: 'rv-cleanout',
      label: 'RV & Specialty Cleanouts',
      description: 'Dedicated dumpsters for RV remodels, campers, and oversized recreation equipment.',
    },
  ];

  const saltLakeCountyCities = [
    { slug: 'salt-lake-city', name: 'Salt Lake City' },
    { slug: 'west-valley-city', name: 'West Valley City' },
    { slug: 'west-jordan', name: 'West Jordan' },
    { slug: 'sandy', name: 'Sandy' },
    { slug: 'south-jordan', name: 'South Jordan' },
    { slug: 'taylorsville', name: 'Taylorsville' },
    { slug: 'murray', name: 'Murray' },
    { slug: 'millcreek', name: 'Millcreek' },
    { slug: 'draper', name: 'Draper' },
    { slug: 'riverton', name: 'Riverton' },
  ];

  const buildCityPath = (serviceSlug: string, citySlug: string) => {
    // Always redirect to the main city page for SEO consistency
    // This fixes broken redirects from /dumpster-rental-near-me-{city}-ut to /{city}
    return `/dumpster-rental-${citySlug}-ut`;
  };

  return (
    <PageTemplate>
      {/* FAQ Schema for high-intent services page */}
      <FAQSchema faqs={residentialWasteFAQs} pageUrl="https://icondumpsters.com/services" />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dumpster Rental Salt Lake City - Professional Services
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Dumpster Rentals Are Great For A Variety Of Projects!
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            At Icon Dumpsters, our mission is simple: <strong>to provide a hassle-free, friendly dumpster rental service to homeowners and contractors alike.</strong>
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
            Our services include residential-friendly dumpster rentals, professional dumpster delivery and pickup, and comprehensive waste management solutions. With a variety of dumpster sizes and a dedication to exceptional customer service, our goal is to make your waste management process as straightforward and pleasant as possible.
          </p>
        </div>

        {/* Service Images Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <OptimizedImage src="/images/optimized/Screenshot 2025-09-30 083758-enhance-2.7x.webp"
              alt="Professional dumpster delivery service Utah - same-day dumpster rental delivery for residential and commercial projects"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">Professional Delivery</h3>
              <p className="text-sm opacity-90">Fast & reliable service</p>
            </div>
          </div>
          
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <OptimizedImage src="/images/optimized/IMG_1472.webp"
              alt="Multiple dumpster sizes Utah - 15 yard, 20 yard, and 30 yard roll-off dumpster rental options for all project sizes"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">Multiple Sizes</h3>
              <p className="text-sm opacity-90">10-30 yard options</p>
            </div>
          </div>
          
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <OptimizedImage src="/images/optimized/-2484955712329217818-enhance-2.1x-textai.webp"
              alt="Construction dumpster rental Utah - heavy-duty roll-off dumpster properly placed on construction site for waste management"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">Construction Ready</h3>
              <p className="text-sm opacity-90">Heavy-duty solutions</p>
            </div>
          </div>
          
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <OptimizedImage src="/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp"
              alt="Dumpster waste management Utah - efficient waste loading and management with professional roll-off dumpster rental"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">Easy Loading</h3>
              <p className="text-sm opacity-90">Convenient access</p>
            </div>
          </div>
        </div>

          {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Residential Dumpster Rentals */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <OptimizedImage src="/images/IMG_1488.webp"
                alt="Residential dumpster rental Utah - roll-off dumpster rental for home renovation projects, basement cleanouts, and garage organization"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Residential Dumpster Rentals</h3>
              <p className="text-gray-600 mb-4">
                Icon Dumpsters specializes in residential-friendly dumpster rentals, offering a seamless and efficient solution for waste management. Our service includes easy-to-navigate dumpster sizes and professional dumpster delivery and pickup.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#0d9488] mr-2">✓</span>
                  <span>Home renovations & remodeling</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#0d9488] mr-2">✓</span>
                  <span>Basement & attic cleanouts</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#0d9488] mr-2">✓</span>
                  <span>Garage organization projects</span>
                </div>
              </div>
              <a href="https://icondumpsters.com/services/residential-dumpster-rental" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Residential Dumpster Rentals
              </a>
            </div>
          </div>

          {/* Commercial Dumpster Rentals */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <OptimizedImage src="/images/optimized/IMG_0336.webp"
                alt="Commercial dumpster rental Utah - business dumpster rental for office renovations, retail cleanouts, and restaurant build-outs"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Dumpster Rentals</h3>
              <p className="text-gray-600 mb-4">
                Reliable dumpster rentals for offices, retail, restaurants, property managers, and job sites with fast delivery and pickup.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#0d9488] mr-2">✓</span>
                  <span>Office renovations</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#0d9488] mr-2">✓</span>
                  <span>Retail cleanouts</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#0d9488] mr-2">✓</span>
                  <span>Restaurant build-outs</span>
                </div>
              </div>
              <a href="https://icondumpsters.com/services/commercial-dumpster-rental" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Commercial Dumpster Rentals
              </a>
            </div>
          </div>

          {/* Industrial Dumpster Rentals */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <OptimizedImage src="/images/dumpsterSmallBanner.webp"
                alt="Industrial dumpster rental Utah - heavy-duty roll-off dumpster for manufacturing facilities, warehouses, and large-scale cleanouts"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industrial Dumpster Rentals</h3>
              <p className="text-gray-600 mb-4">
                Heavy-duty roll-off containers for manufacturing facilities, warehouses, infrastructure projects, and large-scale cleanouts.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#0d9488] mr-2">✓</span>
                  <span>Manufacturing scrap</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#0d9488] mr-2">✓</span>
                  <span>Warehouse cleanouts</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#0d9488] mr-2">✓</span>
                  <span>Industrial demolition debris</span>
                </div>
              </div>
              <a href="https://icondumpsters.com/services/industrial-dumpster-rental" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Industrial Dumpster Rentals
              </a>
            </div>
          </div>

          {/* Specialized Dumpster Rentals */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <OptimizedImage src="/images/dumpsterSmallBanner2.webp"
                alt="Specialized dumpster rental Utah - concrete and dirt dumpster rental for heavy materials"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Specialized Dumpster Rentals</h3>
              <p className="text-gray-600 mb-4">
                Specialized dumpsters for heavy materials like concrete, dirt, and soil. Flat-rate pricing with no weight limits.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#0d9488] mr-2">✓</span>
                  <span>Concrete disposal</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#0d9488] mr-2">✓</span>
                  <span>Dirt and soil removal</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#0d9488] mr-2">✓</span>
                  <span>No weight limits</span>
                </div>
              </div>
              <div className="flex gap-2">
                <a href="https://icondumpsters.com/services/concrete-dumpster-rental" className="flex-1 bg-[#0d9488] text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-center text-sm">
                  Concrete Dumpster
                </a>
                <a href="https://icondumpsters.com/services/dirt-dumpster-rental" className="flex-1 bg-[#0d9488] text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-center text-sm">
                  Dirt Dumpster
                </a>
              </div>
            </div>
          </div>

          {/* Yard Waste & Debris Bin Rental */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <OptimizedImage src="/images/dumpsterSmallBanner2.webp"
                alt="Yard waste dumpster rental Utah - dumpster rental for yard debris, tree removal, landscaping projects, and seasonal yard cleanup"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Yard Waste & Debris Bin Rental</h3>
              <p className="text-gray-600 mb-4">
                Tackling a yard overhaul or dealing with seasonal cleanup? Icon Dumpsters is here to help manage your yard waste and debris efficiently.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#0d9488] mr-2">✓</span>
                  <span>Tree & branch removal</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#0d9488] mr-2">✓</span>
                  <span>Landscaping projects</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#0d9488] mr-2">✓</span>
                  <span>Seasonal yard cleanup</span>
                </div>
              </div>
              <a href="https://icondumpsters.com/services/yard-waste-debris-bin-rental" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Yard Waste Dumpster Rentals
              </a>
            </div>
          </div>

          {/* Downsizing Dumpster Rentals */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <OptimizedImage src="/images/dumpsterSmallBanner3.webp"
                alt="Downsizing dumpster rental Utah - dumpster rental for moving preparation, estate cleanouts, and life transition projects"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Downsizing Dumpster Rentals</h3>
              <p className="text-gray-600 mb-4">
                Downsizing your home can be a refreshing way to declutter, reduce stress, and start a new chapter. Icon Dumpsters makes the process smoother.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#0d9488] mr-2">✓</span>
                  <span>Moving preparation</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#0d9488] mr-2">✓</span>
                  <span>Estate cleanouts</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#0d9488] mr-2">✓</span>
                  <span>Life transition projects</span>
                </div>
              </div>
              <a href="https://icondumpsters.com/services/downsizing-dumpster-rentals" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Downsizing Dumpster Rentals
              </a>
            </div>
          </div>

          {/* Estate Cleanout */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <OptimizedImage src="/images/dumpsterSmallBanner5.webp"
                alt="Estate cleanout dumpster rental Utah - roll-off dumpster rental for property cleanup, estate cleanouts, and large-scale removal projects"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Estate Cleanout</h3>
              <p className="text-gray-600 mb-4">
                Complete property cleanup and estate management services for comprehensive waste removal and property preparation.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#0d9488] mr-2">✓</span>
                  <span>Complete property cleanup</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#0d9488] mr-2">✓</span>
                  <span>Estate management</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-[#0d9488] mr-2">✓</span>
                  <span>Property preparation</span>
                </div>
              </div>
              <a href="https://icondumpsters.com/estate-cleanout" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Estate Cleanout Services
              </a>
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Construction Dumpster Rental</h3>
              <p className="text-gray-600 mb-4">
                Specialized dumpster rental services for construction projects, including demolition debris, building materials, and contractor waste management.
              </p>
              <a href="https://icondumpsters.com/services/construction-dumpster-rental" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Construction Dumpster Rentals
              </a>
            </div>
          </div>

          {/* Roll-Off Dumpster Rental */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Roll-Off Dumpster Rental</h3>
              <p className="text-gray-600 mb-4">
                Flexible roll-off dumpster rental services with easy delivery and pickup for your project timeline.
              </p>
              <a href="https://icondumpsters.com/services/roll-off-dumpster-rental" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Roll-Off Dumpster Rentals
              </a>
            </div>
          </div>

          {/* Garbage & Junk Bin Rentals */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Garbage & Junk Bin Rentals</h3>
              <p className="text-gray-600 mb-4">
                Convenient garbage and junk bin rentals for various cleanup projects and waste disposal needs.
              </p>
              <a href="https://icondumpsters.com/services/garbage-junk-bin-rentals" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Garbage & Junk Bin Rentals
              </a>
            </div>
          </div>

          {/* Demolition Waste Disposal */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Demolition Waste Disposal</h3>
              <p className="text-gray-600 mb-4">
                Professional demolition waste disposal services for safe and efficient removal of construction debris.
              </p>
              <a href="https://icondumpsters.com/services/demolition-waste-disposal" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Demolition Waste Disposal
              </a>
            </div>
          </div>

          {/* Garage Cleanout */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Garage Cleanout Services</h3>
              <p className="text-gray-600 mb-4">
                Specialized garage cleanout services to help you organize and dispose of unwanted items efficiently.
              </p>
              <a href="https://icondumpsters.com/services/garage-cleanout" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Garage Cleanout Services
              </a>
            </div>
          </div>

          {/* Construction Waste Management */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Construction Waste Management</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive construction waste management solutions for contractors and project managers.
              </p>
              <a href="https://icondumpsters.com/services/construction-waste-management" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Construction Waste Management
              </a>
            </div>
          </div>

          {/* Junk Removal */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Junk Removal</h3>
              <p className="text-gray-600 mb-4">
                Professional junk removal services to help you get rid of unwanted items quickly and efficiently.
              </p>
              <a href="https://icondumpsters.com/services/junk-removal" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Professional Junk Removal
              </a>
            </div>
          </div>

          {/* Event Cleanup */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Event Cleanup</h3>
              <p className="text-gray-600 mb-4">
                Dumpster rental services for event cleanup, including festivals, concerts, and community gatherings.
              </p>
              <a href="/services/event-cleanup" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Event Cleanup Dumpster Rentals
              </a>
            </div>
          </div>

          {/* Electronic Waste Disposal */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Electronic Waste Disposal</h3>
              <p className="text-gray-600 mb-4">
                Proper disposal of electronic waste including computers, TVs, and other electronic devices.
              </p>
              <a href="/services/electronic-waste-disposal" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Electronic Waste Disposal
              </a>
            </div>
          </div>

          {/* Retail Cleanout */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Retail Cleanout</h3>
              <p className="text-gray-600 mb-4">
                Dumpster rental services for retail store cleanouts, inventory removal, and store renovations.
              </p>
              <a href="/services/retail-cleanout" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Retail Cleanout Services
              </a>
            </div>
          </div>

          {/* RV & Camper Cleanout */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">RV & Camper Cleanout</h3>
              <p className="text-gray-600 mb-4">
                Dedicated dumpster rentals for RV remodels, campers, and oversized recreation equipment.
              </p>
              <a href="/services/rv-cleanout" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About RV & Camper Cleanout Services
              </a>
            </div>
          </div>

          {/* Restaurant & Hospitality Cleanout */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Restaurant & Hospitality Cleanout</h3>
              <p className="text-gray-600 mb-4">
                Food-service aware hauling for equipment swaps, remodels, and tenant improvements.
              </p>
              <a href="/services/restaurant-cleanout" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Restaurant & Hospitality Cleanout
              </a>
            </div>
          </div>

          {/* Disaster Cleanup */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Disaster Cleanup Dumpsters</h3>
              <p className="text-gray-600 mb-4">
                Coordinated debris boxes for fire, flood, and storm response across the Wasatch Front.
              </p>
              <a href="/services/disaster-cleanup" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Disaster Cleanup Dumpsters
              </a>
            </div>
          </div>

          {/* Yard Waste Removal */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Yard Waste Removal</h3>
              <p className="text-gray-600 mb-4">
                Dumpster rental for yard waste removal including branches, leaves, and landscaping debris.
              </p>
              <a href="/services/yard-waste-removal" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Yard Waste Removal Services
              </a>
            </div>
          </div>

          {/* Eviction Cleanup */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eviction Cleanup</h3>
              <p className="text-gray-600 mb-4">
                Professional eviction cleanup services for property managers and landlords.
              </p>
              <a href="/services/eviction-cleanup" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Eviction Cleanup Services
              </a>
            </div>
          </div>

          {/* Mobile Home Cleanout */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Home Cleanout</h3>
              <p className="text-gray-600 mb-4">
                Dumpster rental services for mobile home cleanouts and mobile home park renovations.
              </p>
              <a href="/services/mobile-home-cleanout" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Mobile Home Cleanout Services
              </a>
            </div>
          </div>

          {/* Mold Remediation */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mold Remediation</h3>
              <p className="text-gray-600 mb-4">
                Dumpster rental for mold remediation debris removal and contaminated material disposal.
              </p>
              <a href="/services/mold-remediation" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Mold Remediation Dumpster Rentals
              </a>
            </div>
          </div>

          {/* Condo Cleanout */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Condo Cleanout</h3>
              <p className="text-gray-600 mb-4">
                Dumpster rental services for condo cleanouts, condo renovations, and HOA projects.
              </p>
              <a href="/services/condo-cleanout" className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Learn About Condo Cleanout Services
              </a>
            </div>
          </div>
        </div>

        {/* Salt Lake County High-Intent Services */}
        <section className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Salt Lake County Priority Services
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                These high-intent pages cover the neighborhoods where we dispatch trucks every hour. Pick a service to see the top 10 city-specific routes.
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Updated for 2025 deployments
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-8">
            {priorityServices.map((service) => (
              <div
                key={service.slug}
                className="rounded-xl border border-gray-100 bg-gray-50 p-6"
              >
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.label}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <div className="text-sm font-medium text-[#0d9488]">
                    10 Salt Lake County cities covered
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {saltLakeCountyCities.map((city) => (
                    <Link
                      key={`${service.slug}-${city.slug}`}
                      href={buildCityPath(service.slug, city.slug)}
                      className="rounded-full border border-[#0d9488]/40 px-4 py-2 text-sm font-medium text-[#0d9488] transition hover:bg-[#0d9488] hover:text-white"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Related Guides */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Helpful Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/guides/home-renovation" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
              <h3 className="text-xl font-semibold text-[#0d9488] mb-2">Home Renovation Guide</h3>
              <p className="text-gray-600">Complete guide to dumpster rental for home renovations in Utah.</p>
            </Link>
            <Link href="/guides/retail-renovation-guide" className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
              <h3 className="text-xl font-semibold text-[#0d9488] mb-2">Retail Renovation Guide</h3>
              <p className="text-gray-600">Complete guide to dumpster rental for retail renovations in Utah.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section - Link to Blog */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-50 to-purple-50 rounded-2xl p-8 border border-teal-200">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Learn More About Dumpster Rentals
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our blog for expert tips, guides, and insights on dumpster rentals, waste management, home improvement, and construction cleanup. Get answers to common questions and learn best practices for your project.
              </p>
            </div>
            <div className="text-center">
              <a 
                href="/blog"
                className="inline-block bg-[#0d9488] text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-lg shadow-lg"
              >
                Read Dumpster Rental Tips & Guides →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Internal Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StrategicInternalLinks pageType="service" />
        </div>
      </section>

      {/* Internal Linking Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RelatedPages pageType="service" />
      </div>
    </PageTemplate>
  );
}
