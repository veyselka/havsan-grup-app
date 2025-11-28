import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Robotik Kodlama Eğitimi | Havsan Grup',
  description:
    'Çocuklarınız için modern STEM ve robotik kodlama eğitimleri. Elazığ merkezli, profesyonel robotik kodlama kursları.',
  keywords: [
    'robotik kodlama',
    'STEM eğitimi',
    'çocuklar için kodlama',
    'robotik',
    'kodlama kursu',
    'Elazığ',
  ],
};

export default function RobotikLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
