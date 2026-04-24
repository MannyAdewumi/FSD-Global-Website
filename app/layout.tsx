import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/Chatbot';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'FSD Global Services | Integrated Support & Facility Management',
  description: 'FSD Global Services provides facility management, recruitment, IT security, logistics, and export services. We handle your support services so you can focus on core operations.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-gray-50 text-gray-900 flex flex-col min-h-screen" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow flex flex-col w-full">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
