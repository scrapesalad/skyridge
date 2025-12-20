import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About Sky Ridge Roofing - Trusted Roofing Services in Utah',
  description: 'Sky Ridge Roofing offers expert roofing services, including roof replacement and assistance with insurance claims, ensuring customer satisfaction.',
  alternates: { canonical: canonicalUrl('/about') },
  openGraph: {
    title: 'About Sky Ridge Roofing',
    description: 'Sky Ridge Roofing offers expert roofing services, including roof replacement and assistance with insurance claims, ensuring customer satisfaction.',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-96 mb-12">
          <Image
            src="/images/skyridge/scrap/roofing-center-02.jpg"
            alt="About Sky Ridge Roofing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 drop-shadow-2xl">
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">About Sky Ridge Roofing</h1>
              <p className="text-xl drop-shadow-lg">Trust, Transparency, and Exceptional Service</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="mb-4 text-lg leading-relaxed">
                At Sky Ridge Roofing, we prioritize trust, transparency, and exceptional service. We ensure a seamless <Link href="/services/roof-replacement" className="text-blue-600 hover:underline font-semibold">roof replacement</Link> process, leaving you with nothing but a flawless new roof. Our customer-focused team is here to assist with <Link href="/services/insurance-claims" className="text-blue-600 hover:underline font-semibold">insurance claims</Link>, making your experience smooth—because while satisfaction can be costly, loyalty is truly priceless.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                We serve homeowners and businesses throughout Utah, providing expert <Link href="/services" className="text-blue-600 hover:underline font-semibold">roofing services</Link> including roof replacement, repairs, metal roofing, and commercial roofing solutions. <Link href="/contact" className="text-blue-600 hover:underline font-semibold">Contact us</Link> today to learn more about how we can help protect your property.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/skyridge/scrap/roofing-job.jpg"
                alt="Sky Ridge Roofing Team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-8">Our Commitment</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/skyridge/scrap/roofing-center-02.jpg"
                  alt="Built On Trust"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">Built On Trust</h3>
              <p className="text-gray-700 leading-relaxed">
                Trust and transparency are at the core of everything we do at Sky Ridge Roofing, especially when it comes to handling <Link href="/services/insurance-claims" className="text-blue-600 hover:underline">insurance claims</Link> and <Link href="/services/roof-replacement" className="text-blue-600 hover:underline">roof replacement</Link> projects.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/skyridge/scrap/roofing-center-04-qg13nktj9cx8cworod4wf2skk8m3jzkgal4zrz09ao.jpg"
                  alt="Mission Zero Hassle"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">Mission: Zero Hassle</h3>
              <p className="text-gray-700 leading-relaxed">
                We take care of everything, ensuring a seamless experience throughout the process!
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/skyridge/scrap/roofingcenter-blog-07-qfskckmzpii02wunzlscnv7r272fkut533k7tmxgso.jpg"
                  alt="Support That Shines"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">Support That Shines</h3>
              <p className="text-gray-700 leading-relaxed">
                Our dedicated office team at Sky Ridge Roofing guarantees a smooth, stress-free experience from start to finish, particularly during those crucial moments involving insurance claims.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/skyridge/scrap/finishing-ceramic-roof-768x512.webp"
                  alt="Service That Earns Loyalty"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">Service That Earns Loyalty</h3>
              <p className="text-gray-700 leading-relaxed">
                We believe that while customer satisfaction may be expensive, customer loyalty is priceless. We earn this loyalty by making every interaction clear, professional, and memorable for all the right reasons, especially in the context of roof replacement.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-8">What Makes Us Different</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Licensed & Insured in the State of Utah</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Experts in <Link href="/services/insurance-claims" className="text-blue-600 hover:underline">Insurance Claims</Link> & <Link href="/services/roof-replacement" className="text-blue-600 hover:underline">Roof Replacement</Link></span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Transparent Pricing – No Surprises</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Local Crews, Not Outsourced Labor</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Warranty-Backed Workmanship from Sky Ridge Roofing</span>
              </li>
            </ul>
          </div>

          {/* Image Gallery */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Team in Action</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/skyridge/scrap/roofing-job.jpg"
                  alt="Professional roofing work in Utah"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/skyridge/scrap/roofing-center-02.jpg"
                  alt="Sky Ridge Roofing team at work"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/skyridge/scrap/roofing-center-04-qg13nktj9cx8cworod4wf2skk8m3jzkgal4zrz09ao.jpg"
                  alt="Quality roofing installation"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/skyridge/scrap/finishing-ceramic-roof-768x512.webp"
                  alt="Expert roof finishing work"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/skyridge/scrap/landmark-series-shingles-certainteed.jpg"
                  alt="Shingle roof installation"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/skyridge/scrap/metal-roofing-768x576.jpg"
                  alt="Metal roof installation"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/skyridge/scrap/commercial-roof-installation.jpg"
                  alt="Commercial roofing project"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/skyridge/scrap/roofingcenter-blog-07-qfskckmzpii02wunzlscnv7r272fkut533k7tmxgso.jpg"
                  alt="Professional roofing services"
                  fill
                  className="object-cover hover:scale-110 transition duration-300"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-700 text-white rounded-lg p-8 text-center mt-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl mb-6">Get a free estimate and experience the Sky Ridge Roofing difference</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Get Free Quote
              </Link>
              <Link
                href="/services"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
