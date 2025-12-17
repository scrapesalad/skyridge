import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roofing Services | Sky Ridge Roofing - Complete Roofing Solutions',
  description: 'Comprehensive roofing services including roof replacement, repairs, insurance claims, and additional services. Expert roofing solutions for your home.',
  openGraph: {
    title: 'Roofing Services - Sky Ridge Roofing',
    description: 'Comprehensive roofing services including roof replacement, repairs, insurance claims, and additional services.',
    type: 'website',
  },
};

const services = [
  {
    title: 'Roof Replacement',
    description: 'Complete roof replacement services with quality materials and expert installation. Protect your home and boost curb appeal.',
    image: '/images/skyridge/skyridge_image_001.webp',
    link: '/services/roof-replacement',
    features: ['Full roof replacement', 'Premium materials', 'Expert installation', 'Warranty included'],
  },
  {
    title: 'Roof Repairs',
    description: 'Fast and reliable roof repair services to fix leaks, damage, and wear. Expert repairs to extend your roof\'s lifespan.',
    image: '/images/skyridge/skyridge_image_002.webp',
    link: '/services/roof-repairs',
    features: ['Leak detection & repair', 'Shingle replacement', 'Emergency repairs', 'Flashing repair'],
  },
  {
    title: 'Insurance Claims',
    description: 'Expert assistance with insurance claims to ensure you get the coverage you deserve. We simplify the claims process.',
    image: '/images/skyridge/skyridge_image_003.webp',
    link: '/services/insurance-claims',
    features: ['Claim filing assistance', 'Damage assessment', 'Insurance coordination', 'Maximize coverage'],
  },
  {
    title: 'Additional Services',
    description: 'Solar installation, siding, gutters, and commercial roofing. Complete exterior solutions for your property.',
    image: '/images/skyridge/skyridge_image_004.webp',
    link: '/services/additional-services',
    features: ['Solar installation', 'Siding services', 'Gutter systems', 'Commercial roofing'],
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/skyridge/skyridge_image_014.webp"
              alt="Our Services"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Content Container */}
          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="flex items-center h-full">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
                  Our Services
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100 drop-shadow-lg">
                  Complete Roofing Solutions for Your Home
                </p>
                
                {/* Phone Number */}
                <div className="flex items-center space-x-3 mb-8">
                  <svg className="w-8 h-8 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-sm text-blue-200">Call Us Today</p>
                    <a href="tel:8012526936" className="text-3xl md:text-4xl font-bold hover:text-primary-light transition">
                      801-252-6936
                    </a>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="inline-block bg-primary-light text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary transition text-lg uppercase tracking-wide"
                >
                  Get Free Quote →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Roofing Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sky Ridge Roofing offers a full range of roofing services to meet all your needs. From emergency repairs to complete roof replacements, we have the expertise and experience to handle any project.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link} className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Sky Ridge Roofing?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Response</h3>
                <p className="text-gray-600">Quick response times for all your roofing needs</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Work</h3>
                <p className="text-gray-600">Expert craftsmanship you can trust</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Fair Pricing</h3>
                <p className="text-gray-600">Transparent pricing with no surprises</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6">Contact us today for a free estimate on any of our services</p>
            <Link href="/contact" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
