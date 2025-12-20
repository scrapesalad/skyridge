export type TopLevelLanding = {
  slug: string;
  title: string;
  description: string;
  serviceLabel: string;
  primaryServicePath: string;
  heroImage: string;
  citySlug?: string;
  cityLabel?: string;
};

const UT_CITY_PAGES: TopLevelLanding[] = [
  {
    slug: 'beaver-mountain-roofing-contractors',
    title: 'Beaver Mountain Roofing Contractors',
    description:
      'Roof repairs, replacement, and storm damage inspections for homes and cabins near Beaver Mountain, Utah. Free estimates.',
    serviceLabel: 'Roofing Contractors',
    primaryServicePath: '/services',
    heroImage: '/images/skyridge/skyridge_image_021.webp',
    citySlug: 'beaver-mountain',
    cityLabel: 'Beaver Mountain, UT',
  },
  {
    slug: 'provo-ut-roofing-contractors',
    title: 'Provo, UT Roofing Contractors',
    description:
      'Need a trusted roofing contractor in Provo, Utah? Sky Ridge Roofing provides roof replacement, repairs, and claim support.',
    serviceLabel: 'Roofing Contractors',
    primaryServicePath: '/services',
    heroImage: '/images/skyridge/skyridge_image_016.webp',
    citySlug: 'provo',
    cityLabel: 'Provo, UT',
  },
  {
    slug: 'orem-ut-roofing-contractors',
    title: 'Orem, UT Roofing Contractors',
    description:
      'Roof replacement, roof repairs, and insurance-claim help for homeowners and property managers in Orem, Utah.',
    serviceLabel: 'Roofing Contractors',
    primaryServicePath: '/services',
    heroImage: '/images/skyridge/skyridge_image_020.webp',
    citySlug: 'orem',
    cityLabel: 'Orem, UT',
  },
  {
    slug: 'south-jordan-ut-roofing-contractors',
    title: 'South Jordan, UT Roofing Contractors',
    description:
      'Sky Ridge Roofing serves South Jordan with reliable roof repairs, replacements, and storm damage inspections.',
    serviceLabel: 'Roofing Contractors',
    primaryServicePath: '/services',
    heroImage: '/images/skyridge/skyridge_image_012.webp',
    citySlug: 'south-jordan',
    cityLabel: 'South Jordan, UT',
  },
  {
    slug: 'sandy-ut-roofing-contractors',
    title: 'Sandy, UT Roofing Contractors',
    description:
      'Licensed & insured roofing contractor in Sandy, Utah. Get a free estimate for roof replacement, repairs, or metal roofing.',
    serviceLabel: 'Roofing Contractors',
    primaryServicePath: '/services',
    heroImage: '/images/skyridge/skyridge_image_015.webp',
    citySlug: 'sandy',
    cityLabel: 'Sandy, UT',
  },
  {
    slug: 'west-jordan-roofing-contractors',
    title: 'West Jordan Roofing Contractors',
    description:
      'Roofing services for West Jordan homeowners and businesses: inspections, repairs, and full replacements.',
    serviceLabel: 'Roofing Contractors',
    primaryServicePath: '/services',
    heroImage: '/images/skyridge/skyridge_image_003.webp',
    citySlug: 'west-jordan',
    cityLabel: 'West Jordan, UT',
  },
  {
    slug: 'ogden-roofing-contractors',
    title: 'Ogden Roofing Contractors',
    description:
      'Get help with roof repairs and replacement in Ogden, Utah. Fast scheduling and clear recommendations.',
    serviceLabel: 'Roofing Contractors',
    primaryServicePath: '/services',
    heroImage: '/images/skyridge/skyridge_image_007.webp',
    citySlug: 'ogden',
    cityLabel: 'Ogden, UT',
  },
  {
    slug: 'lehi-ut-roofing-contractors',
    title: 'Lehi, UT Roofing Contractors',
    description:
      'Sky Ridge Roofing serves Utah County with repairs, replacements, and storm damage support. Free estimates in Lehi.',
    serviceLabel: 'Roofing Contractors',
    primaryServicePath: '/services',
    heroImage: '/images/skyridge/skyridge_image_021.webp',
    citySlug: 'lehi',
    cityLabel: 'Lehi, UT',
  },
  {
    slug: 'roofing-contractors-salt-lake-city-ut',
    title: 'Roofing Contractors in Salt Lake City, UT',
    description:
      'Residential and commercial roofing in Salt Lake City. Roof repairs, replacement, and claim help from Sky Ridge Roofing.',
    serviceLabel: 'Roofing Contractors',
    primaryServicePath: '/services',
    heroImage: '/images/skyridge/skyridge_image_018.webp',
    citySlug: 'salt-lake-city',
    cityLabel: 'Salt Lake City, UT',
  },
  {
    slug: 'west-valley-city-roofing-contractors',
    title: 'West Valley City Roofing Contractors',
    description:
      'Roof repairs and replacement for West Valley City homeowners and businesses. Licensed & insured. Free estimates.',
    serviceLabel: 'Roofing Contractors',
    primaryServicePath: '/services',
    heroImage: '/images/skyridge/skyridge_image_004.webp',
    citySlug: 'west-valley-city',
    cityLabel: 'West Valley City, UT',
  },
  {
    slug: 'bountiful-roofing-contractors',
    title: 'Bountiful Roofing Contractors',
    description:
      'Roof replacement, roof repairs, and storm damage inspections in Bountiful, Utah. Licensed & insured. Free estimates.',
    serviceLabel: 'Roofing Contractors',
    primaryServicePath: '/services',
    heroImage: '/images/skyridge/skyridge_image_020.webp',
    citySlug: 'bountiful',
    cityLabel: 'Bountiful, UT',
  },
  {
    slug: 'murray-roofing-contractors',
    title: 'Murray Roofing Contractors',
    description:
      'Get help with roof repairs and replacement in Murray, Utah. Fast inspections and clear recommendations.',
    serviceLabel: 'Roofing Contractors',
    primaryServicePath: '/services',
    heroImage: '/images/skyridge/skyridge_image_018.webp',
    citySlug: 'murray',
    cityLabel: 'Murray, UT',
  },
  {
    slug: 'riverton-roofing-contractors',
    title: 'Riverton Roofing Contractors',
    description:
      'Roof repairs, replacements, and storm damage support in Riverton, Utah. Licensed & insured. Free estimates.',
    serviceLabel: 'Roofing Contractors',
    primaryServicePath: '/services',
    heroImage: '/images/skyridge/skyridge_image_011.webp',
    citySlug: 'riverton',
    cityLabel: 'Riverton, UT',
  },
  {
    slug: 'draper-roofing-contractors',
    title: 'Draper Roofing Contractors',
    description:
      'Sky Ridge Roofing serves Draper with roof replacement, repairs, and insurance-claim guidance. Free estimates.',
    serviceLabel: 'Roofing Contractors',
    primaryServicePath: '/services',
    heroImage: '/images/skyridge/skyridge_image_015.webp',
    citySlug: 'draper',
    cityLabel: 'Draper, UT',
  },
  {
    slug: 'herriman-roofing-contractors',
    title: 'Herriman Roofing Contractors',
    description:
      'Trusted roofing contractor in Herriman, Utah for repairs, replacement, and storm damage inspections.',
    serviceLabel: 'Roofing Contractors',
    primaryServicePath: '/services',
    heroImage: '/images/skyridge/skyridge_image_012.webp',
    citySlug: 'herriman',
    cityLabel: 'Herriman, UT',
  },
];

export const TOP_LEVEL_LANDINGS: TopLevelLanding[] = [
  {
    slug: 'commercial-roofing',
    title: 'Commercial Roofing in Utah',
    description:
      'Commercial roofing solutions across Utah: repairs, replacements, coatings, and maintenance planning. Free estimates.',
    serviceLabel: 'Commercial Roofing',
    primaryServicePath: '/services/commercial-roofing',
    heroImage: '/images/skyridge/skyridge_image_020.webp',
  },
  {
    slug: 'multi-family-roofing',
    title: 'Multi-Family Roofing in Utah',
    description:
      'Roofing for apartments, condos, and HOAs across Utah—inspection programs, repairs, and replacement planning.',
    serviceLabel: 'Multi-Family Roofing',
    primaryServicePath: '/services/commercial-roofing',
    heroImage: '/images/skyridge/skyridge_image_012.webp',
  },
  {
    slug: 'residential-roofing',
    title: 'Residential Roofing in Utah',
    description:
      'Residential roof replacement and roof repairs across Utah. Straightforward pricing, clean work sites, and durable results.',
    serviceLabel: 'Residential Roofing',
    primaryServicePath: '/services/roof-replacement',
    heroImage: '/images/skyridge/skyridge_image_016.webp',
  },
  {
    slug: 'stone-coated-steel-roofing',
    title: 'Stone-Coated Steel Roofing in Utah',
    description:
      'Learn about stone-coated steel roofing: durability, appearance, and when it’s a good fit for Utah homes.',
    serviceLabel: 'Roofing Materials',
    primaryServicePath: '/materials',
    heroImage: '/images/skyridge/skyridge_image_015.webp',
  },
  {
    slug: 'utah-roofing-contractors',
    title: 'Utah Roofing Contractors',
    description:
      'Sky Ridge Roofing is a licensed & insured Utah roofing contractor offering roof replacement, roof repairs, and claim support.',
    serviceLabel: 'Roofing Contractors',
    primaryServicePath: '/utah-roofing-company',
    heroImage: '/images/skyridge/skyridge_image_011.webp',
  },
  {
    slug: 'contact-us',
    title: 'Contact Sky Ridge Roofing',
    description:
      'Request a free estimate for roof replacement, repairs, metal roofing, or commercial work anywhere in Utah.',
    serviceLabel: 'Contact',
    primaryServicePath: '/contact',
    heroImage: '/images/skyridge/skyridge_image_003.webp',
  },
  {
    slug: 'schedule-online',
    title: 'Schedule a Roofing Estimate in Utah',
    description:
      'Book a free estimate with Sky Ridge Roofing. We’ll inspect your roof, share recommendations, and answer questions.',
    serviceLabel: 'Schedule',
    primaryServicePath: '/contact',
    heroImage: '/images/skyridge/skyridge_image_004.webp',
  },
  {
    slug: 'form',
    title: 'Request a Free Roofing Estimate',
    description:
      'Send us your roofing details and we’ll follow up quickly with next steps. Serving all of Utah.',
    serviceLabel: 'Estimate Request',
    primaryServicePath: '/contact',
    heroImage: '/images/skyridge/skyridge_image_016.webp',
  },
  {
    slug: 'see-our-work',
    title: 'See Our Roofing Work in Utah',
    description:
      'View photos of roofing projects across Utah, including replacements, repairs, and metal roofing installs.',
    serviceLabel: 'Gallery',
    primaryServicePath: '/gallery',
    heroImage: '/images/skyridge/skyridge_image_018.webp',
  },
  ...UT_CITY_PAGES,
];

export const TOP_LEVEL_LANDING_SLUGS = TOP_LEVEL_LANDINGS.map((p) => p.slug);
