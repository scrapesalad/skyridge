'use client';

import { useEffect } from 'react';

/**
 * AsyncCSSLoader - Converts blocking stylesheets to async loading
 * This reduces critical path latency by making CSS load without blocking render
 */
export default function AsyncCSSLoader() {
  useEffect(() => {
    // Convert blocking stylesheets to async loading using media="print" trick
    // Defer to idle time to reduce main-thread work
    const loadCSSAsync = () => {
      const links = document.querySelectorAll('link[rel="stylesheet"]:not([media]), link[rel="stylesheet"][media=""]');
      links.forEach((link) => {
        // Skip if already processed
        if (link.getAttribute('data-async-loaded')) {
          return;
        }
        
        // Mark as processed
        link.setAttribute('data-async-loaded', 'true');
        
        // Set media to print so it doesn't block render
        link.media = 'print';
        
        // Once loaded, switch to all media types
        link.onload = function() {
          if (this.media === 'print') {
            this.media = 'all';
          }
        };
        
        // Fallback for browsers that don't fire onload reliably
        setTimeout(() => {
          if (link.media === 'print') {
            link.media = 'all';
          }
        }, 100);
      });
    };

    // Defer CSS processing to idle time to reduce main-thread blocking
    const deferToIdle = (callback: () => void) => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(callback, { timeout: 500 });
      } else {
        // Fallback: use setTimeout with small delay
        setTimeout(callback, 10);
      }
    };

    // Run initial processing immediately (critical for above-the-fold)
    loadCSSAsync();
    
    // Defer subsequent processing to idle time
    deferToIdle(loadCSSAsync);
    
    // Also run when DOM is fully loaded (deferred)
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => deferToIdle(loadCSSAsync));
    }

    return () => {
      // Cleanup handled by browser
    };
  }, []);

  return null;
}

