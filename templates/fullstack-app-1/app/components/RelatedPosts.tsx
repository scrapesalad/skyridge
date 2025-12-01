import Link from 'next/link';
import ImageWithFallback from './ImageWithFallback';
import postsData from '../posts-metadata.json';

// Helper function to get blog URL from post id
function getBlogUrl(postId: string): string {
  const post = postsData.find((p: any) => p.slug === postId);
  if (post && post.url) {
    return post.url;
  }
  // Fallback: construct URL from postId using category mapping
  const getCategoryFromSlug = (slug: string): string => {
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
  };
  const category = getCategoryFromSlug(postId);
  return `/blog/${category}/${postId}`;
}

interface RelatedPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  fallbackImage: string;
}

interface RelatedPostsProps {
  currentPostId: string;
  currentCategory: string;
  posts: RelatedPost[];
}

export default function RelatedPosts({ currentPostId, currentCategory, posts }: RelatedPostsProps) {
  // Filter out current post and get related posts
  const relatedPosts = posts
    .filter(post => post.id !== currentPostId)
    .sort((a, b) => {
      // Prioritize same category posts
      if (a.category === currentCategory && b.category !== currentCategory) return -1;
      if (b.category === currentCategory && a.category !== currentCategory) return 1;
      return 0;
    })
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Related Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Continue learning with these related articles on dumpster rental and waste management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Link href={getBlogUrl(post.id)} className="block">
                <div className="relative h-48 overflow-hidden bg-white flex items-center justify-center">
                  <ImageWithFallback
                    src={post.image}
                    fallbackSrc={post.fallbackImage}
                    alt={`${post.title} - Icon Dumpsters Blog`}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0d9488] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-[#0d9488] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-[#0d9488] font-semibold hover:text-teal-700 transition-colors">
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="https://icondumpsters.com/blog" 
            className="inline-flex items-center px-8 py-3 bg-[#0d9488] text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Articles
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
