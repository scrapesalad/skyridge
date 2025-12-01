import type { Metadata } from 'next';
import BookClient from './BookClient';

export const metadata: Metadata = {
  title: 'Book Now | Icon Dumpsters',
  description: "Reserve your dumpster in minutes. Choose size, dates, and location. An Icon expert will confirm scheduling. Fast, affordable dumpster rental services for",
  keywords: "book dumpster rental, reserve dumpster, schedule dumpster delivery, dumpster rental booking, Icon Dumpsters booking, Utah dumpster rental booking",
  openGraph: {
    title: "Book Now | Icon Dumpsters",
    description: "Reserve your dumpster in minutes. Choose size, dates, and location. An Icon expert will confirm scheduling. Fast, affordable dumpster rental services for",
    url: 'https://icondumpsters.com/book',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Book Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Now | Icon Dumpsters',
    description: "Reserve your dumpster in minutes. Choose size, dates, and location. An Icon expert will confirm scheduling. Fast, affordable dumpster rental services for",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: { canonical: 'https://icondumpsters.com/book' },
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

export default function Page() {
  return <BookClient />;
}


