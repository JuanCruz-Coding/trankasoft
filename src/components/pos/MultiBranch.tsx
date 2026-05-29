import { ArrowRightLeft, Building2, BarChart2 } from 'lucide-react';
import { motion } from 'motion/react';

const POINTS = [
  {
    icon: Building2,
    title: 'Stock por sucursal',
    desc: 'Mismo catálogo de productos, stocks independientes. Cada sucursal sabe exactamente lo que tiene.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Transferencias internas',
    desc: 'Mové mercadería entre sucursales con un click. Descuento automático en origen, alta en destino.',
  },
  {
    icon: BarChart2,
    title: 'Reportes consolidados',
    desc: 'Vista global de las ventas o filtrado por sucursal. Comparás performance entre puntos de venta.',
  },
];

export default function MultiBranch() {
  return (
    <section
      id="multi-sucursal"
      className="relative overflow-hidden border-b border-line bg-ice/40 px-6 py-16 md:py-28"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(720px circle at 76% 35%, rgba(63,169,255,0.12), transparent 64%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue">
            <span className="h-px w-8 bg-blue/50" />
            03 / Multi-sucursal en serio
          </p>
          <h2 className="mb-6 text-4xl font-bold leading-[1.05] tracking-tight text-navy md:text-6xl">
            Multi-sucursal
            <br />
            <span className="brand-gradient-text">desde el día uno.</span>
          </h2>
          <p className="max-w-2xl text-lg text-slate">
            La mayoría de los POS te cobran por sucursal como si fuera un upgrade premium. En
            TrankaPOS, manejar 1 o 3 puntos de venta es lo mismo: está incluido desde el plan Pro.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {POINTS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
              className="rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue/30 hover:shadow-xl hover:shadow-navy/5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue/10 text-blue">
                <Icon size={24} />
              </div>
              <h3 className="mb-2 text-xl font-bold tracking-tight text-navy">{title}</h3>
              <p className="text-sm leading-relaxed text-slate">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
