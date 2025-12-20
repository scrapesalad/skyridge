import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import { canonicalUrl } from '@/lib/seo';
import { BUSINESS } from '@/lib/site';
import { LANDING_PAGES, LANDING_PAGE_SLUGS } from '@/data/landingPages';

type Props = {
  params: { slug: string };
};

function getPage(slug: string) {
  return LANDING_PAGES.find((p) => p.slug === slug) ?? null;
}

export function generateStaticParams() {
  return LANDING_PAGE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getPage(params.slug);
  if (!page) return {};

  const pathname = `/roofing/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: canonicalUrl(pathname) },
    openGraph: {
      title: page.title,
      description: page.description,
      type: 'article',
      url: pathname,
    },
  };
}

export default function Page({ params }: Props) {
  const page = getPage(params.slug);
  if (!page) notFound();

  const cityLine = page.city && page.state ? `${page.city}, ${page.state}` : page.state ? page.state : 'Utah';

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="relative h-80">
          <Image
            src={page.heroImage}
            alt={page.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 max-w-6xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">{page.title}</h1>
              <p className="mt-3 text-lg md:text-xl max-w-3xl drop-shadow">
                {page.description}
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">{page.serviceLabel} in {cityLine}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Sky Ridge Roofing helps homeowners, property managers, and businesses with dependable roofing
                work across {cityLine}. Our team focuses on clear scopes, clean job sites, and durable results
                backed by straightforward communication.
              </p>

              <h3 className="text-xl font-bold mb-3">What we help with</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Inspections and photo documentation</li>
                <li>Leak troubleshooting and targeted repairs</li>
                <li>Full replacements with material options</li>
                <li>Flashing, ventilation, and drainage improvements</li>
              </ul>

              <h3 className="text-xl font-bold mb-3">Our approach</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We start with an inspection, then provide a clear recommendation based on roof condition,
                budget, and timeline. If storm damage is involved, we can also help you understand the insurance
                claim process.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                >
                  Get a Free Estimate
                </Link>
                <Link
                  href={page.primaryServicePath}
                  className="inline-flex items-center justify-center border border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  View Related Service
                </Link>
              </div>
            </article>

            <aside className="bg-white rounded-lg shadow-md p-8 h-fit">
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-700 mb-4">
                Call <a className="text-blue-700 font-semibold" href={`tel:${BUSINESS.phone.replace(/[^0-9]/g, '')}`}>{BUSINESS.phone}</a> or request a free estimate online.
              </p>
              <div className="space-y-2 text-gray-700">
                <div><span className="font-semibold">Licensed:</span> {BUSINESS.license}</div>
                <div><span className="font-semibold">Service Area:</span> Utah</div>
              </div>
              <div className="mt-6">
                <Link href="/roofing" className="text-blue-700 font-semibold hover:underline">
                  Browse more roofing pages →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

