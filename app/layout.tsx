import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marmik Joshi - Software Engineer Portfolio',
  description: 'Portfolio of Marmik Joshi, a passionate Software Engineer and Computer Engineering student with expertise in full-stack development, Java, Python, React, and AI technologies.',
  keywords: 'Marmik Joshi, Software Engineer, Computer Engineering, Full-stack Developer, Java, Python, React, Portfolio',
  authors: [{ name: 'Marmik Joshi' }],
  openGraph: {
    title: 'Marmik Joshi - Software Engineer Portfolio',
    description: 'Portfolio of Marmik Joshi, a passionate Software Engineer specializing in full-stack development and AI technologies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marmik Joshi - Software Engineer Portfolio',
    description: 'Portfolio of Marmik Joshi, a passionate Software Engineer specializing in full-stack development and AI technologies.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}