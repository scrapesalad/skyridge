import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing Dumpster Calculator: Calculate Roofing Waste Disposal Costs | Icon Dumpsters",
  description: "Use our roofing dumpster calculator to estimate the right dumpster size and costs for roofing waste disposal. Calculate roofing material weight, volume, and rental costs for Utah projects.",
  keywords: "roofing dumpster calculator, roofing waste calculator, roofing disposal calculator, roofing dumpster rental, Utah roofing disposal",
  alternates: {
    canonical: 'https://icondumpsters.com/calculators/roofing-calculator',
  },
  openGraph: {
    title: "Roofing Dumpster Calculator: Calculate Roofing Waste Disposal Costs | Icon Dumpsters",
    description: "Use our roofing dumpster calculator to estimate the right dumpster size and costs for roofing waste disposal. Calculate roofing material weight, volume, and rental costs for Utah projects.",
    url: 'https://icondumpsters.com/calculators/roofing-calculator',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/dumpsterSmallBanner4.webp',
        width: 1200,
        height: 630,
        alt: 'Roofing Dumpster Calculator - Calculate roofing waste disposal costs and dumpster size requirements',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Roofing Dumpster Calculator: Calculate Roofing Waste Disposal Costs | Icon Dumpsters",
    description: "Use our roofing dumpster calculator to estimate the right dumpster size and costs for roofing waste disposal. Calculate roofing material weight, volume, and rental costs for Utah projects.",
    images: ['/images/dumpsterSmallBanner4.webp'],
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

export default function RoofingCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
