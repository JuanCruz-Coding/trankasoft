const POS_URL = 'https://pos.trankasoft.com';
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-xl mb-3">
              <span className="text-white">Tranka</span>
              <span className="text-brand-500">POS</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              Punto de venta multi-sucursal en la nube para comercios que
              quieren control real de stock, caja y ventas.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Producto
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition">Características</a></li>
              <li><a href="#planes" className="hover:text-white transition">Planes</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              <li><a href={`${POS_URL}/signup`} className="hover:text-white transition">Probar gratis</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href={`${POS_URL}/terms`} className="hover:text-white transition">Términos y condiciones</a></li>
              <li><a href={`${POS_URL}/privacy`} className="hover:text-white transition">Política de privacidad</a></li>
              <li><a href="mailto:contacto@trankasoft.com" className="hover:text-white transition">contacto@trankasoft.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {YEAR} TrankaSoft. Todos los derechos reservados.</p>
          <p>Hecho en Argentina 🇦🇷</p>
        </div>
      </div>
    </footer>
  );
}
