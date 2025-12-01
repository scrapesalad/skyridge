'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { ANALYTICS_CONFIG } from '../config/analytics';

const GTM_ID = ANALYTICS_CONFIG.GTM_ID;
const GA_ID = ANALYTICS_CONFIG.GA_ID;
const GOOGLE_ADS_ID = ANALYTICS_CONFIG.GOOGLE_ADS_ID;

/**
 * DeferredAnalytics - Loads analytics scripts only after user interaction
 * This reduces unused JavaScript by ~200KB+ as scripts only load when needed
 */
export default function DeferredAnalytics() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Preconnect to analytics domains when user shows intent (before loading scripts)
    const preconnectAnalytics = () => {
      // Add preconnects dynamically when user shows intent
      const preconnectDomains = [
        'https://www.googletagmanager.com',
        'https://www.google-analytics.com'
      ];
      preconnectDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Load analytics after first user interaction (scroll, click, touch, keypress)
    const loadAnalytics = () => {
      // Preconnect first, then load scripts
      preconnectAnalytics();
      setShouldLoad(true);
      // Remove listeners after first load
      window.removeEventListener('scroll', loadAnalytics, { passive: true });
      window.removeEventListener('click', loadAnalytics);
      window.removeEventListener('touchstart', loadAnalytics, { passive: true });
      window.removeEventListener('keydown', loadAnalytics);
    };

    // Wait for page to be interactive before setting up listeners
    if (document.readyState === 'complete') {
      // Page already loaded, wait a bit then set up listeners
      setTimeout(() => {
        window.addEventListener('scroll', loadAnalytics, { passive: true, once: true });
        window.addEventListener('click', loadAnalytics, { once: true });
        window.addEventListener('touchstart', loadAnalytics, { passive: true, once: true });
        window.addEventListener('keydown', loadAnalytics, { once: true });
      }, 2000); // Wait 2 seconds after page load
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => {
          window.addEventListener('scroll', loadAnalytics, { passive: true, once: true });
          window.addEventListener('click', loadAnalytics, { once: true });
          window.addEventListener('touchstart', loadAnalytics, { passive: true, once: true });
          window.addEventListener('keydown', loadAnalytics, { once: true });
        }, 2000);
      });
    }

    // Fallback: Load after 10 seconds if no interaction
    const fallbackTimer = setTimeout(() => {
      if (!shouldLoad) {
        setShouldLoad(true);
      }
    }, 10000);

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener('scroll', loadAnalytics);
      window.removeEventListener('click', loadAnalytics);
      window.removeEventListener('touchstart', loadAnalytics);
      window.removeEventListener('keydown', loadAnalytics);
    };
  }, [shouldLoad]);

  if (!shouldLoad) {
    return null;
  }

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="lazyOnload"
      />
      {/* Google Ads */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
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
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  );
}

