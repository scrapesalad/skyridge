import { canonicalUrl } from '@/lib/seo';

export default function Head() {
  const title = 'Roof Insulation Calculator | Sky Ridge Roofing';
  const description =
    'Estimate insulation needs and understand how insulation impacts comfort and energy efficiency for Utah homes.';
  const canonical = canonicalUrl('/calculators/insulation');
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

