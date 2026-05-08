import { ArrowRight } from 'lucide-react';

export default function HeroBrand() {
  return (
    <section className="pt-32 pb-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-ink leading-[0.98] mb-8">
          software hecho{' '}
          <span className="text-brand-500">para tu negocio</span>.
        </h1>

        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Herramientas en la nube para que tu comercio, tu equipo y tus
          procesos funcionen mejor. Sin instalación, sin servidores, sin
          dolores de cabeza.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#productos"
            className="bg-ink hover:bg-ink-soft text-white font-semibold px-7 py-3.5 rounded-lg transition flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Ver productos
            <ArrowRight size={18} />
          </a>
          <a
            href="mailto:contacto@trankasoft.com"
            className="text-ink font-semibold px-7 py-3.5 rounded-lg transition w-full sm:w-auto hover:text-brand-500"
          >
            Contactar ventas →
          </a>
        </div>
      </div>
    </section>
  );
}
