import { Link } from 'react-router-dom';
import { ArrowUpRight, Store, Users, Sparkles } from 'lucide-react';

const PRODUCTS = [
  {
    code: 'pos',
    href: '/pos',
    icon: Store,
    name: 'TrankaPOS',
    tagline: 'Punto de venta multi-sucursal',
    desc: 'Control real de stock, caja y ventas para kioscos, despensas y comercios que crecen.',
    features: ['Multi-sucursal', 'Arqueo automático', 'Reportes en tiempo real'],
    cta: 'Conocer TrankaPOS',
    available: true,
  },
  {
    code: 'portal',
    href: '/portal',
    icon: Users,
    name: 'TrankaPortal',
    tagline: 'Gestión de RRHH para PyMEs',
    desc: 'Recibos de sueldo, ausencias, vacaciones y comunicación interna en una sola plataforma.',
    features: ['Recibos digitales', 'Solicitudes online', 'Portal del empleado'],
    cta: 'Conocer TrankaPortal',
    available: true,
  },
  {
    code: 'next',
    href: null,
    icon: Sparkles,
    name: 'Próximamente',
    tagline: 'Más herramientas en camino',
    desc: 'Estamos construyendo más productos para acompañarte. Si te sumás temprano, te avisamos primero.',
    features: [],
    cta: 'Avisame cuando esté',
    available: false,
  },
];

export default function ProductGrid() {
  return (
    <section id="productos" className="py-28 px-6 bg-surface-alt border-y border-line">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-brand-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Productos
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-ink leading-[1.05] mb-5">
            Una suite que crece<br />
            con tu negocio.
          </h2>
          <p className="text-lg text-muted">
            Empezás con lo que necesitás hoy. Sumás el resto cuando lo necesites.
            Una sola cuenta, una sola factura.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {PRODUCTS.map((p) => {
            const Icon = p.icon;
            const Inner = (
              <div
                className={`h-full rounded-2xl p-7 flex flex-col transition ${
                  p.available
                    ? 'bg-white border border-line hover:border-ink hover:-translate-y-0.5'
                    : 'bg-white/50 border border-dashed border-line'
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <Icon
                    size={28}
                    className={p.available ? 'text-brand-500' : 'text-muted'}
                  />
                  {p.available && (
                    <ArrowUpRight
                      size={18}
                      className="text-muted group-hover:text-ink transition"
                    />
                  )}
                </div>

                <h3 className="font-display font-bold text-2xl text-ink mb-1">
                  {p.name}
                </h3>
                <p className="text-sm text-brand-600 font-medium mb-4">
                  {p.tagline}
                </p>
                <p className="text-muted leading-relaxed mb-6 flex-1">
                  {p.desc}
                </p>

                {p.features.length > 0 && (
                  <ul className="space-y-1.5 mb-6">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="text-sm text-ink-soft flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-brand-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                <span
                  className={`text-sm font-semibold ${
                    p.available ? 'text-ink' : 'text-muted'
                  }`}
                >
                  {p.cta} {p.available && '→'}
                </span>
              </div>
            );

            return p.href ? (
              <Link key={p.code} to={p.href} className="group block">
                {Inner}
              </Link>
            ) : (
              <div key={p.code} className="group block cursor-not-allowed">
                {Inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
