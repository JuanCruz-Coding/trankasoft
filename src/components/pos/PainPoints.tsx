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
    <section className="py-28 px-6 bg-white border-b border-line">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow text-blue mb-4">— 01 / Por qué TrankaPOS</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-navy leading-[1.05] tracking-tight">
            Lo que escuchamos.<br />
            Lo que <span className="brand-gradient-text">resolvemos.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {PAINS.map(({ pain, solution }, i) => (
            <motion.div
              key={pain}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className="border-l-2 border-cyan pl-5"
            >
              <p className="font-display font-bold text-xl text-navy mb-2 italic">
                {pain}
              </p>
              <p className="text-slate text-sm leading-relaxed">{solution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
