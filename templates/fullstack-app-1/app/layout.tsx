import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import StructuredData, { IconDumpstersBusinessData, IconDumpstersOrganizationData, IconDumpstersWebSiteData, DumpsterServiceCatalog } from "./components/StructuredData";
import AICitationSchema, { iconDumpstersAIData } from "./components/AICitationSchema";
import LLMSchema, { iconDumpstersLLMData } from "./components/LLMSchema";
import dynamic from 'next/dynamic';
import Header from "./components/header";
// Lazy load non-critical components to reduce initial JS execution time
// Dynamic imports will still code-split and lazy load without ssr: false
const Footer = dynamic(() => import("./components/Footer"));
const MobileNav = dynamic(() => import("./components/MobileNav"));
const ConditionalCalculatorBanner = dynamic(() => import("./components/ConditionalCalculatorBanner"));
const FloatingTextButton = dynamic(() => import("./components/FloatingTextButton"));
const RelatedServiceLinks = dynamic(() => import("./components/RelatedServiceLinks"));
const ThirdPartyScripts = dynamic(() => import("./components/ThirdPartyScripts"));
import { GoogleTagManagerNoScript } from "./components/GoogleTagManager";
// Analytics removed - admin dashboard disabled
import AutoSchema from "./components/AutoSchema";
// Client Component wrapper for lazy-loaded components (ssr: false)
import LazyComponents from "./components/LazyComponents";
import AsyncCSSLoader from "./components/AsyncCSSLoader";
import DeferredScripts from "./components/DeferredScripts";

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

const coreDescription = "{{metaDescription}}";

export const metadata: Metadata = {
  title: "{{siteTitle}}",
  description: coreDescription,
    alternates: {
    canonical: '{{siteUrl}}/',
  },
  keywords: "{{metaKeywords}}",
  authors: [{ name: "{{siteTitle}}" }],
  creator: "{{siteTitle}}",
  publisher: "{{siteTitle}}",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || process.env.NODE_ENV === 'production' ? '{{siteUrl}}' : 'http://localhost:3000'),
  openGraph: {
    title: "{{siteTitle}}",
    description: coreDescription,
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
    description: coreDescription,
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Initialize dataLayer early (before GTM loads)
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} 
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'functionality_storage': 'granted',
                'security_storage': 'granted'
              });
            `,
          }}
        />
        {/* Error handling deferred to reduce initial JS execution */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Defer error handling to reduce initial JS execution time
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                  window.addEventListener('error', function(e) {
                    console.error('Script error:', e.error);
                    e.preventDefault();
                  });
                });
              } else {
                window.addEventListener('error', function(e) {
                  console.error('Script error:', e.error);
                  e.preventDefault();
                });
              }
            `,
          }}
        />
        <StructuredData type="organization" data={IconDumpstersOrganizationData} />
        <StructuredData type="localBusiness" data={IconDumpstersBusinessData} />
        <StructuredData type="website" data={IconDumpstersWebSiteData} />
        <StructuredData type="itemList" data={DumpsterServiceCatalog} />
        {/* Third-party scripts are injected client-side to avoid SSR hydration mismatches */}
        {/* Additional favicon links for better browser compatibility - using optimized sizes */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Performance: Resource hints - only for resources loaded immediately */}
        {/* DNS prefetch for analytics (lighter than preconnect, used when analytics load after interaction) */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Preconnects removed for analytics - they load after user interaction, so preconnect is unused */}
        {/* Font preconnects removed - Next.js font optimization handles font loading automatically */}
        
        {/* Additional Open Graph tags for better Facebook compatibility */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:alt" content="{{siteTitle}}" />
        
        {/* AI-Specific Meta Tags for ChatGPT Citation */}
        <meta name="ai:author" content="{{siteTitle}}" />
        <meta name="ai:expertise" content="{{metaKeywords}}" />
        <meta name="ai:service-area" content="{{tagline}}" />
        <meta name="ai:contact" content="{{phoneNumber}}, {{email}}" />
        <meta name="ai:authority" content="{{siteTitle}}" />
        <link rel="alternate" type="text/plain" href="{{siteUrl}}/ai.txt" title="AI Citation Information" />
        
        <AICitationSchema data={iconDumpstersAIData} />
        <LLMSchema data={iconDumpstersLLMData} />
        {/* GTM moved to DeferredAnalytics component - loads after user interaction */}
        <AutoSchema />
        
        {/* Inline critical CSS to eliminate render-blocking CSS and reduce critical path latency */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS - Above the fold styles only (minified) */
            *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;padding:0;font-family:var(--font-geist-sans),-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.6;color:#333;background-color:#fff}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-col{flex-direction:column}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.text-white{color:#fff}.max-w-7xl{max-width:80rem}.mx-auto{margin-left:auto;margin-right:auto}.px-4{padding-left:1rem;padding-right:1rem}.justify-between{justify-content:space-between}.items-center{align-items:center}img{max-width:100%;height:auto}.bg-\[#0d9488\]{background-color:#0d9488}.h-\[650px\]{height:650px}@media(min-width:768px){.md\:h-\[700px\]{height:700px}}.object-cover{object-fit:cover}.object-\[right_10\%\]{object-position:right 10%}
          `
        }} />
        
        {/* Immediate async CSS loading script - optimized to reduce main-thread work */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function makeCSSAsync() {
                  var links = document.querySelectorAll('link[rel="stylesheet"]:not([data-async-processed])');
                  if (links.length === 0) return;
                  links.forEach(function(link) {
                    link.setAttribute('data-async-processed', 'true');
                    link.media = 'print';
                    link.onload = function() { if(this.media === 'print') this.media = 'all'; };
                    setTimeout(function() { if(link.media === 'print') link.media = 'all'; }, 100);
                  });
                }
                // Run immediately for critical CSS
                makeCSSAsync();
                // Defer subsequent processing to reduce main-thread blocking
                if (window.requestIdleCallback) {
                  requestIdleCallback(makeCSSAsync, { timeout: 200 });
                } else {
                  setTimeout(makeCSSAsync, 10);
                }
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', function() {
                    if (window.requestIdleCallback) {
                      requestIdleCallback(makeCSSAsync, { timeout: 200 });
                    } else {
                      setTimeout(makeCSSAsync, 10);
                    }
                  });
                }
              })();
            `
          }}
        />
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <GoogleTagManagerNoScript />
        <AsyncCSSLoader />
        <DeferredScripts />
        <ThirdPartyScripts />
        {/* Header */}
        <Header />

        {/* Mobile Navigation */}
        <MobileNav />

        {/* Main Content */}
        <main className="flex-1" role="main">
          {children}
        </main>

        {/* Internal linking for location pages */}
        <RelatedServiceLinks />


        {/* Lazy-loaded components - load after page is interactive */}
        <LazyComponents />

        {/* Floating Text Button */}
        <FloatingTextButton />

        {/* Calculator Banner - Only on calculator-related pages */}
        <ConditionalCalculatorBanner />


        <Footer />
      </body>
    </html>
  );
}
