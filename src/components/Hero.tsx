import { ArrowRight, Check } from 'lucide-react';

const POS_URL = 'https://pos.trankasoft.com';

export default function Hero() {
  return (
    <section id="top" className="pt-20 pb-24 px-6 bg-gradient-to-b from-brand-50/60 to-white">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
          Punto de venta en la nube
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-ink mb-6 leading-tight">
          El POS multi-sucursal{' '}
          <span className="text-brand-500">que ordena tu kiosco</span>{' '}
          de verdad.
        </h1>

        <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-10">
          Control real de stock, caja y ventas para comercios que crecen.
          Sin instalación, sin servidores, sin dolores de cabeza.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <a
            href={`${POS_URL}/signup`}
            className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-lg transition flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Probar gratis 14 días
            <ArrowRight size={18} />
          </a>
          <a
            href="#features"
            className="border border-slate-300 hover:border-slate-400 text-ink font-semibold px-6 py-3 rounded-lg transition w-full sm:w-auto"
          >
            Ver características
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <Check size={16} className="text-brand-500" /> Sin tarjeta
          </span>
          <span className="flex items-center gap-1.5">
            <Check size={16} className="text-brand-500" /> Listo en 2 minutos
          </span>
          <span className="flex items-center gap-1.5">
            <Check size={16} className="text-brand-500" /> Cancelás cuando quieras
          </span>
        </div>
      </div>
    </section>
  );
}
