import { Metadata } from "next";
import Link from "next/link";
import ImageWithFallback from "@/app/components/ImageWithFallback";
import QuoteFormSection from "@/app/components/QuoteFormSection";
import ArticleSchema from "@/app/components/ArticleSchema";
import FAQSchema from "@/app/components/FAQSchema";

export const metadata: Metadata = {
  title: "Dumpster Rental FAQ - Common Questions & Answers | Icon...",
  description: "Get answers to frequently asked questions about dumpster rental in Utah. Learn about sizes, pricing, permits, delivery, and more. Call (801) 918-6000 for...",
  keywords: "dumpster rental FAQ, dumpster rental questions, Utah dumpster rental FAQ, dumpster sizes FAQ, dumpster rental cost, dumpster delivery, dumpster permits, Icon Dumpsters FAQ",
  alternates: {
    canonical: 'https://icondumpsters.com/faq',
  },
  openGraph: {
    title: "Dumpster Rental FAQ - Common Questions & Answers | Icon Dumpsters",
    description: "Get answers to frequently asked questions about dumpster rental in Utah. Learn about sizes, pricing, permits, delivery, and more. Call (801) 918-6000 for expert assistance.",
    url: 'https://icondumpsters.com/faq',
    siteName: 'Icon Dumpsters',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://icondumpsters.com/images/optimized/-2484955712329217818-enhance-2.1x-textai.jpg',
        width: 1200,
        height: 630,
        alt: 'Dumpster Rental FAQ - Common Questions and Answers',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dumpster Rental FAQ - Common Questions & Answers | Icon Dumpsters Utah",
    description: "Get answers to frequently asked questions about dumpster rental in Utah. Learn about sizes, pricing, permits, delivery, and more.",
    images: ['https://icondumpsters.com/images/optimized/-2484955712329217818-enhance-2.1x-textai.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQPage() {
  function renderWithLinks(text: string) {
    const parts: (string | React.ReactElement)[] = [];
    const regex = /(\/[-a-zA-Z0-9\/]+)/g;
    let lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = regex.exec(text)) !== null) {
      const [match] = m;
      if (m.index > lastIndex) parts.push(text.slice(lastIndex, m.index));
      parts.push(
        <Link key={`${match}-${parts.length}`} href={match} className="text-[#0d9488] hover:text-teal-700 font-semibold">
          {match}
        </Link>
      );
      lastIndex = m.index + match.length;
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex));
    return <>{parts}</>;
  }
  const faqData = [
    {
      category: "Dumpster Sizes & Selection",
      questions: [
        {
          question: "What dumpster sizes do you offer?",
          answer: "We offer six dumpster options: 15-yard, 20-yard, and 30-yard roll-off dumpsters for general waste, plus specialized 10-yard clean dirt disposal, 10-yard mixed load disposal (standard weight allowance), and 12-yard concrete disposal dumpsters. The 15-yard is perfect for small projects like garage cleanouts, the 20-yard is ideal for medium renovations, and the 30-yard is best for large construction projects. Our specialized dumpsters are perfect for dirt, soil, concrete, and heavy material projects. Learn more: /dumpster-sizes"
        },
        {
          question: "How do I choose the right dumpster size?",
          answer: "Consider your project type and volume. A 15-yard dumpster holds about 3-4 pickup truck loads, a 20-yard holds 4-6 loads, and a 30-yard holds 6-8 loads. For reference, a 15-yard dumpster is 14.5' × 7.75' × 4.67' (L × W × D). Our team can help you choose the perfect size for your project. See /dumpster-sizes and /how-to-choose-dumpster-size"
        },
        {
          question: "Will a couch fit in a 10 yard dumpster?",
          answer: "Yes, a standard couch will typically fit in a 10-yard dumpster, but it depends on the couch size and what else you're disposing of. A 10-yard dumpster measures approximately 12 feet long by 8 feet wide by 3.5 feet deep. Most sofas are 6-8 feet long, so they'll fit lengthwise. However, if you have multiple large items or a lot of other debris, you may want to consider a 15-yard or 20-yard dumpster for more space. For a single couch or a few pieces of furniture, a 10-yard dumpster should work. Contact us to discuss your specific items and we'll recommend the right size."
        },
        {
          question: "What size dumpster do I need for furniture removal?",
          answer: "For furniture removal, the size depends on how much furniture you're disposing of. A 10-yard dumpster can typically hold 2-3 large pieces of furniture (like a couch, mattress, and dresser). A 15-yard dumpster works well for a room full of furniture (5-8 pieces). A 20-yard dumpster is ideal for multiple rooms or an entire house cleanout (10-15 pieces). Keep in mind that furniture takes up space quickly, so it's often better to choose a slightly larger size than to need a second dumpster. Contact us with a list of items and we'll recommend the perfect size."
        },
        {
          question: "What are the dimensions of your dumpsters?",
          answer: "Our 15-yard dumpster is 14.5' × 7.75' × 4.67' (L × W × D), the 20-yard is 17.08' × 7.54' × 5.00' (L × W × D), and the 30-yard is 22.0' × 7.92' × 6.0' (L × W × D). All dumpsters are roll-off containers designed for easy loading and unloading."
        }
      ]
    },
    {
      category: "Pricing & Costs",
      questions: [
        {
          question: "How much does dumpster rental cost?",
          answer: "Dumpster rental costs vary based on size, rental duration, and location. Our 15-yard dumpsters start around $300-400, 20-yard dumpsters around $400-500, and 30-yard dumpsters around $500-600. This typically includes delivery, pickup, and disposal fees. Get an instant estimate: /dumpster-calculator or request a quote: /freequote"
        },
        {
          question: "How much to rent a dumpster for 1 week?",
          answer: "Dumpster rental for one week typically costs $299-$450 depending on size. Our 15-yard dumpster starts at $299 for 7 days, 20-yard dumpsters start at $349, and 30-yard dumpsters start at $450. All prices include delivery, pickup, and disposal fees. The standard rental period is 7 days, so you get a full week included in the base price. Contact us for a free quote tailored to your specific project and location."
        },
        {
          question: "How much to rent a small dumpster for a week?",
          answer: "Small dumpster rentals (10-15 yards) for one week typically cost $249-$349. Our 15-yard dumpster starts at $299 for a 7-day rental, which includes delivery, pickup, and disposal. This size is perfect for small projects like garage cleanouts, small bathroom remodels, or yard waste removal. For even smaller needs, we offer 10-yard dumpsters starting at $249. All prices are transparent with no hidden fees. Get a free quote to see exact pricing for your location."
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
          question: "How much does junk removal charge?",
          answer: "Junk removal services typically charge $150-$500 per truckload, with most companies charging $200-$400 for a standard pickup. Pricing depends on volume, item types, and location. Many junk removal companies charge by the truckload or by volume, with additional fees for heavy items, stairs, or difficult access. For comparison, a dumpster rental often provides better value for larger projects, as you get 7 days of use and can fill it at your own pace. Contact us to compare costs for your specific project."
        },
        {
          question: "What is the most affordable way to get rid of junk?",
          answer: "The most affordable way to get rid of junk depends on your situation. For large amounts of debris or ongoing projects, dumpster rental is typically the most cost-effective option. Our 15-yard dumpster starts at $299 for 7 days, giving you time to fill it completely. For smaller amounts, you might consider: 1) Donating usable items to charity, 2) Selling items online, 3) Taking items to a local transfer station yourself (if you have a truck), or 4) Scheduling a single junk removal pickup. For most homeowners with multiple items or renovation debris, dumpster rental provides the best value. Contact us for a free quote to see what works best for your project."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No hidden fees! Our pricing is transparent and includes delivery, pickup, and standard disposal fees. Additional charges may apply only for overweight loads (over 2 tons) or extended rental periods beyond the standard 7-14 days. We'll always discuss any potential additional costs upfront."
        },
        {
          question: "Do you offer discounts for longer rentals?",
          answer: "Yes, we offer competitive rates for extended rentals. If you need a dumpster for more than 14 days, we can work with you on pricing. We also offer discounts for contractors and repeat customers. Call us to discuss your specific needs."
        },
        {
          question: "Do you have specialized dumpsters for dirt and concrete?",
          answer: "Yes! We offer specialized dumpsters for heavy materials: 10-yard clean dirt disposal (flat rate, no weight limit), 10-yard mixed load disposal (standard weight allowance), and 12-yard concrete disposal (flat rate, perfect for concrete, asphalt, brick, and stone). These are ideal for landscaping projects, concrete demolition, and heavy material disposal. Learn more: /services/concrete-dumpster-rental and /services/dirt-dumpster-rental"
        },
        {
          question: "How much does it cost to rent a dumpster in Salt Lake City?",
          answer: "Dumpster rental costs in Salt Lake City typically range from $375 to $635, depending on the size you need. A 15-yard dumpster starts at $375-$415, a 20-yard dumpster costs $415-$465, and a 30-yard dumpster ranges from $465-$525. These prices include delivery, pickup, disposal fees up to the weight allowance, and basic permit assistance. Salt Lake City may require a permit for street placement ($25-$50), which we can help you obtain. Learn more: /pricing/dumpster-rental-cost-salt-lake-city"
        },
        {
          question: "How much does it cost to rent a dumpster in Utah?",
          answer: "Dumpster rental costs across Utah range from $299 to $650, with an average of $425. Prices vary by city due to different disposal facility fees, distance to landfills, and local permit requirements. Salt Lake City, being the largest metro area, typically has rates in the $375-$635 range. Smaller Utah cities may have slightly lower rates due to proximity to disposal facilities. All our quotes include delivery, pickup, and standard disposal fees. Learn more: /pricing/dumpster-rental-cost-salt-lake-city"
        },
        {
          question: "Is it cheaper to get a dumpster or go to the dump?",
          answer: "For most projects, renting a dumpster is more cost-effective and convenient than making multiple trips to the dump. A 15-yard dumpster rental ($375-$415) holds about 3-4 pickup truck loads. If you make 3-4 trips to the dump yourself, you'd pay $25-$50 per trip in disposal fees ($75-$200 total), plus your time, fuel costs, vehicle wear, and the hassle of loading/unloading. Dumpster rental gives you 7 days to fill it at your own pace, includes all disposal fees, and saves you time and effort. However, for very small amounts (less than one truckload), a single dump trip might be cheaper. Learn more: /pricing/dumpster-rental-cost-salt-lake-city"
        },
        {
          question: "What is the minimum price for junk removal?",
          answer: "The minimum price for junk removal services in Salt Lake City typically starts around $150-$200 for a single truckload pickup. Most junk removal companies charge $200-$400 per truckload, with additional fees for heavy items, stairs, or difficult access. In comparison, our 15-yard dumpster rental starts at $375 for 7 days, which holds 3-4 truckloads worth of debris. For projects with multiple items or ongoing work, dumpster rental provides better value. However, for single-item removal or very small amounts, junk removal may be more convenient. Learn more: /pricing/dumpster-rental-cost-salt-lake-city"
        },
        {
          question: "Is renting a dumpster worth it?",
          answer: "Yes, renting a dumpster is worth it for most projects because it saves time, money, and effort. Benefits include: 1) Cost-effective for multiple loads (one dumpster holds 3-4 truckloads), 2) Convenience (7 days to fill at your own pace), 3) All-inclusive pricing (delivery, pickup, disposal fees included), 4) No vehicle wear or fuel costs, 5) Professional disposal and recycling, 6) Suitable for ongoing projects. Dumpster rental is especially worth it for home renovations, cleanouts, construction projects, or any project generating substantial debris. For very small amounts (less than one truckload), a single dump trip might be more economical. Learn more: /pricing/dumpster-rental-cost-salt-lake-city"
        },
        {
          question: "What size dumpster is rented the most?",
          answer: "The 20-yard dumpster is the most popular size rented in Salt Lake City. It's the perfect middle ground for most projects, holding 4-6 pickup truck loads of debris. The 20-yard dumpster is ideal for whole-home decluttering, medium renovations, light commercial refreshes, and multi-room cleanouts. It costs $415-$465 and includes 3 tons of weight allowance. While the 15-yard is great for smaller projects and the 30-yard for large construction, the 20-yard dumpster offers the best balance of capacity and price for most Salt Lake City homeowners and contractors. Learn more: /pricing/dumpster-rental-cost-salt-lake-city"
        }
      ]
    },
    {
      category: "Delivery & Pickup",
      questions: [
        {
          question: "How quickly can you deliver a dumpster?",
          answer: "We typically offer same-day or next-day delivery for most areas in Utah. During peak season (spring and summer), we recommend booking 2-3 days in advance to ensure availability. For urgent needs, call us and we'll do our best to accommodate you."
        },
        {
          question: "Where can you place the dumpster on my property?",
          answer: "We can place dumpsters on driveways, parking lots, or other hard surfaces. We need about 60 feet of clearance for delivery and pickup. We cannot place dumpsters on grass, soft ground, or areas that might be damaged. Our delivery team will assess your location and recommend the best placement."
        },
        {
          question: "How long can I keep the dumpster?",
          answer: "Standard rental periods are 7-14 days, which covers most projects. We can accommodate longer periods if needed. Just let us know your timeline when you order, and we'll work with you to ensure the dumpster is available for your entire project."
        }
      ]
    },
    {
      category: "Permits & Regulations",
      questions: [
        {
          question: "Do I need a permit for a dumpster?",
          answer: "In most cases, no permit is needed if the dumpster is placed on private property (like your driveway). However, if you need to place the dumpster on a public street or sidewalk, you'll need a permit from your local city. We can help you determine if a permit is required and guide you through the process. Read more: /utah-dumpster-permits-guide"
        },
        {
          question: "What are the weight limits for dumpsters?",
          answer: "Our dumpsters have a weight limit of approximately 2 tons (4,000 pounds). This covers most household and construction waste. If you exceed this limit, additional fees may apply. Heavy materials like concrete, dirt, or roofing shingles should be discussed with us beforehand. Use our /tonnage-calculator to estimate your project's weight."
        },
        {
          question: "Are there any materials you don't accept?",
          answer: "We cannot accept hazardous materials, including paint, chemicals, batteries, tires, refrigerators, or other appliances with Freon. We also cannot accept medical waste or radioactive materials. If you're unsure about specific items, call us and we'll let you know what's acceptable."
        }
      ]
    },
    {
      category: "Service Area & Availability",
      questions: [
        {
          question: "What areas do you serve in Utah?",
          answer: "We serve the entire Salt Lake Valley and surrounding areas including Salt Lake City, West Valley City, Sandy, West Jordan, Murray, Taylorsville, South Jordan, Riverton, Herriman, Draper, and many other Utah communities. Call us to confirm service availability in your specific location. View all locations: /locations"
        },
        {
          question: "Do you offer weekend delivery?",
          answer: "Yes, we offer weekend delivery and pickup services. We understand that many projects happen on weekends, so we're available to serve you when it's most convenient. There may be a small additional fee for weekend service."
        },
        {
          question: "What happens if I need the dumpster picked up early?",
          answer: "No problem! You can call us anytime to schedule early pickup. We'll come out and remove the dumpster as soon as possible, typically within 24 hours. There's no penalty for early pickup - we want to make sure you're completely satisfied with our service."
        }
      ]
    },
    {
      category: "Waste Types & Disposal",
      questions: [
        {
          question: "What types of waste can I put in the dumpster?",
          answer: "We accept most types of construction and household waste including wood, drywall, concrete, metal, furniture, appliances (without Freon), carpet, tile, roofing materials, and general household junk. We also accept yard waste and tree branches (cut to manageable sizes)."
        },
        {
          question: "Do you recycle materials?",
          answer: "Yes, we're committed to environmental responsibility. We sort and recycle materials whenever possible, including metal, concrete, and certain types of wood. This helps reduce landfill waste and may help keep your costs lower."
        },
        {
          question: "Can I put concrete or dirt in the dumpster?",
          answer: "Yes, we accept concrete and dirt, but there are weight considerations. These materials are very heavy, so you may not be able to fill the dumpster completely. We recommend discussing your specific needs with us to ensure you get the right size and avoid overweight fees."
        }
      ]
    },
    {
      category: "Booking & Customer Service",
      questions: [
        {
          question: "How do I book a dumpster?",
          answer: "Booking is easy! You can call us at (801) 918-6000, fill out our online quote form, or email us at icondumpsters@gmail.com. We'll ask about your project details, preferred delivery date, and location to provide you with an accurate quote and schedule delivery."
        },
        {
          question: "What information do you need when I book?",
          answer: "We'll need your name, phone number, delivery address, preferred delivery date, project type, and estimated rental duration. We'll also ask about the types of materials you'll be disposing of to help you choose the right dumpster size."
        },
        {
          question: "What if I have a problem or question after delivery?",
          answer: "We're here to help! Call us anytime at (801) 918-6000 if you have questions or concerns. Our customer service team is available to assist you with any issues, whether you need advice on loading the dumpster, want to schedule pickup, or have any other questions."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Schema removed to prevent duplicate structured data - FAQ schema already provided by FAQSchema */}
      
      {/* FAQ Schema for structured data */}
      <FAQSchema 
        faqs={[
          {
            question: "What dumpster sizes do you offer?",
            answer: "We offer three main dumpster sizes: 15-yard, 20-yard, and 30-yard roll-off dumpsters. The 15-yard is perfect for small projects like garage cleanouts, the 20-yard is ideal for medium renovations, and the 30-yard is best for large construction projects or major cleanouts."
          },
          {
            question: "How much does dumpster rental cost?",
            answer: "Dumpster rental costs vary based on size, rental duration, and location. Our 15-yard dumpsters start around $300-400, 20-yard dumpsters around $400-500, and 30-yard dumpsters around $500-600. This typically includes delivery, pickup, and disposal fees."
          },
          {
            question: "How much to rent a dumpster for 1 week?",
            answer: "Dumpster rental for one week typically costs $299-$450 depending on size. Our 15-yard dumpster starts at $299 for 7 days, 20-yard dumpsters start at $349, and 30-yard dumpsters start at $450. All prices include delivery, pickup, and disposal fees."
          },
          {
            question: "Is renting a dumpster cheaper than junk removal?",
            answer: "For most projects with significant debris, dumpster rental is typically cheaper than junk removal. A 15-yard dumpster rental starts at $299 for 7 days, while junk removal typically costs $200-$400 per truckload. If you need multiple pickups, dumpster rental becomes significantly more cost-effective."
          },
          {
            question: "Will a couch fit in a 10 yard dumpster?",
            answer: "Yes, a standard couch will typically fit in a 10-yard dumpster. A 10-yard dumpster measures approximately 12 feet long by 8 feet wide by 3.5 feet deep. Most sofas are 6-8 feet long, so they'll fit lengthwise. However, if you have multiple large items, you may want to consider a 15-yard or 20-yard dumpster for more space."
          },
          {
            question: "How quickly can you deliver a dumpster?",
            answer: "We typically offer same-day or next-day delivery for most areas in Utah. During peak season (spring and summer), we recommend booking 2-3 days in advance to ensure availability."
          },
          {
            question: "Do I need a permit for a dumpster?",
            answer: "In most cases, no permit is needed if the dumpster is placed on private property (like your driveway). However, if you need to place the dumpster on a public street or sidewalk, you'll need a permit from your local city."
          },
          {
            question: "What areas do you serve in Utah?",
            answer: "We serve the entire Salt Lake Valley and surrounding areas including Salt Lake City, West Valley City, Sandy, West Jordan, Murray, Taylorsville, South Jordan, Riverton, Herriman, Draper, and many other Utah communities."
          },
          {
            question: "What types of waste can I put in the dumpster?",
            answer: "We accept most types of construction and household waste including wood, drywall, concrete, metal, furniture, appliances (without Freon), carpet, tile, roofing materials, and general household junk. We also accept yard waste and tree branches."
          },
          {
            question: "How do I book a dumpster?",
            answer: "Booking is easy! You can call us at (801) 918-6000, fill out our online quote form, or email us at icondumpsters@gmail.com. We'll ask about your project details, preferred delivery date, and location to provide you with an accurate quote."
          },
          {
            question: "How much does it cost to rent a dumpster in Salt Lake City?",
            answer: "Dumpster rental costs in Salt Lake City typically range from $375 to $635, depending on the size you need. A 15-yard dumpster starts at $375-$415, a 20-yard dumpster costs $415-$465, and a 30-yard dumpster ranges from $465-$525. These prices include delivery, pickup, disposal fees up to the weight allowance, and basic permit assistance."
          },
          {
            question: "Is it cheaper to get a dumpster or go to the dump?",
            answer: "For most projects, renting a dumpster is more cost-effective and convenient than making multiple trips to the dump. A 15-yard dumpster rental ($375-$415) holds about 3-4 pickup truck loads. If you make 3-4 trips to the dump yourself, you'd pay $25-$50 per trip in disposal fees ($75-$200 total), plus your time, fuel costs, vehicle wear, and the hassle of loading/unloading."
          },
          {
            question: "What size dumpster is rented the most?",
            answer: "The 20-yard dumpster is the most popular size rented in Salt Lake City. It's the perfect middle ground for most projects, holding 4-6 pickup truck loads of debris. The 20-yard dumpster is ideal for whole-home decluttering, medium renovations, light commercial refreshes, and multi-room cleanouts."
          }
        ]}
        pageUrl="https://icondumpsters.com/faq"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0d9488] via-teal-700 to-[#0d9488] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Dumpster Rental FAQ
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
              Get answers to the most common questions about dumpster rental in Utah. 
              From sizing and pricing to delivery and permits, we've got you covered.
            </p>
            
            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://icondumpsters.com/#quote-form" 
                className="bg-white text-[#0d9488] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg"
              >
                Get Free Quote
              </a>
              <a 
                href="tel:801-918-6000" 
                className="bg-[#0d9488] text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-lg border-2 border-white"
              >
                Call (801) 918-6000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="https://icondumpsters.com/" className="text-gray-500 hover:text-[#0d9488] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li className="text-[#0d9488] font-medium">FAQ</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
          
          {/* Main Content Area */}
          <div className="xl:col-span-3">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About Dumpster Rental
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We've compiled answers to the most common questions our customers ask about dumpster rental services. 
                If you don't see your question here, don't hesitate to call us at (801) 918-6000 or 
                <Link href="https://icondumpsters.com/#quote-form" className="text-[#0d9488] hover:text-teal-700 font-semibold"> request a free quote</Link>.
              </p>
            </div>

            {/* FAQ Categories */}
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
                <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                    <svg className="w-6 h-6 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    {category.category}
                  </h3>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {category.questions.map((faq, faqIndex) => (
                    <details key={faqIndex} className="group">
                      <summary className="px-8 py-6 cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-gray-900 group-open:text-[#0d9488] transition-colors">
                            {faq.question}
                          </h4>
                          <svg className="w-5 h-5 text-gray-400 group-open:text-[#0d9488] group-open:rotate-180 transition-all duration-200" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </summary>
                      <div className="px-8 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {renderWithLinks(faq.answer)}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-[#0d9488] to-teal-700 rounded-2xl shadow-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Our team is here to help! Call us anytime for expert advice on choosing the right dumpster size, 
                understanding pricing, or any other questions about our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:801-918-6000" 
                  className="bg-white text-[#0d9488] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                >
                  Call (801) 918-6000
                </a>
                <a 
                  href="mailto:icondumpsters@gmail.com" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0d9488] transition-colors font-semibold text-lg"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="xl:col-span-1 space-y-8">
            {/* Quick Quote Form */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                Get Free Quote
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Need a dumpster? Get an instant quote for your project.
              </p>
              <a 
                href="https://icondumpsters.com/#quote-form" 
                className="w-full bg-[#0d9488] text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold inline-block text-center"
              >
                Request Quote
              </a>
            </div>

            {/* Dumpster Sizes */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Dumpster Sizes
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">15 Yard</span>
                  <span className="text-gray-500">Small projects</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">20 Yard</span>
                  <span className="text-gray-500">Medium projects</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">30 Yard</span>
                  <span className="text-gray-500">Large projects</span>
                </div>
              </div>
              <Link 
                href="https://icondumpsters.com/dumpster-sizes" 
                className="block mt-4 text-[#0d9488] hover:text-teal-700 font-semibold text-sm"
              >
                View Size Guide →
              </Link>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Contact Us
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">(801) 918-6000</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">icondumpsters@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Service Area
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                We serve the entire Salt Lake Valley and surrounding areas including:
              </p>
              <div className="text-sm text-gray-700 space-y-1">
                <div>• Salt Lake City</div>
                <div>• West Valley City</div>
                <div>• Sandy</div>
                <div>• West Jordan</div>
                <div>• Murray</div>
                <div>• And many more!</div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Quote Form Section */}
      <QuoteFormSection 
        title="Ready to Get Started?"
        description="Get a free, no-obligation quote for your dumpster rental project. Our team will help you choose the perfect size and schedule delivery."
      />
    </div>
  );
}
