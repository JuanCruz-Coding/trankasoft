import {
  Zap,
  Boxes,
  Wallet,
  BarChart3,
  Receipt,
  Users,
} from 'lucide-react';
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
    desc: 'Dueño, Encargado y Cajero. El menú lateral se adapta solo al rol del usuario logueado — un cajero ni siquiera ve la opción de Reportes.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 bg-ice">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow text-blue mb-4">— 02 / Características</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-navy leading-[1.05] mb-5 tracking-tight">
            Todo lo que necesitás<br />
            para vender ordenado.
          </h2>
          <p className="text-lg text-slate">
            Cada módulo está pensado para que dejes de pelearte con cuadernos,
            planillas de Excel y decisiones a ojo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
              className="bg-white p-7 hover:bg-ice/40 transition group"
            >
              <motion.div
                whileHover={{ scale: 1.08, rotate: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-11 h-11 rounded-xl bg-ice flex items-center justify-center mb-5"
              >
                <Icon size={22} className="text-blue" />
              </motion.div>
              <h3 className="font-display font-bold text-lg text-navy mb-2 tracking-tight">
                {title}
              </h3>
              <p className="text-slate text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
