import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export const Decorators = (Story) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter><Story /></MemoryRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
