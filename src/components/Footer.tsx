import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const POS_URL = 'https://pos.trankasoft.com';
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative z-20 overflow-hidden bg-[#05070c] text-white border-t border-white/10 pt-12 md:pt-16 pb-8 px-5 md:px-6">
      <div
        className="absolute inset-0 bg-[radial-gradient(700px_circle_at_25%_0%,rgba(61,129,227,0.18),transparent_62%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3 mb-5">
              <span className="text-xl font-semibold tracking-tight text-white">
                TrankaSoft
              </span>
              <img
                src="/brand/isotipo.png"
                alt=""
                aria-hidden="true"
                className="h-10 w-auto object-contain drop-shadow-[0_14px_32px_rgba(61,129,227,0.45)]"
              />
            </Link>
            <p className="text-2xl font-semibold text-[#A4F4FD] mb-4 tracking-tight">
              Software con calma.
            </p>
            <p className="text-sm text-white/78 max-w-sm leading-relaxed">
              Compañía argentina de desarrollo de software a medida. Construimos
              soluciones que funcionan, escalan y se mantienen sin sorpresas.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow text-[#A4F4FD] mb-4">Productos</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/pos" className="text-white/78 hover:text-white transition">
                  TrankaPOS
                </Link>
              </li>
              <li>
                <Link to="/portal" className="text-white/78 hover:text-white transition">
                  TrankaPortal
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow text-[#A4F4FD] mb-4">Empresa</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`${POS_URL}/terms`} className="text-white/78 hover:text-white transition">
                  Términos
                </a>
              </li>
              <li>
                <a href={`${POS_URL}/privacy`} className="text-white/78 hover:text-white transition">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow text-[#A4F4FD] mb-4">Contacto</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:ventas@trankasoft.com"
                  className="text-white/78 hover:text-white transition flex items-center gap-2"
                >
                  <Mail size={14} className="text-[#A4F4FD]" />
                  ventas@trankasoft.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+5493412550031"
                  className="text-white/78 hover:text-white transition flex items-center gap-2"
                >
                  <Phone size={14} className="text-[#A4F4FD]" />
                  +54 9 3412 55-0031
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/65">
          <p>© {YEAR} TrankaSoft. Todos los derechos reservados.</p>
          <p>Hecho en Argentina</p>
        </div>
      </div>
    </footer>
  );
}
