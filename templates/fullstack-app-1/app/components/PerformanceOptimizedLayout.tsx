'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface PerformanceOptimizedLayoutProps {
  children: React.ReactNode;
  preloadCritical?: boolean;
  enableLazyLoading?: boolean;
}

export default function PerformanceOptimizedLayout({
  children,
  preloadCritical = true,
  enableLazyLoading = true
}: PerformanceOptimizedLayoutProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Preload critical resources
    if (preloadCritical) {
      preloadCriticalResources();
    }

    // Intersection Observer for lazy loading
    if (enableLazyLoading) {
      setupIntersectionObserver();
    }

    // Performance monitoring
    setupPerformanceMonitoring();

    setIsLoaded(true);
  }, [preloadCritical, enableLazyLoading]);



  const preloadCriticalResources = () => {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.as = 'style';
    criticalCSS.href = '/critical.css';
    document.head.appendChild(criticalCSS);

    // Preload critical fonts
    const criticalFont = document.createElement('link');
    criticalFont.rel = 'preload';
    criticalFont.as = 'font';
    criticalFont.type = 'font/woff2';
    criticalFont.href = '/fonts/geist-sans.woff2';
    criticalFont.crossOrigin = 'anonymous';
    document.head.appendChild(criticalFont);

    // DNS prefetch for external resources
    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = 'https://www.google-analytics.com';
    document.head.appendChild(dnsPrefetch);
  };

  const setupIntersectionObserver = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('lazy-loaded');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    // Observe all lazy-loadable elements
    document.querySelectorAll('[data-lazy]').forEach((el) => {
      observer.observe(el);
    });
  };

  const setupPerformanceMonitoring = () => {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        // LCP (Largest Contentful Paint)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
          
          // Send to analytics if needed
          if (window.gtag) {
            window.gtag('event', 'LCP', {
              value: Math.round(lastEntry.startTime),
              event_category: 'Web Vitals'
            });
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // FID (First Input Delay)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            console.log('FID:', entry.processingStart - entry.startTime);
            
            if (window.gtag) {
              window.gtag('event', 'FID', {
                value: Math.round(entry.processingStart - entry.startTime),
                event_category: 'Web Vitals'
              });
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // CLS (Cumulative Layout Shift)
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          
          console.log('CLS:', clsValue);
          
          if (window.gtag) {
            window.gtag('event', 'CLS', {
              value: Math.round(clsValue * 1000) / 1000,
              event_category: 'Web Vitals'
            });
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.warn('Performance monitoring setup failed:', error);
      }
    }
  };

  const measureRouteChange = () => {
    const navigationStart = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationStart) {
      const routeChangeTime = navigationStart.loadEventEnd - navigationStart.fetchStart;
      console.log('Route change time:', routeChangeTime);
      
      if (window.gtag) {
        window.gtag('event', 'route_change', {
          value: Math.round(routeChangeTime),
          event_category: 'Performance'
        });
      }
    }
  };

  // Service Worker registration
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return (
    <div 
      className={`performance-optimized-layout ${isLoaded ? 'loaded' : 'loading'}`}
      style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
    >
      {/* Performance monitoring meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content="#0d9488" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Critical CSS inline */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .performance-optimized-layout {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          
          .lazy-loaded {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          
          [data-lazy] {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          
          .loading {
            opacity: 0;
          }
          
          .loaded {
            opacity: 1;
          }
        `
      }} />
      
      {children}
      
      {/* Performance monitoring script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Performance monitoring
            window.addEventListener('load', () => {
              setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData) {
                  console.log('Page Load Performance:', {
                    domContentLoaded: perfData.domContentLoadedEventEnd - perfData.fetchStart,
                    loadComplete: perfData.loadEventEnd - perfData.fetchStart,
                    firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 'N/A',
                    firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 'N/A'
                  });
                }
              }, 0);
            });
          `
        }}
      />
    </div>
  );
}
