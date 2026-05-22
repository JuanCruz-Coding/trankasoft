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
    features: ['1 sucursal', 'Hasta 2 usuarios', 'Hasta 100 productos', 'Todas las funciones de Pro'],
    cta: 'Empezar gratis',
    highlight: false,
  },
  {
    code: 'basic',
    name: 'Básico',
    price: '$40.000',
    period: '/mes',
    desc: 'Para arrancar con un comercio.',
    features: ['1 sucursal', 'Hasta 2 usuarios', 'Productos ilimitados', 'Caja, ventas, stock', 'Reportes básicos'],
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
    features: ['Sucursales ilimitadas', 'Usuarios ilimitados', 'Productos ilimitados', 'API para integraciones', 'SLA y onboarding dedicado'],
    cta: 'Elegir Empresa',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="planes" className="py-16 md:py-28 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <p className="inline-flex items-center gap-2 text-xs font-medium text-white/60 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            05 / Planes
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold text-white leading-[1.05] mb-5 tracking-tight">
            Simples,
            <br />
            <span className="text-[#A4F4FD]">sin sorpresas.</span>
          </h2>
          <p className="text-lg text-white/60">
            Pagás mes a mes. Cancelás cuando quieras. Sin contrato, sin instalación,
            sin costo de implementación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.code}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              whileHover={{ y: plan.highlight ? -8 : -4 }}
              className={`relative rounded-3xl p-7 flex flex-col ${
                plan.highlight
                  ? 'bg-white text-black shadow-2xl shadow-[#00d2ff]/15'
                  : 'liquid-glass text-white'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-7 bg-[#00d2ff] text-black text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full">
                  Más elegido
                </span>
              )}

              <h3 className="text-xl font-semibold mb-1 tracking-tight">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlight ? 'text-black/58' : 'text-white/52'}`}>
                {plan.desc}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                <span className={`text-sm ml-1 ${plan.highlight ? 'text-black/55' : 'text-white/48'}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2 text-sm ${plan.highlight ? 'text-black/78' : 'text-white/72'}`}
                  >
                    <Check
                      size={15}
                      className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-black' : 'text-[#A4F4FD]'}`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`${POS_URL}/signup`}
                className={`text-center font-semibold px-4 py-3 rounded-full transition ${
                  plan.highlight
                    ? 'bg-black text-white hover:bg-[#111]'
                    : 'bg-white text-black hover:bg-white/90'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-white/45 mt-12">
          Precios en pesos argentinos. IVA incluido. Pago mensual con Mercado Pago.
        </p>
      </div>
    </section>
  );
}
