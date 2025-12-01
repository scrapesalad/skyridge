'use client';

import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Set a maximum loading time
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Check if critical resources are loaded
    const checkResources = () => {
      try {
        // Check if React is hydrated
        if (typeof window !== 'undefined' && document.readyState === 'complete') {
          setIsLoading(false);
          clearTimeout(timeout);
        }
      } catch (error) {
        console.error('Resource loading error:', error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    // Check immediately and on load
    checkResources();
    window.addEventListener('load', checkResources);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('load', checkResources);
    };
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Loading Error</h1>
          <p className="text-gray-600 mb-4">There was a problem loading the page.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-[#0d9488] text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0d9488] mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading Icon Dumpsters</h2>
          <p className="text-gray-600">Please wait while we load the page...</p>
        </div>
      </div>
    );
  }

  return null;
}
