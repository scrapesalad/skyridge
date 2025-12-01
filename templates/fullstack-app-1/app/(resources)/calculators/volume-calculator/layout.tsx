import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dumpster Volume Calculator: Calculate Dumpster Capacity & Dimensions | Icon Dumpsters",
  description: "Use our dumpster volume calculator to determine the right dumpster size for your project. Calculate dumpster dimensions, capacity, and volume requirements for Utah projects.",
  keywords: "dumpster volume calculator, dumpster capacity calculator, dumpster dimensions calculator, dumpster size calculator, Utah dumpster rental",
  alternates: {
    canonical: 'https://icondumpsters.com/calculators/volume-calculator',
  },
  openGraph: {
    title: "Dumpster Volume Calculator: Calculate Dumpster Capacity & Dimensions | Icon Dumpsters",
    description: "Use our dumpster volume calculator to determine the right dumpster size for your project. Calculate dumpster dimensions, capacity, and volume requirements for Utah projects.",
    url: 'https://icondumpsters.com/calculators/volume-calculator',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/dumpster500x500-2.jpeg',
        width: 1200,
        height: 630,
        alt: 'Dumpster Volume Calculator - Calculate dumpster capacity and dimensions for your project',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dumpster Volume Calculator: Calculate Dumpster Capacity & Dimensions | Icon Dumpsters",
    description: "Use our dumpster volume calculator to determine the right dumpster size for your project. Calculate dumpster dimensions, capacity, and volume requirements for Utah projects.",
    images: ['/images/dumpster500x500-2.jpeg'],
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

export default function VolumeCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
