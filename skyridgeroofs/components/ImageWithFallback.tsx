'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImageWithFallbackProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  fallbackSrc?: string | StaticImageData;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export default function ImageWithFallback({
  src,
  alt,
  className = "",
  fallbackSrc,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fill = false,
  width,
  height
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>(src);
  const [hasError, setHasError] = useState(false);
  const defaultFallback = "/images/skyridge/scrap/roofing-job.jpg";

  const handleError = () => {
    if (hasError) {
      // Already attempted fallback, use default site image
      if (imgSrc !== defaultFallback) {
        setImgSrc(defaultFallback);
      }
      return;
    }
    // First failure: try provided fallback if present, else default
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    } else {
      setImgSrc(defaultFallback);
    }
    setHasError(true);
  };

  // If fill is true, use Next.js Image with fill
  if (fill) {
    return (
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className={className && className.length > 0 ? className : 'object-contain'}
        onError={handleError}
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        quality={85}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
    );
  }

  // Otherwise, use regular Next Image with width/height
  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      loading={priority ? "eager" : "lazy"}
      quality={85}
      sizes={sizes}
      priority={priority}
    />
  );
}
