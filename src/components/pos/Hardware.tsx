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
    desc: 'Cualquier lector USB o Bluetooth que se comporte como teclado (la mayoría). Sin drivers ni configuración.',
  },
  {
    icon: Printer,
    title: 'Impresora térmica',
    desc: 'Cualquier impresora ESC/POS que tu sistema operativo reconozca. El ticket se imprime vía navegador.',
  },
];

export default function Hardware() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-6 bg-white border-y border-line">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow text-blue mb-4">— 04 / Hardware</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-navy leading-[1.05] tracking-tight">
            Lo único que necesitás<br />
            para arrancar.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ITEMS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="bg-ice/40 rounded-2xl p-6 border border-ice"
            >
              <Icon size={28} className="text-blue mb-4" />
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
