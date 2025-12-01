import type { Metadata } from 'next';
import Link from 'next/link';
import { collectRoutePaths, classifyPaths, shouldIndex } from '../lib/sitemapUtils';

export const metadata: Metadata = {
  title: 'Sitemap | Icon Dumpsters - Find All Our Pages',
  description: "Complete sitemap of Icon Dumpsters website. Find all our dumpster rental services, city pages, and resources. Fast, affordable dumpster rental services for",
    alternates: {
    canonical: 'https://icondumpsters.com/sitemap',
  },
  robots: 'noindex, follow',
};

export default function SitemapPage() {
  const paths = collectRoutePaths().filter(shouldIndex)
  const { pages, services, resources, cities } = classifyPaths(paths)
  const allLinks = [...pages, ...services, ...resources, ...cities]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Main Pages</h2>
            <ul className="space-y-2">
              {pages.map((href) => (
                <li key={href}><Link href={`https://icondumpsters.com${href === '/' ? '' : href}`} className="text-trust-blue hover:text-trust-blue-dark">{href}</Link></li>
              ))}
            </ul>
          </div>

          {/* City Pages */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">City Pages</h2>
            <ul className="space-y-2">
              {cities.map((href) => (
                <li key={href}><Link href={`https://icondumpsters.com${href}`} className="text-trust-blue hover:text-trust-blue-dark">{href}</Link></li>
              ))}
            </ul>
          </div>

          {/* Service Pages */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Service Pages</h2>
            <ul className="space-y-2">
              {services.map((href) => (
                <li key={href}><Link href={`https://icondumpsters.com${href}`} className="text-trust-blue hover:text-trust-blue-dark">{href}</Link></li>
              ))}
            </ul>
          </div>

          {/* Guide Pages */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Guide Pages</h2>
            <ul className="space-y-2">
              {resources.map((href) => (
                <li key={href}><Link href={`https://icondumpsters.com${href}`} className="text-trust-blue hover:text-trust-blue-dark">{href}</Link></li>
              ))}
            </ul>
          </div>

          {/* Blog Pages */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Blog & Resources</h2>
            <ul className="space-y-2">
              {allLinks.map((href) => (
                <li key={`all-${href}`}><Link href={`https://icondumpsters.com${href === '/' ? '' : href}`} className="text-trust-blue hover:text-trust-blue-dark">{href}</Link></li>
              ))}
            </ul>
          </div>

          {/* Tools & Calculators */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Tools & Calculators</h2>
            <ul className="space-y-2">
              <li><Link href="https://icondumpsters.com/dumpster-calculator" className="text-trust-blue hover:text-trust-blue-dark">Dumpster Calculator</Link></li>
              <li><Link href="https://icondumpsters.com/dumpster-calculator/quote" className="text-trust-blue hover:text-trust-blue-dark">Get Quote</Link></li>
              <li><Link href="https://icondumpsters.com/tonnage-calculator" className="text-trust-blue hover:text-trust-blue-dark">Tonnage Calculator</Link></li>
              <li><Link href="https://icondumpsters.com/estimate-right-dumpster-size-home-cleanout" className="text-trust-blue hover:text-trust-blue-dark">Size Estimator</Link></li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Legal & Policies</h2>
            <ul className="space-y-2">
              <li><Link href="https://icondumpsters.com/privacy-policy" className="text-trust-blue hover:text-trust-blue-dark">Privacy Policy</Link></li>
              <li><Link href="https://icondumpsters.com/terms-of-service" className="text-trust-blue hover:text-trust-blue-dark">Terms of Service</Link></li>
              <li><Link href="https://icondumpsters.com/fees" className="text-trust-blue hover:text-trust-blue-dark">Fees & Policies</Link></li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Company Info</h2>
            <ul className="space-y-2">
              <li><Link href="https://icondumpsters.com/locations" className="text-trust-blue hover:text-trust-blue-dark">Locations</Link></li>
              <li><Link href="https://icondumpsters.com/reviews" className="text-trust-blue hover:text-trust-blue-dark">Reviews</Link></li>
              <li><Link href="https://icondumpsters.com/rating" className="text-trust-blue hover:text-trust-blue-dark">Rating</Link></li>
              <li><Link href="https://icondumpsters.com/free-quote" className="text-trust-blue hover:text-trust-blue-dark">Free Quote</Link></li>
              <li><Link href="https://icondumpsters.com/book" className="text-trust-blue hover:text-trust-blue-dark">Book Online</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us</h2>
            <ul className="space-y-2">
              <li><Link href="https://icondumpsters.com/competitive-pricing" className="text-trust-blue hover:text-trust-blue-dark">Competitive Pricing</Link></li>
              <li><Link href="https://icondumpsters.com/no-hidden-fees" className="text-trust-blue hover:text-trust-blue-dark">No Hidden Fees</Link></li>
              <li><Link href="https://icondumpsters.com/on-time-dumpster-delivery" className="text-trust-blue hover:text-trust-blue-dark">On-Time Delivery</Link></li>
              <li><Link href="https://icondumpsters.com/expert-customer-service" className="text-trust-blue hover:text-trust-blue-dark">Expert Customer Service</Link></li>
              <li><Link href="https://icondumpsters.com/friendly-live-help" className="text-trust-blue hover:text-trust-blue-dark">Friendly Live Help</Link></li>
              <li><Link href="https://icondumpsters.com/property-protection" className="text-trust-blue hover:text-trust-blue-dark">Property Protection</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

