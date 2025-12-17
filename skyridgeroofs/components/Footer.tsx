import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sky Ridge Roofing</h3>
            <p className="text-gray-300 mb-2">Expert roofing solutions for your home</p>
            <p className="text-gray-300">UT License # 14235218-5501</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition">About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition">Services</Link></li>
              <li><Link href="/locations" className="text-gray-300 hover:text-white transition">Locations</Link></li>
              <li><Link href="/materials" className="text-gray-300 hover:text-white transition">Materials</Link></li>
              <li><Link href="/testimonials" className="text-gray-300 hover:text-white transition">Reviews</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-white transition">Gallery</Link></li>
              <li><Link href="/financing" className="text-gray-300 hover:text-white transition">Financing</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">Info@skyridgeco.com</p>
            <p className="text-gray-300 mb-2">801-252-6936</p>
            <div className="mt-4 space-y-2">
              <Link href="/terms-of-service" className="text-gray-300 hover:text-white transition text-sm block">Terms of Service</Link>
              <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition text-sm block">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 text-sm">
          <p>© 2025 Sky Ridge Roofing. All rights reserved.</p>
          <p className="mt-2">Sky Ridge Roofing LLC</p>
        </div>
      </div>
    </footer>
  );
}

