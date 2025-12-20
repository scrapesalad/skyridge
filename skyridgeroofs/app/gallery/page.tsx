import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Roofing Gallery | Sky Ridge Roofing - Before & After Photos',
  description: 'View our roofing project gallery featuring before and after photos of completed roof replacements, repairs, and installations throughout Utah.',
  alternates: { canonical: canonicalUrl('/gallery') },
  openGraph: {
    title: 'Roofing Gallery - Sky Ridge Roofing',
    description: 'View our roofing project gallery featuring before and after photos.',
    type: 'website',
  },
};

export default function Page() {
  // All 49 images for the gallery
  const allImages = Array.from({ length: 49 }, (_, i) => i + 1);
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-96 mb-12">
          <Image
            src="/images/skyridge/scrap/roofing-center-04-qg13nktj9cx8cworod4wf2skk8m3jzkgal4zrz09ao.jpg"
            alt="Project Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 drop-shadow-2xl">
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Project Gallery</h1>
              <p className="text-xl drop-shadow-lg">See Our Quality Workmanship</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Before & After Section */}
          <div className="mb-16">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Before & After Transformations</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See the dramatic transformations we've achieved for our customers. From damaged and worn roofs to beautiful, durable roofing systems.
              </p>
            </div>

            {/* Before & After Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
              {[
                { before: 'IMG_2312.JPG', after: 'IMG_2317.JPG' },
                { before: 'IMG_2313.JPG', after: 'IMG_2319.JPG' },
                { before: 'IMG_2314.JPG', after: 'IMG_2320.JPG' },
                { before: 'IMG_2315.JPG', after: 'IMG_2321.JPG' },
              ].map((pair, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    {/* Before Image */}
                    <div className="relative h-64 border-b-4 border-red-500">
                      <Image
                        src={`/images/beforeafter/${pair.before}`}
                        alt={`Before - Project ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded font-bold text-sm shadow-lg">
                        BEFORE
                      </div>
                    </div>
                    {/* After Image */}
                    <div className="relative h-64 border-t-4 border-green-500">
                      <Image
                        src={`/images/beforeafter/${pair.after}`}
                        alt={`After - Project ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded font-bold text-sm shadow-lg">
                        AFTER
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50">
                    <p className="text-sm text-gray-600 text-center font-medium">
                      Project Transformation #{index + 1}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Recent Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse through our gallery of completed roofing projects. From full roof replacements to emergency repairs, see the quality workmanship that sets Sky Ridge Roofing apart.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {allImages.map((num) => (
              <div key={num} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src={`/images/skyridge/skyridge_image_${String(num).padStart(3, '0')}.webp`}
                  alt={`Roofing project ${num}`}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 font-semibold">
                    View Project
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Project Categories */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Project Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/finishing-ceramic-roof-768x512.webp"
                    alt="Roof Replacements"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Roof Replacements</h3>
                  <p className="text-gray-600 mb-4">Complete roof replacement projects using premium materials</p>
                  <Link href="/services/roof-replacement" className="text-blue-600 font-semibold hover:text-blue-800">
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/flashing-1.jpeg"
                    alt="Roof Repairs"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Roof Repairs</h3>
                  <p className="text-gray-600 mb-4">Expert repairs to fix leaks, damage, and wear</p>
                  <Link href="/services/roof-repairs" className="text-blue-600 font-semibold hover:text-blue-800">
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/skyridge/scrap/commercial-roof-installation.jpg"
                    alt="Commercial Projects"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Commercial Projects</h3>
                  <p className="text-gray-600 mb-4">Large-scale commercial roofing installations</p>
                  <Link href="/services/additional-services" className="text-blue-600 font-semibold hover:text-blue-800">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-6">Get a free estimate and see how we can transform your roof</p>
            <Link href="/contact" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

