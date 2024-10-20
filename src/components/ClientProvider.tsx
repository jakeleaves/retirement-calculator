// src/components/ClientProvider.tsx

'use client';

import { ConvexProvider } from 'convex/react';
import convex from '@/lib/convex';
import { ReactNode } from 'react';

interface ClientProviderProps {
  children: ReactNode;
}

const ClientProvider: React.FC<ClientProviderProps> = ({ children }) => {
  return (
    <ConvexProvider client={convex}>
      {children}
    </ConvexProvider>
  );
};

export default ClientProvider;
