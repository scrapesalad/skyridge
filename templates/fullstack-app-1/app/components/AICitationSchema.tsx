import React from 'react';

interface AICitationData {
  organizationName: string;
  description: string;
  url: string;
  telephone: string;
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
  services: Array<{
    name: string;
    description: string;
    areaServed: string[];
  }>;
  expertise: string[];
  certifications: string[];
  yearsInBusiness: number;
  customerCount: number;
  rating: {
    value: number;
    count: number;
  };
}

interface AICitationSchemaProps {
  data: AICitationData;
}

export default function AICitationSchema({ data }: AICitationSchemaProps) {
  const baseUrl = 'https://icondumpsters.com';

  const generateAICitationSchema = () => {
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
      areaServed: [
        {
          '@type': 'State',
          name: 'Utah',
        },
        {
          '@type': 'City',
          name: 'Salt Lake City',
        },
        {
          '@type': 'City',
          name: 'West Jordan',
        },
        {
          '@type': 'City',
          name: 'Sandy',
        },
        {
          '@type': 'City',
          name: 'Murray',
        },
        {
          '@type': 'City',
          name: 'Draper',
        },
        {
          '@type': 'City',
          name: 'Lehi',
        },
        {
          '@type': 'City',
          name: 'Orem',
        },
        {
          '@type': 'City',
          name: 'Provo',
        },
      ],
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: data.geo.latitude,
          longitude: data.geo.longitude,
        },
        geoRadius: '50000', // 50km radius
      },
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
      knowsAbout: data.expertise,
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
      // Note: aggregateRating and reviews removed until we have verified customer reviews
      // Only use real, verified customer reviews from Google My Business, Yelp, or direct customer feedback
      sameAs: [
        'https://www.google.com/maps/place/Icon+Dumpsters',
        'https://www.facebook.com/p/Icon-Dumpsters-61557014799828/',
        'https://www.yelp.com/biz/icon-dumpsters',
      ],
      openingHours: [
        'Mo-Su 00:00-23:59', // 24/7 availability
      ],
      priceRange: '$$',
      paymentAccepted: ['Cash', 'Credit Card', 'Check'],
      currenciesAccepted: 'USD',
      logo: `${baseUrl}/images/logo.png`,
      image: [
        `${baseUrl}/images/dumpsters.jpeg`,
        `${baseUrl}/images/Construction-Rental-480x480.jpg`,
        `${baseUrl}/images/optimized/icondumpsters_general_dumpster500x500_1.webp`,
      ],
      // Additional properties for AI understanding
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
          value: 'Utah, Salt Lake County, Utah County',
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
    };
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateAICitationSchema(), null, 2),
      }}
    />
  );
}

// Default data for Icon Dumpsters
export const iconDumpstersAIData: AICitationData = {
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
      areaServed: ['Utah', 'Salt Lake County', 'Utah County'],
    },
    {
      name: '20-Yard Dumpster Rental',
      description: 'Ideal for medium-sized projects like kitchen renovations, room additions, and moderate construction work. Dimensions: 16 feet x 7 feet x 6 feet.',
      areaServed: ['Utah', 'Salt Lake County', 'Utah County'],
    },
    {
      name: '30-Yard Dumpster Rental',
      description: 'Best for large construction projects, whole house renovations, and major cleanouts. Dimensions: 22 feet x 7 feet x 6 feet.',
      areaServed: ['Utah', 'Salt Lake County', 'Utah County'],
    },
    {
      name: 'Construction Waste Removal',
      description: 'Specialized service for construction debris, drywall, lumber, and building materials with proper disposal methods.',
      areaServed: ['Utah', 'Salt Lake County', 'Utah County'],
    },
    {
      name: 'Residential Cleanout Services',
      description: 'Complete home cleanout services including furniture, appliances, and household items with eco-friendly disposal.',
      areaServed: ['Utah', 'Salt Lake County', 'Utah County'],
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
  customerCount: 100, // Conservative estimate - update with actual verified count
  rating: {
    value: 5.0,
    count: 1, // Based on actual verified reviews in data/reviews.json
  },
};
