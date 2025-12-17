import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insurance Claims Assistance | Sky Ridge Roofing',
  description: 'Expert assistance with insurance claims to ensure you get the coverage you deserve. We simplify the claims process.',
  openGraph: {
    title: 'Insurance Claims - Sky Ridge Roofing',
    description: 'Expert assistance with insurance claims to ensure you get the coverage you deserve.',
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
              src="/images/skyridge/skyridge_image_012.webp"
              alt="Insurance Claims"
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
                  Insurance Claims Assistance
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100 drop-shadow-lg">
                  We Simplify the Claims Process
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expert Insurance Claims Support</h2>
              <p className="mb-4 text-lg leading-relaxed">
                Dealing with insurance claims can be overwhelming, especially after storm damage. Our team has extensive experience working with insurance companies to ensure you receive the coverage you deserve.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                We help with:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
                <li>Damage assessment and documentation</li>
                <li>Insurance claim filing assistance</li>
                <li>Direct communication with your insurance company</li>
                <li>Maximizing your claim coverage</li>
                <li>Quality repairs that meet insurance standards</li>
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/skyridge/skyridge_image_031.webp"
                alt="Insurance claims process"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Storm Damage Restoration</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[32, 33, 34, 35, 36, 37, 38, 39].map((num) => (
                <div key={num} className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={`/images/skyridge/skyridge_image_${String(num).padStart(3, '0')}.webp`}
                    alt={`Insurance claim project ${num}`}
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
