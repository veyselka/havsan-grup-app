import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim | HAVSAN GRUP',
  description: 'HAVSAN GRUP ile iletişime geçin. Robotik kodlama, yapay zeka ve enerji çözümleri için bize ulaşın.',
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
