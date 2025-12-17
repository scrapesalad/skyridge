import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roofing Materials & Types | Sky Ridge Roofing',
  description: 'Explore our premium roofing materials including asphalt shingles, metal roofing, tile, and more. Find the perfect roof for your home.',
  openGraph: {
    title: 'Roofing Materials - Sky Ridge Roofing',
    description: 'Explore our premium roofing materials including asphalt shingles, metal roofing, tile, and more.',
    type: 'website',
  },
};

const materials = [
  {
    name: 'Asphalt Shingles',
    description: 'The most popular roofing material in America. Affordable, durable, and available in a wide variety of colors and styles.',
    benefits: ['Cost-effective', 'Easy installation', 'Wide variety of styles', 'Good warranty options'],
    image: '/images/skyridge/skyridge_image_020.webp',
  },
  {
    name: 'Metal Roofing',
    description: 'Long-lasting and energy-efficient metal roofing that can last 50+ years. Perfect for Utah\'s weather conditions.',
    benefits: ['50+ year lifespan', 'Energy efficient', 'Fire resistant', 'Low maintenance'],
    image: '/images/skyridge/skyridge_image_021.webp',
  },
  {
    name: 'Tile Roofing',
    description: 'Beautiful and durable tile roofing that adds elegance to any home. Excellent for hot climates and high wind areas.',
    benefits: ['Extremely durable', 'Fire resistant', 'Aesthetic appeal', 'Long lifespan'],
    image: '/images/skyridge/skyridge_image_022.webp',
  },
  {
    name: 'Slate Roofing',
    description: 'Premium natural stone roofing that can last over 100 years. The ultimate in durability and elegance.',
    benefits: ['100+ year lifespan', 'Natural beauty', 'Fireproof', 'Low maintenance'],
    image: '/images/skyridge/skyridge_image_023.webp',
  },
  {
    name: 'Synthetic Roofing',
    description: 'Modern synthetic materials that mimic the look of natural materials while offering superior performance.',
    benefits: ['Lightweight', 'Durable', 'Cost-effective', 'Various styles'],
    image: '/images/skyridge/skyridge_image_024.webp',
  },
  {
    name: 'Flat Roofing',
    description: 'Specialized materials for flat and low-slope roofs. Perfect for commercial buildings and modern home designs.',
    benefits: ['Waterproof', 'Energy efficient', 'Modern aesthetic', 'Easy maintenance'],
    image: '/images/skyridge/skyridge_image_025.webp',
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-96 mb-12">
          <Image
            src="/images/skyridge/skyridge_image_019.webp"
            alt="Roofing Materials"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 drop-shadow-2xl">
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Roofing Materials</h1>
              <p className="text-xl drop-shadow-lg">Premium Materials for Your Home</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Choose the Perfect Roofing Material</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Sky Ridge Roofing, we offer a wide variety of premium roofing materials to suit your style, budget, and needs. Our expert team will help you choose the perfect material for your home.
            </p>
          </div>

          {/* Materials Grid */}
          <div className="space-y-12 mb-12">
            {materials.map((material, index) => (
              <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={material.image}
                      alt={material.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-3xl font-bold mb-4">{material.name}</h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{material.description}</p>
                  <h4 className="text-xl font-semibold mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {material.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-blue-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Not Sure Which Material is Right for You?</h2>
            <p className="text-xl mb-6">Our roofing experts will help you choose the perfect material based on your home, budget, and preferences.</p>
            <Link href="/contact" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
              Get Expert Advice
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

