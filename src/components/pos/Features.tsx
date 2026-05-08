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
    <section id="features" className="py-28 px-6 bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-brand-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Características
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-ink leading-[1.05] mb-5">
            Todo lo que necesitás<br />
            para vender más y ordenado.
          </h2>
          <p className="text-lg text-muted">
            Pensado para kioscos, despensas y comercios multi-sucursal que ya no
            quieren manejar todo con cuadernos y planillas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white p-7 hover:bg-surface-alt transition"
            >
              <Icon size={22} className="text-brand-500 mb-4" />
              <h3 className="font-bold text-lg text-ink mb-2">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
