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
                  {material.name === 'Metal Roofing' && (
                    <div className="mt-6">
                      <Link
                        href="/services/metal-roofing"
                        className="inline-flex items-center text-blue-700 font-semibold hover:underline"
                      >
                        Explore Metal Roofing options →
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Durability Comparison */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">What are the Most Durable Roofing Materials?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Durability is a key factor when choosing roofing materials. Here's how different materials compare in terms of lifespan:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-gray-800 p-4 bg-gray-50">
                <h3 className="text-xl font-bold mb-2">1. Slate Roofing - 100+ Years</h3>
                <p className="text-gray-700">
                  Natural stone slate is the most durable roofing material available. It's fireproof, requires minimal maintenance, and can last over a century. However, it's also the most expensive option and requires a strong roof structure to support its weight.
                </p>
              </div>
              <div className="border-l-4 border-blue-700 p-4 bg-blue-50">
                <h3 className="text-xl font-bold mb-2">2. Metal Roofing - 50+ Years</h3>
                <p className="text-gray-700">
                  Metal roofing, especially standing seam systems with quality coatings, can last 50+ years. It's fire-resistant, energy-efficient, and performs exceptionally well in Utah's freeze-thaw cycles. Metal is an excellent balance of durability and cost.
                </p>
              </div>
              <div className="border-l-4 border-orange-600 p-4 bg-orange-50">
                <h3 className="text-xl font-bold mb-2">3. Tile Roofing - 50-100 Years</h3>
                <p className="text-gray-700">
                  Clay or concrete tiles are extremely durable and fire-resistant. They can last 50-100 years with proper maintenance. Tiles are excellent for hot climates and high wind areas, making them a great choice for Utah homes.
                </p>
              </div>
              <div className="border-l-4 border-purple-600 p-4 bg-purple-50">
                <h3 className="text-xl font-bold mb-2">4. Synthetic Slate/Tile - 40-60 Years</h3>
                <p className="text-gray-700">
                  Modern synthetic materials that mimic natural slate or tile offer excellent durability (40-60 years) while being lighter and more cost-effective than their natural counterparts.
                </p>
              </div>
              <div className="border-l-4 border-green-600 p-4 bg-green-50">
                <h3 className="text-xl font-bold mb-2">5. Asphalt Shingles - 20-30 Years</h3>
                <p className="text-gray-700">
                  The most common roofing material, asphalt shingles offer good durability (20-30 years) at an affordable price point. Premium architectural shingles can last up to 30 years, while basic 3-tab shingles typically last 15-20 years.
                </p>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-gray-700">
                <strong>Important:</strong> Actual lifespan depends on proper installation, maintenance, local weather conditions, and roof pitch. In Utah's climate with freeze-thaw cycles, metal and tile perform exceptionally well. Always work with a licensed professional to ensure proper installation.
              </p>
            </div>
          </div>

          {/* Style Selection Guide */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">How to Choose a Roofing Style</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Choosing the right roofing style involves considering your home's architecture, local climate, budget, and personal preferences. Here's a guide to help you decide:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Consider Your Home's Architecture</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Traditional homes:</strong> Asphalt shingles or tiles complement classic designs</li>
                  <li><strong>Modern homes:</strong> Metal or flat roofing systems (TPO/EPDM) suit contemporary styles</li>
                  <li><strong>Historic homes:</strong> Slate or tile maintain authentic character</li>
                  <li><strong>Ranch-style homes:</strong> Asphalt shingles or metal work well</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Consider Your Roof Slope</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Steep slopes:</strong> Shingles, tiles, metal, or slate work well</li>
                  <li><strong>Low-slope roofs:</strong> Metal or specialized systems required</li>
                  <li><strong>Flat roofs:</strong> TPO, EPDM, or modified bitumen systems</li>
                  <li><strong>Complex roofs:</strong> Materials that handle valleys and dormers well</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Consider Your Budget</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Budget-friendly:</strong> Asphalt shingles offer best value</li>
                  <li><strong>Mid-range:</strong> Metal roofing provides durability at moderate cost</li>
                  <li><strong>Premium:</strong> Tile, slate, or high-end metal systems</li>
                  <li><strong>Long-term value:</strong> Consider lifespan vs. initial cost</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Consider Energy Efficiency</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Cool roofs:</strong> Light-colored metal or TPO reduce cooling costs</li>
                  <li><strong>Reflective materials:</strong> Can lower attic temperatures significantly</li>
                  <li><strong>Insulation:</strong> Works with any material but affects overall efficiency</li>
                  <li><strong>Utah climate:</strong> Consider both heating and cooling needs</li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-gray-700">
                <strong>Our Recommendation:</strong> The best roofing style for your home depends on multiple factors. We recommend scheduling a free consultation where we can assess your home's architecture, roof structure, and your specific needs to recommend the best options. We'll help you balance aesthetics, durability, energy efficiency, and budget.
              </p>
            </div>
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

