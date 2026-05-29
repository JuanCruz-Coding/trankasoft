const FAQS = [
  {
    q: '¿Necesito instalar algo?',
    a: 'No. TrankaPOS funciona en cualquier navegador moderno. También podés instalarlo como app desde el navegador para que aparezca en la pantalla de inicio del dispositivo.',
  },
  {
    q: '¿Funciona sin internet?',
    a: 'Necesita internet para sincronizar stock, ventas y caja entre sucursales. La venta sin internet con sincronización diferida está en nuestro roadmap.',
  },
  {
    q: '¿Cómo se cobra?',
    a: 'Mensualmente, con Mercado Pago. Cuando te suscribís se debita el primer mes y después cada 30 días automáticamente. Cancelás cuando quieras desde tu panel, en un click.',
  },
  {
    q: '¿Qué pasa con mis datos si cancelo?',
    a: 'Quedan en tu cuenta por 60 días por si reactivás. Mientras la suscripción esté activa, podés exportar todo lo que necesites a CSV.',
  },
  {
    q: '¿Puedo cambiar de plan después?',
    a: 'Sí, en cualquier momento. Si subís de plan se ajusta automáticamente. Si bajás, los nuevos límites se aplican en el próximo ciclo.',
  },
  {
    q: '¿Sirve para mi rubro?',
    a: 'Está pensado para kioscos, despensas, almacenes y minimarkets. Si vendés productos con código de barras, manejás stock y necesitás controlar caja, te sirve.',
  },
  {
    q: '¿Hace facturación electrónica con AFIP?',
    a: 'Sí. TrankaPOS emite comprobantes electrónicos contra AFIP desde el plan Kiosco, con modo de contingencia si el servicio de AFIP se cae. Cuando un comprobante queda pendiente, lo reintentás en un click desde la pantalla de ventas.',
  },
  {
    q: '¿Qué hardware soporta?',
    a: 'Lectores de código de barras USB o Bluetooth e impresoras térmicas ESC/POS reconocidas por tu sistema operativo. Balanzas, cajón de dinero y posnet físico están en roadmap.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="border-b border-line bg-white px-6 py-16 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue">
            <span className="h-px w-8 bg-blue/50" />
            06 / Preguntas frecuentes
          </p>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-navy md:text-6xl">
            Lo que más
            <br />
            nos preguntan.
          </h2>
        </div>

        <div className="rounded-3xl border border-line bg-white px-5 shadow-sm md:px-7">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="group border-b border-line py-5 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold tracking-tight text-navy md:text-lg">
                <span>{q}</span>
                <span className="shrink-0 text-2xl text-blue transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 pr-10 text-base leading-relaxed text-slate">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
