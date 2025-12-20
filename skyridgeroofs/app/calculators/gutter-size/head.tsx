import { canonicalUrl } from '@/lib/seo';

export default function Head() {
  const title = 'Gutter Size Calculator | Sky Ridge Roofing';
  const description =
    'Estimate the right gutter size based on roof area and rainfall considerations. Helps reduce overflow and drainage issues.';
  const canonical = canonicalUrl('/calculators/gutter-size');
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

