export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  pageUrl: string;
}

export default function FAQSchema({ faqs, pageUrl }: FAQSchemaProps) {
  // Clean answers to remove HTML/JSX links for schema (keep plain text)
  const cleanAnswer = (answer: string): string => {
    // Remove link tags but keep the text
    return answer
      .replace(/<Link[^>]*>(.*?)<\/Link>/gi, '$1')
      .replace(/<a[^>]*>(.*?)<\/a>/gi, '$1')
      .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Markdown links
      .trim();
  };

  // Ensure pageUrl is absolute
  const absolutePageUrl = pageUrl.startsWith('http') 
    ? pageUrl 
    : `https://icondumpsters.com${pageUrl.startsWith('/') ? pageUrl : '/' + pageUrl}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absolutePageUrl}#faq`,
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": cleanAnswer(faq.answer)
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
  );
}

// Common FAQ data for dumpster rental topics
export const dumpsterRentalFAQs = [
  {
    question: "What size dumpster do I need for my project?",
    answer: "Dumpster size depends on your project type. For home cleanouts, a 10-15 yard dumpster usually works. For construction projects, 20-30 yards is common. For large renovations, consider 40 yards. Contact us for a free consultation to determine the right size for your specific project."
  },
  {
    question: "How much does dumpster rental cost?",
    answer: "Dumpster rental costs vary by size and location. 10-yard dumpsters typically cost $200-400, 20-yard dumpsters $300-500, and 40-yard dumpsters $400-700. Prices include delivery, pickup, and disposal fees. Contact us for a free quote based on your specific needs."
  },
  {
    question: "Do I need a permit for a dumpster?",
    answer: "Permit requirements vary by location. In most residential areas, you don't need a permit if the dumpster is on your property. If placing on the street or sidewalk, you'll likely need a permit from your city. We can help you determine permit requirements for your location."
  },
  {
    question: "How long can I keep the dumpster?",
    answer: "Most dumpster rentals include 7-14 days of rental time. Extended rentals are usually available for an additional fee. We offer flexible rental periods to accommodate your project timeline. Contact us to discuss your specific needs."
  },
  {
    question: "What can I put in a dumpster?",
    answer: "You can put most construction debris, household items, furniture, appliances, and general waste. Prohibited items include hazardous materials, chemicals, tires, batteries, and medical waste. Contact us for a complete list of acceptable and prohibited items."
  }
];

export const constructionWasteFAQs = [
  {
    question: "How do I sort construction waste?",
    answer: "Separate materials by type: wood, metal, concrete, drywall, and general debris. This helps with recycling and can reduce disposal costs. Some materials like concrete and metal can be recycled. Contact us for guidance on proper sorting for your project."
  },
  {
    question: "Can construction waste be recycled?",
    answer: "Yes, many construction materials can be recycled. Concrete, metal, wood, and drywall are commonly recycled. Recycling can reduce disposal costs and environmental impact. We work with recycling facilities to maximize the amount of waste diverted from landfills."
  },
  {
    question: "What's the difference between C&D waste and regular waste?",
    answer: "Construction and demolition (C&D) waste includes materials from construction, renovation, and demolition projects. This differs from regular household waste and requires special handling and disposal methods. C&D waste often has higher recycling potential."
  }
];

export const homeRenovationFAQs = [
  {
    question: "How do I estimate renovation waste?",
    answer: "Estimate waste by calculating the volume of materials being removed. A general rule is 1-2 cubic yards per 100 square feet of renovation. Kitchen remodels typically generate 2-4 yards, bathroom remodels 1-2 yards. Contact us for a detailed estimate."
  },
  {
    question: "Should I rent multiple small dumpsters or one large one?",
    answer: "One large dumpster is usually more cost-effective than multiple small ones. However, consider space constraints and project timeline. If you have limited space, multiple smaller dumpsters might work better. We can help you determine the best approach."
  },
  {
    question: "How do I prepare for dumpster delivery?",
    answer: "Clear the delivery area of vehicles and obstacles. Ensure there's enough space for the truck to maneuver. The area should be level and accessible. We'll contact you before delivery to confirm the location and any special requirements."
  }
];

export const residentialWasteFAQs = [
  {
    question: "What size dumpster do I need for my home project?",
    answer: "Dumpster size depends on your project type and scope. For garage cleanouts, 15 yards is usually sufficient. For kitchen remodels, 20 yards is common. For major renovations, 30 yards may be needed. Contact us for a free consultation to determine the right size for your specific project."
  },
  {
    question: "How much does residential dumpster rental cost?",
    answer: "Residential dumpster rental costs vary by size, location, and rental duration. 15-yard dumpsters typically cost $200-400, 20-yard dumpsters $300-500, and 30-yard dumpsters $400-700. Prices include delivery, pickup, and disposal fees. We offer competitive pricing for homeowners."
  },
  {
    question: "Do I need a permit for a residential dumpster?",
    answer: "Permit requirements vary by location and placement. If placing on your private property (driveway, yard), permits are usually not required. If placing on the street, you'll need a permit from your city. We can help you determine permit requirements and assist with the application process."
  },
  {
    question: "How long can I keep the dumpster for my home project?",
    answer: "Most residential dumpster rentals include 7-14 days of rental time. Extended rentals are available for longer projects. We offer flexible rental periods to accommodate your project timeline. Contact us to discuss your specific needs and we'll create a rental schedule that works for you."
  },
  {
    question: "What types of waste can I put in a residential dumpster?",
    answer: "Residential dumpsters can accept most household items, furniture, appliances, construction debris, yard waste, and general trash. Prohibited items include hazardous materials, chemicals, tires, batteries, and medical waste. Contact us for a complete list of acceptable and prohibited items for your specific project."
  },
  {
    question: "Do you offer same-day delivery for residential projects?",
    answer: "Yes, we offer same-day delivery throughout Utah when available. Call us early in the day to check availability and schedule same-day service. We understand that residential projects often have urgent timelines and we do our best to accommodate your needs."
  },
  {
    question: "Can I place the dumpster on my driveway?",
    answer: "Yes, you can typically place the dumpster on your driveway. This is often the preferred location as it doesn't require a permit and is easily accessible. Make sure the area is clear of vehicles and obstacles before delivery. We'll work with you to find the best placement option."
  },
  {
    question: "What if I need to extend my rental period?",
    answer: "We offer flexible rental periods and can extend your rental if needed. Simply contact us before your scheduled pickup date and we'll arrange for an extension. Additional fees may apply for extended rentals, but we'll always be transparent about costs."
  }
];

// Pricing and cost FAQs
export const pricingFAQs = [
  {
    question: "How much to rent a dumpster for 1 week?",
    answer: "Dumpster rental for one week typically costs $299-$450 depending on size. Our 15-yard dumpster starts at $299 for 7 days, 20-yard dumpsters start at $349, and 30-yard dumpsters start at $450. All prices include delivery, pickup, and disposal fees. The standard rental period is 7 days, so you get a full week included in the base price. Contact us for a free quote tailored to your specific project and location."
  },
  {
    question: "How much to rent a small dumpster for a week?",
    answer: "Small dumpster rentals (10-15 yards) for one week typically cost $299-$349. Our 15-yard dumpster starts at $299 for a 7-day rental, which includes delivery, pickup, and disposal. This size is perfect for small projects like garage cleanouts, small bathroom remodels, or yard waste removal. For even smaller needs, we offer 10-yard dumpsters starting at $249. All prices are transparent with no hidden fees. Get a free quote to see exact pricing for your location."
  },
  {
    question: "How much does junk removal charge?",
    answer: "Junk removal services typically charge $150-$500 per truckload, with most companies charging $200-$400 for a standard pickup. Pricing depends on volume, item types, and location. Many junk removal companies charge by the truckload or by volume, with additional fees for heavy items, stairs, or difficult access. For comparison, a dumpster rental often provides better value for larger projects, as you get 7 days of use and can fill it at your own pace. Contact us to compare costs for your specific project."
  },
  {
    question: "Is renting a dumpster cheaper than junk removal?",
    answer: "For most projects with significant debris, dumpster rental is typically cheaper than junk removal. Dumpster rentals provide better value when you have multiple items, ongoing projects, or need time to fill the container. A 15-yard dumpster rental starts at $299 for 7 days, while junk removal typically costs $200-$400 per truckload. If you need multiple pickups, dumpster rental becomes significantly more cost-effective. However, for single-item removal or very small amounts, junk removal may be more convenient. We can help you determine which option makes the most sense for your project."
  },
  {
    question: "Is junk removal or dumpster rental cheaper?",
    answer: "Dumpster rental is usually cheaper for projects with substantial debris or ongoing work. A dumpster gives you 7 days to fill it at your own pace, while junk removal charges per truckload. For example, a 20-yard dumpster rental starts at $349 for a week, while junk removal typically costs $200-$400 per pickup. If you need 2-3 pickups, the dumpster rental saves money. However, for single-item removal or very small amounts, junk removal may be more convenient. The best choice depends on your project size, timeline, and debris volume. Contact us for a free comparison quote."
  },
  {
    question: "What is the most affordable way to get rid of junk?",
    answer: "The most affordable way to get rid of junk depends on your situation. For large amounts of debris or ongoing projects, dumpster rental is typically the most cost-effective option. Our 15-yard dumpster starts at $299 for 7 days, giving you time to fill it completely. For smaller amounts, you might consider: 1) Donating usable items to charity, 2) Selling items online, 3) Taking items to a local transfer station yourself (if you have a truck), or 4) Scheduling a single junk removal pickup. For most homeowners with multiple items or renovation debris, dumpster rental provides the best value. Contact us for a free quote to see what works best for your project."
  }
];

// Size and capacity FAQs
export const sizeCapacityFAQs = [
  {
    question: "Will a couch fit in a 10 yard dumpster?",
    answer: "Yes, a standard couch will typically fit in a 10-yard dumpster, but it depends on the couch size and what else you're disposing of. A 10-yard dumpster measures approximately 12 feet long by 8 feet wide by 3.5 feet deep. Most sofas are 6-8 feet long, so they'll fit lengthwise. However, if you have multiple large items or a lot of other debris, you may want to consider a 15-yard or 20-yard dumpster for more space. For a single couch or a few pieces of furniture, a 10-yard dumpster should work. Contact us to discuss your specific items and we'll recommend the right size."
  },
  {
    question: "What size dumpster do I need for furniture removal?",
    answer: "For furniture removal, the size depends on how much furniture you're disposing of. A 10-yard dumpster can typically hold 2-3 large pieces of furniture (like a couch, mattress, and dresser). A 15-yard dumpster works well for a room full of furniture (5-8 pieces). A 20-yard dumpster is ideal for multiple rooms or an entire house cleanout (10-15 pieces). Keep in mind that furniture takes up space quickly, so it's often better to choose a slightly larger size than to need a second dumpster. Contact us with a list of items and we'll recommend the perfect size."
  }
];
