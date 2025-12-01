import type { Metadata } from "next";
import ImageWithFallback from "../components/ImageWithFallback";
import Link from "next/link";
import ArticleSchema from "../components/ArticleSchema";
import FAQSchema from "../components/FAQSchema";
import { constructionWasteFAQs } from "../components/FAQSchema";
import InternalLinks from "../components/InternalLinks";

export const metadata: Metadata = {
  title: "Business & Construction Waste Management | Icon Dumpsters",
  description: "Professional commercial dumpster rental services in Utah. Construction waste management, business dumpster solutions, and roll-off containers for commercial projects. Call (801) 918-6000.",
  keywords: [
    "commercial dumpster rental",
    "business dumpster rental",
    "construction waste management",
    "commercial waste disposal",
    "Utah commercial dumpsters",
    "construction dumpster rental",
    "roll-off dumpster commercial",
    "business waste management",
    "commercial construction waste",
    "dumpster rental for businesses"
  ],
  alternates: { canonical: 'https://icondumpsters.com/commercial-dumpsters' },
  openGraph: {
    title: "Business & Construction Waste Management | Icon Dumpsters",
    description: "Professional commercial dumpster rental services in Utah. Construction waste management, business dumpster solutions, and roll-off containers for commercial projects. Call (801) 918-6000.",
    url: 'https://icondumpsters.com/commercial-dumpsters',
    siteName: "Icon Dumpsters",
    images: [
      {
        url: "https://icondumpsters.com/images/dumpsterSmallBanner6.webp",
        width: 1200,
        height: 630,
        alt: "Commercial Dumpster Rental Services in Utah"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Dumpster Rental Utah | Business & Construction Waste Management",
    description: "Professional commercial dumpster rental services in Utah. Construction waste management and business dumpster solutions.",
    images: ["https://icondumpsters.com/images/dumpsterSmallBanner6.webp"]
  }
};

export default function CommercialDumpstersPage() {
  return (
    <>
      {/* Schema Markup */}
      <ArticleSchema
        title="Commercial Dumpster Rental Utah | Business & Construction Waste Management"
        description="Professional commercial dumpster rental services in Utah. Construction waste management, business dumpster solutions, and roll-off containers for commercial projects. Get free quotes today."
        author="Icon Dumpsters"
        publishedDate="2024-01-01"
        modifiedDate="2024-12-19"
        imageUrl="https://icondumpsters.com/images/dumpsterSmallBanner6.webp"
        articleUrl="https://icondumpsters.com/commercial-dumpsters"
        category="Commercial Waste Management"
        readTime="8 min read"
      />
      
      <FAQSchema 
        faqs={constructionWasteFAQs} 
        pageUrl="https://icondumpsters.com/commercial-dumpsters" 
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0d9488] to-teal-700 text-white py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Commercial Dumpster Rental Utah
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Professional waste management solutions for businesses, construction companies, and commercial projects across Utah. Reliable, efficient, and cost-effective dumpster rental services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="https://icondumpsters.com/#quote-form" 
                  className="bg-white text-[#0d9488] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Get Free Quote
                </Link>
                <Link 
                  href="tel:8019186000" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#0d9488] transition-colors text-center"
                >
                  Call (801) 918-6000
                </Link>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback 
                src="/images/dumpsterSmallBanner6.webp" 
                alt="Commercial Dumpster Rental Services in Utah"
                className="rounded-lg shadow-2xl"
                fallbackSrc="/images/dumpsterSmallBanner6.webp"
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Commercial Waste Management Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From construction sites to retail businesses, we provide comprehensive waste management solutions tailored to your commercial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Construction Projects</h3>
              <p className="text-gray-600">
                Roll-off dumpsters for construction debris, demolition waste, and building materials. Available in 15, 20, and 30-yard sizes.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Business Cleanouts</h3>
              <p className="text-gray-600">
                Office cleanouts, retail space renovations, and commercial property maintenance. Flexible scheduling and multiple dumpster sizes.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ongoing Service</h3>
              <p className="text-gray-600">
                Regular waste pickup schedules for businesses with consistent waste generation. Customized service plans to meet your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dumpster Sizes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Commercial Dumpster Sizes
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right size for your commercial project needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-trust-blue">15</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">15-Yard Dumpster</h3>
              <p className="text-gray-600 mb-4">
                Perfect for small construction projects, office cleanouts, and retail renovations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-6">
                <li>• 15 cubic yards capacity</li>
                <li>• 3 tons weight limit</li>
                <li>• 12' x 8' x 4' dimensions</li>
                <li>• Ideal for small projects</li>
              </ul>
              <Link 
                href="https://icondumpsters.com/dumpster-sizes" 
                className="inline-block bg-[#0d9488] text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">20</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">20-Yard Dumpster</h3>
              <p className="text-gray-600 mb-4">
                Most popular choice for medium construction projects and business renovations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-6">
                <li>• 20 cubic yards capacity</li>
                <li>• 4 tons weight limit</li>
                <li>• 12' x 8' x 5' dimensions</li>
                <li>• Great value for most projects</li>
              </ul>
              <Link 
                href="https://icondumpsters.com/dumpster-sizes" 
                className="inline-block bg-[#0d9488] text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">30</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">30-Yard Dumpster</h3>
              <p className="text-gray-600 mb-4">
                Large capacity for major construction projects and commercial demolitions.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-6">
                <li>• 30 cubic yards capacity</li>
                <li>• 6 tons weight limit</li>
                <li>• 12' x 8' x 6' dimensions</li>
                <li>• Maximum efficiency for large projects</li>
              </ul>
              <Link 
                href="https://icondumpsters.com/dumpster-sizes" 
                className="inline-block bg-[#0d9488] text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Icon Dumpsters for Commercial Projects?
            </h2>
            <p className="text-xl text-gray-600">
              Professional service, competitive pricing, and reliable waste management solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                Same-day or next-day delivery available for urgent commercial projects
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600 text-sm">
                Transparent pricing with no hidden fees. Get the best value for your commercial waste management
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Service</h3>
              <p className="text-gray-600 text-sm">
                Experienced team understands commercial waste management needs and regulations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Round-the-clock customer support for commercial clients with urgent needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0d9488] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started with Commercial Dumpster Rental?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get a free quote for your commercial project. Our team will help you choose the right dumpster size and create a waste management plan that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://icondumpsters.com/#quote-form" 
              className="bg-white text-[#0d9488] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              href="tel:8019186000" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#0d9488] transition-colors"
            >
              Call (801) 918-6000
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about commercial dumpster rental services
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                What size dumpster do I need for my commercial project?
              </h3>
              <p className="text-gray-600">
                Dumpster size depends on your project type and scope. For office cleanouts, 15-20 yards is usually sufficient. For construction projects, 20-30 yards is common. For large demolitions, you might need multiple dumpsters. Contact us for a free consultation to determine the right size for your specific project.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How much does commercial dumpster rental cost?
              </h3>
              <p className="text-gray-600">
                Commercial dumpster rental costs vary by size, location, and rental duration. 15-yard dumpsters typically cost $200-400, 20-yard dumpsters $300-500, and 30-yard dumpsters $400-700. Prices include delivery, pickup, and disposal fees. We offer volume discounts for multiple dumpsters or long-term rentals.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Do I need a permit for a commercial dumpster?
              </h3>
              <p className="text-gray-600">
                Permit requirements vary by location and placement. If placing on private property, permits are usually not required. If placing on public streets or sidewalks, you'll need a permit from your city. We can help you determine permit requirements and assist with the application process.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How long can I keep the dumpster for my commercial project?
              </h3>
              <p className="text-gray-600">
                Most commercial dumpster rentals include 7-14 days of rental time. Extended rentals are available for longer projects. We offer flexible rental periods to accommodate your project timeline. Contact us to discuss your specific needs and we'll create a rental schedule that works for you.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                What types of waste can I put in a commercial dumpster?
              </h3>
              <p className="text-gray-600">
                Commercial dumpsters can accept most construction debris, office furniture, retail fixtures, building materials, and general commercial waste. Prohibited items include hazardous materials, chemicals, tires, batteries, and medical waste. Contact us for a complete list of acceptable and prohibited items for your specific project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Us for Commercial Dumpster Rental
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Ready to get started with your commercial waste management project? Our team is here to help you choose the right solution and get your project moving forward.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">(801) 918-6000</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">icondumpsters@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Service Area</p>
                    <p className="text-gray-600">Salt Lake City, Utah and surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <InternalLinks />
      </div>
    </>
  );
}

