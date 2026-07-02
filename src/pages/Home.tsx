import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  CreditCard,
  MessageCircle,
  ShieldCheck,
  Store,
  Users,
  Workflow,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';

const CONTACT_HREF = 'mailto:ventas@trankasoft.com?subject=Consulta%20comercial';
const WHATSAPP_HREF =
  'https://wa.me/5493412550031?text=Hola!%20Vengo%20de%20la%20web%20de%20TrankaSoft%20y%20quiero%20hacer%20una%20consulta.';

/* ── UI helpers ─────────────────────────────────────────────────── */

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue">
      <span className="h-px w-8 bg-blue/50" />
      {label}
    </div>
  );
}

function PrimaryButton({
  children,
  href,
  full = false,
}: {
  children: React.ReactNode;
  href: string;
  full?: boolean;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-lg bg-blue px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue/25 transition-all hover:-translate-y-0.5 hover:bg-blue-dark hover:shadow-xl hover:shadow-blue/30 ${
        full ? 'w-full' : ''
      }`}
    >
      {children}
      <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

function GhostButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-6 py-3.5 text-sm font-semibold text-navy transition hover:border-blue/40 hover:bg-ice"
    >
      {children}
    </a>
  );
}

/* ── Hero ───────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div className="absolute inset-0 lines-light opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[760px] -translate-x-1/2 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(63,169,255,0.16), transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 pt-28 text-center md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <SectionEyebrow label="Software para comercios y PyMEs" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-navy md:text-6xl"
        >
          Sistemas que ordenan tu negocio
          <br className="hidden md:block" /> y te hacen{' '}
          <span className="brand-gradient-text">vender más.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate md:text-lg"
        >
          En TrankaSoft desarrollamos software a medida y productos propios como{' '}
          <span className="font-semibold text-navy">TrankaPOS</span> para que controles{' '}
          <span className="font-semibold text-navy">ventas, stock y caja</span> en un solo lugar.
          Sin planillas sueltas, sin instalaciones.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: 'easeOut' }}
          className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <PrimaryButton href="/pos">Ver TrankaPOS</PrimaryButton>
          <GhostButton href="#contacto">Hablar con ventas</GhostButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate"
        >
          <span className="flex items-center gap-1.5">
            <Zap size={14} className="text-blue" /> Sin instalación
          </span>
          <span className="flex items-center gap-1.5">
            <MessageCircle size={14} className="text-blue" /> Soporte por WhatsApp
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-blue" /> Datos seguros
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-14 max-w-5xl px-6 md:mt-20"
      >
        <PosMockup />
      </motion.div>
      <div className="h-16 md:h-24" aria-hidden="true" />
    </section>
  );
}

/* ── POS mockup (captura real de TrankaPOS) ─────────────────────── */

function PosMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-2xl shadow-navy/10">
      <div className="flex items-center justify-between border-b border-line bg-ice/60 px-4 py-3">
        <div className="flex items-center gap-2">
          {['#ff5f57', '#febc2e', '#28c840'].map((color) => (
            <span key={color} className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
          ))}
        </div>
        <span className="text-xs font-medium text-slate">TrankaPOS · Vender</span>
        <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Caja abierta
        </span>
      </div>
      <img
        src="/product/pos-ventas.png"
        alt="Pantalla de ventas de TrankaPOS: carrito, total a cobrar y catálogo de productos"
        className="w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

/* ── Franja de garantías reales ─────────────────────────────────── */

function TrustStrip() {
  const items = [
    { icon: Zap, label: 'Sin instalación' },
    { icon: ShieldCheck, label: 'Datos seguros y backups' },
    { icon: MessageCircle, label: 'Soporte por WhatsApp' },
    { icon: BarChart3, label: 'Reportes claros' },
    { icon: Store, label: 'Multi-sucursal' },
    { icon: CreditCard, label: 'Cobros con Mercado Pago' },
  ];

  return (
    <div className="border-b border-line bg-ice/40">
      <div className="mx-auto max-w-6xl overflow-hidden px-6 py-4">
        <div className="marquee">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center gap-8 whitespace-nowrap px-4">
              {items.map(({ icon: Icon, label }) => (
                <li
                  key={`${copy}-${label}`}
                  className="flex items-center gap-2 text-xs font-medium text-slate"
                >
                  <Icon size={14} className="text-blue" />
                  {label}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Productos / Soluciones ─────────────────────────────────────── */

const products = [
  {
    icon: Store,
    name: 'TrankaPOS',
    desc: 'Punto de venta multi-sucursal con stock, caja, ventas y reportes claros. Funciona desde el navegador.',
    href: '/pos',
    cta: 'Ver TrankaPOS',
    status: 'Disponible',
    statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    internal: true,
  },
  {
    icon: Users,
    name: 'TrankaPortal',
    desc: 'Portal de RRHH para recibos, ausencias y comunicación interna de PyMEs. En desarrollo.',
    href: '/portal',
    cta: 'Conocer más',
    status: 'Pronto',
    statusColor: 'text-orange bg-orange/10 border-orange/30',
    internal: true,
  },
  {
    icon: Workflow,
    name: 'Software a medida',
    desc: 'Webs, automatizaciones de WhatsApp, paneles e integraciones pensadas para tu operación real.',
    href: '#contacto',
    cta: 'Contanos tu proyecto',
    status: 'A pedido',
    statusColor: 'text-blue bg-blue/10 border-blue/30',
    internal: false,
  },
];

function Products() {
  return (
    <section id="soluciones" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <SectionEyebrow label="Soluciones" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy md:text-5xl">
            Productos propios y desarrollo a medida.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Elegí una herramienta lista para usar o pedinos algo hecho exactamente para tu negocio.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {products.map(({ icon: Icon, name, desc, href, cta, status, statusColor, internal }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue/30 hover:shadow-xl hover:shadow-navy/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ice text-blue transition group-hover:bg-blue group-hover:text-white">
                  <Icon size={22} />
                </div>
                <span
                  className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusColor}`}
                >
                  {status}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-navy">{name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{desc}</p>
              {internal ? (
                <Link
                  to={href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition group-hover:gap-2.5"
                >
                  {cta} <ArrowUpRight size={16} />
                </Link>
              ) : (
                <a
                  href={href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition group-hover:gap-2.5"
                >
                  {cta} <ArrowUpRight size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Diferenciadores ────────────────────────────────────────────── */

const differentiators = [
  {
    icon: Zap,
    title: 'Sin instalación',
    desc: 'Funciona en cualquier navegador. Las actualizaciones son automáticas, sin que tengas que hacer nada.',
  },
  {
    icon: ShieldCheck,
    title: 'Datos seguros',
    desc: 'Backups automáticos y aislamiento total entre cuentas. Tu información nunca se mezcla con la de otro comercio.',
  },
  {
    icon: MessageCircle,
    title: 'Soporte cercano',
    desc: 'Te respondemos por WhatsApp, en español y rápido. No sos un ticket más en una cola.',
  },
  {
    icon: BarChart3,
    title: 'Reportes claros',
    desc: 'Ventas, caja y stock visibles de un vistazo, para que decidas sin revisar planillas sueltas.',
  },
];

function Differentiators() {
  return (
    <section className="border-y border-line bg-ice/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <SectionEyebrow label="Por qué TrankaSoft" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy md:text-5xl">
            Tecnología que se entiende y se usa.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-line bg-white p-6 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue/10 text-blue">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Portafolio (cliente real) ──────────────────────────────────── */

function PortfolioBand() {
  return (
    <section id="portafolio" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionEyebrow label="Portafolio · Clientes reales" />
            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-navy md:text-5xl">
              Rosario Transmisiones, con una presencia digital más clara.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate">
              Renovamos su presencia web, sistema visual y materiales comerciales: una empresa
              industrial de Rosario con una identidad seria y lista para vender online.
            </p>
            <a
              href="https://rtransmisiones.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:border-blue/40 hover:bg-ice"
            >
              Ver proyecto <ArrowUpRight size={16} />
            </a>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-xl shadow-navy/10"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-xl bg-ice">
              <img
                src="/portfolio/rtransmisiones-mockup.png"
                alt="Proyecto Rosario Transmisiones"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-14 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="order-last overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-xl shadow-navy/10 lg:order-first"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-xl bg-ice">
              <img
                src="/portfolio/spacetraslados-mockup.png"
                alt="Proyecto Space Traslados"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
          <div>
            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-navy md:text-5xl">
              Space Traslados, de cero a una presencia digital completa.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate">
              Marca, sitio web y perfil de Google para una empresa de viajes grupales en combi de
              Rosario: presupuestos por WhatsApp en un click y cobertura en todo el país.
            </p>
            <a
              href="https://spacetraslados.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:border-blue/40 hover:bg-ice"
            >
              Ver proyecto <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Planes ─────────────────────────────────────────────────────── */

const plans = [
  {
    tier: 'Diagnóstico',
    price: 'Gratis',
    desc: 'Para entender qué necesita tu negocio antes de escribir una línea de código.',
    features: [
      'Reunión inicial de descubrimiento',
      'Mapa de problemas y oportunidades',
      'Recomendación de alcance',
      'Estimación por etapas',
      'Propuesta clara para decidir',
    ],
    featured: false,
  },
  {
    tier: 'Standard',
    price: 'A medida',
    desc: 'Para comercios y PyMEs que necesitan una herramienta concreta funcionando rápido.',
    features: [
      'Landing, sistema interno o automatización',
      'Panel administrativo responsive',
      'Integraciones con servicios externos',
      'Capacitación y documentación base',
      'Soporte de lanzamiento',
    ],
    featured: true,
  },
  {
    tier: 'Pro',
    price: 'Escalable',
    desc: 'Para equipos que quieren evolucionar productos, procesos y datos con continuidad.',
    features: [
      'Arquitectura de producto completa',
      'Automatizaciones y reportes avanzados',
      'Roles, permisos y flujos internos',
      'Integraciones con pagos o bases de datos',
      'Acompañamiento técnico mensual',
    ],
    featured: false,
  },
];

function Pricing() {
  return (
    <section id="planes" className="border-y border-line bg-ice/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow label="Planes" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy md:text-5xl">
            Empezá donde estés hoy.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Arrancamos con un diagnóstico gratis y armamos el alcance que tenga sentido para tu
            negocio.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.tier}
              className={`flex flex-col rounded-2xl p-7 ${
                plan.featured
                  ? 'border-2 border-blue bg-white shadow-xl shadow-blue/10'
                  : 'border border-line bg-white shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate">{plan.tier}</p>
                {plan.featured && (
                  <span className="rounded-full bg-blue px-2.5 py-1 text-[11px] font-semibold text-white">
                    Más elegido
                  </span>
                )}
              </div>
              <p className="mt-2 text-3xl font-bold tracking-tight text-navy">{plan.price}</p>
              <p className="mt-3 min-h-[3.5em] text-sm leading-relaxed text-slate">{plan.desc}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-navy">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue/10 text-blue">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`mt-7 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition ${
                  plan.featured
                    ? 'bg-blue text-white shadow-lg shadow-blue/25 hover:bg-blue-dark'
                    : 'border border-line text-navy hover:border-blue/40 hover:bg-ice'
                }`}
              >
                Elegir plan
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA final (acento azul marca) ──────────────────────────────── */

function FinalCTA() {
  return (
    <section id="contacto" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl brand-gradient-bg px-8 py-16 text-center md:py-24"
        >
          <div className="absolute inset-0 lines-dark opacity-40" aria-hidden="true" />
          <div className="relative">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Cerrá las planillas.
              <br />
              Ordená tu operación.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/80">
              Hablemos de tu negocio y armemos una solución concreta: un POS, una web, un portal
              interno o una automatización que te saque trabajo repetitivo.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={CONTACT_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-navy transition hover:bg-ice"
              >
                Hablar con ventas <ArrowRight size={18} />
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <MessageCircle size={18} /> Escribir por WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Página ─────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="bg-white text-navy">
      <Hero />
      <Pricing />
      <TrustStrip />
      <Products />
      <Differentiators />
      <PortfolioBand />
      <FinalCTA />
    </div>
  );
}
