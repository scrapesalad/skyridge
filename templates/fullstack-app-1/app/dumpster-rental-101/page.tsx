import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '../components/OptimizedImage';

export const metadata: Metadata = {
  title: 'Dumpster Rental 101 | Complete Guide to Roll Off Dumpsters | Icon Dumpsters',
  description: 'Learn everything about roll off dumpster rentals. Get expert guidance on choosing the right size, understanding pricing, permits, and how the rental process works.',
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-101',
  },
  openGraph: {
    title: 'Dumpster Rental 101 | Complete Guide to Roll Off Dumpsters | Icon Dumpsters',
    description: 'Learn everything about roll off dumpster rentals. Get expert guidance on choosing the right size, understanding pricing, permits, and how the rental process works.',
    url: 'https://icondumpsters.com/dumpster-rental-101',
    siteName: 'Icon Dumpsters',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://icondumpsters.com/IconDumpsters_Logo_Vector_Pantone267DarkerPurple.png',
        width: 1200,
        height: 630,
        alt: 'Icon Dumpsters - Professional Dumpster Rental Services in Utah',
        type: 'image/png',
      },
    ],
  },
};

export default function DumpsterRental101Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0d9488] via-teal-600 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Dumpster Rental 101
            </h1>
            <p className="text-xl sm:text-2xl text-purple-100 max-w-3xl mx-auto">
              Get a roll off dumpster rental that fits your home or commercial project
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/#quote-form"
              className="bg-white text-[#0d9488] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-colors inline-flex items-center"
            >
              Order Online
            </a>
            <a
              href="tel:801-918-6000"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0d9488] transition-colors inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call 801-918-6000
            </a>
          </div>
        </div>
      </section>

      {/* What Is a Roll Off Dumpster Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <OptimizedImage
                src="/images/optimized/IMG_3190.webp"
                alt="Roll off dumpster rental Utah"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What Is a Roll Off Dumpster?
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                A roll off dumpster is an open-top trash container used for residential and commercial projects like home cleanouts, construction jobs and demolitions. A specially designed roll-off truck delivers and picks up the dumpster.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Depending on where you live, you might hear roll off dumpsters referred to as:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Garbage dumpsters</li>
                <li>Roll away dumpsters</li>
                <li>Trash containers</li>
                <li>Roll off boxes</li>
                <li>Debris boxes</li>
                <li>Temporary containers</li>
                <li>Bins, tubs or cans</li>
                <li>Skips</li>
              </ul>
              <p className="text-lg text-gray-700">
                You might even use a different word that's not on this list. Regardless of what you call a roll off dumpster, all these terms refer to the same thing: a hassle-free waste removal option for the kinds of messes you can't leave at the curb for bulk trash pickup.
              </p>
              <div className="mt-8">
                <a
                  href="/#quote-form"
                  className="inline-block bg-[#0d9488] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors"
                >
                  Ready to Rent a Roll Off Dumpster?
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Projects Can I Use a Roll Off Dumpster For Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            What Projects Can I Use a Roll Off Dumpster For?
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Most projects that need a roll off dumpster fall into two categories: residential or commercial. Icon Dumpsters offers roll off dumpster rentals to support both kinds of projects. From home cleanouts to construction jobs, we supply a variety of trash container sizes and we also have containers that can handle specific types of debris.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Residential Projects */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#0d9488] mb-4">
                Roll Off Dumpsters for Residential Projects
              </h3>
              <p className="text-gray-700 mb-6">
                Home projects are a breeze with a roll off dumpster in your driveway. Having a container on hand can streamline the junk removal process and save you multiple trips to the landfill.
              </p>
              <p className="text-gray-700 mb-6">
                We can handle clutter and debris from a variety of jobs, such as home or garage cleanouts, general construction, moving, disaster or storm cleanup, renovations and more.
              </p>
              <a
                href="/services/residential-dumpster-rental"
                className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Start Your Home Cleanup Today
              </a>
            </div>

            {/* Commercial Projects */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#0d9488] mb-4">
                Roll Off Dumpsters for Construction Projects
              </h3>
              <p className="text-gray-700 mb-6">
                Keep your jobsite clear and running smoothly with the help of our reliable and efficient roll off dumpster services. Our trash containers can handle several tons of heavy construction debris, such as concrete, brick and lumber.
              </p>
              <p className="text-gray-700 mb-6">
                Some of the most common projects we accommodate include roofing, general construction and demolition, landscaping and concrete removal. We'll provide as many roll off dumpsters as your project needs, and we offer a dumpster empty-and-return service to keep your cleanup moving.
              </p>
              <a
                href="/services/construction-dumpster-rental"
                className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Start Your Construction Project Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How Does Renting a Dumpster Work Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            How Does Renting a Dumpster Work?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Choose a size</h3>
              <p className="text-gray-700">
                Pick the right size roll off dumpster for your cleanup.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Place your order</h3>
              <p className="text-gray-700">
                Order your dumpster online or over the phone.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fill your dumpster</h3>
              <p className="text-gray-700">
                Open the swinging door to easily walk trash into your roll off dumpster.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Request your dumpster pickup</h3>
              <p className="text-gray-700">
                Fill out our online pickup form and submit it with a few quick clicks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More About Renting a Roll Off Dumpster Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Learn More About Renting a Roll Off Dumpster
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#0d9488] mb-4">
                How Much Does a Roll Off Dumpster Cost?
              </h3>
              <p className="text-gray-700 mb-6">
                We bundle the costs of your rental period, delivery and pickup into one low, upfront rate. The cost of a roll off dumpster can vary based on your location, the type and amount of debris, the dumpster size you need and the length of your rental period.
              </p>
              <Link
                href="/pricing/dumpster-prices"
                className="text-[#0d9488] hover:text-teal-700 font-semibold underline"
              >
                Learn More About Pricing →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#0d9488] mb-4">
                What Size Dumpster Do I Need?
              </h3>
              <p className="text-gray-700 mb-6">
                The dumpster size you'll need depends on the amount and type of debris you're throwing away. We can help you find the right trash container when you call, but you can also check out our most common dumpster sizes and the projects associated with each size.
              </p>
              <Link
                href="/guides/dumpster-sizes"
                className="text-[#0d9488] hover:text-teal-700 font-semibold underline"
              >
                Learn More About Dumpster Sizes →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#0d9488] mb-4">
                Will I Need a Permit for My Roll Off Dumpster?
              </h3>
              <p className="text-gray-700 mb-6">
                Whether you need a permit for your dumpster depends on where you live and where you plan to keep your bin. Our team will answer all your permitting questions when you call, determining when you need a permit and explaining how to apply for one.
              </p>
              <Link
                href="/dumpster-rental-faq#permits"
                className="text-[#0d9488] hover:text-teal-700 font-semibold underline"
              >
                Learn More About Dumpster Permits →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#0d9488] mb-4">
                What Can't You Put in a Roll Off Dumpster?
              </h3>
              <p className="text-gray-700 mb-6">
                While we accept most debris types, there are some materials we can't take off your hands. This includes hazardous waste like household chemicals, oil, asbestos and car tires. Not only will these materials raise health concerns at the landfill, but they may also damage your roll off dumpster rental. Reach out if you have specific questions about the items you're throwing away.
              </p>
              <Link
                href="/dumpster-rental-faq#prohibited-items"
                className="text-[#0d9488] hover:text-teal-700 font-semibold underline"
              >
                Learn More About Prohibited Items →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Icon Dumpsters Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Work With Icon Dumpsters?
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Our team supports you from start to finish, ensuring your cleanup goes according to plan. Here's what you can expect when you rent a roll off dumpster from us:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Upfront pricing</h3>
              <p className="text-gray-700">
                We offer flat-rate pricing so you can plan ahead for your project costs. No hidden fees.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick service</h3>
              <p className="text-gray-700">
                We work with your timeline, making sure your dumpster arrives right when you need it.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Helpful customer support</h3>
              <p className="text-gray-700">
                Our team outlines the dumpster rental process and is here to answer all your questions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible scheduling options</h3>
              <p className="text-gray-700">
                We offer dumpster rental periods to fit both short and long-term projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Find the Right Roll Off Dumpster by Debris Type Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
            Find the Right Roll Off Dumpster by Debris Type
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            While roll off dumpsters can be used for a wide range of projects, there are three main debris types they fall under.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#0d9488] mb-4">1. Mixed Waste</h3>
              <p className="text-gray-700 mb-4">
                Mixed waste (also known as Municipal Solid Waste) dumpsters have the widest range of uses, especially for residential debris. Our mixed garbage dumpsters generally accept household junk, cardboard, clothing, furniture, appliances, electronics and home debris.
              </p>
              <Link
                href="/services/residential-dumpster-rental"
                className="text-[#0d9488] hover:text-teal-700 font-semibold underline"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#0d9488] mb-4">2. Heavy Debris</h3>
              <p className="text-gray-700 mb-4">
                Heavy debris dumpsters are often used for construction jobs, demolition and larger home improvement projects. Heavy debris includes concrete, asphalt, brick, block and rocks.
              </p>
              <Link
                href="/services/construction-dumpster-rental"
                className="text-[#0d9488] hover:text-teal-700 font-semibold underline"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#0d9488] mb-4">3. Yard Waste</h3>
              <p className="text-gray-700 mb-4">
                Yard waste dumpsters accept debris from landscaping, gardening, lawn care and other outdoor projects for both homeowners and professionals. Yard debris includes grass clippings, weeds, sticks, branches, plants, bushes and leaves.
              </p>
              <Link
                href="/services/yard-waste-dumpster-rental"
                className="text-[#0d9488] hover:text-teal-700 font-semibold underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Simplify Roll Off Dumpster Rentals Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
            How We Simplify Roll Off Dumpster Rentals
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            When you work with Icon Dumpsters, you'll focus more on your project and less on the mess. Here are a few resources we offer to make your cleanup easy:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg p-8 border border-purple-200">
              <h3 className="text-2xl font-bold text-[#0d9488] mb-4">Dumpster Rental 101</h3>
              <p className="text-gray-700 mb-6">
                First time renting a roll off dumpster? Our helpful guide walks you through the entire process, from placing an order to requesting your pickup online.
              </p>
              <Link
                href="/dumpster-rental-101"
                className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Get the Guide
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg p-8 border border-purple-200">
              <h3 className="text-2xl font-bold text-[#0d9488] mb-4">Materials We Accept</h3>
              <p className="text-gray-700 mb-6">
                Before you get started, make sure you know what materials you can throw in your roll off dumpster.
              </p>
              <Link
                href="/dumpster-rental-faq#prohibited-items"
                className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                What We Take
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg p-8 border border-purple-200">
              <h3 className="text-2xl font-bold text-[#0d9488] mb-4">Order a Dumpster Online</h3>
              <p className="text-gray-700 mb-6">
                Find available dumpsters in your area, see pricing and place your order — all in one spot!
              </p>
              <Link
                href="/#quote-form"
                className="inline-block bg-[#0d9488] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Order Online
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

