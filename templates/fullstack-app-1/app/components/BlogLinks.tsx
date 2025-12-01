import Link from 'next/link';
import postsData from '../../posts-metadata.json';

interface Post {
  slug: string;
  title: string;
  url: string;
  lastmod: string;
  priority: number;
}

interface BlogLinksProps {
  serviceType?: 'residential' | 'commercial' | 'construction';
  limit?: number;
}

export default function BlogLinks({ serviceType, limit = 6 }: BlogLinksProps) {
  const posts = postsData as Post[];
  
  // Filter posts based on service type relevance
  let relevantPosts = posts;
  
  if (serviceType === 'residential') {
    // Posts relevant to residential/home projects
    relevantPosts = posts.filter(post => {
      const slug = post.slug.toLowerCase();
      const url = post.url.toLowerCase();
      return (
        url.includes('home-improvement') ||
        url.includes('decluttering-cleanouts') ||
        url.includes('home-renovations') ||
        slug.includes('home') ||
        slug.includes('residential') ||
        slug.includes('cleanout') ||
        slug.includes('declutter')
      );
    });
  } else if (serviceType === 'commercial') {
    // Posts relevant to commercial/business projects
    relevantPosts = posts.filter(post => {
      const slug = post.slug.toLowerCase();
      const url = post.url.toLowerCase();
      return (
        url.includes('dumpster-services') ||
        slug.includes('commercial') ||
        slug.includes('business') ||
        slug.includes('office')
      );
    });
  } else if (serviceType === 'construction') {
    // Posts relevant to construction projects
    relevantPosts = posts.filter(post => {
      const slug = post.slug.toLowerCase();
      const url = post.url.toLowerCase();
      return (
        url.includes('home-renovations') ||
        url.includes('dumpster-services') ||
        slug.includes('construction') ||
        slug.includes('renovation') ||
        slug.includes('remodel') ||
        slug.includes('demolition')
      );
    });
  }
  
  // Sort by date (newest first) and limit
  const selectedPosts = relevantPosts
    .sort((a, b) => new Date(b.lastmod).getTime() - new Date(a.lastmod).getTime())
    .slice(0, limit);

  if (selectedPosts.length === 0) {
    // Fallback to general posts if no service-specific posts found
    selectedPosts.push(...posts
      .sort((a, b) => new Date(b.lastmod).getTime() - new Date(a.lastmod).getTime())
      .slice(0, limit));
  }

  return (
    <section className="mt-16 bg-gray-50 py-12 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Related Blog Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about dumpster rental, waste management, and project planning with our expert guides and tips.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedPosts.map((post) => (
            <Link
              key={post.slug}
              href={post.url}
              className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-teal-600 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-teal-600">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                {new Date(post.lastmod).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold text-lg"
          >
            View All Blog Posts →
          </Link>
        </div>
      </div>
    </section>
  );
}

