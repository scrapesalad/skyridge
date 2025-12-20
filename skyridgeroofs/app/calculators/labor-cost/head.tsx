import { canonicalUrl } from '@/lib/seo';

export default function Head() {
  const title = 'Roofing Labor Cost Calculator | Sky Ridge Roofing';
  const description =
    'Estimate roofing labor cost based on roof size and complexity. Helpful for planning roof repairs and replacements in Utah.';
  const canonical = canonicalUrl('/calculators/labor-cost');
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

