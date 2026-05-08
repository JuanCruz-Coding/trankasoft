import { Link, useLocation } from 'react-router-dom';

const POS_URL = 'https://pos.trankasoft.com';

export default function Nav() {
  const { pathname } = useLocation();
  const isPos = pathname === '/pos';

  return (
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-line">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-1 font-display font-extrabold text-xl tracking-tight">
          <span className="text-ink">tranka</span>
          <span className="text-brand-500">soft.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          <Link to="/" className="hover:text-ink transition">
            Inicio
          </Link>
          <Link to="/pos" className="hover:text-ink transition">
            TrankaPOS
          </Link>
          <Link to="/portal" className="hover:text-ink transition">
            TrankaPortal
          </Link>
          {isPos && (
            <a href="#planes" className="hover:text-ink transition">
              Planes
            </a>
          )}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`${POS_URL}/login`}
            className="hidden sm:inline-block text-sm font-medium text-muted hover:text-ink px-3 py-2 transition"
          >
            Iniciar sesión
          </a>
          <a
            href={`${POS_URL}/signup`}
            className="bg-ink hover:bg-ink-soft text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
          >
            Probar gratis
          </a>
        </div>
      </div>
    </nav>
  );
}
