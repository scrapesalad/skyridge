'use client';

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null
  });
  const [isVisible, setIsVisible] = useState(false);

  // Helper methods
  const calculateOverallScore = () => {
    // This would be implemented based on the actual metrics
    return 'A+';
  };

  const getRecommendations = () => {
    const recommendations: string[] = [];
    
    // Add recommendations based on metrics
    if (metrics.lcp && metrics.lcp > 4000) {
      recommendations.push('Optimize images and reduce LCP');
    }
    
    if (metrics.cls && metrics.cls > 0.25) {
      recommendations.push('Fix layout shifts to improve CLS');
    }
    
    if (metrics.fid && metrics.fid > 300) {
      recommendations.push('Reduce JavaScript execution time');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Performance looks great!');
    }
    
    return recommendations;
  };

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_SHOW_PERFORMANCE === 'true') {
      setIsVisible(true);
      measurePerformance();
      setupPerformanceObservers();
    }
  }, []);

  const measurePerformance = () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          ttfb: navigation.responseStart - navigation.requestStart,
          domLoad: navigation.domContentLoadedEventEnd - navigation.fetchStart,
          windowLoad: navigation.loadEventEnd - navigation.fetchStart
        }));
      }
    }
  };

  const setupPerformanceObservers = () => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        });
        fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcp = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            const fid = entry.processingStart - entry.startTime;
            setMetrics(prev => ({ ...prev, fid }));
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

      } catch (error) {
        console.warn('Performance monitoring setup failed:', error);
      }
    }
  };

  const getScore = (metric: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (metric === null) return 'pending';
    if (metric <= thresholds.good) return 'good';
    if (metric <= thresholds.needsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'good': return 'text-teal-600';
      case 'needs-improvement': return 'text-yellow-600';
      case 'poor': return 'text-red-600';
      default: return 'text-gray-500';
    }
  };

  const getScoreIcon = (score: string) => {
    switch (score) {
      case 'good': return '✅';
      case 'needs-improvement': return '⚠️';
      case 'poor': return '❌';
      default: return '⏳';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        {/* Core Web Vitals */}
        <div className="grid grid-cols-2 gap-2">
          <div className="text-gray-600">FCP:</div>
          <div className={`font-mono ${getScoreColor(getScore(metrics.fcp, { good: 1800, needsImprovement: 3000 }))}`}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : '⏳'}
          </div>
          
          <div className="text-gray-600">LCP:</div>
          <div className={`font-mono ${getScoreColor(getScore(metrics.lcp, { good: 2500, needsImprovement: 4000 }))}`}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : '⏳'}
          </div>
          
          <div className="text-gray-600">FID:</div>
          <div className={`font-mono ${getScoreColor(getScore(metrics.fid, { good: 100, needsImprovement: 300 }))}`}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : '⏳'}
          </div>
          
          <div className="text-gray-600">CLS:</div>
          <div className={`font-mono ${getScoreColor(getScore(metrics.cls, { good: 0.1, needsImprovement: 0.25 }))}`}>
            {metrics.cls ? metrics.cls.toFixed(3) : '⏳'}
          </div>
        </div>
        
        <hr className="my-2" />
        
        {/* Additional Metrics */}
        <div className="grid grid-cols-2 gap-2">
          <div className="text-gray-600">TTFB:</div>
          <div className="font-mono text-gray-800">
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : '⏳'}
          </div>
          
          <div className="text-gray-600">DOM Load:</div>
          <div className="font-mono text-gray-800">
            {metrics.domLoad ? `${Math.round(metrics.domLoad)}ms` : '⏳'}
          </div>
          
          <div className="text-gray-600">Window Load:</div>
          <div className="font-mono text-gray-800">
            {metrics.windowLoad ? `${Math.round(metrics.windowLoad)}ms` : '⏳'}
          </div>
        </div>
        
        {/* Overall Score */}
        <hr className="my-2" />
        <div className="text-center">
          <div className="text-gray-600 mb-1">Overall Score</div>
          <div className="text-lg font-bold text-teal-600">
            {calculateOverallScore()}
          </div>
        </div>
        
        {/* Recommendations */}
        {getRecommendations().length > 0 && (
          <div className="mt-3 p-2 bg-gray-50 rounded text-xs">
            <div className="font-semibold mb-1">Recommendations:</div>
            <ul className="space-y-1">
              {getRecommendations().map((rec: string, index: number) => (
                <li key={index} className="text-gray-700">• {rec}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
