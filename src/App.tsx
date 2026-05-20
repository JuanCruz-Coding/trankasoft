import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pos from './pages/Pos';
import Portal from './pages/Portal';
import NotFound from './pages/NotFound';

const LOADER_DURATION = 2200;

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/pos', element: <Pos /> },
      { path: '/portal', element: <Portal /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), LOADER_DURATION);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <RouterProvider router={router} />

      <div className={`app-loader ${isLoading ? 'is-visible' : 'is-hidden'}`} aria-hidden={!isLoading}>
        <div className="app-loader__panel">
          <img
            src="/brand/loader-trankasoft.gif"
            alt="TrankaSoft"
            className="app-loader__mark"
          />
          <div className="app-loader__progress" aria-hidden="true">
            <span />
          </div>
          <p className="app-loader__text">Cargando experiencia digital</p>
        </div>
      </div>
    </>
  );
}
