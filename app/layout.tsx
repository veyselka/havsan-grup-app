import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Havsan Grup | Robotik, AI & Enerji Çözümleri",
  description: "Havsan Grup - Robotik Kodlama Eğitimi, Yapay Zeka & Yazılım Çözümleri, GES Enerji Hizmetleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
