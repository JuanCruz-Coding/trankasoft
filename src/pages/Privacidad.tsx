import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const UPDATED = 'Junio de 2026';

export default function Privacidad() {
  return (
    <section className="relative bg-white px-6 pb-20 pt-28 text-navy md:pb-28 md:pt-36">
      <div className="relative mx-auto max-w-3xl">
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
          Política de Privacidad
        </h1>
        <p className="mb-10 text-sm text-slate">Última actualización: {UPDATED}</p>

        <div className="space-y-8 text-[15px] leading-relaxed text-slate">
          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">1. Responsable de los datos</h2>
            <p>
              Esta política describe cómo TrankaSoft, compañía argentina de desarrollo de software
              y marketing digital, trata la información personal de quienes utilizan este sitio y
              nuestros servicios. Para cualquier consulta sobre privacidad podés escribirnos a{' '}
              <a href="mailto:juancruzm@trankasoft.com" className="text-blue hover:underline">
                juancruzm@trankasoft.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">2. Información que recopilamos</h2>
            <p>
              Recopilamos la información que nos proporcionás voluntariamente al contactarnos
              (nombre, correo electrónico, teléfono y mensaje) y datos técnicos de navegación
              (dirección IP, tipo de dispositivo y páginas visitadas) mediante cookies y
              herramientas de analítica.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">3. Finalidad del tratamiento</h2>
            <p>
              Utilizamos los datos para responder consultas, prestar y mejorar nuestros servicios,
              gestionar campañas publicitarias de nuestros clientes y elaborar informes de
              rendimiento. No vendemos ni alquilamos información personal a terceros.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">4. Servicios de terceros</h2>
            <p>
              Para la prestación de servicios de marketing y analítica integramos plataformas de
              terceros, como Google (Google Ads y Google Analytics) y Meta (Facebook e Instagram
              Ads). Estos proveedores tratan los datos conforme a sus propias políticas de
              privacidad. El acceso a las cuentas publicitarias de nuestros clientes se realiza con
              su autorización y se limita a tareas de gestión y reporte.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">5. Cookies</h2>
            <p>
              Usamos cookies propias y de terceros para el funcionamiento del sitio y la medición de
              su uso. Podés configurar tu navegador para rechazarlas, aunque algunas funciones
              podrían verse afectadas.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">6. Tus derechos</h2>
            <p>
              De acuerdo con la Ley 25.326 de Protección de los Datos Personales de la República
              Argentina, podés solicitar el acceso, la rectificación, la actualización o la
              supresión de tus datos escribiéndonos a{' '}
              <a href="mailto:juancruzm@trankasoft.com" className="text-blue hover:underline">
                juancruzm@trankasoft.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-navy">7. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta política para reflejar cambios en nuestros servicios o en la
              normativa aplicable. Publicaremos la versión vigente en esta misma página.
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
