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
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-muted">
            Si no encontrás lo que buscás, escribinos.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map(({ q, a }) => (
            <details
              key={q}
              className="group border border-slate-200 rounded-xl px-5 py-4 hover:border-slate-300 transition"
            >
              <summary className="font-semibold text-ink cursor-pointer list-none flex items-center justify-between">
                <span>{q}</span>
                <span className="text-brand-500 text-2xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-muted text-sm mt-3 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
