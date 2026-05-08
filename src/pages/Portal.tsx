import { Link } from 'react-router-dom';
import { Users, ArrowLeft, Mail } from 'lucide-react';

export default function Portal() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-32 bg-white">
      <div className="max-w-2xl text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-50 mb-8">
          <Users size={28} className="text-brand-500" />
        </div>

        <span className="inline-block text-brand-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">
          TrankaPortal
        </span>

        <h1 className="font-display font-extrabold text-5xl md:text-6xl text-ink leading-[1.05] mb-6">
          Próximamente.
        </h1>

        <p className="text-lg text-muted mb-10 max-w-lg mx-auto leading-relaxed">
          Estamos puliendo TrankaPortal — la herramienta para gestionar
          recibos, ausencias y comunicación interna de tu equipo. Si querés
          ser de los primeros en probarlo, escribinos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:contacto@trankasoft.com?subject=Quiero%20probar%20TrankaPortal"
            className="bg-ink hover:bg-ink-soft text-white font-semibold px-6 py-3.5 rounded-lg transition flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Mail size={18} />
            Avisame cuando esté
          </a>
          <Link
            to="/"
            className="text-ink font-semibold px-6 py-3.5 rounded-lg transition w-full sm:w-auto hover:text-brand-500 flex items-center gap-2 justify-center"
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
