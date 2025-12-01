'use client';

import CartClient from './CartClient';

export default function CartPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Order Your Dumpster Rental Online</h1>
          <p className="text-lg text-teal-100">
            Our online dumpster rental experience is just one of the many ways Icon Dumpsters makes roll off dumpster rental simpler and more affordable. 
            In just a few clicks, you can schedule a dumpster delivery to your home, business or job site to make cleaning up a breeze.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Order Form - Left Side (2 columns) */}
          <div className="lg:col-span-2">
            <CartClient />

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What's included in my flat-rate dumpster rental price?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We bundle your delivery, rental period, weight limit and pickup costs into one affordable flat rate, making it easy to build and stick to your cleanup budget. 
                    Please remember that tossing a prohibited item or going over the weight limit can result in additional fees. We'll provide a list of accepted and prohibited items when you order, 
                    as well as guidelines to help keep your project on track. Questions? Our team is available throughout your project to answer them.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What is a roll off dumpster anyway?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    A roll off dumpster is a rectangular box with no lid, a swinging door and wheels on one end. When we deliver your dumpster rental, 
                    our truck uses the dumpster wheels to roll it into the correct spot. So, a roll off dumpster is simply an open-top dumpster with wheels that "roll" into place.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can I rent a square dumpster for my business?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our smaller, square dumpsters are called front load dumpsters — and yes, you can rent them from us! Reach out to our commercial dumpster service team 
                    to set up a customized waste management plan for your storefront, restaurant or office space.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-700 font-semibold mb-2">Other questions?</p>
                <p className="text-gray-700">
                  Give us a call at{' '}
                  <a href="tel:801-918-6000" className="text-teal-600 hover:text-teal-700 font-semibold underline">
                    801-918-6000
                  </a>{' '}
                  during business hours!
                </p>
                <p className="text-sm text-gray-600 mt-1">Mon - Fri: 8 am - 6 pm MST</p>
              </div>
            </div>

          </div>

          {/* Sidebar - Right Side (1 column) */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-4">

              {/* Need More Than One Dumpster Section */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need More Than One Dumpster?</h3>
                <p className="text-gray-700 mb-4">
                  Unlock contractor pricing, powered by Icon Dumpsters, for multi-project or ongoing rentals.
                </p>
                <a 
                  href="/frequent-buyers" 
                  className="block text-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors mb-4"
                >
                  Learn More
                </a>
                <a 
                  href="tel:801-918-6000" 
                  className="block text-center text-teal-600 hover:text-teal-700 font-semibold"
                >
                  Call 801-918-6000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-gray-100 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600 text-center">
            Icon Dumpsters assists individuals, commercial and industrial customers by assessing their disposal needs and facilitating 
            the delivery of waste removal services, including the provision of the necessary dumpster equipment.
          </p>
        </div>
      </div>

    </main>
  );
}

