import { ArrowRight } from 'lucide-react';

const POS_URL = 'https://pos.trankasoft.com';

export default function CTA() {
  return (
    <section className="relative brand-gradient-bg text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(circle at 80% 50%, rgba(63,169,255,0.4), transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-5 md:px-6 py-16 md:py-24 text-center">
        <p className="eyebrow text-cyan mb-6">— Empezá hoy</p>

        <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-[1.05] tracking-tight">
          Probalo gratis<br />
          14 días.
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Sin tarjeta, sin compromiso. Si te sirve, elegís plan. Si no, cerrás
          sesión y listo.
        </p>
        <a
          href={`${POS_URL}/signup`}
          className="inline-flex items-center gap-2 bg-white text-navy hover:bg-cyan font-semibold px-7 py-3.5 rounded-lg transition"
        >
          Empezar ahora
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
