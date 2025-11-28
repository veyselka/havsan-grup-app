import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & Yazılım Çözümleri | Havsan Grup',
  description:
    'Kurumsal yapay zeka ve yazılım geliştirme hizmetleri. Google Workspace partner, ISO 27001, KVKK uyumlu çözümler.',
  keywords: [
    'yapay zeka',
    'AI',
    'yazılım geliştirme',
    'Google Workspace',
    'kurumsal çözümler',
    'ISO 27001',
    'KVKK',
  ],
};

export default function AILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
