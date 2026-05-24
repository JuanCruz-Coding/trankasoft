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
          <br />
          ¿Más de 8 sucursales o necesidades específicas? Hablemos: contacto@trankasoft.com
        </p>
      </div>
    </section>
  );
}
