export interface SaltLakeCountyCity {
  slug: string;
  name: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  population?: number;
  area?: string;
  established?: number;
}

export const saltLakeCountyCities: SaltLakeCountyCity[] = [
  {
    slug: 'salt-lake-city',
    name: 'Salt Lake City',
    coordinates: { latitude: '40.7608', longitude: '-111.8910' },
    population: 200133,
    area: '110.4 sq mi',
    established: 1851
  },
  {
    slug: 'west-valley-city',
    name: 'West Valley City',
    coordinates: { latitude: '40.6916', longitude: '-111.9931' },
    population: 140230,
    area: '35.9 sq mi',
    established: 1980
  },
  {
    slug: 'west-jordan',
    name: 'West Jordan',
    coordinates: { latitude: '40.6097', longitude: '-111.9391' },
    population: 116961,
    area: '32.3 sq mi',
    established: 1941
  },
  {
    slug: 'sandy',
    name: 'Sandy',
    coordinates: { latitude: '40.5649', longitude: '-111.8381' },
    population: 96138,
    area: '22.3 sq mi',
    established: 1893
  },
  {
    slug: 'south-jordan',
    name: 'South Jordan',
    coordinates: { latitude: '40.5622', longitude: '-111.9297' },
    population: 77791,
    area: '22.0 sq mi',
    established: 1859
  },
  {
    slug: 'millcreek',
    name: 'Millcreek',
    coordinates: { latitude: '40.6869', longitude: '-111.8750' },
    population: 63080,
    area: '12.2 sq mi',
    established: 2016
  },
  {
    slug: 'herriman',
    name: 'Herriman',
    coordinates: { latitude: '40.5141', longitude: '-112.0329' },
    population: 55601,
    area: '21.0 sq mi',
    established: 1999
  },
  {
    slug: 'taylorsville',
    name: 'Taylorsville',
    coordinates: { latitude: '40.6677', longitude: '-111.9388' },
    population: 60448,
    area: '10.8 sq mi',
    established: 1996
  },
  {
    slug: 'murray',
    name: 'Murray',
    coordinates: { latitude: '40.6669', longitude: '-111.8880' },
    population: 50437,
    area: '12.0 sq mi',
    established: 1903
  },
  {
    slug: 'draper',
    name: 'Draper',
    coordinates: { latitude: '40.5247', longitude: '-111.8638' },
    population: 51222,
    area: '30.0 sq mi',
    established: 1849
  },
  {
    slug: 'riverton',
    name: 'Riverton',
    coordinates: { latitude: '40.5219', longitude: '-111.9391' },
    population: 45071,
    area: '12.0 sq mi',
    established: 1865
  },
  {
    slug: 'midvale',
    name: 'Midvale',
    coordinates: { latitude: '40.6111', longitude: '-111.8994' },
    population: 36028,
    area: '6.0 sq mi',
    established: 1906
  },
  {
    slug: 'cottonwood-heights',
    name: 'Cottonwood Heights',
    coordinates: { latitude: '40.6197', longitude: '-111.8103' },
    population: 34017,
    area: '6.7 sq mi',
    established: 2005
  },
  {
    slug: 'holladay',
    name: 'Holladay',
    coordinates: { latitude: '40.6689', longitude: '-111.8247' },
    population: 31561,
    area: '7.8 sq mi',
    established: 1999
  },
  {
    slug: 'south-salt-lake',
    name: 'South Salt Lake',
    coordinates: { latitude: '40.7089', longitude: '-111.8881' },
    population: 26017,
    area: '6.9 sq mi',
    established: 1938
  },
  {
    slug: 'bluffdale',
    name: 'Bluffdale',
    coordinates: { latitude: '40.4847', longitude: '-111.9389' },
    population: 18000,
    area: '11.0 sq mi',
    established: 1886
  },
  {
    slug: 'magna',
    name: 'Magna',
    coordinates: { latitude: '40.7089', longitude: '-112.1014' },
    population: 29003,
    area: '6.0 sq mi',
    established: 1901
  },
  {
    slug: 'kearns',
    name: 'Kearns',
    coordinates: { latitude: '40.6597', longitude: '-111.9969' },
    population: 37000,
    area: '6.0 sq mi',
    established: 1942
  },
  {
    slug: 'white-city',
    name: 'White City',
    coordinates: { latitude: '40.5656', longitude: '-111.8639' },
    population: 5500,
    area: '2.0 sq mi',
    established: 2005
  },
  {
    slug: 'emigration-canyon',
    name: 'Emigration Canyon',
    coordinates: { latitude: '40.7500', longitude: '-111.8000' },
    population: 1500,
    area: '18.0 sq mi',
    established: 2001
  },
  {
    slug: 'copperton',
    name: 'Copperton',
    coordinates: { latitude: '40.5667', longitude: '-112.1000' },
    population: 826,
    area: '0.5 sq mi',
    established: 1926
  },
  {
    slug: 'brighton',
    name: 'Brighton',
    coordinates: { latitude: '40.6000', longitude: '-111.5833' },
    population: 200,
    area: '0.8 sq mi',
    established: 1870
  },
  {
    slug: 'alta',
    name: 'Alta',
    coordinates: { latitude: '40.5833', longitude: '-111.6333' },
    population: 400,
    area: '4.0 sq mi',
    established: 1865
  }
];

export function getSaltLakeCountyCity(slug: string): SaltLakeCountyCity | undefined {
  return saltLakeCountyCities.find(city => city.slug === slug);
}

export function getAllSaltLakeCountyCities(): SaltLakeCountyCity[] {
  return saltLakeCountyCities;
}
