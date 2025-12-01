import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Waste Management: Best Practices for 2025 | Icon Dumpsters",
  description: "Learn proven strategies for managing construction waste efficiently. From sorting materials to choosing the right dumpster size, discover how to minimize costs and environmental impact while maintaining project timelines.",
  keywords: "construction waste management, construction waste disposal, construction waste recycling, construction dumpster rental, Utah construction waste",
  alternates: {
    canonical: 'https://icondumpsters.com/construction-waste-management-2025',
  },
  openGraph: {
    title: "Construction Waste Management: Best Practices for 2025 | Icon Dumpsters",
    description: "Learn proven strategies for managing construction waste efficiently. From sorting materials to choosing the right dumpster size, discover how to minimize costs and environmental impact while maintaining project timelines.",
    url: 'https://icondumpsters.com/construction-waste-management-2025',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/construction-waste.jpg',
        width: 1200,
        height: 630,
        alt: 'Construction Waste Management - Best practices for 2025',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Construction Waste Management: Best Practices for 2025 | Icon Dumpsters",
    description: "Learn proven strategies for managing construction waste efficiently. From sorting materials to choosing the right dumpster size, discover how to minimize costs and environmental impact while maintaining project timelines.",
    images: ['/images/construction-waste.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ConstructionWasteManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
