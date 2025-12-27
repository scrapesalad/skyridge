'use client';

import { useQuoteSidebar } from '@/contexts/QuoteSidebarContext';

export default function FloatingTextButton() {
  const { openSidebar } = useQuoteSidebar();

  return (
    <button
      onClick={openSidebar}
      className="fixed bottom-4 right-4 z-30 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border-2 border-white animate-pulse"
      aria-label="Get a free quote"
      title="Get a free quote"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
      </svg>
      <span className="sr-only">Get a free quote</span>
    </button>
  );
}
