import { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import postsData from '../../../../posts-metadata.json'
import BlogRelatedPosts from '../../../components/BlogRelatedPosts'

interface Post {
  slug: string
  title: string
  url: string
  lastmod: string
  priority: number
}

const posts: Post[] = postsData as Post[]

const NOINDEX_SLUGS = new Set<string>(['test-route'])

// Pre-generate all blog posts at build time to prevent crawler timeouts
// Blog posts are static content and should be pre-generated, not generated on-demand
export const dynamic = 'force-static'

// Category mapping function (same as in original)
function getCategoryFromSlug(slug: string): string {
  const slugLower = slug.toLowerCase();
  
  if (slugLower.includes('winter') || slugLower.includes('spring') || 
      slugLower.includes('summer') || slugLower.includes('autumn') || 
      slugLower.includes('fall')) {
    return 'seasonal-projects';
  }
  
  if (slugLower.includes('renovation') || slugLower.includes('remodel') || 
      slugLower.includes('upgrade') || slugLower.includes('renovate')) {
    return 'home-renovations';
  }
  
  if (slugLower.includes('declutter') || slugLower.includes('cleanout') || 
      slugLower.includes('organize') || slugLower.includes('cleanup') ||
      slugLower.includes('downsize') || slugLower.includes('estate') ||
      slugLower.includes('closet') || slugLower.includes('garage')) {
    return 'decluttering-cleanouts';
  }
  
  if (slugLower.includes('yard') || slugLower.includes('garden') || 
      slugLower.includes('landscap') || slugLower.includes('outdoor') ||
      slugLower.includes('patio') || slugLower.includes('deck')) {
    return 'yard-landscaping';
  }
  
  if (slugLower.includes('dumpster') && (slugLower.includes('service') || 
      slugLower.includes('rental') || slugLower.includes('faq') ||
      slugLower.includes('guide') || slugLower.includes('tip') ||
      slugLower.includes('permit') || slugLower.includes('size') ||
      slugLower.includes('bin'))) {
    return 'dumpster-services';
  }
  
  if (slugLower.includes('home-improvement') || slugLower.includes('diy') ||
      slugLower.includes('project') || slugLower.includes('contractor') ||
      slugLower.includes('decor') || slugLower.includes('trends') ||
      slugLower.includes('attic') || slugLower.includes('barndominium') ||
      slugLower.includes('living-room') || slugLower.includes('sunroom')) {
    return 'home-improvement';
  }
  
  return 'blog';
}

export async function generateStaticParams() {
  return posts.map((post) => {
    const category = getCategoryFromSlug(post.slug);
    return {
      category,
      slug: post.slug,
    };
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}): Promise<Metadata> {
  const { category, slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found | Icon Dumpsters Utah Dumpster Rental',
      description: 'The blog post you\'re looking for doesn\'t exist. Browse our dumpster rental blog for expert tips, guides, and insights.',
      robots: {
        index: false,
        follow: true,
      },
    }
  }

  // Performance: Fast category verification - use correct category from post URL if available
  let expectedCategory: string;
  if (post.url && post.url.startsWith('/blog/')) {
    // Extract category from post URL (e.g., /blog/dumpster-services/slug -> dumpster-services)
    const urlParts = post.url.split('/');
    if (urlParts.length >= 3 && urlParts[1] === 'blog') {
      expectedCategory = urlParts[2];
    } else {
      expectedCategory = getCategoryFromSlug(post.slug);
    }
  } else {
    expectedCategory = getCategoryFromSlug(post.slug);
  }
  
  // Use the correct category for metadata (even if URL category is wrong, metadata should be correct)
  const correctCategory = expectedCategory;

  // Generate SEO-optimized description (max 160 characters)
  const baseDescription = `${post.title}. Expert advice from Icon Dumpsters, Utah's trusted dumpster rental service.`;
  const description = baseDescription.length > 160 
    ? `${post.title.substring(0, 100)}. Expert dumpster rental tips from Icon Dumpsters in Utah.`
    : baseDescription;
  const finalDescription = description.length > 160 
    ? description.substring(0, 157) + '...'
    : description;

  // Generate SEO-optimized title (max 60 characters, with brand = 58 for title)
  const titleWithBrand = `${post.title} | Icon Dumpsters`;
  const optimizedTitle = titleWithBrand.length > 60
    ? (() => {
        const truncated = post.title.substring(0, 55);
        const lastSpace = truncated.lastIndexOf(' ');
        return (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '... | Icon Dumpsters';
      })()
    : titleWithBrand;

  // Use correct category for canonical URL to ensure proper indexing
  const canonicalUrl = `https://icondumpsters.com/blog/${correctCategory}/${slug}`;

  return {
    title: optimizedTitle,
    description: finalDescription,
    openGraph: {
      title: optimizedTitle,
      description: finalDescription,
      type: 'article',
      publishedTime: post.lastmod,
      modifiedTime: post.lastmod,
      authors: ['Icon Dumpsters'],
      url: canonicalUrl,
      siteName: 'Icon Dumpsters',
      locale: 'en_US',
      images: [
        {
          url: 'https://icondumpsters.com/IconDumpsters_Logo_Vector_Pantone267DarkerPurple.png',
          width: 1200,
          height: 630,
          alt: 'Icon Dumpsters - Professional Dumpster Rental Services in Utah',
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: optimizedTitle,
      description: finalDescription,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: NOINDEX_SLUGS.has(slug)
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  }
}

// Content mapping for each post type (same as original)
function getPostContent(post: Post) {
  const slug = post.slug
  const title = post.title

  // Determine post category and generate content accordingly
  if (slug.includes('winter') || slug.includes('spring') || slug.includes('summer') || slug.includes('autumn') || slug.includes('fall')) {
    return {
      category: 'Seasonal Projects',
      intro: `Planning seasonal home projects? ${title.includes('Winter') ? 'Winter' : title.includes('Spring') ? 'Spring' : title.includes('Summer') ? 'Summer' : 'Fall'} is the perfect time to tackle home improvements that require proper waste disposal. Icon Dumpsters provides reliable dumpster rental services throughout Utah to help you manage debris efficiently.`,
      sections: [
        {
          heading: 'Why Rent a Dumpster for Seasonal Projects?',
          content: 'Seasonal home improvement projects often generate significant amounts of waste. From yard debris to renovation materials, having a dumpster on-site makes cleanup efficient and keeps your property safe and organized.'
        },
        {
          heading: 'Dumpster Sizes for Your Project',
          content: 'Icon Dumpsters offers 15-yard, 20-yard, and 30-yard dumpsters to match your project size. Our experts can help you determine the right size based on your specific needs.'
        },
        {
          heading: 'Service Areas in Utah',
          content: 'We proudly serve Salt Lake City, West Jordan, Sandy, Murray, Draper, and surrounding areas throughout Salt Lake County and beyond.'
        }
      ]
    }
  }

  if (slug.includes('renovation') || slug.includes('remodel') || slug.includes('upgrade')) {
    return {
      category: 'Home Renovations',
      intro: `${title}. When tackling home renovation projects, proper waste management is crucial for safety and efficiency. Icon Dumpsters provides reliable roll-off dumpster rentals throughout Utah to keep your project site clean and organized.`,
      sections: [
        {
          heading: 'Renovation Waste Management',
          content: 'Home renovations generate various types of debris including drywall, flooring, cabinets, fixtures, and more. Our dumpsters are perfect for containing all your renovation waste in one convenient location.'
        },
        {
          heading: 'Residential-Friendly Dumpsters',
          content: 'Our dumpsters are designed to protect your driveway and property. We provide boards under the dumpster and ensure proper placement to avoid any damage to your home.'
        },
        {
          heading: 'Flexible Rental Periods',
          content: 'Renovations don\'t always go according to schedule. That\'s why we offer flexible rental periods to accommodate your project timeline without rushing you.'
        }
      ]
    }
  }

  if (slug.includes('declutter') || slug.includes('cleanout') || slug.includes('organize') || slug.includes('cleanup')) {
    return {
      category: 'Decluttering & Cleanouts',
      intro: `${title}. Decluttering your home or completing a major cleanout project? Icon Dumpsters makes it easy with convenient dumpster rentals delivered right to your property in Utah.`,
      sections: [
        {
          heading: 'Complete Home Cleanouts',
          content: 'Whether you\'re decluttering, moving, downsizing, or handling an estate cleanout, our dumpsters provide a central location for all unwanted items, making the process much more manageable.'
        },
        {
          heading: 'What You Can Dispose Of',
          content: 'Most household items, furniture, appliances, yard waste, and general debris can go in our dumpsters. We\'ll guide you on what\'s acceptable and help you dispose of restricted items properly.'
        },
        {
          heading: 'Easy Scheduling',
          content: 'Schedule your dumpster delivery for when you need it. We offer same-day and next-day delivery options throughout our Utah service area.'
        }
      ]
    }
  }

  if (slug.includes('yard') || slug.includes('garden') || slug.includes('landscaping') || slug.includes('outdoor')) {
    return {
      category: 'Yard & Landscaping',
      intro: `${title}. Landscaping and yard projects create substantial amounts of debris. Icon Dumpsters offers specialized services for yard waste disposal throughout Utah.`,
      sections: [
        {
          heading: 'Yard Waste Disposal Made Easy',
          content: 'From tree trimming to complete landscape overhauls, our dumpsters handle branches, leaves, sod, dirt, rocks, and other yard debris. Keep your property looking great while you work.'
        },
        {
          heading: 'Seasonal Yard Cleanups',
          content: 'Spring and fall yard cleanups generate significant waste. Our dumpsters make it easy to handle seasonal debris removal in one efficient rental period.'
        },
        {
          heading: 'Landscaping Project Support',
          content: 'Installing new landscaping? We can accommodate old materials removal and new installation debris, helping your landscaping project run smoothly from start to finish.'
        }
      ]
    }
  }

  if (slug.includes('dumpster') || slug.includes('bin') || slug.includes('waste') || slug.includes('disposal')) {
    return {
      category: 'Dumpster Services',
      intro: `${title}. Icon Dumpsters is Utah\'s trusted provider of roll-off dumpster rental services. We offer transparent pricing, reliable delivery, and exceptional customer service.`,
      sections: [
        {
          heading: 'Why Choose Icon Dumpsters?',
          content: 'We\'re locally owned and operated in Utah, offering personal service with professional results. Our dumpsters are clean, well-maintained, and delivered on time, every time.'
        },
        {
          heading: 'Transparent Pricing',
          content: 'No hidden fees, no surprises. Our quotes include delivery, pickup, disposal, and your rental period. You\'ll know exactly what you\'re paying upfront.'
        },
        {
          heading: 'Service You Can Trust',
          content: 'We pride ourselves on responsive communication, professional service, and going the extra mile for our customers. Your satisfaction is our priority.'
        }
      ]
    }
  }

  // Default content for other post types
  return {
    category: 'Home Improvement',
    intro: `${title}. When working on home improvement projects, proper waste management makes everything easier. Icon Dumpsters provides reliable dumpster rental services throughout Utah for all your project needs.`,
    sections: [
      {
        heading: 'Professional Dumpster Rental Services',
        content: 'Icon Dumpsters offers roll-off dumpster rentals in multiple sizes to accommodate projects of any scale. From small home cleanouts to major renovations, we have the right solution for you.'
      },
      {
        heading: 'Serving Utah Communities',
        content: 'We serve Salt Lake City, West Jordan, Sandy, Murray, Taylorsville, Midvale, and surrounding communities throughout the Wasatch Front. Local service with reliable results.'
      },
      {
        heading: 'Get Started Today',
        content: 'Ready to rent a dumpster? Contact us for a free quote and let our team help you determine the best dumpster size and rental period for your project.'
      }
    ]
  }
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ category: string; slug: string }> 
}) {
  const { category, slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Performance: Fast category verification - redirect if mismatch
  // Use the category from the post's URL if available, otherwise infer from slug
  let expectedCategory: string;
  if (post.url && post.url.startsWith('/blog/')) {
    // Extract category from post URL (e.g., /blog/dumpster-services/slug -> dumpster-services)
    const urlParts = post.url.split('/');
    if (urlParts.length >= 3 && urlParts[1] === 'blog') {
      expectedCategory = urlParts[2];
    } else {
      expectedCategory = getCategoryFromSlug(post.slug);
    }
  } else {
    expectedCategory = getCategoryFromSlug(post.slug);
  }
  
  if (category !== expectedCategory) {
    // Redirect to correct category URL immediately (server-side redirect is faster)
    redirect(`/blog/${expectedCategory}/${slug}`);
  }

  const content = getPostContent(post)
  const publishDate = new Date(post.lastmod).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 via-green-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="mb-4 text-sm text-purple-100">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="capitalize">{category.replace('-', ' ')}</span>
            <span className="mx-2">/</span>
            <span>{post.title}</span>
          </nav>
          
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-sm font-semibold bg-white/20 rounded-full">
              {content.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-purple-50 mb-6">
            Expert advice from Utah's trusted dumpster rental service
          </p>
          <div className="flex items-center text-purple-100">
            <time dateTime={post.lastmod}>{publishDate}</time>
            <span className="mx-2">•</span>
            <span>Icon Dumpsters</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed">
            {content.intro}
          </p>
        </div>

        {/* Main Content Sections */}
        {content.sections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {section.heading}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}

        {/* Call to Action Section */}
        <div className="relative bg-gradient-to-br from-[#0d9488] via-purple-600 to-purple-800 rounded-xl p-8 text-white mt-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-teal-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
          
          <div className="relative">
            <h2 className="text-3xl font-bold mb-4 drop-shadow-lg">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-6 drop-shadow-md">
              Get a free quote for your dumpster rental today. Our team is ready to help you choose the perfect dumpster size for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#quote-form"
                className="inline-block px-8 py-4 bg-white text-[#0d9488] font-semibold rounded-lg hover:bg-teal-50 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                Get Free Quote
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-teal-800 text-white font-semibold rounded-lg hover:bg-purple-900 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <BlogRelatedPosts 
          currentSlug={slug}
          currentCategory={expectedCategory}
          limit={6}
        />

        {/* Related Services */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/services/residential-dumpster-rental"
              className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-teal-600 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Residential Dumpsters
              </h3>
              <p className="text-gray-600">
                Perfect for home projects, cleanouts, and renovations
              </p>
            </Link>
            <Link
              href="/services/commercial-dumpster-rental"
              className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-teal-600 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Commercial Dumpsters
              </h3>
              <p className="text-gray-600">
                Reliable waste solutions for businesses and contractors
              </p>
            </Link>
            <Link
              href="/services/construction-dumpster-rental"
              className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-teal-600 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Construction Dumpsters
              </h3>
              <p className="text-gray-600">
                Heavy-duty dumpsters for construction debris
              </p>
            </Link>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-16 p-8 bg-gray-100 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Serving Utah Communities
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Icon Dumpsters proudly serves the following areas:
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-gray-600">
            <div>
              <Link href="/dumpster-rental-salt-lake-city-ut" className="hover:text-teal-600">Salt Lake City</Link><br />
              <Link href="/dumpster-rental-west-jordan-ut" className="hover:text-teal-600">West Jordan</Link><br />
              <Link href="/dumpster-rental-sandy-ut" className="hover:text-teal-600">Sandy</Link><br />
              <Link href="/dumpster-rental-murray-ut" className="hover:text-teal-600">Murray</Link>
            </div>
            <div>
              <Link href="/dumpster-rental-draper-ut" className="hover:text-teal-600">Draper</Link><br />
              <Link href="/dumpster-rental-south-jordan-ut" className="hover:text-teal-600">South Jordan</Link><br />
              <Link href="/dumpster-rental-taylorsville-ut" className="hover:text-teal-600">Taylorsville</Link><br />
              <Link href="/dumpster-rental-midvale-ut" className="hover:text-teal-600">Midvale</Link>
            </div>
            <div>
              <Link href="/dumpster-rental-riverton-ut" className="hover:text-teal-600">Riverton</Link><br />
              <Link href="/dumpster-rental-herriman-ut" className="hover:text-teal-600">Herriman</Link><br />
              <Link href="/dumpster-rental-millcreek-ut" className="hover:text-teal-600">Millcreek</Link><br />
              <Link href="/locations" className="hover:text-teal-600 font-semibold">View All Areas →</Link>
            </div>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            datePublished: post.lastmod,
            dateModified: post.lastmod,
            author: {
              '@type': 'Organization',
              name: 'Icon Dumpsters',
              url: 'https://icondumpsters.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Icon Dumpsters',
              url: 'https://icondumpsters.com',
            },
            description: `${post.title} - Expert advice from Icon Dumpsters, Utah's trusted dumpster rental service.`,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://icondumpsters.com/blog/${category}/${slug}`,
            },
            articleSection: content.category,
          }),
        }}
      />
    </div>
  )
}

