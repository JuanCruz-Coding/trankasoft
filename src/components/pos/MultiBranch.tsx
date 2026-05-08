import { ArrowRightLeft, Building2, BarChart2 } from 'lucide-react';

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
    <section className="relative bg-navy text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(63,169,255,0.2), transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-28">
        <div className="max-w-3xl mb-14">
          <p className="eyebrow text-cyan mb-4">— 03 / Multi-sucursal en serio</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] mb-6 tracking-tight">
            Multi-sucursal<br />
            <span className="brand-gradient-text">desde el día uno.</span>
          </h2>
          <p className="text-lg text-white/70">
            La mayoría de los POS te cobran "por sucursal" como si fuera un upgrade
            premium. En TrankaPOS, manejar 1 o 3 puntos de venta es lo mismo —
            está incluido desde el plan Pro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {POINTS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="border border-white/10 rounded-2xl p-6 hover:border-cyan/40 transition"
            >
              <Icon size={28} className="text-cyan mb-4" />
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">
                {title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
