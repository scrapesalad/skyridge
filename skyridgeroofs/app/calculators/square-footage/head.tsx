import { canonicalUrl } from '@/lib/seo';

export default function Head() {
  const title = 'Square Footage Calculator | Sky Ridge Roofing';
  const description =
    'Calculate square footage for roofing projects and convert measurements into usable roof area estimates for planning and quoting.';
  const canonical = canonicalUrl('/calculators/square-footage');
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

