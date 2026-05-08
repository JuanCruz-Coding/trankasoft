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
    <section id="contacto" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="eyebrow text-blue mb-4">— 05 / Contacto</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-navy leading-[1.05] mb-6 tracking-tight">
            Hablemos<br />
            <span className="brand-gradient-text">tranquilos.</span>
          </h2>
          <p className="text-lg text-slate leading-relaxed mb-10">
            Contanos qué necesitás. Te respondemos en menos de 24 horas hábiles.
          </p>

          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-ice flex items-center justify-center shrink-0">
                <Mail size={18} className="text-blue" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate mb-0.5">Email</p>
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
                <p className="text-xs uppercase tracking-wider text-slate mb-0.5">Teléfono / WhatsApp</p>
                <a
                  href="tel:+5493412550031"
                  className="text-navy font-medium hover:text-blue transition"
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
                <p className="text-xs uppercase tracking-wider text-slate mb-0.5">Ubicación</p>
                <p className="text-navy font-medium">Argentina</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="md:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="bg-ice/40 rounded-2xl p-7 md:p-8 border border-line space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                  Nombre
                </label>
                <input
                  required
                  id="name"
                  name="name"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-line text-navy focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                  Email
                </label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-line text-navy focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition"
                  placeholder="vos@empresa.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                  Teléfono <span className="text-slate font-normal">(opcional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-line text-navy focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition"
                  placeholder="+54 ..."
                />
              </div>
              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-navy mb-2">
                  Sobre qué consultás
                </label>
                <select
                  id="topic"
                  name="topic"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-line text-navy focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition"
                >
                  <option>TrankaPOS</option>
                  <option>TrankaPortal</option>
                  <option>Software a medida</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                Mensaje
              </label>
              <textarea
                required
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white border border-line text-navy focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition resize-none"
                placeholder="Contanos brevemente qué necesitás."
              />
            </div>

            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-blue hover:bg-blue-dark disabled:bg-slate disabled:cursor-not-allowed text-white font-semibold px-7 py-3.5 rounded-lg transition flex items-center gap-2 shadow-lg shadow-blue/20"
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
              <Send size={16} />
            </button>

            {status === 'success' && (
              <div className="flex items-start gap-2 text-sm text-blue bg-blue/5 border border-blue/20 rounded-lg p-3">
                <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                <p>¡Listo! Recibimos tu mensaje. Te respondemos en menos de 24 hs hábiles.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-start gap-2 text-sm text-orange bg-orange/5 border border-orange/20 rounded-lg p-3">
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
