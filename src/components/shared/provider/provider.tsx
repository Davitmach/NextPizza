'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NotificationProvider } from '@/context/notification';
import { SessionProvider } from 'next-auth/react';
import { QessionProvider } from '@/context/session';

const queryClient = new QueryClient();

export default function ClientProviders({ children}: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <QessionProvider>
      <QueryClientProvider client={queryClient}>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </QueryClientProvider>
      </QessionProvider>
    </SessionProvider>
  );
}