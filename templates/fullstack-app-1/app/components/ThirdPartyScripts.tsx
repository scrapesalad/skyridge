'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import DeferredAnalytics from './DeferredAnalytics';
import FacebookPixel from './FacebookPixel';
import CookieConsent from './CookieConsent';

export default function ThirdPartyScripts() {
  const pathname = usePathname() || '';
  const isAdmin = pathname.startsWith('/admin');

  if (isAdmin) {
    return null;
  }

  return (
    <>
      {/* Analytics loaded only after user interaction to reduce unused JS */}
      <DeferredAnalytics />
      <FacebookPixel />
      <CookieConsent />
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        strategy="lazyOnload"
        data-key="ctDHetXbMmD8XDhk/vJMcQ"
        onLoad={() => {
          // Script loaded - cache will be handled by browser with proper headers
        }}
      />
    </>
  );
}


