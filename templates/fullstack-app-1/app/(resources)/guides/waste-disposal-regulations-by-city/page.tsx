import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSchema from '@/app/components/FAQSchema';
import InternalLinks from '@/app/components/InternalLinks';

export const metadata: Metadata = {
  title: "Waste Disposal Regulations by City: Complete Guide for Utah Dumpster Rentals | Icon Dumpsters",
  description: "Complete city-by-city guide to waste disposal regulations for dumpster rentals in Utah. Learn about permits, prohibited materials, and local requirements for Salt Lake City, West Valley, Provo, Ogden, and more.",
  keywords: ['waste disposal regulations utah', 'dumpster rental regulations by city', 'utah city waste regulations', 'dumpster permit requirements utah', 'utah waste management laws'],
  alternates: { canonical: 'https://icondumpsters.com/guides/waste-disposal-regulations-by-city' },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'Waste Disposal Regulations by City: Complete Guide for Utah Dumpster Rentals',
    description: 'Complete city-by-city guide to waste disposal regulations for dumpster rentals in Utah.',
    url: 'https://icondumpsters.com/guides/waste-disposal-regulations-by-city',
    images: [{ url: '/images/ca97086c-729c-480f-a90d-d117c1278945.webp', width: 1200, height: 630, alt: 'Waste Disposal Regulations by City Guide' }],
    type: 'article'
  },
  robots: { index: true, follow: true }
};

const faqs = [
  {
    question: "Do all Utah cities require permits for dumpster rentals?",
    answer: "Most Utah cities require permits for dumpsters placed on public property or right-of-way. Salt Lake City, West Valley City, Provo, Ogden, and Sandy all require permits. Some cities may not require permits for private property placement. Always check with your local building department to confirm requirements."
  },
  {
    question: "What materials are prohibited in dumpster rentals across Utah cities?",
    answer: "All Utah cities prohibit hazardous materials (paint, chemicals, batteries), electronics, medical waste, asbestos, tires, and liquids in standard dumpster rentals. Some cities have additional restrictions. Always check with your rental company and local regulations before disposing of questionable materials."
  },
  {
    question: "How much do dumpster permits cost in different Utah cities?",
    answer: "Dumpster permit costs vary by city: Salt Lake City ($25-50), West Valley City ($30), Provo ($25), Ogden ($35), Sandy ($30), and Tooele ($25-50). Costs may change, so always verify with your local building department."
  }
];

const cityRegulations = [
  {
    city: 'Salt Lake City',
    permitRequired: true,
    permitCost: '$25-50',
    permitContact: '(801) 535-6000',
    permitProcess: 'Apply online or in person at Building Services Division',
    placementRules: 'Permit required for public property or right-of-way placement. Private driveway placement may not require permit.',
    prohibitedMaterials: ['Hazardous waste', 'Electronics', 'Medical waste', 'Asbestos', 'Tires', 'Liquids'],
    specialRequirements: 'Must display permit on or near dumpster. Maximum 30-day rental period without extension.',
    weightLimits: 'Standard weight limits apply. Heavy materials may require special handling.',
    notes: 'Salt Lake City has strict enforcement. Make sure you have your permit before delivery.'
  },
  {
    city: 'West Valley City',
    permitRequired: true,
    permitCost: '$30',
    permitContact: '(801) 963-3200',
    permitProcess: 'Apply at Community Development Department',
    placementRules: 'Permit required for public property placement. Private property may not require permit.',
    prohibitedMaterials: ['Hazardous waste', 'Electronics', 'Medical waste', 'Asbestos', 'Tires'],
    specialRequirements: 'Permit must be visible. Standard 14-day rental period included.',
    weightLimits: 'Standard weight limits. Check with rental company for heavy materials.',
    notes: 'West Valley City processes permits quickly, usually within 1-2 business days.'
  },
  {
    city: 'Provo',
    permitRequired: true,
    permitCost: '$25',
    permitContact: '(801) 852-6400',
    permitProcess: 'Apply at Building Department',
    placementRules: 'Permit required for public property or right-of-way placement.',
    prohibitedMaterials: ['Hazardous waste', 'Electronics', 'Medical waste', 'Asbestos'],
    specialRequirements: 'Keep permit visible. Standard rental periods apply.',
    weightLimits: 'Standard limits. Heavy materials may incur additional fees.',
    notes: 'Provo has some of the lowest permit costs in Utah.'
  },
  {
    city: 'Ogden',
    permitRequired: true,
    permitCost: '$35',
    permitContact: '(801) 629-8200',
    permitProcess: 'Apply at Community Development Department',
    placementRules: 'Permit required for public property placement.',
    prohibitedMaterials: ['Hazardous waste', 'Electronics', 'Medical waste', 'Asbestos', 'Tires'],
    specialRequirements: 'Permit must be displayed. Standard rental terms apply.',
    weightLimits: 'Standard weight limits. Heavy materials require notification.',
    notes: 'Ogden permits are slightly more expensive but process quickly.'
  },
  {
    city: 'Sandy',
    permitRequired: true,
    permitCost: '$30',
    permitContact: '(801) 568-7100',
    permitProcess: 'Apply at Building Department',
    placementRules: 'Permit required for street or right-of-way placement.',
    prohibitedMaterials: ['Hazardous waste', 'Electronics', 'Medical waste', 'Asbestos'],
    specialRequirements: 'Display permit clearly. Standard rental periods.',
    weightLimits: 'Standard limits apply.',
    notes: 'Sandy has straightforward permit requirements.'
  },
  {
    city: 'Tooele',
    permitRequired: true,
    permitCost: '$25-50',
    permitContact: '(435) 843-2120',
    permitProcess: 'Apply at Building Department',
    placementRules: 'Permit required for public property or right-of-way.',
    prohibitedMaterials: ['Hazardous waste', 'Electronics', 'Medical waste', 'Asbestos'],
    specialRequirements: 'Standard permit display requirements.',
    weightLimits: 'Standard weight limits.',
    notes: 'Tooele permit costs vary based on placement location.'
  }
];

export default function WasteDisposalRegulationsByCity() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FAQSchema faqs={faqs} pageUrl="https://icondumpsters.com/guides/waste-disposal-regulations-by-city" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0d9488] via-teal-700 to-[#0d9488] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Waste Disposal Regulations by City: Complete Guide for Utah
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Every Utah city has different rules for dumpster rentals. Here's what you need to know to avoid fines and delays.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Introduction */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I've been doing dumpster rentals across Utah for over a decade, and let me tell you—the regulations vary way more than most people realize. What works in Salt Lake City might not fly in Provo. What's fine in Ogden could get you a fine in Sandy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I've seen customers get hit with violations because they didn't know their city required a permit. I've watched projects get delayed because someone assumed the rules were the same everywhere. And I've definitely had to turn around and drive back because a customer didn't have their permit ready.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This guide breaks down the waste disposal regulations for the major Utah cities we serve. I'm giving you the real, practical information you need—not some generic list that doesn't tell you what actually matters. By the time you're done reading, you'll know exactly what your city requires and how to avoid the common mistakes that cost people time and money.
              </p>
            </section>

            {/* City Regulations */}
            {cityRegulations.map((city, index) => (
              <section key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{city.city} Regulations</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Permit Information</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Permit Required:</strong> {city.permitRequired ? 'Yes' : 'No'}</li>
                      <li><strong>Cost:</strong> {city.permitCost}</li>
                      <li><strong>Contact:</strong> <a href={`tel:${city.permitContact.replace(/[^\d]/g, '')}`} className="text-[#0d9488] hover:text-teal-700">{city.permitContact}</a></li>
                      <li><strong>Process:</strong> {city.permitProcess}</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Prohibited Materials</h3>
                    <ul className="space-y-1 text-gray-700">
                      {city.prohibitedMaterials.map((material, i) => (
                        <li key={i}>• {material}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Placement Rules</h3>
                    <p className="text-gray-700 leading-relaxed">{city.placementRules}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Special Requirements</h3>
                    <p className="text-gray-700 leading-relaxed">{city.specialRequirements}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Weight Limits</h3>
                    <p className="text-gray-700 leading-relaxed">{city.weightLimits}</p>
                  </div>

                  {city.notes && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-gray-700"><strong>Important Note:</strong> {city.notes}</p>
                    </div>
                  )}
                </div>
              </section>
            ))}

            {/* Common Regulations */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Regulations Across All Utah Cities</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                While each city has its own specific rules, there are some regulations that apply pretty much everywhere in Utah. These are the ones you can count on, no matter which city you're in.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Universal Prohibited Materials</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Every city in Utah prohibits these materials in standard dumpster rentals:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    <li><strong>Hazardous waste:</strong> Paint, chemicals, batteries, fluorescent bulbs, pesticides</li>
                    <li><strong>Electronics:</strong> TVs, computers, monitors, cell phones, appliances with refrigerants</li>
                    <li><strong>Medical waste:</strong> Sharps, needles, medical equipment, pharmaceuticals</li>
                    <li><strong>Asbestos:</strong> Any asbestos-containing materials require special permits and disposal</li>
                    <li><strong>Tires:</strong> Most cities prohibit tires in standard dumpsters</li>
                    <li><strong>Liquids:</strong> No liquid waste, food waste, or contaminated materials</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    The penalties for violating these rules can be steep—anywhere from $50 to $1,000 per incident, depending on the material and the city. It's just not worth the risk.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Standard Weight Limits</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Most Utah cities follow similar weight limit guidelines:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>15-yard dumpsters: 2-3 tons</li>
                    <li>20-yard dumpsters: 3-4 tons</li>
                    <li>30-yard dumpsters: 4-6 tons</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    Exceeding these limits typically results in $55 per ton overage charges. If you're dealing with heavy materials like concrete, dirt, or roofing shingles, you might hit the weight limit before you fill the dumpster. Always discuss this with your rental company upfront.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Permit Display Requirements</h3>
                  <p className="text-gray-700 leading-relaxed">
                    If your city requires a permit (and most do for public placement), you need to keep it visible on or near the dumpster. Some cities require it to be attached to the dumpster itself. Others are okay with it being posted nearby. When in doubt, attach it directly to the dumpster—you can't go wrong that way.
                  </p>
                </div>
              </div>
            </section>

            {/* Tips Section */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tips for Navigating City Regulations</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Your City Early</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Don't wait until the day before you need the dumpster to call about permits. Most cities need 1-3 business days to process permit applications. Some can take longer during busy seasons. I always tell customers to call at least 3-5 days before they need the dumpster.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    When you call, have this information ready: your address, where you're placing the dumpster (driveway vs. street), how long you'll need it, and what size dumpster you're getting. The city will need these details for the permit.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Ask About Private Property Placement</h3>
                  <p className="text-gray-700 leading-relaxed">
                    If you can place the dumpster entirely on your private property (like your driveway) and it won't block any public access, you might not need a permit. But don't assume—call and ask. It's a 5-minute phone call that can save you $25-$50 and a lot of paperwork.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Know Your Prohibited Materials</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Before you start loading your dumpster, make sure you know what can't go in it. If you're not sure about something, call your rental company. It's free to ask, expensive to violate.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Common mistakes I see: people throw in old paint cans (hazardous waste), old TVs (electronics), or tires. All of these are prohibited and will result in extra fees or the dumpster being rejected at the disposal facility.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Keep Your Permit Visible</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Once you get your permit, don't just stick it in a drawer. Keep it visible on or near the dumpster. Code enforcement officers do check, and if they can't see your permit, you could get a citation. I've seen it happen more than once.
                  </p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="bg-gradient-to-br from-[#0d9488] to-teal-700 rounded-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Need Help Navigating Your City's Regulations?</h2>
              <p className="text-lg text-purple-100 leading-relaxed mb-6">
                I know this stuff can be confusing. Every city has different rules, and it's hard to keep track of what applies where. That's why we're here to help.
              </p>
              <p className="text-lg text-purple-100 leading-relaxed mb-6">
                When you call us for a quote, we'll walk you through the permit requirements for your specific city. We'll help you figure out if you need a permit, how to get one, and what materials you can and can't put in the dumpster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://icondumpsters.com/#quote-form"
                  className="bg-white text-[#0d9488] px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
                >
                  Get a Free Quote
                </a>
                <a
                  href="tel:(801) 918-6000"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white/10 transition-colors"
                >
                  Call (801) 918-6000
                </a>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick City Contacts</h3>
                <div className="space-y-3 text-sm">
                  {cityRegulations.map((city, i) => (
                    <div key={i}>
                      <strong>{city.city}:</strong><br />
                      <a href={`tel:${city.permitContact.replace(/[^\d]/g, '')}`} className="text-[#0d9488] hover:text-teal-700">{city.permitContact}</a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Guides</h3>
                <ul className="space-y-2">
                  <li><Link href="/guides/ultimate-guide-dumpster-rental-utah" className="text-[#0d9488] hover:text-teal-700">Ultimate Guide to Dumpster Rental</Link></li>
                  <li><Link href="/guides/utah-permits" className="text-[#0d9488] hover:text-teal-700">Utah Permits Guide</Link></li>
                  <li><Link href="/utah-waste-management-regulations" className="text-[#0d9488] hover:text-teal-700">Utah Waste Management Regulations</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InternalLinks />
    </div>
  );
}

