import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { Todos } from './Todos';

type Props = {};

const queryClient = new QueryClient();

export const TanstackQueryMain = ({}: Props) => {
  return (
    <ErrorBoundary fallback={<div>에러!</div>}>
      <Suspense fallback={<div>로딩 중...</div>}>
        <QueryClientProvider client={queryClient}>
          <Todos />
        </QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  );
};
