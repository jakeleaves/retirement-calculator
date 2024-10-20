// src/app/layout.tsx

import './globals.css';
import { ReactNode } from 'react';
import ClientProvider from '@/components/ClientProvider';
import DarkModeToggle from '@/components/DarkModeToggle'; // Import the dark mode toggle

export const metadata = {
  title: 'Retirement Calculator',
  description: 'A modern retirement calculator built with Next.js, React, and Convex.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
        <ClientProvider>
          <header className="bg-white dark:bg-gray-800 shadow-md w-full py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Retirement FIRE Calculator</h1>
              {/* Dark Mode Toggle */}
              <DarkModeToggle />
            </div>
          </header>
          <main className="flex-grow flex items-center justify-center">
            {children}
          </main>
          <footer className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm text-center py-4 mt-8">
            <div className="container mx-auto">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
          </footer>
        </ClientProvider>
      </body>
    </html>
  );
}
