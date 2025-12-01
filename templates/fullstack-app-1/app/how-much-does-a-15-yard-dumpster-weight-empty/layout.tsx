import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How Much Does a 15 Yard Dumpster Weigh Empty? | Icon Dumpsters",
  description: "Learn how much a 15-yard dumpster weighs empty, its weight capacity, dimensions, and specifications. Get accurate weight information for 15-yard dumpster rentals in Utah.",
  keywords: "15 yard dumpster weight, dumpster weight empty, 15 yard dumpster specifications, dumpster weight capacity",
  alternates: { canonical: 'https://icondumpsters.com/how-much-does-a-15-yard-dumpster-weight-empty' },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: "How Much Does a 15 Yard Dumpster Weigh Empty? | Icon Dumpsters",
    description: "Learn how much a 15-yard dumpster weighs empty, its weight capacity, dimensions, and specifications. Get accurate weight information for 15-yard dumpster rentals in Utah.",
    url: 'https://icondumpsters.com/how-much-does-a-15-yard-dumpster-weight-empty',
    images: [{ url: '/images/dumpster500x500-1.jpeg', width: 1200, height: 630, alt: '15 Yard Dumpster Weight Guide' }],
    type: 'article'
  },
  robots: { index: true, follow: true }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
