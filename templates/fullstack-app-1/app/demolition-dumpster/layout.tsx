import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Demolition Dumpster Rental for Commercial & Construction Projects | Icon Dumpsters",
  description: "Specialized demolition dumpster rentals for contractors, construction companies, and roofers. Heavy-duty dirt and concrete dumpsters for commercial demolition projects in Utah. Get instant quotes.",
  keywords: "demolition dumpster, commercial demolition dumpster, construction dumpster rental, concrete dumpster, dirt dumpster, contractor dumpster rental, roofing dumpster, Utah demolition disposal",
  alternates: { 
    canonical: 'https://icondumpsters.com/demolition-dumpster' 
  },
  openGraph: {
    locale: 'en_US',
    siteName: 'Icon Dumpsters',
    title: "Demolition Dumpster Rental for Commercial & Construction Projects | Icon Dumpsters",
    description: "Specialized demolition dumpster rentals for contractors, construction companies, and roofers. Heavy-duty dirt and concrete dumpsters for commercial demolition projects in Utah.",
    url: 'https://icondumpsters.com/demolition-dumpster',
    type: 'website',
    images: [{
      url: '/images/optimized/icondumpsters_general_2484955712329217818_enhance_2_1x_textai.jpg',
      width: 1200,
      height: 630,
      alt: 'Demolition Dumpster Rental for Commercial & Construction Projects'
    }]
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DemolitionDumpsterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

