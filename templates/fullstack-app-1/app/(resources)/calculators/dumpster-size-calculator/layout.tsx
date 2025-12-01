import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dumpster Size Calculator: Find the Right Dumpster for Your Project | Icon Dumpsters",
  description: "Use our dumpster size calculator to find the perfect dumpster size for your project. Calculate dumpster requirements based on project type, size, and materials. Get instant recommendations.",
  keywords: "dumpster size calculator, dumpster size guide, dumpster size estimator, dumpster rental calculator, Utah dumpster rental",
  alternates: {
    canonical: 'https://icondumpsters.com/calculators/dumpster-size-calculator',
  },
  openGraph: {
    title: "Dumpster Size Calculator: Find the Right Dumpster for Your Project | Icon Dumpsters",
    description: "Use our dumpster size calculator to find the perfect dumpster size for your project. Calculate dumpster requirements based on project type, size, and materials. Get instant recommendations.",
    url: 'https://icondumpsters.com/calculators/dumpster-size-calculator',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/optimized/-2484955712329217818-enhance-2.1x-textai.jpg',
        width: 1200,
        height: 630,
        alt: 'Dumpster Size Calculator - Find the right dumpster size for your project',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dumpster Size Calculator: Find the Right Dumpster for Your Project | Icon Dumpsters",
    description: "Use our dumpster size calculator to find the perfect dumpster size for your project. Calculate dumpster requirements based on project type, size, and materials. Get instant recommendations.",
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

export default function DumpsterSizeCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

