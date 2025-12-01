import React from 'react';
import Link from 'next/link';
import FAQSchema, { dumpsterRentalFAQs, residentialWasteFAQs, constructionWasteFAQs } from './FAQSchema';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQItem[];
  title?: string;
  description?: string;
  showSchema?: boolean;
  pageUrl?: string;
  className?: string;
}

// Helper function to render text with internal links
function renderWithLinks(text: string): React.ReactNode {
  // Common internal link patterns
  const linkPatterns = [
    { pattern: /dumpster size guide/gi, url: '/dumpster-size-guide-utah', text: 'dumpster size guide' },
    { pattern: /dumpster size calculator/gi, url: '/dumpster-calculator', text: 'dumpster size calculator' },
    { pattern: /dumpster rental cost/gi, url: '/dumpster-rental-cost-calculator', text: 'dumpster rental cost' },
    { pattern: /dumpster rental pricing/gi, url: '/dumpster-prices', text: 'dumpster rental pricing' },
    { pattern: /dumpster permit/gi, url: '/utah-dumpster-permits-guide', text: 'dumpster permit' },
    { pattern: /dumpster permits/gi, url: '/utah-dumpster-permits-guide', text: 'dumpster permits' },
    { pattern: /15-yard dumpster/gi, url: '/15-yard-dumpster-rental', text: '15-yard dumpster' },
    { pattern: /20-yard dumpster/gi, url: '/20-yard-dumpster-rental', text: '20-yard dumpster' },
    { pattern: /30-yard dumpster/gi, url: '/30-yard-dumpster-rental', text: '30-yard dumpster' },
    { pattern: /dumpster sizes/gi, url: '/dumpster-sizes', text: 'dumpster sizes' },
    { pattern: /roll-off dumpster/gi, url: '/services/roll-off-dumpster-rental', text: 'roll-off dumpster' },
    { pattern: /same-day delivery/gi, url: '/services/same-day-dumpster-delivery', text: 'same-day delivery' },
    { pattern: /dumpster rental near me/gi, url: '/dumpster-rentals-near-me', text: 'dumpster rental near me' },
    { pattern: /dumpster rental services/gi, url: '/services', text: 'dumpster rental services' },
    { pattern: /contact us/gi, url: '/contact', text: 'contact us' },
    { pattern: /schedule delivery/gi, url: '/schedule-delivery-pickup', text: 'schedule delivery' },
    { pattern: /FAQ/gi, url: '/faq', text: 'FAQ' },
    { pattern: /frequently asked questions/gi, url: '/faq', text: 'frequently asked questions' },
    { pattern: /contact us/gi, url: '/contact', text: 'contact us' },
    { pattern: /quote/gi, url: '/#quote-form', text: 'quote' },
    { pattern: /free quote/gi, url: '/#quote-form', text: 'free quote' },
  ];

  const parts: (string | React.ReactElement)[] = [];
  let remainingText = text;
  let lastIndex = 0;

  // Find all matches and their positions
  const matches: Array<{ start: number; end: number; url: string; text: string }> = [];
  
  linkPatterns.forEach(({ pattern, url, text: linkText }) => {
    const regex = new RegExp(pattern);
    let match;
    while ((match = regex.exec(remainingText)) !== null) {
      matches.push({
        start: match.index,
        end: match.index + match[0].length,
        url,
        text: linkText,
      });
    }
  });

  // Sort matches by start position
  matches.sort((a, b) => a.start - b.start);

  // Build the parts array with text and links
  let currentIndex = 0;
  matches.forEach((match) => {
    // Add text before the match
    if (match.start > currentIndex) {
      parts.push(remainingText.slice(currentIndex, match.start));
    }
    // Add the link
    parts.push(
      <Link key={`${match.start}-${match.end}`} href={match.url} className="text-[#0d9488] hover:text-teal-700 underline font-semibold">
        {remainingText.slice(match.start, match.end)}
      </Link>
    );
    currentIndex = match.end;
  });

  // Add remaining text
  if (currentIndex < remainingText.length) {
    parts.push(remainingText.slice(currentIndex));
  }

  // If no matches found, return the original text
  if (parts.length === 0) {
    return text;
  }

  return <>{parts}</>;
}

export default function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  description,
  showSchema = true,
  pageUrl = 'https://icondumpsters.com',
  className = '',
}: FAQSectionProps) {
  // Default FAQs if none provided
  const defaultFAQs: FAQItem[] = dumpsterRentalFAQs.slice(0, 5);

  const finalFAQs = faqs && faqs.length > 0 ? faqs : defaultFAQs;

  return (
    <>
      {showSchema && <FAQSchema faqs={finalFAQs} pageUrl={pageUrl} />}
      <section className={`py-16 bg-white ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d9488] mb-4">
              {title}
            </h2>
            {description && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {description}
              </p>
            )}
            {!description && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about dumpster rental services in Utah. 
                For more information, visit our <Link href="/dumpster-rental-faq" className="text-[#0d9488] hover:text-teal-700 underline font-semibold">complete FAQ page</Link>.
              </p>
            )}
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {finalFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#0d9488] mb-3 flex items-start">
                  <span className="bg-[#0d9488] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  {faq.question}
                </h3>
                <div className="ml-11">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {renderWithLinks(faq.answer)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Link to full FAQ page */}
          <div className="text-center mt-12">
            <Link
              href="/dumpster-rental-faq"
              className="inline-block bg-[#0d9488] text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

