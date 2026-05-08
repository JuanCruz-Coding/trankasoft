import { Cloud, ShieldCheck, MessageCircle, MapPin } from 'lucide-react';

const ITEMS = [
  {
    icon: Cloud,
    title: 'Sin instalación',
    desc: 'Funciona en cualquier navegador. Las actualizaciones son automáticas, sin que el comercio tenga que hacer nada.',
  },
  {
    icon: ShieldCheck,
    title: 'Datos seguros',
    desc: 'Backups automáticos. Aislamiento total entre cuentas. Tu información nunca se mezcla con la de otro comercio.',
  },
  {
    icon: MessageCircle,
    title: 'Cercanía real',
    desc: 'Respondemos por WhatsApp y mail. Nada de tickets que se pierden ni soporte tercerizado en otra zona horaria.',
  },
  {
    icon: MapPin,
    title: 'Hecho en Argentina',
    desc: 'Pensado para PyMEs argentinas. Cobramos en pesos, sin sorpresas con el dólar ni costos de implementación ocultos.',
  },
];

export default function Differentiators() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="eyebrow text-blue mb-4">— 03 / Por qué TrankaSoft</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-navy leading-[1.05] tracking-tight">
            Software que no te<br />
            <span className="brand-gradient-text">complica la vida.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div key={title}>
              <div className="w-12 h-12 rounded-xl bg-ice flex items-center justify-center mb-5">
                <Icon size={22} className="text-blue" />
              </div>
              <h3 className="font-display font-bold text-xl text-navy mb-2 tracking-tight">
                {title}
              </h3>
              <p className="text-slate text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
