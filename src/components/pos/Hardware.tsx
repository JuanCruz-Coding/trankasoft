import { ScanBarcode, Printer, Laptop } from 'lucide-react';
import { motion } from 'motion/react';

const ITEMS = [
  {
    icon: Laptop,
    title: 'Cualquier dispositivo',
    desc: 'Notebook, tablet o celular con Chrome, Edge, Safari o Firefox. Sin instalar nada.',
  },
  {
    icon: ScanBarcode,
    title: 'Lector de código de barras',
    desc: 'Cualquier lector USB o Bluetooth que se comporte como teclado. Sin drivers ni configuración.',
  },
  {
    icon: Printer,
    title: 'Impresora térmica',
    desc: 'Cualquier impresora ESC/POS que tu sistema operativo reconozca. El ticket se imprime vía navegador.',
  },
];

export default function Hardware() {
  return (
    <section className="border-b border-line bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue">
            <span className="h-px w-8 bg-blue/50" />
            05 / Hardware
          </p>
          <h2 className="text-3xl font-bold leading-[1.05] tracking-tight text-navy md:text-5xl">
            Lo único que necesitás
            <br />
            para arrancar.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="group rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue/30 hover:shadow-xl hover:shadow-navy/5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue/10 text-blue">
                <Icon size={24} />
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
