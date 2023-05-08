import '@/styles/globals.css';
import { Metadata } from 'next';
import React, { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Next Admin Dashboard',
    template: '%s | Admin Dashboard',
  },
  description:
    'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="">
      <body className="dark:bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')] text-gray-600  dark:text-gray-400">
        {children}
      </body>
    </html>
  );
}
