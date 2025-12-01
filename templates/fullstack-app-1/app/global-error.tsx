'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error for debugging
    console.error('Global error caught:', error);
    // Analytics removed
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-red-600 mb-2">Something went wrong!</h1>
          <p className="text-gray-600 mb-6">
            We're sorry, but something unexpected happened. This might be due to a temporary issue or browser compatibility problem.
          </p>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full bg-[#0d9488] text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
          >
            Try Again
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            Reload Page
          </button>
          
          <a
            href="/"
            className="block w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium text-center"
          >
            Go to Homepage
          </a>
        </div>
        
        <div className="mt-6 text-sm text-gray-500">
          <p>If this problem persists, please try:</p>
          <ul className="mt-2 text-left space-y-1">
            <li>• Clearing your browser cache</li>
            <li>• Disabling browser extensions</li>
            <li>• Trying a different browser</li>
            <li>• Contacting support at (801) 918-6000</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
