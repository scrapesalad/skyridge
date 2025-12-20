import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import { canonicalUrl } from '@/lib/seo';
import { LANDING_PAGES } from '@/data/landingPages';

export const metadata: Metadata = {
  title: 'Roofing Guides & Service Area Pages | Sky Ridge Roofing',
  description:
    'Browse our roofing service pages and guides across Utah, including residential, commercial, and metal roofing topics.',
  alternates: { canonical: canonicalUrl('/roofing') },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <h1 className="text-4xl font-bold mb-4">Roofing Guides & Service Areas</h1>
          <p className="text-gray-700 mb-8 max-w-3xl">
            These pages highlight common roofing services and locations we serve across Utah. If you
            don&apos;t see your city listed, contact us for a free estimate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LANDING_PAGES.map((p) => (
              <Link
                key={p.slug}
                href={`/roofing/${p.slug}`}
                className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
                <p className="text-gray-700">{p.description}</p>
                <div className="mt-4 text-blue-700 font-semibold">Read more →</div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

