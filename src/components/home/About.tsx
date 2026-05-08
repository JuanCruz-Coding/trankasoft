import { motion } from 'motion/react';
import { Target, Eye, Heart } from 'lucide-react';

const PILLARS = [
  {
    icon: Target,
    title: 'Misión',
    desc: 'Crear software robusto, intuitivo y a la medida que potencie el crecimiento de cada cliente, con procesos transparentes y plazos cumplidos.',
  },
  {
    icon: Eye,
    title: 'Visión',
    desc: 'Ser referente regional en desarrollo de software de alto nivel, reconocidos por la confianza, la calidad técnica y el impacto real en el negocio de quienes confían en nosotros.',
  },
  {
    icon: Heart,
    title: 'Valores',
    desc: 'Confianza · Excelencia técnica · Cercanía · Transparencia · Innovación responsable.',
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-16 md:py-28 px-5 md:px-6 bg-ice">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5">
          <p className="eyebrow text-blue mb-4">— 04 / Sobre nosotros</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-navy leading-[1.05] mb-6 tracking-tight">
            Una compañía<br />
            de <span className="brand-gradient-text">software a medida.</span>
          </h2>
          <p className="text-lg text-slate leading-relaxed mb-4">
            TrankaSoft transforma ideas complejas en productos digitales claros,
            fluidos y confiables.
          </p>
          <p className="text-slate leading-relaxed">
            Acompañamos a empresas y emprendedores en cada etapa de su evolución
            tecnológica: desde la conceptualización del producto, pasando por la
            arquitectura técnica, hasta el despliegue, mantenimiento y escalado.
            Combinamos disciplina de ingeniería, diseño centrado en el usuario y
            una cultura colaborativa que entiende el negocio del cliente como
            propio.
          </p>
        </div>

        <div className="md:col-span-7 space-y-4">
          {PILLARS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="bg-white rounded-2xl p-6 border-l-4 border-blue"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-ice flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-blue" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-navy mb-2 tracking-tight">
                    {title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
