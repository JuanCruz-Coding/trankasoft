import { ArrowRight } from 'lucide-react';

const POS_URL = 'https://pos.trankasoft.com';

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-ink text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display font-extrabold text-4xl md:text-6xl mb-5 leading-[1.05]">
          Probalo gratis<br />
          <span className="text-brand-500">14 días.</span>
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Sin tarjeta, sin compromiso. Si te sirve, elegís plan. Si no, cerrás
          sesión y listo.
        </p>
        <a
          href={`${POS_URL}/signup`}
          className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-7 py-3.5 rounded-lg transition"
        >
          Empezar ahora
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
