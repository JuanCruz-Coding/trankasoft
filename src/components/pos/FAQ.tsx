const FAQS = [
  {
    q: '¿Necesito instalar algo?',
    a: 'No. TrankaPOS funciona en cualquier navegador moderno (Chrome, Edge, Safari). También podés instalarlo como app desde el navegador para que aparezca en el escritorio o la pantalla de inicio.',
  },
  {
    q: '¿Funciona sin internet?',
    a: 'Necesita internet para sincronizar stock, ventas y caja entre sucursales. Para uso 100% offline existe una versión local sin las funciones multi-sucursal.',
  },
  {
    q: '¿Cómo se cobra?',
    a: 'Mensualmente, con Mercado Pago. Cuando te suscribís se debita el primer mes y después cada 30 días automáticamente. Cancelás cuando quieras desde tu panel.',
  },
  {
    q: '¿Qué pasa con mis datos si cancelo?',
    a: 'Quedan en tu cuenta por 60 días por si reactivás. Podés exportar todo a CSV en cualquier momento desde la sección de reportes.',
  },
  {
    q: '¿Puedo cambiar de plan después?',
    a: 'Sí, en cualquier momento. Si subís de plan se ajusta automáticamente. Si bajás, los límites se aplican en el próximo ciclo.',
  },
  {
    q: '¿Sirve para mi rubro?',
    a: 'Está pensado para kioscos, despensas, almacenes y minimarkets. Si vendés productos con código de barras, manejás stock y necesitás controlar caja, te sirve.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-28 px-6 bg-surface-alt">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <span className="inline-block text-brand-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Preguntas frecuentes
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-ink leading-[1.05]">
            Lo que más nos preguntan.
          </h2>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {FAQS.map(({ q, a }) => (
            <details
              key={q}
              className="group py-5"
            >
              <summary className="font-semibold text-ink cursor-pointer list-none flex items-center justify-between gap-4 text-base md:text-lg">
                <span>{q}</span>
                <span className="text-muted text-2xl group-open:rotate-45 transition-transform shrink-0">
                  +
                </span>
              </summary>
              <p className="text-muted text-base mt-3 leading-relaxed pr-10">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
