import { canonicalUrl } from '@/lib/seo';

export default function Head() {
  const title = 'Roofing Cost Calculator | Sky Ridge Roofing';
  const description =
    'Estimate your roofing project cost based on roof size, pitch, and material type. Includes roofing squares and total cost estimate.';
  const canonical = canonicalUrl('/calculators/roofing-cost');
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

