import { ArrowRight } from 'lucide-react';

const POS_URL = 'https://pos.trankasoft.com';

export default function Hero() {
  return (
    <section id="top" className="pt-28 pb-24 px-6 bg-white border-b border-line">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block text-brand-600 text-xs font-bold uppercase tracking-[0.2em] mb-6">
          TrankaPOS
        </span>

        <h1 className="font-display font-extrabold text-5xl md:text-7xl text-ink mb-6 leading-[1.02]">
          el punto de venta<br />
          <span className="text-brand-500">que ordena tu kiosco.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Control real de stock, caja y ventas para comercios multi-sucursal.
          Sin instalación, sin servidores, sin dolores de cabeza.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`${POS_URL}/signup`}
            className="bg-ink hover:bg-ink-soft text-white font-semibold px-6 py-3.5 rounded-lg transition flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Probar gratis 14 días
            <ArrowRight size={18} />
          </a>
          <a
            href="#features"
            className="text-ink font-semibold px-6 py-3.5 rounded-lg transition w-full sm:w-auto hover:text-brand-500"
          >
            Ver características →
          </a>
        </div>

        <p className="text-sm text-muted mt-8">
          Sin tarjeta · Listo en 2 minutos · Cancelás cuando quieras
        </p>
      </div>
    </section>
  );
}
