'use client';

import { useState } from 'react';

interface QuickQuoteButtonProps {
  dumpsterSize: string;
  className?: string;
  pricing?: {
    [key: string]: {
      price: number;
      description: string;
    };
  };
}

export default function QuickQuoteButton({ dumpsterSize, className = '' }: QuickQuoteButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone || !zipCode) {
      alert('Please fill in all fields');
      return;
    }

    // Submit to internal API
    const formData = new FormData();
    formData.append('phone', phone);
    formData.append('zipCode', zipCode);
    formData.append('dumpsterSize', dumpsterSize);
    formData.append('source', 'Quick Quote Button');
    formData.append('subject', `Quick Quote Request - ${dumpsterSize} Dumpster`);

    try {
      await fetch('/api/lead', {
        method: 'POST',
        body: formData as any,
      });
      
      alert('Thank you! We\'ll call you within 30 minutes with your quote.');
      setShowModal(false);
      setPhone('');
      setZipCode('');
    } catch (error) {
      alert('There was an error. Please call us directly at (801) 918-6000');
    }
  };

  return (
    <>
      <button
        onClick={() => { setShowModal(true); }}
        className={`bg-[#0d9488] text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium ${className}`}
      >
        Get Quick Quote
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setShowModal(false)}
          />
          
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Get Your {dumpsterSize} Dumpster Quote
            </h3>
            <p className="text-gray-600 mb-6">
              We'll call you within 30 minutes with your instant quote!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0d9488]"
                  placeholder="(801) 555-1234"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zip Code
                </label>
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0d9488]"
                  placeholder="84000"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0d9488] text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                Get My Quote
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              Or call us directly: <a href="tel:(801) 918-6000" className="text-[#0d9488] font-medium">(801) 918-6000</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
