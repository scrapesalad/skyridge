import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

import JsonLd from '@/components/JsonLd';
import QuoteForm from '@/components/QuoteForm';
import AICitationSchema from '@/components/AICitationSchema';
import LLMSchema from '@/components/LLMSchema';
import QuoteButton from '@/components/QuoteButton';
import NewsletterSignup from '@/components/NewsletterSignup';
import { BUSINESS, SITE_URL } from '@/lib/site';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Roofing Companies Near Me | Utah Roofing Company | Sky Ridge Roofing',
  description:
    'Find the best roofing companies near me in Utah. Expert roofers near me for roof replacement, roof repairs, roof installation, metal roofing, and commercial roofing. Licensed roofing contractors offering free estimates.',
  alternates: { canonical: canonicalUrl('/') },
  openGraph: {
    title: 'Roofing Companies Near Me | Sky Ridge Roofing',
    description:
      'Top-rated roofers near me in Utah. Expert roof replacement, roof repairs, roof installation, metal roofing, and commercial roofing services. Licensed roofing contractors. Free estimates.',
    url: '/',
  },
};

export default function Page() {
  // All 49 images available
  const allImages = Array.from({ length: 49 }, (_, i) => i + 1);
  
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* AI Citation Schema for ChatGPT */}
        <AICitationSchema />
        <LLMSchema />
        {/* Standard LocalBusiness Schema */}
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: BUSINESS.name,
            legalName: BUSINESS.legalName,
            url: SITE_URL,
            telephone: BUSINESS.phone,
            areaServed: 'Utah',
          }}
        />
        {/* Hero Section with Background Video/Image */}
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/skyridge/scrap/roofing-job.jpg"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Content Container */}
          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
              {/* Left Side - Main Content */}
              <div className="text-white py-12">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                  SKY RIDGE{' '}
                  <span className="text-primary-light">ROOFING</span>
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100">
                  Utah Roofing Company
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

                {/* Learn More Button */}
                <Link
                  href="/about"
                  className="inline-block bg-primary-light text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary transition text-lg uppercase tracking-wide"
                >
                  Learn More About Us →
                </Link>
                <div className="mt-4">
                  <Link
                    href="/utah-roofing-company"
                    className="inline-block bg-white/15 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/25 transition text-lg uppercase tracking-wide"
                  >
                    Utah Roofing Company →
                  </Link>
                </div>
              </div>

              {/* Right Side - Quote Form */}
              <div className="lg:relative lg:top-12">
                <QuoteForm />
              </div>
            </div>
          </div>

          {/* 30-Second Roof Estimate Banner */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden xl:block">
            <Link
              href="/calculators/roofing-cost"
              className="bg-primary-light text-white px-4 py-8 writing-vertical-rl text-center font-bold text-sm hover:bg-primary transition shadow-lg"
              style={{ writingMode: 'vertical-rl' }}
            >
              30-Second Roof Estimate
            </Link>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 bg-gray-50 relative">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div>
                <div className="mb-4">
                  <h2 className="text-sm uppercase tracking-wider text-gray-600 mb-2">About Us</h2>
                  <div className="w-16 h-1 bg-blue-600"></div>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Sky Ridge Roofing Has Been Serving Utah With Excellence From The Start...
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Today Sky Ridge Roofing maintains the same commitment we've always had: provide the best possible roofing products, at competitive prices, with exceptional service. As one of Utah's top roofing companies, we pride ourselves on delivering the highest level of service to customers statewide. Whether you need roof replacement, roof repairs, roof installation, metal roofing, or commercial roofing services, our licensed roofing contractors are here to help. We specialize in roof replacement, roof repairs, roof leak repair, and insurance claims assistance. Our team understands Utah's unique climate challenges and uses proven techniques to protect your home with quality asphalt shingles, architectural shingles, and premium roofing materials.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center space-x-3 text-gray-900 font-semibold uppercase tracking-wide hover:text-blue-600 transition group"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <span>Watch Our Video</span>
                  </Link>
                  <a
                    href="https://skyridgeco.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 text-gray-900 font-semibold uppercase tracking-wide hover:text-blue-600 transition group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition">
                      <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <span>Visit SkyRidgeCo.com</span>
                  </a>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="relative">
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/skyridge/scrap/roofing-job.jpg"
                    alt="Sky Ridge Roofing Team"
                    fill
                    className="object-cover"
                  />
                  {/* Years Badge Overlay */}
                  <div className="absolute bottom-6 right-6 bg-blue-600 text-white px-6 py-4 rounded-lg shadow-xl">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm uppercase tracking-wide">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 30-Second Roof Estimate Vertical Tab */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden xl:block">
            <Link
              href="/calculators/roofing-cost"
              className="bg-blue-600 text-white px-4 py-8 writing-vertical-rl text-center font-bold text-sm hover:bg-blue-700 transition shadow-lg rounded-l-lg"
              style={{ writingMode: 'vertical-rl' }}
            >
              30-Second Roof Estimate
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative h-[500px] md:h-[600px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/skyridge/scrap/roofing-center-02.jpg"
              alt="Our Services"
              fill
              className="object-cover"
              priority
            />
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-blue-900/70"></div>
          </div>

          {/* Content Container */}
          <div className="container mx-auto px-4 h-full relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 h-full items-center">
              {/* Residential Roofing Section */}
              <div className="text-white text-center py-12 px-6 relative">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Residential Roofing</h3>
                <Link
                  href="/services/roof-replacement"
                  className="inline-block bg-primary-light hover:bg-primary text-white px-8 py-4 rounded-sm font-semibold mb-8 transition uppercase tracking-wide"
                >
                  Read more
                </Link>
                <div className="flex justify-center">
                  <svg className="w-16 h-16 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                {/* Vertical Divider */}
                <div className="absolute right-0 top-0 bottom-0 w-px bg-white/30 hidden md:block"></div>
              </div>

              {/* Commercial Roofing Section */}
              <div className="text-white text-center py-12 px-6 relative">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Commercial Roofing</h3>
                <Link
                  href="/services/commercial-roofing"
                  className="inline-block bg-primary-light hover:bg-primary text-white px-8 py-4 rounded-sm font-semibold mb-8 transition uppercase tracking-wide"
                >
                  Read more
                </Link>
                <div className="flex justify-center">
                  <svg className="w-16 h-16 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                {/* Vertical Dividers */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-white/30 hidden md:block"></div>
                <div className="absolute right-0 top-0 bottom-0 w-px bg-white/30 hidden md:block"></div>
              </div>

              {/* Multi Family Roofing Section */}
              <div className="text-white text-center py-12 px-6 relative">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Multi Family Roofing</h3>
                <Link
                  href="/services/roof-replacement"
                  className="inline-block bg-primary-light hover:bg-primary text-white px-8 py-4 rounded-sm font-semibold mb-8 transition uppercase tracking-wide"
                >
                  Read more
                </Link>
                <div className="flex justify-center">
                  <svg className="w-16 h-16 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                {/* Vertical Divider */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-white/30 hidden md:block"></div>
              </div>
            </div>
          </div>

          {/* 30-Second Roof Estimate Vertical Banner */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden xl:block">
            <Link
              href="/calculators/roofing-cost"
              className="bg-primary-light text-white px-4 py-8 writing-vertical-rl text-center font-bold text-sm hover:bg-primary transition shadow-lg"
              style={{ writingMode: 'vertical-rl' }}
            >
              30-Second Roof Estimate
            </Link>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative py-0 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[600px]">
            {/* Left Column - 60% (3/5 columns) */}
            <div className="lg:col-span-3 bg-white px-8 py-16 lg:py-24 flex items-center">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Why Choose the Top Roofing Contractor in Utah
                </h2>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
                  Less mess. Less stress. Lots more peace of mind.
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Sky Ridge Roofing is a trusted, licensed, and insured roofing company serving homeowners and businesses throughout Utah. As one of the top roofing contractors in the state, we've built our reputation on providing the best possible roofing products at competitive prices, with exceptional service. With over 15 years of experience, we specialize in roof replacement, roof repairs, roof installation, metal roofing, commercial roofing, and insurance claims assistance. Our expert roofing contractors understand Utah's unique climate challenges and use proven techniques to protect your home with quality asphalt shingles, architectural shingles, and premium roofing materials.
                </p>
                <QuoteButton>
                  GET A QUOTE{' '}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </QuoteButton>
              </div>
            </div>

            {/* Right Column - 40% (2/5 columns) */}
            <div className="lg:col-span-2 relative min-h-[500px] lg:min-h-[600px]">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/skyridge/scrap/roofing-center-04-qg13nktj9cx8cworod4wf2skk8m3jzkgal4zrz09ao.jpg"
                  alt="Professional Roofer at Work"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Blue Overlay Box - Top Half */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-primary-dark p-8 lg:p-12 text-white flex flex-col">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  What if you hire the wrong roofer?
                </h3>
                <p className="text-lg mb-6 text-blue-100">
                  (Please don't try this at home)
                </p>
                <ul className="space-y-2.5 overflow-y-auto flex-1">
                  {[
                    'Poor communication',
                    'Missed deadlines',
                    'Poor customer service',
                    'Messy job site',
                    'No pride in work',
                    'Worthless warranties',
                    'Lack of certifications',
                    'Unsafe installations',
                    'Uninsured',
                    'Unlicensed',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-base lg:text-lg">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 30-Second Roof Estimate Vertical Banner */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden xl:block">
            <Link
              href="/calculators/roofing-cost"
              className="bg-primary-light text-white px-4 py-8 writing-vertical-rl text-center font-bold text-sm hover:bg-primary transition shadow-lg"
              style={{ writingMode: 'vertical-rl' }}
            >
              30-Second Roof Estimate
            </Link>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="relative py-20 md:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/skyridge/scrap/roofing-center-02.jpg"
              alt="Residential Roofing"
              fill
              className="object-cover"
            />
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-blue-900/80"></div>
          </div>

          {/* Content Container */}
          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              {/* Subtitle with decorative lines */}
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-px bg-primary-light"></div>
                <h3 className="text-white uppercase tracking-wider text-sm md:text-base font-semibold mx-4">
                  HOW WE DO IT
                </h3>
                <div className="w-12 h-px bg-primary-light"></div>
              </div>
              {/* Main Title */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight">
                OUR PROCESS
              </h2>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Step 01 */}
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <div className="flex items-start justify-between mb-6">
                  <span className="bg-gray-200 text-gray-600 text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider">
                    Step 01
                  </span>
                </div>
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-primary-dark flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-tight mb-4 text-center">
                  SCHEDULE APPOINTMENT
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Don't hesitate on getting your roof repaired or replaced. The longer you wait, the more expensive it gets.
                </p>
              </div>

              {/* Step 02 */}
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <div className="flex items-start justify-between mb-6">
                  <span className="bg-gray-200 text-gray-600 text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider">
                    Step 02
                  </span>
                </div>
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-primary-dark flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-tight mb-4 text-center">
                  RECEIVE QUOTE
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Get a detailed, no-obligation estimate tailored to your roofing needs. We'll assess your roof and provide transparent pricing.
                </p>
              </div>

              {/* Step 03 */}
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <div className="flex items-start justify-between mb-6">
                  <span className="bg-gray-200 text-gray-600 text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider">
                    Step 03
                  </span>
                </div>
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-primary-dark flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-tight mb-4 text-center">
                  GET FINANCING
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  We know roofing can feel expensive, but we offer a variety of financing options to help you get your roof taken care of.
                </p>
              </div>
            </div>
          </div>

          {/* 30-Second Roof Estimate Vertical Banner */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden xl:block">
            <Link
              href="/calculators/roofing-cost"
              className="bg-primary-light text-white px-4 py-8 writing-vertical-rl text-center font-bold text-sm hover:bg-primary transition shadow-lg"
              style={{ writingMode: 'vertical-rl' }}
            >
              30-Second Roof Estimate
            </Link>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="relative py-20 md:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/skyridge/scrap/roofing-center-02.jpg"
              alt="Residential Roofing"
              fill
              className="object-cover"
            />
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-blue-900/80"></div>
          </div>

          {/* Content Container */}
          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                You Take Pride in Your Home
              </h2>
              <p className="text-xl md:text-2xl text-gray-100 drop-shadow-md">
                And we take pride in our work: check out our recent projects!
              </p>
            </div>

            {/* Image Grid - 3 columns, 4 rows (12 images) */}
            <div className="grid grid-cols-3 gap-0 max-w-5xl mx-auto">
              {allImages.slice(0, 12).map((num) => (
                <div key={num} className="relative aspect-square overflow-hidden group cursor-pointer">
                  <Image
                    src={`/images/skyridge/skyridge_image_${String(num).padStart(3, '0')}.webp`}
                    alt={`Roofing project ${num}`}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                    sizes="(max-width: 768px) 33vw, (max-width: 1024px) 33vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300" />
                </div>
              ))}
            </div>

            {/* Show more images button/link - optional, if you want to show all images */}
            {allImages.length > 12 && (
              <div className="text-center mt-8">
                <Link
                  href="/gallery"
                  className="inline-block bg-white text-primary-dark px-8 py-4 font-semibold uppercase tracking-wide hover:bg-gray-100 transition"
                >
                  View More Projects →
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Image Showcase Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Quality Craftsmanship</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/beforeafter/IMG_2310.JPG"
                  alt="Quality roofing work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/beforeafter/IMG_2311.JPG"
                  alt="Professional installation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/beforeafter/IMG_2318.JPG"
                  alt="Expert roofing team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"Sky Ridge Roofing did an amazing job replacing our roof. The team was professional, clean, and completed the work on time. Highly recommend!"</p>
                <p className="font-semibold">- Sarah Johnson, Salt Lake City</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"We had storm damage and needed help with our insurance claim. Sky Ridge Roofing handled everything and made the process so easy."</p>
                <p className="font-semibold">- Michael Chen, Provo</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"Fast response time and excellent workmanship. Our new roof looks fantastic and we feel confident it will last for years."</p>
                <p className="font-semibold">- Jennifer Martinez, Ogden</p>
              </div>
            </div>
            <div className="text-center">
              <Link href="/testimonials" className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center">
                Read More Reviews →
              </Link>
            </div>
          </div>
        </section>

        {/* Certifications & Badges */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Certified & Trusted</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl font-bold text-blue-600 mb-2">✓</div>
                  <h3 className="font-semibold mb-2">Licensed</h3>
                  <p className="text-sm text-gray-600">Fully licensed in Utah</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl font-bold text-blue-600 mb-2">✓</div>
                  <h3 className="font-semibold mb-2">Insured</h3>
                  <p className="text-sm text-gray-600">Fully insured & bonded</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl font-bold text-blue-600 mb-2">✓</div>
                  <h3 className="font-semibold mb-2">Warranty</h3>
                  <p className="text-sm text-gray-600">Workmanship guaranteed</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl font-bold text-blue-600 mb-2">✓</div>
                  <h3 className="font-semibold mb-2">Local</h3>
                  <p className="text-sm text-gray-600">Utah-based company</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
