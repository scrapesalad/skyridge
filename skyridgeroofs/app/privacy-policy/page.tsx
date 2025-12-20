import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Sky Ridge Roofing collects and uses information.',
  alternates: { canonical: canonicalUrl('/privacy-policy') },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">
            Last updated: June 15, 2025 • Sky Ridge Roofing LLC • www.skyridgeco.com
          </p>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-bold">1) Overview</h2>
            <p className="text-lg leading-relaxed">
              We respect your privacy. This policy explains what information we collect, how we use
              it, and the choices you have when you visit our website or request roofing services.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-bold">2) Information we collect</h2>
            <p className="text-lg leading-relaxed">We may collect:</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>
                <span className="font-semibold">Contact details</span> such as your name, phone
                number, email address, and service address when you request an estimate or contact
                us.
              </li>
              <li>
                <span className="font-semibold">Basic usage data</span> (for example, device type,
                approximate location, and pages visited) collected through standard website logs and
                cookies.
              </li>
            </ul>
            <p className="text-lg leading-relaxed">
              We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-bold">3) How we use your information</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Respond to requests for estimates, service, or questions.</li>
              <li>Schedule inspections and provide project updates.</li>
              <li>Improve the site’s performance and user experience.</li>
              <li>Comply with legal, safety, and security obligations.</li>
            </ul>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-bold">4) Sharing of information</h2>
            <p className="text-lg leading-relaxed">
              We do not sell your personal information. We may share information only when needed
              to deliver services (for example, coordinating with an insurance provider at your
              request) or when required by law.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-bold">5) Cookies and analytics</h2>
            <p className="text-lg leading-relaxed">
              We may use cookies to understand site traffic and improve performance. You can control
              cookies through your browser settings.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-bold">6) Data security</h2>
            <p className="text-lg leading-relaxed">
              We use reasonable administrative, technical, and physical safeguards to protect your
              information. No method of transmission or storage is 100% secure.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-bold">7) Third-party links</h2>
            <p className="text-lg leading-relaxed">
              Our site may link to third-party websites. Their privacy practices may differ from
              ours, so we encourage you to review their policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">8) Contact</h2>
            <p className="text-lg leading-relaxed">
              Questions about this policy? Email{' '}
              <a className="text-blue-700 hover:underline" href="mailto:privacy@skyridgeco.com">
                privacy@skyridgeco.com
              </a>{' '}
              or call{' '}
              <a className="text-blue-700 hover:underline" href="tel:8012526936">
                801-252-6936
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

