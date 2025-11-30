'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function WebVitals() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const reportWebVitals = async () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');

        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      }
    };

    reportWebVitals();
  }, [pathname, searchParams]);

  return null;
}
