import { ArrowRight, Check, Receipt, Search, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import type { CSSProperties } from 'react';

const POS_URL = 'https://pos.trankasoft.com';

const shinyText: CSSProperties = {
  backgroundImage:
    'linear-gradient(to right, #A4F4FD 0%, #00d2ff 35%, #3D81E3 70%, #A4F4FD 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  filter: 'drop-shadow(0 0 24px rgba(0,210,255,0.18))',
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/65 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#A4F4FD]" />
            TrankaPOS · punto de venta en la nube
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] mb-6"
          >
            El POS que ordena
            <br />
            tu kiosco{' '}
            <span className="animate-shiny" style={shinyText}>
              de verdad.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
            className="text-base md:text-xl text-white/62 max-w-xl mb-8 leading-relaxed"
          >
            Control real de stock, caja y ventas para comercios multi-sucursal.
            Sin instalación, sin servidores y sin perder tiempo peleando con planillas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <a
              href={`${POS_URL}/signup`}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-6 py-3.5 transition-all hover:bg-white/90 active:scale-[0.98]"
            >
              Probar gratis 14 días
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-white/15 text-white text-sm font-medium px-6 py-3.5 hover:bg-white/5 transition"
            >
              Ver características
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/55"
          >
            {['Sin tarjeta', 'Listo en 2 minutos', 'Cancelás cuando quieras'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <Check size={15} className="text-[#A4F4FD]" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5"
        >
          <div className="liquid-glass rounded-3xl p-4 md:p-5 shadow-2xl shadow-black/30">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#080b11]/90">
              <div className="h-10 flex items-center justify-between px-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-xs text-white/45">Caja abierta</span>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/45">
                  <Search size={15} />
                  Buscar producto o escanear código
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    ['Ventas hoy', '$184.200'],
                    ['Ticket promedio', '$4.860'],
                    ['Productos bajos', '7'],
                    ['Sucursal activa', 'Centro'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-white/10 bg-white/[0.035] p-3">
                      <p className="text-[11px] text-white/38">{label}</p>
                      <p className="mt-1 text-lg font-semibold text-white">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.035] p-3">
                  <div className="flex items-center justify-between text-xs text-white/45 mb-3">
                    <span>Venta en curso</span>
                    <span>3 items</span>
                  </div>
                  {['Coca-Cola 2.25L', 'Alfajor triple', 'Yerba 1kg'].map((item, index) => (
                    <div key={item} className="flex items-center justify-between py-2 border-t border-white/5 first:border-t-0">
                      <span className="flex items-center gap-2 text-sm text-white/75">
                        {index === 0 ? <ShoppingCart size={14} /> : <Receipt size={14} />}
                        {item}
                      </span>
                      <span className="text-sm text-white">${[3200, 900, 2850][index]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
