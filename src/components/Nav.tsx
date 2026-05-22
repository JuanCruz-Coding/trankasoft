import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const POS_URL = 'https://pos.trankasoft.com';

type NavLink = { label: string; href: string };
type NavCta = { label: string; href: string; external?: boolean };

const NAV_LINKS: Record<string, NavLink[]> = {
  '/': [
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Planes', href: '#planes' },
    { label: 'Portafolio', href: '#portafolio' },
    { label: 'Productos', href: '#soluciones' },
    { label: 'Contacto', href: '#contacto' },
  ],
  '/pos': [
    { label: 'Caracteristicas', href: '#features' },
    { label: 'Multi-sucursal', href: '#multi-sucursal' },
    { label: 'Planes', href: '#planes' },
    { label: 'FAQ', href: '#faq' },
  ],
};

const NAV_CTA: Record<string, NavCta> = {
  '/': { label: 'Hablar con ventas', href: '#contacto' },
  '/pos': { label: 'Probar TrankaPOS gratis', href: `${POS_URL}/signup`, external: true },
  '/portal': {
    label: 'Avisame cuando este',
    href: 'mailto:ventas@trankasoft.com?subject=Quiero%20probar%20TrankaPortal',
    external: true,
  },
};

export default function Nav() {
  const { pathname } = useLocation();
  const links = NAV_LINKS[pathname] ?? [];
  const cta = NAV_CTA[pathname];
  const isDarkRoute = pathname === '/' || pathname === '/pos' || pathname === '/portal';
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
        className={
          isDarkRoute
            ? 'fixed top-0 inset-x-0 z-50 bg-black/25 backdrop-blur-xl border-b border-white/10'
            : 'sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-line'
        }
      >
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center group shrink-0" aria-label="Ir al inicio">
            <img
              src={isDarkRoute ? '/brand/isotipo.png' : '/brand/wordmark.png'}
              alt="TrankaSoft"
              className={isDarkRoute ? 'h-9 w-9 object-contain' : 'h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain'}
            />
          </Link>

          <div className={isDarkRoute ? 'hidden md:flex items-center gap-8' : 'hidden lg:flex items-center gap-7'}>
            {links.map((link, index) => (
              <motion.a
                key={`${link.href}-${link.label}`}
                href={link.href}
                initial={isDarkRoute ? { opacity: 0, y: -6 } : false}
                animate={isDarkRoute ? { opacity: 1, y: 0 } : undefined}
                transition={isDarkRoute ? { duration: 0.45, delay: 0.1 + index * 0.05, ease: 'easeOut' } : undefined}
                className={
                  isDarkRoute
                    ? 'text-white/70 text-sm font-medium hover:text-white transition'
                    : 'text-sm font-medium text-slate hover:text-navy transition'
                }
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {cta && (
              <a
                href={cta.href}
                {...(cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={
                  isDarkRoute
                    ? 'group hidden md:inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98] shrink-0'
                    : 'hidden md:inline-flex bg-blue hover:bg-blue-dark text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition shadow-sm shadow-blue/20 shrink-0'
                }
              >
                {cta.label}
                {isDarkRoute && <ChevronRight size={16} className="transition-transform group-hover:translate-x-px" />}
              </a>
            )}

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              className={
                isDarkRoute
                  ? 'lg:hidden fixed top-3 right-6 z-[80] w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/15 transition'
                  : 'lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-navy hover:bg-ice transition'
              }
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
              className={isDarkRoute ? 'fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden' : 'fixed inset-0 z-[60] bg-navy/40 backdrop-blur-sm lg:hidden'}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.32, 0.72, 0, 1], duration: 0.3 }}
              className={
                isDarkRoute
                  ? 'fixed top-0 right-0 bottom-0 z-[70] w-full max-w-sm bg-[#0c0c0c] text-white shadow-2xl flex flex-col lg:hidden border-l border-white/10'
                  : 'fixed top-0 right-0 bottom-0 z-[70] w-full max-w-sm bg-white shadow-2xl flex flex-col lg:hidden'
              }
            >
              <div className={isDarkRoute ? 'flex items-center justify-between px-5 py-4 border-b border-white/10' : 'flex items-center justify-between px-5 py-4 border-b border-line'}>
                <img
                  src={isDarkRoute ? '/brand/wordmark-negative.png' : '/brand/wordmark.png'}
                  alt="TrankaSoft"
                  className="h-10 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar menu"
                  className={
                    isDarkRoute
                      ? 'w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/15 transition'
                      : 'w-10 h-10 flex items-center justify-center rounded-lg text-navy hover:bg-ice transition'
                  }
                >
                  <X size={22} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-6">
                {links.length > 0 && (
                  <nav className="flex flex-col gap-1 mb-6">
                    {links.map((link) => (
                      <a
                        key={`${link.href}-${link.label}`}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={
                          isDarkRoute
                            ? 'font-semibold text-2xl text-white hover:text-[#A4F4FD] py-3 transition tracking-tight'
                            : 'font-display font-semibold text-2xl text-navy hover:text-blue py-3 transition tracking-tight'
                        }
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                )}

                <div className={isDarkRoute ? 'border-t border-white/10 pt-6 space-y-3' : 'border-t border-line pt-6 space-y-3'}>
                  <p className={isDarkRoute ? 'eyebrow text-white/40 mb-3' : 'eyebrow text-blue mb-3'}>
                    - Otros productos
                  </p>
                  {pathname !== '/pos' && (
                    <Link
                      to="/pos"
                      onClick={() => setOpen(false)}
                      className={isDarkRoute ? 'block text-white/75 font-medium py-2 hover:text-white transition' : 'block text-navy font-medium py-2 hover:text-blue transition'}
                    >
                      TrankaPOS
                    </Link>
                  )}
                  {pathname !== '/portal' && (
                    <Link
                      to="/portal"
                      onClick={() => setOpen(false)}
                      className={isDarkRoute ? 'block text-white/75 font-medium py-2 hover:text-white transition' : 'block text-navy font-medium py-2 hover:text-blue transition'}
                    >
                      TrankaPortal
                    </Link>
                  )}
                  {pathname !== '/' && (
                    <Link
                      to="/"
                      onClick={() => setOpen(false)}
                      className="block text-navy font-medium py-2 hover:text-blue transition"
                    >
                      Inicio
                    </Link>
                  )}
                </div>
              </div>

              {cta && (
                <div className={isDarkRoute ? 'px-5 py-4 border-t border-white/10' : 'px-5 py-4 border-t border-line'}>
                  <a
                    href={cta.href}
                    onClick={() => setOpen(false)}
                    {...(cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={
                      isDarkRoute
                        ? 'block w-full text-center bg-white hover:bg-white/90 text-black font-semibold px-4 py-3 rounded-full transition'
                        : 'block w-full text-center bg-blue hover:bg-blue-dark text-white font-semibold px-4 py-3 rounded-lg transition shadow-lg shadow-blue/20'
                    }
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
