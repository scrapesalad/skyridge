'use client';

import Script from 'next/script';
import { ANALYTICS_CONFIG } from '../config/analytics';

export default function GoogleAnalytics() {
  const gaId = ANALYTICS_CONFIG.GA_ID;
  const googleAdsId = ANALYTICS_CONFIG.GOOGLE_ADS_ID;
  
  return (
    <>
      {/* Google Analytics - Deferred to reduce initial JS execution time */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="lazyOnload"
      />
      {/* Google Ads - Deferred to reduce initial JS execution time */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          // Respect Consent Mode (updated by CookieConsent)
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'functionality_storage': 'granted',
            'security_storage': 'granted'
          });
          gtag('js', new Date());
          gtag('config', '${gaId}');
          gtag('config', '${googleAdsId}');
        `}
      </Script>
    </>
  );
}
