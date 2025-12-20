import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-gray-800 text-white mt-auto">
      {/* Top CTA Banner */}
      <div className="bg-gray-900 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 uppercase tracking-tight">
                CONTACT US TODAY FOR A FREE ESTIMATE!
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                No matter the reason or the hour of day, call us to get started on your next lifetime roofing system!
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center bg-primary-light hover:bg-primary text-white px-8 py-4 font-semibold uppercase tracking-wide transition rounded-sm"
              >
                GET A QUOTE{' '}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-primary-dark py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Logo and Slogan */}
            <div>
              <div className="mb-4">
                <Link href="/" className="block mb-3">
                  <Image
                    src="/images/logo/ROOFING.png"
                    alt="Sky Ridge Roofing"
                    width={200}
                    height={80}
                    className="h-16 w-auto object-contain"
                  />
                </Link>
                <p className="text-white text-lg">Roofing Solutions.</p>
              </div>
            </div>

            {/* Browse Our Site */}
            <div>
              <h4 className="text-white font-bold uppercase mb-4 tracking-wide">BROWSE OUR SITE</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white transition flex items-center group">
                    <span className="mr-2">»</span>
                    <span>All Services</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/roof-replacement" className="text-gray-300 hover:text-white transition flex items-center group">
                    <span className="mr-2">»</span>
                    <span>Roof Replacement</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/roof-repairs" className="text-gray-300 hover:text-white transition flex items-center group">
                    <span className="mr-2">»</span>
                    <span>Roof Repairs</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/commercial-roofing" className="text-gray-300 hover:text-white transition flex items-center group">
                    <span className="mr-2">»</span>
                    <span>Commercial Roofing</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/metal-roofing" className="text-gray-300 hover:text-white transition flex items-center group">
                    <span className="mr-2">»</span>
                    <span>Metal Roofing</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/insurance-claims" className="text-gray-300 hover:text-white transition flex items-center group">
                    <span className="mr-2">»</span>
                    <span>Insurance Claims</span>
                  </Link>
                </li>
                <li>
                  <Link href="/locations" className="text-gray-300 hover:text-white transition flex items-center group">
                    <span className="mr-2">»</span>
                    <span>Service Areas</span>
                  </Link>
                </li>
                <li>
                  <Link href="/calculators" className="text-gray-300 hover:text-white transition flex items-center group">
                    <span className="mr-2">»</span>
                    <span>Roofing Calculators</span>
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-300 hover:text-white transition flex items-center group">
                    <span className="mr-2">»</span>
                    <span>Project Gallery</span>
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-gray-300 hover:text-white transition flex items-center group">
                    <span className="mr-2">»</span>
                    <span>Testimonials</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition flex items-center group">
                    <span className="mr-2">»</span>
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white transition flex items-center group">
                    <span className="mr-2">»</span>
                    <span>FAQ</span>
                  </Link>
                </li>
                <li>
                  <Link href="/materials" className="text-gray-300 hover:text-white transition flex items-center group">
                    <span className="mr-2">»</span>
                    <span>Roofing Materials</span>
                  </Link>
                </li>
                <li>
                  <Link href="/financing" className="text-gray-300 hover:text-white transition flex items-center group">
                    <span className="mr-2">»</span>
                    <span>Financing Options</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Office Locations */}
            <div>
              <h4 className="text-white font-bold uppercase mb-4 tracking-wide">MAIN OFFICE: UTAH</h4>
              <div className="space-y-3 mb-6">
                <p className="text-gray-300">
                  <span className="font-semibold">P:</span>{' '}
                  <a href="tel:8012526936" className="hover:text-white transition">
                    801-252-6936
                  </a>
                </p>
                <p className="text-gray-300">Serving all of Utah</p>
              </div>
            </div>

            {/* Get In Touch */}
            <div>
              <h4 className="text-white font-bold uppercase mb-4 tracking-wide">GET IN TOUCH</h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-white mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-gray-300 text-sm">24/7 Customer support</p>
                    <a href="tel:8012526936" className="text-white font-semibold hover:text-primary-light transition">
                      801-252-6936
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-white mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-gray-300 text-sm">Email Us</p>
                    <a href="mailto:Info@skyridgeco.com" className="text-white font-semibold hover:text-primary-light transition">
                      Info@skyridgeco.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-primary-light transition" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-primary-light transition" aria-label="Twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-primary-light transition" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-primary-light transition" aria-label="YouTube">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-primary-light transition" aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 30-Second Roof Estimate Vertical Banner */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden xl:block">
          <Link
            href="/calculators/roofing-cost"
            className="bg-primary-light text-white px-4 py-8 writing-vertical-rl text-center font-bold text-sm hover:bg-primary transition shadow-lg"
            style={{ writingMode: 'vertical-rl' }}
          >
            30-Second Roof Estimate
          </Link>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-gray-900 py-4 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <p>
                © 2025 Sky Ridge Roofing. All rights reserved.
              </p>
              <Link href="/privacy-policy" className="text-primary-light hover:text-primary transition">
                Privacy Policy
              </Link>
              <span className="text-gray-500">|</span>
              <Link href="/terms-of-service" className="text-primary-light hover:text-primary transition">
                Terms of Service
              </Link>
              <span className="text-gray-500">|</span>
              <Link href="/contingency-agreement" className="text-primary-light hover:text-primary transition">
                Contingency Agreement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
