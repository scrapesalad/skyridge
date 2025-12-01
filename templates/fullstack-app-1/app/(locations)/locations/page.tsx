import type { Metadata } from "next";
import LocationsClient from "./LocationsClient";

export const metadata: Metadata = {
  title: "Utah Dumpster Rental Locations | Icon Dumpsters",
  description: "Find dumpster rental services across Utah: Salt Lake City, Utah County, Davis County, Weber, Summit, Tooele and more. Same‑day delivery, transparent pricing.",
  keywords: "Utah dumpster rental locations, Salt Lake City dumpster rental, Utah County dumpster rental, Davis County dumpster rental, Weber County dumpster rental, Summit County dumpster rental, Tooele County dumpster rental, Icon Dumpsters service areas",
  openGraph: {
    title: "Utah Dumpster Rental Locations | Icon Dumpsters",
    description: "Find dumpster rental services across Utah: Salt Lake City, Utah County, Davis County, Weber, Summit, Tooele and more. Same‑day delivery, transparent pricing.",
    url: 'https://icondumpsters.com/locations',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Utah Dumpster Rental Locations - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Utah Dumpster Rental Locations | Icon Dumpsters",
    description: "Find dumpster rental services across Utah: Salt Lake City, Utah County, Davis County, Weber, Summit, Tooele and more. Same‑day delivery, transparent pricing.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: { canonical: 'https://icondumpsters.com/locations' },
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

export default function UtahDumpsterRentalLocations() {
  return <LocationsClient />;
}
