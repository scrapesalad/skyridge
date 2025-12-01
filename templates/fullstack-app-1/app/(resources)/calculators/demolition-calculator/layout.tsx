import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demolition Dumpster Calculator: Calculate Your Project Needs & Costs | Icon Dumpsters",
  description: "Use our demolition dumpster calculator to estimate the right dumpster size, weight capacity, and rental costs for your demolition project. Get instant quotes for Utah demolition projects.",
  keywords: "demolition dumpster calculator, demolition waste calculator, demolition disposal calculator, demolition dumpster rental, Utah demolition disposal",
  alternates: {
    canonical: 'https://icondumpsters.com/demolition-dumpster-calculator',
  },
  openGraph: {
    title: "Demolition Dumpster Calculator: Calculate Your Project Needs & Costs | Icon Dumpsters",
    description: "Use our demolition dumpster calculator to estimate the right dumpster size, weight capacity, and rental costs for your demolition project. Get instant quotes for Utah demolition projects.",
    url: 'https://icondumpsters.com/demolition-dumpster-calculator',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/optimized/-2484955712329217818-enhance-2.1x-textai.jpg',
        width: 1200,
        height: 630,
        alt: 'Demolition Dumpster Calculator - Calculate your demolition project needs and costs',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Demolition Dumpster Calculator: Calculate Your Project Needs & Costs | Icon Dumpsters",
    description: "Use our demolition dumpster calculator to estimate the right dumpster size, weight capacity, and rental costs for your demolition project. Get instant quotes for Utah demolition projects.",
    images: ['/images/optimized/-2484955712329217818-enhance-2.1x-textai.jpg'],
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

export default function DemolitionCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
