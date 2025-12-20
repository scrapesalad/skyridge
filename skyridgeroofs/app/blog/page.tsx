'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import BlogPostCard from '@/components/BlogPostCard';
import { getAllBlogPosts, getAllCategories, getBlogPostsByCategory, BlogCategory, getCategoryDisplayName } from '@/data/blogData';

// Note: Since we're using 'use client', we'll export metadata from a separate metadata file
// For now, the metadata is handled in the parent layout

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const allCategories = getAllCategories();
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');

  // Filter posts based on selected category
  const displayedPosts =
    selectedCategory === 'all' ? allPosts : getBlogPostsByCategory(selectedCategory);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Roofing Blog & Resources
              </h1>
              <p className="text-xl text-blue-100">
                Expert roofing advice, tips, and guides for Utah homeowners and businesses.
                Learn from our experienced team about roof replacement, repairs, materials, and
                more.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        {allCategories.length > 0 && (
          <section className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center gap-4 overflow-x-auto">
                <span className="text-gray-700 font-semibold whitespace-nowrap">
                  Filter by:
                </span>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Posts ({allPosts.length})
                </button>
                {allCategories.map((category) => {
                  const categoryPosts = getBlogPostsByCategory(category);
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {getCategoryDisplayName(category)} ({categoryPosts.length})
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="container mx-auto px-4 py-12">
          {displayedPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                No blog posts found. Check back soon for expert roofing content!
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-gray-600">
                  Showing {displayedPosts.length} {displayedPosts.length === 1 ? 'post' : 'posts'}
                  {selectedCategory !== 'all' &&
                    ` in ${getCategoryDisplayName(selectedCategory)}`}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedPosts.map((post) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          )}
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your Roofing Project?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get a free, no-obligation quote from Sky Ridge Roofing. We serve homeowners and
                businesses throughout Utah with expert roofing solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:801-252-6936"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Call 801-252-6936
                </a>
                <a
                  href="/contact"
                  className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
