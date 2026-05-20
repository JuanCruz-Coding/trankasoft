import { ArrowUpRight, BadgeCheck, Brush, Globe2, Megaphone } from 'lucide-react';
import { motion } from 'motion/react';

const DELIVERABLES = [
  { icon: Globe2, label: 'Landing institucional' },
  { icon: Brush, label: 'Identidad visual' },
  { icon: Megaphone, label: 'Piezas comerciales' },
];

export default function Portfolio() {
  return (
    <section
      id="portafolio"
      className="relative py-20 md:py-32 px-5 md:px-6 bg-navy text-white overflow-hidden"
    >
      <div className="absolute inset-0 lines-dark opacity-35" aria-hidden="true" />
      <div className="absolute -top-36 right-0 w-[520px] h-[520px] halo-cyan opacity-45" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-cyan/70" />
              <p className="eyebrow text-cyan">04 - Portafolio</p>
            </div>

            <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.02] mb-6 tracking-[-0.035em]">
              Rosario<br />
              <span className="text-cyan">Transmisiones</span>
            </h2>

            <p className="text-lg text-white/75 leading-relaxed mb-8">
              Renovacion digital para una empresa industrial de Rosario: nueva presencia web,
              sistema visual consistente y materiales listos para vender mejor online.
            </p>

            <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-3 mb-9">
              {DELIVERABLES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="w-9 h-9 rounded-lg bg-cyan/15 flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-cyan" />
                  </span>
                  <span className="text-sm font-medium text-white/85">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://rtransmisiones.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-cyan hover:bg-white text-navy font-semibold px-5 py-3 rounded-lg transition-all shadow-lg shadow-cyan/20 hover:-translate-y-0.5"
              >
                Ver rtransmisiones.com
                <ArrowUpRight
                  size={17}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-cyan/70 text-white font-semibold px-5 py-3 rounded-lg transition"
              >
                Quiero algo similar
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/8 shadow-2xl shadow-black/25">
              <div className="aspect-[16/10] bg-ink">
                <img
                  src="/portfolio/rtransmisiones-mockup.png"
                  alt="Mockups de identidad y materiales digitales de Rosario Transmisiones"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute left-4 top-4 md:left-6 md:top-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-navy/80 px-3 py-1.5 backdrop-blur-md">
                <BadgeCheck size={15} className="text-cyan" />
                <span className="marker text-white/85">Cliente real</span>
              </div>
            </article>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {['Industria y agro', 'Web responsive', 'Marca renovada'].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center"
                >
                  <p className="marker text-white/65">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
