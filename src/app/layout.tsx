import React from 'react';
import type { Metadata } from 'next';

// Import Components
import Header from '@/components/Header/Header';

// Import Styles
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.scss';

export const metadata: Metadata = {
  title: 'Elden Ring Bosses',
  description: 'All bosses from the Elden Ring Video Game. NextJs Application.',
  keywords: 'Elden Ring, From Software, Boss, Bosses, NextJs, React',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
