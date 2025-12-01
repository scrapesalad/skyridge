"use client";

import FAQSchema from "@/app/components/FAQSchema";
import ArticleSchema from "@/app/components/ArticleSchema";
import Analytics from "@/app/components/PageAnalytics";
import Link from "next/link";
import DumpsterCalculator from "@/app/components/DumpsterCalculator";

export default function DumpsterCalculatorPageClient() {
  return (
    <>
      <Analytics
        pageName="Dumpster Calculator - Calculate Dumpster Rental Costs & Weight"
        pageType="article"
        articleId="dumpster-calculator"
      />
      <ArticleSchema
        title="Dumpster Calculator - Calculate Dumpster Rental Costs & Weight"
        description="Use our advanced dumpster calculator to estimate rental costs, weight limits, and delivery fees. Get instant quotes for 15, 20, and 30-yard dumpsters in Utah."
        author="Icon Dumpsters"
        publishedDate="2025-01-27"
        modifiedDate="2025-01-27"
        imageUrl="/images/dumpster500x500-2.jpeg"
        articleUrl="https://icondumpsters.com/dumpster-calculator"
        category="CALCULATOR"
        readTime="PT8M"
      />
      <FAQSchema
        pageUrl="https://icondumpsters.com/dumpster-calculator"
        faqs={[
          {
            question: "How does the dumpster calculator work?",
            answer: "Our dumpster calculator uses your zip code to find the nearest hub, calculates delivery distance, and factors in dumpster size, rental duration, and any applicable discounts. It provides a detailed breakdown of costs including base rental, delivery fees, and additional charges."
          },
          {
            question: "What weight limits apply to dumpster rentals?",
            answer: "Weight limits vary by dumpster size: 15-yard dumpsters have a 3-ton limit, 20-yard dumpsters have a 4-ton limit, and 30-yard dumpsters have a 6-ton limit. Additional weight is charged at $55 per ton after the dumpster is weighed at the disposal facility."
          },
          {
            question: "How do I avoid overweight charges?",
            answer: "Use our weight calculator to estimate your waste weight before filling the dumpster. Heavy materials like concrete, dirt, and construction debris can quickly reach weight limits. Consider the type of materials you're disposing of and choose an appropriate dumpster size."
          },
          {
            question: "What delivery fees apply to my location?",
            answer: "Delivery is free within Salt Lake County and within 10 miles of our hubs. Beyond these areas, delivery fees are calculated based on distance and include both fuel costs and driver time. The calculator automatically determines these fees based on your zip code."
          }
        ]}
      />

      <section className="py-16 bg-gray-50">
        <DumpsterCalculator />
      </section>
    </>
  );
}


