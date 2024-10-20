// src/components/ClientWrapper.tsx (client component)

'use client';

import { ReactNode } from 'react';
import { ConvexProvider } from 'convex/react'; // Import ConvexProvider
import convex from '@/lib/convex'; // Import the Convex client

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <ConvexProvider client={convex}>
      {children}
    </ConvexProvider>
  );
}
