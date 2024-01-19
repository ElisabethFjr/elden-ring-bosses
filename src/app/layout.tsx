import React from 'react';
import type { Metadata } from 'next';
import { EB_Garamond } from 'next/font/google';

// Import Components
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

// Import Styles
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.scss';

const EBGaramond = EB_Garamond({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: 'Elden Ring Bosses | %s',
    default: 'Elden Ring Bosses',
  },
  description: 'All bosses from the Elden Ring Video Game. NextJs Application.',
  keywords: 'Elden Ring, From Software, Boss, Bosses, NextJs, React',
  metadataBase: new URL('https://elden-ring-bosses-nine.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={EBGaramond.className}>
        <div className="container">
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
