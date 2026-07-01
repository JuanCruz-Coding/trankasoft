import { Zap, Boxes, Wallet, BadgePercent, Shirt, PackageCheck } from 'lucide-react';
import { motion } from 'motion/react';

const FEATURES = [
  {
    icon: Shirt,
    title: 'Variantes de producto',
    desc: 'Talle y color para indumentaria y calzado. Cada variante con su stock y su código de barras. El POS pide la variante al escanear y el reporte discrimina qué se vende de verdad.',
  },
  {
    icon: BadgePercent,
    title: 'Listas de precios y promos',
    desc: 'Minorista, mayorista o mostrador: listas alternativas con asignación por cliente o grupo. Promociones automáticas de % off, NxM y envío gratis con vigencia programada.',
  },
  {
    icon: Wallet,
    title: 'Cuenta corriente',
    desc: 'Fiado con límite de crédito por cliente, aging 30/60/90 días y recibos con imputación factura por factura. Sabés quién te debe, cuánto y hace cuánto.',
  },
  {
    icon: PackageCheck,
    title: 'Pedidos y despachos',
    desc: 'El vendedor arma el pedido con anticipo, la cajera lo cobra y el depósito lo despacha: estados preparando / listo / entregado y remito A4 para la entrega.',
  },
  {
    icon: Zap,
    title: 'Velocidad al vender',
    desc: 'Lector de código de barras con foco automático, atajos F2/F4, cobros combinados en múltiples medios y datos del voucher Lapos (lote, cupón, autorización) para conciliar.',
  },
  {
    icon: Boxes,
    title: 'Stock, caja y reportes',
    desc: 'Stock en tiempo real por sucursal con alertas de mínimo, caja con arqueo automático al cierre y reportes de ticket promedio, ranking de productos y cajeros.',
  },
];

export default function Features() {
  return (
    <section id="features" className="border-b border-line bg-white px-6 py-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl md:mb-16">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue">
            <span className="h-px w-8 bg-blue/50" />
            02 / Características
          </p>
          <h2 className="mb-5 text-4xl font-bold leading-[1.05] tracking-tight text-navy md:text-6xl">
            Todo lo que necesitás
            <br />
            para vender ordenado.
          </h2>
          <p className="text-lg text-slate">
            Cada módulo está pensado para que dejes de pelearte con cuadernos, planillas de Excel y
            decisiones a ojo.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
              className="group rounded-2xl border border-line bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue/30 hover:shadow-xl hover:shadow-navy/5"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-ice text-blue transition group-hover:bg-blue group-hover:text-white">
                <Icon size={22} />
              </div>
              <h3 className="mb-2 text-lg font-bold tracking-tight text-navy">{title}</h3>
              <p className="text-sm leading-relaxed text-slate">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
