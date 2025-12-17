'use client';

import { useQuoteSidebar } from '@/contexts/QuoteSidebarContext';

interface QuoteButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'light';
}

export default function QuoteButton({ children, className = '', variant = 'default' }: QuoteButtonProps) {
  const { openSidebar } = useQuoteSidebar();

  const baseClasses = 'inline-flex items-center font-semibold transition cursor-pointer';
  
  const variantClasses = {
    default: 'bg-primary-dark hover:bg-primary text-white px-8 py-4 uppercase tracking-wide rounded-sm',
    outline: 'border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-700',
    light: 'bg-primary-light text-white px-8 py-4 rounded-lg hover:bg-primary uppercase tracking-wide',
  };

  return (
    <button
      onClick={openSidebar}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      type="button"
    >
      {children}
    </button>
  );
}

