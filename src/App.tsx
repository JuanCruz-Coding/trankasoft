import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pos from './pages/Pos';
import Portal from './pages/Portal';
import NotFound from './pages/NotFound';

const LOADER_DURATION = 1300;

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

      <div
        className={`app-loader ${isLoading ? 'is-visible' : 'is-hidden'}`}
        aria-hidden={!isLoading}
      >
        <div className="app-loader__shade" aria-hidden="true" />
        <div className="app-loader__panel">
          <div className="app-loader__rings" aria-hidden="true">
            <span className="app-loader__ring app-loader__ring--outer" />
            <span className="app-loader__ring app-loader__ring--inner" />
          </div>
          <div className="app-loader__brand" aria-label="TrankaSoft">
            <span className="app-loader__name">TrankaSoft</span>
            <img
              src="/brand/isotipo.png"
              alt=""
              aria-hidden="true"
              className="app-loader__gif"
            />
          </div>
          <div className="app-loader__progress" aria-hidden="true">
            <span />
          </div>
          <p className="app-loader__text">Preparando experiencia digital</p>
          <div className="app-loader__status" aria-hidden="true">
            <span>Software con calma</span>
            <span>Cloud ready</span>
          </div>
        </div>
      </div>
    </>
  );
}
