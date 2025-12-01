export const saltLakeCountyZips: string[] = [
  // Salt Lake City and county-wide ranges
  '84101','84102','84103','84104','84105','84106','84107','84108','84109','84110','84111','84112','84113','84114','84115','84116','84117','84118','84119','84120','84121','84122','84123','84124','84125','84126','84127','84128','84129',
  // West Valley, West Jordan, Sandy, South Jordan, etc.
  '84006','84009','84020','84044','84047','84065','84070','84081','84084','84088','84092','84093','84094','84095','84096'
];

export function isZipInSaltLakeCounty(zip: string): boolean {
  const clean = (zip || '').trim().slice(0, 5);
  return saltLakeCountyZips.includes(clean);
}

export const zipToCity: Record<string, string> = {
  '84101': 'Salt Lake City',
  '84102': 'Salt Lake City',
  '84103': 'Salt Lake City',
  '84104': 'Salt Lake City',
  '84105': 'Salt Lake City',
  '84106': 'Millcreek',
  '84107': 'Murray',
  '84108': 'Salt Lake City',
  '84109': 'Salt Lake City',
  '84110': 'Salt Lake City',
  '84111': 'Salt Lake City',
  '84112': 'Salt Lake City',
  '84113': 'Salt Lake City',
  '84114': 'Salt Lake City',
  '84115': 'South Salt Lake',
  '84116': 'Salt Lake City',
  '84117': 'Holladay',
  '84118': 'Kearns',
  '84119': 'West Valley City',
  '84120': 'West Valley City',
  '84121': 'Cottonwood Heights',
  '84122': 'Salt Lake City',
  '84123': 'Taylorsville',
  '84124': 'Holladay',
  '84125': 'Midvale',
  '84126': 'Salt Lake City',
  '84127': 'Salt Lake City',
  '84128': 'Magna',
  '84129': 'Kearns',
  '84006': 'Copperton',
  '84009': 'South Jordan',
  '84020': 'Draper',
  '84044': 'Magna',
  '84047': 'Midvale',
  '84065': 'Riverton',
  '84070': 'Sandy',
  '84081': 'West Jordan',
  '84084': 'West Jordan',
  '84088': 'Sandy',
  '84092': 'Sandy',
  '84093': 'Sandy',
  '84094': 'Sandy',
  '84095': 'South Jordan',
  '84096': 'Herriman',
};


