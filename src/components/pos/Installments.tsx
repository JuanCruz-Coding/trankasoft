import { Check, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';

const INSTALLMENTS = [
  { plan: 'Visa', label: '1 pago', total: '$74.000', per: '$74.000' },
  { plan: 'Visa', label: '3 sin interés', total: '$74.000', per: '$24.667' },
  {
    plan: 'Visa',
    label: '6 cuotas',
    surcharge: '+15%',
    total: '$85.100',
    per: '$14.183',
    highlight: true,
  },
  { plan: 'Naranja', label: 'Plan Z · 12', surcharge: '+50%', total: '$111.000', per: '$9.250' },
];

function InstallmentsMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-2xl shadow-navy/10">
      <div className="flex items-center justify-between border-b border-line bg-ice/60 px-4 py-3">
        <span className="flex items-center gap-2 text-xs font-semibold text-navy">
          <CreditCard size={14} className="text-blue" />
          Simulador de cuotas
        </span>
        <span className="text-xs font-medium text-slate">Campera puffer · $74.000</span>
      </div>

      <div className="divide-y divide-line">
        {INSTALLMENTS.map((row) => (
          <div
            key={`${row.plan}-${row.label}`}
            className={`flex items-center justify-between gap-3 px-4 py-3 ${
              row.highlight ? 'bg-blue/5' : ''
            }`}
          >
            <div className="min-w-0">
              <p className="flex items-center gap-2 text-sm font-semibold text-navy">
                {row.plan} · {row.label}
                {row.surcharge && (
                  <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold text-amber-700">
                    {row.surcharge}
                  </span>
                )}
              </p>
              <p className="text-xs text-slate">{row.per} por cuota</p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <span className="text-base font-bold text-navy">{row.total}</span>
              {row.highlight && (
                <span className="rounded-lg bg-blue px-3 py-1.5 text-[11px] font-semibold text-white">
                  Cobrar
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Installments() {
  return (
    <section className="border-b border-line bg-white px-6 py-16 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue">
            <span className="h-px w-8 bg-blue/50" />
            03 / Cobranza
          </p>
          <h2 className="mb-6 text-4xl font-bold leading-[1.05] tracking-tight text-navy md:text-5xl">
            El cliente sabe cuánto paga.
            <br />
            <span className="brand-gradient-text">Antes de cobrar.</span>
          </h2>
          <p className="mb-8 max-w-md text-lg text-slate">
            Mostrale en pantalla cómo le queda el producto en 1, 3, 6 o 12 cuotas con cada tarjeta
            —recargo ya incluido— y cobrá con el plan elegido en un toque. Sin sorpresas en el
            resumen.
          </p>
          <ul className="space-y-3">
            {[
              'Cuotas y recargo de todas tus tarjetas, al instante',
              'Precio final y por cuota a la vista del cliente',
              'Elegís el plan y se carga solo al cobrar',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-navy">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue/10 text-blue">
                  <Check size={12} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
        >
          <InstallmentsMockup />
        </motion.div>
      </div>
    </section>
  );
}
