import { motion } from 'motion/react';
import { Target, Eye, Heart } from 'lucide-react';

const PILLARS = [
  {
    n: '01',
    icon: Target,
    title: 'Misión',
    desc: 'Crear software robusto, intuitivo y a la medida que potencie el crecimiento de cada cliente, con procesos transparentes y plazos cumplidos.',
  },
  {
    n: '02',
    icon: Eye,
    title: 'Visión',
    desc: 'Ser referente regional en desarrollo de software de alto nivel, reconocidos por la confianza, la calidad técnica y el impacto real en el negocio de quienes confían en nosotros.',
  },
  {
    n: '03',
    icon: Heart,
    title: 'Valores',
    desc: 'Confianza · Excelencia técnica · Cercanía · Transparencia · Innovación responsable.',
  },
];

const STATS = [
  { value: '100%', label: 'Argentino' },
  { value: '<24h', label: 'Respuesta' },
  { value: '∞', label: 'Sucursales' },
];

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative py-20 md:py-32 px-5 md:px-6 bg-ice overflow-hidden"
    >
      <div className="absolute inset-0 dots-light opacity-40" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5 md:sticky md:top-28">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-blue/60" />
              <p className="eyebrow text-blue">05 — Sobre nosotros</p>
            </div>

            <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-navy leading-[1.02] mb-7 tracking-[-0.035em]">
              Una compañía<br />
              de <span className="brand-gradient-text">software a medida.</span>
            </h2>

            <p className="text-lg text-slate leading-relaxed mb-5">
              TrankaSoft transforma ideas complejas en productos digitales claros,
              fluidos y confiables.
            </p>
            <p className="text-slate leading-relaxed">
              Acompañamos a empresas y emprendedores en cada etapa de su evolución
              tecnológica: desde la conceptualización del producto, pasando por la
              arquitectura técnica, hasta el despliegue, mantenimiento y escalado.
              Combinamos disciplina de ingeniería, diseño centrado en el usuario y
              una cultura colaborativa que entiende el negocio del cliente como propio.
            </p>

            <div className="mt-10 grid grid-cols-3 border-t border-navy/10 pt-6">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <p className="font-display font-bold text-3xl md:text-4xl text-navy tabular-nums tracking-[-0.04em]">
                    {value}
                  </p>
                  <p className="marker text-slate mt-1.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 space-y-4">
            {PILLARS.map(({ n, icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white rounded-2xl p-7 md:p-8 border border-line hover:border-blue/40 hover:shadow-xl hover:shadow-blue/5 transition-all overflow-hidden"
              >
                <span
                  className="absolute -top-2 right-6 font-display font-bold text-7xl text-blue/5 tabular-nums tracking-[-0.05em] pointer-events-none select-none transition-colors group-hover:text-blue/10"
                  aria-hidden="true"
                >
                  {n}
                </span>

                <div className="relative flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-ice flex items-center justify-center shrink-0 group-hover:bg-blue group-hover:rotate-[-6deg] transition-all duration-300">
                    <Icon
                      size={20}
                      className="text-blue group-hover:text-white transition-colors"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl md:text-2xl text-navy mb-2.5 tracking-[-0.025em]">
                      {title}
                    </h3>
                    <p className="text-slate text-[15px] leading-relaxed">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
