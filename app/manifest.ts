import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HAVSAN GRUP - Robotik Kodlama & AI & Enerji',
    short_name: 'HAVSAN',
    description: 'Robotik kodlama eğitimleri, yapay zeka hizmetleri ve enerji çözümleri sunan teknoloji şirketi',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4285F4',
    icons: [
      {
        src: '/images/icon.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
        purpose: 'any maskable',
      },
      {
        src: '/images/icon.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'any maskable',
      },
    ],
  };
}
