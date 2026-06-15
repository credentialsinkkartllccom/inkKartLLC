import React from 'react';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import ClientProviders from '@/components/ClientProviders';
import MainLayout from '@/components/MainLayout';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://inkkartllc.com'),
  title: {
    default: 'InkKartLLC | Premium Printing Solutions & Supplies',
    template: '%s | InkKartLLC'
  },
  description: 'InkKartLLC provides elite printing hardware, genuine ink, and professional toner solutions. Authorized reseller of top-tier printers for home and office excellence.',
  keywords: ['printers', 'ink cartridges', 'toner supplies', 'office printing', 'home office setup', 'InkKartLLC', 'professional printers', 'authorized reseller'],
  authors: [{ name: 'InkKartLLC Team' }],
  creator: 'InkKartLLC',
  publisher: 'InkKartLLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'InkKartLLC | Premium Printing Solutions',
    description: 'Experience elite performance with InkKartLLC. Your authorized source for professional printers and supplies.',
    url: 'https://inkkartllc.com',
    siteName: 'InkKartLLC',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'InkKartLLC Premium Printing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InkKartLLC | Premium Printing Solutions',
    description: 'Authorized source for professional printers and supplies.',
    creator: '@inkkartllc',
    images: ['/og-image.png'],
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable} ${inter.variable}`}>
      <body>
        <ClientProviders>
          <MainLayout>{children}</MainLayout>
        </ClientProviders>
      </body>
    </html>
  );
}
