import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const UPDATED = 'Junio de 2026';

export default function Terminos() {
  return (
    <section className="relative bg-white px-6 pb-20 pt-28 text-navy md:pb-28 md:pt-36">
      <div className="relative mx-auto max-w-3xl">
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
          Términos y Condiciones
        </h1>
        <p className="mb-10 text-sm text-slate">Última actualización: {UPDATED}</p>

        <div className="space-y-8 text-[15px] leading-relaxed text-slate">
          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">1. Aceptación</h2>
            <p>
              Al acceder y utilizar este sitio y los servicios de TrankaSoft aceptás los presentes
              Términos y Condiciones. Si no estás de acuerdo, te pedimos que no utilices el sitio ni
              contrates nuestros servicios.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">2. Servicios</h2>
            <p>
              TrankaSoft ofrece desarrollo de software a medida, productos propios (como TrankaPOS y
              TrankaPortal) y servicios de marketing digital, incluyendo la gestión y el reporte de
              campañas publicitarias en plataformas de terceros como Google Ads y Meta Ads. El
              alcance de cada servicio se acuerda de forma particular con cada cliente.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">3. Uso permitido</h2>
            <p>
              El usuario se compromete a utilizar el sitio y los servicios de forma lícita y a no
              realizar acciones que puedan dañar, sobrecargar o perjudicar su funcionamiento o el de
              terceros.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">4. Propiedad intelectual</h2>
            <p>
              Los contenidos, marcas, logotipos y desarrollos de software de TrankaSoft son de su
              propiedad o cuentan con licencia para su uso, y están protegidos por la legislación
              vigente. No está permitida su reproducción sin autorización.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">5. Limitación de responsabilidad</h2>
            <p>
              Trabajamos para que nuestros servicios funcionen de manera continua y segura, pero no
              garantizamos la ausencia total de interrupciones o errores. TrankaSoft no será
              responsable por daños indirectos derivados del uso del sitio o de servicios de
              terceros integrados.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">6. Modificaciones</h2>
            <p>
              Podemos modificar estos Términos en cualquier momento. La versión vigente será la
              publicada en esta página, con su fecha de última actualización.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">7. Ley aplicable</h2>
            <p>
              Estos Términos se rigen por las leyes de la República Argentina. Ante cualquier
              controversia, las partes se someten a los tribunales ordinarios competentes.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">8. Contacto</h2>
            <p>
              Por consultas sobre estos Términos escribinos a{' '}
              <a href="mailto:juancruzm@trankasoft.com" className="text-blue hover:underline">
                juancruzm@trankasoft.com
              </a>
              .
            </p>
          </div>
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
