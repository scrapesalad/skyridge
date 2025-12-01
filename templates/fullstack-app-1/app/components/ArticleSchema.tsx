interface ArticleSchemaProps {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate: string;
  imageUrl: string;
  articleUrl: string;
  category: string;
  readTime: string;
}

export default function ArticleSchema({
  title,
  description,
  author,
  publishedDate,
  modifiedDate,
  imageUrl,
  articleUrl,
  category,
  readTime
}: ArticleSchemaProps) {
  // Ensure image URL is absolute
  const absoluteImageUrl = imageUrl.startsWith('http') 
    ? imageUrl 
    : `https://icondumpsters.com${imageUrl.startsWith('/') ? imageUrl : '/' + imageUrl}`;
  
  // Ensure article URL is absolute
  const absoluteArticleUrl = articleUrl.startsWith('http') 
    ? articleUrl 
    : `https://icondumpsters.com${articleUrl.startsWith('/') ? articleUrl : '/' + articleUrl}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": absoluteArticleUrl,
    "headline": title,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": absoluteImageUrl,
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://icondumpsters.com"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://icondumpsters.com/#organization",
      "name": "Icon Dumpsters",
      "logo": {
        "@type": "ImageObject",
        "url": "https://icondumpsters.com/Icon_Dumpsters_Final.png",
        "width": 1200,
        "height": 630
      }
    },
    "datePublished": publishedDate,
    "dateModified": modifiedDate || publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": absoluteArticleUrl
    },
    "articleSection": category,
    "keywords": [
      "dumpster rental",
      "roll-off dumpster",
      "waste management",
      "construction waste",
      "Utah dumpster rental",
      category?.toLowerCase() || "dumpster rental"
    ],
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "isPartOf": {
      "@type": "Blog",
      "@id": "https://icondumpsters.com/blog",
      "name": "Icon Dumpsters Blog",
      "description": "Expert insights, tips, and guides on waste management, dumpster rental, and construction cleanup."
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://icondumpsters.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://icondumpsters.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": absoluteArticleUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
