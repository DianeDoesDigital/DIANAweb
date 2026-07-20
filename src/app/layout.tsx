import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/layout/Footer';
import GlobalAppDemo from '@/components/layout/GlobalAppDemo';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL('https://dianafortheanimals.org'),
  title: 'DIANA | Digital Infrastructure for Animal Networks and Advocacy',
  description: 'DIANA is the Digital Infrastructure for Animal Networks and Advocacy. We are the financial clearinghouse connecting animal sanctuaries to conscious consumers and ethical merchants. Here, our daily actions quietly support animals.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased snap-y snap-proximity">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Outfit:wght@700&family=Inter:wght@400&family=JetBrains+Mono:wght@500&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col selection:bg-primary selection:text-white snap-y snap-proximity">
        {children}
        <Footer />
        <GlobalAppDemo />
        <Analytics />
      </body>
    </html>
  );
}

