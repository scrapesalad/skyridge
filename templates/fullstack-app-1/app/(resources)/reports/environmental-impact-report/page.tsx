import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSchema from '@/app/components/FAQSchema';
import InternalLinks from '@/app/components/InternalLinks';

export const metadata: Metadata = {
  title: "Environmental Impact Report: Sustainable Waste Management in Utah | Icon Dumpsters",
  description: "Comprehensive environmental impact report on dumpster rental and waste management in Utah. Learn about recycling, sustainability practices, and environmental responsibility.",
  keywords: ['environmental impact dumpster rental', 'sustainable waste management utah', 'dumpster rental environmental impact', 'waste recycling utah', 'green dumpster rental'],
  alternates: { canonical: 'https://icondumpsters.com/reports/environmental-impact-report' },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: 'Environmental Impact Report: Sustainable Waste Management in Utah',
    description: 'Comprehensive environmental impact report on dumpster rental and waste management in Utah.',
    url: 'https://icondumpsters.com/reports/environmental-impact-report',
    images: [{ url: '/images/ca97086c-729c-480f-a90d-d117c1278945.webp', width: 1200, height: 630, alt: 'Environmental Impact Report' }],
    type: 'article'
  },
  robots: { index: true, follow: true }
};

const faqs = [
  {
    question: "What is the environmental impact of dumpster rentals?",
    answer: "Dumpster rentals have environmental impacts through transportation emissions, landfill usage, and waste processing. However, proper waste management, recycling, and responsible disposal can significantly reduce these impacts. Choosing the right dumpster size, separating recyclables, and using certified disposal facilities helps minimize environmental harm."
  },
  {
    question: "How can I make my dumpster rental more environmentally friendly?",
    answer: "To make dumpster rentals more eco-friendly: choose the right size to avoid waste, separate recyclable materials, avoid prohibited materials that require special handling, use certified disposal facilities, and consider recycling options for metal, wood, and cardboard. Some rental companies offer recycling services or can direct you to recycling facilities."
  },
  {
    question: "What happens to waste after dumpster pickup?",
    answer: "After pickup, waste is transported to certified disposal facilities (landfills or transfer stations). Materials are sorted, recyclables are separated when possible, and non-recyclable waste is properly disposed of. Hazardous materials are handled separately at specialized facilities. Reputable companies use certified facilities that follow environmental regulations."
  }
];

export default function EnvironmentalImpactReport() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FAQSchema faqs={faqs} pageUrl="https://icondumpsters.com/reports/environmental-impact-report" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Environmental Impact Report: Sustainable Waste Management in Utah
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            Understanding the environmental impact of waste management and how we can all do better.
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
                I've been in the waste management business for over a decade, and I've seen a lot of changes. When I first started, nobody really talked about environmental impact. You just threw stuff in a dumpster, and that was that. But things are different now, and I think that's a good thing.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The truth is, every dumpster rental has an environmental impact. There's the fuel used to deliver and pick up the dumpster. There's the space taken up in landfills. There's the processing and disposal of materials. But here's what I've learned: we can minimize that impact, and we should.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This report isn't about making you feel guilty. It's about giving you the information you need to make better choices. Because when you understand the impact, you can take steps to reduce it. And honestly? Most of those steps are pretty simple. They just require a little bit of planning and awareness.
              </p>
            </section>

            {/* Environmental Impact Overview */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding the Environmental Impact</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Let's start with the basics. What actually happens when you rent a dumpster? And what's the environmental cost?
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Transportation Emissions</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Every dumpster delivery and pickup requires a truck trip. Those trucks burn fuel, and that creates emissions. It's not huge—maybe 20-30 miles round trip for a typical delivery—but it adds up when you're doing hundreds of deliveries a month.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The good news? Most rental companies are consolidating routes and using more efficient trucks. Some are even starting to use alternative fuels. But transportation is still a factor, and it's one we can't eliminate completely.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Landfill Usage</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    This is the big one. Every dumpster load ends up somewhere, and most of it ends up in landfills. Landfills take up space, they can contaminate groundwater if not managed properly, and they produce methane gas as materials decompose.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Modern landfills are much better than they used to be. They have liners to prevent contamination, methane collection systems, and better management practices. But they still take up space, and space is finite.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The real issue? A lot of what goes into landfills could be recycled or reused. I've seen dumpsters full of materials that could have been recycled—metal, wood, cardboard, even some plastics. That's waste in the truest sense of the word.
                  </p>
                </div>

                <div className="border-l-4 border-amber-600 pl-4">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Waste Processing</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Before waste goes to a landfill, it usually goes through a transfer station or processing facility. These facilities sort materials, separate recyclables when possible, and prepare waste for final disposal.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The processing itself uses energy and resources. But it also creates opportunities for recycling and recovery. The better the processing, the more materials can be diverted from landfills. That's why it matters which disposal facilities your rental company uses.
                  </p>
                </div>
              </div>
            </section>

            {/* Recycling and Recovery */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Recycling and Material Recovery</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Here's where we can make a real difference. A lot of what goes into dumpsters can be recycled or reused. The problem? Most people don't separate it, so it all gets mixed together and ends up in a landfill.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Materials That Can Be Recycled</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Metal</h4>
                      <p className="text-sm text-gray-700">
                        Scrap metal (appliances, pipes, wire) can be recycled. Many scrap yards will even pay you for it. Don't fill your dumpster with metal—recycle it separately.
                      </p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Wood</h4>
                      <p className="text-sm text-gray-700">
                        Untreated wood can be recycled or reused. Some facilities turn it into mulch or wood chips. Clean, untreated lumber can even be reused for other projects.
                      </p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Cardboard</h4>
                      <p className="text-sm text-gray-700">
                        Cardboard is one of the easiest materials to recycle. Most cities have cardboard recycling programs. Don't waste dumpster space on it.
                      </p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Concrete</h4>
                      <p className="text-sm text-gray-700">
                        Clean concrete can be crushed and reused as aggregate. Some disposal facilities accept concrete separately and process it for reuse.
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    I know it's easier to just throw everything in the dumpster. But taking a few minutes to separate recyclables can make a real difference. And honestly? It can save you money too. If you're not filling your dumpster with recyclable materials, you might be able to use a smaller dumpster.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Separate Materials</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    You don't need a complicated system. Just set aside a few bins or areas for recyclables:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
                    <li><strong>Metal bin:</strong> Appliances, pipes, wire, any metal scrap</li>
                    <li><strong>Wood pile:</strong> Untreated lumber, pallets, clean wood</li>
                    <li><strong>Cardboard stack:</strong> All cardboard boxes and packaging</li>
                    <li><strong>Concrete pile:</strong> Clean concrete and masonry (no rebar or other materials mixed in)</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    When your project is done, take these materials to recycling facilities or scrap yards. Many will pick up large quantities. Some will even pay you for metal. It's worth the effort.
                  </p>
                </div>
              </div>
            </section>

            {/* Best Practices */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Environmental Best Practices</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Here are some practical steps you can take to minimize the environmental impact of your dumpster rental:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Choose the Right Size</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    This might seem obvious, but it's worth repeating: choose the right dumpster size for your project. Don't rent a 30-yard dumpster when a 20-yard would work. You're paying for space you don't need, and you're using resources unnecessarily.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    On the flip side, don't rent a dumpster that's too small and end up needing a second one. That's two deliveries, two pickups, and twice the transportation emissions. When in doubt, talk to your rental company about what size makes sense.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Separate Recyclables</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I know I've said this already, but it's important. Take the time to separate recyclable materials. Metal, wood, cardboard, and clean concrete can all be recycled. It takes a little extra effort, but it makes a real difference.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Avoid Prohibited Materials</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Prohibited materials (hazardous waste, electronics, medical waste, asbestos) require special handling and disposal. They can't go in standard dumpsters, and they shouldn't. These materials need to go to specialized facilities that can handle them safely.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    If you're dealing with prohibited materials, don't try to sneak them into your dumpster. That's not just illegal—it's dangerous. Contact your rental company or local waste management authority for proper disposal options.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Use Certified Disposal Facilities</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Not all disposal facilities are created equal. Certified facilities follow environmental regulations, have proper waste management practices, and often have better recycling and recovery programs.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    When you're choosing a dumpster rental company, ask about their disposal facilities. Do they use certified facilities? Do they have recycling programs? Do they track where waste goes? A good company will be transparent about this.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Don't Keep Dumpsters Longer Than Needed</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Most dumpster rentals include 7-14 days. If you need it longer, you'll pay extension fees. But there's also an environmental cost: the longer the dumpster sits, the longer it takes up space, and the more likely it is to become a nuisance or hazard.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    Plan your project timeline, and schedule pickup as soon as you're done loading. Don't let the dumpster sit empty for days or weeks. That's wasteful in every sense of the word.
                  </p>
                </div>
              </div>
            </section>

            {/* Our Commitment */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Environmental Commitment</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I'll be honest: we're not perfect. No waste management company is. But we're committed to doing better, and we're taking steps to reduce our environmental impact.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Certified Disposal Facilities</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We work with certified disposal facilities that follow environmental regulations and have proper waste management practices. These facilities have recycling and recovery programs, and they track where waste goes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Route Optimization</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We optimize our delivery and pickup routes to minimize fuel usage and emissions. We consolidate trips when possible, and we use efficient routing to reduce miles driven.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Education and Awareness</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We believe in educating our customers about environmental best practices. This report is part of that commitment. We want you to understand the impact, and we want to help you minimize it.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Improvement</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We're always looking for ways to improve. We're exploring alternative fuels for our trucks. We're working with disposal facilities to improve recycling and recovery rates. We're looking for new ways to reduce our environmental impact.
                  </p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Making a Difference Together</h2>
              <p className="text-lg text-green-100 leading-relaxed mb-6">
                The environmental impact of waste management is real, but it's not inevitable. When we all take small steps—choosing the right dumpster size, separating recyclables, using certified facilities—we can make a real difference.
              </p>
              <p className="text-lg text-green-100 leading-relaxed mb-6">
                I'm not asking you to be perfect. I'm just asking you to be aware. Because awareness is the first step toward change. And when we all make small changes, those changes add up.
              </p>
              <p className="text-lg text-green-100 leading-relaxed mb-6">
                If you have questions about environmental best practices, or if you want to know more about our environmental commitment, we're here to help. Give us a call, and let's talk about how we can work together to minimize environmental impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://icondumpsters.com/#quote-form"
                  className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Recycling Resources</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Metal:</strong> Local scrap yards</li>
                  <li>• <strong>Wood:</strong> Mulch facilities</li>
                  <li>• <strong>Cardboard:</strong> City recycling programs</li>
                  <li>• <strong>Concrete:</strong> Aggregate facilities</li>
                  <li>• <strong>Electronics:</strong> E-waste centers</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Resources</h3>
                <ul className="space-y-2">
                  <li><Link href="/guides/ultimate-guide-dumpster-rental-utah" className="text-[#0d9488] hover:text-teal-700">Ultimate Guide to Dumpster Rental</Link></li>
                  <li><Link href="/utah-waste-management-regulations" className="text-[#0d9488] hover:text-teal-700">Utah Waste Management Regulations</Link></li>
                  <li><Link href="/guides/waste-disposal-regulations-by-city" className="text-[#0d9488] hover:text-teal-700">Waste Disposal Regulations by City</Link></li>
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

