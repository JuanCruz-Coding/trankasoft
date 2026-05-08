import { Link } from 'react-router-dom';

export default function BrandCTA() {
  return (
    <section className="py-24 px-6 bg-ink text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display font-extrabold text-4xl md:text-6xl mb-6 leading-[1.05]">
          Empezá por donde<br />
          <span className="text-brand-500">más te ordena</span>.
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Probá cualquier producto gratis 14 días. Sin tarjeta, sin compromiso.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/pos"
            className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-7 py-3.5 rounded-lg transition w-full sm:w-auto text-center"
          >
            Conocer TrankaPOS
          </Link>
          <Link
            to="/portal"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-lg transition w-full sm:w-auto text-center"
          >
            Conocer TrankaPortal
          </Link>
        </div>
      </div>
    </section>
  );
}
