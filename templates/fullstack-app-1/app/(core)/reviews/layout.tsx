import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews | Icon Dumpsters Utah",
  description: "Read customer reviews for Icon Dumpsters. See what our customers say about our dumpster rental services in Utah. 5-star rated with same-day delivery and transparent pricing.",
  keywords: "Icon Dumpsters reviews, dumpster rental reviews, Utah dumpster rental reviews, customer reviews, dumpster rental testimonials",
  alternates: {
    canonical: 'https://icondumpsters.com/reviews',
  },
  openGraph: {
    title: "Customer Reviews | Icon Dumpsters Utah",
    description: "Read customer reviews for Icon Dumpsters. See what our customers say about our dumpster rental services in Utah. 5-star rated with same-day delivery and transparent pricing.",
    url: 'https://icondumpsters.com/reviews',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/optimized/-2484955712329217818-enhance-2.1x-textai.jpg',
        width: 1200,
        height: 630,
        alt: 'Icon Dumpsters Customer Reviews - 5-Star Rated Dumpster Rental Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Customer Reviews | Icon Dumpsters Utah",
    description: "Read customer reviews for Icon Dumpsters. See what our customers say about our dumpster rental services in Utah. 5-star rated with same-day delivery and transparent pricing.",
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

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

