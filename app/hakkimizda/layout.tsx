import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda | HAVSAN GRUP',
  description: 'HAVSAN GRUP - 2015 yılından beri robotik kodlama eğitimleri, yapay zeka çözümleri ve enerji hizmetleri sunuyoruz.',
};

export default function HakkimizdaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
