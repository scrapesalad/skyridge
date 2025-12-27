import dynamic from 'next/dynamic';

/**
 * Lazy-loaded components for better performance
 * These components are loaded dynamically to reduce initial bundle size
 */

export const LazyFooter = dynamic(() => import('@/components/Footer'), {
  ssr: true,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

export const LazyQuoteSidebar = dynamic(() => import('@/components/QuoteSidebar'), {
  ssr: false,
  loading: () => null,
});

export const LazyPhoneModal = dynamic(() => import('@/components/PhoneModal'), {
  ssr: false,
  loading: () => null,
});

export const LazyFloatingTextButton = dynamic(() => import('@/components/FloatingTextButton'), {
  ssr: false,
  loading: () => null,
});

export const LazyDeferredScripts = dynamic(() => import('@/components/DeferredScripts'), {
  ssr: false,
  loading: () => null,
});

export const LazyStrategicInternalLinks = dynamic(() => import('@/components/StrategicInternalLinks'), {
  ssr: true,
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-xl" />,
});

export const LazyCollapsibleSection = dynamic(() => import('@/components/CollapsibleSection'), {
  ssr: true,
  loading: () => <div className="h-20 bg-gray-100 animate-pulse rounded-lg" />,
});
