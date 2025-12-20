import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Website terms for Sky Ridge Roofing.',
  alternates: { canonical: canonicalUrl('/terms-of-service') },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-600 mb-8">
            Last updated: June 15, 2025 • Sky Ridge Roofing LLC • www.skyridgeco.com
          </p>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-bold">1) Using this website</h2>
            <p className="text-lg leading-relaxed">
              By accessing or using this website, you agree to these Terms. If you do not agree,
              please do not use the site.
            </p>
            <p className="text-lg leading-relaxed">
              You agree not to misuse the site, including by attempting unauthorized access,
              submitting false information, or using automated tools to scrape or disrupt the site.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-bold">2) Estimates and quotes</h2>
            <p className="text-lg leading-relaxed">
              Any estimate provided through the site, email, phone, or a calculator tool is an
              informational starting point and is non-binding. Final pricing depends on an on-site
              inspection, scope of work, materials selection, and (if applicable) insurance approval.
            </p>
            <p className="text-lg leading-relaxed">
              No contract is created until a written agreement is signed by both parties.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-bold">3) Intellectual property</h2>
            <p className="text-lg leading-relaxed">
              The site content, including text, images, and branding, is owned by or licensed to Sky
              Ridge Roofing LLC. You may not copy or redistribute content without written permission.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-bold">4) Third-party links</h2>
            <p className="text-lg leading-relaxed">
              The site may link to third-party websites. We do not control those sites and are not
              responsible for their content or policies.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-bold">5) Disclaimers and limitation of liability</h2>
            <p className="text-lg leading-relaxed">
              This website is provided “as is” and may be updated at any time. To the fullest extent
              permitted by law, Sky Ridge Roofing LLC is not liable for indirect or consequential
              damages related to your use of the site.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-bold">6) Changes to these Terms</h2>
            <p className="text-lg leading-relaxed">
              We may update these Terms from time to time. Continued use of the site after changes
              are posted means you accept the updated Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">7) Contact</h2>
            <p className="text-lg leading-relaxed">
              If you have questions about these Terms, contact Sky Ridge Roofing LLC at{' '}
              <a className="text-blue-700 hover:underline" href="mailto:info@skyridgeco.com">
                info@skyridgeco.com
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

