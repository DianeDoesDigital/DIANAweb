import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'DIANA | Digital Infrastructure for Animal Networks and Advocacy',
  description:
    'The financial ecosystem bridging conscious consumers, ethical merchants, and animal sanctuaries.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full flex flex-col selection:bg-primary selection:text-white">
        {children}
        <Footer />
      </body>
    </html>
  );
}
