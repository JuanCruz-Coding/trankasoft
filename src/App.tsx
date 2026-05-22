import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pos from './pages/Pos';
import Portal from './pages/Portal';
import NotFound from './pages/NotFound';

const LOADER_DURATION = 2200;
const LOADER_READY_FALLBACK = 900;
const LOADER_HARD_CAP = 3600;

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
  const [isLoaderReady, setIsLoaderReady] = useState(false);

  useEffect(() => {
    const fallback = window.setTimeout(() => setIsLoaderReady(true), LOADER_READY_FALLBACK);
    const hardCap = window.setTimeout(() => setIsLoading(false), LOADER_HARD_CAP);
    return () => {
      window.clearTimeout(fallback);
      window.clearTimeout(hardCap);
    };
  }, []);

  useEffect(() => {
    if (!isLoaderReady) return undefined;

    const timer = window.setTimeout(() => setIsLoading(false), LOADER_DURATION);
    return () => window.clearTimeout(timer);
  }, [isLoaderReady]);

  return (
    <>
      <RouterProvider router={router} />

      <div
        className={`app-loader ${isLoading ? 'is-visible' : 'is-hidden'} ${
          isLoaderReady ? 'is-ready' : ''
        }`}
        aria-hidden={!isLoading}
      >
        <div className="app-loader__panel">
          <img
            src="/brand/loader-trankasoft.gif"
            alt="TrankaSoft"
            className="app-loader__mark"
            onLoad={() => setIsLoaderReady(true)}
            onError={() => setIsLoaderReady(true)}
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
