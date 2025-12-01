import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dumpster Calculator for Concrete: Estimate Concrete Disposal Costs | Icon Dumpsters",
  description: "Use our concrete dumpster calculator to estimate the right dumpster size and costs for concrete disposal. Calculate concrete weight, volume, and rental costs for Utah projects.",
  keywords: "concrete dumpster calculator, concrete disposal calculator, concrete waste calculator, concrete dumpster rental, Utah concrete disposal",
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-calculator-for-concrete',
  },
  openGraph: {
    title: "Dumpster Calculator for Concrete: Estimate Concrete Disposal Costs | Icon Dumpsters",
    description: "Use our concrete dumpster calculator to estimate the right dumpster size and costs for concrete disposal. Calculate concrete weight, volume, and rental costs for Utah projects.",
    url: 'https://icondumpsters.com/dumpster-calculator-for-concrete',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/concrete.webp',
        width: 1200,
        height: 630,
        alt: 'Dumpster Calculator for Concrete - Estimate concrete disposal costs',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dumpster Calculator for Concrete: Estimate Concrete Disposal Costs | Icon Dumpsters",
    description: "Use our concrete dumpster calculator to estimate the right dumpster size and costs for concrete disposal. Calculate concrete weight, volume, and rental costs for Utah projects.",
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

export default function DumpsterCalculatorForConcreteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
