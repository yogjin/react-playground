import { reactChildren } from '../children/reactChildren';
import { Route } from '../../../types/common';
import { tanstackQueryChildren } from '../children/tanstackQueryChildren';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from '../../../pages/Home';
import Layout from '../../../components/Layout/Layout';
import { UXChildren } from '../children/UXChildren';

const queryClient = new QueryClient();

export const rootRoutes: Route[] = [
  {
    path: '/',
    element: <Home />,
    title: 'README',
  },
  {
    path: '/react',
    element: (
      <Layout
        title="React/TS"
        routes={reactChildren}
        render={<Outlet />}
        color="#149eca"
        backgroundColor="#23272F"
      />
    ),
    children: reactChildren,
    title: 'React',
  },
  {
    path: '/tanstack-query',
    element: (
      <Layout
        title="tanstack-query"
        routes={tanstackQueryChildren}
        render={
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        }
        color="#EF4444"
        backgroundColor="#1E1E1E"
      />
    ),
    children: tanstackQueryChildren,
    title: 'tanstack-query',
  },
  {
    path: '/ux-technique',
    element: (
      <Layout
        title="ux-technique"
        routes={UXChildren}
        render={<Outlet />}
        color="#EF4444"
        backgroundColor="#1E1E1E"
      />
    ),
    children: UXChildren,
    title: 'UX-technique',
  },
];
