import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

const POS_URL = 'https://pos.trankasoft.com';

function PosScreenshot() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-2xl shadow-navy/10">
      <div className="flex items-center justify-between border-b border-line bg-ice/60 px-4 py-3">
        <div className="flex items-center gap-2">
          {['#ff5f57', '#febc2e', '#28c840'].map((color) => (
            <span key={color} className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
          ))}
        </div>
        <span className="text-xs font-medium text-slate">TrankaPOS · Vender</span>
        <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Caja abierta
        </span>
      </div>
      <img
        src="/product/pos-ventas.png"
        alt="Pantalla de ventas de TrankaPOS: carrito, total a cobrar y catálogo de productos"
        className="w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line bg-white pt-28 md:pt-36"
    >
      <div className="absolute inset-0 lines-light opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[760px] -translate-x-1/2 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(63,169,255,0.16), transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue/20 bg-blue/5 px-3 py-1.5 text-xs font-medium text-blue"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue" />
          TrankaPOS · punto de venta en la nube
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-bold leading-[0.95] tracking-tight text-navy sm:text-5xl md:text-7xl"
        >
          El POS que ordena tu kiosco <span className="brand-gradient-text">de verdad.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate md:text-xl"
        >
          Control real de stock, caja y ventas para comercios multi-sucursal. Sin instalación, sin
          servidores y sin perder tiempo peleando con planillas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
          className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <a
            href={`${POS_URL}/signup`}
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-blue px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue/25 transition-all hover:-translate-y-0.5 hover:bg-blue-dark"
          >
            Probar gratis 14 días
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg border border-line bg-white px-6 py-3.5 text-sm font-semibold text-navy transition hover:border-blue/40 hover:bg-ice"
          >
            Ver características
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-9 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-slate"
        >
          {['Sin tarjeta', 'Listo en 2 minutos', 'Cancelás cuando quieras'].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <Check size={15} className="text-blue" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-14 max-w-5xl px-6 md:mt-20"
      >
        <PosScreenshot />
      </motion.div>
      <div className="h-16 md:h-24" aria-hidden="true" />
    </section>
  );
}
