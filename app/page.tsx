'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Preloader } from '@/components/sections/Preloader';
import { ModuleCard } from '@/components/sections/ModuleCard';
import { BUSINESS_UNITS } from '@/lib/constants';
import { WebVitals } from '@/components/WebVitals';

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [hasSeenPreloader, setHasSeenPreloader] = useState(false);

  useEffect(() => {
    // Check if user has already seen the preloader in this session
    const seen = sessionStorage.getItem('preloader-seen');
    if (seen) {
      setShowPreloader(false);
      setHasSeenPreloader(true);
    }
  }, []);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('preloader-seen', 'true');
    setShowPreloader(false);
    setHasSeenPreloader(true);
  };

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {showPreloader && !hasSeenPreloader && (
          <Preloader key="preloader" onComplete={handlePreloaderComplete} />
        )}
      </AnimatePresence>

      {/* 3-Column Split Screen Layout */}
      <div className="grid lg:grid-cols-3 min-h-screen">
        <ModuleCard
          title="Robotik Kodlama"
          description={BUSINESS_UNITS.robotik.description}
          href="/robotik"
          backgroundImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
          colors={{
            primary: BUSINESS_UNITS.robotik.color,
            bg: BUSINESS_UNITS.robotik.bgColor || '#E3E5E8',
            text: '#1A237E',
          }}
          icon={
            <svg
              className="h-20 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          }
        />

        <ModuleCard
          title="AI & Yazılım"
          description={BUSINESS_UNITS.ai.description}
          href="/ai"
          backgroundImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
          colors={{
            primary: BUSINESS_UNITS.ai.color,
            bg: '#F5F7FA',
            text: '#4E85EB',
          }}
          icon={
            <svg
              className="h-20 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          }
        />

        <ModuleCard
          title="Enerji Çözümleri"
          description={BUSINESS_UNITS.enerji.description}
          href="/enerji"
          backgroundImage="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
          colors={{
            primary: BUSINESS_UNITS.enerji.color,
            bg: '#FFFBF0',
            text: '#F99F1B',
          }}
          icon={
            <svg
              className="h-20 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          }
        />
      </div>
      <WebVitals />
    </main>
  );
}
