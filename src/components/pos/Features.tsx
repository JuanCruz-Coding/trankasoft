import { Zap, Boxes, Wallet, BarChart3, Receipt, Users } from 'lucide-react';
import { motion } from 'motion/react';

const FEATURES = [
  {
    icon: Zap,
    title: 'Velocidad al vender',
    desc: 'Lector de código de barras con foco automático. Atajo F2 para activar el lector. F4 abre el modal de pago. Cobros combinados en múltiples medios de pago en una misma venta.',
  },
  {
    icon: Boxes,
    title: 'Stock en tiempo real',
    desc: 'Cantidad disponible independiente por sucursal. Alertas visuales cuando un producto cae bajo el mínimo. Ajustes manuales con motivo registrado y trazabilidad completa.',
  },
  {
    icon: Wallet,
    title: 'Caja con arqueo automático',
    desc: 'Apertura con monto inicial. Ingresos y egresos intra-turno. Cierre que suma todo y calcula la diferencia con lo declarado. Una caja abierta por sucursal a la vez.',
  },
  {
    icon: BarChart3,
    title: 'Reportes que sirven',
    desc: 'Filtros por fecha, categoría y estado. Total facturado, ticket promedio, evolución diaria, distribución por medio de pago, ranking de cajeros y productos más vendidos.',
  },
  {
    icon: Receipt,
    title: 'Productos sin fricción',
    desc: 'Catálogo con precio, costo, código de barras, IVA y categoría. Importación masiva por CSV con validación previa y reporte de errores línea por línea.',
  },
  {
    icon: Users,
    title: 'Roles con restricciones',
    desc: 'Dueño, Encargado y Cajero. El menú lateral se adapta solo al rol del usuario logueado: un cajero ni siquiera ve la opción de Reportes.',
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
