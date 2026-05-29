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
    <section className="border-b border-line bg-ice/40 px-6 py-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl md:mb-16">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue">
            <span className="h-px w-8 bg-blue/50" />
            01 / Por qué TrankaPOS
          </p>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-navy md:text-6xl">
            Lo que escuchamos.
            <br />
            Lo que <span className="brand-gradient-text">resolvemos.</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {PAINS.map(({ pain, solution }, i) => (
            <motion.div
              key={pain}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
              className="rounded-2xl border border-line bg-white p-6 shadow-sm"
            >
              <p className="mb-3 text-xl font-semibold italic tracking-tight text-navy">{pain}</p>
              <p className="text-sm leading-relaxed text-slate">{solution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
