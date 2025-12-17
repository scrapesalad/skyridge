export const INDEXABLE_CITY_SLUGS = [
  'salt-lake-city',
  'provo',
  'ogden',
  'west-valley-city',
  'sandy',
  'orem',
  'layton',
  'taylorsville',
  'st-george',
  'logan',
] as const;

export const INDEXABLE_CITY_SLUG_SET = new Set<string>(INDEXABLE_CITY_SLUGS);

export const INDEXABLE_ROUTES = [
  '/',
  '/utah-roofing-company',
  '/about',
  '/services',
  '/services/roof-replacement',
  '/services/roof-repairs',
  '/services/metal-roofing',
  '/services/insurance-claims',
  '/services/commercial-roofing',
  '/services/additional-services',
  '/materials',
  '/financing',
  '/gallery',
  '/testimonials',
  '/faq',
  '/locations',
] as const;
