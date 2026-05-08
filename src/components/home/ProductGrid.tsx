import { Link } from 'react-router-dom';
import { ArrowUpRight, Store, Users, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

type Product = {
  code: string;
  index: string;
  href: string | null;
  icon: typeof Store;
  name: string;
  tagline: string;
  desc: string;
  features: string[];
  cta: string;
  status: string;
  available: boolean;
};

const PRODUCTS: Product[] = [
  {
    code: 'pos',
    index: '01',
    href: '/pos',
    icon: Store,
    name: 'TrankaPOS',
    tagline: 'Punto de venta multi-sucursal',
    desc: 'Control real de stock, caja y ventas para kioscos, despensas y comercios que crecen.',
    features: ['Multi-sucursal', 'Arqueo automático', 'Reportes filtrados'],
    cta: 'Conocer TrankaPOS',
    status: 'Disponible',
    available: true,
  },
  {
    code: 'portal',
    index: '02',
    href: '/portal',
    icon: Users,
    name: 'TrankaPortal',
    tagline: 'Gestión de RRHH para PyMEs',
    desc: 'Recibos de sueldo, ausencias y comunicación interna en una sola plataforma.',
    features: ['Recibos digitales', 'Solicitudes online', 'Portal del empleado'],
    cta: 'Conocer TrankaPortal',
    status: 'Disponible',
    available: true,
  },
  {
    code: 'next',
    index: '03',
    href: null,
    icon: Sparkles,
    name: 'Próximamente',
    tagline: 'Más herramientas en camino',
    desc: 'Estamos construyendo más productos para acompañarte. Si te sumás temprano, te avisamos primero.',
    features: [],
    cta: 'Avisame cuando esté',
    status: 'En desarrollo',
    available: false,
  },
];

export default function ProductGrid() {
  return (
    <section
      id="productos"
      className="relative py-20 md:py-32 px-5 md:px-6 bg-ice overflow-hidden"
    >
      <div className="absolute inset-0 dots-light opacity-50" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-blue/60" />
            <p className="eyebrow text-blue">02 — Productos</p>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-navy leading-[1.02] mb-6 tracking-[-0.035em]">
            Una suite que crece<br />
            <span className="text-slate-soft">con tu negocio.</span>
          </h2>
          <p className="text-lg text-slate max-w-xl leading-relaxed">
            Empezás con lo que necesitás hoy. Sumás el resto cuando lo necesites.
            Una sola cuenta, una sola factura.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {PRODUCTS.map((p, i) => {
            const Icon = p.icon;
            const Inner = (
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={p.available ? { y: -6 } : undefined}
                className={`relative h-full rounded-2xl p-7 md:p-8 flex flex-col overflow-hidden transition-[border-color,box-shadow] ${
                  p.available
                    ? 'bg-white border border-line group-hover:border-blue/40 group-hover:shadow-2xl group-hover:shadow-blue/15'
                    : 'bg-white/40 border border-dashed border-slate/30'
                }`}
              >
                <span
                  className={`absolute -top-6 -right-3 font-display font-bold text-[160px] leading-none tracking-[-0.06em] pointer-events-none select-none transition-colors duration-500 ${
                    p.available
                      ? 'text-ice group-hover:text-blue/10'
                      : 'text-slate/10'
                  }`}
                  aria-hidden="true"
                >
                  {p.index}
                </span>

                <div className="relative flex items-start justify-between mb-7">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      p.available
                        ? 'bg-blue/10 group-hover:bg-blue group-hover:rotate-[-6deg]'
                        : 'bg-slate/10'
                    }`}
                  >
                    <Icon
                      size={22}
                      className={
                        p.available
                          ? 'text-blue group-hover:text-white transition-colors'
                          : 'text-slate'
                      }
                    />
                  </div>

                  <span
                    className={`text-[10px] font-semibold uppercase tracking-[0.2em] px-2.5 py-1.5 rounded-full flex items-center gap-1.5 ${
                      p.available
                        ? 'bg-blue/10 text-blue'
                        : 'bg-orange/10 text-orange'
                    }`}
                  >
                    <span
                      className={`status-dot ${p.available ? 'status-dot--blue' : ''}`}
                      style={!p.available ? { background: 'var(--color-orange)', animation: 'none' } : undefined}
                    />
                    {p.status}
                  </span>
                </div>

                <div className="relative">
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-navy mb-1.5 tracking-[-0.025em]">
                    {p.name}
                  </h3>
                  <p className="text-sm text-blue font-medium mb-5">
                    {p.tagline}
                  </p>
                  <p className="text-slate leading-relaxed mb-6 text-[15px]">
                    {p.desc}
                  </p>
                </div>

                {p.features.length > 0 && (
                  <ul className="relative space-y-2.5 mb-7 pb-7 border-b border-line">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="text-sm text-navy/85 flex items-center gap-3"
                      >
                        <span className="w-3.5 h-px bg-blue shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="relative mt-auto flex items-center justify-between">
                  <span
                    className={`text-sm font-semibold ${
                      p.available ? 'text-navy' : 'text-slate'
                    }`}
                  >
                    {p.cta}
                  </span>
                  {p.available && (
                    <span className="w-9 h-9 rounded-full bg-navy/5 group-hover:bg-blue text-navy group-hover:text-white flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight
                        size={16}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </span>
                  )}
                </div>
              </motion.div>
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
