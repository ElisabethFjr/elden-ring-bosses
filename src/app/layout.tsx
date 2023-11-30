import React from 'react';
import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
