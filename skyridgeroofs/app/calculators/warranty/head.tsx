import { canonicalUrl } from '@/lib/seo';

export default function Head() {
  const title = 'Roof Warranty Calculator | Sky Ridge Roofing';
  const description =
    'Explore common roof warranty terms and factors that impact coverage, including installation quality, ventilation, and maintenance.';
  const canonical = canonicalUrl('/calculators/warranty');
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

