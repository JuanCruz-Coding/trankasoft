import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-5 md:px-6 py-20 md:py-32 bg-white">
      <div className="text-center">
        <p className="font-display font-bold text-7xl md:text-9xl brand-gradient-text mb-4 tracking-tight">
          404
        </p>
        <h1 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4 tracking-tight">
          Esta página no existe.
        </h1>
        <p className="text-slate mb-8">
          El link puede estar roto o la página fue movida.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue hover:bg-blue-dark text-white font-semibold px-6 py-3.5 rounded-lg transition shadow-lg shadow-blue/20"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
