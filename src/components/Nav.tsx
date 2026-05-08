import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const POS_URL = 'https://pos.trankasoft.com';

type NavLink = { label: string; href: string };
type NavCta = { label: string; href: string; external?: boolean };

const NAV_LINKS: Record<string, NavLink[]> = {
  '/': [
    { label: 'Productos', href: '#productos' },
    { label: 'Por qué', href: '#por-que' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ],
  '/pos': [
    { label: 'Características', href: '#features' },
    { label: 'Multi-sucursal', href: '#multi-sucursal' },
    { label: 'Planes', href: '#planes' },
    { label: 'FAQ', href: '#faq' },
  ],
};

const NAV_CTA: Record<string, NavCta> = {
  '/': { label: 'Hablar con ventas', href: '#contacto' },
  '/pos': { label: 'Probar TrankaPOS gratis', href: `${POS_URL}/signup`, external: true },
  '/portal': {
    label: 'Avisame cuando esté',
    href: 'mailto:ventas@trankasoft.com?subject=Quiero%20probar%20TrankaPortal',
    external: true,
  },
};

export default function Nav() {
  const { pathname } = useLocation();
  const links = NAV_LINKS[pathname] ?? [];
  const cta = NAV_CTA[pathname];
  const [open, setOpen] = useState(false);

  // Cerrar drawer al cambiar de ruta
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloquear scroll del body cuando el drawer está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-line">
        <div className="max-w-6xl mx-auto px-5 md:px-6 py-1 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src="/brand/wordmark.png"
              alt="TrankaSoft"
              className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-navy transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {cta && (
              <a
                href={cta.href}
                {...(cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="hidden md:inline-flex bg-blue hover:bg-blue-dark text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition shadow-sm shadow-blue/20 shrink-0"
              >
                {cta.label}
              </a>
            )}

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-navy hover:bg-ice transition"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-navy/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.32, 0.72, 0, 1], duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-sm bg-white shadow-2xl flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-line">
                <img
                  src="/brand/wordmark.png"
                  alt="TrankaSoft"
                  className="h-10 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar menú"
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-navy hover:bg-ice transition"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-6">
                {links.length > 0 && (
                  <nav className="flex flex-col gap-1 mb-6">
                    {links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="font-display font-semibold text-2xl text-navy hover:text-blue py-3 transition tracking-tight"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                )}

                <div className="border-t border-line pt-6 space-y-3">
                  <p className="eyebrow text-blue mb-3">— Otros productos</p>
                  {pathname !== '/pos' && (
                    <Link
                      to="/pos"
                      onClick={() => setOpen(false)}
                      className="block text-navy font-medium py-2 hover:text-blue transition"
                    >
                      TrankaPOS →
                    </Link>
                  )}
                  {pathname !== '/portal' && (
                    <Link
                      to="/portal"
                      onClick={() => setOpen(false)}
                      className="block text-navy font-medium py-2 hover:text-blue transition"
                    >
                      TrankaPortal →
                    </Link>
                  )}
                  {pathname !== '/' && (
                    <Link
                      to="/"
                      onClick={() => setOpen(false)}
                      className="block text-navy font-medium py-2 hover:text-blue transition"
                    >
                      Inicio →
                    </Link>
                  )}
                </div>
              </div>

              {cta && (
                <div className="px-5 py-4 border-t border-line">
                  <a
                    href={cta.href}
                    onClick={() => setOpen(false)}
                    {...(cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="block w-full text-center bg-blue hover:bg-blue-dark text-white font-semibold px-4 py-3 rounded-lg transition shadow-lg shadow-blue/20"
                  >
                    {cta.label}
                  </a>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
