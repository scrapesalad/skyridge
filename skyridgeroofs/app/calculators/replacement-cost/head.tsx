import { canonicalUrl } from '@/lib/seo';

export default function Head() {
  const title = 'Roof Replacement Cost Calculator | Sky Ridge Roofing';
  const description =
    'Estimate roof replacement cost using roof size, material type, and project factors. Get a ballpark before requesting a quote.';
  const canonical = canonicalUrl('/calculators/replacement-cost');
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

