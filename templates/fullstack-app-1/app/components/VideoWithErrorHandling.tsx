'use client';

import { useState } from 'react';

interface VideoWithErrorHandlingProps {
  src: string;
  className?: string;
  preload?: 'none' | 'metadata' | 'auto';
  controls?: boolean;
}

export default function VideoWithErrorHandling({
  src,
  className = 'w-full h-full object-cover',
  preload = 'metadata',
  controls = true,
}: VideoWithErrorHandlingProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return null; // Silently hide video on error
  }

  return (
    <video
      src={src}
      controls={controls}
      className={className}
      preload={preload}
      onError={() => {
        // Silently handle video load errors to prevent console errors
        setHasError(true);
      }}
    >
      Your browser does not support the video tag.
    </video>
  );
}




