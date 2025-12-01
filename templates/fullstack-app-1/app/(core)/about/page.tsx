import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Icon Dumpsters - Family-Owned Utah Dumpster Rental",
  description: "Learn about Icon Dumpsters, a family-owned Utah business providing transparent, reliable dumpster rental services. Honest pricing, prompt delivery, and exceptional customer service.",
  keywords: ['about icon dumpsters', 'utah dumpster rental', 'family owned business', 'professional waste services', 'utah waste management'],
  alternates: { canonical: 'https://icondumpsters.com/about' },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: "About Icon Dumpsters - Family-Owned Utah Dumpster Rental",
    description: "Learn about Icon Dumpsters, a family-owned Utah business providing transparent, reliable dumpster rental services.",
    url: 'https://icondumpsters.com/about',
    images: [{ url: '/images/ca97086c-729c-480f-a90d-d117c1278945.webp', width: 1200, height: 630, alt: 'About Icon Dumpsters - Utah Waste Management' }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

import AboutClient from './AboutClient';

export default function AboutPage() {
  return <AboutClient />;
}
