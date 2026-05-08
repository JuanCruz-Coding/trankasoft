import { ArrowRight } from 'lucide-react';

const POS_URL = 'https://pos.trankasoft.com';

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-brand-500">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Probalo gratis 14 días
        </h2>
        <p className="text-brand-100 text-lg mb-8">
          Sin tarjeta, sin compromiso. Si te sirve, elegís plan. Si no, cerrás
          sesión y listo.
        </p>
        <a
          href={`${POS_URL}/signup`}
          className="inline-flex items-center gap-2 bg-white text-brand-600 hover:bg-brand-50 font-semibold px-6 py-3 rounded-lg transition"
        >
          Empezar ahora
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
