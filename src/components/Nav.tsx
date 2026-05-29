import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const POS_URL = 'https://pos.trankasoft.com';

type NavLink = { label: string; href: string };
type NavCta = { label: string; href: string; external?: boolean };

const NAV_LINKS: Record<string, NavLink[]> = {
  '/': [
    { label: 'Productos', href: '#soluciones' },
    { label: 'Planes', href: '#planes' },
    { label: 'Portafolio', href: '#portafolio' },
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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <Link to="/" className="flex shrink-0 items-center" aria-label="Ir al inicio">
            <img
              src="/brand/wordmark.png"
              alt="TrankaSoft"
              className="h-12 w-auto object-contain sm:h-14 md:h-16 lg:h-20"
            />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <a
                key={`${link.href}-${link.label}`}
                href={link.href}
                className="text-sm font-medium text-slate transition hover:text-navy"
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
                className="hidden shrink-0 rounded-lg bg-blue px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue/20 transition hover:bg-blue-dark md:inline-flex"
              >
                {cta.label}
              </a>
            )}

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-navy transition hover:bg-ice lg:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

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
              className="fixed bottom-0 right-0 top-0 z-[70] flex w-full max-w-sm flex-col bg-white shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <img src="/brand/wordmark.png" alt="TrankaSoft" className="h-10 w-auto object-contain" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar menú"
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-navy transition hover:bg-ice"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-6">
                {links.length > 0 && (
                  <nav className="mb-6 flex flex-col gap-1">
                    {links.map((link) => (
                      <a
                        key={`${link.href}-${link.label}`}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="py-3 font-display text-2xl font-semibold tracking-tight text-navy transition hover:text-blue"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                )}

                <div className="space-y-3 border-t border-line pt-6">
                  <p className="eyebrow mb-3 text-blue">— Otros productos</p>
                  {pathname !== '/pos' && (
                    <Link
                      to="/pos"
                      onClick={() => setOpen(false)}
                      className="block py-2 font-medium text-navy transition hover:text-blue"
                    >
                      TrankaPOS
                    </Link>
                  )}
                  {pathname !== '/portal' && (
                    <Link
                      to="/portal"
                      onClick={() => setOpen(false)}
                      className="block py-2 font-medium text-navy transition hover:text-blue"
                    >
                      TrankaPortal
                    </Link>
                  )}
                  {pathname !== '/' && (
                    <Link
                      to="/"
                      onClick={() => setOpen(false)}
                      className="block py-2 font-medium text-navy transition hover:text-blue"
                    >
                      Inicio
                    </Link>
                  )}
                </div>
              </div>

              {cta && (
                <div className="border-t border-line px-5 py-4">
                  <a
                    href={cta.href}
                    onClick={() => setOpen(false)}
                    {...(cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="block w-full rounded-lg bg-blue px-4 py-3 text-center font-semibold text-white shadow-lg shadow-blue/20 transition hover:bg-blue-dark"
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
