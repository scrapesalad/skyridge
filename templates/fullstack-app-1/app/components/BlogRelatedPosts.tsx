import Link from 'next/link';
import postsData from '../../posts-metadata.json';

interface Post {
  slug: string;
  title: string;
  url: string;
  lastmod: string;
  priority: number;
}

interface BlogRelatedPostsProps {
  currentSlug: string;
  currentCategory: string;
  limit?: number;
}

export default function BlogRelatedPosts({ 
  currentSlug, 
  currentCategory,
  limit = 6 
}: BlogRelatedPostsProps) {
  const posts = postsData as Post[];
  
  // Get related posts - same category first, then others
  const relatedPosts = posts
    .filter(post => post.slug !== currentSlug)
    .sort((a, b) => {
      // Extract category from URL
      const getCategoryFromUrl = (url: string): string => {
        const parts = url.split('/');
        return parts.length >= 3 && parts[1] === 'blog' ? parts[2] : '';
      };
      
      const aCategory = getCategoryFromUrl(a.url);
      const bCategory = getCategoryFromUrl(b.url);
      
      // Prioritize same category
      if (aCategory === currentCategory && bCategory !== currentCategory) return -1;
      if (bCategory === currentCategory && aCategory !== currentCategory) return 1;
      
      // Then prioritize by date (newer first)
      return new Date(b.lastmod).getTime() - new Date(a.lastmod).getTime();
    })
    .slice(0, limit);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Related Articles
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Continue reading with these related articles about dumpster rental and home improvement.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
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
      <div className="mt-8 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold"
        >
          View All Blog Posts →
        </Link>
      </div>
    </div>
  );
}

