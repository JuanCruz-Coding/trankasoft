import { Link } from 'react-router-dom';
import { ArrowLeft, Bell, CalendarDays, FileText, Mail, Users } from 'lucide-react';
import { motion } from 'motion/react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4';

export default function Portal() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0c0c0c] text-white px-6 pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-55" src={VIDEO_URL} />
      </div>
      <div className="fixed inset-0 z-[1] pointer-events-none bg-[#0c0c0c]/64" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/65 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#A4F4FD]" />
            TrankaPortal · RRHH para PyMEs
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] mb-6"
          >
            Gestión de equipo,
            <br />
            <span className="text-[#A4F4FD]">sin fricción.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
            className="text-lg text-white/62 max-w-xl leading-relaxed mb-9"
          >
            Estamos puliendo TrankaPortal: recibos digitales, ausencias y comunicación
            interna en una plataforma simple para equipos chicos y medianos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <a
              href="mailto:ventas@trankasoft.com?subject=Quiero%20probar%20TrankaPortal"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-6 py-3.5 transition-all hover:bg-white/90 active:scale-[0.98] w-full sm:w-auto"
            >
              <Mail size={17} />
              Avisame cuando esté
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 text-white text-sm font-medium px-6 py-3.5 hover:bg-white/5 transition w-full sm:w-auto"
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
          <div className="liquid-glass rounded-3xl p-4 md:p-5">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#080b11]/90">
              <div className="h-10 flex items-center justify-between px-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-xs text-white/45">Portal del empleado</span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white/8 flex items-center justify-center text-[#A4F4FD]">
                    <Users size={22} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Equipo activo</p>
                    <p className="text-xs text-white/45">Recibos, ausencias y comunicados</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-3 mb-4">
                  {[
                    { label: 'Recibos', value: '18 pendientes', icon: FileText },
                    { label: 'Ausencias', value: '3 solicitudes', icon: CalendarDays },
                    { label: 'Avisos', value: '2 nuevos', icon: Bell },
                  ].map(({ label, value, icon: Icon }) => (
                    <div key={label} className="rounded-xl border border-white/10 bg-white/[0.035] p-3">
                      <Icon size={17} className="text-[#A4F4FD] mb-3" />
                      <p className="text-sm text-white">{label}</p>
                      <p className="text-xs text-white/42 mt-1">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                  <p className="text-xs text-white/45 mb-3">Actividad reciente</p>
                  {['María firmó su recibo', 'Juan solicitó vacaciones', 'Nuevo comunicado interno'].map((item) => (
                    <div key={item} className="flex items-center justify-between border-t border-white/5 py-3 first:border-t-0">
                      <span className="text-sm text-white/72">{item}</span>
                      <span className="text-[11px] text-white/35">Hoy</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
