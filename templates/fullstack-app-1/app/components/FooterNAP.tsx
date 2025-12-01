"use client";
import React from "react";

export default function FooterNAP() {
  // Use production URL to avoid hydration mismatch
  const base = "https://icondumpsters.com";

  const contactSchema = {
    "@context": "https://schema.org",
    "@id": `${base}/#org`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-801-918-6000",
      contactType: "customer service",
      areaServed: "US-UT",
      availableLanguage: "English",
    },
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-4 md:grid-cols-3 items-start">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Icon Dumpsters</h2>
          <p className="text-gray-600">Utah dumpster rental service</p>
        </div>
        <div>
          <p className="text-gray-600">Customer Service</p>
          <a href="tel:(801) 918-6000" className="text-trust-blue hover:text-trust-blue-dark font-semibold">
            (801) 918-6000
          </a>
          <p className="text-gray-600 mt-1">Mon–Fri 7:00–18:00, Sat 8:00–16:00</p>
        </div>
        <div>
          <p className="text-gray-600">Service Area</p>
          <p className="text-gray-700">Salt Lake, Utah, Weber, Davis, Summit, Tooele</p>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
    </section>
  );
}

