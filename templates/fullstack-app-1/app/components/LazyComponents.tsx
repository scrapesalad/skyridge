'use client';

import dynamic from 'next/dynamic';

// Client Component wrapper for components that need ssr: false
// This is required because ssr: false is not allowed in Server Components (layout.tsx)

const EmailFollowUpSystem = dynamic(() => import('./EmailFollowUpSystem'), {
  ssr: false,
});

export default function LazyComponents() {
  return (
    <>
      <EmailFollowUpSystem />
    </>
  );
}

