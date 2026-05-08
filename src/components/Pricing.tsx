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
    <section id="planes" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">
            Planes simples, sin sorpresas
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Pagás mes a mes. Cancelás cuando quieras. Sin contrato, sin
            instalación, sin costo de implementación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.code}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.highlight
                  ? 'bg-brand-500 text-white shadow-xl scale-[1.02]'
                  : 'bg-white border border-slate-200'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-700 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Más elegido
                </span>
              )}

              <h3
                className={`font-bold text-lg mb-1 ${plan.highlight ? 'text-white' : 'text-ink'}`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-5 ${plan.highlight ? 'text-brand-100' : 'text-muted'}`}
              >
                {plan.desc}
              </p>

              <div className="mb-5">
                <span className="text-3xl font-extrabold">{plan.price}</span>
                <span
                  className={`text-sm ml-1 ${plan.highlight ? 'text-brand-100' : 'text-muted'}`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2 text-sm ${plan.highlight ? 'text-white' : 'text-ink'}`}
                  >
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-white' : 'text-brand-500'}`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`${POS_URL}/signup`}
                className={`text-center font-semibold px-4 py-2.5 rounded-lg transition ${
                  plan.highlight
                    ? 'bg-white text-brand-600 hover:bg-brand-50'
                    : 'bg-brand-500 text-white hover:bg-brand-600'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted mt-10">
          Precios en pesos argentinos. IVA incluido. Pago mensual con Mercado Pago.
        </p>
      </div>
    </section>
  );
}
