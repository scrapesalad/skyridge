'use client';

import { useState, useEffect } from 'react';

interface PhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PhoneModal({ isOpen, onClose }: PhoneModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <div className="p-8 text-center">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Phone icon */}
          <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Call Icon Dumpsters
          </h3>
          <p className="text-gray-600 mb-6">
            Ready to get started? Give us a call for fast, reliable service.
          </p>

          {/* Phone number */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-600 mb-2">Phone Number</p>
            <a 
              href="tel:(801) 918-6000" 
              className="text-3xl font-bold text-[#0d9488] hover:text-teal-700 transition-colors"
            >
              (801) 918-6000
            </a>
          </div>

          {/* Call button */}
          <a 
            href="tel:(801) 918-6000"
            className="w-full bg-[#0d9488] text-white py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors font-medium text-lg inline-block"
          >
            CALL NOW
          </a>

          {/* Additional info */}
          <p className="text-sm text-gray-500 mt-4">
            Available 7 days a week for your convenience
          </p>
        </div>
      </div>
    </div>
  );
}
