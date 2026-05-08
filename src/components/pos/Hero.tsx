import { ArrowRight, Check } from 'lucide-react';

const POS_URL = 'https://pos.trankasoft.com';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-gradient-to-b from-ice to-white overflow-hidden border-b border-line"
    >
      <div className="max-w-6xl mx-auto px-6 pt-24 md:pt-28 pb-20 md:pb-24 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <p className="eyebrow text-blue mb-6">— Tranka<span className="text-navy">POS</span></p>

          <h1 className="font-display font-bold text-5xl md:text-7xl text-navy leading-[0.98] mb-6 tracking-tight">
            El POS que ordena<br />
            tu kiosco{' '}
            <span className="brand-gradient-text">de verdad.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate max-w-xl mb-10 leading-relaxed">
            Control real de stock, caja y ventas para comercios multi-sucursal.
            Sin instalación, sin servidores, sin dolores de cabeza.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={`${POS_URL}/signup`}
              className="bg-blue hover:bg-blue-dark text-white font-semibold px-7 py-3.5 rounded-lg transition flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-blue/30"
            >
              Probar gratis 14 días
              <ArrowRight size={18} />
            </a>
            <a
              href="#features"
              className="border border-line hover:border-blue hover:text-blue text-navy font-semibold px-7 py-3.5 rounded-lg transition w-full sm:w-auto text-center"
            >
              Ver características
            </a>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate">
            <span className="flex items-center gap-1.5">
              <Check size={15} className="text-blue" /> Sin tarjeta
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={15} className="text-blue" /> Listo en 2 minutos
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={15} className="text-blue" /> Cancelás cuando quieras
            </span>
          </div>
        </div>

        <div className="md:col-span-5 flex items-center justify-center md:justify-end">
          <img
            src="/brand/isotipo.png"
            alt=""
            aria-hidden="true"
            className="w-48 md:w-72 drop-shadow-[0_25px_50px_rgba(21,101,240,0.25)]"
          />
        </div>
      </div>
    </section>
  );
}
