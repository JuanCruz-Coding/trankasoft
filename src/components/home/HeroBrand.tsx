import { ArrowRight, Store, Users, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function HeroBrand() {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 lines-dark opacity-60" aria-hidden="true" />

      <div
        className="absolute -top-40 -right-40 w-[640px] h-[640px] halo-cyan pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-120px] left-[10%] w-[440px] h-[440px] halo-blue opacity-70 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 md:px-6 py-3 flex items-center justify-between text-white/45 marker">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyan rounded-full" />
            TRK · Argentina
          </span>
          <span className="hidden sm:flex items-center gap-2">
            <span className="status-dot" />
            Operativo · 2026
          </span>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-6 pt-16 md:pt-28 pb-20 md:pb-32">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex items-center gap-3 mb-5 md:mb-7"
            >
              <span className="h-px w-10 bg-cyan/60" />
              <p className="eyebrow text-cyan">01 — Software a medida</p>
            </motion.div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.92] mb-6 md:mb-8 tracking-[-0.035em]">
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Software
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                con <span className="brand-gradient-text">calma.</span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-base md:text-xl text-white/65 max-w-xl mb-8 md:mb-10 leading-relaxed"
            >
              Construimos productos digitales claros, fluidos y confiables.
              <span className="text-white/85"> TrankaPOS</span> para tu comercio,
              <span className="text-white/85"> TrankaPortal</span> para tu equipo,
              y soluciones a medida para lo que tu empresa necesite.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#productos"
                className="group bg-blue hover:bg-blue-dark text-white font-semibold px-7 py-3.5 rounded-lg transition-all flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-blue/30 hover:shadow-xl hover:shadow-blue/40 hover:-translate-y-0.5"
              >
                Ver nuestros productos
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="mailto:ventas@trankasoft.com?subject=Consulta%20comercial"
                className="border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold px-7 py-3.5 rounded-lg transition w-full sm:w-auto text-center"
              >
                Hablar con ventas
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-10 md:mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/40 marker"
            >
              <span>· Hecho en Argentina</span>
              <span>· Soporte por WhatsApp</span>
              <span>· Sin instalación</span>
            </motion.div>
          </div>

          <div className="md:col-span-5 order-1 md:order-2 relative h-[260px] sm:h-[340px] md:h-[480px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
              className="absolute inset-0 m-auto w-[88%] aspect-square rounded-full border border-white/10 spin-slow"
              aria-hidden="true"
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan rounded-full shadow-[0_0_12px_rgba(63,169,255,0.8)]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.35, ease: 'easeOut' }}
              className="absolute inset-0 m-auto w-[64%] aspect-square rounded-full border border-white/15"
              aria-hidden="true"
            />

            <motion.img
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              src="/brand/isotipo.png"
              alt=""
              aria-hidden="true"
              className="relative w-40 sm:w-52 md:w-64 drop-shadow-[0_30px_60px_rgba(63,169,255,0.5)]"
            />

            <motion.div
              initial={{ opacity: 0, x: 24, y: -12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[6%] right-[2%] md:right-[-4%] bg-white/[0.06] backdrop-blur-md border border-white/15 rounded-xl px-3 py-2 flex items-center gap-2.5 shadow-2xl shadow-blue/20"
            >
              <div className="w-7 h-7 rounded-lg bg-blue/25 flex items-center justify-center">
                <Store size={14} className="text-cyan" />
              </div>
              <div className="text-left">
                <p className="text-white text-xs font-semibold leading-none mb-0.5">TrankaPOS</p>
                <p className="text-white/55 text-[10px] leading-none tracking-wide">Multi-sucursal</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -24, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-[10%] left-[2%] md:left-[-6%] bg-white/[0.06] backdrop-blur-md border border-white/15 rounded-xl px-3 py-2 flex items-center gap-2.5 shadow-2xl shadow-blue/20"
            >
              <div className="w-7 h-7 rounded-lg bg-cyan/20 flex items-center justify-center">
                <Users size={14} className="text-cyan" />
              </div>
              <div className="text-left">
                <p className="text-white text-xs font-semibold leading-none mb-0.5">TrankaPortal</p>
                <p className="text-white/55 text-[10px] leading-none tracking-wide">RRHH</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.95, type: 'spring', stiffness: 200 }}
              className="absolute bottom-[22%] right-[8%] bg-orange/10 backdrop-blur-md border border-orange/30 rounded-full p-2 shadow-xl shadow-orange/20"
            >
              <Sparkles size={14} className="text-orange" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 md:px-6 py-4 flex items-center justify-between text-white/40 marker">
          <span className="flex items-center gap-2">
            <span className="hidden sm:inline">Scroll</span>
            <span aria-hidden="true">↓</span>
          </span>
          <span className="hidden sm:inline">Trankasoft™ · Software con calma</span>
          <span>v · 26.01</span>
        </div>
      </div>
    </section>
  );
}
