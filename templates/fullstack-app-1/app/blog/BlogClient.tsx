"use client";

import { useEffect, useMemo, useState, Suspense } from "react";
import ImageWithFallback from "../components/ImageWithFallback";
import Link from "next/link";
// import { track } from "../components/analytics";
import NewsletterSubscription from "../components/NewsletterSubscription";
import InternalLinks from "../components/InternalLinks";
import Pagination from "../components/Pagination";
import postsData from '../../posts-metadata.json';

import { useSearchParams } from "next/navigation";

// Helper function to get blog URL from post id
function getBlogUrl(postId: string): string {
  const post = postsData.find((p: any) => p.slug === postId);
  if (post && post.url) {
    return post.url;
  }
  
  // Handle posts that don't exist in posts-metadata.json but have redirects
  const redirectMap: { [key: string]: string } = {
    'estimate-right-dumpster-size-home-cleanout': '/estimate-right-dumpster-size-home-cleanout',
    'construction-dumpster-rental-guide-2025': '/blog',
    'rolloff-dumpster-guide-2025': '/guides/rolloff-dumpster-guide',
    '30-yard-dumpster-rental-calculator': '/calculators/cost-calculator',
    'how-much-does-a-15-yard-dumpster-weight-empty': '/blog',
    'how-much-does-a-20-yard-dumpster-weight-empty': '/blog',
    'how-much-does-a-30-yard-dumpster-weight-empty': '/blog',
    'what-size-dumpster-for-a-roof': '/blog',
  };
  
  if (redirectMap[postId]) {
    return redirectMap[postId];
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

// Blog post data for search functionality

/*
📝 ENHANCED BLOG POST TEMPLATE - Copy this structure for new posts:

{
  id: "your-post-url-slug",
  title: "Your SEO-Optimized Title Here (50-60 characters)",
  excerpt: "Compelling description with primary keyword naturally integrated. Should be 150-160 characters and include your main keyword.",
  category: "CATEGORY_NAME", // Choose from: DEMOLITION, CONCRETE, ROOFING, CALCULATOR, DUMPSTER SPECS, DUMPSTER RENTAL, RENOVATION, COMMERCIAL, GUIDES
  readTime: "X min read",
  image: "/images/your-image.jpg",
  fallbackImage: "/images/your-image.webp",
  featured: false, // Set to true for featured posts (shows in featured section)
  
  // NEW ENHANCED FIELDS:
  heroImage: "/images/hero-image.jpg", // Large hero image for post header
  heroImageAlt: "Descriptive alt text for hero image",
  bannerColor: "purple", // Choose from: purple, blue, green, orange, red
  highlightBoxes: [
    {
      title: "Key Takeaway 1",
      content: "Important point or tip",
      icon: "💡" // Emoji or icon
    },
    {
      title: "Key Takeaway 2", 
      content: "Another important point",
      icon: "⚡"
    }
  ],
  stats: [
    {
      label: "Average Cost",
      value: "$300-500",
      description: "Typical dumpster rental cost"
    },
    {
      label: "Delivery Time",
      value: "Same Day",
      description: "Available in most areas"
    }
  ],
  ctaButton: {
    text: "Get Free Quote",
    link: "/#quote-form",
    color: "green" // green, blue, purple, orange
  },
  
  // BLOG POST CONTENT IMAGES (4-5 images per post):
  contentImages: [
    {
      src: "/images/dumpster500x500-1.jpeg",
      alt: "Rolloff dumpster being delivered to construction site",
      caption: "Professional rolloff dumpster delivery service",
      position: "after-intro" // after-intro, after-section-1, after-section-2, etc.
    },
    {
      src: "/images/dumpster500x500-2.jpeg", 
      alt: "Different dumpster sizes comparison",
      caption: "Choose the right size for your project needs",
      position: "after-sizes"
    },
    {
      src: "/images/dumpsterSmallBanner.jpeg",
      alt: "Dumpster placement and site preparation",
      caption: "Proper site preparation ensures smooth delivery",
      position: "after-placement"
    },
    {
      src: "/images/dumpsterSmallBanner2.jpeg",
      alt: "Construction debris being loaded into dumpster",
      caption: "Efficient loading maximizes space utilization",
      position: "after-loading"
    },
    {
      src: "/images/dumpsterSmallBanner4.jpeg",
      alt: "Dumpster pickup and removal service",
      caption: "Timely pickup keeps your project on schedule",
      position: "after-pickup"
    }
  ]
}

🎯 SEO REQUIREMENTS:
- Title: 50-60 characters, include primary keyword
- Excerpt: 150-160 characters, compelling and keyword-rich
- Category: Use existing categories for consistency
- Images: Provide both .jpg and .webp versions
- Featured: Only set to true for high-value posts

📋 QUICK ADD INSTRUCTIONS:
1. Copy the template above
2. Replace all placeholder text with your content
3. Add to the blogPosts array below (keep featured posts at top)
4. Save and test

🎨 VISUAL ENHANCEMENTS:
- Hero images for better visual appeal
- Highlight boxes for key takeaways
- Statistics boxes for important data
- Color-coded banners and CTAs
- Professional styling throughout
*/

export const blogPosts = [
  // FEATURED POSTS (keep at top)
  {
    id: "construction-dumpster-rental-guide-2025",
    title: "Best Construction Dumpster Rental Companies of 2025: Complete Guide",
    excerpt: "Find the best construction dumpster rental companies for your project. Compare prices, services, and get expert tips on choosing the right dumpster size and rental duration.",
    category: "DUMPSTER RENTAL",
    readTime: "15 min read",
    image: "/images/dumpster500x500-1.jpeg",
    fallbackImage: "/images/dumpster500x500-1.webp",
    featured: true,
    heroImage: "/images/dumpster500x500-1.jpeg",
    heroImageAlt: "Construction Dumpster Rental Guide 2025 - Best Companies and Expert Tips",
    bannerColor: "blue",
    highlightBoxes: [
      {
        title: "Company Comparison",
        content: "Compare top national and local dumpster rental companies",
        icon: "🏢"
      },
      {
        title: "Size Selection",
        content: "Choose the right dumpster size to avoid costly overage fees",
        icon: "📏"
      },
      {
        title: "Cost Optimization",
        content: "Learn how to get the best rates and avoid hidden charges",
        icon: "💰"
      }
    ],
    stats: [
      {
        label: "Average Cost",
        value: "$300-700",
        description: "Depending on size and location"
      },
      {
        label: "Delivery Time",
        value: "Same Day",
        description: "Available in most areas"
      },
      {
        label: "Weight Limits",
        value: "2-8 Tons",
        description: "Varies by dumpster size"
      }
    ],
    ctaButton: {
      text: "Get Construction Quote",
      link: "/#quote-form",
      color: "blue"
    },
    contentImages: [
      {
        src: "/images/dumpster500x500-1.jpeg",
        alt: "Construction dumpster being delivered to job site",
        caption: "Professional construction dumpster delivery service",
        position: "after-intro"
      },
      {
        src: "/images/dumpster500x500-2.jpeg",
        alt: "Different construction dumpster sizes comparison",
        caption: "Choose the right size for your construction project",
        position: "after-sizes"
      },
      {
        src: "/images/dumpsterSmallBanner.jpeg",
        alt: "Construction site with properly placed dumpster",
        caption: "Strategic placement maximizes efficiency",
        position: "after-placement"
      },
      {
        src: "/images/dumpsterSmallBanner2.jpeg",
        alt: "Construction debris being loaded into dumpster",
        caption: "Proper loading techniques maximize capacity",
        position: "after-loading"
      },
      {
        src: "/images/dumpsterSmallBanner4.jpeg",
        alt: "Construction dumpster pickup and removal",
        caption: "Timely pickup keeps your project on schedule",
        position: "after-pickup"
      }
    ]
  },
  {
    id: "demolition-dumpster-calculator",
    title: "Demolition Dumpster Calculator: Calculate Your Project Needs & Costs",
    excerpt: "Use our demolition dumpster calculator to estimate the right dumpster size, weight capacity, and rental costs for your demolition project. Get instant quotes for Utah demolition projects.",
    category: "DEMOLITION",
    readTime: "10 min read",
    image: "/images/dumpster500x500-1.jpeg",
    fallbackImage: "/images/dumpster500x500-1.webp",
    featured: true
  },
  {
    id: "dumpster-calculator-for-concrete",
    title: "Dumpster Calculator for Concrete: Estimate Concrete Disposal Costs",
    excerpt: "Use our concrete dumpster calculator to estimate the right dumpster size and costs for concrete disposal. Calculate concrete weight, volume, and rental costs for Utah projects.",
    category: "CONCRETE",
    readTime: "8 min read",
    image: "/images/concrete.webp",
    fallbackImage: "/images/concrete.jpg",
    featured: true
  },
  {
    id: "roofing-dumpster-calculator",
    title: "Roofing Dumpster Calculator: Calculate Roofing Waste Disposal Costs",
    excerpt: "Use our roofing dumpster calculator to estimate the right dumpster size and costs for roofing waste disposal. Calculate roofing material weight, volume, and rental costs for Utah projects.",
    category: "ROOFING",
    readTime: "9 min read",
    image: "/images/dumpsterSmallBanner4.jpeg",
    fallbackImage: "/images/dumpsterSmallBanner4.webp",
    featured: true
  },
  {
    id: "estimate-right-dumpster-size-home-cleanout",
    title: "How to Estimate the Right Dumpster Size for a Home Cleanout Project (2025 Guide)",
    excerpt: "Struggling to pick the right dumpster size for your cleanout? This 2025 guide explains how to estimate dumpster sizes for home cleanout projects, covering costs, capacity, and tips to avoid overspending.",
    category: "GUIDES",
    readTime: "12 min read",
    image: "/images/blog/dumpster-size-estimation.jpg",
    fallbackImage: "/images/blog/dumpster-size-estimation.jpg",
    featured: true
  },

  // REGULAR POSTS (add new posts here)
  {
    id: "rolloff-dumpster-guide-2025",
    title: "Rolloff Dumpster Guide 2025: Sizes, Costs, Permits & Pro Tips",
    excerpt: "Complete guide to rolloff dumpster rental including sizes, pricing, permits, weight limits, and pro tips. Learn how to choose the right dumpster and avoid costly mistakes.",
    category: "GUIDES",
    readTime: "15 min read",
    image: "/images/dumpster500x500-1.jpeg",
    fallbackImage: "/images/dumpster500x500-1.webp",
    featured: true,
    heroImage: "/images/dumpster500x500-1.jpeg",
    heroImageAlt: "Rolloff Dumpster Guide 2025 - Complete Guide to Dumpster Rental",
    bannerColor: "purple",
    highlightBoxes: [
      {
        title: "Size Selection",
        content: "Choose the right dumpster size to avoid costly overage fees",
        icon: "📏"
      },
      {
        title: "Cost Savings",
        content: "Learn how to get the best rates and avoid hidden fees",
        icon: "💰"
      },
      {
        title: "Permit Requirements",
        content: "Understand local regulations and permit requirements",
        icon: "📋"
      }
    ],
    stats: [
      {
        label: "Average Cost",
        value: "$200-700",
        description: "Depending on size and location"
      },
      {
        label: "Delivery Time",
        value: "Same Day",
        description: "Available in most areas"
      },
      {
        label: "Rental Period",
        value: "7-14 Days",
        description: "Standard rental period"
      }
    ],
    ctaButton: {
      text: "Get Free Quote",
      link: "/#quote-form",
      color: "green"
    },
    contentImages: [
      {
        src: "/images/dumpster500x500-1.jpeg",
        alt: "Professional rolloff dumpster delivery service",
        caption: "Professional rolloff dumpster delivery service",
        position: "after-intro"
      },
      {
        src: "/images/dumpster500x500-2.jpeg",
        alt: "Different dumpster sizes comparison",
        caption: "Choose the right size for your project needs",
        position: "after-sizes"
      },
      {
        src: "/images/dumpsterSmallBanner.jpeg",
        alt: "Dumpster placement and site preparation",
        caption: "Proper site preparation ensures smooth delivery",
        position: "after-placement"
      },
      {
        src: "/images/dumpsterSmallBanner2.jpeg",
        alt: "Construction debris being loaded into dumpster",
        caption: "Efficient loading maximizes space utilization",
        position: "after-loading"
      },
      {
        src: "/images/dumpsterSmallBanner4.jpeg",
        alt: "Dumpster pickup and removal service",
        caption: "Timely pickup keeps your project on schedule",
        position: "after-pickup"
      }
    ]
  },
  {
    id: "dumpster-volume-calculator",
    title: "Dumpster Volume Calculator: Calculate Dumpster Capacity & Dimensions",
    excerpt: "Use our dumpster volume calculator to determine the right dumpster size for your project. Calculate dumpster dimensions, capacity, and volume requirements for Utah projects.",
    category: "CALCULATOR",
    readTime: "7 min read",
    image: "/images/dumpster500x500-2.jpeg",
    fallbackImage: "/images/dumpster500x500-2.webp"
  },
  {
    id: "how-much-does-a-20-yard-dumpster-weight-empty",
    title: "How Much Does a 20 Yard Dumpster Weigh Empty? Complete Weight Guide",
    excerpt: "Learn how much a 20-yard dumpster weighs empty, its weight capacity, dimensions, and specifications. Get accurate weight information for 20-yard dumpster rentals in Utah.",
    category: "DUMPSTER SPECS",
    readTime: "6 min read",
    image: "/images/dumpster500x500-1.jpeg",
    fallbackImage: "/images/dumpster500x500-1.webp"
  },
  {
    id: "how-much-does-a-30-yard-dumpster-weight-empty",
    title: "How Much Does a 30 Yard Dumpster Weigh Empty? Complete Weight Guide",
    excerpt: "Learn how much a 30-yard dumpster weighs empty, its weight capacity, dimensions, and specifications. Get accurate weight information for 30-yard dumpster rentals in Utah.",
    category: "DUMPSTER SPECS",
    readTime: "6 min read",
    image: "/images/dumpster500x500-2.jpeg",
    fallbackImage: "/images/dumpster500x500-2.webp"
  },
  {
    id: "how-much-does-a-15-yard-dumpster-weight-empty",
    title: "How Much Does a 15 Yard Dumpster Weigh Empty? Complete Weight Guide",
    excerpt: "Learn how much a 15-yard dumpster weighs empty, its weight capacity, dimensions, and specifications. Get accurate weight information for 15-yard dumpster rentals in Utah.",
    category: "DUMPSTER SPECS",
    readTime: "6 min read",
    image: "/images/dumpster500x500-1.jpeg",
    fallbackImage: "/images/dumpster500x500-1.webp"
  },
  {
    id: "concrete-debris-calculator",
    title: "Concrete Debris Calculator: Calculate Concrete Waste & Disposal Costs",
    excerpt: "Use our concrete debris calculator to estimate concrete waste volume, weight, and disposal costs. Calculate concrete debris for demolition and construction projects in Utah.",
    category: "CONCRETE",
    readTime: "8 min read",
    image: "/images/concrete.webp",
    fallbackImage: "/images/concrete.jpg"
  },
  {
    id: "30-yard-dumpster-rental-calculator",
    title: "30 Yard Dumpster Rental Calculator: Calculate Costs & Capacity",
    excerpt: "Use our 30-yard dumpster rental calculator to estimate costs, capacity, and rental requirements. Calculate 30-yard dumpster rental costs for large projects in Utah.",
    category: "DUMPSTER RENTAL",
    readTime: "7 min read",
    image: "/images/dumpster500x500-2.jpeg",
    fallbackImage: "/images/dumpster500x500-2.webp"
  },
  {
    id: "home-renovation-waste-disposal-guide",
    title: "Home Renovation Waste Disposal: A Complete Guide",
    excerpt: "Learn how to properly dispose of renovation waste, choose the right dumpster size, and manage construction debris for your home renovation project in Utah.",
    category: "RENOVATION",
    readTime: "7 min read",
    image: "/images/dumpsterSmallBanner2.jpeg",
    fallbackImage: "/images/dumpsterSmallBanner2.webp",
    heroImage: "/images/dumpsterSmallBanner2.jpeg",
    heroImageAlt: "Home Renovation Waste Disposal Guide - Utah Dumpster Rental",
    bannerColor: "orange",
    highlightBoxes: [
      {
        title: "Waste Planning",
        content: "Plan your waste disposal before starting renovation",
        icon: "📋"
      },
      {
        title: "Size Selection",
        content: "Choose the right dumpster size for your project",
        icon: "📏"
      }
    ],
    stats: [
      {
        label: "Typical Cost",
        value: "$300-600",
        description: "For renovation projects"
      },
      {
        label: "Delivery",
        value: "Same Day",
        description: "Available in Utah"
      }
    ],
    ctaButton: {
      text: "Get Renovation Quote",
      link: "/#quote-form",
      color: "orange"
    },
    contentImages: [
      {
        src: "/images/dumpsterSmallBanner2.jpeg",
        alt: "Home renovation waste disposal",
        caption: "Proper waste management for renovation projects",
        position: "after-intro"
      },
      {
        src: "/images/dumpster500x500-1.jpeg",
        alt: "Renovation debris in dumpster",
        caption: "Organized disposal of construction materials",
        position: "after-planning"
      },
      {
        src: "/images/dumpsterSmallBanner.jpeg",
        alt: "Renovation site with dumpster",
        caption: "Convenient on-site waste management",
        position: "after-process"
      },
      {
        src: "/images/dumpster500x500-2.jpeg",
        alt: "Renovation cleanup completion",
        caption: "Clean project completion with proper disposal",
        position: "after-completion"
      }
    ]
  },
  {
    id: "commercial-dumpster-rental-business-solutions",
    title: "Commercial Dumpster Rental: Business Solutions",
    excerpt: "Professional dumpster rental solutions for businesses, construction companies, and commercial projects. Reliable waste management services across Utah.",
    category: "COMMERCIAL",
    readTime: "7 min read",
    image: "/images/dumpsterSmallBanner.jpeg",
    fallbackImage: "/images/dumpsterSmallBanner.webp"
  },
  {
    id: "construction-waste-management-guide",
    title: "Construction Waste Management: Ultimate Guide for Contractors",
    excerpt: "Master construction waste management with our comprehensive guide. Learn waste segregation, recycling strategies, and compliance requirements for profitable projects.",
    category: "GUIDES",
    readTime: "18 min read",
    image: "/images/dumpsterSmallBanner2.jpeg",
    fallbackImage: "/images/dumpsterSmallBanner2.webp",
    featured: true,
    heroImage: "/images/dumpsterSmallBanner2.jpeg",
    heroImageAlt: "Construction Waste Management Guide - Ultimate Guide for Contractors",
    bannerColor: "green",
    highlightBoxes: [
      {
        title: "Waste Segregation",
        content: "Proper sorting maximizes recycling and reduces costs",
        icon: "♻️"
      },
      {
        title: "Compliance",
        content: "Stay compliant with local and federal regulations",
        icon: "📋"
      },
      {
        title: "Cost Savings",
        content: "Reduce disposal costs through smart waste management",
        icon: "💰"
      }
    ],
    stats: [
      {
        label: "Waste Reduction",
        value: "30-40%",
        description: "Through proper management"
      },
      {
        label: "Recycling Rate",
        value: "50%+",
        description: "Required in many areas"
      },
      {
        label: "Cost Savings",
        value: "$2,000+",
        description: "Per project average"
      }
    ],
    ctaButton: {
      text: "Get Waste Management Quote",
      link: "/#quote-form",
      color: "green"
    },
    contentImages: [
      {
        src: "/images/dumpsterSmallBanner2.jpeg",
        alt: "Construction waste management and sorting",
        caption: "Proper waste segregation improves efficiency",
        position: "after-intro"
      },
      {
        src: "/images/dumpster500x500-1.jpeg",
        alt: "Construction waste recycling center",
        caption: "Recycling reduces disposal costs",
        position: "after-recycling"
      },
      {
        src: "/images/dumpsterSmallBanner.jpeg",
        alt: "Construction site waste management",
        caption: "Organized waste management improves safety",
        position: "after-safety"
      },
      {
        src: "/images/dumpster500x500-2.jpeg",
        alt: "Construction waste disposal tracking",
        caption: "Track waste for compliance and cost control",
        position: "after-tracking"
      },
      {
        src: "/images/dumpsterSmallBanner4.jpeg",
        alt: "Construction waste management completion",
        caption: "Proper management leads to project success",
        position: "after-completion"
      }
    ]
  },
  {
    id: "home-renovation-waste-disposal-complete-guide",
    title: "Home Renovation Waste Disposal: Complete Guide for 2025",
    excerpt: "Master home renovation waste disposal with our comprehensive guide. Learn how to choose dumpster sizes, manage construction debris, and save money on your renovation project.",
    category: "RENOVATION",
    readTime: "16 min read",
    image: "/images/dumpsterSmallBanner2.jpeg",
    fallbackImage: "/images/dumpsterSmallBanner2.webp",
    featured: true,
    heroImage: "/images/dumpsterSmallBanner2.jpeg",
    heroImageAlt: "Home Renovation Waste Disposal Guide - Complete Guide for 2025",
    bannerColor: "orange",
    highlightBoxes: [
      {
        title: "Dumpster Sizing",
        content: "Choose the right size to avoid costly overage fees",
        icon: "📏"
      },
      {
        title: "Debris Management",
        content: "Organize and sort renovation waste efficiently",
        icon: "🗂️"
      },
      {
        title: "Cost Control",
        content: "Save money through smart waste planning",
        icon: "💰"
      }
    ],
    stats: [
      {
        label: "Typical Cost",
        value: "$300-600",
        description: "For renovation projects"
      },
      {
        label: "Delivery",
        value: "Same Day",
        description: "Available in Utah"
      },
      {
        label: "Waste Volume",
        value: "2-8 Yards",
        description: "Average per room"
      }
    ],
    ctaButton: {
      text: "Get Renovation Quote",
      link: "/#quote-form",
      color: "orange"
    },
    contentImages: [
      {
        src: "/images/dumpsterSmallBanner2.jpeg",
        alt: "Home renovation waste disposal planning",
        caption: "Plan your waste disposal before starting renovation",
        position: "after-intro"
      },
      {
        src: "/images/dumpster500x500-1.jpeg",
        alt: "Renovation debris in dumpster",
        caption: "Organized disposal of construction materials",
        position: "after-planning"
      },
      {
        src: "/images/dumpsterSmallBanner.jpeg",
        alt: "Renovation site with dumpster",
        caption: "Convenient on-site waste management",
        position: "after-process"
      },
      {
        src: "/images/dumpster500x500-2.jpeg",
        alt: "Renovation cleanup completion",
        caption: "Clean project completion with proper disposal",
        position: "after-completion"
      }
    ]
  },
  {
    id: "commercial-dumpster-rental-business-solutions-2025",
    title: "Commercial Dumpster Rental: Business Solutions for 2025",
    excerpt: "Professional commercial dumpster rental solutions for businesses, construction companies, and commercial projects. Get reliable waste management services across Utah.",
    category: "COMMERCIAL",
    readTime: "14 min read",
    image: "/images/dumpsterSmallBanner.jpeg",
    fallbackImage: "/images/dumpsterSmallBanner.webp",
    featured: true,
    heroImage: "/images/dumpsterSmallBanner.jpeg",
    heroImageAlt: "Commercial Dumpster Rental Business Solutions - Professional Utah Dumpster Services",
    bannerColor: "purple",
    highlightBoxes: [
      {
        title: "Business Solutions",
        content: "Tailored waste management for commercial needs",
        icon: "🏢"
      },
      {
        title: "Reliability",
        content: "Consistent service for business operations",
        icon: "⚡"
      },
      {
        title: "Cost Efficiency",
        content: "Volume discounts and business rates",
        icon: "💰"
      }
    ],
    stats: [
      {
        label: "Business Discounts",
        value: "15-25%",
        description: "Volume pricing available"
      },
      {
        label: "Service Areas",
        value: "Statewide",
        description: "Coverage across Utah"
      },
      {
        label: "Response Time",
        value: "4 Hours",
        description: "Emergency service available"
      }
    ],
    ctaButton: {
      text: "Get Business Quote",
      link: "/#quote-form",
      color: "purple"
    },
    contentImages: [
      {
        src: "/images/dumpsterSmallBanner.jpeg",
        alt: "Commercial dumpster rental for businesses",
        caption: "Professional waste management for commercial projects",
        position: "after-intro"
      },
      {
        src: "/images/dumpster500x500-1.jpeg",
        alt: "Commercial construction site with dumpster",
        caption: "Large-scale commercial waste management",
        position: "after-commercial"
      },
      {
        src: "/images/dumpsterSmallBanner2.jpeg",
        alt: "Business waste disposal solutions",
        caption: "Efficient waste removal for business operations",
        position: "after-solutions"
      },
      {
        src: "/images/dumpster500x500-2.jpeg",
        alt: "Commercial waste management completion",
        caption: "Professional service ensures project success",
        position: "after-completion"
      }
    ]
  }
  ,
  // NEW KEYWORD-FOCUSED POSTS
  {
    id: "dumpster-rental-salt-lake-city",
    title: "Dumpster Rental Salt Lake City: Prices, Sizes, Same‑Day Delivery",
    excerpt: "Get affordable dumpster rental in Salt Lake City. Compare sizes, prices, weight limits, and same‑day delivery options for homes and contractors.",
    category: "DUMPSTER RENTAL",
    readTime: "9 min read",
    image: "/images/dumpster500x500-1.jpeg",
    fallbackImage: "/images/dumpster500x500-1.webp",
    featured: true,
    bannerColor: "blue"
  },
  {
    id: "trash-bin-rental-near-me",
    title: "Trash Bin Rental Near Me: Find the Best Price Fast",
    excerpt: "Learn how to quickly find the best price on trash bin rentals near you, avoid hidden fees, and choose the right size for your project.",
    category: "GUIDES",
    readTime: "8 min read",
    image: "/images/dumpster500x500-2.jpeg",
    fallbackImage: "/images/dumpster500x500-2.webp",
    featured: true,
    bannerColor: "green"
  },
  {
    id: "what-size-dumpster-for-a-roof",
    title: "What Size Dumpster Do I Need for a Roof? Complete Guide",
    excerpt: "Roof tear‑off size guide by squares and shingle type. See which dumpster size fits your roofing job and avoid overweight fees.",
    category: "ROOFING",
    readTime: "7 min read",
    image: "/images/dumpsterSmallBanner4.jpeg",
    fallbackImage: "/images/dumpsterSmallBanner4.webp",
    bannerColor: "orange"
  },
  {
    id: "waste-management-dumpster-prohibited-items",
    title: "Waste Management Dumpster Prohibited Items: What You Can’t Toss",
    excerpt: "Avoid fines and delays. See the complete list of dumpster prohibited items, safe disposal alternatives, and local Utah guidance.",
    category: "GUIDES",
    readTime: "6 min read",
    image: "/images/dumpsterSmallBanner.jpeg",
    fallbackImage: "/images/dumpsterSmallBanner.webp",
    bannerColor: "red"
  },
  {
    id: "salt-lake-county-dumpster-program",
    title: "Salt Lake County Dumpster Program: How It Works in 2025",
    excerpt: "Understand eligibility, accepted materials, and pickup rules for the Salt Lake County dumpster program, plus private rental alternatives.",
    category: "GUIDES",
    readTime: "6 min read",
    image: "/images/dumpster500x500-1.jpeg",
    fallbackImage: "/images/dumpster500x500-1.webp",
    bannerColor: "purple"
  }
  ,
  {
    id: "rent-a-dumpster-utah",
    title: "Rent a Dumpster Utah: Statewide Sizes, Prices, Delivery",
    excerpt: "Rent a dumpster anywhere in Utah with fast delivery. Compare sizes, transparent pricing, and included tonnage to avoid surprise fees.",
    category: "DUMPSTER RENTAL",
    readTime: "8 min read",
    image: "/images/dumpster500x500-1.jpeg",
    fallbackImage: "/images/dumpster500x500-1.webp",
    bannerColor: "green",
  },
  {
    id: "roll-off-dumpster-business-profit-margin",
    title: "Roll‑Off Dumpster Business Profit Margin: Costs & Pricing Model",
    excerpt: "Break down revenue, cost per pull, fuel, disposal, maintenance, and realistic profit margins for roll‑off dumpster businesses.",
    category: "COMMERCIAL",
    readTime: "10 min read",
    image: "/images/dumpster500x500-2.jpeg",
    fallbackImage: "/images/dumpster500x500-2.webp",
    bannerColor: "blue",
  },
  {
    id: "dumpster-rental-for-residential-use",
    title: "Dumpster Rental for Residential Use: Simple Homeowner Guide",
    excerpt: "A clear guide to residential dumpster rentals: best sizes for common projects, driveway protection, HOA rules, and budget tips.",
    category: "RENOVATION",
    readTime: "8 min read",
    image: "/images/dumpsterSmallBanner2.jpeg",
    fallbackImage: "/images/dumpsterSmallBanner2.webp",
    bannerColor: "orange",
  },
  {
    id: "rent-a-junk-dumpster",
    title: "Rent a Junk Dumpster: Declutter Fast Without Overpaying",
    excerpt: "When a junk removal crew isn’t the best fit, a junk dumpster can be cheaper. See sizes, included tonnage, and how to avoid extra fees.",
    category: "GUIDES",
    readTime: "7 min read",
    image: "/images/dumpsterSmallBanner.jpeg",
    fallbackImage: "/images/dumpsterSmallBanner.webp",
    bannerColor: "red",
  }
  ,
  {
    id: "dumpster-rental-south-jordan-ut",
    title: "Dumpster Rental South Jordan: Local Sizes, Prices, Delivery",
    excerpt: "South Jordan dumpster rentals with clear pricing, included tonnage, and fast delivery for residential and contractor projects.",
    category: "DUMPSTER RENTAL",
    readTime: "6 min read",
    image: "/images/dumpster500x500-1.jpeg",
    fallbackImage: "/images/dumpster500x500-1.webp",
    bannerColor: "blue"
  },
  {
    id: "dumpster-rental-south-salt-lake-ut",
    title: "Dumpster Rental South Salt Lake: Prices, Sizes, Same‑Day Options",
    excerpt: "Affordable dumpster rental in South Salt Lake with residential‑friendly delivery and transparent pricing.",
    category: "DUMPSTER RENTAL",
    readTime: "6 min read",
    image: "/images/dumpster500x500-2.jpeg",
    fallbackImage: "/images/dumpster500x500-2.webp",
    bannerColor: "green"
  },
  {
    id: "dumpster-rental-alpine-ut",
    title: "Dumpster Rental Alpine, UT: Sizes, Prices, Delivery",
    excerpt: "Alpine dumpster rentals with honest pricing, included tonnage, and quick delivery windows.",
    category: "DUMPSTER RENTAL",
    readTime: "6 min read",
    image: "/images/dumpster500x500-1.jpeg",
    fallbackImage: "/images/dumpster500x500-1.webp",
    bannerColor: "purple"
  }
  ,
  {
    id: "bin-dumpster-rental",
    title: "Bin Dumpster Rental: Sizes, Prices, Delivery Windows",
    excerpt: "Choose the right bin size and avoid overage fees with clear, upfront pricing and practical delivery tips.",
    category: "GUIDES",
    readTime: "7 min read",
    image: "/images/dumpster500x500-2.jpeg",
    fallbackImage: "/images/dumpster500x500-2.webp",
    bannerColor: "purple"
  },
  {
    id: "garbage-bin-rentals-near-me",
    title: "Garbage Bin Rentals Near Me: Fast Quotes & Clear Pricing",
    excerpt: "Find nearby garbage bin rentals with transparent pricing, included tonnage, and quick delivery options.",
    category: "GUIDES",
    readTime: "7 min read",
    image: "/images/dumpster500x500-1.jpeg",
    fallbackImage: "/images/dumpster500x500-1.webp",
    bannerColor: "green"
  },
  {
    id: "rent-garbage-bins",
    title: "Rent Garbage Bins: Home & Contractor Options Explained",
    excerpt: "What to confirm before you rent: included tonnage, rental days, delivery window, and placement tips.",
    category: "GUIDES",
    readTime: "7 min read",
    image: "/images/dumpster500x500-2.jpeg",
    fallbackImage: "/images/dumpster500x500-2.webp",
    bannerColor: "blue"
  }
];

function BlogContent() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  
  // Pagination settings
  const POSTS_PER_PAGE = 12;
  const currentPage = parseInt(searchParams?.get('page') || '1', 10);

  // Get category from URL params
  useEffect(() => {
    if (!searchParams) return;
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category.toUpperCase());
    }
  }, [searchParams]);

  // Filter posts based on search term and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      try {
        // Safety checks for undefined values
        const title = post?.title || '';
        const excerpt = post?.excerpt || '';
        const category = post?.category || '';
        const safeSearchTerm = searchTerm || '';
        
        const matchesSearch = safeSearchTerm === "" || 
          title.toLowerCase().includes(safeSearchTerm.toLowerCase()) ||
          excerpt.toLowerCase().includes(safeSearchTerm.toLowerCase()) ||
          category.toLowerCase().includes(safeSearchTerm.toLowerCase());
        
        const matchesCategory = selectedCategory === "ALL" || category === selectedCategory;
        
        return matchesSearch && matchesCategory;
      } catch (error) {
        console.error('Error filtering blog post:', error, post);
        return false; // Skip posts that cause errors
      }
    });
  }, [searchTerm, selectedCategory]);

  // Paginate filtered posts
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  
  // Separate featured and regular posts
  const featuredPosts = paginatedPosts.filter(post => post.featured);
  const regularPosts = paginatedPosts.filter(post => !post.featured);

  // Get unique categories
  const categories = useMemo(() => {
    try {
      const cats = ["ALL", ...new Set(blogPosts.map(post => post?.category || '').filter(cat => cat))];
      return cats;
    } catch (error) {
      console.error('Error generating categories:', error);
      return ["ALL"];
    }
  }, []);

  // Track page view
  useEffect(() => {
    // Temporarily disabled track function to fix blog page
    // track('page_view', {
    //   page: 'blog',
    //   title: 'Icon Dumpsters Blog - Expert Waste Management Insights'
    // });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0d9488] to-teal-700 text-white py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Icon Dumpsters Blog</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Expert insights, tips, and guides on waste management, dumpster rental, and construction cleanup.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Search and Filter */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 mb-8">
              <div className="max-w-lg mx-auto relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50 shadow-lg"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#0d9488] text-white px-6 py-2 rounded-lg hover:bg-teal-800 transition-all duration-200 shadow-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <Link href={getBlogUrl(post.id)} className="block">
                        {/* Hero Image */}
                        <div className="relative h-64 overflow-hidden">
                          <ImageWithFallback 
                            src={post.heroImage || post.image} 
                            alt={post.heroImageAlt || post.title}
                            className="object-cover w-full h-full"
                            fallbackSrc={post.fallbackImage}
                            fill={true}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                              post.bannerColor === 'purple' ? 'bg-teal-600' :
                              post.bannerColor === 'blue' ? 'bg-trust-blue' :
                              post.bannerColor === 'green' ? 'bg-teal-600' :
                              post.bannerColor === 'orange' ? 'bg-action-orange' :
                              post.bannerColor === 'red' ? 'bg-red-600' :
                              'bg-teal-600'
                            }`}>
                              {post.category}
                            </span>
                          </div>
                          {/* Read Time Badge */}
                          <div className="absolute top-4 right-4">
                            <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs font-medium">
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-8">
                          {/* Title */}
                          <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 hover:text-teal-600 transition-colors">
                            {post.title}
                          </h3>
                          
                          {/* Excerpt */}
                          <p className="text-gray-600 text-sm line-clamp-3 mb-6 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          {/* Highlight Boxes */}
                          {post.highlightBoxes && post.highlightBoxes.length > 0 && (
                            <div className="grid grid-cols-1 gap-3 mb-6">
                              {post.highlightBoxes.slice(0, 2).map((highlight, index) => (
                                <div key={index} className="bg-gray-50 rounded-lg p-3 border-l-4 border-purple-500">
                                  <div className="flex items-start gap-3">
                                    <span className="text-lg">{highlight.icon}</span>
                                    <div>
                                      <h4 className="font-semibold text-gray-900 text-sm">{highlight.title}</h4>
                                      <p className="text-gray-600 text-xs">{highlight.content}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {/* Stats */}
                          {post.stats && post.stats.length > 0 && (
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              {post.stats.slice(0, 2).map((stat, index) => (
                                <div key={index} className="text-center">
                                  <div className="text-lg font-bold text-teal-600">{stat.value}</div>
                                  <div className="text-xs text-gray-500">{stat.label}</div>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {/* CTA Button */}
                          {post.ctaButton && (
                            <div className="flex justify-center">
                              <span className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white transition-colors ${
                                post.ctaButton.color === 'green' ? 'bg-gradient-to-br from-purple-50 to-purple-1000 hover:bg-teal-600' :
                                post.ctaButton.color === 'blue' ? 'bg-blue-500 hover:bg-trust-blue' :
                                post.ctaButton.color === 'purple' ? 'bg-teal-500 hover:bg-teal-600' :
                                post.ctaButton.color === 'orange' ? 'bg-orange-500 hover:bg-action-orange' :
                                'bg-gradient-to-br from-purple-50 to-purple-1000 hover:bg-teal-600'
                              }`}>
                                {post.ctaButton.text}
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </span>
                            </div>
                          )}
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* All Posts */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-6 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === "ALL" ? "All Articles" : `${selectedCategory} Articles`}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {regularPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <Link href={getBlogUrl(post.id)} className="block">
                      <div className="relative h-56 overflow-hidden">
                        <ImageWithFallback 
                          src={post.image} 
                          alt={post.title}
                          className="object-cover w-full h-full"
                          fallbackSrc={post.fallbackImage}
                          fill={true}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white shadow-md ${
                            post.bannerColor === 'purple' ? 'bg-teal-600' :
                            post.bannerColor === 'blue' ? 'bg-trust-blue' :
                            post.bannerColor === 'green' ? 'bg-teal-600' :
                            post.bannerColor === 'orange' ? 'bg-action-orange' :
                            post.bannerColor === 'red' ? 'bg-red-600' :
                            'bg-teal-600'
                          }`}>
                            {post.category}
                          </span>
                        </div>
                        {/* Read Time Badge */}
                        <div className="absolute top-3 right-3">
                          <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs font-medium">
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 hover:text-teal-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        {/* Quick Stats (if available) */}
                        {post.stats && post.stats.length > 0 && (
                          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                            {post.stats.slice(0, 2).map((stat, index) => (
                              <div key={index} className="text-center">
                                <div className="text-sm font-bold text-teal-600">{stat.value}</div>
                                <div className="text-xs text-gray-500">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              {paginatedPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                  <button 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("ALL");
                    }}
                    className="mt-4 bg-[#0d9488] text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              {filteredPosts.length > POSTS_PER_PAGE && (
                <div className="mt-12">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    basePath="/blog"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">

            {/* Related Articles */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
              <div className="space-y-4">
                <Link href="https://icondumpsters.com/home-renovation-waste-disposal-guide" className="flex gap-3 text-gray-700 hover:text-[#0d9488] transition-colors group">
                  <div className="bg-gray-200 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:shadow-md transition-shadow relative">
                    <ImageWithFallback 
                      src="/images/optimized/dumpsterSmallBanner2.webp" 
                      alt="Home Renovation Waste Disposal Guide - Utah Dumpster Rental for Renovation Projects" 
                      className="object-cover" 
                      fallbackSrc="/images/dumpsterSmallBanner2.webp"
                      fill={true}
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-1 group-hover:text-[#0d9488] transition-colors">
                      Home Renovation Waste Disposal: A Complete Guide
                    </h4>
                    <p className="text-xs text-gray-500">7 min read</p>
                  </div>
                </Link>
                
                <Link href="https://icondumpsters.com/commercial-dumpster-rental-business-solutions" className="flex gap-3 text-gray-700 hover:text-[#0d9488] transition-colors group">
                  <div className="bg-gray-200 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:shadow-md transition-shadow relative">
                    <ImageWithFallback 
                      src="/images/optimized/dumpsterSmallBanner.webp" 
                      alt="Commercial Dumpster Rental Business Solutions - Professional Utah Dumpster Services" 
                      className="object-cover" 
                      fallbackSrc="/images/dumpsterSmallBanner.webp"
                      fill={true}
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-1 group-hover:text-[#0d9488] transition-colors">
                      Commercial Dumpster Rental: Business Solutions
                    </h4>
                    <p className="text-xs text-gray-500">7 min read</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Newsletter Signup */}
            <NewsletterSubscription />

            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Need a Dumpster?
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Get a free quote for your project. Our team is ready to help you choose the right dumpster size.
              </p>
              <div className="space-y-3 text-sm mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">(801) 918-6000</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">icondumpsters@gmail.com</span>
                </div>
              </div>
              
              <Link 
                href="https://icondumpsters.com/#quote-form" 
                className="w-full bg-[#0d9488] text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold inline-block text-center shadow-md hover:shadow-lg"
              >
                Get Free Quote
              </Link>
            </div>
          </aside>
        </div>
      </div>
      
      {/* All Blog Posts Section - Ensures all posts have internal links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">All Blog Posts</h2>
          <p className="text-lg text-gray-600">
            Browse our complete collection of articles on dumpster rental, home improvement, and waste management.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(postsData as Array<{slug: string; title: string; url: string}>).map((post) => (
            <Link
              key={post.slug}
              href={post.url}
              className="block p-4 bg-gray-50 rounded-lg hover:bg-teal-50 hover:border-teal-300 border border-gray-200 transition-all"
            >
              <h3 className="text-base font-semibold text-gray-900 line-clamp-2 hover:text-teal-600">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <InternalLinks />
      </div>
    </div>
  );
}

export default function BlogClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}> 
      <BlogContent />
    </Suspense>
  );
}



