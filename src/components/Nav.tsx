import { Link, useLocation } from 'react-router-dom';

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

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-1 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center group shrink-0">
          <img
            src="/brand/wordmark.png"
            alt="TrankaSoft"
            className="h-16 md:h-20 w-auto object-contain"
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

        {cta && (
          <a
            href={cta.href}
            {...(cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="hidden sm:inline-flex bg-blue hover:bg-blue-dark text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition shadow-sm shadow-blue/20 shrink-0"
          >
            {cta.label}
          </a>
        )}
      </div>
    </nav>
  );
}
