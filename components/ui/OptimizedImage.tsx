'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes,
  quality = 85,
  objectFit = 'cover',
  placeholder = 'empty',
  blurDataURL,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-gray-100',
          className
        )}
        style={
          fill
            ? undefined
            : { width: width || 'auto', height: height || 'auto' }
        }
      >
        <svg
          className="h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    );
  }

  const imageProps = {
    src,
    alt,
    quality,
    priority,
    onLoadingComplete: () => setIsLoading(false),
    onError: () => {
      setHasError(true);
      setIsLoading(false);
    },
    className: cn(
      'transition-opacity duration-300',
      isLoading ? 'opacity-0' : 'opacity-100',
      className
    ),
    ...(placeholder === 'blur' && blurDataURL
      ? { placeholder: 'blur' as const, blurDataURL }
      : {}),
  };

  if (fill) {
    return (
      <div className="relative overflow-hidden">
        <Image
          {...imageProps}
          fill
          sizes={sizes || '100vw'}
          style={{ objectFit }}
        />
      </div>
    );
  }

  return (
    <Image
      {...imageProps}
      width={width}
      height={height}
      sizes={sizes}
      style={{ objectFit }}
    />
  );
}
