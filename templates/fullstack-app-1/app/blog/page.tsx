import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import ArticleSchema from "../components/ArticleSchema";
import FAQSchema from "../components/FAQSchema";
import { dumpsterRentalFAQs } from "../components/FAQSchema";
import { getCanonicalMetadata } from "@/app/lib/canonical";

export const metadata: Metadata = {
  title: "Icon Dumpsters Blog - Expert Waste Management Insights &...",
  description: "Expert insights, tips, and guides on waste management, dumpster rental, and construction cleanup. Learn about dumpster sizes, costs, permits, and best...",
  keywords: [
    "dumpster rental blog",
    "waste management tips",
    "construction cleanup guide",
    "dumpster rental Utah",
    "roll-off dumpster guide",
    "construction waste disposal",
    "home renovation waste",
    "dumpster rental costs",
    "dumpster permits",
    "waste management best practices"
  ],
  alternates: { canonical: 'https://icondumpsters.com/blog' },
  openGraph: {
    title: "Icon Dumpsters Blog - Expert Waste Management Insights &...",
    description: "Expert insights, tips, and guides on waste management, dumpster rental, and construction cleanup. Learn about dumpster sizes, costs, permits, and best...",
    url: 'https://icondumpsters.com/blog',
    siteName: "Icon Dumpsters",
    images: [
      {
        url: "/images/dumpster500x500-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Icon Dumpsters Blog - Expert Waste Management Insights"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Icon Dumpsters Blog - Expert Waste Management Insights & Tips",
    description: "Expert insights, tips, and guides on waste management, dumpster rental, and construction cleanup.",
    images: ["/images/dumpster500x500-1.jpeg"]
  }
};

export default function BlogPage() {
  return (
    <>
      {/* Schema Markup for Blog Page */}
      <ArticleSchema
        title="Icon Dumpsters Blog - Expert Waste Management Insights & Tips"
        description="Expert insights, tips, and guides on waste management, dumpster rental, and construction cleanup. Learn about dumpster sizes, costs, permits, and best practices."
        author="Icon Dumpsters"
        publishedDate="2024-01-01"
        modifiedDate="2024-12-19"
        imageUrl="/images/dumpster500x500-1.jpeg"
        articleUrl="https://icondumpsters.com/blog"
        category="Waste Management"
        readTime="10 min read"
      />
      
      {/* FAQ Schema for Common Dumpster Rental Questions */}
      <FAQSchema 
        faqs={dumpsterRentalFAQs} 
        pageUrl="https://icondumpsters.com/blog" 
      />
      
      <BlogClient />
    </>
  );
}
