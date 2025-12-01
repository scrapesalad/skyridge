'use client';

import { useEffect } from 'react';

/**
 * Consolidated Analytics component combining:
 * - Session tracking and pageview tracking (from AnalyticsBoot)
 * - Scroll tracking (from AnalyticsBoot)
 * - Click event delegation (from AnalyticsDelegator)
 */
export default function AnalyticsTracker() {
  useEffect(() => {
    // Lazy load analytics module to avoid webpack issues
    let trackFn: ((type: string, name: string, meta?: Record<string, any>) => void) | null = null;
    
    // Load analytics module asynchronously
    const loadAnalytics = async () => {
      try {
        const analyticsModule = await import('./analytics');
        if (analyticsModule && analyticsModule.track && typeof analyticsModule.track === 'function') {
          trackFn = analyticsModule.track;
        }
      } catch (err) {
        console.debug('Failed to load analytics module:', err);
      }
    };
    
    loadAnalytics();

    // ===== SESSION & PAGEVIEW TRACKING =====
    const initializeSession = () => {
      if (typeof window === 'undefined') return;
      
      // Generate or retrieve session ID
      let sessionId = sessionStorage.getItem('sessionId');
      if (!sessionId) {
        sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem('sessionId', sessionId);
      }

      // Parse and store UTM parameters
      const urlParams = new URLSearchParams(window.location.search);
      const utmParams = {
        utm_source: urlParams.get('utm_source'),
        utm_medium: urlParams.get('utm_medium'),
        utm_campaign: urlParams.get('utm_campaign'),
        utm_term: urlParams.get('utm_term'),
        utm_content: urlParams.get('utm_content')
      };

      // Only store if we have UTM parameters
      if (Object.values(utmParams).some(val => val)) {
        sessionStorage.setItem('utm', JSON.stringify(utmParams));
      }

      return { sessionId, utmParams };
    };

    // Track page view with enhanced data - wait for module to load
    const sessionData = initializeSession();
    const trackPageview = () => {
      if (trackFn && typeof trackFn === 'function') {
        try {
          trackFn('pageview','load', {
            sessionId: sessionData?.sessionId,
            utm: sessionData?.utmParams,
            path: window.location.pathname,
            referrer: document.referrer,
            title: document.title
          });
        } catch (err) {
          console.debug('Failed to track pageview:', err);
        }
      } else {
        // Retry after a short delay if not loaded yet
        setTimeout(trackPageview, 100);
      }
    };
    setTimeout(trackPageview, 200);

    // ===== SCROLL TRACKING =====
    // Optimized to prevent forced reflows using requestAnimationFrame
    let maxScroll = 0;
    let rafId: number | null = null;
    let lastScrollTime = 0;
    const SCROLL_THROTTLE_MS = 100; // Throttle to max once per 100ms
    
    function onScroll() {
      if (!trackFn) return; // Don't track if module not loaded
      
      const now = Date.now();
      if (now - lastScrollTime < SCROLL_THROTTLE_MS) {
        return; // Skip if called too frequently
      }
      lastScrollTime = now;
      
      // Use requestAnimationFrame to batch layout reads and prevent forced reflows
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        // Batch all layout reads together
        const scrollY = window.scrollY;
        const scrollHeight = document.body.scrollHeight;
        const innerHeight = window.innerHeight;
        const total = Math.max(1, scrollHeight - innerHeight);
        const pct = Math.min(100, Math.round((scrollY / total) * 100));
        
        if (pct > maxScroll) {
          maxScroll = pct;
          try {
            if (trackFn && typeof trackFn === 'function') {
              if (pct >= 25 && pct < 50) trackFn('scroll','25');
              else if (pct >= 50 && pct < 75) trackFn('scroll','50');
              else if (pct >= 75 && pct < 90) trackFn('scroll','75');
              else if (pct >= 90) trackFn('scroll','90');
            }
          } catch {}
        }
        rafId = null;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    // ===== CLICK EVENT DELEGATION =====
    function handleClick(e: MouseEvent) {
      if (!trackFn) return; // Don't track if module not loaded
      const target = e.target as HTMLElement | null;
      if (!target) return;
      
      try {
        // Track tel: and mailto: links
        const a = target.closest('a[href^="tel:"],a[href^="mailto:"]') as HTMLAnchorElement | null;
        if (a && trackFn && typeof trackFn === 'function') {
          const href = a.getAttribute('href') || '';
          if (href.startsWith('tel:')) trackFn('cta','phone_click',{ href });
          else if (href.startsWith('mailto:')) trackFn('cta','email_click',{ href });
        }
        
        // Track elements with data-analytics attributes
        const el = target.closest('[data-analytics-type]') as HTMLElement | null;
        if (el && trackFn && typeof trackFn === 'function') {
          const type = el.getAttribute('data-analytics-type');
          const name = el.getAttribute('data-analytics-name');
          if (type && name) {
            const meta: Record<string, any> = {};
            Array.from(el.attributes).forEach(attr => {
              if (attr.name.startsWith('data-analytics-meta-')) {
                meta[attr.name.replace('data-analytics-meta-','')] = attr.value;
              }
            });
            trackFn(type, name, meta);
          }
        }
      } catch {}
    }
    document.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', handleClick);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return null;
}
