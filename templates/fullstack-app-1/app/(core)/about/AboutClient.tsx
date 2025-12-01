
import ImageWithFallback from '@/app/components/ImageWithFallback';
import Image from 'next/image';
import QuoteFormSection from '@/app/components/QuoteFormSection';
import Hero from '@/app/components/hero';

import OptimizedImage from '@/app/components/OptimizedImage';

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* Who We Are Section */}
      <section className="bg-[#0d9488] text-white py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">About Icon Dumpsters</h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8">Who We Are</h2>
          
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center">
              <ImageWithFallback 
                src="https://icondumpsters.com/Icon_Dumpsters_Final.png" 
                alt="Icon Dumpsters - Professional Dumpster Rental Services in Utah" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

                     <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
             <p>
               Icon Dumpsters was born from a simple observation: too many Utah residents and contractors
               were dealing with unreliable dumpster rental services. Late deliveries, hidden fees, poor
               communication, and confusing pricing were far too common in our industry.
             </p>
             <p>
               We knew there had to be a better way. Our founders set out to create a dumpster rental
               company that would do things differently—one built on transparency, reliability, and
               genuine customer service. We wanted to be the company we would want to work with.
             </p>
             <p>
               From day one, our mission has been clear: provide straightforward pricing with no hidden
               fees, deliver dumpsters when we say we will, and treat every customer with respect and
               professionalism. We know that when you need a dumpster, you're in the middle of a project
               or dealing with a challenging situation. The last thing you need is added stress from your
               waste removal provider.
             </p>
             <p>
               Today, Icon Dumpsters serves homeowners, contractors, and businesses throughout Utah.
               We've built our reputation on keeping our promises: clear pricing, prompt delivery and
               pickup, and responsive customer service. When you call us, you'll talk to real people who
               care about helping you get the right solution for your project.
             </p>
             <p>
               We're proud to be a Utah-based, family-owned business. We live and work in the communities
               we serve, and we're committed to being a reliable partner for our neighbors. Whether you're
               tackling a home renovation, managing a construction site, or cleaning out a property, we're
               here to make the waste removal part of your project as simple and stress-free as possible.
             </p>
           </div>
        </div>
        
        {/* Curved transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-auto">
            <path d="M0,0 C400,120 800,120 1200,0 L1200,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Company Images Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What We're About</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Reliable service, professional equipment, and a commitment to making your project easier.
            </p>
          </div>
          
          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <OptimizedImage src="/images/optimized/dumpster500x500-1.webp"
                alt="Icon Dumpsters professional service team"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg">Professional Team</h3>
                <p className="text-sm opacity-90">Experienced & reliable</p>
              </div>
            </div>
            
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <OptimizedImage src="/images/optimized/dumpster500x500-2.webp"
                alt="Icon Dumpsters fleet of dumpsters"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg">Quality Equipment</h3>
                <p className="text-sm opacity-90">Well-maintained fleet</p>
              </div>
            </div>
            
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <OptimizedImage src="/images/optimized/dumpsterSmallBanner.webp"
                alt="Icon Dumpsters serving Utah communities"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg">Utah Service</h3>
                <p className="text-sm opacity-90">Statewide coverage</p>
              </div>
            </div>
            
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <OptimizedImage src="/images/optimized/dumpsterSmallBanner2.webp"
                alt="Icon Dumpsters customer satisfaction"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg">Customer Focus</h3>
                <p className="text-sm opacity-90">Your success matters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Value Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What We Value</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Icon Dumpsters, our values shape how we do business and how we treat customers. 
              Here's what matters most to us:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Exceptional Customer Service */}
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#0d9488] rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Exceptional Customer Service</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe every customer deserves attention, respect, and a hassle-free experience 
                from start to finish. Your satisfaction is our top priority.
              </p>
            </div>

            {/* Communication */}
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#0d9488] rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Communication</h3>
              <p className="text-gray-600 leading-relaxed">
                We keep things clear and simple. You'll always know what to expect, when to expect it, 
                and who to contact if you have questions.
              </p>
            </div>

            {/* Honesty */}
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#0d9488] rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Honesty</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in doing the right thing, being upfront about pricing, and standing behind 
                our word on every job. No hidden fees, no surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted Partners
            </h2>
            <p className="text-lg text-gray-600">
              We collaborate with local specialists whose values align with reliable service, smart project planning, and keeping Utah communities running smoothly.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <article className="h-full rounded-2xl border border-gray-200 bg-white shadow-sm p-8 flex flex-col">
              <div className="mb-6">
                <span className="inline-flex items-center text-sm font-semibold text-trust-blue-dark uppercase tracking-wide mb-2">
                  Pond &amp; Water Feature Partner
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Utah Water Gardens
                </h2>
                <p className="text-gray-600">
                  Utah Water Gardens delivers complete pond and water feature solutions throughout the Wasatch Front&mdash;from custom construction to routine maintenance and water quality care.
                </p>
              </div>
              <ul className="space-y-2 text-gray-700 flex-1">
                <li>&bull; Established in 1989 and still family operated in Salt Lake City</li>
                <li>&bull; Utah&apos;s largest selection of aquatic pond plants, koi, and supplies</li>
                <li>&bull; Professional service team featuring aquatic biologists, engineers, and horticulturists</li>
                <li>&bull; Contact: <a className="text-trust-blue hover:underline" href="tel:+18015908516">(801) 590-8516</a> &middot; <span className="text-gray-600">5911 S 1300 E, Salt Lake City, UT 84121</span></li>
              </ul>
              <div className="mt-6">
                <a
                  href="https://utahwatergardens.com"
                  className="inline-flex items-center text-trust-blue-dark font-semibold hover:text-trust-blue-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit utahwatergardens.com
                  <span className="ml-2" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </div>
            </article>

            <article className="h-full rounded-2xl border border-gray-200 bg-white shadow-sm p-8 flex flex-col">
              <div className="mb-6">
                <span className="inline-flex items-center text-sm font-semibold text-trust-blue-dark uppercase tracking-wide mb-2">
                  Roll-off Dumpster Partner
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  TNT Dump
                </h2>
                <p className="text-gray-600">
                  TNT Dump brings over 55 years of experience in dumpster rental and waste management services, providing reliable roll-off solutions with proven expertise and commitment to quality service.
                </p>
              </div>
              <ul className="space-y-2 text-gray-700 flex-1">
                <li>&bull; Established in 1969, serving Utah communities for over 55 years</li>
                <li>&bull; Extensive experience with construction, renovation, and commercial waste management</li>
                <li>&bull; Reliable service backed by decades of industry expertise and customer satisfaction</li>
                <li>&bull; Contact: <a className="text-trust-blue hover:underline" href="https://tntdump.com">Visit tntdump.com</a> &middot; <span className="text-gray-600">Trusted partner in Utah waste management</span></li>
              </ul>
              <div className="mt-6">
                <a
                  href="https://tntdump.com"
                  className="inline-flex items-center text-trust-blue-dark font-semibold hover:text-trust-blue-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit tntdump.com
                  <span className="ml-2" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </div>
            </article>

            <article className="h-full rounded-2xl border border-gray-200 bg-white shadow-sm p-8 flex flex-col">
              <div className="mb-6">
                <span className="inline-flex items-center text-sm font-semibold text-trust-blue-dark uppercase tracking-wide mb-2">
                  Landscape Design Partner
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Outdoor Escapes &amp; Design
                </h2>
                <p className="text-gray-600">
                  Outdoor Escapes &amp; Design plans, installs, and maintains outdoor environments that are tailored to each property with an emphasis on communication and craftsmanship.
                </p>
              </div>
              <ul className="space-y-2 text-gray-700 flex-1">
                <li>&bull; Full-service design, installation, and maintenance for Utah landscapes</li>
                <li>&bull; Mission-focused team delivering high-quality work for each project&apos;s needs</li>
                <li>&bull; Free estimates with responsive project planning support</li>
                <li>&bull; Contact: <a className="text-trust-blue hover:underline" href="tel:+13852752377">(385) 275-2377</a></li>
              </ul>
              <div className="mt-6">
                <a
                  href="https://www.oedlandscape.com"
                  className="inline-flex items-center text-trust-blue-dark font-semibold hover:text-trust-blue-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit oedlandscape.com
                  <span className="ml-2" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </div>
            </article>

            <article className="h-full rounded-2xl border border-dashed border-blue-200 bg-blue-50/30 p-8 flex flex-col">
              <div className="mb-6">
                <span className="inline-flex items-center text-sm font-semibold text-trust-blue-dark uppercase tracking-wide mb-2">
                  Partnership Opportunities
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Partner With Icon Dumpsters
                </h2>
                <p className="text-gray-600">
                  We welcome Utah-based teams that bring specialized expertise to construction, renovation, and property improvement projects.
                </p>
              </div>
              <ul className="space-y-2 text-gray-700 flex-1">
                <li>&bull; Align with a responsive hauling partner serving Salt Lake and Utah counties</li>
                <li>&bull; Collaborate on streamlined jobsite logistics and shared customer communication</li>
                <li>&bull; Extend project support with flexible dumpster scheduling and swaps</li>
              </ul>
              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-flex items-center text-trust-blue-dark font-semibold hover:text-trust-blue-dark"
                >
                  Start a partnership conversation
                  <span className="ml-2" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

       {/* Quote Form Section */}
       <QuoteFormSection 
         title="Get Your Free Quote"
         description="Fill out the form below and we'll get back to you with a personalized quote for your project."
       />
     </div>
   );
 }

