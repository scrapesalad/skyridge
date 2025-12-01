'use client';

import { useEffect } from 'react';

/**
 * DeferredScripts - Defers non-critical JavaScript execution to reduce main-thread work
 * Uses requestIdleCallback to execute code during browser idle time
 */
export default function DeferredScripts() {
  useEffect(() => {
    // Defer non-critical initialization to idle time
    const deferToIdle = (callback: () => void) => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(callback, { timeout: 2000 });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(callback, 100);
      }
    };

    // Defer non-critical DOM operations
    deferToIdle(() => {
      // Any non-critical initialization can go here
      // This runs when the browser is idle, reducing main-thread blocking
    });

    // Defer analytics and tracking initialization
    deferToIdle(() => {
      // Analytics already deferred via DeferredAnalytics component
    });
  }, []);

  return null;
}

