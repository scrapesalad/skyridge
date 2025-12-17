import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Roofing FAQs | Sky Ridge Roofing - Your Questions Answered',
  description: 'Get answers to common roofing questions about roof replacement, repairs, insurance claims, materials, and more from Sky Ridge Roofing experts.',
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
    answer: 'Yes, Sky Ridge Roofing is fully licensed and insured in the State of Utah (License # 14235218-5501). We carry comprehensive liability insurance and workers\' compensation to protect you and our team.',
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
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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
