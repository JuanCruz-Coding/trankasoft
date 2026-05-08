import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-32 bg-white">
      <div className="text-center">
        <p className="font-display font-extrabold text-7xl md:text-9xl text-brand-500 mb-4">
          404
        </p>
        <h1 className="font-display font-bold text-2xl md:text-3xl text-ink mb-4">
          Esta página no existe.
        </h1>
        <p className="text-muted mb-8">
          El link puede estar roto o la página fue movida.
        </p>
        <Link
          to="/"
          className="inline-block bg-ink hover:bg-ink-soft text-white font-semibold px-6 py-3.5 rounded-lg transition"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
