import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('from_name', 'Landing TrankaSoft');
    formData.append('subject', 'Nuevo contacto desde la landing');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'No pudimos enviar el mensaje.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Hubo un problema de conexión. Probá de nuevo.');
    }
  }

  return (
    <section id="contacto" className="relative py-20 md:py-32 px-5 md:px-6 bg-white overflow-hidden">
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-14">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-blue/60" />
            <p className="eyebrow text-blue">06 — Contacto</p>
          </div>

          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-navy leading-[1.02] mb-6 tracking-[-0.035em]">
            Hablemos<br />
            <span className="brand-gradient-text">tranquilos.</span>
          </h2>

          <div className="inline-flex items-center gap-2.5 bg-blue/5 border border-blue/15 rounded-full px-3.5 py-1.5 mb-7">
            <span className="status-dot status-dot--blue" />
            <span className="marker text-blue">Respuesta &lt; 24hs hábiles</span>
          </div>

          <p className="text-lg text-slate leading-relaxed mb-10">
            Contanos qué necesitás. Te respondemos rápido y sin vueltas — sin
            chatbots ni formularios eternos.
          </p>

          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-ice flex items-center justify-center shrink-0">
                <Mail size={18} className="text-blue" />
              </div>
              <div>
                <p className="marker text-slate mb-1">Email</p>
                <a
                  href="mailto:ventas@trankasoft.com"
                  className="text-navy font-medium hover:text-blue transition"
                >
                  ventas@trankasoft.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-ice flex items-center justify-center shrink-0">
                <Phone size={18} className="text-blue" />
              </div>
              <div>
                <p className="marker text-slate mb-1">Teléfono · WhatsApp</p>
                <a
                  href="tel:+5493412550031"
                  className="text-navy font-medium hover:text-blue transition tabular-nums"
                >
                  +54 9 3412 55-0031
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-ice flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-blue" />
              </div>
              <div>
                <p className="marker text-slate mb-1">Ubicación</p>
                <p className="text-navy font-medium">Argentina</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="md:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="relative bg-ice/40 rounded-2xl p-7 md:p-9 border border-line space-y-5"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="marker text-slate">— Formulario · 01</p>
              <p className="marker text-slate">5 campos</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block marker text-navy/70 mb-2">
                  Nombre
                </label>
                <input
                  required
                  id="name"
                  name="name"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-line text-navy placeholder:text-slate-soft focus:outline-none focus:border-blue focus:ring-4 focus:ring-blue/15 transition"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block marker text-navy/70 mb-2">
                  Email
                </label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-line text-navy placeholder:text-slate-soft focus:outline-none focus:border-blue focus:ring-4 focus:ring-blue/15 transition"
                  placeholder="vos@empresa.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block marker text-navy/70 mb-2">
                  Teléfono <span className="normal-case tracking-normal text-slate-soft">(opcional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-line text-navy placeholder:text-slate-soft focus:outline-none focus:border-blue focus:ring-4 focus:ring-blue/15 transition tabular-nums"
                  placeholder="+54 ..."
                />
              </div>
              <div>
                <label htmlFor="topic" className="block marker text-navy/70 mb-2">
                  Sobre qué consultás
                </label>
                <select
                  id="topic"
                  name="topic"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-line text-navy focus:outline-none focus:border-blue focus:ring-4 focus:ring-blue/15 transition"
                >
                  <option>TrankaPOS</option>
                  <option>TrankaPortal</option>
                  <option>Software a medida</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block marker text-navy/70 mb-2">
                Mensaje
              </label>
              <textarea
                required
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white border border-line text-navy placeholder:text-slate-soft focus:outline-none focus:border-blue focus:ring-4 focus:ring-blue/15 transition resize-none"
                placeholder="Contanos brevemente qué necesitás."
              />
            </div>

            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="flex items-center justify-between gap-4 pt-2">
              <p className="marker text-slate hidden sm:block">
                · No spam, no chatbots
              </p>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group bg-blue hover:bg-blue-dark disabled:bg-slate disabled:cursor-not-allowed text-white font-semibold px-7 py-3.5 rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-blue/25 hover:shadow-xl hover:shadow-blue/35 hover:-translate-y-0.5 disabled:hover:translate-y-0 disabled:shadow-none"
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                <Send
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </button>
            </div>

            {status === 'success' && (
              <div className="flex items-start gap-2.5 text-sm text-blue bg-blue/5 border border-blue/20 rounded-lg p-3.5">
                <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                <p>¡Listo! Recibimos tu mensaje. Te respondemos en menos de 24 hs hábiles.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-start gap-2.5 text-sm text-orange bg-orange/5 border border-orange/20 rounded-lg p-3.5">
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                <p>{errorMsg}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
