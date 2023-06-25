import { createBrowserRouter } from 'react-router-dom';
import { rootRoutes } from './routes/parent/rootRoutes';

const router = createBrowserRouter(rootRoutes, {
  basename: '/typescript-react-playground/',
});

export default router;
