'use client';

import { ReactNode, useState } from 'react';

interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  titleClassName?: string;
}

export default function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
  className = '',
  titleClassName = '',
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border border-gray-200 rounded-lg overflow-hidden ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-6 py-4 text-left font-semibold flex items-center justify-between hover:bg-gray-50 transition-colors ${titleClassName}`}
        aria-expanded={isOpen}
      >
        <span className="text-lg">{title}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-6 py-4 bg-white border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
}

/**
 * Native HTML details/summary version (better for SEO)
 */
export function CollapsibleSectionNative({
  title,
  children,
  defaultOpen = false,
  className = '',
}: CollapsibleSectionProps) {
  return (
    <details className={`border border-gray-200 rounded-lg overflow-hidden group ${className}`} open={defaultOpen}>
      <summary className="w-full px-6 py-4 font-semibold flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer list-none">
        <span className="text-lg">{title}</span>
        <svg
          className="w-5 h-5 transition-transform duration-200 group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>

      <div className="px-6 py-4 bg-white border-t border-gray-200">
        {children}
      </div>
    </details>
  );
}
