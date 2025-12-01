"use client";

import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="text-white hover:text-purple-200 transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/70"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          {open ? (
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          ) : (
            <path fillRule="evenodd" d="M3 5h14a1 1 0 100-2H3a1 1 0 100 2zm14 4H3a1 1 0 100 2h14a1 1 0 100-2zm0 6H3a1 1 0 100 2h14a1 1 0 100-2z" clipRule="evenodd" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full mt-2 mx-4 bg-white rounded-xl shadow-xl border border-gray-200 z-[60]">
          <nav className="py-2">
            <a href="https://icondumpsters.com/services" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 font-medium">Services</a>
            <a href="https://icondumpsters.com/locations" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 font-medium">Service Area</a>
            <a href="https://icondumpsters.com/dumpster-sizes" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 font-medium">Dumpster Sizes</a>
            <a href="https://icondumpsters.com/dumpster-calculator" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 font-medium">Calculator</a>
            <a href="https://icondumpsters.com/blog" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 font-medium">Blog</a>
            <a href="https://icondumpsters.com/frequent-buyers" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 font-medium">Frequent Buyers</a>
            <a href="https://icondumpsters.com/book" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 font-medium">Book Now</a>
            <div className="border-t my-1" />
            <a href="https://icondumpsters.com/about" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 font-medium">About</a>
            <a href="https://icondumpsters.com/reviews" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 font-medium">Reviews</a>
            <a href="https://icondumpsters.com/faq" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 font-medium">FAQ</a>
            <a href="https://icondumpsters.com/contact" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 font-medium">Contact</a>
            <div className="px-4 py-3">
              <a
                href="https://icondumpsters.com/#quote-form"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-[#0d9488] text-white py-2 rounded-lg font-semibold hover:bg-teal-700"
              >
                Get Quote
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}


