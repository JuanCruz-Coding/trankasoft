import { Link } from 'react-router-dom';

export default function BrandCTA() {
  return (
    <section className="relative brand-gradient-bg text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(circle at 20% 80%, rgba(63,169,255,0.4), transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-5 md:px-6 py-16 md:py-24 text-center">
        <p className="eyebrow text-cyan mb-6">— Empezá hoy</p>

        <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-[1.05] tracking-tight">
          Empezá por donde<br />
          más te ordena.
        </h2>

        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Probá cualquier producto gratis 14 días. Sin tarjeta, sin compromiso.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/pos"
            className="bg-white text-navy hover:bg-ice font-semibold px-7 py-3.5 rounded-lg transition w-full sm:w-auto text-center"
          >
            Conocer TrankaPOS
          </Link>
          <Link
            to="/portal"
            className="border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold px-7 py-3.5 rounded-lg transition w-full sm:w-auto text-center"
          >
            Conocer TrankaPortal
          </Link>
        </div>
      </div>
    </section>
  );
}
