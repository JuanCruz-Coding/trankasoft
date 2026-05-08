import { Link } from 'react-router-dom';
import { Users, ArrowLeft, Mail } from 'lucide-react';

export default function Portal() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-5 md:px-6 py-20 md:py-32 bg-white">
      <div className="max-w-2xl text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-ice mb-8">
          <Users size={28} className="text-blue" />
        </div>

        <p className="eyebrow text-blue mb-4">— TrankaPortal</p>

        <h1 className="font-display font-bold text-5xl md:text-7xl text-navy leading-[1.05] mb-6 tracking-tight">
          Próximamente.
        </h1>

        <p className="text-lg text-slate mb-10 max-w-lg mx-auto leading-relaxed">
          Estamos puliendo TrankaPortal — la herramienta para gestionar
          recibos, ausencias y comunicación interna de tu equipo. Si querés
          ser de los primeros en probarlo, escribinos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:ventas@trankasoft.com?subject=Quiero%20probar%20TrankaPortal"
            className="bg-blue hover:bg-blue-dark text-white font-semibold px-6 py-3.5 rounded-lg transition flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-blue/20"
          >
            <Mail size={18} />
            Avisame cuando esté
          </a>
          <Link
            to="/"
            className="text-navy font-semibold px-6 py-3.5 rounded-lg transition w-full sm:w-auto hover:text-blue flex items-center gap-2 justify-center"
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
