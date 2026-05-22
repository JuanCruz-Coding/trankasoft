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
    <section className="py-16 md:py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="inline-flex items-center gap-2 text-xs font-medium text-white/60 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            04 / Hardware
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-[1.05] tracking-tight">
            Lo único que necesitás
            <br />
            para arrancar.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {ITEMS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="liquid-glass rounded-2xl p-6"
            >
              <Icon size={28} className="text-[#A4F4FD] mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">{title}</h3>
              <p className="text-white/58 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
