import React from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || '{{siteUrl}}';

type AreaServedEntry =
  | string
  | {
      name: string;
      type?: 'City' | 'AdministrativeArea' | 'State' | 'Country';
    };

interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

interface ServiceAreaCircle extends GeoCoordinates {
  radius: string;
}

interface OfferDetails {
  name: string;
  description?: string;
  price?: string;
  priceCurrency?: string;
  availability?: string;
  eligibleRegion?: string;
  priceValidUntil?: string;
  url?: string;
}

interface ServiceOfferDetails extends OfferDetails {
  serviceType?: string;
  areaServed?: string[];
}

interface ReviewDetails {
  author: string;
  reviewBody: string;
  ratingValue: number;
  datePublished: string;
  source?: string;
}

interface AggregateRatingDetails {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

interface ContactPointDetails {
  contactType: string;
  telephone: string;
  areaServed?: string;
  availableLanguage?: string[];
  contactOption?: string[];
  email?: string;
  hoursAvailable?: string[];
}

interface OfferCatalogDetails {
  name: string;
  itemListElement: Array<{
    name: string;
    description: string;
    url?: string;
    price?: string;
    priceCurrency?: string;
  }>;
}

interface LocalBusinessData {
  id?: string;
  businessType?: 'LocalBusiness' | 'HomeAndConstructionBusiness';
  legalName?: string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  email?: string;
  slogan?: string;
  image?: string;
  logo?: string;
  priceRange?: string;
  currenciesAccepted?: string;
  paymentAccepted?: string[];
  keywords?: string[];
  knowsAbout?: string[];
  sameAs?: string[];
  areaServed?: AreaServedEntry[];
  serviceArea?: ServiceAreaCircle;
  hasMap?: string;
  hasCredential?: string[];
  foundingDate?: string;
  founders?: string[];
  brand?: string;
  parentOrganization?: string;
  contactPoints?: ContactPointDetails[];
  aggregateRating?: AggregateRatingDetails;
  reviews?: ReviewDetails[];
  offers?: OfferDetails[];
  makesOffer?: ServiceOfferDetails[];
  hasOfferCatalog?: OfferCatalogDetails;
  openingHours?: string[];
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: GeoCoordinates;
}

interface ServiceData {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
    image?: string;
  };
  areaServed: string[];
  serviceType: string;
  priceRange?: string;
  serviceUrl?: string;
  serviceOutput?: string;
  serviceAudience?: string[];
  termsOfService?: string;
  sameAs?: string[];
  offers?: OfferDetails[];
  brand?: string;
}

interface FAQData {
  question: string;
  answer: string;
}

interface BreadcrumbData {
  name: string;
  url: string;
}

interface OrganizationData {
  id?: string;
  name: string;
  legalName?: string;
  description: string;
  url: string;
  logo: string;
  email?: string;
  telephone?: string;
  sameAs?: string[];
  areaServed?: AreaServedEntry[];
  foundingDate?: string;
  founders?: string[];
  parentOrganization?: string;
  taxID?: string;
  duns?: string;
  naics?: string;
  awards?: string[];
  knowsAbout?: string[];
  contactPoints?: ContactPointDetails[];
  brand?: string;
  hasOfferCatalog?: OfferCatalogDetails;
}

interface ProductData {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  sku?: string;
  offers?: {
    price: string;
    priceCurrency: string;
    availability?: string;
    url?: string;
    validFrom?: string;
    validThrough?: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
}

interface WebSiteData {
  name: string;
  url: string;
  description?: string;
  potentialAction?: {
    '@type': 'SearchAction';
    target: {
      '@type': 'EntryPoint';
      urlTemplate: string;
    };
    'query-input': string;
  };
}

interface ItemListData {
  name: string;
  description?: string;
  itemListElement: Array<{
    '@type'?: string;
    name: string;
    description?: string;
    url?: string;
    image?: string;
    position: number;
  }>;
}

interface HowToData {
  name: string;
  description: string;
  image?: string;
  totalTime?: string;
  step: Array<{
    '@type': 'HowToStep';
    name: string;
    text: string;
    image?: string;
    url?: string;
  }>;
}

interface StructuredDataProps {
  type: 'localBusiness' | 'service' | 'faq' | 'breadcrumb' | 'article' | 'organization' | 'product' | 'website' | 'itemList' | 'howTo';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const toAbsoluteUrl = (value?: string) => {
    if (!value) return undefined;
    return value.startsWith('http') ? value : `${BASE_URL}${value}`;
  };

  const mapAreaServed = (entries?: AreaServedEntry[]) => {
    if (!entries?.length) return undefined;
    return entries.map(entry =>
      typeof entry === 'string'
        ? entry
        : {
            '@type': entry.type ?? 'AdministrativeArea',
            name: entry.name,
          }
    );
  };

  const buildContactPoints = (contactPoints?: ContactPointDetails[]) => {
    if (!contactPoints?.length) return undefined;
    return contactPoints.map(point => ({
      '@type': 'ContactPoint',
      contactType: point.contactType,
      telephone: point.telephone,
      ...(point.areaServed && { areaServed: point.areaServed }),
      ...(point.availableLanguage && { availableLanguage: point.availableLanguage }),
      ...(point.contactOption && { contactOption: point.contactOption }),
      ...(point.email && { email: point.email }),
      ...(point.hoursAvailable && { hoursAvailable: point.hoursAvailable }),
    }));
  };

  const buildAggregateOfferFromRange = (priceRange?: string) => {
    if (!priceRange) return undefined;
    const cleaned = priceRange.replace(/\$/g, '');
    const [lowRaw, highRaw] = cleaned.split('-').map(value => Number(value.trim()));
    if (!Number.isFinite(lowRaw)) return undefined;
    const aggregateOffer: Record<string, any> = {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
    };
    if (Number.isFinite(highRaw)) {
      aggregateOffer.lowPrice = lowRaw;
      aggregateOffer.highPrice = highRaw;
    } else {
      aggregateOffer.price = lowRaw;
    }
    return aggregateOffer;
  };

  const generateStructuredData = () => {
    switch (type) {
      case 'localBusiness':
        const businessData: LocalBusinessData = data;
        const localBusiness = {
          '@context': 'https://schema.org',
          '@type': businessData.businessType ?? 'LocalBusiness',
          '@id': businessData.id ?? `${BASE_URL}#local-business`,
          name: businessData.name,
          ...(businessData.legalName && { legalName: businessData.legalName }),
          description: businessData.description,
          url: businessData.url,
          telephone: businessData.telephone,
          ...(businessData.email && { email: businessData.email }),
          ...(businessData.logo && { logo: toAbsoluteUrl(businessData.logo) }),
          ...(businessData.image && { image: toAbsoluteUrl(businessData.image) }),
          ...(businessData.slogan && { slogan: businessData.slogan }),
          address: {
            '@type': 'PostalAddress',
            streetAddress: businessData.address.streetAddress,
            addressLocality: businessData.address.addressLocality,
            addressRegion: businessData.address.addressRegion,
            postalCode: businessData.address.postalCode,
            addressCountry: businessData.address.addressCountry,
          },
          ...(businessData.geo && {
            geo: {
              '@type': 'GeoCoordinates',
              latitude: businessData.geo.latitude,
              longitude: businessData.geo.longitude,
            },
          }),
          ...(businessData.serviceArea && {
            serviceArea: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: businessData.serviceArea.latitude,
                longitude: businessData.serviceArea.longitude,
              },
              geoRadius: businessData.serviceArea.radius,
            },
          }),
          ...(businessData.openingHours && {
            openingHours: businessData.openingHours,
          }),
          ...(businessData.priceRange && {
            priceRange: businessData.priceRange,
          }),
          ...(businessData.currenciesAccepted && {
            currenciesAccepted: businessData.currenciesAccepted,
          }),
          ...(businessData.paymentAccepted && {
            paymentAccepted: businessData.paymentAccepted,
          }),
          ...(businessData.hasMap && {
            hasMap: businessData.hasMap,
          }),
          ...(businessData.sameAs && {
            sameAs: businessData.sameAs,
          }),
          ...(businessData.keywords && {
            keywords: businessData.keywords.join(', '),
          }),
          ...(businessData.knowsAbout && {
            knowsAbout: businessData.knowsAbout,
          }),
          ...(mapAreaServed(businessData.areaServed) && {
            areaServed: mapAreaServed(businessData.areaServed),
          }),
          ...(businessData.hasCredential && {
            hasCredential: businessData.hasCredential.map(name => ({
              '@type': 'EducationalOccupationalCredential',
              name,
            })),
          }),
          ...(businessData.foundingDate && { foundingDate: businessData.foundingDate }),
          ...(businessData.founders && {
            founder: businessData.founders.map(name => ({
              '@type': 'Person',
              name,
            })),
          }),
          ...(businessData.brand && {
            brand: {
              '@type': 'Brand',
              name: businessData.brand,
            },
          }),
          ...(businessData.parentOrganization && {
            parentOrganization: {
              '@type': 'Organization',
              name: businessData.parentOrganization,
            },
          }),
          ...(buildContactPoints(businessData.contactPoints) && {
            contactPoint: buildContactPoints(businessData.contactPoints),
          }),
          ...(businessData.aggregateRating && {
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: businessData.aggregateRating.ratingValue,
              reviewCount: businessData.aggregateRating.reviewCount,
              ...(businessData.aggregateRating.bestRating && { bestRating: businessData.aggregateRating.bestRating }),
              ...(businessData.aggregateRating.worstRating && { worstRating: businessData.aggregateRating.worstRating }),
            },
          }),
          ...(businessData.reviews && {
            review: businessData.reviews.map(review => ({
              '@type': 'Review',
              reviewBody: review.reviewBody,
              datePublished: review.datePublished,
              author: {
                '@type': 'Person',
                name: review.author,
              },
              reviewRating: {
                '@type': 'Rating',
                ratingValue: review.ratingValue,
                bestRating: 5,
                worstRating: 1,
              },
              ...(review.source && {
                publisher: {
                  '@type': 'Organization',
                  name: review.source,
                },
              }),
            })),
          }),
          ...(businessData.offers && {
            offers: businessData.offers.map(offer => ({
              '@type': 'Offer',
              name: offer.name,
              ...(offer.description && { description: offer.description }),
              ...(offer.price && { price: String(offer.price) }),
              ...(offer.priceCurrency && { priceCurrency: offer.priceCurrency }),
              ...(offer.url && { url: toAbsoluteUrl(offer.url) }),
              ...(offer.availability && { availability: offer.availability || 'https://schema.org/InStock' }),
              ...(offer.eligibleRegion && { eligibleRegion: offer.eligibleRegion }),
              ...(offer.priceValidUntil && { priceValidUntil: offer.priceValidUntil }),
            })),
          }),
          ...(businessData.hasOfferCatalog && {
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: businessData.hasOfferCatalog.name,
              itemListElement: businessData.hasOfferCatalog.itemListElement.map((item, index) => ({
                '@type': 'Offer',
                position: index + 1,
                itemOffered: {
                  '@type': 'Service',
                  name: item.name,
                  description: item.description,
                  ...(item.url && { url: toAbsoluteUrl(item.url) }),
                },
                ...(item.price && { price: String(item.price) }),
                ...(item.priceCurrency && { priceCurrency: item.priceCurrency }),
                availability: 'https://schema.org/InStock',
              })),
            },
          }),
        };

        const makesOfferSource = businessData.makesOffer ?? [
          {
            name: 'Dumpster Rental Near Me',
            description: 'Professional dumpster rental services with same-day delivery',
            serviceType: 'Dumpster Rental',
            areaServed: [
              'Salt Lake City, UT',
              'Murray, UT',
              'Sandy, UT',
              'West Jordan, UT',
              'South Jordan, UT',
              'Draper, UT',
              'Provo, UT',
              'Orem, UT',
              'Layton, UT',
              'Clearfield, UT',
            ],
          },
        ];

        return {
          ...localBusiness,
          makesOffer: makesOfferSource.map(offer => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: offer.name,
              description: offer.description,
              ...(offer.serviceType && { serviceType: offer.serviceType }),
              ...(offer.areaServed && {
                areaServed: Array.isArray(offer.areaServed)
                  ? offer.areaServed.map(area => typeof area === 'string' ? area : { '@type': 'City', name: area })
                  : offer.areaServed,
              }),
              ...(offer.url && { url: toAbsoluteUrl(offer.url) }),
            },
            ...(offer.price && { price: String(offer.price) }),
            ...(offer.priceCurrency && { priceCurrency: offer.priceCurrency }),
            ...(offer.availability && { availability: offer.availability }),
            ...(offer.eligibleRegion && { eligibleRegion: offer.eligibleRegion }),
          })),
        };

      case 'service':
        const serviceData: ServiceData = data;
        const serviceSchema: Record<string, any> = {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: serviceData.name,
          description: serviceData.description,
          provider: {
            '@type': 'LocalBusiness',
            name: serviceData.provider.name,
            url: serviceData.provider.url,
            ...(serviceData.provider.image && { image: serviceData.provider.image }),
          },
          areaServed: serviceData.areaServed,
          serviceType: serviceData.serviceType,
        };
        if (serviceData.priceRange && !serviceData.offers?.length) {
          const aggregateOffer = buildAggregateOfferFromRange(serviceData.priceRange);
          if (aggregateOffer) {
            serviceSchema.offers = aggregateOffer;
          }
        }
        if (serviceData.serviceUrl) {
          serviceSchema.url = serviceData.serviceUrl;
        }
        if (serviceData.serviceOutput) {
          serviceSchema.serviceOutput = serviceData.serviceOutput;
        }
        if (serviceData.brand) {
          serviceSchema.brand = {
            '@type': 'Brand',
            name: serviceData.brand,
          };
        }
        if (serviceData.termsOfService) {
          serviceSchema.termsOfService = serviceData.termsOfService;
        }
        if (serviceData.sameAs) {
          serviceSchema.sameAs = serviceData.sameAs;
        }
        if (serviceData.serviceAudience?.length) {
          serviceSchema.audience = serviceData.serviceAudience.map(audience => ({
            '@type': 'Audience',
            audienceType: audience,
          }));
        }
        if (serviceData.offers?.length) {
          serviceSchema.offers = serviceData.offers.map(offer => ({
            '@type': 'Offer',
            name: offer.name,
            ...(offer.description && { description: offer.description }),
            ...(offer.price && { price: String(offer.price) }),
            ...(offer.priceCurrency && { priceCurrency: offer.priceCurrency }),
            ...(offer.url && { url: toAbsoluteUrl(offer.url) }),
            ...(offer.availability && { availability: offer.availability || 'https://schema.org/InStock' }),
            ...(offer.eligibleRegion && { eligibleRegion: offer.eligibleRegion }),
            ...(offer.priceValidUntil && { priceValidUntil: offer.priceValidUntil }),
          }));
        }
        return serviceSchema;

      case 'faq':
        const faqData: FAQData[] = data;
        if (!faqData || faqData.length === 0) {
          return null; // Don't generate empty FAQ schema
        }
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqData.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        };

      case 'breadcrumb':
        const breadcrumbData: BreadcrumbData[] = data;
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbData.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${BASE_URL}${item.url}`,
          })),
        };

      case 'article':
        const articleData = data;
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: articleData.headline,
          description: articleData.description,
          ...(articleData.image && {
            image: Array.isArray(articleData.image)
              ? articleData.image.map((img: string) => toAbsoluteUrl(img))
              : toAbsoluteUrl(articleData.image),
          }),
          author: {
            '@type': 'Organization',
            name: articleData.author || 'Icon Dumpsters',
            url: BASE_URL,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Icon Dumpsters',
            logo: {
              '@type': 'ImageObject',
              url: toAbsoluteUrl('/IconDumpsters_Logo_Vector_Pantone267DarkerPurple.png'),
            },
          },
          datePublished: articleData.datePublished,
          ...(articleData.dateModified && { dateModified: articleData.dateModified }),
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': toAbsoluteUrl(articleData.url),
          },
        };

      case 'organization':
        const organizationData: OrganizationData = data;
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': organizationData.id ?? `${BASE_URL}#organization`,
          name: organizationData.name,
          description: organizationData.description,
          url: organizationData.url,
          logo: toAbsoluteUrl(organizationData.logo),
          ...(organizationData.legalName && { legalName: organizationData.legalName }),
          ...(organizationData.email && { email: organizationData.email }),
          ...(organizationData.telephone && { telephone: organizationData.telephone }),
          ...(organizationData.sameAs && { sameAs: organizationData.sameAs }),
          ...(organizationData.areaServed && { areaServed: mapAreaServed(organizationData.areaServed) }),
          ...(organizationData.foundingDate && { foundingDate: organizationData.foundingDate }),
          ...(organizationData.founders && {
            founder: organizationData.founders.map(name => ({
              '@type': 'Person',
              name,
            })),
          }),
          ...(organizationData.parentOrganization && {
            parentOrganization: {
              '@type': 'Organization',
              name: organizationData.parentOrganization,
            },
          }),
          ...(organizationData.taxID && { taxID: organizationData.taxID }),
          ...(organizationData.duns && { duns: organizationData.duns }),
          ...(organizationData.naics && { naics: organizationData.naics }),
          ...(organizationData.awards && { award: organizationData.awards }),
          ...(organizationData.knowsAbout && { knowsAbout: organizationData.knowsAbout }),
          ...(buildContactPoints(organizationData.contactPoints) && {
            contactPoint: buildContactPoints(organizationData.contactPoints),
          }),
          ...(organizationData.brand && {
            brand: {
              '@type': 'Brand',
              name: organizationData.brand,
            },
          }),
              ...(organizationData.hasOfferCatalog && {
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: organizationData.hasOfferCatalog.name,
              itemListElement: organizationData.hasOfferCatalog.itemListElement.map((item, index) => ({
                '@type': 'Offer',
                position: index + 1,
                itemOffered: {
                  '@type': 'Service',
                  name: item.name,
                  description: item.description,
                  ...(item.url && { url: toAbsoluteUrl(item.url) }),
                },
                ...(item.price && { price: String(item.price) }),
                ...(item.priceCurrency && { priceCurrency: item.priceCurrency }),
                availability: 'https://schema.org/InStock',
              })),
            },
          }),
        };

      case 'product':
        const productData: ProductData = data;
        return {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: productData.name,
          description: productData.description,
          ...(productData.image && { image: toAbsoluteUrl(productData.image) }),
          ...(productData.brand && {
            brand: {
              '@type': 'Brand',
              name: productData.brand,
            },
          }),
          ...(productData.sku && { sku: productData.sku }),
          ...(productData.offers && {
            offers: {
              '@type': 'Offer',
              price: String(productData.offers.price),
              priceCurrency: productData.offers.priceCurrency,
              availability: productData.offers.availability || 'https://schema.org/InStock',
              ...(productData.offers.url && { url: toAbsoluteUrl(productData.offers.url) }),
              ...(productData.offers.validFrom && { priceValidFrom: productData.offers.validFrom }),
              ...(productData.offers.validThrough && { priceValidUntil: productData.offers.validThrough }),
            },
          }),
          ...(productData.aggregateRating && {
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: productData.aggregateRating.ratingValue,
              reviewCount: productData.aggregateRating.reviewCount,
              ...(productData.aggregateRating.bestRating && { bestRating: productData.aggregateRating.bestRating }),
              ...(productData.aggregateRating.worstRating && { worstRating: productData.aggregateRating.worstRating }),
            },
          }),
        };

      case 'website':
        const websiteData: WebSiteData = data;
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: websiteData.name,
          url: websiteData.url,
          ...(websiteData.description && { description: websiteData.description }),
          ...(websiteData.potentialAction && {
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: websiteData.potentialAction.target.urlTemplate,
              },
              'query-input': websiteData.potentialAction['query-input'],
            },
          }),
        };

      case 'itemList':
        const itemListData: ItemListData = data;
        return {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: itemListData.name,
          ...(itemListData.description && { description: itemListData.description }),
          itemListElement: itemListData.itemListElement.map(item => ({
            '@type': 'ListItem',
            position: item.position,
            item: {
              '@type': item['@type'] ?? 'Service',
              name: item.name,
              ...(item.description && { description: item.description }),
              ...(item.url && { url: toAbsoluteUrl(item.url) }),
              ...(item.image && { image: toAbsoluteUrl(item.image) }),
            },
          })),
        };

      case 'howTo':
        const howToData: HowToData = data;
        return {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: howToData.name,
          description: howToData.description,
          ...(howToData.image && { image: toAbsoluteUrl(howToData.image) }),
          ...(howToData.totalTime && { totalTime: howToData.totalTime }),
          step: howToData.step.map(step => ({
            '@type': 'HowToStep',
            name: step.name,
            text: step.text,
            ...(step.image && { image: toAbsoluteUrl(step.image) }),
            ...(step.url && { url: step.url }),
          })),
        };

      default:
        return null;
    }
  };

  const structuredData = generateStructuredData();

  if (!structuredData) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}

// Predefined structured data for common use cases
const sharedContactPoints: ContactPointDetails[] = [
  {
    contactType: 'customer service',
    telephone: '+1-801-918-6000',
    areaServed: 'Utah',
    availableLanguage: ['English'],
    hoursAvailable: ['Mo-Fr 07:00-18:00', 'Sa 08:00-16:00'],
  },
  {
    contactType: 'sales',
    telephone: '+1-801-918-6000',
    areaServed: 'Salt Lake County',
    availableLanguage: ['English'],
  },
];

export const IconDumpstersBusinessData: LocalBusinessData = {
  id: `${BASE_URL}#local-business`,
  businessType: 'HomeAndConstructionBusiness',
  legalName: 'Icon Dumpsters',
  name: 'Icon Dumpsters',
  description:
    'Professional dumpster rental services throughout Utah. Fast delivery, transparent pricing, and reliable waste management solutions for residential and commercial projects.',
  url: BASE_URL,
  telephone: '+1-801-918-6000',
  email: 'icondumpsters@gmail.com',
  slogan: 'Same-day Utah dumpster rentals with honest pricing',
  image: '/images/ca97086c-729c-480f-a90d-d117c1278945.webp',
  logo: '/IconDumpsters_Logo_Vector_Pantone267DarkerPurple.png',
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: ['Cash', 'Credit Card', 'ACH', 'Check'],
  keywords: [
    'Utah dumpster rental',
    'dumpster rentals near me',
    'roll-off dumpster delivery',
    'construction dumpster Utah',
    'residential dumpster rental',
  ],
  knowsAbout: [
    'Dumpster Rental',
    'Roll-Off Containers',
    'Construction Debris Removal',
    'Residential Cleanouts',
    'Utah Dumpster Permits',
    'Same-Day Delivery',
  ],
  sameAs: [
    'https://www.facebook.com/p/Icon-Dumpsters-61557014799828/',
    'https://www.instagram.com/icondumpsters',
    'https://www.linkedin.com/in/icondumpsters',
  ],
  areaServed: [
    { name: 'Utah', type: 'State' },
    { name: 'Salt Lake County', type: 'AdministrativeArea' },
    { name: 'Utah County', type: 'AdministrativeArea' },
    { name: 'Davis County', type: 'AdministrativeArea' },
  ],
  serviceArea: {
    latitude: 40.7608,
    longitude: -111.8910,
    radius: '80000',
  },
  hasMap: 'https://maps.google.com/?q=Icon+Dumpsters+Utah',
  hasCredential: [
    'Utah Waste Management License',
    'Environmental Compliance Certification',
    'Commercial Driver License',
    'Safety Training Certification',
  ],
  foundingDate: '2021-01-01',
  brand: 'Icon Dumpsters',
  contactPoints: sharedContactPoints,
  offers: [
    {
      name: '15-Yard Dumpster Rental (7 days)',
      description: 'Includes delivery, pickup, disposal up to 2 tons. Perfect for home cleanouts.',
      price: '325',
      priceCurrency: 'USD',
      eligibleRegion: 'Utah',
      url: `${BASE_URL}/15-yard-dumpster-rental`,
    },
    {
      name: '20-Yard Dumpster Rental (7 days)',
      description: 'Mid-size projects, includes delivery, pickup, disposal up to 3 tons.',
      price: '375',
      priceCurrency: 'USD',
      eligibleRegion: 'Utah',
      url: `${BASE_URL}/20-yard-dumpster-rental`,
    },
    {
      name: '30-Yard Dumpster Rental (7 days)',
      description: 'Large renovation and construction projects with disposal up to 4 tons.',
      price: '450',
      priceCurrency: 'USD',
      eligibleRegion: 'Utah',
      url: `${BASE_URL}/30-yard-dumpster-rental`,
    },
  ],
  makesOffer: [
    {
      name: 'Residential Dumpster Rental',
      description: 'Driveway-safe dumpsters for remodels, junk removal, and seasonal cleanups.',
      serviceType: 'Dumpster Rental',
      areaServed: ['Salt Lake County, UT', 'Utah County, UT', 'Davis County, UT'],
      url: `${BASE_URL}/services/residential-dumpster-rental`,
    },
    {
      name: 'Construction Debris Removal',
      description: 'Jobsite dumpsters with on-call swaps for contractors and builders.',
      serviceType: 'Construction Dumpster Rental',
      areaServed: ['Wasatch Front, UT'],
      url: `${BASE_URL}/services/construction-waste-management`,
    },
    {
      name: 'Same-Day Dumpster Delivery',
      description: 'Rapid delivery windows for emergency cleanups and schedule changes.',
      serviceType: 'Same-Day Dumpster Delivery',
      areaServed: ['40+ Utah cities'],
      url: `${BASE_URL}/services/same-day-dumpster-delivery`,
    },
  ],
  hasOfferCatalog: {
    name: 'Dumpster Rental Packages',
    itemListElement: [
      {
        name: '15-Yard Dumpster',
        description: 'Ideal for garage cleanouts, bathroom remodels, and roofing debris.',
        url: `${BASE_URL}/15-yard-dumpster-rental`,
        price: '325',
        priceCurrency: 'USD',
      },
      {
        name: '20-Yard Dumpster',
        description: 'Popular for kitchen renovations and multi-room updates.',
        url: `${BASE_URL}/20-yard-dumpster-rental`,
        price: '375',
        priceCurrency: 'USD',
      },
      {
        name: '30-Yard Dumpster',
        description: 'Best for large-scale construction, demo, and estate cleanouts.',
        url: `${BASE_URL}/30-yard-dumpster-rental`,
        price: '450',
        priceCurrency: 'USD',
      },
    ],
  },
  openingHours: ['Mo-Fr 07:00-18:00', 'Sa 08:00-16:00'],
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
};

export const IconDumpstersOrganizationData: OrganizationData = {
  id: `${BASE_URL}#organization`,
  name: 'Icon Dumpsters',
  legalName: 'Icon Dumpsters',
  description:
    'Utah-based dumpster rental company providing residential and commercial roll-off containers with same-day delivery.',
  url: BASE_URL,
  logo: '/IconDumpsters_Logo_Vector_Pantone267DarkerPurple.png',
  email: 'icondumpsters@gmail.com',
  telephone: '+1-801-918-6000',
  sameAs: IconDumpstersBusinessData.sameAs,
  areaServed: IconDumpstersBusinessData.areaServed,
  foundingDate: IconDumpstersBusinessData.foundingDate,
  knowsAbout: IconDumpstersBusinessData.knowsAbout,
  contactPoints: sharedContactPoints,
  brand: 'Icon Dumpsters',
  hasOfferCatalog: IconDumpstersBusinessData.hasOfferCatalog,
};

export interface LocationSchemaInput {
  cityName: string;
  citySlug: string;
  state: string;
  phoneNumber: string;
  latitude?: number;
  longitude?: number;
}

export const buildCityLocalBusinessSchema = ({
  cityName,
  citySlug,
  state,
  phoneNumber,
  latitude,
  longitude,
}: LocationSchemaInput): LocalBusinessData => {
  const fallbackLat = IconDumpstersBusinessData.geo?.latitude ?? 40.7608;
  const fallbackLng = IconDumpstersBusinessData.geo?.longitude ?? -111.891;
  const lat = Number.isFinite(latitude) ? (latitude as number) : fallbackLat;
  const lng = Number.isFinite(longitude) ? (longitude as number) : fallbackLng;

  const keywordSet = new Set([
    ...(IconDumpstersBusinessData.keywords ?? []),
    `${cityName} dumpster rental`,
    `${cityName} roll-off dumpsters`,
    `${cityName} waste removal`,
  ]);

  return {
    ...IconDumpstersBusinessData,
    id: `${BASE_URL}/dumpster-rental-${citySlug}-ut#local-business`,
    name: `Icon Dumpsters - ${cityName}, ${state}`,
    url: `${BASE_URL}/dumpster-rental-${citySlug}-ut`,
    telephone: phoneNumber || IconDumpstersBusinessData.telephone,
    areaServed: [
      { name: `${cityName}, ${state}`, type: 'City' },
      { name: state, type: 'State' },
    ],
    serviceArea: {
      latitude: lat,
      longitude: lng,
      radius: '50000',
    },
    geo: {
      latitude: lat,
      longitude: lng,
    },
    keywords: Array.from(keywordSet),
    makesOffer: [
      {
        name: `${cityName} Dumpster Rental`,
        description: `Same-day dumpster delivery and swap-outs throughout ${cityName}, ${state}.`,
        serviceType: 'Dumpster Rental',
        areaServed: [`${cityName}, ${state}`],
        url: `${BASE_URL}/dumpster-rental-${citySlug}-ut`,
      },
      ...(IconDumpstersBusinessData.makesOffer ?? []),
    ],
  };
};

export const DumpsterRentalServiceData: ServiceData = {
  name: 'Dumpster Rental Services',
  description: 'Professional dumpster rental services for residential and commercial projects throughout Utah.',
  provider: {
    name: 'Icon Dumpsters',
    url: 'https://icondumpsters.com',
  },
  areaServed: [
    'Salt Lake City, UT',
    'West Valley City, UT',
    'Provo, UT',
    'West Jordan, UT',
    'Orem, UT',
    'Sandy, UT',
    'Ogden, UT',
    'St. George, UT',
  ],
  serviceType: 'Dumpster Rental',
  priceRange: '$200-$800',
};

// New service data for Bing Places optimization
export const JunkRemovalServiceData: ServiceData = {
  name: 'Junk Removal Services',
  description: 'Professional junk removal services for residential and commercial properties throughout Utah.',
  provider: {
    name: 'Icon Dumpsters',
    url: 'https://icondumpsters.com',
  },
  areaServed: [
    'Salt Lake City, UT',
    'West Valley City, UT',
    'Provo, UT',
    'West Jordan, UT',
    'Orem, UT',
    'Sandy, UT',
    'Ogden, UT',
  ],
  serviceType: 'Junk Removal',
  priceRange: '$150-$500',
};

export const ConstructionWasteManagementServiceData: ServiceData = {
  name: 'Construction Waste Management Services',
  description: 'Comprehensive construction waste management and disposal services for contractors and construction companies throughout Utah.',
  provider: {
    name: 'Icon Dumpsters',
    url: 'https://icondumpsters.com',
  },
  areaServed: [
    'Salt Lake City, UT',
    'West Valley City, UT',
    'Provo, UT',
    'West Jordan, UT',
    'Orem, UT',
    'Sandy, UT',
    'Ogden, UT',
  ],
  serviceType: 'Construction Waste Management',
  priceRange: '$300-$800',
};

export const SameDayDeliveryServiceData: ServiceData = {
  name: 'Same-Day Dumpster Delivery Services',
  description: 'Emergency same-day dumpster delivery services for urgent projects throughout Utah.',
  provider: {
    name: 'Icon Dumpsters',
    url: 'https://icondumpsters.com',
  },
  areaServed: [
    'Salt Lake City, UT',
    'West Valley City, UT',
    'Provo, UT',
    'West Jordan, UT',
    'Orem, UT',
    'Sandy, UT',
    'Ogden, UT',
  ],
  serviceType: 'Same-Day Dumpster Delivery',
  priceRange: '$250-$600',
};

export const GarageCleanoutServiceData: ServiceData = {
  name: 'Garage Cleanout Services',
  description: 'Professional garage cleanout and organization services with dumpster rentals throughout Utah.',
  provider: {
    name: 'Icon Dumpsters',
    url: 'https://icondumpsters.com',
  },
  areaServed: [
    'Salt Lake City, UT',
    'West Valley City, UT',
    'Provo, UT',
    'West Jordan, UT',
    'Orem, UT',
    'Sandy, UT',
    'Ogden, UT',
  ],
  serviceType: 'Garage Cleanout',
  priceRange: '$200-$400',
};

export const DemolitionWasteDisposalServiceData: ServiceData = {
  name: 'Demolition Waste Disposal Services',
  description: 'Professional demolition waste disposal and debris removal services throughout Utah.',
  provider: {
    name: 'Icon Dumpsters',
    url: 'https://icondumpsters.com',
  },
  areaServed: [
    'Salt Lake City, UT',
    'West Valley City, UT',
    'Provo, UT',
    'West Jordan, UT',
    'Orem, UT',
    'Sandy, UT',
    'Ogden, UT',
  ],
  serviceType: 'Demolition Waste Disposal',
  priceRange: '$400-$1000',
};

export const YardWasteRemovalServiceData: ServiceData = {
  name: 'Yard Waste Removal Services',
  description: 'Professional yard waste removal and landscaping debris disposal services throughout Utah.',
  provider: {
    name: 'Icon Dumpsters',
    url: 'https://icondumpsters.com',
  },
  areaServed: [
    'Salt Lake City, UT',
    'West Valley City, UT',
    'Provo, UT',
    'West Jordan, UT',
    'Orem, UT',
    'Sandy, UT',
    'Ogden, UT',
  ],
  serviceType: 'Yard Waste Removal',
  priceRange: '$200-$500',
};

export const FurnitureDisposalServiceData: ServiceData = {
  name: 'Furniture Disposal Services',
  description: 'Professional furniture disposal and large item removal services throughout Utah.',
  provider: {
    name: 'Icon Dumpsters',
    url: 'https://icondumpsters.com',
  },
  areaServed: [
    'Salt Lake City, UT',
    'West Valley City, UT',
    'Provo, UT',
    'West Jordan, UT',
    'Orem, UT',
    'Sandy, UT',
    'Ogden, UT',
  ],
  serviceType: 'Furniture Disposal',
  priceRange: '$150-$400',
};

export const EmergencyCleanupServiceData: ServiceData = {
  name: 'Emergency Cleanup Services',
  description: 'Emergency cleanup and disaster debris removal services throughout Utah.',
  provider: {
    name: 'Icon Dumpsters',
    url: 'https://icondumpsters.com',
  },
  areaServed: [
    'Salt Lake City, UT',
    'West Valley City, UT',
    'Provo, UT',
    'West Jordan, UT',
    'Orem, UT',
    'Sandy, UT',
    'Ogden, UT',
  ],
  serviceType: 'Emergency Cleanup',
  priceRange: '$300-$800',
};

export const MovingCleanupServiceData: ServiceData = {
  name: 'Moving Cleanup Services',
  description: 'Professional moving cleanup and post-move waste removal services throughout Utah.',
  provider: {
    name: 'Icon Dumpsters',
    url: 'https://icondumpsters.com',
  },
  areaServed: [
    'Salt Lake City, UT',
    'West Valley City, UT',
    'Provo, UT',
    'West Jordan, UT',
    'Orem, UT',
    'Sandy, UT',
    'Ogden, UT',
  ],
  serviceType: 'Moving Cleanup',
  priceRange: '$200-$500',
};

export const BasementCleanoutServiceData: ServiceData = {
  name: 'Basement Cleanout Services',
  description: 'Professional basement cleanout and organization services with dumpster rentals throughout Utah.',
  provider: {
    name: 'Icon Dumpsters',
    url: 'https://icondumpsters.com',
  },
  areaServed: [
    'Salt Lake City, UT',
    'West Valley City, UT',
    'Provo, UT',
    'West Jordan, UT',
    'Orem, UT',
    'Sandy, UT',
    'Ogden, UT',
  ],
  serviceType: 'Basement Cleanout',
  priceRange: '$200-$500',
};

// WebSite Schema Data
export const IconDumpstersWebSiteData: WebSiteData = {
  name: 'Icon Dumpsters',
  url: BASE_URL,
  description: 'Utah\'s leading dumpster rental company providing residential and commercial roll-off containers with same-day delivery.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

// Product Schemas for Dumpster Sizes
export const FifteenYardDumpsterProduct: ProductData = {
  name: '15-Yard Dumpster Rental',
  description: 'Perfect for small home cleanouts, bathroom renovations, and minor construction projects. Dimensions: 16 feet x 7 feet x 4 feet.',
  image: '/images/optimized/icondumpsters_general_dumpster500x500_1.webp',
  brand: 'Icon Dumpsters',
  sku: 'DUMPSTER-15',
  offers: {
    price: '325',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: `${BASE_URL}/15-yard-dumpster-rental`,
    validFrom: new Date().toISOString(),
  },
};

export const TwentyYardDumpsterProduct: ProductData = {
  name: '20-Yard Dumpster Rental',
  description: 'Ideal for medium-sized projects like kitchen renovations, room additions, and moderate construction work. Dimensions: 16 feet x 7 feet x 6 feet.',
  image: '/images/optimized/icondumpsters_general_dumpster500x500_2.webp',
  brand: 'Icon Dumpsters',
  sku: 'DUMPSTER-20',
  offers: {
    price: '375',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: `${BASE_URL}/20-yard-dumpster-rental`,
    validFrom: new Date().toISOString(),
  },
};

export const ThirtyYardDumpsterProduct: ProductData = {
  name: '30-Yard Dumpster Rental',
  description: 'Best for large construction projects, whole house renovations, and major cleanouts. Dimensions: 22 feet x 7 feet x 6 feet.',
  image: '/images/optimized/icondumpsters_general_dumpster500x500_1.webp',
  brand: 'Icon Dumpsters',
  sku: 'DUMPSTER-30',
  offers: {
    price: '450',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: `${BASE_URL}/30-yard-dumpster-rental`,
    validFrom: new Date().toISOString(),
  },
};

// Service Catalog ItemList
export const DumpsterServiceCatalog: ItemListData = {
  name: 'Dumpster Rental Services Catalog',
  description: 'Complete catalog of dumpster rental services available from Icon Dumpsters',
  itemListElement: [
    {
      '@type': 'Service',
      name: '15-Yard Dumpster Rental',
      description: 'Perfect for small home cleanouts and bathroom renovations',
      url: '/15-yard-dumpster-rental',
      image: '/images/optimized/icondumpsters_general_dumpster500x500_1.webp',
      position: 1,
    },
    {
      '@type': 'Service',
      name: '20-Yard Dumpster Rental',
      description: 'Ideal for medium-sized projects like kitchen renovations',
      url: '/20-yard-dumpster-rental',
      image: '/images/optimized/icondumpsters_general_dumpster500x500_2.webp',
      position: 2,
    },
    {
      '@type': 'Service',
      name: '30-Yard Dumpster Rental',
      description: 'Best for large construction projects and whole house renovations',
      url: '/30-yard-dumpster-rental',
      image: '/images/optimized/icondumpsters_general_dumpster500x500_1.webp',
      position: 3,
    },
    {
      '@type': 'Service',
      name: 'Residential Dumpster Rental',
      description: 'Driveway-safe dumpsters for remodels, junk removal, and seasonal cleanups',
      url: '/services/residential-dumpster-rental',
      position: 4,
    },
    {
      '@type': 'Service',
      name: 'Construction Debris Removal',
      description: 'Jobsite dumpsters with on-call swaps for contractors and builders',
      url: '/services/construction-waste-management',
      position: 5,
    },
    {
      '@type': 'Service',
      name: 'Same-Day Dumpster Delivery',
      description: 'Rapid delivery windows for emergency cleanups and schedule changes',
      url: '/services/same-day-dumpster-delivery',
      position: 6,
    },
  ],
};
