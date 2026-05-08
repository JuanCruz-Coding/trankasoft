import {
  Zap,
  Store,
  Wallet,
  AlertTriangle,
  Users,
  Cloud,
} from 'lucide-react';

const FEATURES = [
  {
    icon: Zap,
    title: 'Velocidad al vender',
    desc: 'Lector de código de barras con foco automático, búsqueda con F2, grilla de productos tocable. Cada segundo cuenta cuando hay cola.',
  },
  {
    icon: Store,
    title: 'Multi-sucursal desde el día uno',
    desc: 'Mismo precio y catálogo en todas las sucursales. Stock y caja independientes. Transferencias internas con un click.',
  },
  {
    icon: Wallet,
    title: 'Control de caja real',
    desc: 'Arqueo automático: apertura + ventas en efectivo + movimientos, con diferencia calculada. Sin planillas en papel.',
  },
  {
    icon: AlertTriangle,
    title: 'Alertas proactivas',
    desc: 'Stock crítico visible en el Dashboard y en el POS al momento de vender. No te enterás de la falta cuando ya no hay.',
  },
  {
    icon: Users,
    title: 'Roles con restricciones',
    desc: 'Dueño, Encargado, Cajero. El menú se adapta automáticamente. Cada uno ve y puede hacer solo lo que le corresponde.',
  },
  {
    icon: Cloud,
    title: 'Sin instalación',
    desc: 'Funciona en cualquier navegador, en cualquier dispositivo. Las actualizaciones son automáticas. Tus datos viven seguros en la nube.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">
            Todo lo que necesitás para vender más y ordenado
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Pensado para kioscos, despensas y comercios multi-sucursal que ya no
            quieren manejar todo con cuadernos y planillas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="border border-slate-200 rounded-xl p-6 hover:border-brand-500 hover:shadow-md transition"
            >
              <div className="w-11 h-11 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
                <Icon size={22} className="text-brand-500" />
              </div>
              <h3 className="font-bold text-lg text-ink mb-2">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
