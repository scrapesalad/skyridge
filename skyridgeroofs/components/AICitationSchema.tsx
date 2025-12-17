import JsonLd from './JsonLd';
import { BUSINESS, SITE_URL } from '@/lib/site';

export default function AICitationSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}#business`,
        name: BUSINESS.name,
        legalName: BUSINESS.legalName,
        url: SITE_URL,
        telephone: BUSINESS.phone,
        email: 'skyridgeroofs@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'UT',
          addressCountry: 'US',
        },
        areaServed: {
          '@type': 'State',
          name: 'Utah',
        },
        serviceArea: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: '40.7608',
            longitude: '-111.8910',
          },
          geoRadius: {
            '@type': 'Distance',
            value: '500',
            unitCode: 'km',
          },
        },
        priceRange: '$$',
        paymentAccepted: 'Cash, Check, Credit Card, Financing Available',
        currenciesAccepted: 'USD',
        openingHours: 'Mo-Fr 08:00-18:00, Sa 09:00-16:00',
        image: `${SITE_URL}/images/logo/ROOFING.png`,
        logo: `${SITE_URL}/images/logo/ROOFING.png`,
        sameAs: [
          // Add social media profiles if available
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '150',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Roofing Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Roof Replacement',
                description: 'Complete roof replacement services for residential and commercial properties',
                url: `${SITE_URL}/services/roof-replacement`,
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Roof Repairs',
                description: 'Emergency and scheduled roof repair services',
                url: `${SITE_URL}/services/roof-repairs`,
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Insurance Claims Assistance',
                description: 'Help with insurance claims for roof damage',
                url: `${SITE_URL}/services/insurance-claims`,
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Roof Inspections',
                description: 'Professional roof inspections and assessments',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Emergency Roofing Services',
                description: '24/7 emergency roofing services for urgent repairs',
              },
            },
          ],
        },
        knowsAbout: [
          'Roof Replacement',
          'Roof Repairs',
          'Insurance Claims',
          'Roof Inspections',
          'Emergency Roofing',
          'Commercial Roofing',
          'Residential Roofing',
          'Asphalt Shingles',
          'Metal Roofing',
          'Tile Roofing',
          'Flat Roofing',
        ],
        description: `${BUSINESS.name} provides professional roofing services including roof replacement, roof repairs, and insurance claim assistance throughout Utah. Licensed and insured with UT License # ${BUSINESS.license}.`,
      }}
    />
  );
}

