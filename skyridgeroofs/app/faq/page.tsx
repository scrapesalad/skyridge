import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Roofing FAQs | Sky Ridge Roofing - Your Questions Answered',
  description: 'Get answers to common roofing questions about roof replacement, repairs, insurance claims, materials, and more from Sky Ridge Roofing experts.',
  alternates: { canonical: canonicalUrl('/faq') },
  openGraph: {
    title: 'Roofing FAQs - Sky Ridge Roofing',
    description: 'Get answers to common roofing questions about roof replacement, repairs, insurance claims, and more.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How do I know if I need a roof replacement?',
    answer: 'Signs that you may need a roof replacement include: missing or damaged shingles, leaks or water damage, roof age over 20 years, granules in your gutters, sagging or drooping roof, and high energy bills. Our team can perform a free inspection to assess your roof\'s condition.',
  },
  {
    question: 'How long does a roof replacement take?',
    answer: 'Most residential roof replacements take 1-3 days, depending on the size and complexity of your roof. We work efficiently to minimize disruption to your daily life while ensuring quality workmanship.',
  },
  {
    question: 'Do you help with insurance claims?',
    answer: 'Yes! We specialize in helping homeowners navigate the insurance claims process. We can assess damage, document everything for your claim, communicate directly with your insurance company, and ensure you get the coverage you deserve.',
  },
  {
    question: 'What roofing materials do you offer?',
    answer: 'We offer a wide variety of roofing materials including asphalt shingles, metal roofing, tile, slate, synthetic materials, and flat roofing systems. Our team will help you choose the best material for your home, budget, and Utah\'s climate.',
  },
  {
    question: 'Do you offer financing options?',
    answer: 'Yes, we offer flexible financing options to make your roofing project affordable. We have competitive rates, multiple term options, and a quick approval process. Contact us to learn more about our financing plans.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, Sky Ridge Roofing is fully licensed and insured in the State of Utah. We carry comprehensive liability insurance and workers\' compensation to protect you and our team.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve all of Utah, including Salt Lake City, Provo, Ogden, West Valley City, Sandy, Orem, Layton, Taylorsville, St. George, Logan, and all surrounding areas. Contact us to confirm we service your location.',
  },
  {
    question: 'Do you provide free estimates?',
    answer: 'Absolutely! We provide free, no-obligation estimates for all our services. Our team will assess your roofing needs and provide a detailed, transparent estimate with no hidden fees.',
  },
  {
    question: 'What warranty do you offer?',
    answer: 'We offer comprehensive warranties on both materials and workmanship. The specific warranty depends on the materials chosen and the scope of work. We\'ll explain all warranty details before starting your project.',
  },
  {
    question: 'How do I choose the right roofing contractor?',
    answer: 'When choosing a roofing contractor, make sure they are licensed, insured, experienced, and have positive customer reviews. Check their credentials, ask for references, and get multiple estimates. Sky Ridge Roofing meets all these criteria and more.',
  },
  {
    question: 'How to install metal roofing?',
    answer: 'Metal roofing installation requires proper preparation, including removing old roofing, inspecting and repairing the deck, installing underlayment, and then securing metal panels with appropriate fasteners. For standing seam systems, panels are joined with concealed fasteners, while exposed-fastener systems use screws with washers. Proper flashing around valleys, chimneys, and edges is critical. We recommend hiring a professional roofing contractor like Sky Ridge Roofing to ensure proper installation, as incorrect installation can lead to leaks, wind damage, and premature failure. <a href="/services/metal-roofing" class="text-blue-600 hover:underline">Learn more about our metal roofing services</a>.',
  },
  {
    question: 'How to cut metal roofing?',
    answer: 'Metal roofing panels should be cut using appropriate tools to avoid damaging the protective coating. Common methods include using tin snips for small cuts, a circular saw with a metal-cutting blade, or a nibbler for precise cuts. Always wear safety equipment including gloves and eye protection. It\'s important to cut from the back side when possible to minimize chipping of the finish. For best results and to maintain warranty coverage, we recommend having a professional handle cutting and installation. <a href="/services/metal-roofing" class="text-blue-600 hover:underline">Contact us for professional metal roofing installation</a>.',
  },
  {
    question: 'What is TPO roofing?',
    answer: 'TPO (Thermoplastic Polyolefin) is a single-ply membrane roofing system commonly used for flat and low-slope commercial and residential roofs. It\'s a white or light-colored reflective membrane that helps reduce cooling costs. TPO roofing is known for its durability, resistance to UV radiation, and energy efficiency. The membrane is typically heat-welded at seams to create a watertight seal. TPO roofs can last 20-30 years with proper installation and maintenance. It\'s an excellent choice for commercial buildings and modern residential designs with flat roofs. <a href="/services/commercial-roofing" class="text-blue-600 hover:underline">Learn more about our commercial roofing services</a>.',
  },
  {
    question: 'What is EPDM roofing?',
    answer: 'EPDM (Ethylene Propylene Diene Monomer) is a synthetic rubber membrane used for flat and low-slope roofs. It\'s a durable, flexible material that\'s typically black in color and known for its excellent weather resistance and longevity. EPDM roofing can last 20-50 years depending on installation quality and maintenance. It\'s installed in large sheets with seams sealed using adhesive or tape. EPDM is popular for both commercial and residential flat roofs due to its cost-effectiveness and proven performance. It\'s particularly good at handling temperature extremes and UV exposure. <a href="/services/commercial-roofing" class="text-blue-600 hover:underline">Contact us for EPDM roofing installation</a>.',
  },
  {
    question: 'How to choose a roofing style?',
    answer: 'Choosing a roofing style depends on several factors: your home\'s architecture, local climate, budget, and personal preferences. Consider the slope of your roof—steep slopes work well with shingles, tiles, or metal, while flat roofs need specialized systems like TPO or EPDM. Think about durability needs—metal and slate last longest but cost more. Energy efficiency matters too—light-colored or reflective materials can reduce cooling costs. Your home\'s style should guide aesthetic choices—traditional homes often suit asphalt shingles or tiles, while modern homes may benefit from metal or flat roofing. We recommend consulting with a professional roofing contractor who can assess your specific situation and recommend the best options. <a href="/materials" class="text-blue-600 hover:underline">Explore our roofing materials guide</a>.',
  },
  {
    question: 'What are the most durable roofing materials?',
    answer: 'The most durable roofing materials ranked by lifespan are: 1) Slate roofing (100+ years) - natural stone that\'s fireproof and extremely long-lasting, 2) Metal roofing (50+ years) - particularly standing seam systems with quality coatings, 3) Tile roofing (50-100 years) - clay or concrete tiles that are fire-resistant and durable, 4) Synthetic slate/tile (40-60 years) - modern materials that mimic natural materials, 5) Asphalt shingles (20-30 years) - most common and cost-effective option. Durability also depends on proper installation, maintenance, and local weather conditions. In Utah\'s climate with freeze-thaw cycles, metal and tile perform exceptionally well. <a href="/materials" class="text-blue-600 hover:underline">Compare all roofing materials</a>.',
  },
  {
    question: 'What is a square in roofing?',
    answer: 'A "square" in roofing is a unit of measurement equal to 100 square feet of roof area. It\'s the standard unit used by roofing contractors to estimate materials and costs. For example, a roof that\'s 2,000 square feet equals 20 squares. Roofing materials like shingles are typically sold by the square, and labor costs are often calculated per square. Understanding roofing squares helps homeowners better understand estimates and material requirements. <a href="/calculators/roofing-square" class="text-blue-600 hover:underline">Use our roofing square calculator</a> to convert between square feet and roofing squares.',
  },
  {
    question: 'How much does roofing cost?',
    answer: 'Roofing costs vary widely based on several factors: roof size (measured in squares), material choice, roof complexity (pitch, valleys, dormers), location, and labor costs. Asphalt shingles typically cost $3,000-$7,000 per square (100 sq ft), metal roofing $7,000-$15,000 per square, tile $10,000-$20,000 per square, and slate $15,000-$30,000 per square. A typical 2,000 sq ft roof (20 squares) with asphalt shingles might cost $6,000-$14,000 total. Additional factors include tear-off of old roofing, decking repairs, and complexity. We provide free estimates to give you an accurate cost for your specific project. <a href="/calculators/roofing-cost" class="text-blue-600 hover:underline">Use our roofing cost calculator</a> for an estimate, or <a href="/contact" class="text-blue-600 hover:underline">contact us for a free quote</a>.',
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-96 mb-12">
          <Image
            src="/images/skyridge/skyridge_image_018.webp"
            alt="Frequently Asked Questions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 drop-shadow-2xl">
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Frequently Asked Questions</h1>
              <p className="text-xl drop-shadow-lg">Got Questions? We've Got Answers</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="mb-8 text-center">
            <p className="text-lg text-gray-600">
              Here are the most common questions Utah homeowners ask us before starting their roofing project. If you don't find an answer to your question, please reach out to us at{' '}
              <a href="mailto:Info@skyridgeco.com" className="text-blue-600 hover:text-blue-800">
                Info@skyridgeco.com
              </a>
              {' '}or call{' '}
              <a href="tel:8012526936" className="text-blue-600 hover:text-blue-800">
                801-252-6936
              </a>.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <details className="group">
                  <summary className="p-6 cursor-pointer list-none flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-800 pr-8">{faq.question}</h3>
                    <svg
                      className="w-6 h-6 text-blue-600 flex-shrink-0 transform group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </div>
                </details>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-blue-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl mb-6">Our roofing experts are here to help. Contact us today for personalized answers.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
              >
                Contact Us
              </a>
              <a
                href="tel:8012526936"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition inline-block"
              >
                Call: 801-252-6936
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
