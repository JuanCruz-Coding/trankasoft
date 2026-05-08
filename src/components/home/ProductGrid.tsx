import { Link } from 'react-router-dom';
import { ArrowUpRight, Store, Users, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const PRODUCTS = [
  {
    code: 'pos',
    href: '/pos',
    icon: Store,
    name: 'TrankaPOS',
    tagline: 'Punto de venta multi-sucursal',
    desc: 'Control real de stock, caja y ventas para kioscos, despensas y comercios que crecen.',
    features: ['Multi-sucursal', 'Arqueo automático', 'Reportes filtrados'],
    cta: 'Conocer TrankaPOS',
    available: true,
  },
  {
    code: 'portal',
    href: '/portal',
    icon: Users,
    name: 'TrankaPortal',
    tagline: 'Gestión de RRHH para PyMEs',
    desc: 'Recibos de sueldo, ausencias y comunicación interna en una sola plataforma.',
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
    <section id="productos" className="py-28 px-6 bg-ice">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow text-blue mb-4">— 02 / Productos</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-navy leading-[1.05] mb-5 tracking-tight">
            Una suite que crece<br />
            con tu negocio.
          </h2>
          <p className="text-lg text-slate">
            Empezás con lo que necesitás hoy. Sumás el resto cuando lo necesites.
            Una sola cuenta, una sola factura.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {PRODUCTS.map((p, i) => {
            const Icon = p.icon;
            const Inner = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                whileHover={p.available ? { y: -6 } : undefined}
                className={`h-full rounded-2xl p-7 flex flex-col ${
                  p.available
                    ? 'bg-white border border-line hover:border-blue hover:shadow-xl hover:shadow-blue/10 transition-[border-color,box-shadow]'
                    : 'bg-white/40 border border-dashed border-slate/30'
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      p.available ? 'bg-blue/10' : 'bg-slate/10'
                    }`}
                  >
                    <Icon
                      size={22}
                      className={p.available ? 'text-blue' : 'text-slate'}
                    />
                  </div>
                  {p.available && (
                    <ArrowUpRight
                      size={18}
                      className="text-slate group-hover:text-navy transition"
                    />
                  )}
                </div>

                <h3 className="font-display font-bold text-2xl text-navy mb-1 tracking-tight">
                  {p.name}
                </h3>
                <p className="text-sm text-blue font-medium mb-4">
                  {p.tagline}
                </p>
                <p className="text-slate leading-relaxed mb-6 flex-1 text-sm">
                  {p.desc}
                </p>

                {p.features.length > 0 && (
                  <ul className="space-y-1.5 mb-6">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="text-sm text-navy/80 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-blue" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                <span
                  className={`text-sm font-semibold ${
                    p.available ? 'text-navy' : 'text-slate'
                  }`}
                >
                  {p.cta} {p.available && '→'}
                </span>
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
