import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import QuoteButton from '@/components/QuoteButton';

export const metadata: Metadata = {
  title: 'Roof Replacement Services | Sky Ridge Roofing',
  description: 'Complete roof replacement services with quality materials and expert installation. Protect your home and boost curb appeal.',
  openGraph: {
    title: 'Roof Replacement - Sky Ridge Roofing',
    description: 'Complete roof replacement services with quality materials and expert installation.',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/skyridge/skyridge_image_010.webp"
              alt="Roof Replacement"
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
                  Roof Replacement
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100 drop-shadow-lg">
                  Protect Your Home. Boost Curb Appeal. Increase Value.
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
                <QuoteButton variant="light" className="text-lg">
                  Get Free Quote →
                </QuoteButton>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Is It Time to Replace Your Roof?</h2>
              <p className="mb-4 text-lg leading-relaxed">
                We specialize in full roof replacements that are built to withstand Utah's unpredictable weather — from snow and wind to harsh summer sun. Whether your roof is nearing the end of its lifespan, or storm damage has left it compromised, we'll walk you through the replacement process with honesty and clarity.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                If you are noticing any of the following, it might be time to replace your roof:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
                <li>Missing or damaged shingles</li>
                <li>Leaks or water damage</li>
                <li>Roof is over 20 years old</li>
                <li>Granules in your gutters</li>
                <li>Sagging or drooping roof</li>
                <li>High energy bills</li>
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/skyridge/skyridge_image_006.webp"
                alt="Roof replacement work"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Roof Replacement Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/skyridge/skyridge_image_007.webp"
                    alt="Inspection"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Inspection & Assessment</h3>
                <p className="text-gray-600">Thorough evaluation of your current roof condition</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/skyridge/skyridge_image_008.webp"
                    alt="Planning"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Planning & Materials</h3>
                <p className="text-gray-600">Selecting the best materials for your home and budget</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/skyridge/skyridge_image_009.webp"
                    alt="Installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Professional Installation</h3>
                <p className="text-gray-600">Expert installation by our skilled roofing team</p>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Recent Roof Replacements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[14, 15, 16, 17, 18, 19, 20, 21].map((num) => (
                <div key={num} className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={`/images/skyridge/skyridge_image_${String(num).padStart(3, '0')}.webp`}
                    alt={`Roof replacement project ${num}`}
                    fill
                    className="object-cover hover:scale-110 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
