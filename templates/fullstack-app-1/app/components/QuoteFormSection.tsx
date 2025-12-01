'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import QuoteForm from './QuoteForm';

interface QuoteFormSectionProps {
  title?: string;
  description?: string;
  className?: string;
  enablePayment?: boolean;
}

export default function QuoteFormSection({ 
  title = "Get Your Free Quote",
  description = "Fill out the form below and we'll get back to you with a personalized quote for your project.",
  className = "",
  enablePayment = false
}: QuoteFormSectionProps) {
  const pathname = usePathname();
  const router = useRouter();
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const isHomepage = pathname === '/';

  useEffect(() => {
    // Only handle hash on non-homepage pages
    if (isHomepage) return;

    const checkHash = () => {
      if (window.location.hash === '#quote-form' && detailsRef.current) {
        // Open the details element
        detailsRef.current.open = true;
        // Scroll to the form
        const formElement = document.getElementById('quote-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    // Check hash on mount
    checkHash();

    // Listen for hash changes
    window.addEventListener('hashchange', checkHash);

    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, [isHomepage]);

  // Handle form submission for payment flow
  const handleFormSubmit = (formData: any) => {
    // Store form data in sessionStorage for cart page to pick up
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('quoteFormData', JSON.stringify(formData));
    }
    // Redirect to cart page for payment
    router.push('/cart');
  };

  // On homepage, just render the form directly (no collapsible)
  if (isHomepage) {
    return (
      <section id="quote-form" className={`bg-white py-16 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600">
              {description}
            </p>
          </div>
          <QuoteForm onFormSubmit={enablePayment ? handleFormSubmit : undefined} />
        </div>
      </section>
    );
  }

  // On other pages, make it collapsible and auto-open when hash is present
  return (
    <section id="quote-form" className={`bg-white py-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <details 
          ref={detailsRef}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <summary className="cursor-pointer p-8 hover:bg-teal-50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0d9488] mb-2">
                  {title}
                </h2>
                <p className="text-gray-600">
                  Click to open the quote form
                </p>
              </div>
              <svg className="w-8 h-8 text-teal-600 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </summary>
          
          <div className="p-8 pt-0">
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {description}
              </p>
            </div>
            <QuoteForm onFormSubmit={enablePayment ? handleFormSubmit : undefined} />
          </div>
        </details>
      </div>
    </section>
  );
}

