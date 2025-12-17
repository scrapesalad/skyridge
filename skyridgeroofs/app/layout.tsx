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

