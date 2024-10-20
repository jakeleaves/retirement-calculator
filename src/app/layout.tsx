// src/app/layout.tsx

import './globals.css';
import { ReactNode } from 'react';
import ClientProvider from '@/components/ClientProvider';

export const metadata = {
  title: 'Retirement Calculator',
  description: 'A modern retirement calculator built with Next.js, React, and Convex.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <ClientProvider>
          <Header />
          <main className="flex-grow flex items-center justify-center">
            {children}
          </main>
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}

const Header = () => (
  <header className="bg-white shadow-md w-full py-4">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800">Retirement FIRE Calculator</h1>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-200 text-gray-700 text-sm text-center py-4 mt-8">
    <div className="container mx-auto">
      © {new Date().getFullYear()} Your Company. All rights reserved.
    </div>
  </footer>
);
