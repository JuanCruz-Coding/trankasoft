import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const POS_URL = 'https://pos.trankasoft.com';

const PLANS = [
  {
    code: 'free',
    name: 'Free Trial',
    price: '$0',
    period: '14 días',
    desc: 'Probá todo Pro sin tarjeta.',
    features: [
      '1 sucursal',
      'Hasta 2 usuarios',
      'Hasta 100 productos',
      'Todas las funciones de Pro',
    ],
    cta: 'Empezar gratis',
    highlight: false,
  },
  {
    code: 'basic',
    name: 'Básico',
    price: '$40.000',
    period: '/mes',
    desc: 'Para arrancar con un comercio.',
    features: [
      '1 sucursal',
      'Hasta 2 usuarios',
      'Productos ilimitados',
      'Caja, ventas, stock',
      'Reportes básicos',
    ],
    cta: 'Elegir Básico',
    highlight: false,
  },
  {
    code: 'pro',
    name: 'Pro',
    price: '$100.000',
    period: '/mes',
    desc: 'El más elegido por kiosqueros con varias sucursales.',
    features: [
      'Hasta 3 sucursales',
      'Hasta 10 usuarios',
      'Productos ilimitados',
      'Transferencias entre sucursales',
      'Reportes avanzados + CSV',
      'Soporte prioritario',
    ],
    cta: 'Elegir Pro',
    highlight: true,
  },
  {
    code: 'business',
    name: 'Empresa',
    price: '$240.000',
    period: '/mes',
    desc: 'Para cadenas y operaciones grandes.',
    features: [
      'Sucursales ilimitadas',
      'Usuarios ilimitados',
      'Productos ilimitados',
      'API para integraciones',
      'SLA y onboarding dedicado',
    ],
    cta: 'Elegir Empresa',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="planes" className="py-28 px-6 bg-ice">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow text-blue mb-4">— 05 / Planes</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-navy leading-[1.05] mb-5 tracking-tight">
            Simples,<br />
            <span className="brand-gradient-text">sin sorpresas.</span>
          </h2>
          <p className="text-lg text-slate">
            Pagás mes a mes. Cancelás cuando quieras. Sin contrato, sin
            instalación, sin costo de implementación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.code}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: plan.highlight ? -8 : -4 }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.highlight
                  ? 'bg-navy text-white shadow-2xl shadow-navy/20'
                  : 'bg-white border border-line'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-7 bg-orange text-white text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded">
                  Más elegido
                </span>
              )}

              <h3
                className={`font-display font-bold text-xl mb-1 tracking-tight ${plan.highlight ? 'text-white' : 'text-navy'}`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${plan.highlight ? 'text-white/60' : 'text-slate'}`}
              >
                {plan.desc}
              </p>

              <div className="mb-6">
                <span className="font-display text-4xl font-bold tracking-tight">
                  {plan.price}
                </span>
                <span
                  className={`text-sm ml-1 ${plan.highlight ? 'text-white/60' : 'text-slate'}`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2 text-sm ${plan.highlight ? 'text-white/90' : 'text-navy/80'}`}
                  >
                    <Check
                      size={15}
                      className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-cyan' : 'text-blue'}`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`${POS_URL}/signup`}
                className={`text-center font-semibold px-4 py-3 rounded-lg transition ${
                  plan.highlight
                    ? 'bg-cyan text-navy hover:bg-white'
                    : 'bg-navy text-white hover:bg-blue'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-slate mt-12">
          Precios en pesos argentinos. IVA incluido. Pago mensual con Mercado Pago.
        </p>
      </div>
    </section>
  );
}
