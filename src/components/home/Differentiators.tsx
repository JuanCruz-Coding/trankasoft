import { Cloud, ShieldCheck, MessageCircle, MapPin } from 'lucide-react';

const ITEMS = [
  {
    icon: Cloud,
    title: 'Sin instalación',
    desc: 'Funciona en cualquier navegador. Las actualizaciones son automáticas.',
  },
  {
    icon: ShieldCheck,
    title: 'Datos seguros',
    desc: 'Backups automáticos. Aislamiento total entre cuentas. Cifrado end-to-end.',
  },
  {
    icon: MessageCircle,
    title: 'Soporte cercano',
    desc: 'Respondemos por WhatsApp y mail. Sin tickets que se pierden.',
  },
  {
    icon: MapPin,
    title: 'Hecho en Argentina',
    desc: 'Pensado para PyMEs argentinas. Cobramos en pesos, sin sorpresas con el dólar.',
  },
];

export default function Differentiators() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-brand-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Por qué TrankaSoft
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-ink leading-[1.05]">
            Software que no te complica<br />
            la vida.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div key={title}>
              <Icon size={28} className="text-brand-500 mb-4" />
              <h3 className="font-bold text-lg text-ink mb-2">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
