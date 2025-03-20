import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SEO from '@/components/SEO';
import "../config/fontawesome";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.destakse.com'),
  title: 'Desenvolvimento Web Profissional | Sites e Landing Pages',
  description: 'Criação de sites profissionais e landing pages sob medida para psicólogos, nutricionistas, dentistas, advogados e profissionais que buscam uma presença online de impacto.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Mariano Oliveira - Desenvolvimento Web',
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
  verification: {
    google: '_gm0Ou7Q9wH_mVZQZGREXTzaf0k_zbqhdjb_WRCiRtw',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <SEO />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
