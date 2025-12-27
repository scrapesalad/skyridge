import React from 'react';
import { BUSINESS, SITE_URL } from '@/lib/site';

const BASE_URL = SITE_URL;

// ===== PREDEFINED BUSINESS DATA =====

export const SkyRidgeBusinessData = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  '@id': `${BASE_URL}#roofingcontractor`,
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  description: 'Professional roofing contractor serving Utah with roof replacement, repair, and installation services. Licensed, insured, and insurance claim experts.',
  url: BASE_URL,
  telephone: BUSINESS.phone,
  image: `${BASE_URL}/images/logo/ROOFING.png`,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/images/logo/ROOFING.png`,
    width: '280',
    height: '100',
  },
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Utah',
    addressLocality: 'Salt Lake City',
    addressRegion: BUSINESS.state,
    postalCode: '84101',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.7608,
    longitude: -111.8910,
  },
  areaServed: [
    { '@type': 'City', name: 'Salt Lake City, UT' },
    { '@type': 'City', name: 'Sandy, UT' },
    { '@type': 'City', name: 'West Jordan, UT' },
    { '@type': 'City', name: 'Provo, UT' },
    { '@type': 'City', name: 'Orem, UT' },
    { '@type': 'City', name: 'Lehi, UT' },
    { '@type': 'City', name: 'Ogden, UT' },
    { '@type': 'City', name: 'West Valley City, UT' },
    { '@type': 'City', name: 'Layton, UT' },
    { '@type': 'City', name: 'Taylorsville, UT' },
    { '@type': 'City', name: 'St. George, UT' },
    { '@type': 'City', name: 'Logan, UT' },
    { '@type': 'State', name: 'Utah' },
  ],
  paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Financing'],
  currenciesAccepted: 'USD',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '17:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.facebook.com/skyridgeroofing',
    'https://twitter.com/skyridgeroofing',
    'https://www.instagram.com/skyridgeroofing',
  ],
};

export const SkyRidgeOrganizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}#organization`,
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/images/logo/ROOFING.png`,
  },
  description: 'Professional roofing services throughout Utah',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: BUSINESS.phone,
    contactType: 'Customer Service',
    areaServed: 'US-UT',
    availableLanguage: 'English',
  },
};

// ===== ROOFING SERVICES DATA =====

export const RoofingServicesData = [
  {
    name: 'Roof Replacement',
    description: 'Complete roof replacement services with premium materials and expert installation.',
    serviceType: 'Roof Replacement',
    url: `${BASE_URL}/services/roof-replacement`,
  },
  {
    name: 'Roof Repair',
    description: 'Professional roof repair services for leaks, damage, and maintenance.',
    serviceType: 'Roof Repair',
    url: `${BASE_URL}/services/roof-repairs`,
  },
  {
    name: 'Emergency Roof Repair',
    description: '24/7 emergency roof repair services for urgent situations.',
    serviceType: 'Emergency Repair',
    url: `${BASE_URL}/services/emergency-roof-repair`,
  },
  {
    name: 'Commercial Roofing',
    description: 'Commercial roofing solutions for businesses and large properties.',
    serviceType: 'Commercial Roofing',
    url: `${BASE_URL}/services/commercial-roofing`,
  },
  {
    name: 'Residential Roofing',
    description: 'Residential roofing services for homes and properties.',
    serviceType: 'Residential Roofing',
    url: `${BASE_URL}/services/residential-roofing`,
  },
  {
    name: 'Roof Inspection',
    description: 'Professional roof inspection services to assess condition and identify issues.',
    serviceType: 'Inspection',
    url: `${BASE_URL}/services/roof-inspection`,
  },
];

// ===== MAIN COMPONENT =====

interface StructuredDataProps {
  type?: 'homepage' | 'service' | 'city' | 'blog' | 'faq';
  serviceName?: string;
  serviceDescription?: string;
  cityName?: string;
  faqData?: Array<{ question: string; answer: string }>;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export default function StructuredData({
  type = 'homepage',
  serviceName,
  serviceDescription,
  cityName,
  faqData,
  breadcrumbs,
}: StructuredDataProps) {
  // LocalBusiness Schema
  const localBusinessSchema = SkyRidgeBusinessData;

  // Service Schema (for service pages)
  const serviceSchema =
    type === 'service' && serviceName
      ? {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: serviceName,
          description: serviceDescription || `Professional ${serviceName.toLowerCase()} services in Utah`,
          provider: {
            '@type': 'RoofingContractor',
            name: BUSINESS.name,
            url: BASE_URL,
            telephone: BUSINESS.phone,
          },
          areaServed: SkyRidgeBusinessData.areaServed,
          serviceType: serviceName,
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: BASE_URL,
          },
        }
      : null;

  // ItemList Schema (Service Catalog)
  const serviceCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Sky Ridge Roofing Services',
    description: 'Complete roofing services offered by Sky Ridge Roofing',
    itemListElement: RoofingServicesData.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        serviceType: service.serviceType,
        url: service.url,
        provider: {
          '@type': 'RoofingContractor',
          name: BUSINESS.name,
        },
      },
    })),
  };

  // FAQ Schema
  const faqSchema =
    type === 'faq' && faqData
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqData.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: `${BASE_URL}${crumb.url}`,
        })),
      }
    : null;

  // City-specific LocalBusiness
  const cityLocalBusinessSchema =
    type === 'city' && cityName
      ? {
          ...localBusinessSchema,
          '@id': `${BASE_URL}/locations/${cityName.toLowerCase().replace(/\s+/g, '-')}#localbusiness`,
          name: `${BUSINESS.name} - ${cityName}`,
          description: `Professional roofing services in ${cityName}, Utah. Roof replacement, repair, and installation.`,
          areaServed: {
            '@type': 'City',
            name: `${cityName}, UT`,
          },
        }
      : null;

  // Organization Schema
  const organizationSchema = SkyRidgeOrganizationData;

  return (
    <>
      {/* LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cityLocalBusinessSchema || localBusinessSchema),
        }}
      />

      {/* Organization */}
      {type === 'homepage' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      )}

      {/* Service Catalog */}
      {type === 'homepage' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceCatalogSchema),
          }}
        />
      )}

      {/* Service */}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      )}

      {/* FAQ */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      {/* Breadcrumbs */}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      )}
    </>
  );
}
