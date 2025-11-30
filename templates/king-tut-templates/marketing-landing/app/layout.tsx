import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import dynamic from 'next/dynamic';
import Header from "./components/header";

// Lazy load non-critical components
const Footer = dynamic(() => import("./components/Footer"));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "{{siteTitle}}",
  description: "{{metaDescription}}",
  keywords: "{{metaKeywords}}",
  alternates: {
    canonical: '{{siteUrl}}/',
  },
  authors: [{ name: "{{siteTitle}}" }],
  creator: "{{siteTitle}}",
  publisher: "{{siteTitle}}",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('{{siteUrl}}'),
  openGraph: {
    title: "{{siteTitle}}",
    description: "{{metaDescription}}",
    url: '{{siteUrl}}',
    siteName: '{{siteTitle}}',
    images: [
      {
        url: '{{heroImage}}',
        width: 1200,
        height: 630,
        alt: '{{siteTitle}}',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "{{siteTitle}}",
    description: "{{metaDescription}}",
    images: ['{{heroImage}}'],
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
  category: 'Business',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />

        <main className="flex-1" role="main">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

