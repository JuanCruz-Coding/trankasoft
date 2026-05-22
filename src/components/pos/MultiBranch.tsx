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
    <section id="multi-sucursal" className="relative overflow-hidden border-t border-white/10 px-6 py-16 md:py-28">
      <div
        className="absolute inset-0 bg-[radial-gradient(720px_circle_at_76%_35%,rgba(0,210,255,0.16),transparent_64%)]"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="inline-flex items-center gap-2 text-xs font-medium text-white/60 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            03 / Multi-sucursal en serio
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] mb-6 tracking-tight">
            Multi-sucursal
            <br />
            <span className="text-[#A4F4FD]">desde el día uno.</span>
          </h2>
          <p className="text-lg text-white/62 max-w-2xl">
            La mayoría de los POS te cobran por sucursal como si fuera un upgrade
            premium. En TrankaPOS, manejar 1 o 3 puntos de venta es lo mismo: está
            incluido desde el plan Pro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {POINTS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="liquid-glass rounded-2xl p-6"
            >
              <Icon size={28} className="text-[#A4F4FD] mb-4" />
              <h3 className="text-xl font-semibold mb-2 tracking-tight">{title}</h3>
              <p className="text-white/58 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
