import { Cloud, ShieldCheck, MessageCircle, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const ITEMS = [
  {
    n: '01',
    icon: Cloud,
    title: 'Sin instalación',
    desc: 'Funciona en cualquier navegador. Las actualizaciones son automáticas, sin que el comercio tenga que hacer nada.',
  },
  {
    n: '02',
    icon: ShieldCheck,
    title: 'Datos seguros',
    desc: 'Backups automáticos. Aislamiento total entre cuentas. Tu información nunca se mezcla con la de otro comercio.',
  },
  {
    n: '03',
    icon: MessageCircle,
    title: 'Cercanía real',
    desc: 'Respondemos por WhatsApp y mail. Nada de tickets que se pierden ni soporte tercerizado en otra zona horaria.',
  },
  {
    n: '04',
    icon: MapPin,
    title: 'Hecho en Argentina',
    desc: 'Pensado para PyMEs argentinas. Cobramos en pesos, sin sorpresas con el dólar ni costos de implementación ocultos.',
  },
];

export default function Differentiators() {
  return (
    <section
      id="por-que"
      className="relative py-20 md:py-32 px-5 md:px-6 bg-white overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14 md:mb-24">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-blue/60" />
            <p className="eyebrow text-blue">03 — Por qué TrankaSoft</p>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-navy leading-[1.02] tracking-[-0.035em]">
            Software que no te<br />
            <span className="brand-gradient-text">complica la vida.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 lg:gap-y-0">
          {ITEMS.map(({ n, icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative group ${i > 0 ? 'lg:pl-10 lg:border-l lg:border-line' : ''}`}
            >
              <div className="flex items-baseline justify-between mb-7">
                <span className="font-display font-bold text-3xl text-blue tracking-[-0.04em] tabular-nums">
                  {n}
                </span>
                <span className="w-10 h-10 rounded-xl bg-ice flex items-center justify-center group-hover:bg-blue group-hover:rotate-[-6deg] transition-all duration-300">
                  <Icon
                    size={18}
                    className="text-blue group-hover:text-white transition-colors"
                  />
                </span>
              </div>

              <h3 className="font-display font-bold text-xl md:text-2xl text-navy mb-3 tracking-[-0.025em]">
                {title}
              </h3>
              <p className="text-slate text-[15px] leading-relaxed">{desc}</p>

              <span className="block h-px w-0 bg-blue mt-6 group-hover:w-12 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
