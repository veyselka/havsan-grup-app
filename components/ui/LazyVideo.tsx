'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Loader2 } from 'lucide-react';

interface LazyVideoProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  poster,
  title,
  className = '',
  autoPlay = false,
  loop = false,
  muted = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle video load
  const handleLoadedData = () => {
    setIsLoaded(true);
    if (autoPlay && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play was prevented
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  };

  // Toggle play/pause
  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg bg-gray-900 ${className}`}
    >
      {isInView ? (
        <>
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoadedData={handleLoadedData}
            loop={loop}
            muted={muted}
            playsInline
          />

          {/* Loading indicator */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <Loader2 className="w-12 h-12 text-google-blue animate-spin" />
            </div>
          )}

          {/* Play/Pause overlay */}
          {!autoPlay && isLoaded && (
            <button
              onClick={handlePlayPause}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
              aria-label={isPlaying ? 'Durdur' : 'Oynat'}
            >
              {!isPlaying && (
                <div className="w-20 h-20 rounded-full bg-google-blue/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
              )}
            </button>
          )}

          {/* Video title */}
          {title && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-semibold">{title}</p>
            </div>
          )}
        </>
      ) : (
        // Placeholder before intersection
        <div
          className="w-full h-full bg-gray-900 animate-pulse"
          style={{ minHeight: '300px' }}
        />
      )}
    </div>
  );
};
