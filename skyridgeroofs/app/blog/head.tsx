import { canonicalUrl } from '@/lib/seo';

export default function Head() {
  const title = 'Roofing Blog & Resources | Sky Ridge Roofing';
  const description =
    'Expert roofing advice, tips, and guides for Utah homeowners and businesses from Sky Ridge Roofing.';
  const canonical = canonicalUrl('/blog');

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

