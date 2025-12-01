import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getAllCitySlugs, getCityData } from '../../config/cityData';

interface PageProps {
  params: Promise<{
    segments?: string[];
  }>;
}

// All cities in sitemap should be indexable for SEO
// Previously only 10 cities were indexable, now all cities are indexable
const INDEXABLE = new Set([
  'salt-lake-city',
  'west-jordan',
  'sandy',
  'south-jordan',
  'murray',
  'draper',
  'provo',
  'orem',
  'ogden',
  'layton',
  // Additional cities from sitemap that should be indexable
  'taylorsville',
  'west-valley-city',
  'millcreek',
  'midvale',
  'kearns',
  'holladay',
  'riverton',
  'herriman',
  'south-salt-lake',
  'north-salt-lake',
  'lehi',
  'park-city',
  'roy',
  'american-fork',
  'syracuse',
  'woods-cross',
  'saratoga-springs',
  'cottonwood-heights',
  'magna',
  'vineyard',
  'santaquin',
  'granger',
  'brigham-city',
  'tooele',
  'richfield',
  'centerville',
  'lindon',
  'springville',
  'moab',
  'st-george',
  'fairpark',
  'emigration-canyon',
  'spanish-fork',
  'white-city',
  'cedar-hills',
  'woodland-hills',
  'eagle-mountain',
  'bluffdale',
  'brighton',
  'west-haven',
  'bountiful',
  'sugar-house',
  'copperton',
  'clearfield',
  'farmington',
  'price',
  'nephi',
  'heber-city',
  'highland',
  'pleasant-grove',
  'alta',
  'payson',
  'logan',
  'vernal',
  'genola',
  'west-bountiful',
  'downtown-salt-lake',
  'clinton',
  'glendale',
  'cedar-city',
  'alpine',
  'poplar-grove',
  'kaysville',
  'rose-park',
  'mapleton',
]);

// Pre-generate all cities at build time to avoid timeout on first request
// This route is frequently crawled, so static generation is better than ISR
export const dynamic = 'force-static'; // Use static generation for production
export const dynamicParams = false; // Only allow pre-generated params

export async function generateStaticParams() {
  // Pre-generate all cities at build time (prevents timeout during crawl)
  // Format: /dumpster-rental/{city}-ut (after middleware rewrite from /dumpster-rental-{city}-ut)
  return getAllCitySlugs().map((city) => ({
    segments: [`${city}-ut`],
  }));
}

function extractCitySlug(segments: string[] | undefined): string | null {
  if (!segments || segments.length === 0) {
    return null;
  }

  // Handle /dumpster-rental/{city}-ut pattern (from middleware rewrite)
  // segments will be: ['city-name-ut']
  if (segments.length === 1) {
    const segment = segments[0];
    if (segment.endsWith('-ut')) {
      return segment.slice(0, -3); // Remove '-ut' suffix
    }
  }

  // Handle /dumpster-rental/{city}/ut pattern
  // segments will be: ['city-name', 'ut']
  if (segments.length === 2 && segments[1] === 'ut') {
    return segments[0];
  }

  return null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const segments = resolved?.segments;
  const citySlug = extractCitySlug(segments);

  if (!citySlug) {
    return { title: 'City Not Found', robots: { index: false, follow: false } };
  }

  const cityData = getCityData(citySlug);
  if (!cityData) {
    return { title: 'City Not Found', robots: { index: false, follow: false } };
  }

  // All cities in sitemap should be indexable for SEO
  // Previously only INDEXABLE cities were indexable, now all cities are indexable
  const canonicalPath = `/dumpster-rental-${citySlug}-ut`;
  const { cityName, state, contentSections } = cityData;

  // Create optimized meta description (120-160 characters for SEO)
  const getOptimizedDescription = (cityName: string, overview: string | undefined): string => {
    // Create a concise description without "near me"
    const baseDescription = `Professional dumpster rental in ${cityName}, ${state}. Same-day delivery, competitive pricing. 15-30 yard roll-off dumpsters available.`;
    if (baseDescription.length <= 160 && baseDescription.length >= 120) {
      return baseDescription;
    }
    // Fallback to version using overview if available and appropriate length
    if (overview && overview.length <= 160 && overview.length >= 120) {
      return overview;
    }
    // Fallback to shorter version if needed
    return `Dumpster rental in ${cityName}, ${state}. Same-day delivery, transparent pricing. Call (801) 918-6000.`;
  };

  const optimizedDescription = getOptimizedDescription(cityName, contentSections.overview);

  return {
    title: `Dumpster Rental in ${cityName}, ${state} | Icon Dumpsters`,
    description: optimizedDescription,
    alternates: {
      canonical: `https://icondumpsters.com${canonicalPath}`,
    },
    robots: { index: true, follow: true }, // All cities are indexable
    openGraph: {
      title: `Dumpster Rental in ${cityName}, ${state} | Icon Dumpsters`,
      description: optimizedDescription,
      url: `https://icondumpsters.com${canonicalPath}`,
      siteName: 'Icon Dumpsters',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: 'https://icondumpsters.com/IconDumpsters_Logo_Vector_Pantone267DarkerPurple.png',
          width: 1200,
          height: 630,
          alt: 'Icon Dumpsters - Professional Dumpster Rental Services in Utah',
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Dumpster Rental in ${cityName}, ${state} | Icon Dumpsters`,
      description: optimizedDescription,
      images: ['https://icondumpsters.com/IconDumpsters_Logo_Vector_Pantone267DarkerPurple.png'],
    },
  };
}

export default async function CityPageRoute({ params }: PageProps) {
  const resolved = await params;
  const segments = resolved?.segments || [];
  
  // Debug logging
  console.log('[CityPageRoute] Segments received:', segments);
  console.log('[CityPageRoute] Resolved params:', resolved);
  
  const citySlug = extractCitySlug(segments);
  console.log('[CityPageRoute] Extracted city slug:', citySlug);

  if (!citySlug) {
    console.error('[CityPageRoute] No city slug extracted from segments:', segments);
    notFound();
  }

  // Verify city data exists
  const cityData = getCityData(citySlug);
  if (!cityData) {
    console.error(`[CityPageRoute] City data not found for slug: ${citySlug}`);
    notFound();
  }
  
  console.log('[CityPageRoute] City data found:', cityData.cityName);

  const {
    cityName,
    state,
    phoneNumber,
    latitude,
    longitude,
    landmarks,
    businessDistricts,
    permitInfo,
    contentSections,
  } = cityData;

  return (
    <CityPageTemplate
      cityName={cityName}
      citySlug={citySlug}
      state={state}
      phoneNumber={phoneNumber}
      latitude={latitude}
      longitude={longitude}
      landmarks={landmarks}
      businessDistricts={businessDistricts}
      permitInfo={permitInfo}
      contentSections={contentSections}
    />
  );
}
