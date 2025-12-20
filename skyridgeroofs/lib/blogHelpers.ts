// Blog utility functions for Skyridge Roofs blog system

import { ContentSection } from '@/data/blogData';

/**
 * Convert a string to a URL-friendly slug
 * Used for creating anchor IDs from headings for table of contents
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Calculate estimated reading time based on word count
 * Average reading speed: 200-250 words per minute
 * We use 225 words/minute as a middle ground
 */
export function calculateReadingTime(wordCount: number): number {
  const wordsPerMinute = 225;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return minutes;
}

/**
 * Count words in HTML content
 * Strips HTML tags and counts remaining words
 */
export function countWords(htmlContent: string): number {
  // Strip HTML tags
  const text = htmlContent.replace(/<[^>]*>/g, ' ');
  // Split by whitespace and filter empty strings
  const words = text.trim().split(/\s+/).filter(word => word.length > 0);
  return words.length;
}

/**
 * Generate table of contents from blog post sections
 * Returns array of {id, heading} objects for navigation
 */
export interface TOCItem {
  id: string;
  heading: string;
}

export function generateTOC(sections: ContentSection[]): TOCItem[] {
  return sections.map(section => ({
    id: slugify(section.heading),
    heading: section.heading,
  }));
}

/**
 * Truncate text to a specified length with ellipsis
 * Used for creating excerpts
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;

  // Find the last space before the max length
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');

  // If there's a space, truncate there; otherwise use the full length
  const finalText = lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated;

  return finalText + '...';
}

/**
 * Format date for display
 * Example: "January 15, 2025"
 */
export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format date for datetime attribute
 * Returns ISO date string (YYYY-MM-DD)
 */
export function formatDatetime(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toISOString().split('T')[0];
}

/**
 * Strip HTML tags from content
 * Used for creating plain text excerpts from HTML content
 */
export function stripHTML(html: string): string {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * Create excerpt from introduction HTML
 * Strips HTML and truncates to specified length
 */
export function createExcerpt(introduction: string, maxLength: number = 160): string {
  const plainText = stripHTML(introduction);
  return truncateText(plainText, maxLength);
}

/**
 * Get category color for badge styling
 * Returns Tailwind color classes
 */
export function getCategoryColor(category: string): { bg: string; text: string } {
  const colorMap: Record<string, { bg: string; text: string }> = {
    'roofing-materials': { bg: 'bg-blue-100', text: 'text-blue-800' },
    'installation-guides': { bg: 'bg-green-100', text: 'text-green-800' },
    'maintenance-tips': { bg: 'bg-yellow-100', text: 'text-yellow-800' },
    'insurance-claims': { bg: 'bg-red-100', text: 'text-red-800' },
    'cost-guides': { bg: 'bg-purple-100', text: 'text-purple-800' },
    'seasonal-advice': { bg: 'bg-orange-100', text: 'text-orange-800' },
    'commercial-roofing': { bg: 'bg-indigo-100', text: 'text-indigo-800' },
    'residential-roofing': { bg: 'bg-pink-100', text: 'text-pink-800' },
  };

  return colorMap[category] || { bg: 'bg-gray-100', text: 'text-gray-800' };
}

/**
 * Extract first paragraph from HTML content
 * Used for preview text
 */
export function getFirstParagraph(html: string): string {
  const match = html.match(/<p[^>]*>(.*?)<\/p>/i);
  return match ? stripHTML(match[1]) : stripHTML(html).substring(0, 200);
}
