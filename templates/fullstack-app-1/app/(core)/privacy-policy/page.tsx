import { Metadata } from "next";
import Hero from '@/app/components/hero';

export const metadata: Metadata = {
  title: "Privacy Policy | Icon Dumpsters Utah",
  description: "Privacy Policy for Icon Dumpsters. Learn how we collect, use, and protect your information, including consent for text messages.",
  keywords: "privacy policy, Icon Dumpsters, data protection, text message consent, Utah dumpster rental privacy",
  openGraph: {
    title: "Privacy Policy | Icon Dumpsters Utah",
    description: "Privacy Policy for Icon Dumpsters. Learn how we collect, use, and protect your information, including consent for text messages.",
    url: 'https://icondumpsters.com/privacy-policy',
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
    title: "Privacy Policy | Icon Dumpsters Utah",
    description: "Privacy Policy for Icon Dumpsters. Learn how we collect, use, and protect your information.",
  },
  alternates: { canonical: 'https://icondumpsters.com/privacy-policy' },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              Icon Dumpsters ("we," "our," or "us") collects information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Fill out our quote request forms</li>
              <li>Contact us via phone, email, or text message</li>
              <li>Request our services</li>
              <li>Sign up for our newsletter or promotional communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Types of Information We Collect</h2>
            <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address</li>
              <li><strong>Service Information:</strong> Project details, dumpster size requirements, delivery preferences</li>
              <li><strong>Communication Records:</strong> Phone calls, text messages, emails, and other correspondence</li>
              <li><strong>Website Usage:</strong> IP address, browser type, pages visited, and other analytics data</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Provide our dumpster rental services</li>
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your account and services</li>
              <li>Send you marketing and promotional materials (with your consent)</li>
              <li>Improve our services and website</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Text Message Communications and Consent</h2>
                         <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-trust-blue-dark font-semibold mb-2">Important Notice About Text Messages</p>
              <p className="text-trust-blue-dark text-sm">
                By providing your phone number on our website contact form at <a href="https://icondumpsters.com/contact" className="text-trust-blue underline">https://icondumpsters.com/contact</a> and checking the consent box, 
                you consent to receive text messages from Icon Dumpsters through our Grasshopper phone system. These messages include:
              </p>
              <ul className="list-disc pl-6 mt-2 text-trust-blue-dark text-sm">
                <li>Quote confirmations</li>
                <li>Delivery updates</li>
                <li>Service reminders</li>
                <li>Promotional offers</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Consent for Text Messages:</strong> When you provide your phone number on our website contact form at 
              <a href="https://icondumpsters.com/contact" className="text-trust-blue underline"> https://icondumpsters.com/contact</a> and check the consent box, 
              you expressly consent to receive text messages from us through our Grasshopper phone system. This consent is required for us to provide you with 
              essential service communications.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Message Types:</strong> You will receive quote confirmations, delivery updates, service reminders, and promotional offers via SMS.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Message Frequency:</strong> Message frequency varies based on your service needs and promotions. Standard messaging rates may apply.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Opt-Out:</strong> You may opt out of text messages at any time by replying "STOP" to any message or calling (801) 918-6000. 
              However, opting out of text messages may limit our ability to provide you with timely service updates.
            </p>

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

            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business (e.g., Grasshopper for phone services, payment processors)</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-800 font-semibold mb-2">Data Sharing Restrictions</p>
              <ul className="list-disc pl-6 text-yellow-700 text-sm">
                <li>Customer data is not shared with 3rd parties for promotional or marketing purposes.</li>
                <li>Mobile opt-in and consent are never shared with anyone for any purpose. Any information sharing that may be mentioned elsewhere in this policy excludes mobile opt-in data.</li>
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

            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement comprehensive security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. Our data protection measures include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Encryption:</strong> All sensitive data is encrypted both in transit and at rest</li>
              <li><strong>Access Controls:</strong> Strict access controls limit who can view your information</li>
              <li><strong>Secure Storage:</strong> Data is stored on secure, protected servers</li>
              <li><strong>Regular Audits:</strong> We conduct regular security audits and assessments</li>
              <li><strong>Employee Training:</strong> All staff are trained on data protection and privacy</li>
              <li><strong>Incident Response:</strong> We have procedures in place for security incident response</li>
              <li><strong>Physical Security:</strong> Our facilities are secured against unauthorized access</li>
            </ul>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-400 p-4 mb-6">
              <p className="text-teal-800 font-semibold mb-2">Data Protection Measures</p>
              <p className="text-teal-700 text-sm">
                We take the following steps to prevent unauthorized sharing of user data:
              </p>
              <ul className="list-disc pl-6 mt-2 text-teal-700 text-sm">
                <li>All data access is logged and monitored for suspicious activity</li>
                <li>Multi-factor authentication is required for administrative access</li>
                <li>Regular security updates and patches are applied to all systems</li>
                <li>Data is backed up securely and tested regularly</li>
                <li>We maintain strict confidentiality agreements with all employees</li>
                <li>Third-party vendors are carefully vetted and bound by data protection agreements</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-6">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your information, 
              we cannot guarantee absolute security and encourage you to take appropriate precautions when sharing sensitive data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Opt out of text messages (reply "STOP" to any message)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-6">
              Our website uses cookies and similar technologies to enhance your browsing experience and analyze website usage. 
              You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information 
              from children under 13.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the 
              new policy on our website and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Icon Dumpsters</strong></p>
              <p className="text-gray-700 mb-2">Phone: (801) 918-6000</p>
              <p className="text-gray-700 mb-2">Email: icondumpsters@gmail.com</p>
              <p className="text-gray-700">Address: Utah, United States</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-trust-blue-dark font-semibold mb-2">Consumer Contact Information</p>
              <p className="text-trust-blue-dark text-sm">
                <strong>Contact Us:</strong> If you have any questions about this Privacy Policy or our practices, please contact us at 
                <a href="mailto:icondumpsters@gmail.com" className="text-trust-blue underline"> icondumpsters@gmail.com</a> or 
                <a href="tel:(801) 918-6000" className="text-trust-blue underline"> (801) 918-6000</a>.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-400 p-4 mb-6">
              <p className="text-teal-800 font-semibold mb-2">Questions About Your Data</p>
              <p className="text-teal-700 text-sm">
                If you have any questions or concerns about this Privacy Policy or your data, please contact us at 
                <a href="mailto:icondumpsters@gmail.com" className="text-teal-600 underline font-medium"> icondumpsters@gmail.com</a> or 
                <a href="tel:(801) 918-6000" className="text-teal-600 underline font-medium"> 801-918-6000</a>.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
              <p className="text-red-800 font-semibold mb-2">Consumer Contact Information - Required for Compliance</p>
              <p className="text-red-700 text-sm">
                <strong>If you have any questions or concerns about this Privacy Policy or your data, please contact us at 
                <a href="mailto:icondumpsters@gmail.com" className="text-red-600 underline font-medium"> icondumpsters@gmail.com</a> or 
                <a href="tel:(801) 918-6000" className="text-red-600 underline font-medium"> 801-918-6000</a>.</strong>
              </p>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <p className="text-yellow-800 text-sm">
                <strong>Note:</strong> This privacy policy is effective as of January 2025. By using our services, 
                you acknowledge that you have read and understood this Privacy Policy and consent to the collection, 
                use, and disclosure of your information as described herein.
              </p>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400">
              <p className="text-trust-blue-dark text-sm">
                <strong>Related Documents:</strong> For more information, please visit the Privacy Policy and Terms & Conditions at <a href="https://icondumpsters.com/privacy-policy" className="text-trust-blue underline font-medium">https://icondumpsters.com/privacy-policy</a> for complete information about our rental agreements, customer responsibilities, and service terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
