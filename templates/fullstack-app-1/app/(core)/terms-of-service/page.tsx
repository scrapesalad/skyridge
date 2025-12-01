import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Icon Dumpsters Utah",
  description: "Terms of Service for Icon Dumpsters. Learn about our rental agreements, service terms, and customer responsibilities. Contact Icon Dumpsters for reliable",
  keywords: "terms of service, Icon Dumpsters, rental agreement, dumpster rental terms, Utah dumpster rental terms",
  openGraph: {
    title: "Terms of Service | Icon Dumpsters Utah",
    description: "Terms of Service for Icon Dumpsters. Learn about our rental agreements, service terms, and customer responsibilities. Contact Icon Dumpsters for reliable",
    url: 'https://icondumpsters.com/terms-of-service',
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
  twitter: {
    card: 'summary',
    title: "Terms of Service | Icon Dumpsters Utah",
    description: "Terms of Service for Icon Dumpsters. Learn about our rental agreements, service terms, and customer responsibilities. Contact Icon Dumpsters for reliable",
  },
  alternates: { canonical: 'https://icondumpsters.com/terms-of-service' },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0d9488] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-purple-200">
            Last updated: August 2025
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using the services of Icon Dumpsters ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Service Description</h2>
            <p className="text-gray-700 mb-4">
              Icon Dumpsters provides dumpster rental services for residential and commercial waste disposal needs. Our services include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Dumpster delivery and placement</li>
              <li>Waste collection and disposal</li>
              <li>Dumpster pickup and removal</li>
              <li>Customer service and support</li>
              <li>Emergency services (subject to availability)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Rental Agreement</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-trust-blue-dark font-semibold mb-2">Important Rental Terms</p>
              <ul className="list-disc pl-6 text-trust-blue-dark text-sm">
                <li>Rental periods are typically 7-14 days unless otherwise specified</li>
                <li>Extensions are available for an additional fee</li>
                <li>Early returns are subject to our cancellation policy</li>
                <li>All rentals require a valid credit card or payment method</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Customer Responsibilities</h2>
            <p className="text-gray-700 mb-4">As a customer, you agree to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Provide accurate delivery location and access information</li>
              <li>Ensure safe and accessible placement area for dumpster delivery</li>
              <li>Use the dumpster only for approved waste materials</li>
              <li>Not exceed the dumpster's weight capacity</li>
              <li>Keep the dumpster area clean and accessible</li>
              <li>Notify us immediately of any damage or issues</li>
              <li>Provide 24-hour notice for pickup requests</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Prohibited Materials</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
              <p className="text-red-800 font-semibold mb-2">Materials NOT Allowed in Our Dumpsters</p>
              <ul className="list-disc pl-6 text-red-700 text-sm">
                <li>Hazardous waste (paint, chemicals, batteries, etc.)</li>
                <li>Medical waste or biohazard materials</li>
                <li>Asbestos or lead-based materials</li>
                <li>Radioactive materials</li>
                <li>Explosives or ammunition</li>
                <li>Freon-containing appliances (unless properly drained)</li>
                <li>Liquids or wet materials</li>
                <li>Tires (unless specifically approved)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Pricing and Payment</h2>
            <p className="text-gray-700 mb-4">Our pricing structure includes:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Base Rental Fee:</strong> Covers delivery, pickup, and disposal for standard rental period</li>
              <li><strong>Weight Charges:</strong> Additional fees for exceeding weight limits</li>
              <li><strong>Extension Fees:</strong> Daily charges for extended rental periods</li>
              <li><strong>Late Fees:</strong> Charges for late payments or extended rentals</li>
              <li><strong>Damage Fees:</strong> Charges for damage to dumpster or equipment</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Payment is due upon delivery or as specified in your rental agreement. We accept major credit cards, cash, and approved business accounts.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Delivery and Pickup</h2>
            <p className="text-gray-700 mb-4">Delivery and pickup terms:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Standard delivery is within 24-48 hours of order confirmation</li>
              <li>Rush delivery available for additional fee (subject to availability)</li>
              <li>Customer must ensure clear access for delivery and pickup</li>
              <li>Additional fees may apply for difficult access or special requirements</li>
              <li>Pickup scheduling requires 24-hour notice</li>
              <li>Weather or access issues may delay delivery/pickup</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Liability and Insurance</h2>
            <p className="text-gray-700 mb-4">Liability terms:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Icon Dumpsters carries comprehensive liability insurance</li>
              <li>Customers are responsible for damage caused by misuse or negligence</li>
              <li>We are not liable for damage to property during delivery/pickup unless caused by our negligence</li>
              <li>Customers should maintain their own insurance for valuable items</li>
              <li>Force majeure events (weather, natural disasters) may affect service delivery</li>
            </ul>

            <h2 id="price-lock-guarantee" className="text-2xl font-bold text-gray-900 mb-6">9. Price Lock Guarantee</h2>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <p className="text-green-800 font-semibold mb-2">Our Price Lock Commitment</p>
              <p className="text-green-700 text-sm mb-2">
                When you receive a quote from Icon Dumpsters, that price is locked in for 30 days from the quote date. This guarantee means:
              </p>
              <ul className="list-disc pl-6 text-green-700 text-sm">
                <li>Your quoted price will not increase for bookings made within 30 days</li>
                <li>Price lock applies to the base rental fee and quoted tonnage allowance</li>
                <li>Additional charges may apply for: exceeding weight limits, extended rental periods beyond quoted timeframe, prohibited materials requiring special disposal, or changes to delivery location or access requirements</li>
                <li>Price lock does not apply to government fees, permits, or regulatory charges</li>
                <li>Quote must be in writing (email confirmation or written estimate)</li>
              </ul>
            </div>

            <h2 id="satisfaction-guarantee" className="text-2xl font-bold text-gray-900 mb-6">10. Satisfaction Guarantee</h2>
            <div className="bg-teal-50 border-l-4 border-purple-400 p-4 mb-6">
              <p className="text-teal-800 font-semibold mb-2">Our Commitment to Your Satisfaction</p>
              <p className="text-teal-700 text-sm mb-2">
                We stand behind the quality of our service. If you experience service issues, we will work to make it right:
              </p>
              <ul className="list-disc pl-6 text-teal-700 text-sm">
                <li>Contact us within 24 hours of service issue for fastest resolution</li>
                <li>We will investigate legitimate service complaints promptly</li>
                <li>Resolution may include: service credit, partial refund, re-delivery, or other appropriate remedy</li>
                <li>Refund eligibility determined on case-by-case basis for verifiable service failures</li>
                <li>Does not apply to customer-caused issues, changes in customer requirements, or circumstances beyond our control</li>
                <li>All refund requests must be submitted in writing to icondumpsters@gmail.com</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Cancellation and Refund Policy</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-800 font-semibold mb-2">Cancellation Terms</p>
              <ul className="list-disc pl-6 text-yellow-700 text-sm">
                <li>Cancellations made 24+ hours before delivery: Full refund</li>
                <li>Cancellations made 2-24 hours before delivery: 50% refund</li>
                <li>Cancellations made less than 2 hours before delivery: No refund</li>
                <li>Early pickup requests: Pro-rated refund for unused days (minimum 3-day rental charge applies)</li>
                <li>Weather-related cancellations: Full refund or rescheduling at no charge</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Safety and Compliance</h2>
            <p className="text-gray-700 mb-4">Safety requirements:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>All customers must comply with local, state, and federal regulations</li>
              <li>Proper waste segregation and disposal is required</li>
              <li>Safety equipment should be used when loading dumpsters</li>
              <li>Children and pets should be kept away from dumpster areas</li>
              <li>Customers must report any safety concerns immediately</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Communication and Notifications</h2>
            <p className="text-gray-700 mb-4">
              By using our services, you consent to receive communications from us via:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Phone calls and text messages (quote confirmations, delivery updates, service reminders, and promotional offers)</li>
              <li>Email notifications and updates</li>
              <li>Service confirmations and reminders</li>
              <li>Emergency notifications when necessary</li>
            </ul>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-400 p-4 mb-6">
              <p className="text-teal-800 font-semibold mb-2">Messaging Terms and Conditions</p>
              <p className="text-teal-700 text-sm mb-2">
                By providing your phone number on our website contact form at <a href="https://icondumpsters.com/contact" className="text-teal-600 underline">https://icondumpsters.com/contact</a> and checking the consent box, 
                you consent to receive text messages from Icon Dumpsters from 801-918-6000 regarding quote confirmations, delivery updates, service reminders, and promotional offers. 
                <strong>You will receive quote confirmations, delivery updates, service reminders, and promotional offers via SMS.</strong> 
                <strong>You will receive promotional offers, account alerts, and service updates via SMS.</strong>
                Consent is not a condition of purchase. Message frequency varies based on your service needs and promotions. Message & data rates may apply. 
                <strong>To opt out at any time, consumers can text STOP to stop receiving messages.</strong> 
                <strong>For assistance, text HELP to 801-918-6000.</strong> 
                <strong>Text HELP for assistance.</strong>
                You can also contact us at 801-918-6000 or icondumpsters@gmail.com. Mobile opt-in information is never shared with third parties.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">14. Data Sharing and Privacy</h2>
            <p className="text-gray-700 mb-4">
              We are committed to protecting your privacy and personal information. Our data sharing practices are as follows:
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-800 font-semibold mb-2">Data Sharing Restrictions</p>
              <ul className="list-disc pl-6 text-yellow-700 text-sm">
                <li>Customer data is not shared with 3rd parties for promotional or marketing purposes.</li>
                <li>Mobile opt-in and consent are never shared with anyone for any purpose. Any information sharing that may be mentioned elsewhere in these terms excludes mobile opt-in data.</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
              <p className="text-red-800 font-semibold mb-2">Data Transfer Commitment</p>
              <p className="text-red-700 text-sm">
                <strong>We do not transfer consumer data to any external organizations under any circumstances.</strong> 
                Your personal information, including contact details, service history, and any other data collected, 
                remains strictly within our organization and is never sold, leased, or transferred to external parties 
                for any purpose, including marketing, advertising, or commercial use.
              </p>
            </div>

            <p className="text-gray-700 mb-6">
              For complete details about our privacy practices, please review our <a href="https://icondumpsters.com/privacy-policy" className="text-trust-blue underline">Privacy Policy</a>.
            </p>
            
                         <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
               <p className="text-trust-blue-dark font-semibold mb-2">Privacy Policy and Terms & Conditions</p>
               <p className="text-trust-blue-dark text-sm">
                 For more information, please visit the Privacy Policy at: <a href="https://icondumpsters.com/privacy-policy" className="text-trust-blue underline font-medium">https://icondumpsters.com/privacy-policy</a> and Terms & Conditions at: <a href="https://icondumpsters.com/terms-of-service" className="text-trust-blue underline font-medium">https://icondumpsters.com/terms-of-service</a>
               </p>
             </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">15. Dispute Resolution</h2>
            <p className="text-gray-700 mb-6">
              Any disputes arising from these terms or our services will be resolved through:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700">
              <li>Direct communication with our customer service team</li>
              <li>Mediation if direct resolution is not possible</li>
              <li>Legal proceedings in Utah courts if necessary</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">16. Modifications to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.
              Continued use of our services constitutes acceptance of modified terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">17. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Icon Dumpsters</strong></p>
              <p className="text-gray-700 mb-2">Phone: (801) 918-6000</p>
              <p className="text-gray-700 mb-2">Email: icondumpsters@gmail.com</p>
              <p className="text-gray-700">Address: Utah, United States</p>
            </div>

            <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-400">
              <p className="text-trust-blue-dark text-sm">
                <strong>Important:</strong> These Terms of Service are effective as of August 2025. By using our services, 
                you acknowledge that you have read, understood, and agree to be bound by these terms. 
                Please also review our <a href="https://icondumpsters.com/privacy-policy" className="text-trust-blue underline">Privacy Policy</a> for information about how we handle your data.
              </p>
                             <p className="text-trust-blue-dark text-sm mt-2">
                 <strong>For more information, please visit the Privacy Policy at:</strong> 
                 <a href="https://icondumpsters.com/privacy-policy" className="text-trust-blue underline font-medium">https://icondumpsters.com/privacy-policy</a> and Terms & Conditions at: <a href="https://icondumpsters.com/terms-of-service" className="text-trust-blue underline font-medium">https://icondumpsters.com/terms-of-service</a>
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
