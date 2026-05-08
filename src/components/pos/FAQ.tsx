const FAQS = [
  {
    q: '¿Necesito instalar algo?',
    a: 'No. TrankaPOS funciona en cualquier navegador moderno (Chrome, Edge, Safari, Firefox). También podés instalarlo como app desde el navegador para que aparezca en la pantalla de inicio del dispositivo.',
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
    a: 'Está pensado para kioscos, despensas, almacenes y minimarkets. Si vendés productos con código de barras, manejás stock y necesitás controlar caja, te sirve. No incluye módulo de comandas para gastronomía ni integración con AFIP (todavía).',
  },
  {
    q: '¿Hace facturación electrónica con AFIP?',
    a: 'Todavía no — está en nuestro roadmap. Hoy TrankaPOS te sirve para vender, controlar stock y caja. La factura formal la seguís emitiendo por el medio que ya uses.',
  },
  {
    q: '¿Qué hardware soporta?',
    a: 'Lectores de código de barras USB o Bluetooth (cualquiera que se comporte como teclado), e impresoras térmicas ESC/POS reconocidas por tu SO. Balanzas, cajón de dinero y posnet físico están en roadmap.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-28 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="eyebrow text-blue mb-4">— 06 / Preguntas frecuentes</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-navy leading-[1.05] tracking-tight">
            Lo que más<br />
            nos preguntan.
          </h2>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {FAQS.map(({ q, a }) => (
            <details
              key={q}
              className="group py-5"
            >
              <summary className="font-display font-semibold text-navy cursor-pointer list-none flex items-center justify-between gap-4 text-base md:text-lg tracking-tight">
                <span>{q}</span>
                <span className="text-blue text-2xl group-open:rotate-45 transition-transform shrink-0">
                  +
                </span>
              </summary>
              <p className="text-slate text-base mt-3 leading-relaxed pr-10">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
