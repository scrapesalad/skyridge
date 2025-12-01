"use client";

import { useState, useEffect } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  fallbackImage: string;
  featured?: boolean;
}

interface BlogSearchProps {
  blogPosts: BlogPost[];
  onSearchChange: (filteredPosts: BlogPost[]) => void;
}

export default function BlogSearch({ blogPosts, onSearchChange }: BlogSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // Search functionality
  useEffect(() => {
    if (searchTerm.trim() === "") {
      onSearchChange(blogPosts);
    } else {
      const filtered = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      onSearchChange(filtered);
    }
  }, [searchTerm, blogPosts, onSearchChange]);

  return (
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
  );
}
