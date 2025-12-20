import { canonicalUrl } from '@/lib/seo';

export default function Head() {
  const title = 'Roof Ventilation Calculator | Sky Ridge Roofing';
  const description =
    'Estimate roof ventilation needs for proper attic airflow. Helps reduce moisture, heat buildup, and premature roof wear.';
  const canonical = canonicalUrl('/calculators/ventilation');
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

