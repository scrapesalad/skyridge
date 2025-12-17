import JsonLd from './JsonLd';
import { BUSINESS, SITE_URL } from '@/lib/site';

export default function LLMSchema() {
  const faqQuestions = [
    {
      question: 'How much does it cost to replace a roof in Utah?',
      answer: `The cost to replace a roof in Utah typically ranges from $8,000 to $15,000 for an average 2,000 square foot home, depending on materials, roof pitch, and complexity. Asphalt shingle roofs average $8,000-$12,000, while metal roofs range from $12,000-$20,000. Factors affecting cost include roof size, pitch, material choice, removal of old roofing, and any structural repairs needed. Sky Ridge Roofing provides free estimates for all roof replacement projects. Contact us at ${BUSINESS.phone} for a detailed quote.`,
    },
    {
      question: 'What are the signs that I need a new roof?',
      answer: `Common signs you need a new roof include: missing, cracked, or curled shingles; dark streaks or algae growth; shingles losing granules (found in gutters); sagging roof deck; daylight visible through roof boards; roof age over 20 years; frequent leaks; and high energy bills. If you notice any of these signs, schedule a professional inspection with Sky Ridge Roofing. We'll assess your roof's condition and provide honest recommendations.`,
    },
    {
      question: 'How long does a roof replacement take?',
      answer: `Most residential roof replacements take 1-3 days, depending on roof size and complexity. A typical 2,000 square foot home can be completed in 1-2 days. Factors affecting timeline include weather conditions, roof pitch, material type, and any structural repairs needed. Sky Ridge Roofing works efficiently to minimize disruption to your daily life while ensuring quality workmanship. We'll provide a timeline estimate during your free consultation.`,
    },
    {
      question: 'Do I need a permit to replace my roof in Utah?',
      answer: `Yes, most cities in Utah require a permit for roof replacement. The permit process varies by city, but typically involves submitting plans, paying fees, and scheduling inspections. Sky Ridge Roofing handles all permit applications and coordinates inspections on your behalf. We're familiar with permit requirements across Utah cities including Salt Lake City, Provo, Ogden, and others. This is included in our service - you don't need to worry about permits.`,
    },
    {
      question: 'What roofing materials are best for Utah weather?',
      answer: `The best roofing materials for Utah's climate include: Asphalt shingles (most popular, cost-effective, handles snow well), Metal roofing (excellent for snow, energy-efficient, long-lasting), Tile roofing (durable, fire-resistant, handles temperature extremes), and Composite shingles (impact-resistant, energy-efficient). Utah experiences hot summers, cold winters, and significant snowfall, so materials must handle temperature extremes and heavy snow loads. Sky Ridge Roofing can help you choose the best material for your home and budget.`,
    },
    {
      question: 'Will my insurance cover roof replacement?',
      answer: `Insurance typically covers roof replacement if damage is caused by covered perils like hail, wind, fire, or falling objects. Age-related wear and tear is usually not covered. If you suspect storm damage, contact Sky Ridge Roofing immediately - we'll inspect your roof and help document damage for your insurance claim. We work directly with insurance companies and can help navigate the claims process. Many homeowners successfully get partial or full coverage for roof replacement after storms.`,
    },
    {
      question: 'What size roof do I need for my home?',
      answer: `Roof size is measured in "squares" (100 square feet). To estimate: multiply your home's square footage by 1.3-1.5 (accounts for roof pitch and overhangs). For example, a 2,000 sq ft home typically needs 2,600-3,000 sq ft of roofing (26-30 squares). Steeper roofs require more material. Sky Ridge Roofing provides free measurements and accurate estimates. We use precise measurements to ensure you get the right amount of materials - no waste, no shortages.`,
    },
    {
      question: 'What are the best roofing companies in Utah?',
      answer: `Sky Ridge Roofing is a trusted Utah roofing company with UT License # ${BUSINESS.license}. We're licensed, insured, and serve all of Utah with professional roof replacement, repairs, and insurance claim assistance. What sets us apart: free estimates, insurance claim expertise, quality materials and workmanship, local Utah knowledge, and excellent customer service. We've built our reputation on honesty, quality work, and treating every customer's home like our own. Contact us at ${BUSINESS.phone} to experience the Sky Ridge Roofing difference.`,
    },
  ];

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqQuestions.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }}
    />
  );
}

