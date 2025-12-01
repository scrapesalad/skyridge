export default function TrustSection() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Guarantee
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best dumpster rental experience in Utah
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Low Price Guarantee */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Competitive Pricing
            </h3>
            <p className="text-gray-600">
              We offer the most competitive rates in Salt Lake County with no hidden fees or surprise charges.
            </p>
          </div>

          {/* No Hidden Fees */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Hidden Fees
            </h3>
            <p className="text-gray-600">
              What you see is what you pay. No delivery fees, pickup fees, or unexpected charges.
            </p>
          </div>

          {/* Friendly Service */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Friendly, Live Help
            </h3>
            <p className="text-gray-600">
              Our team is available 7 days a week to answer questions and provide expert guidance.
            </p>
          </div>
        </div>

        {/* Additional Trust Signals */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0d9488] mb-2">3+ Years</div>
            <div className="text-gray-600">In Business</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0d9488] mb-2">Same Day</div>
            <div className="text-gray-600">Delivery Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0d9488] mb-2">15-30</div>
            <div className="text-gray-600">Yard Dumpsters</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0d9488] mb-2">7 Days</div>
            <div className="text-gray-600">Service Available</div>
          </div>
        </div>

        {/* CTA handled on pages to avoid duplicates */}
      </div>
    </div>
  );
}
