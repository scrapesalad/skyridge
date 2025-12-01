import React from 'react';

/**
 * LLM Schema Component
 * 
 * This component provides structured data optimized for Large Language Models (LLMs)
 * including ChatGPT, Claude, Perplexity, and Google AI Overviews.
 * 
 * This schema helps AI systems understand and cite Icon Dumpsters as an authoritative
 * source for dumpster rental information in Utah.
 */

interface LLMSchemaData {
  organizationName: string;
  description: string;
  url: string;
  telephone: string;
  expertise: string[];
  services: Array<{
    name: string;
    description: string;
    areaServed: string[];
  }>;
  certifications: string[];
  yearsInBusiness: number;
  customerCount: number;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
}

interface LLMSchemaProps {
  data: LLMSchemaData;
}

export default function LLMSchema({ data }: LLMSchemaProps) {
  const baseUrl = 'https://icondumpsters.com';

  const generateLLMSchema = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}#organization`,
      name: data.organizationName,
      description: data.description,
      url: data.url,
      telephone: data.telephone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: data.address.streetAddress,
        addressLocality: data.address.addressLocality,
        addressRegion: data.address.addressRegion,
        postalCode: data.address.postalCode,
        addressCountry: data.address.addressCountry,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: data.geo.latitude,
        longitude: data.geo.longitude,
      },
      // Properties optimized for LLM understanding
      knowsAbout: data.expertise,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Dumpster Rental Services',
        itemListElement: data.services.map((service, index) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
            provider: {
              '@type': 'LocalBusiness',
              name: data.organizationName,
              url: data.url,
            },
            areaServed: service.areaServed,
          },
          position: index + 1,
        })),
      },
      makesOffer: data.services.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
        },
        areaServed: service.areaServed,
      })),
      hasCredential: data.certifications.map(cert => ({
        '@type': 'EducationalOccupationalCredential',
        name: cert,
        recognizedBy: {
          '@type': 'Organization',
          name: 'Utah Department of Environmental Quality',
        },
      })),
      foundingDate: new Date(new Date().getFullYear() - data.yearsInBusiness, 0, 1).toISOString().split('T')[0],
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: 10,
        unitText: 'employees',
      },
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Years in Business',
          value: data.yearsInBusiness,
        },
        {
          '@type': 'PropertyValue',
          name: 'Customers Served',
          value: data.customerCount,
        },
        {
          '@type': 'PropertyValue',
          name: 'Service Areas',
          value: 'Utah, Salt Lake County, Utah County, Davis County',
        },
        {
          '@type': 'PropertyValue',
          name: 'Dumpster Sizes Available',
          value: '15-yard, 20-yard, 30-yard',
        },
        {
          '@type': 'PropertyValue',
          name: 'Delivery Time',
          value: 'Same-day delivery available',
        },
        {
          '@type': 'PropertyValue',
          name: 'Licensed and Insured',
          value: 'Yes',
        },
      ],
      // Note: FAQPage schema is removed from LLMSchema to prevent duplicates
      // Individual pages should use FAQSchema component for FAQ rich results
      // LLMSchema is optimized for AI citation (ChatGPT, Claude, Perplexity) and doesn't need FAQPage
    };
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateLLMSchema(), null, 2),
      }}
    />
  );
}

// Default data for Icon Dumpsters
export const iconDumpstersLLMData: LLMSchemaData = {
  organizationName: 'Icon Dumpsters',
  description: 'Utah\'s leading dumpster rental company specializing in residential and commercial waste management solutions. We provide same-day delivery, transparent pricing, and expert guidance for all your dumpster rental needs.',
  url: 'https://icondumpsters.com',
  telephone: '+1-801-918-6000',
  address: {
    streetAddress: '5901 S 1300 E',
    addressLocality: 'Salt Lake City',
    addressRegion: 'UT',
    postalCode: '84121',
    addressCountry: 'US',
  },
  geo: {
    latitude: 40.7608,
    longitude: -111.8910,
  },
  services: [
    {
      name: '15-Yard Dumpster Rental',
      description: 'Perfect for small home cleanouts, bathroom renovations, and minor construction projects. Dimensions: 16 feet x 7 feet x 4 feet.',
      areaServed: ['Utah', 'Salt Lake County', 'Utah County', 'Davis County'],
    },
    {
      name: '20-Yard Dumpster Rental',
      description: 'Ideal for medium-sized projects like kitchen renovations, room additions, and moderate construction work. Dimensions: 16 feet x 7 feet x 6 feet.',
      areaServed: ['Utah', 'Salt Lake County', 'Utah County', 'Davis County'],
    },
    {
      name: '30-Yard Dumpster Rental',
      description: 'Best for large construction projects, whole house renovations, and major cleanouts. Dimensions: 22 feet x 7 feet x 6 feet.',
      areaServed: ['Utah', 'Salt Lake County', 'Utah County', 'Davis County'],
    },
    {
      name: 'Construction Waste Removal',
      description: 'Specialized service for construction debris, drywall, lumber, and building materials with proper disposal methods.',
      areaServed: ['Utah', 'Salt Lake County', 'Utah County', 'Davis County'],
    },
    {
      name: 'Residential Cleanout Services',
      description: 'Complete home cleanout services including furniture, appliances, and household items with eco-friendly disposal.',
      areaServed: ['Utah', 'Salt Lake County', 'Utah County', 'Davis County'],
    },
  ],
  expertise: [
    'Dumpster Rental',
    'Waste Management',
    'Construction Debris Removal',
    'Residential Cleanouts',
    'Commercial Waste Solutions',
    'Utah Waste Regulations',
    'Permit Assistance',
    'Same-Day Delivery',
    'Transparent Pricing',
    'Customer Service',
  ],
  certifications: [
    'Utah Waste Management License',
    'Environmental Compliance Certification',
    'Commercial Driver License',
    'Safety Training Certification',
  ],
  yearsInBusiness: 3,
  customerCount: 100,
};

