'use client';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { AppWrapper } from '@/context';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

const metadata: Metadata = {
  title: 'My Application Main Title',
  description: 'This is the description of the application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
