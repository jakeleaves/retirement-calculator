// src/app/layout.tsx (server component)

import './globals.css';
import { ReactNode } from 'react';
import ClientWrapper from '@/components/ClientWrapper'; // New component that handles client-side logic

export const metadata = {
  title: 'Retirement Calculator',
  description: 'A modern retirement calculator built with Next.js, React, and Convex.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* ClientWrapper handles ConvexProvider and any client-side logic */}
        <ClientWrapper>
          <Header />
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}

const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Retirement Calculator</h1>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-blue-600 text-white p-4 mt-8">
    <div className="container mx-auto text-center">
      © {new Date().getFullYear()} Your Company
    </div>
  </footer>
);
