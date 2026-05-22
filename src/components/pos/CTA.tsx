import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const POS_URL = 'https://pos.trankasoft.com';

export default function CTA() {
  return (
    <section className="px-6 py-16 md:py-28 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center"
        >
          <div
            className="absolute inset-0 opacity-35"
            style={{
              background: 'radial-gradient(620px circle at 50% 0%, rgba(255,255,255,0.16), transparent 70%)',
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <p className="inline-flex items-center gap-2 text-xs font-medium text-white/60 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Empezá hoy
            </p>
            <h2 className="text-4xl md:text-6xl font-semibold mb-6 leading-[1.05] tracking-tight">
              Probalo gratis
              <br />
              14 días.
            </h2>
            <p className="text-white/62 text-lg mb-10 max-w-xl mx-auto">
              Sin tarjeta, sin compromiso. Si te sirve, elegís plan. Si no,
              cerrás sesión y listo.
            </p>
            <a
              href={`${POS_URL}/signup`}
              className="group inline-flex items-center gap-2 rounded-full bg-white text-black hover:bg-white/90 font-medium px-7 py-3.5 transition active:scale-[0.98]"
            >
              Empezar ahora
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
