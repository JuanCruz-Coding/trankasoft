import { Link, useLocation } from 'react-router-dom';

const POS_URL = 'https://pos.trankasoft.com';

export default function Nav() {
  const { pathname } = useLocation();
  const isPos = pathname === '/pos';

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-line">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/brand/isotipo.png"
            alt="TrankaSoft"
            className="h-8 w-8 object-contain"
          />
          <span className="font-display font-bold text-lg text-navy tracking-tight">
            TrankaSoft
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate">
          <Link to="/pos" className="hover:text-navy transition">
            TrankaPOS
          </Link>
          <Link to="/portal" className="hover:text-navy transition">
            TrankaPortal
          </Link>
          {isPos && (
            <a href="#planes" className="hover:text-navy transition">
              Planes
            </a>
          )}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`${POS_URL}/login`}
            className="hidden sm:inline-block text-sm font-medium text-slate hover:text-navy px-3 py-2 transition"
          >
            Iniciar sesión
          </a>
          <a
            href={`${POS_URL}/signup`}
            className="bg-blue hover:bg-blue-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition shadow-sm shadow-blue/20"
          >
            Probar gratis
          </a>
        </div>
      </div>
    </nav>
  );
}
