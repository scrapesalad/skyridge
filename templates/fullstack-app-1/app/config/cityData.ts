export interface CityData {
  cityName: string;
  citySlug: string;
  state: string;
  phoneNumber: string;
  latitude: string;
  longitude: string;
  landmarks: Array<{
    name: string;
    address: string;
    url?: string;
    description?: string;
  }>;
  businessDistricts: Array<{
    name: string;
    description: string;
    link: string;
  }>;
  permitInfo: {
    cityName: string;
    phoneNumber: string;
    requirements: string;
  };
  contentSections: {
    overview: string;
    residentialServices: string[];
    commercialServices: string[];
    whyChooseUs: string;
    dumpsterSizes: Array<{
      size: string;
      description: string;
      useCases: string[];
    }>;
    localInfo: string;
    serviceAreas: string;
  };
}

const DEFAULT_BUSINESS_PHONE = '801-918-6000';

interface GenericCityConfig {
  citySlug: string;
  cityName: string;
  latitude: string;
  longitude: string;
  county: string;
  neighborhoods: string[];
  serviceAreas: string;
  permitCityName?: string;
  permitPhone?: string;
  overviewNote?: string;
  landingPath?: string;
}

const toMapQuery = (value: string): string =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '+');

function createGenericCityData({
  citySlug,
  cityName,
  latitude,
  longitude,
  county,
  neighborhoods,
  serviceAreas,
  permitCityName,
  permitPhone,
  overviewNote,
  landingPath,
}: GenericCityConfig): CityData {
  const mapQuery = toMapQuery(cityName);
  const nearMe = citySlug.startsWith('me-');
  const districtNames =
    neighborhoods && neighborhoods.length > 0
      ? neighborhoods
      : ['Downtown Corridor', `${cityName} Commerce Park`, `${cityName} Industrial Hub`];
  const linkTarget = landingPath ?? (nearMe ? '/services' : `/${citySlug}`);

  return {
    cityName,
    citySlug,
    state: 'UT',
    phoneNumber: DEFAULT_BUSINESS_PHONE,
    latitude,
    longitude,
    landmarks: [
      {
        name: `${cityName} City Hall`,
        address: `${cityName}, UT`,
        url: `https://www.google.com/maps/search/${mapQuery}+city+hall`,
        description: `Municipal services center supporting permitting for ${cityName} projects.`,
      },
      {
        name: `${cityName} Public Library`,
        address: `${cityName}, UT`,
        url: `https://www.google.com/maps/search/${mapQuery}+public+library`,
        description: `Community resource hub where many remodel and cleanup projects begin.`,
      },
      {
        name: `${cityName} Community Park`,
        address: `${cityName}, UT`,
        url: `https://www.google.com/maps/search/${mapQuery}+park`,
        description: `Popular outdoor space that highlights seasonal cleanup demand in ${county}.`,
      },
    ],
    businessDistricts: districtNames.map((district) => ({
      name: district,
      description: `${district} is a frequent service corridor for Icon Dumpsters.`,
      link: linkTarget,
    })),
    permitInfo: {
      cityName: permitCityName ?? cityName,
      phoneNumber: permitPhone ?? DEFAULT_BUSINESS_PHONE,
      requirements: `Right-of-way placements in ${cityName} may require approval. Our Salt Lake County dispatchers coordinate with ${permitCityName ?? cityName} staff to keep your delivery compliant.`,
    },
    contentSections: {
      overview:
        overviewNote ??
        `Our Salt Lake County yard stages equipment for ${cityName} so crews across ${county} get same-day roll-off support when schedules tighten.`,
      residentialServices: [
        `Kitchen and bathroom remodels in ${cityName}`,
        `Basement and garage cleanouts across ${county}`,
        `HOA-friendly driveway placements`,
        `Move-in and move-out junk removal`,
        `Seasonal yard waste and storm debris`,
      ],
      commercialServices: [
        `Retail and office refresh projects throughout ${cityName}`,
        `Property management turnovers and tenant improvements`,
        `Light industrial cleanup in key ${county} corridors`,
        `Municipal events and community projects`,
        `Construction staging near major transportation routes`,
      ],
      whyChooseUs: `We monitor canyon weather, freeway traffic, and landfill hours from Salt Lake County to keep ${cityName} drop-offs and swaps on time.`,
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: `Great for tight residential streets and infill lots across ${cityName}.`,
          useCases: ['Small remodels', 'Roof tear-offs', 'Estate cleanouts'],
        },
        {
          size: '20 Yard',
          description: `Balanced capacity for contractors working throughout ${county}.`,
          useCases: ['Multi-room updates', 'Retail refreshes', 'Landscape projects'],
        },
        {
          size: '30 Yard',
          description: `High-volume solution for demolition and large commercial work in ${cityName}.`,
          useCases: ['New construction', 'Large cleanouts', 'Disaster response'],
        },
      ],
      localInfo: `${cityName} anchors important projects within ${county}. We schedule around rush-hour and seasonal tourism to protect your timelines.`,
      serviceAreas,
    },
  };
}

export const cityData: Record<string, CityData> = {
  'draper': {
    cityName: 'Draper',
    citySlug: 'draper',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.5247',
    longitude: '-111.8638',
    landmarks: [
      {
        name: 'Draper City Hall',
        address: '1020 E Pioneer Rd',
        url: 'https://www.google.com/maps/search/Draper+City+Hall+Utah',
      },
      {
        name: 'Corner Canyon',
        address: '1300 E Corner Canyon Dr',
        url: 'https://www.google.com/maps/place/Corner+Canyon/@40.6669,-111.8878,15z',
      },
      {
        name: 'Draper Park',
        address: '12500 S 1300 E',
        url: 'https://www.google.com/maps/search/Draper+Park+Utah',
      },
      {
        name: 'Loveland Living Planet Aquarium',
        address: '12033 S Lone Peak Pkwy',
        url: 'https://www.google.com/maps/search/Loveland+Living+Planet+Aquarium+Utah',
      },
      {
        name: 'Draper Library',
        address: '1136 E Pioneer Rd',
        url: 'https://www.google.com/maps/search/Draper+Library+Utah',
      },
      {
        name: 'Porter Rockwell Trail',
        address: 'Along Jordan River',
        url: 'https://www.google.com/maps/place/Porter+Rockwell+Trail/@40.6669,-111.8878,15z',
      },
    ],
    businessDistricts: [
      {
        name: 'Draper Central',
        description: 'Major retail and dining',
        link: '/draper',
      },
      {
        name: 'Draper East',
        description: 'Government and civic center',
        link: '/draper',
      },
      {
        name: 'Draper West',
        description: 'Residential and commercial mix',
        link: '/draper',
      },
      {
        name: 'Draper South',
        description: 'Industrial and commercial',
        link: '/draper',
      },
      {
        name: 'Draper North',
        description: 'Growing residential area',
        link: '/draper',
      },
      {
        name: 'Downtown Draper',
        description: 'Established neighborhoods',
        link: '/draper',
      },
    ],
    permitInfo: {
      cityName: 'Draper',
      phoneNumber: '801-576-6500',
      requirements: 'Contact Draper for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Draper, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Draper, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Draper\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Draper is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Draper, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'salt-lake-city': {
    cityName: 'Salt Lake City',
    citySlug: 'salt-lake-city',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'Temple Square',
        address: '50 N Temple',
        url: 'https://www.templesquare.com/',
      },
      {
        name: 'Utah State Capitol',
        address: '350 N State St',
        url: 'https://utahstatecapitol.utah.gov/',
      },
      {
        name: 'Liberty Park',
        address: '600 E 900 S',
        url: 'https://www.slc.gov/parks/parks-division/liberty-park/',
      },
      {
        name: 'Red Butte Garden',
        address: '300 Wakara Way',
        url: 'https://redbuttegarden.org/',
      },
      {
        name: 'Natural History Museum of Utah',
        address: '301 Wakara Way',
        url: 'https://nhmu.utah.edu/',
      },
      {
        name: 'Hogle Zoo',
        address: '2600 E Sunnyside Ave',
        url: 'https://www.hoglezoo.org/',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Salt Lake',
        description: 'Business and government center',
        link: '/dumpster-rental-salt-lake-city-ut',
      },
      {
        name: 'Sugar House',
        description: 'Shopping and entertainment district',
        link: '/dumpster-rental-salt-lake-city-ut',
      },
      {
        name: 'The Avenues',
        description: 'Historic residential area',
        link: '/dumpster-rental-salt-lake-city-ut',
      },
      {
        name: 'University District',
        description: 'University of Utah area',
        link: '/dumpster-rental-salt-lake-city-ut',
      },
      {
        name: 'Central City',
        description: 'Mixed residential and commercial',
        link: '/dumpster-rental-salt-lake-city-ut',
      },
      {
        name: 'East Bench',
        description: 'Upscale residential neighborhoods',
        link: '/dumpster-rental-salt-lake-city-ut',
      },
    ],
    permitInfo: {
      cityName: 'Salt Lake City',
      phoneNumber: '801-535-6000',
      requirements: 'Contact Salt Lake City for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Salt Lake City, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Salt Lake City, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Salt Lake City\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Salt Lake City is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Salt Lake City, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  // Add more cities here following the same pattern
  'murray': {
    cityName: 'Murray',
    citySlug: 'murray',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6669',
    longitude: '-111.8878',
    landmarks: [
      {
        name: 'Murray City Hall',
        address: '5025 S State St',
        url: 'https://www.google.com/maps/search/Murray+City+Hall+Utah',
      },
      {
        name: 'Murray Park',
        address: '296 E Murray Park Ave',
        url: 'https://www.google.com/maps/search/Murray+Park+Utah',
      },
      {
        name: 'Murray Library',
        address: '166 E 5300 S',
        url: 'https://www.google.com/maps/search/Murray+Library+Utah',
      },
      {
        name: 'Murray Theater',
        address: '4959 S State St',
        url: 'https://www.murraytheater.com/',
      },
      {
        name: 'Murray Golf Course',
        address: '5600 S 900 E',
        url: 'https://www.google.com/maps/search/Murray+Golf+Course+Utah',
      },
    ],
    businessDistricts: [
      {
        name: 'Murray Central',
        description: 'Major retail and dining district',
        link: '/murray',
      },
      {
        name: 'Murray East',
        description: 'Residential and commercial mix',
        link: '/murray',
      },
      {
        name: 'Murray West',
        description: 'Industrial and commercial area',
        link: '/murray',
      },
      {
        name: 'Murray South',
        description: 'Growing residential area',
        link: '/murray',
      },
    ],
    permitInfo: {
      cityName: 'Murray',
      phoneNumber: '801-264-2660',
      requirements: 'Contact Murray for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Murray, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Murray, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Murray\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Murray is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Murray, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'sandy': {
    cityName: 'Sandy',
    citySlug: 'sandy',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.5649',
    longitude: '-111.8389',
    landmarks: [
      {
        name: 'Sandy City Hall',
        address: '10000 Centennial Pkwy',
        url: 'https://www.google.com/maps/search/Sandy+City+Hall+Utah',
      },
      {
        name: 'South Towne Expo Center',
        address: '9575 S State St',
        url: 'https://www.southtowneexpo.com/',
      },
      {
        name: 'Sandy Amphitheater',
        address: '1245 E 9400 S',
        url: 'https://www.google.com/maps/search/Sandy+Amphitheater+Utah',
      },
      {
        name: 'Dimple Dell Regional Park',
        address: '10600 S 1000 E',
        url: 'https://www.google.com/maps/search/Dimple+Dell+Regional+Park+Utah',
      },
    ],
    businessDistricts: [
      {
        name: 'Sandy Central',
        description: 'Major retail and dining district',
        link: '/sandy',
      },
      {
        name: 'Sandy East',
        description: 'Residential and commercial mix',
        link: '/sandy',
      },
      {
        name: 'Sandy West',
        description: 'Industrial and commercial area',
        link: '/sandy',
      },
    ],
    permitInfo: {
      cityName: 'Sandy',
      phoneNumber: '801-568-7100',
      requirements: 'Contact Sandy for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Sandy, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Sandy, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Sandy\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Sandy is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Sandy, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'west-jordan': {
    cityName: 'West Jordan',
    citySlug: 'west-jordan',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6097',
    longitude: '-112.0007',
    landmarks: [
      {
        name: 'West Jordan City Hall',
        address: '8000 S Redwood Rd',
        url: 'https://www.westjordan.utah.gov/',
      },
      {
        name: 'Jordan Landing',
        address: '7200 S Jordan Landing Blvd',
        url: 'https://www.jordanlanding.com/',
      },
      {
        name: 'West Jordan Library',
        address: '8030 S 1825 W',
        url: 'https://www.google.com/maps/search/West+Jordan+Library+Utah',
      },
    ],
    businessDistricts: [
      {
        name: 'West Jordan Central',
        description: 'Major retail and dining district',
        link: '/west-jordan',
      },
      {
        name: 'West Jordan East',
        description: 'Residential and commercial mix',
        link: '/west-jordan',
      },
      {
        name: 'West Jordan West',
        description: 'Industrial and commercial area',
        link: '/west-jordan',
      },
    ],
    permitInfo: {
      cityName: 'West Jordan',
      phoneNumber: '801-569-5100',
      requirements: 'Contact West Jordan for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout West Jordan, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in West Jordan, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of West Jordan\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'West Jordan is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout West Jordan, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'american-fork': {
    cityName: 'American Fork',
    citySlug: 'american-fork',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.3769',
    longitude: '-111.7958',
    landmarks: [
      {
        name: 'American Fork City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/American+Fork+City+Hall+Utah',
      },
      {
        name: 'American Fork Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/American%20Fork%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'American Fork Central',
        description: 'Major retail and dining district',
        link: '/american-fork',
      },
      {
        name: 'American Fork East',
        description: 'Residential and commercial mix',
        link: '/american-fork',
      },
      {
        name: 'American Fork West',
        description: 'Industrial and commercial area',
        link: '/american-fork',
      },
    ],
    permitInfo: {
      cityName: 'American Fork',
      phoneNumber: '801-918-6000',
      requirements: 'Contact American Fork for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout American Fork, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in American Fork, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of American Fork\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'American Fork is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout American Fork, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'bountiful': {
    cityName: 'Bountiful',
    citySlug: 'bountiful',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.8894',
    longitude: '-111.8808',
    landmarks: [
      {
        name: 'Bountiful City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Bountiful+City+Hall+Utah',
      },
      {
        name: 'Bountiful Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Bountiful%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Bountiful Central',
        description: 'Major retail and dining district',
        link: '/bountiful',
      },
      {
        name: 'Bountiful East',
        description: 'Residential and commercial mix',
        link: '/bountiful',
      },
      {
        name: 'Bountiful West',
        description: 'Industrial and commercial area',
        link: '/bountiful',
      },
    ],
    permitInfo: {
      cityName: 'Bountiful',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Bountiful for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Bountiful, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Bountiful, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Bountiful\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Bountiful is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Bountiful, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'centerville': {
    cityName: 'Centerville',
    citySlug: 'centerville',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.9180',
    longitude: '-111.8722',
    landmarks: [
      {
        name: 'Centerville City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Centerville+City+Hall+Utah',
      },
      {
        name: 'Centerville Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Centerville%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Centerville Central',
        description: 'Major retail and dining district',
        link: '/centerville',
      },
      {
        name: 'Centerville East',
        description: 'Residential and commercial mix',
        link: '/centerville',
      },
      {
        name: 'Centerville West',
        description: 'Industrial and commercial area',
        link: '/centerville',
      },
    ],
    permitInfo: {
      cityName: 'Centerville',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Centerville for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Centerville, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Centerville, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Centerville\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Centerville is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Centerville, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'clearfield': {
    cityName: 'Clearfield',
    citySlug: 'clearfield',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '41.1108',
    longitude: '-112.0261',
    landmarks: [
      {
        name: 'Clearfield City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Clearfield+City+Hall+Utah',
      },
      {
        name: 'Clearfield Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Clearfield%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Clearfield Central',
        description: 'Major retail and dining district',
        link: '/clearfield',
      },
      {
        name: 'Clearfield East',
        description: 'Residential and commercial mix',
        link: '/clearfield',
      },
      {
        name: 'Clearfield West',
        description: 'Industrial and commercial area',
        link: '/clearfield',
      },
    ],
    permitInfo: {
      cityName: 'Clearfield',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Clearfield for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Clearfield, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Clearfield, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Clearfield\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Clearfield is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Clearfield, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'cottonwood-heights': {
    cityName: 'Cottonwood Heights',
    citySlug: 'cottonwood-heights',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6197',
    longitude: '-111.8102',
    landmarks: [
      {
        name: 'Cottonwood Heights City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Cottonwood+Heights+City+Hall+Utah',
      },
      {
        name: 'Cottonwood Heights Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Cottonwood%20Heights%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Cottonwood Heights Central',
        description: 'Major retail and dining district',
        link: '/cottonwood-heights',
      },
      {
        name: 'Cottonwood Heights East',
        description: 'Residential and commercial mix',
        link: '/cottonwood-heights',
      },
      {
        name: 'Cottonwood Heights West',
        description: 'Industrial and commercial area',
        link: '/cottonwood-heights',
      },
    ],
    permitInfo: {
      cityName: 'Cottonwood Heights',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Cottonwood Heights for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Cottonwood Heights, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Cottonwood Heights, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Cottonwood Heights\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Cottonwood Heights is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Cottonwood Heights, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'downtown-salt-lake': {
    cityName: 'Downtown Salt Lake',
    citySlug: 'downtown-salt-lake',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'Downtown Salt Lake City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Downtown+Salt+Lake+City+Hall+Utah',
      },
      {
        name: 'Downtown Salt Lake Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Downtown%20Salt%20Lake%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Salt Lake Central',
        description: 'Major retail and dining district',
        link: '/downtown-salt-lake',
      },
      {
        name: 'Downtown Salt Lake East',
        description: 'Residential and commercial mix',
        link: '/downtown-salt-lake',
      },
      {
        name: 'Downtown Salt Lake West',
        description: 'Industrial and commercial area',
        link: '/downtown-salt-lake',
      },
    ],
    permitInfo: {
      cityName: 'Downtown Salt Lake',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Downtown Salt Lake for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Downtown Salt Lake, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Downtown Salt Lake, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Downtown Salt Lake\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Downtown Salt Lake is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Downtown Salt Lake, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'eagle-mountain': {
    cityName: 'Eagle Mountain',
    citySlug: 'eagle-mountain',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.3141',
    longitude: '-112.0069',
    landmarks: [
      {
        name: 'Eagle Mountain City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Eagle+Mountain+City+Hall+Utah',
      },
      {
        name: 'Eagle Mountain Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Eagle%20Mountain%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Eagle Mountain Central',
        description: 'Major retail and dining district',
        link: '/eagle-mountain',
      },
      {
        name: 'Eagle Mountain East',
        description: 'Residential and commercial mix',
        link: '/eagle-mountain',
      },
      {
        name: 'Eagle Mountain West',
        description: 'Industrial and commercial area',
        link: '/eagle-mountain',
      },
    ],
    permitInfo: {
      cityName: 'Eagle Mountain',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Eagle Mountain for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Eagle Mountain, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Eagle Mountain, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Eagle Mountain\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Eagle Mountain is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Eagle Mountain, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'fairpark': {
    cityName: 'Fairpark',
    citySlug: 'fairpark',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'Fairpark City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Fairpark+City+Hall+Utah',
      },
      {
        name: 'Fairpark Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Fairpark%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Fairpark Central',
        description: 'Major retail and dining district',
        link: '/fairpark',
      },
      {
        name: 'Fairpark East',
        description: 'Residential and commercial mix',
        link: '/fairpark',
      },
      {
        name: 'Fairpark West',
        description: 'Industrial and commercial area',
        link: '/fairpark',
      },
    ],
    permitInfo: {
      cityName: 'Fairpark',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Fairpark for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Fairpark, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Fairpark, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Fairpark\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Fairpark is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Fairpark, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'farmington': {
    cityName: 'Farmington',
    citySlug: 'farmington',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.9805',
    longitude: '-111.8874',
    landmarks: [
      {
        name: 'Farmington City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Farmington+City+Hall+Utah',
      },
      {
        name: 'Farmington Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Farmington%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Farmington Central',
        description: 'Major retail and dining district',
        link: '/farmington',
      },
      {
        name: 'Farmington East',
        description: 'Residential and commercial mix',
        link: '/farmington',
      },
      {
        name: 'Farmington West',
        description: 'Industrial and commercial area',
        link: '/farmington',
      },
    ],
    permitInfo: {
      cityName: 'Farmington',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Farmington for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Farmington, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Farmington, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Farmington\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Farmington is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Farmington, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'glendale': {
    cityName: 'Glendale',
    citySlug: 'glendale',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'Glendale City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Glendale+City+Hall+Utah',
      },
      {
        name: 'Glendale Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Glendale%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Glendale Central',
        description: 'Major retail and dining district',
        link: '/glendale',
      },
      {
        name: 'Glendale East',
        description: 'Residential and commercial mix',
        link: '/glendale',
      },
      {
        name: 'Glendale West',
        description: 'Industrial and commercial area',
        link: '/glendale',
      },
    ],
    permitInfo: {
      cityName: 'Glendale',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Glendale for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Glendale, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Glendale, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Glendale\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Glendale is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Glendale, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'herriman': {
    cityName: 'Herriman',
    citySlug: 'herriman',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.5141',
    longitude: '-112.0329',
    landmarks: [
      {
        name: 'Herriman City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Herriman+City+Hall+Utah',
      },
      {
        name: 'Herriman Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Herriman%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Herriman Central',
        description: 'Major retail and dining district',
        link: '/herriman',
      },
      {
        name: 'Herriman East',
        description: 'Residential and commercial mix',
        link: '/herriman',
      },
      {
        name: 'Herriman West',
        description: 'Industrial and commercial area',
        link: '/herriman',
      },
    ],
    permitInfo: {
      cityName: 'Herriman',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Herriman for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Herriman, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Herriman, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Herriman\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Herriman is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Herriman, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'holladay': {
    cityName: 'Holladay',
    citySlug: 'holladay',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6688',
    longitude: '-111.8247',
    landmarks: [
      {
        name: 'Holladay City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Holladay+City+Hall+Utah',
      },
      {
        name: 'Holladay Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Holladay%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Holladay Central',
        description: 'Major retail and dining district',
        link: '/holladay',
      },
      {
        name: 'Holladay East',
        description: 'Residential and commercial mix',
        link: '/holladay',
      },
      {
        name: 'Holladay West',
        description: 'Industrial and commercial area',
        link: '/holladay',
      },
    ],
    permitInfo: {
      cityName: 'Holladay',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Holladay for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Holladay, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Holladay, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Holladay\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Holladay is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Holladay, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'kaysville': {
    cityName: 'Kaysville',
    citySlug: 'kaysville',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '41.0352',
    longitude: '-111.9386',
    landmarks: [
      {
        name: 'Kaysville City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Kaysville+City+Hall+Utah',
      },
      {
        name: 'Kaysville Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Kaysville%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Kaysville Central',
        description: 'Major retail and dining district',
        link: '/kaysville',
      },
      {
        name: 'Kaysville East',
        description: 'Residential and commercial mix',
        link: '/kaysville',
      },
      {
        name: 'Kaysville West',
        description: 'Industrial and commercial area',
        link: '/kaysville',
      },
    ],
    permitInfo: {
      cityName: 'Kaysville',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Kaysville for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Kaysville, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Kaysville, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Kaysville\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Kaysville is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Kaysville, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'kearns': {
    cityName: 'Kearns',
    citySlug: 'kearns',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6599',
    longitude: '-112.0093',
    landmarks: [
      {
        name: 'Kearns City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Kearns+City+Hall+Utah',
      },
      {
        name: 'Kearns Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Kearns%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Kearns Central',
        description: 'Major retail and dining district',
        link: '/kearns',
      },
      {
        name: 'Kearns East',
        description: 'Residential and commercial mix',
        link: '/kearns',
      },
      {
        name: 'Kearns West',
        description: 'Industrial and commercial area',
        link: '/kearns',
      },
    ],
    permitInfo: {
      cityName: 'Kearns',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Kearns for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Kearns, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Kearns, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Kearns\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Kearns is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Kearns, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'layton': {
    cityName: 'Layton',
    citySlug: 'layton',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '41.0602',
    longitude: '-111.9711',
    landmarks: [
      {
        name: 'Layton City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Layton+City+Hall+Utah',
      },
      {
        name: 'Layton Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Layton%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Layton Central',
        description: 'Major retail and dining district',
        link: '/layton',
      },
      {
        name: 'Layton East',
        description: 'Residential and commercial mix',
        link: '/layton',
      },
      {
        name: 'Layton West',
        description: 'Industrial and commercial area',
        link: '/layton',
      },
    ],
    permitInfo: {
      cityName: 'Layton',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Layton for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Layton, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Layton, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Layton\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Layton is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Layton, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'lehi': {
    cityName: 'Lehi',
    citySlug: 'lehi',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.3916',
    longitude: '-111.8508',
    landmarks: [
      {
        name: 'Lehi City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Lehi+City+Hall+Utah',
      },
      {
        name: 'Lehi Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Lehi%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Lehi Central',
        description: 'Major retail and dining district',
        link: '/lehi',
      },
      {
        name: 'Lehi East',
        description: 'Residential and commercial mix',
        link: '/lehi',
      },
      {
        name: 'Lehi West',
        description: 'Industrial and commercial area',
        link: '/lehi',
      },
    ],
    permitInfo: {
      cityName: 'Lehi',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Lehi for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Lehi, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Lehi, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Lehi\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Lehi is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Lehi, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'magna': {
    cityName: 'Magna',
    citySlug: 'magna',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7091',
    longitude: '-112.1016',
    landmarks: [
      {
        name: 'Magna City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Magna+City+Hall+Utah',
      },
      {
        name: 'Magna Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Magna%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Magna Central',
        description: 'Major retail and dining district',
        link: '/magna',
      },
      {
        name: 'Magna East',
        description: 'Residential and commercial mix',
        link: '/magna',
      },
      {
        name: 'Magna West',
        description: 'Industrial and commercial area',
        link: '/magna',
      },
    ],
    permitInfo: {
      cityName: 'Magna',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Magna for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Magna, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Magna, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Magna\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Magna is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Magna, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'midvale': {
    cityName: 'Midvale',
    citySlug: 'midvale',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6110',
    longitude: '-111.8995',
    landmarks: [
      {
        name: 'Midvale City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Midvale+City+Hall+Utah',
      },
      {
        name: 'Midvale Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Midvale%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Midvale Central',
        description: 'Major retail and dining district',
        link: '/midvale',
      },
      {
        name: 'Midvale East',
        description: 'Residential and commercial mix',
        link: '/midvale',
      },
      {
        name: 'Midvale West',
        description: 'Industrial and commercial area',
        link: '/midvale',
      },
    ],
    permitInfo: {
      cityName: 'Midvale',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Midvale for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Midvale, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Midvale, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Midvale\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Midvale is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Midvale, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'millcreek': {
    cityName: 'Millcreek',
    citySlug: 'millcreek',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6895',
    longitude: '-111.8291',
    landmarks: [
      {
        name: 'Millcreek City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Millcreek+City+Hall+Utah',
      },
      {
        name: 'Millcreek Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Millcreek%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Millcreek Central',
        description: 'Major retail and dining district',
        link: '/millcreek',
      },
      {
        name: 'Millcreek East',
        description: 'Residential and commercial mix',
        link: '/millcreek',
      },
      {
        name: 'Millcreek West',
        description: 'Industrial and commercial area',
        link: '/millcreek',
      },
    ],
    permitInfo: {
      cityName: 'Millcreek',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Millcreek for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Millcreek, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Millcreek, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Millcreek\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Millcreek is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Millcreek, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'north-salt-lake': {
    cityName: 'North Salt Lake',
    citySlug: 'north-salt-lake',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.8486',
    longitude: '-111.9069',
    landmarks: [
      {
        name: 'North Salt Lake City Hall',
        address: 'City Hall Address',
        url: 'https://northsaltlake.org/',
      },
      {
        name: 'North Salt Lake Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/North%20Salt%20Lake%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'North Salt Lake Central',
        description: 'Major retail and dining district',
        link: '/north-salt-lake',
      },
      {
        name: 'North Salt Lake East',
        description: 'Residential and commercial mix',
        link: '/north-salt-lake',
      },
      {
        name: 'North Salt Lake West',
        description: 'Industrial and commercial area',
        link: '/north-salt-lake',
      },
    ],
    permitInfo: {
      cityName: 'North Salt Lake',
      phoneNumber: '801-918-6000',
      requirements: 'Contact North Salt Lake for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout North Salt Lake, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in North Salt Lake, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of North Salt Lake\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'North Salt Lake is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout North Salt Lake, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'ogden': {
    cityName: 'Ogden',
    citySlug: 'ogden',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '41.2230',
    longitude: '-111.9738',
    landmarks: [
      {
        name: 'Ogden City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Ogden+City+Hall+Utah',
      },
      {
        name: 'Ogden Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Ogden%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Ogden Central',
        description: 'Major retail and dining district',
        link: '/ogden',
      },
      {
        name: 'Ogden East',
        description: 'Residential and commercial mix',
        link: '/ogden',
      },
      {
        name: 'Ogden West',
        description: 'Industrial and commercial area',
        link: '/ogden',
      },
    ],
    permitInfo: {
      cityName: 'Ogden',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Ogden for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Ogden, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Ogden, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Ogden\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Ogden is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Ogden, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'orem': {
    cityName: 'Orem',
    citySlug: 'orem',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.2969',
    longitude: '-111.6946',
    landmarks: [
      {
        name: 'Orem City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Orem+City+Hall+Utah',
      },
      {
        name: 'Orem Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Orem%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Orem Central',
        description: 'Major retail and dining district',
        link: '/orem',
      },
      {
        name: 'Orem East',
        description: 'Residential and commercial mix',
        link: '/orem',
      },
      {
        name: 'Orem West',
        description: 'Industrial and commercial area',
        link: '/orem',
      },
    ],
    permitInfo: {
      cityName: 'Orem',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Orem for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Orem, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Orem, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Orem\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Orem is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Orem, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'park-city': {
    cityName: 'Park City',
    citySlug: 'park-city',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6461',
    longitude: '-111.4980',
    landmarks: [
      {
        name: 'Park City City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Park+City+City+Hall+Utah',
      },
      {
        name: 'Park City Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Park%20City%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Park City Central',
        description: 'Major retail and dining district',
        link: '/park-city',
      },
      {
        name: 'Park City East',
        description: 'Residential and commercial mix',
        link: '/park-city',
      },
      {
        name: 'Park City West',
        description: 'Industrial and commercial area',
        link: '/park-city',
      },
    ],
    permitInfo: {
      cityName: 'Park City',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Park City for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Park City, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Park City, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Park City\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Park City is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Park City, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'pleasant-grove': {
    cityName: 'Pleasant Grove',
    citySlug: 'pleasant-grove',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.3641',
    longitude: '-111.7385',
    landmarks: [
      {
        name: 'Pleasant Grove City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Pleasant+Grove+City+Hall+Utah',
      },
      {
        name: 'Pleasant Grove Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Pleasant%20Grove%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Pleasant Grove Central',
        description: 'Major retail and dining district',
        link: '/pleasant-grove',
      },
      {
        name: 'Pleasant Grove East',
        description: 'Residential and commercial mix',
        link: '/pleasant-grove',
      },
      {
        name: 'Pleasant Grove West',
        description: 'Industrial and commercial area',
        link: '/pleasant-grove',
      },
    ],
    permitInfo: {
      cityName: 'Pleasant Grove',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Pleasant Grove for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Pleasant Grove, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Pleasant Grove, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Pleasant Grove\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Pleasant Grove is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Pleasant Grove, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'poplar-grove': {
    cityName: 'Poplar Grove',
    citySlug: 'poplar-grove',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'Poplar Grove City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Poplar+Grove+City+Hall+Utah',
      },
      {
        name: 'Poplar Grove Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Poplar%20Grove%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Poplar Grove Central',
        description: 'Major retail and dining district',
        link: '/poplar-grove',
      },
      {
        name: 'Poplar Grove East',
        description: 'Residential and commercial mix',
        link: '/poplar-grove',
      },
      {
        name: 'Poplar Grove West',
        description: 'Industrial and commercial area',
        link: '/poplar-grove',
      },
    ],
    permitInfo: {
      cityName: 'Poplar Grove',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Poplar Grove for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Poplar Grove, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Poplar Grove, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Poplar Grove\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Poplar Grove is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Poplar Grove, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'provo': {
    cityName: 'Provo',
    citySlug: 'provo',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.2338',
    longitude: '-111.6585',
    landmarks: [
      {
        name: 'Provo City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Provo+City+Hall+Utah',
      },
      {
        name: 'Provo Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Provo%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Provo Central',
        description: 'Major retail and dining district',
        link: '/provo',
      },
      {
        name: 'Provo East',
        description: 'Residential and commercial mix',
        link: '/provo',
      },
      {
        name: 'Provo West',
        description: 'Industrial and commercial area',
        link: '/provo',
      },
    ],
    permitInfo: {
      cityName: 'Provo',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Provo for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Provo, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Provo, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Provo\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Provo is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Provo, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'riverton': {
    cityName: 'Riverton',
    citySlug: 'riverton',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.5219',
    longitude: '-111.9391',
    landmarks: [
      {
        name: 'Riverton City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Riverton+City+Hall+Utah',
      },
      {
        name: 'Riverton Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Riverton%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Riverton Central',
        description: 'Major retail and dining district',
        link: '/riverton',
      },
      {
        name: 'Riverton East',
        description: 'Residential and commercial mix',
        link: '/riverton',
      },
      {
        name: 'Riverton West',
        description: 'Industrial and commercial area',
        link: '/riverton',
      },
    ],
    permitInfo: {
      cityName: 'Riverton',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Riverton for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Riverton, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Riverton, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Riverton\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Riverton is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Riverton, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'roy': {
    cityName: 'Roy',
    citySlug: 'roy',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '41.1616',
    longitude: '-112.0263',
    landmarks: [
      {
        name: 'Roy City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Roy+City+Hall+Utah',
      },
      {
        name: 'Roy Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Roy%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Roy Central',
        description: 'Major retail and dining district',
        link: '/roy',
      },
      {
        name: 'Roy East',
        description: 'Residential and commercial mix',
        link: '/roy',
      },
      {
        name: 'Roy West',
        description: 'Industrial and commercial area',
        link: '/roy',
      },
    ],
    permitInfo: {
      cityName: 'Roy',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Roy for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Roy, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Roy, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Roy\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Roy is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Roy, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'saratoga-springs': {
    cityName: 'Saratoga Springs',
    citySlug: 'saratoga-springs',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.3491',
    longitude: '-111.9047',
    landmarks: [
      {
        name: 'Saratoga Springs City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Saratoga+Springs+City+Hall+Utah',
      },
      {
        name: 'Saratoga Springs Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Saratoga%20Springs%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Saratoga Springs Central',
        description: 'Major retail and dining district',
        link: '/saratoga-springs',
      },
      {
        name: 'Saratoga Springs East',
        description: 'Residential and commercial mix',
        link: '/saratoga-springs',
      },
      {
        name: 'Saratoga Springs West',
        description: 'Industrial and commercial area',
        link: '/saratoga-springs',
      },
    ],
    permitInfo: {
      cityName: 'Saratoga Springs',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Saratoga Springs for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Saratoga Springs, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Saratoga Springs, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Saratoga Springs\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Saratoga Springs is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Saratoga Springs, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'south-jordan': {
    cityName: 'South Jordan',
    citySlug: 'south-jordan',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.5622',
    longitude: '-111.9297',
    landmarks: [
      {
        name: 'South Jordan City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/South+Jordan+City+Hall+Utah',
      },
      {
        name: 'South Jordan Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/South%20Jordan%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'South Jordan Central',
        description: 'Major retail and dining district',
        link: '/south-jordan',
      },
      {
        name: 'South Jordan East',
        description: 'Residential and commercial mix',
        link: '/south-jordan',
      },
      {
        name: 'South Jordan West',
        description: 'Industrial and commercial area',
        link: '/south-jordan',
      },
    ],
    permitInfo: {
      cityName: 'South Jordan',
      phoneNumber: '801-918-6000',
      requirements: 'Contact South Jordan for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout South Jordan, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in South Jordan, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of South Jordan\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'South Jordan is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout South Jordan, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'south-salt-lake': {
    cityName: 'South Salt Lake',
    citySlug: 'south-salt-lake',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'South Salt Lake City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/South+Salt+Lake+City+Hall+Utah',
      },
      {
        name: 'South Salt Lake Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/South%20Salt%20Lake%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'South Salt Lake Central',
        description: 'Major retail and dining district',
        link: '/south-salt-lake',
      },
      {
        name: 'South Salt Lake East',
        description: 'Residential and commercial mix',
        link: '/south-salt-lake',
      },
      {
        name: 'South Salt Lake West',
        description: 'Industrial and commercial area',
        link: '/south-salt-lake',
      },
    ],
    permitInfo: {
      cityName: 'South Salt Lake',
      phoneNumber: '801-918-6000',
      requirements: 'Contact South Salt Lake for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout South Salt Lake, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in South Salt Lake, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of South Salt Lake\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'South Salt Lake is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout South Salt Lake, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'sugar-house': {
    cityName: 'Sugar House',
    citySlug: 'sugar-house',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'Sugar House Park',
        address: '1330 E 2100 S, Salt Lake City, UT 84106',
        url: 'https://www.slc.gov/parks/parks-division/sugar-house-park/',
      },
      {
        name: 'Sugar House Library',
        address: '2131 S 1100 E, Salt Lake City, UT 84106',
        url: 'https://slcolibrary.org/location/sugar-house/',
      },
      {
        name: 'Sugar House Business District',
        address: '1100 E 2100 S, Salt Lake City, UT 84106',
        url: 'https://www.sugarhousechamber.com/',
      },
      {
        name: 'Sugar House Coffee',
        address: '2011 S 1100 E, Salt Lake City, UT 84106',
        url: 'https://sugarhousecoffee.com/',
      },
      {
        name: 'Sugar House Monument',
        address: '2100 S 1100 E, Salt Lake City, UT 84106',
        url: 'https://www.google.com/maps/search/Sugar+House+Monument',
      },
    ],
    businessDistricts: [
      {
        name: 'Sugar House Central',
        description: 'Historic shopping and dining district with local businesses',
        link: '/sugar-house',
      },
      {
        name: 'Sugar House East',
        description: 'Residential neighborhoods and community services',
        link: '/sugar-house',
      },
      {
        name: 'Sugar House West',
        description: 'Mixed residential and commercial area',
        link: '/sugar-house',
      },
      {
        name: 'Sugar House Business District',
        description: 'Local shops, restaurants, and professional services',
        link: '/sugar-house',
      },
    ],
    permitInfo: {
      cityName: 'Salt Lake City',
      phoneNumber: '801-535-6000',
      requirements: 'Contact Salt Lake City for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Sugar House, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Sugar House, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Sugar House\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Sugar House is a vibrant neighborhood in Salt Lake City known for its historic charm, local businesses, and community spirit. Whether you\'re working on a project near Sugar House Park or in the business district, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Sugar House and surrounding areas, including residential neighborhoods, the business district, and areas near popular attractions. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'syracuse': {
    cityName: 'Syracuse',
    citySlug: 'syracuse',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '41.0894',
    longitude: '-112.0647',
    landmarks: [
      {
        name: 'Syracuse City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Syracuse+City+Hall+Utah',
      },
      {
        name: 'Syracuse Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Syracuse%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Syracuse Central',
        description: 'Major retail and dining district',
        link: '/syracuse',
      },
      {
        name: 'Syracuse East',
        description: 'Residential and commercial mix',
        link: '/syracuse',
      },
      {
        name: 'Syracuse West',
        description: 'Industrial and commercial area',
        link: '/syracuse',
      },
    ],
    permitInfo: {
      cityName: 'Syracuse',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Syracuse for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Syracuse, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Syracuse, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Syracuse\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Syracuse is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Syracuse, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'taylorsville': {
    cityName: 'Taylorsville',
    citySlug: 'taylorsville',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6677',
    longitude: '-111.9388',
    landmarks: [
      {
        name: 'Taylorsville City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Taylorsville+City+Hall+Utah',
      },
      {
        name: 'Taylorsville Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Taylorsville%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Taylorsville Central',
        description: 'Major retail and dining district',
        link: '/taylorsville',
      },
      {
        name: 'Taylorsville East',
        description: 'Residential and commercial mix',
        link: '/taylorsville',
      },
      {
        name: 'Taylorsville West',
        description: 'Industrial and commercial area',
        link: '/taylorsville',
      },
    ],
    permitInfo: {
      cityName: 'Taylorsville',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Taylorsville for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Taylorsville, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Taylorsville, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Taylorsville\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Taylorsville is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Taylorsville, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'tooele': {
    cityName: 'Tooele',
    citySlug: 'tooele',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.5308',
    longitude: '-112.2983',
    landmarks: [
      {
        name: 'Tooele City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Tooele+City+Hall+Utah',
      },
      {
        name: 'Tooele Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Tooele%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Tooele Central',
        description: 'Major retail and dining district',
        link: '/tooele',
      },
      {
        name: 'Tooele East',
        description: 'Residential and commercial mix',
        link: '/tooele',
      },
      {
        name: 'Tooele West',
        description: 'Industrial and commercial area',
        link: '/tooele',
      },
    ],
    permitInfo: {
      cityName: 'Tooele',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Tooele for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Tooele, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Tooele, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Tooele\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Tooele is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Tooele, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'tooel': {
    cityName: 'Tooele',
    citySlug: 'tooel',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.5308',
    longitude: '-112.2983',
    landmarks: [
      {
        name: 'Tooele City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Tooele+City+Hall+Utah',
      },
      {
        name: 'Tooele Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Tooele%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Tooele Central',
        description: 'Major retail and dining district',
        link: '/tooel',
      },
      {
        name: 'Tooele East',
        description: 'Residential and commercial mix',
        link: '/tooel',
      },
      {
        name: 'Tooele West',
        description: 'Industrial and commercial area',
        link: '/tooel',
      },
    ],
    permitInfo: {
      cityName: 'Tooele',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Tooele for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Tooele, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Tooele, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Tooele\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Tooele is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Tooele, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'west-valley-city': {
    cityName: 'West Valley City',
    citySlug: 'west-valley-city',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6916',
    longitude: '-112.0011',
    landmarks: [
      {
        name: 'West Valley City City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/West+Valley+City+Hall+Utah',
      },
      {
        name: 'West Valley City Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/West%20Valley%20City%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'West Valley City Central',
        description: 'Major retail and dining district',
        link: '/west-valley-city',
      },
      {
        name: 'West Valley City East',
        description: 'Residential and commercial mix',
        link: '/west-valley-city',
      },
      {
        name: 'West Valley City West',
        description: 'Industrial and commercial area',
        link: '/west-valley-city',
      },
    ],
    permitInfo: {
      cityName: 'West Valley City',
      phoneNumber: '801-918-6000',
      requirements: 'Contact West Valley City for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout West Valley City, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in West Valley City, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of West Valley City\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'West Valley City is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout West Valley City, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'woods-cross': {
    cityName: 'Woods Cross',
    citySlug: 'woods-cross',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.8716',
    longitude: '-111.8927',
    landmarks: [
      {
        name: 'Woods Cross City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Woods+Cross+City+Hall+Utah',
      },
      {
        name: 'Woods Cross Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Woods%20Cross%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Woods Cross Central',
        description: 'Major retail and dining district',
        link: '/woods-cross',
      },
      {
        name: 'Woods Cross East',
        description: 'Residential and commercial mix',
        link: '/woods-cross',
      },
      {
        name: 'Woods Cross West',
        description: 'Industrial and commercial area',
        link: '/woods-cross',
      },
    ],
    permitInfo: {
      cityName: 'Woods Cross',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Woods Cross for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Woods Cross, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Woods Cross, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Woods Cross\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Woods Cross is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Woods Cross, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'spanish-fork': {
    cityName: 'Spanish Fork',
    citySlug: 'spanish-fork',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.1149',
    longitude: '-111.6549',
    landmarks: [
      {
        name: 'Spanish Fork City Hall',
        address: '40 S Main St',
        url: 'https://www.spanishfork.org/',
      },
      {
        name: 'Spanish Fork Library',
        address: '49 S Main St',
        url: 'https://www.spanishfork.org/departments/library',
      },
      {
        name: 'Spanish Fork Sports Park',
        address: '295 Volunteer Dr',
        url: 'https://www.spanishfork.org/departments/parks-recreation',
      },
      {
        name: 'Spanish Fork River Trail',
        address: 'Along Spanish Fork River',
        url: 'https://www.google.com/maps/search/Spanish%20Fork%20River%20Trail',
      },
    ],
    businessDistricts: [
      {
        name: 'Spanish Fork Central',
        description: 'Major retail and dining district',
        link: '/spanish-fork',
      },
      {
        name: 'Spanish Fork East',
        description: 'Residential and commercial mix',
        link: '/spanish-fork',
      },
      {
        name: 'Spanish Fork West',
        description: 'Industrial and commercial area',
        link: '/spanish-fork',
      },
    ],
    permitInfo: {
      cityName: 'Spanish Fork',
      phoneNumber: '801-804-4500',
      requirements: 'Contact Spanish Fork for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Spanish Fork, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Spanish Fork, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Spanish Fork\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Spanish Fork is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Spanish Fork, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'springville': {
    cityName: 'Springville',
    citySlug: 'springville',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.1652',
    longitude: '-111.6107',
    landmarks: [
      {
        name: 'Springville City Hall',
        address: '110 S Main St',
        url: 'https://www.springville.org/',
      },
      {
        name: 'Springville Museum of Art',
        address: '126 E 400 S',
        url: 'https://www.google.com/maps/search/Springville+Museum+of+Art+Utah',
      },
      {
        name: 'Springville Library',
        address: '45 S Main St',
        url: 'https://www.springville.org/departments/library',
      },
      {
        name: 'Springville High School',
        address: '1205 E 900 S',
        url: 'https://www.google.com/maps/search/Springville+High+School+Utah',
      },
    ],
    businessDistricts: [
      {
        name: 'Springville Central',
        description: 'Major retail and dining district',
        link: '/springville',
      },
      {
        name: 'Springville East',
        description: 'Residential and commercial mix',
        link: '/springville',
      },
      {
        name: 'Springville West',
        description: 'Industrial and commercial area',
        link: '/springville',
      },
    ],
    permitInfo: {
      cityName: 'Springville',
      phoneNumber: '801-489-2700',
      requirements: 'Contact Springville for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Springville, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Springville, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Springville\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Springville is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Springville, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'lindon': {
    cityName: 'Lindon',
    citySlug: 'lindon',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.3433',
    longitude: '-111.7208',
    landmarks: [
      {
        name: 'Lindon City Hall',
        address: '100 N State St',
        url: 'https://www.lindoncity.org/',
      },
      {
        name: 'Lindon City Park',
        address: '200 N State St',
        url: 'https://www.lindoncity.org/departments/parks-recreation',
      },
      {
        name: 'Lindon Library',
        address: '25 W Main St',
        url: 'https://www.lindoncity.org/departments/library',
      },
      {
        name: 'Lindon Golf Course',
        address: '1080 N 1200 E',
        url: 'https://www.lindongolf.com/',
      },
    ],
    businessDistricts: [
      {
        name: 'Lindon Central',
        description: 'Major retail and dining district',
        link: '/lindon',
      },
      {
        name: 'Lindon East',
        description: 'Residential and commercial mix',
        link: '/lindon',
      },
      {
        name: 'Lindon West',
        description: 'Industrial and commercial area',
        link: '/lindon',
      },
    ],
    permitInfo: {
      cityName: 'Lindon',
      phoneNumber: '801-785-5043',
      requirements: 'Contact Lindon for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Lindon, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Lindon, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Lindon\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Lindon is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Lindon, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'bluffdale': {
    cityName: 'Bluffdale',
    citySlug: 'bluffdale',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.4897',
    longitude: '-111.9388',
    landmarks: [
      {
        name: 'Bluffdale City Hall',
        address: 'City Hall Address',
        url: 'https://www.google.com/maps/search/Bluffdale+City+Hall+Utah',
      },
      {
        name: 'Bluffdale Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Bluffdale%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Bluffdale Central',
        description: 'Major retail and dining district',
        link: '/bluffdale',
      },
      {
        name: 'Bluffdale East',
        description: 'Residential and commercial mix',
        link: '/bluffdale',
      },
      {
        name: 'Bluffdale West',
        description: 'Industrial and commercial area',
        link: '/bluffdale',
      },
    ],
    permitInfo: {
      cityName: 'Bluffdale',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Bluffdale for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Bluffdale, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Bluffdale, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Bluffdale\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Bluffdale is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Bluffdale, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  // Add other missing cities that were skipped
  'cheapestsalt-lake-city': {
    cityName: 'Salt Lake City',
    citySlug: 'cheapestsalt-lake-city',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'Temple Square',
        address: '50 W North Temple, Salt Lake City, UT 84150',
        url: 'https://www.templesquare.com/',
      },
      {
        name: 'Utah State Capitol',
        address: '350 State St, Salt Lake City, UT 84103',
        url: 'https://utahstatecapitol.utah.gov/',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Salt Lake City',
        description: 'Central business district with offices, restaurants, and entertainment',
        link: '/cheapestsalt-lake-city',
      },
      {
        name: 'Sugar House',
        description: 'Historic shopping district with local businesses and restaurants',
        link: '/cheapestsalt-lake-city',
      },
    ],
    permitInfo: {
      cityName: 'Salt Lake City',
      phoneNumber: '801-535-6000',
      requirements: 'Contact Salt Lake City for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Salt Lake City, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Salt Lake City, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Salt Lake City\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Salt Lake City is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Salt Lake City, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'commercial-dumpster-rental-business-solutions': {
    cityName: 'Commercial Business Solutions',
    citySlug: 'commercial-dumpster-rental-business-solutions',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'Business District',
        address: 'Commercial Area',
        url: 'https://www.google.com/maps/search/commercial+business+area',
      },
    ],
    businessDistricts: [
      {
        name: 'Commercial Central',
        description: 'Major business and industrial district',
        link: '/commercial-dumpster-rental-business-solutions',
      },
    ],
    permitInfo: {
      cityName: 'Commercial Business Solutions',
      phoneNumber: '801-918-6000',
      requirements: 'Contact local authorities for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services for commercial and business projects throughout Utah. Whether you\'re tackling a construction project, renovation, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Commercial renovations and remodeling',
        'Office cleanouts',
        'Retail space organization',
        'Industrial waste removal',
        'Business cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services for your commercial project, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of business needs makes us the preferred choice for companies and contractors alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Office remodel', 'Retail renovation', 'Small construction', 'Business cleanout'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full business renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Our commercial business solutions are available throughout Utah. Whether you\'re working on a project in a business district or industrial area, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services for commercial and business projects throughout Utah, including all major business districts and industrial areas. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'complete': {
    cityName: 'Complete Dumpster Rental Guide',
    citySlug: 'complete',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'Utah State',
        address: 'Statewide Service',
        url: 'https://www.utah.gov/',
      },
    ],
    businessDistricts: [
      {
        name: 'Statewide Coverage',
        description: 'Complete coverage across all Utah cities and counties',
        link: '/complete',
      },
    ],
    permitInfo: {
      cityName: 'Complete Dumpster Rental Guide',
      phoneNumber: '801-918-6000',
      requirements: 'Contact local authorities for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Utah. This complete guide covers everything you need to know about dumpster rental, from choosing the right size to understanding local regulations.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
        'Moving and relocation',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
        'Property management',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services anywhere in Utah, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and statewide coverage makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'This complete guide covers dumpster rental services across all of Utah, from the major cities to rural areas. Whether you\'re working on a project in Salt Lake City, Provo, Ogden, or anywhere else in the state, we\'re here to help.',
      serviceAreas: 'We provide dumpster rental services throughout Utah, including all major cities, suburbs, and rural areas. Our statewide coverage and same-day delivery ensure you get your dumpster when and where you need it, no matter where your project is located.',
    },
  },
  'utahlocations': {
    cityName: 'Utah Dumpster Rental Locations',
    citySlug: 'utahlocations',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'Utah State',
        address: 'Statewide Service',
        url: 'https://www.utah.gov/',
      },
    ],
    businessDistricts: [
      {
        name: 'Statewide Coverage',
        description: 'Complete coverage across all Utah cities and counties',
        link: '/utahlocations',
      },
    ],
    permitInfo: {
      cityName: 'Utah Dumpster Rental Locations',
      phoneNumber: '801-918-6000',
      requirements: 'Contact local authorities for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services at multiple locations throughout Utah. Find the nearest location to your project and get fast, reliable service with competitive pricing.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
        'Moving and relocation',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
        'Property management',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services at any of our Utah locations, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and multiple service locations makes us the preferred choice for residents and businesses throughout the state.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Our Utah dumpster rental locations are strategically placed to serve communities throughout the state. Whether you\'re in the Salt Lake Valley, Utah County, Davis County, or anywhere else in Utah, we have a location near you.',
      serviceAreas: 'We provide dumpster rental services at multiple locations throughout Utah, ensuring convenient access for all our customers. Our strategic placement and same-day delivery ensure you get your dumpster when and where you need it, no matter which location serves your area.',
    },
  },
  'white-city': {
    cityName: 'White City',
    citySlug: 'white-city',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.5656',
    longitude: '-111.8639',
    landmarks: [
      {
        name: 'White City Community Center',
        address: 'Local Community Center',
        url: 'https://www.google.com/maps/search/White+City+Community+Center+Utah',
      },
      {
        name: 'White City Park',
        address: 'Local Park Area',
        url: 'https://www.google.com/maps/search/White+City+Park+Utah',
      },
    ],
    businessDistricts: [
      {
        name: 'White City Central',
        description: 'Main residential and commercial area',
        link: '/white-city',
      },
      {
        name: 'White City East',
        description: 'Residential neighborhoods',
        link: '/white-city',
      },
      {
        name: 'White City West',
        description: 'Commercial and residential mix',
        link: '/white-city',
      },
    ],
    permitInfo: {
      cityName: 'White City',
      phoneNumber: '801-918-6000',
      requirements: 'Contact White City for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout White City, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in White City, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of White City\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: [
            'Kitchen remodel',
            'Bathroom renovation',
            'Garage cleanout',
            'Small construction',
          ],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: [
            'Full home renovation',
            'Large construction',
            'Commercial projects',
            'Major cleanouts',
          ],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: [
            'Large construction',
            'Commercial demolition',
            'Major renovations',
            'Industrial projects',
          ],
        },
      ],
      localInfo: 'White City is a growing community in Salt Lake County with a mix of residential and commercial areas. Whether you\'re working on a project in the central area or the surrounding neighborhoods, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout White City, including all residential neighborhoods and commercial areas. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'emigration-canyon': {
    cityName: 'Emigration Canyon',
    citySlug: 'emigration-canyon',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7500',
    longitude: '-111.8000',
    landmarks: [
      {
        name: 'Emigration Canyon Park',
        address: 'Canyon Park Area',
        url: 'https://www.google.com/maps/search/Emigration+Canyon+Park+Utah',
      },
      {
        name: 'This Is The Place Heritage Park',
        address: '2601 E Sunnyside Ave',
        url: 'https://www.google.com/maps/search/This+Is+The+Place+Heritage+Park+Utah',
      },
    ],
    businessDistricts: [
      {
        name: 'Emigration Canyon Central',
        description: 'Main residential area',
        link: '/emigration-canyon',
      },
      {
        name: 'Emigration Canyon East',
        description: 'Mountain residential area',
        link: '/emigration-canyon',
      },
      {
        name: 'Emigration Canyon West',
        description: 'Lower canyon residential',
        link: '/emigration-canyon',
      },
    ],
    permitInfo: {
      cityName: 'Emigration Canyon',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Emigration Canyon for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Emigration Canyon, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Emigration Canyon, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Emigration Canyon\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: [
            'Kitchen remodel',
            'Bathroom renovation',
            'Garage cleanout',
            'Small construction',
          ],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: [
            'Full home renovation',
            'Large construction',
            'Commercial projects',
            'Major cleanouts',
          ],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: [
            'Large construction',
            'Commercial demolition',
            'Major renovations',
            'Industrial projects',
          ],
        },
      ],
      localInfo: 'Emigration Canyon is a beautiful mountain community with historic significance and stunning natural surroundings. Whether you\'re working on a project in the canyon or near the heritage park, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Emigration Canyon, including all residential areas and mountain properties. Our same-day delivery ensures you get your dumpster when and where you need it, even in the canyon areas.',
    },
  },
  'copperton': {
    cityName: 'Copperton',
    citySlug: 'copperton',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.5667',
    longitude: '-112.1000',
    landmarks: [
      {
        name: 'Copperton Community Center',
        address: 'Local Community Center',
        url: 'https://www.google.com/maps/search/Copperton+Community+Center+Utah',
      },
      {
        name: 'Copperton Park',
        address: 'Local Park Area',
        url: 'https://www.google.com/maps/search/Copperton+Park+Utah',
      },
    ],
    businessDistricts: [
      {
        name: 'Copperton Central',
        description: 'Main residential area',
        link: '/copperton',
      },
      {
        name: 'Copperton East',
        description: 'Residential neighborhoods',
        link: '/copperton',
      },
      {
        name: 'Copperton West',
        description: 'Commercial and residential mix',
        link: '/copperton',
      },
    ],
    permitInfo: {
      cityName: 'Copperton',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Copperton for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Copperton, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Copperton, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Copperton\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: [
            'Kitchen remodel',
            'Bathroom renovation',
            'Garage cleanout',
            'Small construction',
          ],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: [
            'Full home renovation',
            'Large construction',
            'Commercial projects',
            'Major cleanouts',
          ],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: [
            'Large construction',
            'Commercial demolition',
            'Major renovations',
            'Industrial projects',
          ],
        },
      ],
      localInfo: 'Copperton is a small, close-knit community in Salt Lake County with a rich mining history. Whether you\'re working on a project in the central area or the surrounding neighborhoods, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Copperton, including all residential neighborhoods and commercial areas. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'brighton': {
    cityName: 'Brighton',
    citySlug: 'brighton',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6000',
    longitude: '-111.5833',
    landmarks: [
      {
        name: 'Brighton Ski Resort',
        address: '8302 S Brighton Loop Rd',
        url: 'https://www.google.com/maps/search/Brighton+Ski+Resort+Utah',
      },
      {
        name: 'Brighton Lakes',
        address: 'Mountain Lakes Area',
        url: 'https://www.google.com/maps/search/Brighton+Lakes+Utah',
      },
    ],
    businessDistricts: [
      {
        name: 'Brighton Central',
        description: 'Main resort and residential area',
        link: '/brighton',
      },
      {
        name: 'Brighton East',
        description: 'Mountain residential area',
        link: '/brighton',
      },
      {
        name: 'Brighton West',
        description: 'Lower mountain residential',
        link: '/brighton',
      },
    ],
    permitInfo: {
      cityName: 'Brighton',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Brighton for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Brighton, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Brighton, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Brighton\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: [
            'Kitchen remodel',
            'Bathroom renovation',
            'Garage cleanout',
            'Small construction',
          ],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: [
            'Full home renovation',
            'Large construction',
            'Commercial projects',
            'Major cleanouts',
          ],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: [
            'Large construction',
            'Commercial demolition',
            'Major renovations',
            'Industrial projects',
          ],
        },
      ],
      localInfo: 'Brighton is a beautiful mountain community known for its world-class ski resort and stunning natural surroundings. Whether you\'re working on a project near the resort or in the mountain residential areas, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Brighton, including all residential areas and mountain properties. Our same-day delivery ensures you get your dumpster when and where you need it, even in the mountain areas.',
    },
  },
  'alta': {
    cityName: 'Alta',
    citySlug: 'alta',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.5833',
    longitude: '-111.6333',
    landmarks: [
      {
        name: 'Alta Ski Area',
        address: '10300 E Little Cottonwood Canyon Rd',
        url: 'https://www.google.com/maps/search/Alta+Ski+Area+Utah',
      },
      {
        name: 'Alta Lakes',
        address: 'Mountain Lakes Area',
        url: 'https://www.google.com/maps/search/Alta+Lakes+Utah',
      },
    ],
    businessDistricts: [
      {
        name: 'Alta Central',
        description: 'Main resort and residential area',
        link: '/alta',
      },
      {
        name: 'Alta East',
        description: 'Mountain residential area',
        link: '/alta',
      },
      {
        name: 'Alta West',
        description: 'Lower mountain residential',
        link: '/alta',
      },
    ],
    permitInfo: {
      cityName: 'Alta',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Alta for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Alta, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Alta, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Alta\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: [
            'Kitchen remodel',
            'Bathroom renovation',
            'Garage cleanout',
            'Small construction',
          ],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: [
            'Full home renovation',
            'Large construction',
            'Commercial projects',
            'Major cleanouts',
          ],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: [
            'Large construction',
            'Commercial demolition',
            'Major renovations',
            'Industrial projects',
          ],
        },
      ],
      localInfo: 'Alta is a beautiful mountain community known for its world-class ski area and stunning natural surroundings. Whether you\'re working on a project near the ski area or in the mountain residential areas, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Alta, including all residential areas and mountain properties. Our same-day delivery ensures you get your dumpster when and where you need it, even in the mountain areas.',
    },
  },
  'west-bountiful': {
    cityName: 'West Bountiful',
    citySlug: 'west-bountiful',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.8894',
    longitude: '-111.9047',
    landmarks: [
      {
        name: 'West Bountiful City Hall',
        address: '550 N 800 W',
        url: 'https://www.google.com/maps/search/West+Bountiful+City+Hall+Utah',
      },
      {
        name: 'West Bountiful Park',
        address: 'Local Park Area',
        url: 'https://www.google.com/maps/search/West+Bountiful+Park+Utah',
      },
    ],
    businessDistricts: [
      {
        name: 'West Bountiful Central',
        description: 'Main residential and commercial area',
        link: '/west-bountiful',
      },
      {
        name: 'West Bountiful East',
        description: 'Residential neighborhoods',
        link: '/west-bountiful',
      },
      {
        name: 'West Bountiful West',
        description: 'Commercial and residential mix',
        link: '/west-bountiful',
      },
    ],
    permitInfo: {
      cityName: 'West Bountiful',
      phoneNumber: '801-918-6000',
      requirements: 'Contact West Bountiful for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout West Bountiful, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in West Bountiful, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of West Bountiful\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: [
            'Kitchen remodel',
            'Bathroom renovation',
            'Garage cleanout',
            'Small construction',
          ],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: [
            'Full home renovation',
            'Large construction',
            'Commercial projects',
            'Major cleanouts',
          ],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: [
            'Large construction',
            'Commercial demolition',
            'Major renovations',
            'Industrial projects',
          ],
        },
      ],
      localInfo: 'West Bountiful is a growing community in Davis County with a mix of residential and commercial areas. Whether you\'re working on a project in the central area or the surrounding neighborhoods, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout West Bountiful, including all residential neighborhoods and commercial areas. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'granger': {
    cityName: 'Granger',
    citySlug: 'granger',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6916',
    longitude: '-111.9931',
    landmarks: [
      {
        name: 'Granger Community Center',
        address: 'Local Community Center',
        url: 'https://www.google.com/maps/search/Granger+Community+Center+Utah',
      },
      {
        name: 'Granger Park',
        address: 'Local Park Area',
        url: 'https://www.google.com/maps/search/Granger+Park+Utah',
      },
    ],
    businessDistricts: [
      {
        name: 'Granger Central',
        description: 'Main residential and commercial area',
        link: '/granger',
      },
      {
        name: 'Granger East',
        description: 'Residential neighborhoods',
        link: '/granger',
      },
      {
        name: 'Granger West',
        description: 'Commercial and residential mix',
        link: '/granger',
      },
    ],
    permitInfo: {
      cityName: 'Granger',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Granger for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Granger, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Granger, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Granger\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: [
            'Kitchen remodel',
            'Bathroom renovation',
            'Garage cleanout',
            'Small construction',
          ],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: [
            'Full home renovation',
            'Large construction',
            'Commercial projects',
            'Major cleanouts',
          ],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: [
            'Large construction',
            'Commercial demolition',
            'Major renovations',
            'Industrial projects',
          ],
        },
      ],
      localInfo: 'Granger is a residential community in Salt Lake County with a mix of residential neighborhoods and commercial areas. Whether you\'re working on a project in the central area or the surrounding neighborhoods, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Granger, including all residential neighborhoods and commercial areas. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'alpine': {
    cityName: 'Alpine',
    citySlug: 'alpine',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.4533',
    longitude: '-111.7770',
    landmarks: [
      {
        name: 'Alpine City Hall',
        address: '20 N Main St',
        url: 'https://maps.google.com/?q=Alpine+City+Hall',
      },
      {
        name: 'Lambert Park Trailhead',
        address: '1000 N Lambert Park Rd',
        url: 'https://maps.google.com/?q=Lambert+Park+Trailhead',
      },
      {
        name: 'Alpine Art Center',
        address: '450 S Alpine Hwy',
        url: 'https://maps.google.com/?q=Alpine+Art+Center',
      },
    ],
    businessDistricts: [
      {
        name: 'Main Street Alpine',
        description: 'Local boutiques, eateries, and professional services serving Alpine residents.',
        link: 'https://www.alpinecity.org/',
      },
      {
        name: 'Alpine Highway Corridor',
        description: 'Construction suppliers and contractors supporting rapid custom-home development.',
        link: 'https://www.alpinecity.org/business-license/',
      },
    ],
    permitInfo: {
      cityName: 'Alpine City Offices',
      phoneNumber: '801-756-6347',
      requirements: 'Right-of-way permits are required if dumpsters rest on Alpine Highway or city-maintained lanes. Submit the request at least 48 hours in advance with a placement map.',
    },
    contentSections: {
      overview: 'Icon Dumpsters keeps Alpine job sites tidy from the foothills of Box Elder Peak to the estates lining Deerfield Drive. Our local dispatch monitors steep driveways, HOA guidelines, and canyon weather so your cleanups stay on schedule.',
      residentialServices: [
        'Basement finishes and remodels near Moyle Park',
        'Roof tear-off debris in Alpine Cove',
        'Seasonal yard and orchard cleanups',
        'Estate preparation before market listings',
        'Moving projects along Main Street and the Alpine Highway',
      ],
      commercialServices: [
        'School upgrades for Alpine School District campuses',
        'Boutique build-outs along Main Street',
        'Church and community event cleanups',
        'Infrastructure improvements on SR-74',
        'Custom home construction staging and debris removal',
      ],
      whyChooseUs: 'Our Utah-based coordinators know Alpine\'s narrow lanes, HOA approvals, and canyon gusts. We stage placement boards, route trucks around school traffic, and keep communication open with builders and homeowners.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Compact footprint for alpine driveways with limited turnaround space.',
          useCases: ['Small remodels', 'Spring yard cleanups', 'Junk removal events'],
        },
        {
          size: '20 Yard',
          description: 'Balanced capacity for extensive interior updates and re-roofing projects.',
          useCases: ['Medium remodels', 'Siding replacements', 'Community cleanups'],
        },
        {
          size: '30 Yard',
          description: 'Handles large estate renovations and construction along the Alpine bench.',
          useCases: ['New home builds', 'Demolition debris', 'Commercial renovations'],
        },
      ],
      localInfo: 'Alpine residents enjoy quick access to American Fork Canyon, mountain biking in Lambert Park, and family events at Creekside Park. Projects often must coordinate around trail access and scenic road closures.',
      serviceAreas: 'We service Alpine neighborhoods including Box Elder, Three Falls, Alpine Cove, and areas along the Alpine Highway with same-day delivery when schedules allow.',
    },
  },
  'cedar-city': {
    cityName: 'Cedar City',
    citySlug: 'cedar-city',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '37.6775',
    longitude: '-113.0619',
    landmarks: [
      {
        name: 'Cedar City Hall',
        address: '10 N Main St',
        url: 'https://maps.google.com/?q=Cedar+City+Hall',
      },
      {
        name: 'Southern Utah University',
        address: '351 W University Blvd',
        url: 'https://maps.google.com/?q=Southern+Utah+University',
      },
      {
        name: 'Utah Shakespeare Festival',
        address: '195 W Center St',
        url: 'https://maps.google.com/?q=Utah+Shakespeare+Festival',
      },
    ],
    businessDistricts: [
      {
        name: 'Historic Downtown',
        description: 'The heart of Cedar City with theaters, restaurants, and boutiques that anchor tourism.',
        link: 'https://www.cedarcity.org/',
      },
      {
        name: 'South Interchange Commercial Hub',
        description: 'Logistics, manufacturing, and retail near I-15 supporting year-round development.',
        link: 'https://www.cedarcity.org/113/Economic-Development',
      },
    ],
    permitInfo: {
      cityName: 'Cedar City Engineering',
      phoneNumber: '435-586-2950',
      requirements: 'Street placement permits and traffic control plans are required for dumpsters within city rights-of-way. Submit drawings and insurance certificates with the application.',
    },
    contentSections: {
      overview: 'Construction crews and festival vendors in Cedar City rely on Icon Dumpsters for flexible debris solutions. We coordinate around SUU events, downtown parades, and canyon weather to keep projects tidy from Enoch to the south interchange.',
      residentialServices: [
        'Historic downtown renovation debris',
        'Roof replacements in Cedar Meadows',
        'Basement finishing for student housing',
        'Yard cleanup before Iron County winter storms',
        'Estate cleanouts near Fiddlers Canyon',
      ],
      commercialServices: [
        'Festival and event staging cleanup',
        'Hotel and hospitality remodels',
        'Manufacturing facility retrofits near the airport',
        'Retail build-outs off Main Street',
        'Infrastructure upgrades along Old Hwy 91',
      ],
      whyChooseUs: 'Our Iron County drivers understand snow routes, parade schedules, and downtown access hours. We manage permits with city engineering, supply barricades, and work nights or weekends when events require quick turnarounds.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Ideal for tight downtown alleys and quick hospitality refreshes.',
          useCases: ['Small remodels', 'Event waste', 'Seasonal cleanouts'],
        },
        {
          size: '20 Yard',
          description: 'Most popular size for festival setup, roofing, and multi-room updates.',
          useCases: ['Roofing debris', 'Retail renovations', 'Multi-unit cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'High-capacity option for large commercial work or subdivision infrastructure jobs.',
          useCases: ['New construction', 'Major demolitions', 'Manufacturing retrofits'],
        },
      ],
      localInfo: 'Cedar City is home to the Utah Shakespeare Festival, SUU athletics, and gateway access to Cedar Breaks National Monument. Projects must plan around visitor seasons and canyon driving conditions.',
      serviceAreas: 'We serve Cedar City neighborhoods including Fiddlers Canyon, Cedar Meadows, Enoch, Old Town, and the South Interchange industrial corridor.',
    },
  },
  'cedar-hills': {
    cityName: 'Cedar Hills',
    citySlug: 'cedar-hills',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.4144',
    longitude: '-111.7519',
    landmarks: [
      {
        name: 'Cedar Hills City Hall',
        address: '10246 N Canyon Rd',
        url: 'https://maps.google.com/?q=Cedar+Hills+City+Hall',
      },
      {
        name: 'Harvey Park',
        address: '4301 W Harvey Blvd',
        url: 'https://maps.google.com/?q=Harvey+Park+Cedar+Hills',
      },
      {
        name: 'American Fork Canyon Entrance',
        address: 'SR-92 Alpine Loop Scenic Byway',
        url: 'https://maps.google.com/?q=American+Fork+Canyon',
      },
    ],
    businessDistricts: [
      {
        name: 'Canyon Road Corridor',
        description: 'Local services, medical offices, and fitness centers serving north Utah County.',
        link: 'https://www.cedarhills.org/',
      },
      {
        name: 'Golf Club Village',
        description: 'Retail and hospitality near Cedar Hills Golf Club, supporting recreational traffic.',
        link: 'https://www.cedarhills.org/business-license/',
      },
    ],
    permitInfo: {
      cityName: 'Cedar Hills Public Works',
      phoneNumber: '801-785-9668',
      requirements: 'Contact Public Works for right-of-way encroachment permits when staging dumpsters on Canyon Road or city sidewalks. HOA approvals may be required within planned developments.',
    },
    contentSections: {
      overview: 'Icon Dumpsters supports Cedar Hills homeowners and contractors as they remodel mountain-view properties and navigate HOA standards. Our deliveries account for steep grades, narrow cul-de-sacs, and trail access protected by the city.',
      residentialServices: [
        'Whole-home remodel debris in Juniper Heights',
        'Deck and patio upgrades near Harvey Park',
        'Roof replacements along Cedar Hills Drive',
        'Landscape and tree trimming cleanup',
        'Estate downsizing prior to relocation',
      ],
      commercialServices: [
        'Fitness club renovations',
        'Golf course facility upgrades',
        'New medical office build-outs',
        'HOA common-area maintenance projects',
        'Trailhead improvement debris removal',
      ],
      whyChooseUs: 'Our team coordinates with Cedar Hills HOAs, schedules around school traffic to Lone Peak High, and places driveway protection boards on every delivery to preserve decorative concrete.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Fits tight cul-de-sacs and short driveways common in planned communities.',
          useCases: ['Interior updates', 'Bulk junk removal', 'Yard waste'],
        },
        {
          size: '20 Yard',
          description: 'Handles multi-room renovations and large landscaping projects.',
          useCases: ['Kitchen remodels', 'Deck replacements', 'HOA cleanups'],
        },
        {
          size: '30 Yard',
          description: 'Supports major additions and luxury home construction along the bench.',
          useCases: ['New construction', 'Large demolitions', 'Community projects'],
        },
      ],
      localInfo: 'Cedar Hills borders American Fork Canyon, offering quick access to hiking, biking, and alpine drives. Residents balance outdoor recreation with carefully maintained neighborhoods and community events.',
      serviceAreas: 'We deliver throughout Cedar Hills, including The Cedars, Temple View, Juniper Heights, and communities along Canyon Road and Harvey Boulevard.',
    },
  },
  'genola': {
    cityName: 'Genola',
    citySlug: 'genola',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '39.9976',
    longitude: '-111.8410',
    landmarks: [
      {
        name: 'Genola Town Hall',
        address: '74 W 800 S',
        url: 'https://maps.google.com/?q=Genola+Town+Hall',
      },
      {
        name: 'Lone Cedar Farms',
        address: 'South Genola',
        url: 'https://maps.google.com/?q=Lone+Cedar+Farms+Genola',
      },
      {
        name: 'Genola Park',
        address: '50 N Main St',
        url: 'https://maps.google.com/?q=Genola+Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Main Street Genola',
        description: 'Town services and small businesses that serve the agricultural community.',
        link: 'https://www.genolautah.org/',
      },
      {
        name: 'Utah Lake Agricultural Corridor',
        description: 'Farms, nurseries, and rural enterprises stretching toward Santaquin and Benjamin.',
        link: 'https://www.genolautah.org/business-licensing',
      },
    ],
    permitInfo: {
      cityName: 'Genola Town Offices',
      phoneNumber: '801-754-5300',
      requirements: 'Contact the town clerk for right-of-way usage when placing dumpsters on public lanes. Rural roads often require reflective cones after dark.',
    },
    contentSections: {
      overview: 'Genola\'s agricultural properties and rural homesteads count on Icon Dumpsters for reliable debris removal. We navigate narrow farm roads, irrigation ditches, and pasture access while coordinating with landowners on livestock safety.',
      residentialServices: [
        'Barn and outbuilding cleanouts',
        'Septic and well-house upgrades',
        'Farmhouse remodeling projects',
        'Irrigation ditch clearing debris',
        'Estate and equipment auction prep',
      ],
      commercialServices: [
        'Fruit orchard infrastructure updates',
        'Agricultural processing facility cleanups',
        'Rural road improvement projects',
        'Utility upgrades for farmsteads',
        'Equipment yard maintenance debris',
      ],
      whyChooseUs: 'We schedule deliveries around irrigation cycles, provide flexible rental windows during harvest, and offer smaller trucks for narrow rural lanes so Genola projects stay efficient.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Great for property cleanups and small building demos without overwhelming yard space.',
          useCases: ['Farm cleanups', 'Scrap metal removal', 'Storm debris'],
        },
        {
          size: '20 Yard',
          description: 'Balances capacity with maneuverability for mixed agricultural debris.',
          useCases: ['Barn remodels', 'Tree trimming projects', 'Equipment upgrades'],
        },
        {
          size: '30 Yard',
          description: 'Supports large-scale property renovations and community cleanups.',
          useCases: ['Demolition debris', 'Irrigation project waste', 'Community events'],
        },
      ],
      localInfo: 'Genola lies west of Santaquin near Utah Lake, known for orchards, nurseries, and rural acreage. Dust management and agricultural traffic guide our routing choices.',
      serviceAreas: 'We serve Main Street, the Genola Bench, orchards toward Goshen, and agricultural properties along SR-141 and 400 North.',
    },
  },
  'heber-city': {
    cityName: 'Heber City',
    citySlug: 'heber-city',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.5069',
    longitude: '-111.4133',
    landmarks: [
      {
        name: 'Heber City Hall',
        address: '75 N Main St',
        url: 'https://maps.google.com/?q=Heber+City+Hall',
      },
      {
        name: 'Heber Valley Railroad',
        address: '450 S 600 W',
        url: 'https://maps.google.com/?q=Heber+Valley+Railroad',
      },
      {
        name: 'Wasatch County Fairgrounds',
        address: '415 S Southfield Rd',
        url: 'https://maps.google.com/?q=Wasatch+County+Fairgrounds',
      },
    ],
    businessDistricts: [
      {
        name: 'Historic Heber Main Street',
        description: 'Boutiques, dining, and civic offices that attract visitors year-round.',
        link: 'https://www.heberut.gov/',
      },
      {
        name: 'Heber Gateway Corridor',
        description: 'Retail, hospitality, and logistics operations near US-189 and US-40.',
        link: 'https://www.heberut.gov/147/Economic-Development',
      },
    ],
    permitInfo: {
      cityName: 'Heber City Engineering',
      phoneNumber: '435-654-0757',
      requirements: 'Apply for right-of-way occupancy permits when blocking lanes or sidewalks. Provide traffic control plans and insurance naming the city as additionally insured.',
    },
    contentSections: {
      overview: 'Icon Dumpsters keeps Heber Valley renovations on track from historic storefronts to Red Ledges estates. We plan around tourist traffic, ski-season weather, and county fair events.',
      residentialServices: [
        'Historic bungalow remodeling near Main Street',
        'New vacation home construction in Red Ledges',
        'Seasonal cabin cleanups near Jordanelle',
        'Landscape refresh projects across Heber Valley',
        'Estate cleanouts before sale or staging',
      ],
      commercialServices: [
        'Hospitality upgrades along Heber Gateway Drive',
        'Retail build-outs on US-189',
        'Event cleanup at Wasatch County Fairgrounds',
        'Transit and utility infrastructure improvements',
        'Warehouse expansions near the business park',
      ],
      whyChooseUs: 'We monitor canyon passes, coordinate with HOA gatehouses, and supply winter-ready equipment so dumpster service continues even after a snowstorm.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Fits narrow alleys and historic district loading zones without blocking traffic.',
          useCases: ['Boutique renovations', 'Small cabin cleanouts', 'Landscaping debris'],
        },
        {
          size: '20 Yard',
          description: 'Versatile option for roofing, remodels, and festival cleanup.',
          useCases: ['Roof tear-offs', 'Festival waste', 'Vacation home updates'],
        },
        {
          size: '30 Yard',
          description: 'Ideal for large custom builds and hospitality projects.',
          useCases: ['New construction', 'Large demolition', 'Hotel upgrades'],
        },
      ],
      localInfo: 'Heber City anchors the Heber Valley near Deer Creek Reservoir, Jordanelle, and the Wasatch Back resorts. Tourism peaks influence delivery windows and traffic routing.',
      serviceAreas: 'We cover Heber neighborhoods plus Daniel, Midway, Red Ledges, and Jordanelle Basin.',
    },
  },
  'highland': {
    cityName: 'Highland',
    citySlug: 'highland',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.4490',
    longitude: '-111.7958',
    landmarks: [
      {
        name: 'Highland City Hall',
        address: '5400 W Civic Center Dr',
        url: 'https://maps.google.com/?q=Highland+City+Hall',
      },
      {
        name: 'Highland Glen Park',
        address: '4800 Knight Ave',
        url: 'https://maps.google.com/?q=Highland+Glen+Park',
      },
      {
        name: 'Murdock Canal Trailhead',
        address: '10100 Alpine Hwy',
        url: 'https://maps.google.com/?q=Murdock+Canal+Trail',
      },
    ],
    businessDistricts: [
      {
        name: 'Town Center',
        description: 'Civic campus and retail serving central Highland neighborhoods.',
        link: 'https://www.highlandcity.org/',
      },
      {
        name: 'SR-92 Commercial Strip',
        description: 'Medical, retail, and service businesses along Timpanogos Highway.',
        link: 'https://www.highlandcity.org/154/Business-Licensing',
      },
    ],
    permitInfo: {
      cityName: 'Highland Public Works',
      phoneNumber: '801-756-5751',
      requirements: 'Secure an encroachment permit for dumpsters placed on public streets. Obtain HOA approval where applicable before delivery.',
    },
    contentSections: {
      overview: 'Highland\'s scenic neighborhoods and thriving park system require thoughtful staging. Icon Dumpsters protects decorative driveways and coordinates with HOAs across town.',
      residentialServices: [
        'Kitchen and great-room remodels',
        'Landscape overhauls near Highland Glen',
        'Roof replacements in Canterbury',
        'Basement finishing for growing families',
        'Estate cleanouts before relocation',
      ],
      commercialServices: [
        'Medical office tenant improvements',
        'School modernization for Alpine School District',
        'Trail improvements along Murdock Canal',
        'Church building renovations',
        'Retail refreshes near Town Center',
      ],
      whyChooseUs: 'We schedule around commuter traffic, provide real-time driver updates, and document every placement for HOA and city reviewers.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Easily positioned on short Highland driveways.',
          useCases: ['Small remodels', 'Yard cleanups', 'Garage cleanouts'],
        },
        {
          size: '20 Yard',
          description: 'Popular for multi-room renovations and roof projects.',
          useCases: ['Kitchen upgrades', 'Roof tear-offs', 'HOA maintenance'],
        },
        {
          size: '30 Yard',
          description: 'Supports custom-home construction and major additions.',
          useCases: ['New builds', 'Large additions', 'Community events'],
        },
      ],
      localInfo: 'Highland sits between American Fork Canyon and Silicon Slopes. Outdoor recreation, school schedules, and HOA rules all influence dumpster logistics.',
      serviceAreas: 'We service Beacon Hill, Chamberry Fields, Wimbleton, Bull River, and communities along SR-92.',
    },
  },
  'mapleton': {
    cityName: 'Mapleton',
    citySlug: 'mapleton',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.1310',
    longitude: '-111.5785',
    landmarks: [
      {
        name: 'Mapleton City Hall',
        address: '125 W 400 N',
        url: 'https://maps.google.com/?q=Mapleton+City+Hall',
      },
      {
        name: 'Maple Mountain High School',
        address: '51 N 2550 E',
        url: 'https://maps.google.com/?q=Maple+Mountain+High+School',
      },
      {
        name: 'Mapleton Canyon Trailhead',
        address: 'Powerhouse Rd',
        url: 'https://maps.google.com/?q=Mapleton+Canyon',
      },
    ],
    businessDistricts: [
      {
        name: 'Main Street Mapleton',
        description: 'Local services, dining, and municipal offices serving long-established neighborhoods.',
        link: 'https://www.mapleton.org/',
      },
      {
        name: 'East Bench Development',
        description: 'Custom home and light commercial projects along Highway 89.',
        link: 'https://www.mapleton.org/community-development',
      },
    ],
    permitInfo: {
      cityName: 'Mapleton Community Development',
      phoneNumber: '801-489-5655',
      requirements: 'Request a temporary use permit for dumpsters placed on public streets. Include sketches, placement duration, and emergency contacts.',
    },
    contentSections: {
      overview: 'Icon Dumpsters helps Mapleton balance rapid growth with rural roots. We adapt to wide lots, irrigation ditches, and hillside driveways on the bench.',
      residentialServices: [
        'Basement apartment construction',
        'Large-lot landscaping and tree removal',
        'Roof replacements after spring storms',
        'Farm outbuilding cleanouts',
        'Move-in and move-out junk removal',
      ],
      commercialServices: [
        'School expansion projects for Nebo School District',
        'Highway 89 commercial build-outs',
        'Church building renovations',
        'Utility upgrades on the east bench',
        'Parks and recreation improvements',
      ],
      whyChooseUs: 'We route around school start times, gravel lanes, and Maple Canyon trail traffic while offering flexible rental windows for phased construction.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for long driveways and targeted renovation bursts.',
          useCases: ['Yard cleanup', 'Garage decluttering', 'Storm debris'],
        },
        {
          size: '20 Yard',
          description: 'Handles whole-home updates and medium construction tasks.',
          useCases: ['Kitchen remodels', 'Roofing debris', 'Equipment upgrades'],
        },
        {
          size: '30 Yard',
          description: 'Ready for estate projects, church renovations, or subdivision development.',
          useCases: ['New builds', 'Demolition', 'Community improvements'],
        },
      ],
      localInfo: 'Mapleton sits against the Wasatch foothills with farmland, suburban growth, and quick access to Maple Canyon recreation.',
      serviceAreas: 'We deliver across Maple Ridge, Harvest Park, east bench estates, and rural parcels toward Springville and Spanish Fork.',
    },
  },
  'payson': {
    cityName: 'Payson',
    citySlug: 'payson',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.0441',
    longitude: '-111.7321',
    landmarks: [
      {
        name: 'Payson City Center',
        address: '439 W Utah Ave',
        url: 'https://maps.google.com/?q=Payson+City+Center',
      },
      {
        name: 'Payson Utah Temple',
        address: '1494 S 930 W',
        url: 'https://maps.google.com/?q=Payson+Utah+Temple',
      },
      {
        name: 'Peteetneet Museum & Cultural Arts Center',
        address: '10 N 600 E',
        url: 'https://maps.google.com/?q=Peteetneet+Museum',
      },
    ],
    businessDistricts: [
      {
        name: 'Historic Main Street Payson',
        description: 'Shops, restaurants, and civic venues celebrating the city\'s pioneer heritage.',
        link: 'https://www.paysonutah.org/',
      },
      {
        name: 'Payson Parkway Corridor',
        description: 'Industrial parks and logistics hubs near I-15 serving south Utah County.',
        link: 'https://www.paysonutah.org/community-development',
      },
    ],
    permitInfo: {
      cityName: 'Payson Public Works',
      phoneNumber: '801-465-5273',
      requirements: 'Temporary encroachment permits are required for dumpsters impacting public streets or sidewalks. Provide timelines and traffic control details with the request.',
    },
    contentSections: {
      overview: 'New neighborhoods, the Payson Temple district, and expanding industry depend on Icon Dumpsters for responsive service. We offer long-term rentals and rapid swaps to keep projects on schedule.',
      residentialServices: [
        'Historic home renovations near Peteetneet Hill',
        'Subdivision build-outs in south Payson',
        'Yard and orchard cleanup in Spring Lake',
        'Roofing and siding projects across town',
        'Move-in and move-out debris removal',
      ],
      commercialServices: [
        'Manufacturing facility expansions near I-15',
        'Temple district hospitality upgrades',
        'Downtown storefront remodels',
        'Public works infrastructure improvements',
        'School modernization for Nebo School District',
      ],
      whyChooseUs: 'We run early-morning routes to avoid I-15 congestion, coordinate with inspectors for long-term placements, and document every load for contractor billing.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Compact solution for downtown alleys and small residential jobs.',
          useCases: ['Home cleanouts', 'Roof debris', 'Yard waste'],
        },
        {
          size: '20 Yard',
          description: 'Balances space and footprint for medium renovations and city events.',
          useCases: ['Kitchen remodels', 'Community festivals', 'Retail refreshes'],
        },
        {
          size: '30 Yard',
          description: 'Best choice for large construction, temple district development, and industrial jobs.',
          useCases: ['New construction', 'Demolition', 'Factory upgrades'],
        },
      ],
      localInfo: 'Payson hosts Onion Days, the Scottish Festival, and serves as a gateway to the Nebo Loop Scenic Byway. Seasonal tourism and canyon weather shape delivery planning.',
      serviceAreas: 'We cover Payson, Spring Lake, Elk Ridge, West Mountain, and industrial zones stretching toward Benjamin.',
    },
  },
  'price': {
    cityName: 'Price',
    citySlug: 'price',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '39.5990',
    longitude: '-110.8107',
    landmarks: [
      {
        name: 'Price City Offices',
        address: '185 E Main St',
        url: 'https://maps.google.com/?q=Price+City+Hall',
      },
      {
        name: 'Utah State University Eastern',
        address: '451 E 400 N',
        url: 'https://maps.google.com/?q=USU+Eastern',
      },
      {
        name: 'Prehistoric Museum',
        address: '155 E Main St',
        url: 'https://maps.google.com/?q=Prehistoric+Museum+Price',
      },
    ],
    businessDistricts: [
      {
        name: 'Main Street Price',
        description: 'Historic downtown with museums, eateries, and civic services.',
        link: 'https://www.pricecityutah.com/',
      },
      {
        name: 'Price Industrial Park',
        description: 'Energy, mining, and logistics companies supporting Carbon County commerce.',
        link: 'https://www.pricecityutah.com/community-development.html',
      },
    ],
    permitInfo: {
      cityName: 'Price City Public Works',
      phoneNumber: '435-636-3193',
      requirements: 'Obtain an obstruction permit for dumpsters in the public way. Include start and end dates plus traffic control details.',
    },
    contentSections: {
      overview: 'Main Street revitalization, USU Eastern upgrades, and energy-sector projects rely on Icon Dumpsters for dependable debris plans.',
      residentialServices: [
        'Historic home remodels near Main Street',
        'Rental turnovers for student housing',
        'Roof replacements after spring storms',
        'Yard cleanup for large corner lots',
        'Estate cleanouts across Carbon County',
      ],
      commercialServices: [
        'Energy sector infrastructure upgrades',
        'University facility renovations',
        'Carbon County public works projects',
        'Retail build-outs for downtown businesses',
        'Highway 6 logistics hub developments',
      ],
      whyChooseUs: 'Our drivers understand coal-country traffic, coordinate with rail schedules, and provide on-call swaps to keep industrial sites productive.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Easy to position downtown or on residential streets with limited parking.',
          useCases: ['Home remodels', 'Junk removal', 'Roof tear-offs'],
        },
        {
          size: '20 Yard',
          description: 'Handles mixed loads from retail remodels and campus upgrades.',
          useCases: ['Campus projects', 'Retail improvements', 'Community events'],
        },
        {
          size: '30 Yard',
          description: 'Supports heavy commercial and industrial debris at mine-support facilities.',
          useCases: ['Industrial upgrades', 'Demolition', 'Infrastructure projects'],
        },
      ],
      localInfo: 'Price sits along US-6 near Nine Mile Canyon and the San Rafael Swell. Tourism and energy production shape project schedules year-round.',
      serviceAreas: 'We cover Price, Helper, Wellington, Carbonville, and remote Carbon County job sites.',
    },
  },
  'santaquin': {
    cityName: 'Santaquin',
    citySlug: 'santaquin',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '39.9750',
    longitude: '-111.7935',
    landmarks: [
      {
        name: 'Santaquin City Hall',
        address: '275 W Main St',
        url: 'https://maps.google.com/?q=Santaquin+City+Hall',
      },
      {
        name: 'Rowley\'s Red Barn',
        address: '901 S 300 W',
        url: 'https://maps.google.com/?q=Rowleys+Red+Barn',
      },
      {
        name: 'Santaquin Canyon',
        address: 'Canyon Rd',
        url: 'https://maps.google.com/?q=Santaquin+Canyon',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Santaquin',
        description: 'Main Street dining, civic services, and boutique shops that anchor the community.',
        link: 'https://www.santaquin.org/',
      },
      {
        name: 'Summit Ridge Growth Area',
        description: 'Rapid development zone west of I-15 with new homes and commercial projects.',
        link: 'https://www.santaquin.org/communitydevelopment',
      },
    ],
    permitInfo: {
      cityName: 'Santaquin Public Works',
      phoneNumber: '801-754-3211',
      requirements: 'Street occupancy permits are required for containers placed in the public right-of-way. Provide placement maps and reflective barricade plans.',
    },
    contentSections: {
      overview: 'Orchards, canyons, and booming subdivisions coexist in Santaquin. Icon Dumpsters offers flexible scheduling for both agricultural and residential projects.',
      residentialServices: [
        'Summit Ridge subdivision construction',
        'Farm and orchard building cleanouts',
        'Roof and siding updates across Main Street neighborhoods',
        'Pre-move junk removal for expanding families',
        'Seasonal green waste cleanup after harvest',
      ],
      commercialServices: [
        'Packaging and cold storage facility upgrades',
        'Retail build-outs near I-15 interchanges',
        'Public works projects along Center Street',
        'Trailhead and park improvements',
        'Agricultural processing expansions',
      ],
      whyChooseUs: 'We plan routes around U-pick traffic, coordinate with public works for orchard district closures, and offer weekend pickups for festival timelines.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Ideal for orchard co-ops and single-lot remodels.',
          useCases: ['Farm cleanups', 'Garage declutter', 'Roof tear-off'],
        },
        {
          size: '20 Yard',
          description: 'Most popular size for Summit Ridge and downtown renovations.',
          useCases: ['Home additions', 'Event cleanup', 'Retail refresh'],
        },
        {
          size: '30 Yard',
          description: 'Perfect for large-scale development or agricultural expansions.',
          useCases: ['Subdivision build-out', 'Processing facility upgrades', 'Municipal projects'],
        },
      ],
      localInfo: 'Santaquin hosts Orchard Days and sits minutes from Nebo Loop scenic drives. Seasonal tourism and agriculture influence delivery windows, especially during harvest.',
      serviceAreas: 'We deliver across Santaquin, Summit Ridge, Goshen, Genola fringes, and canyon-adjacent properties.',
    },
  },
  'vernal': {
    cityName: 'Vernal',
    citySlug: 'vernal',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.4550',
    longitude: '-109.5287',
    landmarks: [
      {
        name: 'Uintah County Heritage Museum',
        address: '155 E Main St',
        url: 'https://maps.google.com/?q=Uintah+County+Heritage+Museum',
      },
      {
        name: 'Dinosaur National Monument Visitor Center',
        address: '4545 E Highway 40',
        url: 'https://maps.google.com/?q=Dinosaur+National+Monument',
      },
      {
        name: 'Vernal City Offices',
        address: '374 E Main St',
        url: 'https://maps.google.com/?q=Vernal+City+Hall',
      },
    ],
    businessDistricts: [
      {
        name: 'Main Street Vernal',
        description: 'Tourism-focused downtown with lodging, dining, and civic facilities.',
        link: 'https://www.vernalcity.org/',
      },
      {
        name: 'Highway 40 Energy Corridor',
        description: 'Oil, gas, and logistics companies supporting Uintah Basin operations.',
        link: 'https://www.vernalcity.org/business',
      },
    ],
    permitInfo: {
      cityName: 'Vernal Public Works',
      phoneNumber: '435-789-2255',
      requirements: 'Encroachment permits are needed for dumpsters in public rights-of-way. Include reflective barricade plans for Highway 40 placements.',
    },
    contentSections: {
      overview: 'Uintah Basin contractors, hoteliers, and ranchers rely on Icon Dumpsters for responsive cleanup. We manage Main Street beautification as well as remote energy sites.',
      residentialServices: [
        'Home remodels throughout downtown Vernal',
        'Ranch property cleanups across Uintah Basin',
        'Roof and siding projects facing seasonal wind',
        'Estate cleanouts before relocation',
        'Landscaping refreshes for rental properties',
      ],
      commercialServices: [
        'Oil and gas infrastructure upgrades',
        'Hotel and hospitality renovations',
        'Municipal improvements for Vernal City',
        'Retail build-outs along Main Street',
        'Utility and road projects extending to Naples and Maeser',
      ],
      whyChooseUs: 'We schedule around rig moves, coordinate with BLM requirements, and provide extended rentals for remote sites where pickup windows shift daily.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Maneuverable for residential alleys and small commercial lots.',
          useCases: ['Junk removal', 'Event cleanup', 'Roof debris'],
        },
        {
          size: '20 Yard',
          description: 'Balances capacity for hospitality, retail, and ranch operations.',
          useCases: ['Hotel upgrades', 'Ranch maintenance', 'Community projects'],
        },
        {
          size: '30 Yard',
          description: 'Supports heavy industrial debris and infrastructure jobs across the Basin.',
          useCases: ['Oilfield upgrades', 'Road construction', 'Large demolitions'],
        },
      ],
      localInfo: 'Vernal anchors the Dinosaur National Monument gateway and Uintah Basin energy sector. Tourism surges in summer while energy projects peak year-round.',
      serviceAreas: 'We deliver across Vernal, Naples, Maeser, Jensen, and remote Uintah Basin job sites.',
    },
  },
  'vineyard': {
    cityName: 'Vineyard',
    citySlug: 'vineyard',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.3131',
    longitude: '-111.7522',
    landmarks: [
      {
        name: 'Vineyard City Hall',
        address: '125 S Main St',
        url: 'https://maps.google.com/?q=Vineyard+City+Hall',
      },
      {
        name: 'Vineyard Beach',
        address: 'Lakeside Sports Complex',
        url: 'https://maps.google.com/?q=Vineyard+Beach',
      },
      {
        name: 'UVU Vineyard Campus',
        address: '800 E 1200 S',
        url: 'https://maps.google.com/?q=UVU+Vineyard',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Vineyard',
        description: 'Mixed-use core packed with new offices, dining, and civic amenities.',
        link: 'https://www.vineyardutah.org/',
      },
      {
        name: 'The Yard at Vineyard',
        description: 'Redeveloped Geneva Steel site with tech, retail, and residential projects.',
        link: 'https://www.vineyardutah.org/economicdevelopment',
      },
    ],
    permitInfo: {
      cityName: 'Vineyard Public Works',
      phoneNumber: '801-226-1929',
      requirements: 'Encroachment permits are mandatory for dumpsters in public lanes or near the trail system. Submit applications electronically with site maps and HOA approvals.',
    },
    contentSections: {
      overview: 'Vineyard is one of Utah\'s fastest-growing communities. Icon Dumpsters keeps redevelopment moving while dense townhome blocks and commuter rail add complexity.',
      residentialServices: [
        'Townhome and condo renovations',
        'Landscaping debris removal along the promenade',
        'Garage cleanouts for transit-oriented housing',
        'Pre-move junk removal for new residents',
        'Roofing projects along the waterfront',
      ],
      commercialServices: [
        'Mixed-use construction at The Yard',
        'Transit station infrastructure projects',
        'Retail build-outs along Vineyard Loop Road',
        'Educational facility expansions for UVU',
        'Trail and park improvement projects',
      ],
      whyChooseUs: 'We coordinate deliveries with FrontRunner schedules, maintain detailed placement notes for dense blocks, and provide swift swaps so high-density construction stays on pace.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Fits within alley-load parking pads and tight townhome communities.',
          useCases: ['Apartment cleanouts', 'Small remodels', 'HOA maintenance'],
        },
        {
          size: '20 Yard',
          description: 'Versatile option for mid-rise construction and retail TI work.',
          useCases: ['Tenant improvements', 'Roofing projects', 'Event cleanup'],
        },
        {
          size: '30 Yard',
          description: 'Handles large redevelopment phases across the Geneva site.',
          useCases: ['New construction', 'Demolition', 'Infrastructure debris'],
        },
      ],
      localInfo: 'Vineyard borders Utah Lake with new parks, promenades, and commuter rail access. Rapid population growth keeps dumpsters in steady demand.',
      serviceAreas: 'We cover Vineyard\'s downtown core, Edgewater, The Yard, Sleepy Ridge, and trail-adjacent neighborhoods.',
    },
  },
  'logan': {
    cityName: 'Logan',
    citySlug: 'logan',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '41.7355',
    longitude: '-111.8344',
    landmarks: [
      {
        name: 'Logan City Hall',
        address: '290 N 100 W',
        url: 'https://maps.google.com/?q=Logan+City+Hall',
      },
      {
        name: 'Utah State University',
        address: 'Old Main Hill',
        url: 'https://maps.google.com/?q=Utah+State+University',
      },
      {
        name: 'Logan Canyon Scenic Byway',
        address: 'US-89',
        url: 'https://maps.google.com/?q=Logan+Canyon',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Logan',
        description: 'Historic Main Street with cultural venues, dining, and civic services.',
        link: 'https://www.loganutah.org/',
      },
      {
        name: 'North Logan Industrial Corridor',
        description: 'Manufacturing, tech, and distribution facilities serving Cache Valley.',
        link: 'https://www.loganutah.org/government/community_development/index.php',
      },
    ],
    permitInfo: {
      cityName: 'Logan Public Works',
      phoneNumber: '435-716-9150',
      requirements: 'Right-of-way permits are required for dumpsters occupying public property. Provide traffic control details and name Logan City as additionally insured.',
    },
    contentSections: {
      overview: 'Homeowners, USU facility managers, and Cache Valley manufacturers all rely on Icon Dumpsters. We schedule around Aggie game days, canyon weather, and downtown events.',
      residentialServices: [
        'Historic district renovations near Center Street',
        'Student housing turnovers for USU',
        'Roof and siding replacements across Cache Valley',
        'Yard and tree cleanup after canyon winds',
        'Estate cleanouts in Providence and Nibley',
      ],
      commercialServices: [
        'USU campus infrastructure projects',
        'Food processing plant upgrades',
        'Downtown storefront remodels',
        'Public works and road improvements',
        'Logan Regional Hospital renovations',
      ],
      whyChooseUs: 'Our Cache Valley routes avoid canyon closures, we keep winter-ready gear on every truck, and we offer flexible rental windows for agricultural and academic schedules.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Easy parking near tight downtown alleys and student housing lots.',
          useCases: ['Apartment cleanouts', 'Small remodels', 'Roof debris'],
        },
        {
          size: '20 Yard',
          description: 'Popular for medium renovations, campus projects, and retail updates.',
          useCases: ['Retail renovations', 'Office upgrades', 'Community events'],
        },
        {
          size: '30 Yard',
          description: 'The workhorse for manufacturing retrofits and large-scale construction.',
          useCases: ['Industrial projects', 'Large demolitions', 'Campus infrastructure'],
        },
      ],
      localInfo: 'Logan sits in Cache Valley near Logan Canyon, Bear Lake, and rich agricultural land. Winter inversions and canyon snowstorms require proactive logistics.',
      serviceAreas: 'We serve Logan, North Logan, Smithfield, Providence, Nibley, Hyrum, and the greater Cache Valley.',
    },
  },
};

const generatedCityConfigs: GenericCityConfig[] = [
  {
    citySlug: 'brigham-city',
    cityName: 'Brigham City',
    latitude: '41.5102',
    longitude: '-112.0150',
    county: 'Box Elder County',
    neighborhoods: [
      'Historic Downtown Brigham',
      'Forest Street Corridor',
      'South Bench Industrial',
    ],
    serviceAreas:
      'Serving Brigham City, Perry, Willard, and Box Elder County projects with coordinated dispatch from Salt Lake County.',
    permitCityName: 'Brigham City',
    permitPhone: '435-734-6600',
    overviewNote:
      'Our Salt Lake County crews coordinate with Box Elder County transfer stations to keep Brigham City projects supplied without delays.',
    landingPath: '/brigham-city',
  },
  {
    citySlug: 'cache-county',
    cityName: 'Cache County',
    latitude: '41.7369',
    longitude: '-111.8330',
    county: 'Cache County',
    neighborhoods: [
      'Logan Center Street',
      'North Cache Industrial',
      'Cache Valley Agriculture Belt',
    ],
    serviceAreas:
      'Supporting Logan, Smithfield, Providence, and Cache Valley communities with coordinated hauls from Salt Lake County.',
    permitCityName: 'Cache County Roads',
    permitPhone: '435-755-1500',
    overviewNote:
      'We plan Cache Valley deliveries from Salt Lake County yards so canyon weather and landfill hours never stall your schedule.',
    landingPath: '/services',
  },
  {
    citySlug: 'clinton',
    cityName: 'Clinton',
    latitude: '41.1398',
    longitude: '-112.0590',
    county: 'Davis County',
    neighborhoods: [
      'Clinton City Center',
      '1800 North Corridor',
      'Sunset & West Point Gateway',
    ],
    serviceAreas:
      'Supporting Clinton, Sunset, West Point, and Hill Air Force Base job sites throughout Davis County.',
    permitCityName: 'Clinton City',
    permitPhone: '801-614-0740',
    overviewNote:
      'Same-day routes from Salt Lake County run along I-15 to Clinton to match Davis County project timelines.',
    landingPath: '/clinton',
  },
  {
    citySlug: 'davis-county',
    cityName: 'Davis County',
    latitude: '40.9805',
    longitude: '-111.8874',
    county: 'Davis County',
    neighborhoods: [
      'Farmington Station',
      'Kaysville Main Street',
      'North Davis Industrial',
    ],
    serviceAreas:
      'County-wide coverage for Farmington, Layton, Kaysville, Syracuse, and the Legacy Parkway corridor.',
    permitCityName: 'Davis County Public Works',
    permitPhone: '801-451-3500',
    overviewNote:
      'Salt Lake County staging yards keep Davis County deliveries flexible for commuter corridors and Hill Air Force Base projects.',
    landingPath: '/services',
  },
  {
    citySlug: 'moab',
    cityName: 'Moab',
    latitude: '38.5733',
    longitude: '-109.5498',
    county: 'Grand County',
    neighborhoods: [
      'Downtown Moab',
      'Spanish Valley',
      'Arches Gateway Corridor',
    ],
    serviceAreas:
      'Reliable roll-off delivery for Moab, Spanish Valley, Castle Valley, and Grand County recreation projects from Salt Lake County.',
    permitCityName: 'Moab City',
    permitPhone: '435-259-5121',
    overviewNote:
      'We schedule long-haul routes from Salt Lake County so resort and recreation builds near Moab receive containers when they need them.',
    landingPath: '/services',
  },
  {
    citySlug: 'nephi',
    cityName: 'Nephi',
    latitude: '39.7108',
    longitude: '-111.8366',
    county: 'Juab County',
    neighborhoods: [
      'Nephi Historic Center',
      'I-15 Logistics Hub',
      'Mount Nebo Foothills',
    ],
    serviceAreas:
      'Serving Nephi, Mona, and Juab County agriculture with dependable hauling coordinated through Salt Lake County dispatch.',
    permitCityName: 'Nephi City',
    permitPhone: '435-623-0822',
    overviewNote:
      'Our team syncs southbound runs from Salt Lake County so Nephi contractors can plan swaps without guessing on arrival times.',
    landingPath: '/services',
  },
  {
    citySlug: 'richfield',
    cityName: 'Richfield',
    latitude: '38.7725',
    longitude: '-112.0841',
    county: 'Sevier County',
    neighborhoods: [
      'Downtown Richfield',
      'I-70 Business Loop',
      'Sevier Valley Center',
    ],
    serviceAreas:
      'Reliable delivery for Richfield, Salina, and Sevier County jobs with long-haul dispatch from Salt Lake County.',
    permitCityName: 'Richfield City',
    permitPhone: '435-896-6439',
    overviewNote:
      'Drivers plan overnight staging from Salt Lake County to keep central Utah projects stocked with containers.',
    landingPath: '/services',
  },
  {
    citySlug: 'rose-park',
    cityName: 'Rose Park',
    latitude: '40.7990',
    longitude: '-111.9380',
    county: 'Salt Lake County',
    neighborhoods: [
      'Rose Park Neighborhood',
      '600 North Corridor',
      'Jordan Meadows Industrial',
    ],
    serviceAreas:
      'Serving Rose Park, Fairpark, and northwest Salt Lake City neighborhoods directly from our Salt Lake County yard.',
    permitCityName: 'Salt Lake City Public Services',
    permitPhone: '801-535-6999',
    overviewNote:
      'With trucks based in Salt Lake County, we specialize in tight-turn deliveries to Rose Park infill lots and alley placements.',
    landingPath: '/rose-park',
  },
  {
    citySlug: 'salt-lake-county',
    cityName: 'Salt Lake County',
    latitude: '40.6769',
    longitude: '-111.8880',
    county: 'Salt Lake County',
    neighborhoods: [
      'Central Salt Lake Valley',
      'West Valley Industrial',
      'Wasatch Foothill Communities',
    ],
    serviceAreas:
      'County-wide support for Salt Lake City, West Valley, Sandy, Draper, and canyon communities with the fastest dispatch options.',
    permitCityName: 'Salt Lake County Public Works',
    permitPhone: '385-468-6100',
    overviewNote:
      'Our headquarters in Salt Lake County keeps every community from Magna to Draper covered with on-demand dumpsters.',
    landingPath: '/services',
  },
  {
    citySlug: 'st-george',
    cityName: 'St. George',
    latitude: '37.0965',
    longitude: '-113.5684',
    county: 'Washington County',
    neighborhoods: [
      'Downtown St. George',
      'Washington Fields',
      'Southern Parkway Development',
    ],
    serviceAreas:
      'Reliable roll-off delivery for St. George, Washington City, and greater Washington County with carefully planned runs from Salt Lake County.',
    permitCityName: 'St. George City',
    permitPhone: '435-627-4710',
    overviewNote:
      'We coordinate with Washington County landfills and schedule overnight hauls from Salt Lake County to keep desert projects supplied.',
    landingPath: '/services',
  },
  {
    citySlug: 'summit-county',
    cityName: 'Summit County',
    latitude: '40.8700',
    longitude: '-111.4000',
    county: 'Summit County',
    neighborhoods: [
      'Coalville Main Street',
      'Kimball Junction Logistics',
      'Eastern Summit Agricultural',
    ],
    serviceAreas:
      'County-wide coverage for Park City, Kamas, Coalville, and Summit County resorts with dispatch from Salt Lake County.',
    permitCityName: 'Summit County Public Works',
    permitPhone: '435-336-3970',
    overviewNote:
      'Salt Lake County trucks stage near I-80 to service Summit County mountain projects around weather windows.',
    landingPath: '/services',
  },
  {
    citySlug: 'tooele-county',
    cityName: 'Tooele County',
    latitude: '40.5308',
    longitude: '-112.2983',
    county: 'Tooele County',
    neighborhoods: [
      'Tooele Downtown',
      'Grantsville Industrial',
      'Lake Point Logistics',
    ],
    serviceAreas:
      'Supporting Tooele, Grantsville, Lake Point, and the Tooele Valley with dedicated runs from Salt Lake County.',
    permitCityName: 'Tooele County Roads',
    permitPhone: '435-843-3200',
    overviewNote:
      'We stage dumpsters on the west side of Salt Lake County for fast access across SR-201 and I-80 into Tooele County.',
    landingPath: '/services',
  },
  {
    citySlug: 'utah',
    cityName: 'Utah',
    latitude: '39.3200',
    longitude: '-111.0937',
    county: 'State of Utah',
    neighborhoods: [
      'Wasatch Front Corridor',
      'Central Utah Projects',
      'Southern Utah Resorts',
    ],
    serviceAreas:
      'Statewide dumpster rental coverage from Salt Lake County to northern, central, and southern Utah job sites.',
    permitCityName: 'State of Utah',
    permitPhone: DEFAULT_BUSINESS_PHONE,
    overviewNote:
      'Icon Dumpsters coordinates statewide routes from our Salt Lake County base so every Utah project can get a roll-off when needed.',
    landingPath: '/services',
  },
  {
    citySlug: 'utah-county',
    cityName: 'Utah County',
    latitude: '40.1200',
    longitude: '-111.6700',
    county: 'Utah County',
    neighborhoods: [
      'Provo/Orem Core',
      'North County Tech Corridor',
      'South County Agricultural Belt',
    ],
    serviceAreas:
      'Supporting Provo, Orem, Lehi, Spanish Fork, and Utah County communities with consistent dispatch from Salt Lake County.',
    permitCityName: 'Utah County Public Works',
    permitPhone: '801-851-8600',
    overviewNote:
      'Salt Lake County staging yards keep Utah County deliveries flowing despite I-15 construction and Utah Lake traffic.',
    landingPath: '/services',
  },
  {
    citySlug: 'wasatch-county',
    cityName: 'Wasatch County',
    latitude: '40.3620',
    longitude: '-111.1250',
    county: 'Wasatch County',
    neighborhoods: [
      'Heber Main Street',
      'Jordanelle Developments',
      'Wasatch Mountain Base',
    ],
    serviceAreas:
      'County-wide support for Heber, Midway, Daniels Canyon, and Jordanelle projects with supply lines from Salt Lake County.',
    permitCityName: 'Wasatch County Public Works',
    permitPhone: '435-657-3280',
    overviewNote:
      'We monitor US-189 and Provo Canyon conditions from Salt Lake County to time Wasatch County deliveries.',
    landingPath: '/services',
  },
  {
    citySlug: 'weber-county',
    cityName: 'Weber County',
    latitude: '41.2600',
    longitude: '-111.9520',
    county: 'Weber County',
    neighborhoods: [
      'Ogden Downtown',
      'Weber Industrial Park',
      'North Ogden Retail Corridor',
    ],
    serviceAreas:
      'Supporting Ogden, Roy, Pleasant View, and Weber County contractors with responsive delivery from Salt Lake County.',
    permitCityName: 'Weber County Roads',
    permitPhone: '801-399-8374',
    overviewNote:
      'We stage equipment near I-15 to keep Weber County swaps on schedule despite commuter traffic.',
    landingPath: '/services',
  },
  {
    citySlug: 'west-haven',
    cityName: 'West Haven',
    latitude: '41.2013',
    longitude: '-112.0530',
    county: 'Weber County',
    neighborhoods: [
      'Midland Drive Corridor',
      'West Weber Industrial',
      'West Haven Center',
    ],
    serviceAreas:
      'Supporting West Haven, Roy, and Falcon Hill logistics with quick access from Salt Lake County.',
    permitCityName: 'West Haven City',
    permitPhone: '801-731-4519',
    overviewNote:
      'Professional dumpster rental in West Haven, Utah. Our Salt Lake County yard dispatches along I-15 and SR-108 to keep West Haven builds on track. Same-day delivery available.',
    landingPath: '/services',
  },
  {
    citySlug: 'woodland-hills',
    cityName: 'Woodland Hills',
    latitude: '40.0169',
    longitude: '-111.6455',
    county: 'Utah County',
    neighborhoods: [
      'Woodland Hills Foothills',
      'Loafer Canyon Estates',
      'Spring Lake Bench',
    ],
    serviceAreas:
      'Serving Woodland Hills, Elk Ridge, and Payson Canyon cabins with dependable dispatch from Salt Lake County.',
    permitCityName: 'Woodland Hills City',
    permitPhone: '801-423-1962',
    overviewNote:
      'We schedule southbound runs from Salt Lake County around canyon weather to serve Woodland Hills projects.',
    landingPath: '/services',
  },
];

const citySlugAliases: Record<string, string> = {
  'me-alpine': 'alpine',
  'me-bountiful': 'bountiful',
  'me-cache-county': 'cache-county',
  'me-cedar-city': 'cedar-city',
  'me-cedar-hills': 'cedar-hills',
  'me-clearfield': 'clearfield',
  'me-davis-county': 'davis-county',
  'me-farmington': 'farmington',
  'me-genola': 'genola',
  'me-highland': 'highland',
  'me-kaysville': 'kaysville',
  'me-layton': 'layton',
  'me-mapleton': 'mapleton',
  'me-moab': 'moab',
  'me-nephi': 'nephi',
  'me-north-salt-lake': 'north-salt-lake',
  'me-ogden': 'ogden',
  'me-park-city': 'park-city',
  'me-payson': 'payson',
  'me-pleasant-grove': 'pleasant-grove',
  'me-poplar-grove': 'poplar-grove',
  'me-price': 'price',
  'me-richfield': 'richfield',
  'me-rose-park': 'rose-park',
  'me-santaquin': 'santaquin',
  'me-saratoga-springs': 'saratoga-springs',
  'me-syracuse': 'syracuse',
  'me-tooele-county': 'tooele-county',
  'me-vineyard': 'vineyard',
  'me-weber-county': 'weber-county',
  'me-west-bountiful': 'west-bountiful',
  'me-woodland-hills': 'woodland-hills',
  'me-woods-cross': 'woods-cross',
};

for (const config of generatedCityConfigs) {
  if (!cityData[config.citySlug]) {
    cityData[config.citySlug] = createGenericCityData(config);
  }
}

// Helper function to get city data
export function getCityData(citySlug: string): CityData | null {
  const direct = cityData[citySlug];
  if (direct) {
    return direct;
  }

  const alias = citySlugAliases[citySlug];
  if (alias && cityData[alias]) {
    return {
      ...cityData[alias],
      citySlug,
    };
  }

  return null;
}

// Helper function to get all city slugs
export function getAllCitySlugs(): string[] {
  // Exclude invalid city pages that shouldn't be in the sitemap
  const invalidCitySlugs = [
    'cheapestsalt-lake-city',
    'commercial-dumpster-rental-business-solutions',
    'complete',
    'utahlocations',
    'utah', // Also exclude 'utah' if it exists
  ];
  
  return Object.keys(cityData).filter(slug => !invalidCitySlugs.includes(slug));
}
