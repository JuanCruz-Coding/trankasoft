import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const MARQUEE_ITEMS = [
  '● Software con calma',
  '★ Hecho en Argentina',
  '● TrankaPOS',
  '★ TrankaPortal',
  '● Soluciones a medida',
  '★ Sin instalación',
  '● Soporte por WhatsApp',
];

export default function BrandCTA() {
  return (
    <section className="relative brand-gradient-bg text-white overflow-hidden">
      <div className="absolute inset-0 lines-dark opacity-50" aria-hidden="true" />
      <div
        className="absolute -bottom-40 left-1/4 w-[520px] h-[520px] halo-cyan opacity-50 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 right-1/4 w-[420px] h-[420px] halo-cyan opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-5 md:px-6 py-20 md:py-28 text-center">
        <div className="inline-flex items-center gap-3 mb-7">
          <span className="h-px w-8 bg-cyan/60" />
          <p className="eyebrow text-cyan">06 — Empezá hoy</p>
          <span className="h-px w-8 bg-cyan/60" />
        </div>

        <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-7 leading-[1.02] tracking-[-0.035em]">
          Empezá por donde<br />
          más te <span className="brand-gradient-text">ordena.</span>
        </h2>

        <p className="text-white/65 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Probá cualquier producto gratis 14 días. Sin tarjeta, sin compromiso —
          si no te suma, no te cobramos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/pos"
            className="group bg-white text-navy hover:bg-ice font-semibold px-7 py-3.5 rounded-lg transition-all w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 shadow-xl shadow-cyan/20 hover:-translate-y-0.5"
          >
            Conocer TrankaPOS
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            to="/portal"
            className="border border-white/25 hover:border-white/45 hover:bg-white/5 text-white font-semibold px-7 py-3.5 rounded-lg transition w-full sm:w-auto text-center"
          >
            Conocer TrankaPortal
          </Link>
        </div>
      </div>

      <div
        className="relative border-t border-white/10 overflow-hidden py-5"
        aria-hidden="true"
      >
        <div className="marquee">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex items-center gap-12 px-6 shrink-0 whitespace-nowrap"
            >
              {MARQUEE_ITEMS.map((item, i) => (
                <li
                  key={`${copy}-${i}`}
                  className="marker text-white/40"
                >
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
