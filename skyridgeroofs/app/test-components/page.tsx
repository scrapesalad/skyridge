'use client';

import { useState } from 'react';
import Image from 'next/image';
import PhoneModal from '@/components/PhoneModal';
import FloatingTextButton from '@/components/FloatingTextButton';
import OptimizedImage from '@/components/OptimizedImage';
import ImageWithFallback from '@/components/ImageWithFallback';
import StrategicInternalLinks from '@/components/StrategicInternalLinks';
import CollapsibleSection, { CollapsibleSectionNative } from '@/components/CollapsibleSection';
import StructuredData from '@/components/StructuredData';
import DeferredScripts from '@/components/DeferredScripts';

export default function TestComponentsPage() {
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);
  const [testStatus, setTestStatus] = useState<Record<string, boolean>>({});

  const markTestPassed = (testName: string) => {
    setTestStatus(prev => ({ ...prev, [testName]: true }));
  };

  const allTestsPassed = Object.keys(testStatus).length >= 10 && Object.values(testStatus).every(v => v);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl font-bold mb-4">🧪 Component Test Suite</h1>
          <p className="text-xl mb-2">Testing all new components from Icon integration</p>
          <div className="flex items-center gap-4 mt-4">
            <div className="bg-white/20 px-4 py-2 rounded">
              Tests Passed: {Object.values(testStatus).filter(v => v).length} / 10
            </div>
            {allTestsPassed && (
              <div className="bg-green-500 px-4 py-2 rounded font-bold animate-pulse">
                ✅ ALL TESTS PASSED!
              </div>
            )}
          </div>
        </div>

        {/* Test 1: PhoneModal */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4">1. PhoneModal Component</h2>
          <p className="text-gray-600 mb-4">
            Tests: Professional phone modal with click-to-call functionality
          </p>
          <button
            onClick={() => {
              setPhoneModalOpen(true);
              markTestPassed('phoneModal');
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Open Phone Modal
          </button>
          {testStatus.phoneModal && <span className="ml-4 text-green-600 font-bold">✅ Tested</span>}
        </section>

        {/* Test 2: FloatingTextButton */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4">2. FloatingTextButton Component</h2>
          <p className="text-gray-600 mb-4">
            Tests: Persistent floating CTA button (check bottom-right corner)
          </p>
          <button
            onClick={() => markTestPassed('floatingButton')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            ✓ Mark as Visible
          </button>
          {testStatus.floatingButton && <span className="ml-4 text-green-600 font-bold">✅ Tested</span>}
          <p className="text-sm text-gray-500 mt-2">
            Look for the blue floating button in the bottom-right corner of the screen
          </p>
        </section>

        {/* Test 3: OptimizedImage */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4">3. OptimizedImage Component</h2>
          <p className="text-gray-600 mb-4">
            Tests: WebP support, loading states, error handling
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold mb-2">Valid Image:</p>
              <OptimizedImage
                src="/images/skyridge/scrap/roofing-job.jpg"
                alt="Test roofing job"
                width={400}
                height={300}
                className="rounded-lg"
                priority={true}
              />
            </div>
            <div>
              <p className="font-semibold mb-2">Invalid Image (tests error handling):</p>
              <OptimizedImage
                src="/images/nonexistent.jpg"
                alt="Test error state"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
          <button
            onClick={() => markTestPassed('optimizedImage')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mt-4"
          >
            ✓ Images Loaded Correctly
          </button>
          {testStatus.optimizedImage && <span className="ml-4 text-green-600 font-bold">✅ Tested</span>}
        </section>

        {/* Test 4: ImageWithFallback */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4">4. ImageWithFallback Component</h2>
          <p className="text-gray-600 mb-4">
            Tests: Graceful fallback to default image on error
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold mb-2">Valid Image:</p>
              <ImageWithFallback
                src="/images/skyridge/scrap/roofing-job.jpg"
                alt="Test fallback valid"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div>
              <p className="font-semibold mb-2">Invalid (should show fallback):</p>
              <ImageWithFallback
                src="/images/invalid-image.jpg"
                fallbackSrc="/images/skyridge/scrap/roofing-job.jpg"
                alt="Test fallback error"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
          <button
            onClick={() => markTestPassed('imageFallback')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mt-4"
          >
            ✓ Fallback Works
          </button>
          {testStatus.imageFallback && <span className="ml-4 text-green-600 font-bold">✅ Tested</span>}
        </section>

        {/* Test 5: CollapsibleSection */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4">5. CollapsibleSection Component</h2>
          <p className="text-gray-600 mb-4">
            Tests: Expandable/collapsible content sections
          </p>

          <div className="space-y-4">
            <CollapsibleSection title="React State Version" defaultOpen={true}>
              <p className="text-gray-700">
                This is a React state-based collapsible section. It uses useState to manage open/closed state.
                Great for dynamic content that needs to track collapse state.
              </p>
            </CollapsibleSection>

            <CollapsibleSectionNative title="Native HTML Version (Better SEO)">
              <p className="text-gray-700">
                This uses native HTML details/summary elements. Better for SEO since the content is always in the DOM.
                Recommended for FAQ pages and important content.
              </p>
            </CollapsibleSectionNative>

            <CollapsibleSectionNative title="Example FAQ Item" defaultOpen={false}>
              <p className="text-gray-700 mb-2">
                <strong>Q: How long does a roof replacement take?</strong>
              </p>
              <p className="text-gray-700">
                A: Most residential roof replacements take 2-5 days depending on size and weather conditions.
              </p>
            </CollapsibleSectionNative>
          </div>

          <button
            onClick={() => markTestPassed('collapsible')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mt-4"
          >
            ✓ Sections Expand/Collapse
          </button>
          {testStatus.collapsible && <span className="ml-4 text-green-600 font-bold">✅ Tested</span>}
        </section>

        {/* Test 6: StrategicInternalLinks */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4">6. StrategicInternalLinks Component</h2>
          <p className="text-gray-600 mb-4">
            Tests: Context-aware internal linking for SEO
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Homepage Links:</h3>
              <StrategicInternalLinks pageType="homepage" />
            </div>

            <div>
              <h3 className="font-semibold mb-3">Service Page Links:</h3>
              <StrategicInternalLinks pageType="service" serviceType="Roof Replacement" />
            </div>

            <div>
              <h3 className="font-semibold mb-3">Calculator Page Links:</h3>
              <StrategicInternalLinks pageType="calculator" />
            </div>
          </div>

          <button
            onClick={() => markTestPassed('internalLinks')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mt-4"
          >
            ✓ Links Display Correctly
          </button>
          {testStatus.internalLinks && <span className="ml-4 text-green-600 font-bold">✅ Tested</span>}
        </section>

        {/* Test 7: StructuredData */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4">7. StructuredData Component</h2>
          <p className="text-gray-600 mb-4">
            Tests: Schema.org structured data for SEO
          </p>

          <div className="bg-gray-100 p-4 rounded mb-4">
            <p className="text-sm text-gray-600 mb-2">Check your browser console for schema.org JSON-LD:</p>
            <button
              onClick={() => {
                const scripts = document.querySelectorAll('script[type="application/ld+json"]');
                console.log('📊 Found Structured Data Scripts:', scripts.length);
                scripts.forEach((script, i) => {
                  console.log(`Schema ${i + 1}:`, JSON.parse(script.textContent || '{}'));
                });
                alert(`Found ${scripts.length} structured data schemas. Check console for details.`);
                markTestPassed('structuredData');
              }}
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition text-sm"
            >
              Inspect Schemas in Console
            </button>
          </div>

          <div className="text-sm text-gray-600 space-y-1">
            <p>✓ LocalBusiness schema</p>
            <p>✓ Organization schema</p>
            <p>✓ Service catalog schema</p>
            <p>✓ Breadcrumb schema</p>
          </div>

          {testStatus.structuredData && <span className="ml-4 text-green-600 font-bold">✅ Tested</span>}
        </section>

        {/* Test 8: DeferredScripts */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4">8. DeferredScripts Component</h2>
          <p className="text-gray-600 mb-4">
            Tests: Performance optimization via requestIdleCallback
          </p>

          <div className="bg-gray-100 p-4 rounded mb-4">
            <p className="text-sm text-gray-600">
              This component defers non-critical JavaScript to idle time. Check browser DevTools Performance tab.
            </p>
          </div>

          <button
            onClick={() => markTestPassed('deferredScripts')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            ✓ Component Loaded
          </button>
          {testStatus.deferredScripts && <span className="ml-4 text-green-600 font-bold">✅ Tested</span>}
        </section>

        {/* Test 9: Middleware (Security Headers) */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4">9. Middleware (Security Headers)</h2>
          <p className="text-gray-600 mb-4">
            Tests: Security headers, HTTPS enforcement, canonical URLs
          </p>

          <div className="bg-gray-100 p-4 rounded mb-4">
            <p className="text-sm text-gray-600 mb-2">Check Network tab in DevTools for these headers:</p>
            <ul className="text-sm space-y-1">
              <li>✓ X-Frame-Options: DENY</li>
              <li>✓ X-Content-Type-Options: nosniff</li>
              <li>✓ Content-Security-Policy</li>
              <li>✓ Referrer-Policy</li>
            </ul>
          </div>

          <button
            onClick={() => {
              console.log('🔒 Check Network tab → Response Headers');
              markTestPassed('middleware');
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            ✓ Headers Applied
          </button>
          {testStatus.middleware && <span className="ml-4 text-green-600 font-bold">✅ Tested</span>}
        </section>

        {/* Test 10: LazyComponents */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4">10. LazyComponents Wrapper</h2>
          <p className="text-gray-600 mb-4">
            Tests: Dynamic imports for code splitting
          </p>

          <div className="bg-gray-100 p-4 rounded mb-4">
            <p className="text-sm text-gray-600">
              LazyComponents.tsx provides dynamic imports for all major components.
              Check Network tab to see components loaded on demand.
            </p>
          </div>

          <button
            onClick={() => markTestPassed('lazyComponents')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            ✓ Wrapper Created
          </button>
          {testStatus.lazyComponents && <span className="ml-4 text-green-600 font-bold">✅ Tested</span>}
        </section>

        {/* Summary */}
        {allTestsPassed && (
          <section className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">🎉 All Tests Passed!</h2>
            <p className="text-lg mb-4">
              All components from the Icon integration are working correctly.
            </p>
            <div className="bg-white/20 p-4 rounded">
              <h3 className="font-bold mb-2">Next Steps:</h3>
              <ul className="space-y-1">
                <li>✓ Integrate PhoneModal into Header</li>
                <li>✓ Add FloatingTextButton to Layout</li>
                <li>✓ Replace JsonLd with StructuredData</li>
                <li>✓ Update next.config.js for performance</li>
                <li>✓ Use components throughout site</li>
              </ul>
            </div>
          </section>
        )}
      </div>

      {/* Components */}
      <PhoneModal isOpen={phoneModalOpen} onClose={() => setPhoneModalOpen(false)} />
      <FloatingTextButton />
      <DeferredScripts />
      <StructuredData
        type="homepage"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Test Components', url: '/test-components' }
        ]}
      />
    </div>
  );
}
