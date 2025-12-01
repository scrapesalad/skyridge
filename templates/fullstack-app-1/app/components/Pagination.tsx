'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
  className = '',
}: PaginationProps) {
  const searchParams = useSearchParams();
  
  // Get current search params
  const currentParams = new URLSearchParams(searchParams.toString());
  
  // Build URL with query params
  const buildUrl = (page: number) => {
    const params = new URLSearchParams(currentParams);
    if (page === 1) {
      params.delete('page');
    } else {
      params.set('page', page.toString());
    }
    const queryString = params.toString();
    return queryString ? `${basePath}?${queryString}` : basePath;
  };

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 7;
    
    if (totalPages <= maxVisible) {
      // Show all pages if less than max
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('...');
      }
      
      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      
      // Always show last page
      pages.push(totalPages);
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      className={`flex items-center justify-center space-x-2 ${className}`}
      aria-label="Pagination"
    >
      {/* Previous Link */}
      {hasPrev && (
        <>
          <Link
            href={buildUrl(currentPage - 1)}
            rel="prev"
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-[#0d9488] hover:text-[#0d9488] transition-colors"
            aria-label="Previous page"
          >
            Previous
          </Link>
          <Link
            href={buildUrl(1)}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-[#0d9488] hover:text-[#0d9488] transition-colors"
            aria-label="First page"
          >
            First
          </Link>
        </>
      )}

      {/* Page Numbers */}
      <div className="flex items-center space-x-2">
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-2 text-gray-500"
              >
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isCurrent = pageNum === currentPage;

          return (
            <Link
              key={pageNum}
              href={buildUrl(pageNum)}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                isCurrent
                  ? 'bg-[#0d9488] text-white border-[#0d9488] font-semibold'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-[#0d9488] hover:text-[#0d9488]'
              }`}
              aria-label={`Page ${pageNum}`}
              aria-current={isCurrent ? 'page' : undefined}
            >
              {pageNum}
            </Link>
          );
        })}
      </div>

      {/* Next Link */}
      {hasNext && (
        <>
          <Link
            href={buildUrl(totalPages)}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-[#0d9488] hover:text-[#0d9488] transition-colors"
            aria-label="Last page"
          >
            Last
          </Link>
          <Link
            href={buildUrl(currentPage + 1)}
            rel="next"
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-[#0d9488] hover:text-[#0d9488] transition-colors"
            aria-label="Next page"
          >
            Next
          </Link>
        </>
      )}
    </nav>
  );
}

