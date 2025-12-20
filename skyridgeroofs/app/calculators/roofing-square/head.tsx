import { canonicalUrl } from '@/lib/seo';

export default function Head() {
  const title = 'Roofing Square Calculator | Sky Ridge Roofing';
  const description =
    'Convert roof area to roofing squares (100 sq ft each) and estimate material needs. Useful for roof replacement and installation planning.';
  const canonical = canonicalUrl('/calculators/roofing-square');
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

