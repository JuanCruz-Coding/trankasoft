import { Check } from 'lucide-react';

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
    <section id="planes" className="py-28 px-6 bg-white border-y border-line">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-brand-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Planes
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-ink leading-[1.05] mb-5">
            Simples, sin sorpresas.
          </h2>
          <p className="text-lg text-muted">
            Pagás mes a mes. Cancelás cuando quieras. Sin contrato, sin
            instalación, sin costo de implementación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLANS.map((plan) => (
            <div
              key={plan.code}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.highlight
                  ? 'bg-ink text-white'
                  : 'bg-white border border-line'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-7 bg-brand-500 text-white text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded">
                  Más elegido
                </span>
              )}

              <h3
                className={`font-bold text-lg mb-1 ${plan.highlight ? 'text-white' : 'text-ink'}`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${plan.highlight ? 'text-white/70' : 'text-muted'}`}
              >
                {plan.desc}
              </p>

              <div className="mb-6">
                <span className="font-display text-4xl font-extrabold tracking-tight">{plan.price}</span>
                <span
                  className={`text-sm ml-1 ${plan.highlight ? 'text-white/70' : 'text-muted'}`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2 text-sm ${plan.highlight ? 'text-white/90' : 'text-ink-soft'}`}
                  >
                    <Check
                      size={15}
                      className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-brand-500' : 'text-brand-500'}`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`${POS_URL}/signup`}
                className={`text-center font-semibold px-4 py-3 rounded-lg transition ${
                  plan.highlight
                    ? 'bg-brand-500 text-white hover:bg-brand-600'
                    : 'bg-ink text-white hover:bg-ink-soft'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted mt-12">
          Precios en pesos argentinos. IVA incluido. Pago mensual con Mercado Pago.
        </p>
      </div>
    </section>
  );
}
