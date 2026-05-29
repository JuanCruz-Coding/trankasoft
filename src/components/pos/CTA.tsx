import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const POS_URL = 'https://pos.trankasoft.com';

export default function CTA() {
  return (
    <section className="bg-white px-6 py-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl brand-gradient-bg px-8 py-16 text-center md:py-24"
        >
          <div className="absolute inset-0 lines-dark opacity-40" aria-hidden="true" />
          <div className="relative">
            <p className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Empezá hoy
            </p>
            <h2 className="mb-6 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
              Probalo gratis
              <br />
              14 días.
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-white/80">
              Sin tarjeta, sin compromiso. Si te sirve, elegís plan. Si no, cerrás sesión y listo.
            </p>
            <a
              href={`${POS_URL}/signup`}
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 font-semibold text-navy transition hover:bg-ice active:scale-[0.98]"
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
