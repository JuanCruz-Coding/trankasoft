import { Link } from 'react-router-dom';
import { ArrowLeft, Code2, ShoppingCart, BarChart3, MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';

const servicios = [
  {
    icon: Code2,
    title: 'Desarrollo de software a medida',
    text: 'Aplicaciones web y plataformas de gestión para PyMEs, construidas para escalar y mantenerse sin sorpresas.',
  },
  {
    icon: ShoppingCart,
    title: 'Productos propios',
    text: 'TrankaPOS (punto de venta y facturación) y TrankaPortal (gestión de equipo), pensados para comercios y empresas chicas y medianas.',
  },
  {
    icon: BarChart3,
    title: 'Marketing digital y gestión de campañas',
    text: 'Gestionamos y reportamos campañas de Google Ads y Meta Ads de nuestros clientes: configuración, optimización y tableros de rendimiento.',
  },
];

export default function Nosotros() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-20 pt-28 text-navy md:pb-28 md:pt-36">
      <div className="absolute inset-0 lines-light opacity-70" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-3 py-1.5 text-xs font-medium text-blue"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue" />
          Nosotros
        </motion.div>

        <h1 className="mb-6 text-4xl font-bold leading-[0.98] tracking-tight text-navy md:text-6xl">
          Software con calma,
          <br />
          <span className="brand-gradient-text">hecho en Argentina.</span>
        </h1>

        <p className="mb-6 max-w-2xl text-lg leading-relaxed text-slate">
          TrankaSoft es una compañía argentina de desarrollo de software y marketing digital
          enfocada en PyMEs. Acompañamos a comercios y empresas a digitalizar su operación y a
          hacer crecer su presencia online con soluciones simples, confiables y a medida.
        </p>
        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-slate">
          Nuestro equipo combina desarrollo de productos propios con servicios de gestión de
          campañas publicitarias, para que cada cliente tenga tecnología y resultados medibles en
          un mismo lugar.
        </p>

        <div className="mb-14 grid gap-5 md:grid-cols-3">
          {servicios.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-ice text-blue">
                <Icon size={22} />
              </div>
              <h2 className="mb-2 text-lg font-semibold text-navy">{title}</h2>
              <p className="text-sm leading-relaxed text-slate">{text}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-line bg-ice/40 p-6 md:p-8">
          <h2 className="mb-5 text-xl font-semibold text-navy">Datos de la empresa</h2>
          <ul className="space-y-3 text-sm text-slate">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-blue" />
              <span>Villa Gobernador Gálvez, Santa Fe, Argentina</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-blue" />
              <a href="mailto:juancruzm@trankasoft.com" className="transition hover:text-navy">
                juancruzm@trankasoft.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-blue" />
              <a href="tel:+5493412550031" className="transition hover:text-navy">
                +54 9 3412 55-0031
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-6 py-3.5 text-sm font-semibold text-navy transition hover:border-blue/40 hover:bg-ice"
          >
            <ArrowLeft size={17} />
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
