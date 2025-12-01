"use client";

import { useEffect } from 'react';

interface AnalyticsProps {
  pageName: string;
  pageType: 'blog' | 'page' | 'article';
  articleId?: string;
}



export default function Analytics({ pageName, pageType, articleId }: AnalyticsProps) {
  useEffect(() => {
    // Track page view
    const trackPageView = () => {
      // Google Analytics 4 event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'page_view', {
          page_title: pageName,
          page_location: window.location.href,
          page_type: pageType,
          article_id: articleId,
        });
      }

      // Custom analytics event
      const analyticsData = {
        event: 'page_view',
        pageName,
        pageType,
        articleId,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        referrer: document.referrer,
      };

      // Send to your analytics endpoint (silently fail if not available)
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(analyticsData),
      }).catch(() => {
        // Silently fail - analytics endpoint not available
      });

      // Store in localStorage for offline tracking
      const offlineEvents = JSON.parse(localStorage.getItem('offlineAnalytics')?.trim() || '[]');
      offlineEvents.push(analyticsData);
      localStorage.setItem('offlineAnalytics', JSON.stringify(offlineEvents.slice(-50))); // Keep last 50 events
    };

    // Track time on page
    let startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeOnPage = Date.now() - startTime;
      
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'time_on_page', {
          page_title: pageName,
          time_on_page: Math.round(timeOnPage / 1000), // Convert to seconds
          page_type: pageType,
          article_id: articleId,
        });
      }
    };

    // Track scroll depth - optimized to prevent forced reflows
    let maxScrollDepth = 0;
    let rafId: number | null = null;
    let lastScrollTime = 0;
    const SCROLL_THROTTLE_MS = 100; // Throttle to max once per 100ms
    
    const trackScrollDepth = () => {
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
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const innerHeight = window.innerHeight;
        const scrollDepth = Math.round((scrollTop / Math.max(1, scrollHeight - innerHeight)) * 100);
        
        if (scrollDepth > maxScrollDepth) {
          maxScrollDepth = scrollDepth;
          
          // Track at 25%, 50%, 75%, and 100%
          if ([25, 50, 75, 100].includes(scrollDepth)) {
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'scroll_depth', {
                page_title: pageName,
                scroll_depth: scrollDepth,
                page_type: pageType,
                article_id: articleId,
              });
            }
          }
        }
        rafId = null;
      });
    };

    // Track engagement events
    const trackEngagement = (eventType: string, elementType: string, elementId?: string) => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'engagement', {
          page_title: pageName,
          event_type: eventType,
          element_type: elementType,
          element_id: elementId,
          page_type: pageType,
          article_id: articleId,
        });
      }
    };

    // Initialize tracking
    trackPageView();

    // Add event listeners with passive option for better performance
    window.addEventListener('scroll', trackScrollDepth, { passive: true });
    window.addEventListener('beforeunload', trackTimeOnPage);

    // Track clicks on important elements
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A') {
        trackEngagement('link_click', 'link', (target as HTMLAnchorElement).href);
      } else if (target.tagName === 'BUTTON') {
        trackEngagement('button_click', 'button', target.textContent || 'unknown');
      } else if (target.closest('[data-track]')) {
        const trackData = target.closest('[data-track]')?.getAttribute('data-track');
        trackEngagement('custom_click', 'custom', trackData || 'unknown');
      }
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
      window.removeEventListener('beforeunload', trackTimeOnPage);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [pageName, pageType, articleId]);

  // This component doesn't render anything visible
  return null;
}
