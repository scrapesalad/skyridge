"use client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <h4 className="text-white font-bold mb-4">{{siteTitle}}</h4>
            <p className="text-sm text-white/80 mb-4">
              {{tagline}}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-white hover:text-teal-100 transition-colors">Home</a></li>
              <li><a href="/about" className="text-white hover:text-teal-100 transition-colors">About</a></li>
              <li><a href="/services" className="text-white hover:text-teal-100 transition-colors">Services</a></li>
              <li><a href="/contact" className="text-white hover:text-teal-100 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="{{phoneLink}}" className="text-white hover:text-teal-100 transition-colors">
                  {{phoneNumber}}
                </a>
              </li>
              <li>
                <a href="mailto:{{email}}" className="text-white hover:text-teal-100 transition-colors">
                  {{email}}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-100 transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-100 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-100 transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-sm text-white">
              <p>{{footerText}}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

