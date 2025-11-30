import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ToastProvider } from "@/components/ui/Toast";
import { organizationSchema, getJsonLd } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Havsan Grup | Robotik, AI & Enerji Çözümleri",
  description: "Havsan Grup - Robotik Kodlama Eğitimi, Yapay Zeka & Yazılım Çözümleri, GES Enerji Hizmetleri",
  keywords: [
    'robotik kodlama',
    'yapay zeka',
    'AI çözümleri',
    'enerji',
    'GES bakım',
    'yazılım geliştirme',
    'STEM eğitimi',
  ],
  authors: [{ name: 'Havsan Grup' }],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://havsangrup.com',
    title: 'Havsan Grup | Robotik, AI & Enerji Çözümleri',
    description: 'Robotik Kodlama Eğitimi, Yapay Zeka & Yazılım Çözümleri, GES Enerji Hizmetleri',
    siteName: 'Havsan Grup',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Havsan Grup | Robotik, AI & Enerji Çözümleri',
    description: 'Robotik Kodlama Eğitimi, Yapay Zeka & Yazılım Çözümleri, GES Enerji Hizmetleri',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: getJsonLd(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>
        <ToastProvider>
          <Navbar />
          <div className="pt-16 md:pt-20">
            {children}
          </div>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
