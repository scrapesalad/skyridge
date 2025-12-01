import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Calculator: Calculate Volume, Weight & Quantity Needed | Icon Dumpsters",
  description: "Free concrete calculator to estimate volume and weight of concrete needed for slabs, footings, columns, stairs, and more. Calculate concrete requirements for construction projects.",
  keywords: "concrete calculator, concrete volume calculator, concrete weight calculator, concrete quantity calculator, concrete slab calculator, concrete footing calculator",
  alternates: {
    canonical: 'https://icondumpsters.com/calculators/concrete-calculator',
  },
  openGraph: {
    title: "Concrete Calculator: Calculate Volume, Weight & Quantity Needed | Icon Dumpsters",
    description: "Free concrete calculator to estimate volume and weight of concrete needed for slabs, footings, columns, stairs, and more. Calculate concrete requirements for construction projects.",
    url: 'https://icondumpsters.com/calculators/concrete-calculator',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/concrete.webp',
        width: 1200,
        height: 630,
        alt: 'Concrete Calculator - Calculate concrete volume, weight, and quantity needed',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Concrete Calculator: Calculate Volume, Weight & Quantity Needed | Icon Dumpsters",
    description: "Free concrete calculator to estimate volume and weight of concrete needed for slabs, footings, columns, stairs, and more. Calculate concrete requirements for construction projects.",
    images: ['/images/concrete.webp'],
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

export default function ConcreteCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
