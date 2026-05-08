import { ArrowRight } from 'lucide-react';

export default function HeroBrand() {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 80% 30%, rgba(63,169,255,0.25), transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-6 pt-16 md:pt-32 pb-16 md:pb-32 grid md:grid-cols-12 gap-8 md:gap-10 items-center">
        <div className="md:col-span-7 order-2 md:order-1">
          <p className="eyebrow text-cyan mb-4 md:mb-6">— Software a medida</p>

          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-5 md:mb-6 tracking-tight">
            Software<br />
            con <span className="brand-gradient-text">calma.</span>
          </h1>

          <p className="text-base md:text-xl text-white/70 max-w-xl mb-8 md:mb-10 leading-relaxed">
            Construimos productos digitales claros, fluidos y confiables.
            TrankaPOS para tu comercio, TrankaPortal para tu equipo, y
            soluciones a medida para lo que tu empresa necesite.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#productos"
              className="bg-blue hover:bg-blue-dark text-white font-semibold px-7 py-3.5 rounded-lg transition flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-blue/30"
            >
              Ver nuestros productos
              <ArrowRight size={18} />
            </a>
            <a
              href="mailto:ventas@trankasoft.com?subject=Consulta%20comercial"
              className="border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold px-7 py-3.5 rounded-lg transition w-full sm:w-auto text-center"
            >
              Hablar con ventas
            </a>
          </div>
        </div>

        <div className="md:col-span-5 flex items-center justify-center md:justify-end order-1 md:order-2">
          <img
            src="/brand/isotipo.png"
            alt=""
            aria-hidden="true"
            className="w-44 sm:w-56 md:w-full max-w-md drop-shadow-[0_30px_60px_rgba(63,169,255,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}
