export type LandingPage = {
  slug: string;
  title: string;
  description: string;
  city?: string;
  state?: string;
  serviceLabel: string;
  primaryServicePath: string;
  heroImage: string;
  lastmod?: string;
};

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: 'professional-residential-roofing-salt-lake-city-ut',
    title: 'Professional Residential Roofing in Salt Lake City, UT',
    description:
      'Roof replacement and roof repairs in Salt Lake City, Utah. Licensed & insured. Free estimates from Sky Ridge Roofing.',
    city: 'Salt Lake City',
    state: 'UT',
    serviceLabel: 'Residential Roofing',
    primaryServicePath: '/services/roof-replacement',
    heroImage: '/images/skyridge/skyridge_image_016.webp',
  },
  {
    slug: 'reliable-commercial-roofing-salt-lake-city-ut',
    title: 'Reliable Commercial Roofing in Salt Lake City, UT',
    description:
      'Commercial roofing solutions for Utah businesses: repairs, replacements, coatings, and maintenance. Free estimates.',
    city: 'Salt Lake City',
    state: 'UT',
    serviceLabel: 'Commercial Roofing',
    primaryServicePath: '/services/commercial-roofing',
    heroImage: '/images/skyridge/skyridge_image_020.webp',
  },
  {
    slug: 'remarkable-multi-family-roofing-utah',
    title: 'Multi-Family Roofing in Utah',
    description:
      'Roofing for apartments, condos, and HOAs across Utah. Proactive inspections, repairs, and replacement planning.',
    state: 'UT',
    serviceLabel: 'Multi-Family Roofing',
    primaryServicePath: '/services/commercial-roofing',
    heroImage: '/images/skyridge/skyridge_image_012.webp',
  },
  {
    slug: 'roofing-contractors-utah',
    title: 'Roofing Contractors in Utah',
    description:
      'Looking for a trusted Utah roofing contractor? Sky Ridge Roofing provides roof replacement, repairs, and claim support.',
    state: 'UT',
    serviceLabel: 'Roofing Contractors',
    primaryServicePath: '/services',
    heroImage: '/images/skyridge/skyridge_image_011.webp',
  },
  {
    slug: 'residential-metal-roof-installation-sandy-ut',
    title: 'Residential Metal Roof Installation in Sandy, UT',
    description:
      'Metal roofing installation for Sandy homeowners: long-lasting materials, clean workmanship, and clear pricing.',
    city: 'Sandy',
    state: 'UT',
    serviceLabel: 'Metal Roofing',
    primaryServicePath: '/services/metal-roofing',
    heroImage: '/images/skyridge/skyridge_image_015.webp',
  },
  {
    slug: 'asphalt-shingle-roof-repair-for-multi-family-buildings-utah',
    title: 'Asphalt Shingle Roof Repair for Multi-Family Buildings in Utah',
    description:
      'Multi-family shingle roof repairs across Utah: leak tracing, flashing fixes, and maintenance recommendations.',
    state: 'UT',
    serviceLabel: 'Roof Repairs',
    primaryServicePath: '/services/roof-repairs',
    heroImage: '/images/skyridge/skyridge_image_003.webp',
  },
  {
    slug: 'multi-family-roofing-repair-for-metal-roofs-utah',
    title: 'Multi-Family Roofing Repair for Metal Roofs in Utah',
    description:
      'Metal roof repairs for multi-family properties in Utah: seam issues, fastener replacements, and coating options.',
    state: 'UT',
    serviceLabel: 'Metal Roof Repairs',
    primaryServicePath: '/services/metal-roofing',
    heroImage: '/images/skyridge/skyridge_image_007.webp',
  },
  {
    slug: 'why-choose-sky-ridge-for-commercial-roofing-utah',
    title: 'Why Choose Sky Ridge Roofing for Commercial Roofing in Utah',
    description:
      'Clear scopes, responsive scheduling, and durable systems. Learn how we approach commercial roofing across Utah.',
    state: 'UT',
    serviceLabel: 'Commercial Roofing',
    primaryServicePath: '/services/commercial-roofing',
    heroImage: '/images/skyridge/skyridge_image_021.webp',
  },
  {
    slug: 'work-with-us-we-wont-let-storms-torment-you',
    title: 'Storm Damage Roofing Help in Utah',
    description:
      'If storms damaged your roof, we can document the damage, provide a clear scope, and help you navigate the insurance process.',
    state: 'UT',
    serviceLabel: 'Insurance Claims',
    primaryServicePath: '/services/insurance-claims',
    heroImage: '/images/skyridge/skyridge_image_004.webp',
  },
  {
    slug: 'the-roofing-centers-roofing-repair-projects-in-utah',
    title: 'Our Roofing Repair Projects in Utah',
    description:
      'See examples of roof repair work across Utah—leaks, flashing, ventilation, and storm-related repairs handled by Sky Ridge Roofing.',
    state: 'UT',
    serviceLabel: 'Roof Repairs',
    primaryServicePath: '/services/roof-repairs',
    heroImage: '/images/skyridge/skyridge_image_018.webp',
  },
  {
    slug: 'beaver-mountain-ut-roofing-contractors',
    title: 'Beaver Mountain, UT Roofing Contractors',
    description:
      'Roof repairs and replacement near Beaver Mountain, Utah. Built for mountain weather—snow load, wind, and freeze/thaw cycles.',
    city: 'Beaver Mountain',
    state: 'UT',
    serviceLabel: 'Roofing Contractors',
    primaryServicePath: '/services',
    heroImage: '/images/skyridge/skyridge_image_021.webp',
  },
];

export const LANDING_PAGE_SLUGS = LANDING_PAGES.map((p) => p.slug);
