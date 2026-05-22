import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pos from './pages/Pos';
import Portal from './pages/Portal';
import NotFound from './pages/NotFound';

const LOADER_DURATION = 2400;
const LOADER_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4';

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
        <div className="app-loader__media" aria-hidden="true">
          <video autoPlay loop muted playsInline src={LOADER_VIDEO_URL} />
        </div>
        <div className="app-loader__shade" aria-hidden="true" />
        <div className="app-loader__panel">
          <div className="app-loader__rings" aria-hidden="true">
            <span className="app-loader__ring app-loader__ring--outer" />
            <span className="app-loader__ring app-loader__ring--inner" />
          </div>
          <div className="app-loader__brand" aria-label="TrankaSoft">
            <span className="app-loader__name">TrankaSoft</span>
            <img
              src="/brand/loader-trankasoft.gif"
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
