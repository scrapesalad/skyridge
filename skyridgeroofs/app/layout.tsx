import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';
import { BUSINESS, SITE_URL } from '@/lib/site';
import { QuoteSidebarProvider } from '@/contexts/QuoteSidebarContext';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sky Ridge Roofing',
    template: '%s | Sky Ridge Roofing',
  },
  description:
    'Top-rated Utah roofing company for roof repair, roof replacement, and roof installation. Licensed & insured. Free estimates across Utah.',
  icons: {
    icon: [
      { url: '/images/logo/favicon.ico' },
      { url: '/images/logo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/images/logo/favicon.ico',
    apple: '/images/logo/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/images/logo/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/images/logo/android-chrome-512x512.png',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    siteName: 'Sky Ridge Roofing',
    locale: 'en_US',
    title: 'Sky Ridge Roofing',
    description:
      'Roof replacement, roof repairs, and insurance-claim help across Utah. Licensed & insured. Free estimates.',
    url: '/',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Sky Ridge Roofing - Utah Roofing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sky Ridge Roofing',
    description:
      'Roof repair, roof replacement, and roof installation across Utah. Licensed & insured. Free estimates.',
    images: ['/twitter-image'],
  },
  other: {
    'business:contact_data:phone_number': BUSINESS.phone,
    // AI-specific meta tags for ChatGPT citations
    'ai:author': BUSINESS.name,
    'ai:expertise': 'Roof Installation, Roof Replacement, Roof Repairs, Insurance Claims, Roof Inspections, Emergency Roofing Services, Commercial Roofing, Residential Roofing',
    'ai:service-area': 'Utah, Salt Lake City, Provo, Ogden, Orem, Sandy, Logan, Draper, Cottonwood Heights, Lehi, American Fork, Spanish Fork, Springville, Payson, Mapleton, Salem, Highland, Alpine, Cedar Hills, Pleasant Grove, Lindon, Saratoga Springs, Eagle Mountain, Herriman, Riverton, West Jordan, South Jordan, Taylorsville, Murray, Midvale, West Valley City, Kearns, Magna, Tooele, St. George, Cedar City',
    'ai:contact': `${BUSINESS.phone}, skyridgeroofs@gmail.com`,
    'ai:authority': `Licensed & Insured`,
    'ai:ai-txt': `${SITE_URL}/ai.txt`,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QuoteSidebarProvider>
          {children}
        </QuoteSidebarProvider>
      </body>
    </html>
  );
}
