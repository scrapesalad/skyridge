import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import { getBlogPost, getAllBlogSlugs, getCategoryDisplayName } from '@/data/blogData';
import { canonicalUrl, absoluteUrl } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import { BUSINESS, SITE_URL } from '@/lib/site';
import { formatDate, formatDatetime, slugify } from '@/lib/blogHelpers';
import QuoteButton from '@/components/QuoteButton';

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} | Sky Ridge Roofing`,
    description: post.metaDescription,
    keywords: post.semanticKeywords,
    alternates: {
      canonical: canonicalUrl(`/blog/${params.slug}`),
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.lastModified || post.publishedDate,
      authors: ['Sky Ridge Team'],
      url: `/blog/${params.slug}`,
      images: [
        {
          url: post.featuredImage.src,
          alt: post.featuredImage.alt,
        },
      ],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800">
              View All Blog Posts
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Generate BlogPosting schema
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: absoluteUrl(post.featuredImage.src),
    datePublished: post.publishedDate,
    dateModified: post.lastModified || post.publishedDate,
    author: {
      '@type': 'Organization',
      name: 'Sky Ridge Team',
      jobTitle: 'Utah Roofing Experts',
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.name,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/blog/${params.slug}`),
    },
    keywords: post.semanticKeywords.join(', '),
    articleSection: getCategoryDisplayName(post.category),
    wordCount: post.wordCount,
    timeRequired: `PT${post.readingTime}M`,
  };

  // Generate FAQ schema if FAQ exists
  const faqSchema = post.faq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <Header />

      {/* JSON-LD Schema */}
      <JsonLd data={blogPostingSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <article className="min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              <span>/</span>
              <span className="text-gray-900">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section with Featured Image */}
        <section className="relative h-[500px] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          <Image
            src={post.featuredImage.src}
            alt={post.featuredImage.alt}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold">
                  {getCategoryDisplayName(post.category)}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-5xl mx-auto leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-6 text-white/90 text-base">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>Sky Ridge Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <time dateTime={formatDatetime(post.publishedDate)}>
                    {formatDate(post.publishedDate)}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Table of Contents - Sidebar */}
            <aside className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-24">
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {post.sections.map((section, idx) => (
                      <a
                        key={idx}
                        href={`#${slugify(section.heading)}`}
                        className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 py-2 px-3 rounded transition-colors"
                      >
                        {section.heading}
                      </a>
                    ))}
                    {post.faq && post.faq.length > 0 && (
                      <a
                        href="#faq"
                        className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 py-2 px-3 rounded transition-colors"
                      >
                        Frequently Asked Questions
                      </a>
                    )}
                  </nav>
                </div>

                {/* Quick Quote CTA */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg shadow-lg p-6 mt-6">
                  <h4 className="font-bold text-lg mb-2">Need Expert Help?</h4>
                  <p className="text-sm text-blue-100 mb-4">Get a free quote from Utah's trusted roofing experts.</p>
                  <QuoteButton variant="light" className="w-full !py-3">
                    Get Free Quote
                  </QuoteButton>
                </div>
              </div>
            </aside>

            {/* Main Article Content */}
            <div className="lg:col-span-9">
              <article className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10 xl:p-12">
                {/* Author Info */}
                <div className="flex items-center gap-4 pb-6 mb-8 border-b border-gray-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-base mb-0.5">Sky Ridge Team</p>
                    <p className="text-gray-500 text-sm">Utah Roofing Experts</p>
                  </div>
                </div>

                {/* Introduction */}
                <div
                  className="prose prose-lg max-w-none mb-10
                    prose-headings:font-bold prose-headings:text-gray-900
                    prose-p:text-gray-800 prose-p:leading-[1.8] prose-p:mb-5 prose-p:text-[17px] prose-p:font-normal
                    prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
                    prose-strong:text-gray-900 prose-strong:font-semibold
                    prose-em:text-gray-700 prose-em:italic
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2 prose-ul:text-gray-700
                    prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2 prose-ol:text-gray-700
                    prose-li:text-gray-700 prose-li:leading-relaxed prose-li:text-[17px]
                    prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:bg-blue-50 prose-blockquote:py-4 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg"
                  dangerouslySetInnerHTML={{ __html: post.introduction }}
                />

                {/* Key Takeaways Box (if first section has bullet points) */}
                {post.sections[0]?.bulletPoints && post.sections[0].bulletPoints.length > 0 && (
                  <div className="bg-gradient-to-br from-blue-50 via-blue-100/50 to-blue-50 border-l-4 border-blue-600 p-6 md:p-8 mb-12 rounded-r-lg shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Key Takeaways
                    </h3>
                    <ul className="space-y-4">
                      {post.sections[0].bulletPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-4 text-gray-700 text-base leading-relaxed">
                          <svg className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="flex-1">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Content Sections */}
                {post.sections.map((section, idx) => (
                  <section
                    key={idx}
                    id={slugify(section.heading)}
                    className="mb-12 md:mb-16 scroll-mt-24"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600 inline-block">
                      {section.heading}
                    </h2>
                    <div
                      className="prose prose-lg max-w-none mb-8
                        prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mt-8 prose-headings:mb-4
                        prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-gray-900
                        prose-h4:text-xl prose-h4:font-semibold prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-gray-800
                        prose-p:text-gray-800 prose-p:leading-[1.8] prose-p:mb-5 prose-p:text-[17px] prose-p:font-normal
                        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
                        prose-strong:text-gray-900 prose-strong:font-semibold
                        prose-em:text-gray-700 prose-em:italic
                        prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2.5 prose-ul:my-6 prose-ul:text-gray-700
                        prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2.5 prose-ol:my-6 prose-ol:text-gray-700
                        prose-li:text-gray-700 prose-li:leading-[1.7] prose-li:text-[17px] prose-li:font-normal
                        prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:my-6 prose-blockquote:bg-blue-50 prose-blockquote:py-4 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg
                        prose-code:text-sm prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-gray-800
                        prose-pre:bg-gray-900 prose-pre:text-white prose-pre:rounded-lg prose-pre:p-4
                        prose-hr:border-gray-300 prose-hr:my-8"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                    {section.bulletPoints && section.bulletPoints.length > 0 && idx !== 0 && (
                      <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg p-6 md:p-8 my-8 border-l-4 border-blue-500 shadow-sm">
                        <ul className="space-y-3">
                          {section.bulletPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700 text-base leading-relaxed">
                              <svg className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="flex-1">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {section.image && (
                      <figure className="my-10">
                        <div className="relative w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
                          <Image
                            src={section.image.src}
                            alt={section.image.alt}
                            width={800}
                            height={500}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        {section.image.caption && (
                          <figcaption className="text-sm text-gray-600 mt-4 text-center italic max-w-2xl mx-auto">
                            {section.image.caption}
                          </figcaption>
                        )}
                      </figure>
                    )}
                  </section>
                ))}

                {/* Conclusion */}
                <div className="bg-gradient-to-r from-gray-50 via-blue-50 to-gray-50 rounded-xl p-8 md:p-10 my-12 border border-gray-200 shadow-sm">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600 inline-block">Final Thoughts</h2>
                  <div
                    className="prose prose-lg max-w-none mt-6
                      prose-p:text-gray-800 prose-p:leading-[1.8] prose-p:mb-5 prose-p:text-[17px] prose-p:font-normal
                      prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
                      prose-strong:text-gray-900 prose-strong:font-semibold
                      prose-em:text-gray-700 prose-em:italic
                      prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2.5
                      prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2.5
                      prose-li:text-gray-700 prose-li:leading-[1.7] prose-li:text-[17px]"
                    dangerouslySetInnerHTML={{ __html: post.conclusion }}
                  />
                </div>

                {/* FAQ Section */}
                {post.faq && post.faq.length > 0 && (
                  <section id="faq" className="my-16 scroll-mt-24">
                    <div className="text-center mb-12">
                      <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                      </h2>
                      <p className="text-gray-600 text-lg">
                        Quick answers to common questions about {post.title.toLowerCase()}
                      </p>
                    </div>
                    <div className="space-y-6">
                      {post.faq.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all"
                        >
                          <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                            <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{item.question}</span>
                          </h3>
                          <p className="text-gray-700 leading-relaxed ml-9">{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* CTA Section */}
                <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white p-10 md:p-14 rounded-xl my-16 shadow-xl">
                  <div className="max-w-3xl mx-auto text-center">
                    <div className="mb-6">
                      <svg className="w-16 h-16 mx-auto text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      Ready to Work with Utah's Best Roofers?
                    </h3>
                    <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                      Get a free, no-obligation quote from Sky Ridge Roofing. We serve homeowners
                      and businesses throughout Utah with expert roofing solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <QuoteButton variant="light" className="!px-10 !py-5 !text-lg">
                        Get Your Free Quote
                      </QuoteButton>
                      <a
                        href="tel:801-252-6936"
                        className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors text-lg border-2 border-white/30"
                      >
                        Call 801-252-6936
                      </a>
                    </div>
                  </div>
                </section>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="pt-8 border-t border-gray-200">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-gray-600 font-semibold flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        Tags:
                      </span>
                      {post.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-colors cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share Buttons */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-gray-600 font-semibold mb-4">Share this article:</p>
                  <div className="flex gap-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(absoluteUrl(`/blog/${params.slug}`))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Facebook
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(absoluteUrl(`/blog/${params.slug}`))}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      Twitter
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(absoluteUrl(`/blog/${params.slug}`))}&title=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </article>

              {/* Back to Blog Link */}
              <div className="mt-8 text-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to All Blog Posts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
