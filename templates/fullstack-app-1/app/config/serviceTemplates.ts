import type { Metadata } from 'next';

export interface ServiceTemplate {
  slug: string;
  displayName: string;
  shortLabel?: string;
  heroTitle?: string;
  heroDescription?: string;
  summary?: string[];
  highlights?: string[];
  useCases?: string[];
  proTips?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  aliasOf?: string;
}

interface BuildContext {
  city: string;
  state: string;
  serviceName: string;
}

const yardDumpsterTemplates = [
  {
    slug: '15-yard-dumpster-rental',
    displayName: '15 Yard Dumpster Rental',
    capacity: '15 cubic yards (about 4.5 pickup truck loads)',
    bestFor: [
      'Single-room remodels or cleanouts',
      'Smaller roofing shingle removal',
      'Spring cleaning projects',
    ],
    weight: '1.5-2 tons',
  },
  {
    slug: '20-yard-dumpster-rental',
    displayName: '20 Yard Dumpster Rental',
    capacity: '20 cubic yards (about 6 pickup truck loads)',
    bestFor: [
      'Whole-home cleanouts',
      'Kitchen or bathroom remodels',
      'Roofing and decking projects',
    ],
    weight: '2-3 tons',
  },
  {
    slug: '30-yard-dumpster-rental',
    displayName: '30 Yard Dumpster Rental',
    capacity: '30 cubic yards (about 9 pickup truck loads)',
    bestFor: [
      'Large renovation or construction projects',
      'Multi-room cleanouts',
      'Commercial and light industrial jobs',
    ],
    weight: '3-4 tons',
  },
  {
    slug: '40-yard-dumpster-rental',
    displayName: '40 Yard Dumpster Rental',
    capacity: '40 cubic yards (about 12 pickup truck loads)',
    bestFor: [
      'Major construction and demolition',
      'Large-scale commercial cleanups',
      'Community or municipal projects',
    ],
    weight: '4-5 tons',
  },
];

const createSizeTemplate = ({
  slug,
  displayName,
  capacity,
  bestFor,
  weight,
}: (typeof yardDumpsterTemplates)[number]): ServiceTemplate => ({
  slug,
  displayName,
  shortLabel: displayName,
  heroTitle: `${displayName} in {{city}}, {{state}}`,
  heroDescription:
    `Need a flexible container for your project in {{city}}? Our ${displayName.toLowerCase()} keeps job sites tidy with fast delivery and dependable hauling throughout {{city}}, {{state}}.`,
  summary: [
    `Ideal for projects that generate significant debris but still need a compact footprint for tight driveways and job sites in {{city}}.`,
  ],
  highlights: [
    `Volume: ${capacity}`,
    `Weight allowance: ${weight}`,
    'Driveway-safe placement and courteous delivery drivers',
    'Flat-rate pricing with easy extensions available',
  ],
  useCases: bestFor,
  proTips: [
    'Reserve ahead of peak weekends for guaranteed delivery.',
    'Load heavier debris first and keep material level with the rim for safe hauling.',
  ],
  faqs: [
    {
      question: `How long can I keep a ${displayName.toLowerCase()} on-site in {{city}}?`,
      answer:
        'Standard rentals include up to 7 days. Need more time? Call us before pickup and we\'ll extend your rental at a simple flat daily rate.',
    },
    {
      question: 'What materials are prohibited?',
      answer:
        'Hazardous waste, liquids, tires, and batteries require special disposal. Ask our support team for guidance before loading restricted items.',
    },
  ],
  seoTitle: `${displayName} in {{city}}, Utah | Icon Dumpsters`,
  seoDescription: `Rent a ${displayName.toLowerCase()} in {{city}}, Utah with fast delivery, clear pricing, and friendly local support. Perfect for ${bestFor.slice(0, 2).join(', ').toLowerCase()} and more.`,
  keywords: [
    `${displayName.toLowerCase()} {{city}}`,
    `${displayName.toLowerCase()} Utah`,
    '{{city}} dumpster rentals',
  ],
});

const baseServiceTemplates: ServiceTemplate[] = [  {
    slug: 'city-sizes-pricing',
    displayName: 'Dumpster Sizes & Pricing',
    heroTitle: 'Dumpster Sizes and Pricing in {{city}}, {{state}}',
    heroDescription:
      'Compare 15, 20, and 30 yard dumpsters for projects in {{city}}. Transparent pricing, weight allowances, and fast delivery windows.',
    summary: [
      'See popular sizes with typical projects and weight ranges.',
      'Straightforward rates with driveway-safe placement included.',
    ],
    highlights: [
      'Upfront flat-rate pricing',
      'Flexible rental windows',
      'Local support from Utah dispatchers',
    ],
    faqs: [
      {
        question: 'What size should I choose?',
        answer:
          'Most home cleanouts start with a 15 yard. Renovations and roofing often use 20 yard. Large remodels and construction favor 30 yard.',
      },
      {
        question: 'What affects the price?',
        answer:
          'Size, weight at pickup, material type, distance, and rental duration. We include a fair tonnage allowance with clear overage rates.',
      },
    ],
    seoTitle: '{{city}} Dumpster Rentals - Professional Services in {{city}}, UT | Icon Dumpsters',
    seoDescription:
      'Compare 15, 20, and 30 yard dumpsters in {{city}}, Utah. Transparent rates, included weight, and fast delivery.',
    keywords: ['dumpster sizes {{city}}', 'dumpster pricing {{city}}'],
  },
  {
    slug: 'same-day-dumpster',
    displayName: 'Same-Day Dumpster Delivery',
    heroTitle: 'Same-Day Dumpster Delivery in {{city}}, {{state}}',
    heroDescription:
      'Need a dumpster today in {{city}}? We prioritize fast dispatch with clear ETA updates and easy pickup scheduling.',
    summary: [
      'Priority routes and extended operating hours when demand spikes.',
    ],
    highlights: [
      'Real-time dispatch updates',
      'Driveway-safe placement',
      'Easy pickup reminders',
    ],
    faqs: [
      {
        question: 'How quickly can you deliver?',
        answer:
          'Same-day in most {{city}} neighborhoods if you call before midday. Otherwise, first-available next morning.',
      },
      {
        question: 'What if my job runs late?',
        answer:
          'Text or call to extend your rental. We offer simple daily extension rates.',
      },
    ],
    seoTitle: 'Same-Day Dumpster Delivery in {{city}}, Utah | Icon Dumpsters',
    seoDescription:
      'Rush delivery available in {{city}}, Utah. Book today with clear pricing and reliable pickup.',
    keywords: ['same-day dumpster {{city}}', 'rush dumpster {{city}}'],
  },
  {
    slug: 'contractor-dumpsters',
    displayName: 'Contractor Dumpster Services',
    heroTitle: 'Contractor Dumpsters in {{city}}, {{state}}',
    heroDescription:
      'Reliable roll-offs for contractors in {{city}} with jobsite notes saved, staged swaps, and invoice preferences.',
    summary: [
      'Consistent service windows and coordinated haul-away for busy sites.',
    ],
    highlights: [
      'POs and consolidated invoicing',
      'After-hours drop/pickup when available',
      'OSHA-aware placement and safety',
    ],
    faqs: [
      {
        question: 'Do you support staged swaps?',
        answer:
          'Yes. We coordinate on-site timing so a full can leaves as an empty arrives, minimizing downtime.',
      },
      {
        question: 'Can you hold multiple sites?',
        answer:
          'We support multi-site schedules across {{city}} with a single point of contact and shared job notes.',
      },
    ],
    seoTitle: 'Contractor Dumpster Services in {{city}}, Utah | Icon Dumpsters',
    seoDescription:
      'Roll-off dumpsters for contractors in {{city}}, Utah. Staged swaps, job notes, and reliable dispatch.',
    keywords: ['contractor dumpsters {{city}}', 'construction dumpsters {{city}}'],
  },
  {
    slug: 'dumpster-rental-near',
    displayName: 'Local Dumpster Rental Near You',
    shortLabel: 'Dumpster Rental Near You',
    heroTitle: 'Dumpster Rental Near {{city}}, {{state}}',
    heroDescription:
      'Need a dumpster fast in {{city}}? Icon Dumpsters delivers locally with responsive dispatch, affordable pricing, and flexible pickup windows.',
    summary: [
      'We keep neighborhoods across {{city}} tidy with dumpsters sized for every project, from home cleanouts to renovations and landscaping.',
    ],
    highlights: [
      'Same-day or next-day deliveries throughout the metro area',
      'Local dispatchers who understand neighborhood access and HOA guidelines',
      'Transparent pricing with no surprise fees',
    ],
    useCases: [
      'Moving prep and estate cleanouts',
      'Remodeling and roofing debris',
      'Community or neighborhood cleanup events',
    ],
    proTips: [
      'Plan ahead for parking or street permits if your area has restrictions.',
      'Keep heavy debris distributed evenly in the dumpster to maximize space.',
    ],
    faqs: [
      {
        question: 'How quickly can you deliver to my part of {{city}}?',
        answer:
          'Most deliveries arrive the same day or within 24 hours. When you call before noon, we can often drop off that afternoon.',
      },
      {
        question: 'Do you serve surrounding communities outside {{city}}?',
        answer:
          'Absolutely. We cover nearby towns and unincorporated areas across {{state}} with the same fast timelines and pricing.',
      },
    ],
    seoTitle: 'Dumpster Rental Near {{city}}, Utah | Icon Dumpsters',
    seoDescription:
      'Find a dumpster rental near you in {{city}}, Utah with Icon Dumpsters. Fast local delivery, driveway-safe placement, and clear pricing for any cleanup.',
    keywords: [
      'dumpster near me {{city}}',
      '{{city}} dumpster delivery',
      'rent a dumpster {{city}}',
    ],
  },
  {
    slug: 'dumpster-rental-near-me',
    displayName: 'Dumpster Rental Near Me',
    aliasOf: 'dumpster-rental-near',
  },
  {
    slug: 'dumpster-rentals',
    displayName: 'Dumpster Rentals',
    heroTitle: 'Dumpster Rentals in {{city}}, {{state}}',
    heroDescription:
      'From small home projects to large construction work, we keep roll-off dumpster rentals easy for homeowners, contractors, and property managers across {{city}}.',
    summary: [
      'Choose from multiple sizes, flexible rental lengths, and friendly delivery pros who position dumpsters exactly where you need them.',
    ],
    highlights: [
      'Inventory of 15, 20, 30, and 40 yard roll-off containers',
      'Flexible swap-outs for ongoing projects',
      'Digital invoicing and responsive account management',
    ],
    useCases: [
      'Whole-house cleanouts and estate projects',
      'Remodeling or restoration jobs',
      'Commercial tenant turnovers',
    ],
    faqs: [
      {
        question: 'Can I schedule recurring service for long-term projects?',
        answer:
          'Yes. We coordinate swaps and pickups with your project schedule so you always have an empty container ready when you need it.',
      },
    ],
    seoTitle: 'Dumpster Rentals in {{city}}, Utah | Icon Dumpsters',
    seoDescription:
      'Reserve dumpster rentals in {{city}}, Utah with Icon Dumpsters. Multiple sizes, fast swaps, and courteous drivers for residential and commercial cleanup.',
  },
  {
    slug: 'garage-cleanout',
    displayName: 'Garage Cleanout Dumpster',
    heroDescription:
      'Clear your garage in {{city}} without multiple trips to the landfill. Our driveway-friendly dumpsters make clutter removal simple and efficient.',
    highlights: [
      'Low-profile containers that fit most driveways',
      'Help sorting allowable vs. restricted items',
      'Weekend delivery and pickup options',
    ],
    useCases: [
      'Seasonal garage cleanups',
      'Home organization projects',
      'Preparing a property for sale',
    ],
    faqs: [
      {
        question: 'Can you help me determine the right dumpster size for my garage cleanout?',
        answer:
          'Absolutely. Share a quick photo or list of items and our local team will size the perfect container for your project.',
      },
    ],
    seoTitle: 'Garage Cleanout Dumpsters in {{city}}, Utah | Icon Dumpsters',
    seoDescription:
      'Schedule a garage cleanout dumpster in {{city}}, Utah. Icon Dumpsters delivers driveway-safe containers with flexible rental periods.',
  },
  {
    slug: 'yard-waste-removal',
    displayName: 'Yard Waste Removal',
    heroDescription:
      'Tackle landscaping debris in {{city}} with dedicated yard waste dumpsters. We handle brush, branches, sod, and dirt responsibly.',
    highlights: [
      'Seasonal yard waste removal programs',
      'Heavy-duty containers for soil and sod',
      'LEED-compliant disposal tracking on request',
    ],
    useCases: [
      'Landscape redesigns',
      'Storm aftermath cleanup',
      'Tree trimming and brush removal',
    ],
    seoTitle: 'Yard Waste Removal in {{city}}, Utah | Icon Dumpsters',
    seoDescription:
      'Rent yard waste dumpsters in {{city}}, Utah for brush, branches, and seasonal debris. Reliable delivery and disposal from Icon Dumpsters.',
  },
  {
    slug: 'moving-cleanup',
    displayName: 'Moving Cleanup Dumpster',
    heroDescription:
      'Moving in or out of {{city}}? Streamline junk removal with a roll-off dumpster that handles household clutter, furniture, and renovation debris.',
    highlights: [
      'Short-term rentals tailored to moving schedules',
      'Perfect for decluttering before listing a home',
      'Helpful support for donating or recycling usable items',
    ],
    useCases: [
      'Pre-move downsizing',
      'Landlord turnover refreshes',
      'Estate cleanouts and property transitions',
    ],
  },
  {
    slug: 'emergency-cleanup',
    displayName: 'Emergency Cleanup Support',
    heroDescription:
      'Unexpected damage in {{city}}? Icon Dumpsters mobilizes quickly with containers for fire, flood, and storm recovery projects.',
    highlights: [
      'Rapid response and after-hours delivery',
      'Coordinated service with contractors and restoration pros',
      'Flexible swaps for extended mitigation projects',
    ],
    useCases: [
      'Water or fire damage remediation',
      'Wind or storm debris removal',
      'Insurance restoration projects',
    ],
  },
  {
    slug: 'furniture-disposal',
    displayName: 'Furniture Disposal',
    heroDescription:
      'Easily dispose of bulky furniture in {{city}} with a dumpster sized for couches, mattresses, shelving, and mixed waste.',
    highlights: [
      'Driveway placement for easy loading',
      'Donation guidance for reusable items',
      'Optional labor referrals for heavy lifting',
    ],
    useCases: [
      'Apartment or office refresh projects',
      'Home staging and remodels',
      'Senior living transitions',
    ],
  },
  {
    slug: 'same-day-dumpster-delivery',
    displayName: 'Same-Day Dumpster Delivery',
    heroDescription:
      'On a tight timeline in {{city}}? Our dispatch team keeps same-day and next-day delivery slots available for urgent projects.',
    highlights: [
      'Live dispatchers based in Utah',
      'GPS-tracked fleet for predictable arrivals',
      'Accurate ETAs and driver communication',
    ],
    useCases: [
      'Rush construction schedules',
      'Emergency cleanups',
      'Weekend DIY projects',
    ],
  },
  {
    slug: 'construction-waste-management',
    displayName: 'Construction Waste Management',
    heroDescription:
      'Keep your {{city}} job site organized with construction dumpsters sized for framing lumber, drywall, concrete, and demolition debris.',
    highlights: [
      'OSHA-aware placement and safety practices',
      'Swap services to keep crews productive',
      'Job-cost tracking and consolidated billing',
    ],
    useCases: [
      'Residential and commercial builds',
      'Tenant improvement projects',
      'Demolition and renovation work',
    ],
  },
  {
    slug: 'demolition-waste-disposal',
    displayName: 'Demolition Waste Disposal',
    heroDescription:
      'Demo in {{city}} creates heavy debris. Our high-capacity dumpsters and reinforced doors make loading safe and efficient.',
    highlights: [
      'Roll-off containers built for concrete and masonry',
      'Optional load-and-go services for tight timelines',
      'Recycling documentation on request',
    ],
    useCases: [
      'Interior gut jobs',
      'Concrete slab removal',
      'Deck and shed tear-downs',
    ],
  },
  {
    slug: 'basement-cleanout',
    displayName: 'Basement Cleanout',
    heroDescription:
      'Clear out your basement in {{city}} with a dumpster that handles mixed household junk, shelving, and renovation debris.',
    highlights: [
      'Low thresholds for wheelbarrow loading',
      'Convenient rental extensions if you uncover more clutter',
      'Friendly guidance on sorting recyclables',
    ],
    useCases: [
      'Flooded or water-damaged basements',
      'Home gym or storage reconfiguration',
      'Rental property turnover',
    ],
  },
  {
    slug: 'junk-removal',
    displayName: 'Junk Removal Dumpster',
    heroDescription:
      'Skip the multiple trips to the landfill. Our roll-off dumpsters make junk removal in {{city}} simple, affordable, and on your schedule.',
    highlights: [
      'Weekend drop-off and pickup options',
      'Volume-based pricing with no labor markups',
      'Recycling routes for appliances and metal',
    ],
    useCases: [
      'Whole-home decluttering projects',
      'Retail or office cleanouts',
      'Community cleanups and volunteer events',
    ],
  },
  {
    slug: 'residential-dumpster-rental',
    displayName: 'Residential Dumpster Rental',
    heroDescription:
      'Home projects in {{city}} are easier with a residential-friendly dumpster. We protect driveways, set clear expectations, and haul away debris right on time.',
    highlights: [
      'Driveway protection boards at no extra cost',
      'Multiple sizes to fit HOA requirements',
      'Responsive customer support seven days a week',
    ],
    useCases: [
      'Kitchen and bath remodels',
      'Roofing and siding upgrades',
      'Landscaping and outdoor living projects',
    ],
    seoTitle: 'Residential Dumpster Rental in {{city}}, Utah | Icon Dumpsters',
  },
  {
    slug: 'commercial-dumpster-rental',
    displayName: 'Commercial Dumpster Rental',
    heroDescription:
      'Businesses in {{city}} trust Icon Dumpsters for reliable roll-off containers, transparent pricing, and scheduled swap-outs that keep operations moving.',
    highlights: [
      'Account-managed service with customized billing',
      'Safety-trained drivers for sensitive sites',
      'Flexible rental terms for seasonal or ongoing work',
    ],
    useCases: [
      'Retail build-outs and remodels',
      'Warehouse and logistics cleanups',
      'Property management turnovers',
    ],
    seoTitle: 'Commercial Dumpster Rental in {{city}}, Utah | Icon Dumpsters',
  },
  {
    slug: 'event-cleanup',
    displayName: 'Event Cleanup Dumpster',
    heroDescription:
      'Hosting an event in {{city}}? Keep grounds tidy with roll-off dumpsters sized for festivals, athletic events, and community gatherings.',
    highlights: [
      'Flexible delivery windows for setup and breakdown',
      'Recycling guidance for sustainability goals',
      'Dedicated dispatcher during live events',
    ],
    useCases: [
      'Community festivals',
      'Corporate events and trade shows',
      'Sports tournaments',
    ],
  },
  {
    slug: 'electronic-waste-disposal',
    displayName: 'Electronic Waste Disposal',
    heroDescription:
      'Dispose of e-waste responsibly in {{city}}. We coordinate pickups for electronics, appliances, and mixed waste streams.',
    highlights: [
      'Certified recycling partners for electronics',
      'Secure handling of devices with data storage',
      'Documentation for corporate sustainability reporting',
    ],
    useCases: [
      'Office technology upgrades',
      'School or university refresh projects',
      'Data center decommissioning',
    ],
  },
  {
    slug: 'mold-remediation',
    displayName: 'Mold Remediation Debris Removal',
    heroDescription:
      'Keep mold remediation debris contained with lined dumpsters and reliable hauling in {{city}}.',
    highlights: [
      'Moisture-resistant liners available on request',
      'Coordinated pickup with remediation timelines',
      'Compliant disposal of contaminated materials',
    ],
    useCases: [
      'Residential mold mitigation',
      'Commercial water loss projects',
      'Insurance restoration work',
    ],
  },
  {
    slug: 'condo-cleanout',
    displayName: 'Condo Cleanout Support',
    heroDescription:
      'High-rise or multi-family cleanout in {{city}}? Our dumpsters and crews understand tight access and HOA requirements.',
    highlights: [
      'Coordinated elevator and loading dock scheduling',
      'Compact containers for limited parking',
      'Insurance certificates available for property managers',
    ],
  },
  {
    slug: 'mobile-home-cleanout',
    displayName: 'Mobile Home Cleanout',
    heroDescription:
      'Refresh or renovate a mobile home in {{city}} with dumpsters sized for light construction and household debris.',
    highlights: [
      'Lightweight equipment suited for mobile home communities',
      'Respectful crews that protect community roads',
      'Quick swaps for multi-unit projects',
    ],
  },
  {
    slug: 'rv-cleanout',
    displayName: 'RV and Camper Cleanout',
    heroDescription:
      'Renovating or decommissioning an RV in {{city}}? Keep the process organized with a dedicated dumpster for mixed materials.',
    highlights: [
      'Sized for cabinetry, flooring, and appliance removal',
      'Flexible rental duration for full remodels',
      'Recycling options for metal and electronics',
    ],
  },
  {
    slug: 'disaster-cleanup',
    displayName: 'Disaster Cleanup Dumpsters',
    heroDescription:
      'When disaster strikes in {{city}}, Icon Dumpsters mobilizes quickly with debris boxes and coordinated hauling.',
    highlights: [
      'Priority dispatch for emergency responders and contractors',
      'Extended operating hours during major incidents',
      'Experienced drivers for hazardous conditions',
    ],
  },
  {
    slug: 'retail-cleanout',
    displayName: 'Retail Cleanout Dumpster',
    heroDescription:
      'Refreshing a retail space in {{city}}? Our dumpsters keep fixtures, shelving, and packaging debris under control.',
    highlights: [
      'Flexible drop-off before or after business hours',
      'Coordinated haul-away for mall or mixed-use properties',
      'Documentation for tenant improvement requirements',
    ],
  },
  {
    slug: 'eviction-cleanup',
    displayName: 'Eviction Cleanup Support',
    heroDescription:
      'Property managers in {{city}} rely on Icon Dumpsters for quick-turn eviction cleanups and property resets.',
    highlights: [
      'Rapid response for court-ordered timelines',
      'Crew referrals for bagging and hauling assistance',
      'Photos and documentation available on request',
    ],
  },
  {
    slug: 'restaurant-cleanout',
    displayName: 'Restaurant Cleanout',
    heroDescription:
      'Renovating or closing a restaurant in {{city}}? Our dumpsters are perfect for kitchen equipment, seating, and construction debris.',
    highlights: [
      'Food-service aware handling and sanitation',
      'Coordinated pickup outside peak traffic hours',
      'Metal and appliance recycling guidance',
    ],
  },
  {
    slug: 'services/event-cleanup',
    displayName: 'Event Cleanup Services',
    aliasOf: 'event-cleanup',
  },
];

const serviceTemplatesArray: ServiceTemplate[] = [
  ...yardDumpsterTemplates.map(createSizeTemplate),
  ...baseServiceTemplates,
];

export const serviceTemplates: Record<string, ServiceTemplate> = {};

for (const template of serviceTemplatesArray) {
  serviceTemplates[template.slug] = template;
}

export function resolveServiceTemplate(slug: string): ServiceTemplate | null {
  const direct = serviceTemplates[slug];
  if (!direct) {
    return null;
  }

  if (direct.aliasOf) {
    return resolveServiceTemplate(direct.aliasOf);
  }

  return direct;
}

export function applyTemplate(input: string, context: BuildContext): string {
  return input
    .replace(/{{\s*city\s*}}/gi, context.city)
    .replace(/{{\s*state\s*}}/gi, context.state)
    .replace(/{{\s*service(Name)?\s*}}/gi, context.serviceName);
}

export function applyTemplateToArray(
  items: string[] | undefined,
  context: BuildContext
): string[] {
  if (!items || items.length === 0) {
    return [];
  }

  return items.map((item) => applyTemplate(item, context));
}

export function buildDefaultMetadata(
  serviceSlug: string,
  citySlug: string,
  canonicalPath: string
): Metadata {
  const service = resolveServiceTemplate(serviceSlug);
  const cityName = citySlug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  const state = 'Utah';
  const serviceName = service?.displayName ?? serviceSlug.replace(/-/g, ' ');

  const context: BuildContext = {
    city: cityName,
    state,
    serviceName,
  };

  const titleTemplate =
    service?.seoTitle ?? '{{serviceName}} in {{city}}, Utah | Icon Dumpsters';
  const descriptionTemplate =
    service?.seoDescription ??
    'Schedule {{serviceName}} in {{city}}, Utah. Icon Dumpsters provides fast delivery, clear pricing, and dependable hauling for any project.';

  // Ensure canonicalPath is absolute
  const absoluteCanonicalPath = canonicalPath.startsWith('http') 
    ? canonicalPath 
    : `https://icondumpsters.com${canonicalPath.startsWith('/') ? canonicalPath : '/' + canonicalPath}`;

  return {
    title: applyTemplate(titleTemplate, context),
    description: applyTemplate(descriptionTemplate, context),
    keywords: service?.keywords?.map((keyword) => applyTemplate(keyword, context)),
    alternates: {
      canonical: absoluteCanonicalPath,
    },
    openGraph: {
      title: applyTemplate(titleTemplate, context),
      description: applyTemplate(descriptionTemplate, context),
      url: absoluteCanonicalPath,
      type: "website",
    },
  };
}

