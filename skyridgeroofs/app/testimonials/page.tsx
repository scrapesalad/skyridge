import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import QuoteButton from '@/components/QuoteButton';

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials | Sky Ridge Roofing',
  description: 'Read what our customers say about Sky Ridge Roofing. Real reviews from satisfied homeowners throughout Utah.',
  openGraph: {
    title: 'Customer Reviews - Sky Ridge Roofing',
    description: 'Read what our customers say about Sky Ridge Roofing.',
    type: 'website',
  },
};

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Salt Lake City, UT',
    rating: 5,
    text: 'Sky Ridge Roofing did an amazing job replacing our roof. The team was professional, clean, and completed the work on time. Highly recommend!',
    image: '/images/skyridge/skyridge_image_010.webp',
  },
  {
    name: 'Michael Chen',
    location: 'Provo, UT',
    rating: 5,
    text: 'We had storm damage and needed help with our insurance claim. Sky Ridge Roofing handled everything and made the process so easy. Great service!',
    image: '/images/skyridge/skyridge_image_011.webp',
  },
  {
    name: 'Jennifer Martinez',
    location: 'Ogden, UT',
    rating: 5,
    text: 'Fast response time and excellent workmanship. Our new roof looks fantastic and we feel confident it will last for years to come.',
    image: '/images/skyridge/skyridge_image_012.webp',
  },
  {
    name: 'David Thompson',
    location: 'Sandy, UT',
    rating: 5,
    text: 'The team at Sky Ridge Roofing was transparent about pricing and kept us informed throughout the entire process. Very satisfied with the results.',
    image: '/images/skyridge/skyridge_image_013.webp',
  },
  {
    name: 'Lisa Anderson',
    location: 'West Valley City, UT',
    rating: 5,
    text: 'We needed emergency roof repairs after a storm. Sky Ridge Roofing came out quickly and fixed the problem. Professional and reliable!',
    image: '/images/skyridge/skyridge_image_014.webp',
  },
  {
    name: 'Robert Williams',
    location: 'Orem, UT',
    rating: 5,
    text: 'Best roofing company in Utah! They helped us choose the right materials and the installation was flawless. Couldn\'t be happier.',
    image: '/images/skyridge/skyridge_image_015.webp',
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
            src="/images/skyridge/skyridge_image_017.webp"
            alt="Customer Testimonials"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 drop-shadow-2xl">
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Customer Reviews</h1>
              <p className="text-xl drop-shadow-lg">What Our Customers Say About Us</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Overall Rating */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12 text-center">
            <div className="flex justify-center items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-3xl font-bold mb-2">5.0 out of 5.0</p>
            <p className="text-gray-600">Based on 50+ customer reviews</p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-blue-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Happy Customers?</h2>
            <p className="text-xl mb-6">Get a free estimate and experience the Sky Ridge Roofing difference</p>
            <QuoteButton className="bg-white text-blue-700 hover:bg-gray-100">
              Get Free Quote
            </QuoteButton>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
