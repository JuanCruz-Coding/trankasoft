import { useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import {
  Archive,
  ArrowUpRight,
  BarChart3,
  BellOff,
  ChevronRight,
  FileCheck2,
  FolderKanban,
  Mail,
  MessageCircle,
  MoreHorizontal,
  Paperclip,
  Reply,
  Search,
  Send,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  Trash2,
  Users,
  Workflow,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4';

const CONTACT_HREF = 'mailto:ventas@trankasoft.com?subject=Consulta%20comercial';

const gradientStyle: CSSProperties = {
  backgroundImage:
    'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  filter: 'url(#c3-noise)',
};

type ButtonProps = {
  label?: string;
  href?: string;
  full?: boolean;
};

function PrimaryButton({ label = 'Hablar con ventas', href = CONTACT_HREF, full = false }: ButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98] ${
        full ? 'w-full' : ''
      }`}
    >
      <Sparkles size={16} />
      {label}
      <ChevronRight size={16} className="transition-transform group-hover:translate-x-px" />
    </a>
  );
}

function SectionEyebrow({ label, tag }: { label: string; tag?: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-medium text-white/70">
      <span className="w-1.5 h-1.5 rounded-full bg-white" />
      <span>{label}</span>
      {tag && (
        <span className="px-2 py-0.5 rounded-full border border-white/10 text-white/50">
          {tag}
        </span>
      )}
    </div>
  );
}

function AppleLogo({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" fill="currentColor" className={className} aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
      <path
        d="M4.5 10.5 8 14l7.5-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover pointer-events-none opacity-65"
          src={VIDEO_URL}
        />
      </div>
      <div className="fixed inset-0 z-[1] pointer-events-none bg-[#0c0c0c]/55" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0"
          />
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </svg>

      <div className="relative z-10">{children}</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="pt-28 md:pt-36 pb-20 text-center flex flex-col items-center px-6">
      <motion.div
        className="mb-10 inline-flex items-center gap-2.5 text-white"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
      >
        <span className="text-sm md:text-base font-medium tracking-tight text-white">
          TrankaSoft
        </span>
        <img
          src="/brand/isotipo.png"
          alt=""
          aria-hidden="true"
          className="h-8 md:h-10 w-auto object-contain drop-shadow-[0_18px_40px_rgba(61,129,227,0.35)]"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.9]"
      >
        <span className="block">Tu negocio.</span>
        <span className="block animate-shiny" style={gradientStyle}>
          Revitalizado
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
        className="mt-8 text-white/60 w-full max-w-md text-base leading-[1.5]"
      >
        TrankaSoft crea productos y sistemas digitales para que comercios, PyMEs y equipos
        trabajen con claridad: menos planillas, menos ruido y mas control operativo.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
        className="mt-8 flex flex-col items-center gap-3"
      >
        <PrimaryButton label="Conocer soluciones" href="#soluciones" />
        <p className="text-xs text-white/40">TrankaPOS / TrankaPortal / Software a medida</p>
      </motion.div>
    </section>
  );
}

function MenuBarStrip() {
  const items = ['Archivo', 'Editar', 'Vista', 'Ir', 'Ventana', 'Ayuda'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.9, ease: 'easeOut' }}
      className="h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs min-w-0">
        <div className="flex items-center gap-4 min-w-0 max-w-full">
          <AppleLogo className="w-3.5 h-3.5 shrink-0" />
          <span className="font-bold text-white">TrankaSoft</span>
          <div className="flex items-center gap-4 text-white/65">
            {items.map((item, index) => (
              <span
                key={item}
                className={`${index > 0 ? 'hidden sm:inline' : ''} ${index > 2 ? 'hidden md:inline' : ''}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 text-white/55 shrink-0">
          <Search className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Vie 22 May 12:30</span>
        </div>
      </div>
    </motion.div>
  );
}

const moduleItems = [
  { icon: Mail, label: 'Bandeja', count: '12', active: true },
  { icon: ShoppingCart, label: 'Ventas', count: '34' },
  { icon: Store, label: 'Stock' },
  { icon: Users, label: 'Clientes', count: '8' },
  { icon: FileCheck2, label: 'Facturacion' },
  { icon: Archive, label: 'Archivo' },
];

const activityItems = [
  {
    name: 'TrankaPOS',
    subject: 'Cierre diario listo',
    preview: 'Caja, stock y ventas quedaron conciliados...',
    time: '9:41',
    unread: true,
    active: true,
  },
  {
    name: 'Mariana Gomez',
    subject: 'Nueva sucursal para configurar',
    preview: 'Necesitamos sumar una caja y tres usuarios...',
    time: '8:12',
    unread: true,
  },
  {
    name: 'TrankaPortal',
    subject: 'Recibos pendientes',
    preview: 'Hay 4 colaboradores esperando confirmacion.',
    time: 'Ayer',
  },
  {
    name: 'Mercado Pago',
    subject: 'Cobros sincronizados',
    preview: 'Se registraron 18 pagos del dia.',
    time: 'Ayer',
  },
  {
    name: 'Vercel',
    subject: 'Deploy de landing publicado',
    preview: 'La version preview ya esta disponible.',
    time: 'Lun',
  },
  {
    name: 'Soporte',
    subject: 'Consulta resuelta por WhatsApp',
    preview: 'El cliente confirmo que ya puede operar.',
    time: 'Lun',
  },
];

function OperationsMockup() {
  return (
    <section id="soluciones" className="max-w-6xl mx-auto px-6 py-16 md:py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-full min-w-0 rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl shadow-2xl shadow-black/40"
      >
        <div className="h-10 flex items-center justify-between px-4 border-b border-white/10 bg-black/30">
          <div className="flex items-center gap-2">
            {['#ff5f57', '#febc2e', '#28c840'].map((color) => (
              <span key={color} className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
            ))}
          </div>
          <span className="text-xs text-white/50">TrankaSoft - Operaciones</span>
          <span className="w-14" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:h-[520px]">
          <aside className="min-w-0 md:col-span-3 border-b md:border-b-0 md:border-r border-white/10 bg-black/30 p-4">
            <button className="w-full rounded-lg bg-white text-black text-xs font-semibold px-3 py-2 flex items-center justify-center gap-2">
              <Sparkles size={14} />
              Crear flujo con TrankaSoft
            </button>

            <nav className="mt-5 space-y-1">
              {moduleItems.map(({ icon: Icon, label, count, active }) => (
                <a
                  key={label}
                  href="#contacto"
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
                    active ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon size={15} />
                    {label}
                  </span>
                  {count && <span className="text-xs text-white/35">{count}</span>}
                </a>
              ))}
            </nav>

            <div className="mt-8">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/35 mb-3">Estados</p>
              {[
                ['Operativo', '#00d2ff'],
                ['Pendiente', '#A4F4FD'],
                ['Atencion', '#f59e0b'],
                ['Cerrado', '#10b981'],
              ].map(([label, color]) => (
                <div key={label} className="flex items-center gap-2 text-xs text-white/55 py-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                  {label}
                </div>
              ))}
            </div>
          </aside>

          <div className="min-w-0 md:col-span-4 border-b md:border-b-0 md:border-r border-white/10">
            <div className="h-14 flex items-center gap-2 px-4 border-b border-white/10">
              <Search size={15} className="text-white/35" />
              <span className="text-sm text-white/35">Buscar operaciones</span>
            </div>

            <div>
              {activityItems.map((item) => (
                <button
                  key={`${item.name}-${item.subject}`}
                  className={`w-full text-left px-4 py-3 border-b border-white/5 transition ${
                    item.active ? 'bg-white/[0.07]' : 'hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className={`text-sm ${item.unread ? 'text-white font-semibold' : 'text-white/70'}`}>
                      {item.name}
                    </p>
                    <span className="text-[11px] text-white/35">{item.time}</span>
                  </div>
                  <p className="mt-1 text-sm text-white/80 truncate">{item.subject}</p>
                  <p className="mt-1 text-xs text-white/40 truncate">{item.preview}</p>
                </button>
              ))}
            </div>
          </div>

          <article className="min-w-0 md:col-span-5">
            <div className="h-14 flex items-center justify-between px-4 border-b border-white/10">
              <div className="flex items-center gap-1">
                {[Reply, Send, Archive, Trash2].map((Icon) => (
                  <button
                    key={Icon.displayName}
                    className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-white/55"
                    aria-label="Accion"
                  >
                    <Icon size={14} />
                  </button>
                ))}
              </div>
              <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-white/55">
                <MoreHorizontal size={15} />
              </button>
            </div>

            <div className="p-5 md:p-6">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Cierre diario listo</h3>
              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00d2ff] to-[#0B2551] flex items-center justify-center text-xs font-bold">
                    T
                  </div>
                  <div>
                    <p className="text-sm text-white">TrankaPOS</p>
                    <p className="text-xs text-white/45">para mi comercio - 9:41</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
                  Ventas
                </span>
              </div>

              <div className="liquid-glass rounded-xl p-4 mt-6">
                <div className="flex items-center gap-2 text-[#A4F4FD] text-sm font-semibold">
                  <Sparkles size={16} />
                  Resumen por TrankaSoft
                </div>
                <p className="mt-2 text-sm text-white/70 leading-[1.6]">
                  Se registraron 124 ventas, 18 pagos digitales y 3 productos bajo stock. No
                  hay diferencias de caja y la sucursal centro quedo conciliada.
                </p>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-[1.7] text-white/68">
                <p>Hola equipo,</p>
                <p>
                  El cierre diario quedo procesado. TrankaSoft agrupo ventas, caja y stock
                  para que puedas decidir el proximo paso sin revisar planillas sueltas.
                </p>
                <p>
                  La tendencia de ventas subio 14% contra la semana anterior y el sistema
                  detecto productos con reposicion sugerida para manana.
                </p>
                <p>Si queres, armamos una vista similar para tus procesos actuales.</p>
                <p className="text-white/50">- Equipo TrankaSoft</p>
              </div>

              <a
                href="#contacto"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/65 hover:text-white hover:bg-white/[0.06] transition"
              >
                <Paperclip size={14} />
                diagnostico-operativo.pdf
              </a>
            </div>
          </article>
        </div>
      </motion.div>
    </section>
  );
}

const triageGroups = [
  {
    label: 'Prioridad',
    count: 4,
    color: '#ffffff',
    items: ['Caja - diferencia resuelta', 'Stock - reposicion critica'],
  },
  {
    label: 'Seguimiento',
    count: 7,
    color: '#e5e5e5',
    items: ['Cliente - cotizacion pendiente', 'RRHH - recibos digitales'],
  },
  {
    label: 'Actualizaciones',
    count: 18,
    color: '#a3a3a3',
    items: ['Deploy listo', 'Backup automatico completo'],
  },
  {
    label: 'Archivado',
    count: 13,
    color: '#525252',
    items: ['Comprobantes - newsletters - recibos'],
  },
];

function FeatureTriage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionEyebrow label="Operacion" tag="AI-native" />
        <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
          Ordena tu negocio
          <br />
          en una sola pasada.
        </h2>
        <p className="mt-6 text-white/60 text-base leading-[1.6] max-w-md">
          TrankaSoft transforma tareas dispersas en flujos claros. Automatiza lo repetitivo,
          prioriza lo urgente y deja visible lo que realmente mueve tu dia.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {['Automatizaciones', 'Stock y caja', 'Portales internos', 'Soporte cercano'].map((chip) => (
            <span
              key={chip}
              className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]"
            >
              {chip}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="liquid-glass rounded-2xl p-5"
      >
        <p className="text-sm text-white/55 mb-4">Hoy - 42 operaciones ordenadas</p>
        <div className="grid gap-3">
          {triageGroups.map((group) => (
            <div key={group.label} className="liquid-glass rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: group.color }} />
                  <p className="text-sm font-medium text-white">{group.label}</p>
                </div>
                <span className="text-xs text-white/40">{group.count}</span>
              </div>
              <div className="mt-3 space-y-1.5">
                {group.items.map((item) => (
                  <p key={item} className="text-xs text-white/55">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function LogoCloud() {
  const names = ['Comercios', 'PyMEs', 'Retail', 'RRHH', 'Industria', 'Servicios', 'Startups', 'Equipos'];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <p className="text-center text-xs uppercase tracking-widest text-white/40">
        Pensado para equipos que necesitan tecnologia clara
      </p>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
        {names.map((name, index) => (
          <motion.p
            key={name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
            className="text-sm font-semibold tracking-tight text-white/50 hover:text-white transition text-center"
          >
            {name}
          </motion.p>
        ))}
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      'TrankaSoft nos ayudo a pasar de tareas manuales a un flujo claro. Ahora sabemos donde esta cada venta, cada producto y cada pendiente.',
    name: 'Operacion comercial',
    role: 'Cliente TrankaPOS',
    company: 'RETAIL',
  },
  {
    quote:
      'El valor estuvo en la claridad. Nos explicaron el proceso, construyeron lo necesario y dejaron una herramienta que el equipo pudo usar rapido.',
    name: 'Direccion administrativa',
    role: 'Sistema interno',
    company: 'PYME',
  },
  {
    quote:
      'Tener soporte cercano cambia todo. No sentimos que compramos una plantilla, sino una solucion pensada para nuestra forma de trabajar.',
    name: 'Equipo operativo',
    role: 'Automatizaciones',
    company: 'SERVICIOS',
  },
];

function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
      <div className="grid md:grid-cols-3 gap-4">
        {testimonials.map((item, index) => (
          <motion.figure
            key={item.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="liquid-glass rounded-2xl p-6"
          >
            <blockquote className="text-sm text-white/80 leading-[1.6]">"{item.quote}"</blockquote>
            <figcaption className="mt-6 pt-5 border-t border-white/10">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-xs text-white/50 mt-1">{item.role}</p>
              <p className="text-xs text-white font-semibold tracking-wide mt-2">{item.company}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

const plans = [
  {
    tier: 'Diagnostico',
    monthly: 'Gratis',
    yearly: 'Gratis',
    desc: 'Para entender que necesita tu negocio antes de escribir una linea de codigo.',
    features: [
      'Reunion inicial de descubrimiento',
      'Mapa de problemas y oportunidades',
      'Recomendacion de stack y alcance',
      'Estimacion por etapas',
      'Propuesta clara para decidir',
    ],
  },
  {
    tier: 'Standard',
    monthly: 'A medida',
    yearly: 'Por etapas',
    desc: 'Para comercios y PyMEs que necesitan una herramienta concreta funcionando rapido.',
    features: [
      'Landing, sistema interno o automatizacion',
      'Panel administrativo responsive',
      'Integraciones con servicios externos',
      'Capacitacion y documentacion base',
      'Soporte de lanzamiento',
    ],
  },
  {
    tier: 'Pro',
    monthly: 'Escalable',
    yearly: 'Roadmap anual',
    desc: 'Para equipos que quieren evolucionar productos, procesos y datos con continuidad.',
    features: [
      'Arquitectura de producto completa',
      'Automatizaciones y reportes avanzados',
      'Roles, permisos y flujos internos',
      'Integraciones con pagos o bases de datos',
      'Acompanamiento tecnico mensual',
    ],
    pro: true,
  },
];

function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="planes" className="c3-pricing-section">
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.075" />
          </feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
        </filter>
      </svg>

      <div className="c3-watermark-container">
        <div className="c3-watermark-main">
          <span className="c3-watermark-line-1">Tu negocio.</span>
          <span className="c3-watermark-line-2">Revitalizado</span>
        </div>
      </div>

      <div className="c3-grid">
        {plans.map((plan) => (
          <article key={plan.tier} className={`c3-card ${plan.pro ? 'c3-card-pro' : ''}`}>
            <p className="c3-tier-small">{plan.tier}</p>
            <p className="c3-tier-large">{yearly ? plan.yearly : plan.monthly}</p>
            <p className="c3-desc">{plan.desc}</p>
            <ul className="c3-list">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <span className="c3-check">
                    <CheckIcon />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href="#contacto" className="c3-btn">
              Elegir plan
            </a>
          </article>
        ))}
      </div>

      <div className="c3-toggle-wrap">
        <span className="text-sm text-white/55">Anual</span>
        <button
          type="button"
          aria-pressed={yearly}
          aria-label="Cambiar a vista anual"
          onClick={() => setYearly((current) => !current)}
          className={`c3-toggle ${yearly ? 'active' : ''}`}
        >
          <span className="c3-toggle-knob" />
        </button>
      </div>
    </section>
  );
}

function ProductHighlights() {
  const items = [
    {
      icon: Store,
      title: 'TrankaPOS',
      desc: 'Punto de venta multi-sucursal con stock, caja, ventas y reportes claros.',
      href: '/pos',
    },
    {
      icon: Users,
      title: 'TrankaPortal',
      desc: 'Portal de RRHH para recibos, ausencias y comunicacion interna de PyMEs.',
      href: '/portal',
    },
    {
      icon: Workflow,
      title: 'Software a medida',
      desc: 'Automatizaciones, paneles e integraciones pensadas para tu operacion real.',
      href: '#contacto',
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
      <div className="max-w-2xl">
        <SectionEyebrow label="Soluciones" tag="TrankaSoft" />
        <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
          Productos propios y sistemas a medida, bajo una misma mirada.
        </h2>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {items.map(({ icon: Icon, title, desc, href }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="liquid-glass rounded-2xl p-6 group"
          >
            <div className="w-11 h-11 rounded-xl bg-white/8 flex items-center justify-center text-[#A4F4FD] group-hover:bg-white group-hover:text-black transition">
              <Icon size={20} />
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-tight">{title}</h3>
            <p className="mt-3 text-sm text-white/58 leading-[1.6]">{desc}</p>
            <Link
              to={href}
              className="mt-6 inline-flex items-center gap-2 text-sm text-white/75 hover:text-white transition"
            >
              Ver mas
              <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: Zap, label: 'Sin instalacion' },
    { icon: ShieldCheck, label: 'Datos seguros' },
    { icon: MessageCircle, label: 'Soporte por WhatsApp' },
    { icon: BarChart3, label: 'Reportes claros' },
    { icon: BellOff, label: 'Menos ruido operativo' },
    { icon: FolderKanban, label: 'Procesos visibles' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <div className="liquid-glass rounded-full px-5 py-3 overflow-hidden">
        <div className="marquee">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex items-center gap-8 px-4 shrink-0 whitespace-nowrap">
              {items.map(({ icon: Icon, label }) => (
                <li key={`${copy}-${label}`} className="flex items-center gap-2 text-xs text-white/55">
                  <Icon size={14} className="text-[#A4F4FD]" />
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

function PortfolioBand() {
  return (
    <section id="portafolio" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <SectionEyebrow label="Portafolio" tag="Cliente real" />
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
            Rosario Transmisiones, llevado a una presencia digital mas clara.
          </h2>
          <p className="mt-6 text-white/60 leading-[1.6]">
            Renovamos presencia web, sistema visual y materiales comerciales para una empresa
            industrial de Rosario, manteniendo una identidad seria y lista para vender online.
          </p>
          <a
            href="https://rtransmisiones.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 hover:bg-white/5 transition"
          >
            Ver proyecto
            <ArrowUpRight size={16} />
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="liquid-glass rounded-3xl p-3"
        >
          <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-black">
            <img
              src="/portfolio/rtransmisiones-mockup.png"
              alt="Mockup del proyecto Rosario Transmisiones"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contacto" className="max-w-6xl mx-auto px-6 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center"
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(600px circle at 50% 0%, rgba(255,255,255,0.15), transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
            Cerra las planillas.
            <br />
            Abri tu operacion.
          </h2>
          <p className="mt-6 text-white/60 max-w-md mx-auto text-sm leading-[1.6]">
            Hablemos de tu negocio y armemos una solucion concreta: un POS, una landing,
            un portal interno o una automatizacion que te saque trabajo repetitivo.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <PrimaryButton label="Hablar con ventas" />
            <a
              href="https://wa.me/5493412550031?text=Hola!%20Vengo%20de%20la%20web%20de%20TrankaSoft%20y%20quiero%20hacer%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 hover:bg-white/5 transition"
            >
              Escribir por WhatsApp
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-px" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <PageFrame>
      <Hero />
      <MenuBarStrip />
      <OperationsMockup />
      <TrustStrip />
      <ProductHighlights />
      <FeatureTriage />
      <LogoCloud />
      <PortfolioBand />
      <Testimonials />
      <Pricing />
      <FinalCTA />
    </PageFrame>
  );
}
