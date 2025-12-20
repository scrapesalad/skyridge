import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contingency Agreement | Sky Ridge Roofing - Insurance Claim Protection',
  description: 'Learn about our contingency agreement for insurance claims. No financial obligation unless your insurance approves the work. Free consultation and claim assistance.',
  alternates: { canonical: canonicalUrl('/contingency-agreement') },
  openGraph: {
    title: 'Contingency Agreement - Sky Ridge Roofing',
    description: 'Protect yourself with our contingency agreement. No obligation unless insurance approves your claim.',
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
            src="/images/skyridge/scrap/Roof-Inspection-Image-768x439.jpg"
            alt="Contingency Agreement"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 drop-shadow-2xl">
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Contingency Agreement</h1>
              <p className="text-xl drop-shadow-lg">Protection for You, Clarity for Us</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">What is a Contingency Agreement?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              A contingency agreement protects you and ensures there's <strong>no financial obligation</strong> unless your insurance company approves the roofing work due to storm or accidental damage. This agreement is commonly used in the roofing industry when working with insurance claims, and it provides clear protection for both homeowners and contractors.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Sky Ridge Roofing, we believe in transparency and protecting our customers. Our contingency agreement ensures you understand exactly what you're agreeing to, with no hidden fees or surprises. If you need help with an <Link href="/services/insurance-claims" className="text-blue-600 hover:underline font-semibold">insurance claim</Link>, this agreement makes the process clear and straightforward.
            </p>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When you sign a contingency agreement with Sky Ridge Roofing, you're simply saying:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2">If Insurance Approves</h3>
                    <p className="text-gray-700">"If my insurance approves the roof work, I agree to hire Sky Ridge Roofing to complete it for the approved amount."</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2">If Insurance Denies</h3>
                    <p className="text-gray-700">"If the insurance company denies the claim, I owe nothing for the inspection or assistance."</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <p className="text-lg font-semibold text-gray-800 mb-2">Important:</p>
              <p className="text-gray-700">
                You are <strong>not obligated</strong> to pay anything unless your claim is approved and funded. It's a simple protection for both of us, ensuring you're never stuck with unexpected costs.
              </p>
            </div>
          </div>

          {/* Why We Use It */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Why We Use Contingency Agreements</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Contingency agreements benefit both homeowners and contractors by establishing clear expectations and protecting everyone involved in the insurance claim process.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg mb-2">Direct Advocacy</h3>
                  <p className="text-gray-700">Ensures we can advocate directly on your behalf with your insurance company, handling all communications and documentation.</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg mb-2">Locked-In Pricing</h3>
                  <p className="text-gray-700">Locks in your pricing and priority scheduling, so you know exactly what to expect if your claim is approved.</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg mb-2">Full Claim Support</h3>
                  <p className="text-gray-700">Gives us permission to meet with your adjuster, submit supplements, and guide the claim process from start to finish.</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg mb-2">Everything in Writing</h3>
                  <p className="text-gray-700">Puts everything in writing — no hidden commitments or confusion. You'll have a clear understanding of the agreement before signing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Related Services</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our contingency agreement is part of our comprehensive <Link href="/services/insurance-claims" className="text-blue-600 hover:underline font-semibold">insurance claims assistance</Link> service. We also provide:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700"><Link href="/services/roof-replacement" className="text-blue-600 hover:underline font-semibold">Roof Replacement</Link> - Complete roof replacement services with quality materials</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700"><Link href="/services/roof-repairs" className="text-blue-600 hover:underline font-semibold">Roof Repairs</Link> - Fast and reliable repair services for leaks and damage</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700"><Link href="/services/insurance-claims" className="text-blue-600 hover:underline font-semibold">Insurance Claims Assistance</Link> - Expert help navigating the insurance claim process</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700"><Link href="/faq" className="text-blue-600 hover:underline font-semibold">FAQ</Link> - Get answers to common questions about roofing and insurance claims</span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help with an Insurance Claim?</h2>
            <p className="text-xl mb-6">Contact us today for a free consultation and learn how our contingency agreement can protect you.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services/insurance-claims"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Learn More About Insurance Claims
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
