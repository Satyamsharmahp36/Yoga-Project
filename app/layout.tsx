import './globals.css';
import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Project Svaasthya - Transform Your Life Through Yoga',
  description: 'Join our spiritual community and discover inner peace through authentic yoga practice. Online classes, workshops, and spiritual guidance.',
  keywords: 'yoga, meditation, spiritual practice, wellness, mindfulness, yoga classes, online yoga',
  authors: [{ name: 'Project Svaasthya' }],
  creator: 'Project Svaasthya',
  publisher: 'Project Svaasthya',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://project-svaasthya.com',
    title: 'Project Svaasthya - Transform Your Life Through Yoga',
    description: 'Join our spiritual community and discover inner peace through authentic yoga practice.',
    siteName: 'Project Svaasthya',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Svaasthya - Transform Your Life Through Yoga',
    description: 'Join our spiritual community and discover inner peace through authentic yoga practice.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B7355" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}