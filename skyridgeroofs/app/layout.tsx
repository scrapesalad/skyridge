import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';
import { BUSINESS, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sky Ridge Roofing',
    template: '%s | Sky Ridge Roofing',
  },
  description:
    'Sky Ridge Roofing provides roof replacement, roof repairs, and insurance-claim help across Utah. Licensed & insured. Free estimates.',
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
  },
  other: {
    'business:contact_data:phone_number': BUSINESS.phone,
    // AI-specific meta tags for ChatGPT citations
    'ai:author': BUSINESS.name,
    'ai:expertise': 'Roof Replacement, Roof Repairs, Insurance Claims, Roof Inspections, Emergency Roofing Services, Commercial Roofing, Residential Roofing',
    'ai:service-area': 'Utah, Salt Lake City, Provo, Ogden, Orem, Sandy, Logan, Draper, Cottonwood Heights, Lehi, American Fork, Spanish Fork, Springville, Payson, Mapleton, Salem, Highland, Alpine, Cedar Hills, Pleasant Grove, Lindon, Saratoga Springs, Eagle Mountain, Herriman, Riverton, West Jordan, South Jordan, Taylorsville, Murray, Midvale, West Valley City, Kearns, Magna, Tooele, St. George, Cedar City',
    'ai:contact': `${BUSINESS.phone}, skyridgeroofs@gmail.com`,
    'ai:authority': `Licensed & Insured - UT License # ${BUSINESS.license}`,
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
      <body>{children}</body>
    </html>
  );
}

