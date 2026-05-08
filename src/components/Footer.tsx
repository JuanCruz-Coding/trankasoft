import { Link } from 'react-router-dom';

const POS_URL = 'https://pos.trankasoft.com';
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-white border-t border-line py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-baseline gap-1 font-display font-extrabold text-xl tracking-tight mb-4">
              <span className="text-ink">tranka</span>
              <span className="text-brand-500">soft.</span>
            </Link>
            <p className="text-sm text-muted max-w-sm leading-relaxed">
              Software en la nube para que tu negocio funcione mejor. Hecho en
              Argentina, pensado para PyMEs argentinas.
            </p>
          </div>

          <div>
            <h4 className="text-ink font-semibold mb-4 text-xs uppercase tracking-[0.2em]">
              Productos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/pos" className="text-muted hover:text-ink transition">
                  TrankaPOS
                </Link>
              </li>
              <li>
                <Link to="/portal" className="text-muted hover:text-ink transition">
                  TrankaPortal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-ink font-semibold mb-4 text-xs uppercase tracking-[0.2em]">
              Empresa
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contacto@trankasoft.com"
                  className="text-muted hover:text-ink transition"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href={`${POS_URL}/terms`}
                  className="text-muted hover:text-ink transition"
                >
                  Términos
                </a>
              </li>
              <li>
                <a
                  href={`${POS_URL}/privacy`}
                  className="text-muted hover:text-ink transition"
                >
                  Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted">
          <p>© {YEAR} TrankaSoft. Todos los derechos reservados.</p>
          <p>Hecho en Argentina 🇦🇷</p>
        </div>
      </div>
    </footer>
  );
}
