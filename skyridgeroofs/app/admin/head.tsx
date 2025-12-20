import { canonicalUrl } from '@/lib/seo';

export default function Head() {
  const canonical = canonicalUrl('/admin');
  return (
    <>
      <title>Admin | Sky Ridge Roofing</title>
      <meta name="robots" content="noindex,nofollow" />
      <link rel="canonical" href={canonical} />
    </>
  );
}

