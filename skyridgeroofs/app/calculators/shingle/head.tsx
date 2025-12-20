import { canonicalUrl } from '@/lib/seo';

export default function Head() {
  const title = 'Shingle Calculator | Sky Ridge Roofing';
  const description =
    'Estimate asphalt shingle quantities and plan coverage for a roof replacement or roof installation project.';
  const canonical = canonicalUrl('/calculators/shingle');
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

