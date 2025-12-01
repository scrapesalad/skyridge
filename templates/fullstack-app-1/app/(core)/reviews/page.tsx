"use client";

import PageTemplate from '@/app/components/PageTemplate';
import Hero from '@/app/components/hero';
import { useState, useEffect } from 'react';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch reviews from API or use static data
    // For now, using static reviews
    setReviews([
      {
        id: 1,
        author: "John S.",
        rating: 5,
        date: "2025-01-15",
        title: "Excellent Service!",
        content: "Icon Dumpsters made our home renovation so much easier. The delivery was on time, and the driver was professional. Would highly recommend!"
      },
      {
        id: 2,
        author: "Sarah M.",
        rating: 5,
        date: "2025-01-10",
        title: "Very Professional",
        content: "Great pricing and excellent customer service. They helped us choose the right size dumpster for our project."
      },
      {
        id: 3,
        author: "Mike R.",
        rating: 5,
        date: "2025-01-05",
        title: "Best Dumpster Rental Company",
        content: "We've used several dumpster companies over the years for our construction business. Icon Dumpsters is by far the best - reliable, affordable, and professional."
      },
      {
        id: 4,
        author: "Lisa T.",
        rating: 5,
        date: "2024-12-28",
        title: "Same-Day Delivery!",
        content: "Called in the morning and had a dumpster delivered that same afternoon. Perfect for our last-minute cleanout project."
      },
      {
        id: 5,
        author: "David K.",
        rating: 5,
        date: "2024-12-20",
        title: "Fair Pricing",
        content: "No hidden fees! The price they quoted was exactly what we paid. Very transparent and honest."
      },
      {
        id: 6,
        author: "Amanda W.",
        rating: 5,
        date: "2024-12-15",
        title: "Helpful Staff",
        content: "The customer service team was incredibly helpful in helping us determine the right size for our garage cleanout."
      }
    ]);
    setLoading(false);
  }, []);

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : "0.0";

  return (
    <PageTemplate>
      <Hero />

      {/* Reviews Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Customer Reviews
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              See what our customers are saying about their experience with Icon Dumpsters
            </p>

            {/* Rating Summary */}
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
              <div className="text-6xl font-bold text-[#0d9488] mb-2">{averageRating}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-8 h-8 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-lg">Based on {reviews.length}+ reviews</p>
            </div>
          </div>

          {/* Reviews List */}
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#0d9488]"></div>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{review.author}</h3>
                      <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                    </div>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
                  <p className="text-gray-600">{review.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0d9488] to-[#6b46c1] rounded-lg shadow-xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Have you used our services?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We'd love to hear about your experience! Your feedback helps us improve and helps others make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/reviews"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0d9488] px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                Leave a Review
              </a>
              <a
                href="tel:801-918-6000"
                className="inline-flex items-center justify-center gap-2 bg-[#10b981] text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-[#059669] transition-all duration-200 shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call 801-918-6000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Customers Choose Icon Dumpsters
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Same-Day Delivery</h3>
              <p className="text-gray-600">Fast, reliable service when you need it most</p>
            </div>

            <div className="text-center">
              <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden fees, ever. What you see is what you pay</p>
            </div>

            <div className="text-center">
              <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Our team helps you choose the perfect size</p>
            </div>

            <div className="text-center">
              <div className="bg-[#0d9488] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Service</h3>
              <p className="text-gray-600">On-time delivery and pickup, every time</p>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}

