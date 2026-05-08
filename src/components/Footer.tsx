import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const POS_URL = 'https://pos.trankasoft.com';
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-5">
              <img
                src="/brand/wordmark-negative.png"
                alt="TrankaSoft"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="font-display text-2xl font-medium text-cyan mb-4 tracking-tight">
              Software con calma.
            </p>
            <p className="text-sm text-white/60 max-w-sm leading-relaxed">
              Compañía argentina de desarrollo de software a medida. Construimos
              soluciones que funcionan, escalan y se mantienen — sin sorpresas.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow text-cyan mb-4">Productos</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/pos" className="text-white/70 hover:text-white transition">
                  TrankaPOS
                </Link>
              </li>
              <li>
                <Link to="/portal" className="text-white/70 hover:text-white transition">
                  TrankaPortal
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow text-cyan mb-4">Empresa</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`${POS_URL}/terms`} className="text-white/70 hover:text-white transition">
                  Términos
                </a>
              </li>
              <li>
                <a href={`${POS_URL}/privacy`} className="text-white/70 hover:text-white transition">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow text-cyan mb-4">Contacto</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:ventas@trankasoft.com"
                  className="text-white/70 hover:text-white transition flex items-center gap-2"
                >
                  <Mail size={14} />
                  ventas@trankasoft.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+5493412550031"
                  className="text-white/70 hover:text-white transition flex items-center gap-2"
                >
                  <Phone size={14} />
                  +54 9 3412 55-0031
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {YEAR} TrankaSoft™. Todos los derechos reservados.</p>
          <p>Hecho en Argentina 🇦🇷</p>
        </div>
      </div>
    </footer>
  );
}
