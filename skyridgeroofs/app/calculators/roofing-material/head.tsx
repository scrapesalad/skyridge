import { canonicalUrl } from '@/lib/seo';

export default function Head() {
  const title = 'Roofing Material Calculator | Sky Ridge Roofing';
  const description =
    'Compare common roofing materials and estimate needs for asphalt shingles, metal roofing, tile, slate, and flat roofing systems.';
  const canonical = canonicalUrl('/calculators/roofing-material');
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
    </>
  );
}

