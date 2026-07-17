import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ice/40 px-5 pb-8 pt-12 text-navy md:px-6 md:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="mb-5 inline-flex items-center gap-3">
              <img
                src="/brand/wordmark.png"
                alt="TrankaSoft"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mb-4 text-2xl font-bold tracking-tight text-blue">Software con calma.</p>
            <p className="max-w-sm text-sm leading-relaxed text-slate">
              Compañía argentina de desarrollo de software a medida. Construimos soluciones que
              funcionan, escalan y se mantienen sin sorpresas.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow mb-4 text-blue">Productos</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/pos" className="text-slate transition hover:text-navy">
                  TrankaPOS
                </Link>
              </li>
              <li>
                <a
                  href="https://ciboapp.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate transition hover:text-navy"
                >
                  Cibo
                </a>
              </li>
              <li>
                <Link to="/portal" className="text-slate transition hover:text-navy">
                  TrankaPortal
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow mb-4 text-blue">Empresa</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/nosotros" className="text-slate transition hover:text-navy">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/terminos" className="text-slate transition hover:text-navy">
                  Términos
                </Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-slate transition hover:text-navy">
                  Privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow mb-4 text-blue">Contacto</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:ventas@trankasoft.com"
                  className="flex items-center gap-2 text-slate transition hover:text-navy"
                >
                  <Mail size={14} className="text-blue" />
                  ventas@trankasoft.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+5493412550031"
                  className="flex items-center gap-2 text-slate transition hover:text-navy"
                >
                  <Phone size={14} className="text-blue" />
                  +54 9 3412 55-0031
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-slate md:flex-row">
          <p>© {YEAR} TrankaSoft. Todos los derechos reservados.</p>
          <p>Hecho en Argentina</p>
        </div>
      </div>
    </footer>
  );
}
