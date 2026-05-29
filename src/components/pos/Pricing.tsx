import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const POS_URL = 'https://pos.trankasoft.com';

const PLANS = [
  {
    code: 'trial',
    name: 'Free Trial',
    price: '$0',
    period: '14 días',
    desc: 'Probá Comercio completo, sin tarjeta.',
    features: [
      '1 sucursal · 1 depósito',
      'Hasta 3 usuarios',
      'Hasta 1.500 productos',
      'Todas las funciones de Comercio prendidas',
    ],
    cta: 'Empezar gratis',
    highlight: false,
  },
  {
    code: 'kiosco',
    name: 'Kiosco',
    price: '$30.000',
    period: '/mes',
    desc: 'POS, caja y stock para arrancar.',
    features: [
      '1 sucursal · 1 depósito',
      'Hasta 3 usuarios',
      'Hasta 1.500 productos',
      'Factura electrónica AFIP + contingencia',
      'Mercado Pago QR + scanner por cámara',
      'Cola offline (vendés sin internet)',
    ],
    cta: 'Elegir Kiosco',
    highlight: false,
  },
  {
    code: 'comercio',
    name: 'Comercio',
    price: '$70.000',
    period: '/mes',
    desc: 'El más elegido por retail medio.',
    features: [
      '2 sucursales · 2 depósitos por sucursal',
      'Hasta 8 usuarios',
      'Productos ilimitados',
      'Cuenta corriente + Aging',
      'Combos / kits + Variantes (talle, color)',
      'Listas de precios + Promociones',
      'Pedidos y despachos retail',
      'Devoluciones + Grupos de clientes',
    ],
    cta: 'Elegir Comercio',
    highlight: true,
  },
  {
    code: 'cadena',
    name: 'Cadena',
    price: '$150.000',
    period: '/mes',
    desc: 'Para operar varias sucursales en serio.',
    features: [
      '8 sucursales · 3 depósitos por sucursal',
      'Hasta 25 usuarios',
      'Transferencias + Depósito central',
      'Reportes avanzados + Export CSV',
      'Permisos granulares + Auditoría',
      'API + Webhooks + Branding propio',
    ],
    cta: 'Elegir Cadena',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="planes" className="border-b border-line bg-ice/40 px-6 py-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue">
            <span className="h-px w-8 bg-blue/50" />
            05 / Planes
          </p>
          <h2 className="mb-5 text-4xl font-bold leading-[1.05] tracking-tight text-navy md:text-6xl">
            Simples, <span className="brand-gradient-text">sin sorpresas.</span>
          </h2>
          <p className="text-lg text-slate">
            Pagás mes a mes. Cancelás cuando quieras. Sin contrato, sin instalación, sin costo de
            implementación.
          </p>
        </div>

        <div className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.code}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className={`relative flex flex-col rounded-3xl p-7 ${
                plan.highlight
                  ? 'border-2 border-blue bg-white shadow-2xl shadow-blue/15'
                  : 'border border-line bg-white shadow-sm'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-7 rounded-full bg-blue px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                  Más elegido
                </span>
              )}

              <h3 className="mb-1 text-xl font-bold tracking-tight text-navy">{plan.name}</h3>
              <p className="mb-6 text-sm text-slate">{plan.desc}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold tracking-tight text-navy">{plan.price}</span>
                <span className="ml-1 text-sm text-slate">{plan.period}</span>
              </div>

              <ul className="mb-8 flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-navy">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue/10 text-blue">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`${POS_URL}/signup`}
                className={`rounded-lg px-4 py-3 text-center text-sm font-semibold transition ${
                  plan.highlight
                    ? 'bg-blue text-white shadow-lg shadow-blue/25 hover:bg-blue-dark'
                    : 'border border-line text-navy hover:border-blue/40 hover:bg-ice'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-slate">
          Precios en pesos argentinos. IVA incluido. Pago mensual con Mercado Pago.
          <br />
          ¿Más de 8 sucursales o necesidades específicas? Hablemos: contacto@trankasoft.com
        </p>
      </div>
    </section>
  );
}
