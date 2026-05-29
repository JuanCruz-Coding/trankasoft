import { Link } from 'react-router-dom';
import { ArrowLeft, Bell, CalendarDays, FileText, Mail, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function Portal() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-20 pt-28 text-navy md:pb-28 md:pt-36">
      <div className="absolute inset-0 lines-light opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(63,169,255,0.16), transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-3 py-1.5 text-xs font-medium text-orange"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            TrankaPortal · RRHH para PyMEs · Pronto
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-5xl font-bold leading-[0.95] tracking-tight text-navy md:text-7xl"
          >
            Gestión de equipo,
            <br />
            <span className="brand-gradient-text">sin fricción.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
            className="mb-9 max-w-xl text-lg leading-relaxed text-slate"
          >
            Estamos puliendo TrankaPortal: recibos digitales, ausencias y comunicación interna en
            una plataforma simple para equipos chicos y medianos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
            className="flex flex-col items-center gap-3 sm:flex-row"
          >
            <a
              href="mailto:ventas@trankasoft.com?subject=Quiero%20probar%20TrankaPortal"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue/25 transition-all hover:-translate-y-0.5 hover:bg-blue-dark sm:w-auto"
            >
              <Mail size={17} />
              Avisame cuando esté
            </a>
            <Link
              to="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-white px-6 py-3.5 text-sm font-semibold text-navy transition hover:border-blue/40 hover:bg-ice sm:w-auto"
            >
              <ArrowLeft size={17} />
              Volver al inicio
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6"
        >
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-2xl shadow-navy/10">
            <div className="flex h-10 items-center justify-between border-b border-line bg-ice/60 px-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-xs font-medium text-slate">Portal del empleado</span>
            </div>

            <div className="p-5">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ice text-blue">
                  <Users size={22} />
                </div>
                <div>
                  <p className="font-semibold text-navy">Equipo activo</p>
                  <p className="text-xs text-slate">Recibos, ausencias y comunicados</p>
                </div>
              </div>

              <div className="mb-4 grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'Recibos', value: '18 pendientes', icon: FileText },
                  { label: 'Ausencias', value: '3 solicitudes', icon: CalendarDays },
                  { label: 'Avisos', value: '2 nuevos', icon: Bell },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="rounded-xl border border-line bg-white p-3 shadow-sm">
                    <Icon size={17} className="mb-3 text-blue" />
                    <p className="text-sm font-medium text-navy">{label}</p>
                    <p className="mt-1 text-xs text-slate">{value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-line bg-white p-4 shadow-sm">
                <p className="mb-3 text-xs text-slate">Actividad reciente</p>
                {['María firmó su recibo', 'Juan solicitó vacaciones', 'Nuevo comunicado interno'].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border-t border-line py-3 first:border-t-0"
                    >
                      <span className="text-sm text-navy">{item}</span>
                      <span className="text-[11px] text-slate">Hoy</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
