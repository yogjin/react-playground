import { Example } from './ErrorBoundary/Example';
import { Parent } from './Memoization/Parent';
import Main from './Suspense/after/Main';
import { Counter } from './useEffect/Counter';
import ReactHookForm from './react-hook-form/main';
import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
