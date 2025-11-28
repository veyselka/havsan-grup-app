import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enerji Çözümleri | Havsan Grup',
  description:
    'GES bakım, drone termal izleme, panel temizliği ve enerji sektörüne yönelik profesyonel hizmetler.',
  keywords: [
    'enerji',
    'GES bakım',
    'drone termal',
    'panel temizliği',
    'yenilenebilir enerji',
    'güneş enerjisi',
  ],
};

export default function EnerjiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
