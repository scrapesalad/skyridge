import { canonicalUrl } from '@/lib/seo';

export default function Head() {
  const title = 'Roof Pitch Calculator | Sky Ridge Roofing';
  const description =
    'Calculate roof pitch, roof angle, and slope percentage from rise and run measurements. Helpful for estimating materials and complexity.';
  const canonical = canonicalUrl('/calculators/roof-pitch');
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

