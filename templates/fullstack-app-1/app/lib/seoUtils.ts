import { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  imageUrl?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  noIndex?: boolean;
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonicalUrl,
    imageUrl = '/images/ca97086c-729c-480f-a90d-d117c1278945.webp',
    type = 'website',
    publishedTime,
    modifiedTime,
    author = 'Icon Dumpsters',
    section,
    noIndex = false
  } = config;

  const fullImageUrl = imageUrl.startsWith('http') 
    ? imageUrl 
    : `https://icondumpsters.com${imageUrl}`;

  const fullCanonicalUrl = canonicalUrl 
    ? (canonicalUrl.startsWith('http') ? canonicalUrl : `https://icondumpsters.com${canonicalUrl}`)
    : undefined;

  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    authors: [{ name: author }],
    creator: author,
    publisher: 'Icon Dumpsters',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://icondumpsters.com'),
    alternates: fullCanonicalUrl ? { canonical: fullCanonicalUrl } : undefined,
    robots: noIndex 
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      title,
      description,
      url: fullCanonicalUrl,
      siteName: 'Icon Dumpsters',
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/png',
        },
      ],
      locale: 'en_US',
      type,
      ...(type === 'article' && publishedTime && {
        publishedTime,
        modifiedTime,
        authors: [author],
        section,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl],
      site: '@icondumpsters',
      creator: '@icondumpsters',
    },
  };

  return metadata;
}

// City-specific SEO generator
export function generateCityMetadata(
  cityName: string,
  citySlug: string,
  serviceType: 'rental' | 'rentals' = 'rental'
): Metadata {
  const title = `${cityName} Dumpster ${serviceType === 'rental' ? 'Rental' : 'Rentals'} - Professional Services in ${cityName}, UT | Icon Dumpsters`;
  const description = `Get reliable dumpster ${serviceType} in ${cityName}, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.`;
  
  const keywords = [
    `${cityName} dumpster ${serviceType}`,
    `dumpster ${serviceType} ${cityName} UT`,
    `${cityName} Utah dumpster`,
    `roll-off dumpster ${cityName}`,
    `construction dumpster ${cityName}`,
    `waste management ${cityName}`,
    `dumpster rental near me ${cityName}`,
    `${cityName} dumpster services`
  ];

  return generateMetadata({
    title,
    description,
    keywords,
    canonicalUrl: `/${citySlug}${serviceType === 'rentals' ? '-dumpster-rentals' : ''}`,
  });
}

// Service-specific SEO generator
export function generateServiceMetadata(
  serviceType: 'residential' | 'commercial',
  cityName: string,
  citySlug: string
): Metadata {
  const title = `${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} Dumpster Rental ${cityName}, UT | Professional Waste Solutions`;
  const description = `${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} dumpster rental services in ${cityName}, Utah. Reliable waste management for ${serviceType === 'residential' ? 'homeowners and residents' : 'businesses and contractors'}. Get a free quote today.`;
  
  const keywords = [
    `${serviceType} dumpster rental`,
    `${serviceType} dumpster rental ${cityName}`,
    `${cityName} ${serviceType} waste management`,
    `${serviceType} roll-off dumpster ${cityName}`,
    `${cityName} ${serviceType} dumpster services`,
    `professional ${serviceType} dumpster rental`
  ];

  return generateMetadata({
    title,
    description,
    keywords,
    canonicalUrl: `/services/${serviceType}-dumpster-rental-${citySlug}-ut`,
  });
}

// Blog post SEO generator
export function generateBlogMetadata(
  title: string,
  description: string,
  slug: string,
  publishedTime: string,
  modifiedTime?: string,
  author: string = 'Icon Dumpsters',
  category: string = 'Dumpster Rental',
  keywords: string[] = [],
  featuredImage: string = '/images/ca97086c-729c-480f-a90d-d117c1278945.webp'
): Metadata {
  const blogKeywords = [
    'dumpster rental',
    'waste management',
    'construction waste',
    'home renovation',
    ...keywords
  ];

  return generateMetadata({
    title: `${title} | Icon Dumpsters Blog`,
    description,
    keywords: blogKeywords,
    canonicalUrl: `/${slug}`,
    imageUrl: featuredImage,
    type: 'article',
    publishedTime,
    modifiedTime,
    author,
    section: category,
  });
}

// Calculator/utility page SEO generator
export function generateUtilityMetadata(
  title: string,
  description: string,
  slug: string,
  keywords: string[] = []
): Metadata {
  const utilityKeywords = [
    'dumpster calculator',
    'waste calculator',
    'dumpster size calculator',
    'construction waste calculator',
    ...keywords
  ];

  return generateMetadata({
    title: `${title} | Icon Dumpsters`,
    description,
    keywords: utilityKeywords,
    canonicalUrl: `/${slug}`,
  });
}
