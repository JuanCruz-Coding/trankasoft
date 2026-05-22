import { motion } from 'motion/react';

const PAINS = [
  {
    pain: '"No sé qué se vende y qué no."',
    solution: 'Reportes con ranking de productos, evolución diaria y distribución por medio de pago.',
  },
  {
    pain: '"Cuando se rompe la caja, no sé cuánto faltó."',
    solution: 'Arqueo automático con diferencia calculada al cierre del turno.',
  },
  {
    pain: '"Mi encargado puede borrar cosas que no debería."',
    solution: 'Tres roles con restricciones automáticas. El menú se adapta al rol logueado.',
  },
  {
    pain: '"Tengo dos sucursales y no sé qué tiene cada una."',
    solution: 'Stock por depósito independiente con vista consolidada y transferencias internas.',
  },
  {
    pain: '"El sistema viejo me cobra una fortuna por sucursal."',
    solution: 'Multi-sucursal incluido desde Pro. Sin costo extra por punto de venta.',
  },
  {
    pain: '"Los chicos venden y no me entero."',
    solution: 'Historial filtrable por cajero. Sabés quién vendió cada ticket y cuándo.',
  },
];

export default function PainPoints() {
  return (
    <section className="py-16 md:py-28 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-10 md:mb-16">
          <p className="inline-flex items-center gap-2 text-xs font-medium text-white/60 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            01 / Por qué TrankaPOS
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold text-white leading-[1.05] tracking-tight">
            Lo que escuchamos.
            <br />
            Lo que <span className="text-[#A4F4FD]">resolvemos.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {PAINS.map(({ pain, solution }, i) => (
            <motion.div
              key={pain}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
              className="liquid-glass rounded-2xl p-6"
            >
              <p className="text-xl text-white mb-3 italic font-semibold tracking-tight">{pain}</p>
              <p className="text-white/58 text-sm leading-relaxed">{solution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
