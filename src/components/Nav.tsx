const POS_URL = 'https://pos.trankasoft.com';

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-ink">Tranka</span>
          <span className="text-brand-500">POS</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          <a href="#features" className="hover:text-ink transition">Características</a>
          <a href="#planes" className="hover:text-ink transition">Planes</a>
          <a href="#faq" className="hover:text-ink transition">FAQ</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`${POS_URL}/login`}
            className="hidden sm:inline text-sm font-medium text-muted hover:text-ink transition"
          >
            Iniciar sesión
          </a>
          <a
            href={`${POS_URL}/signup`}
            className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
          >
            Probar gratis
          </a>
        </div>
      </div>
    </nav>
  );
}
