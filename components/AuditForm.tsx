"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  website: string;
  businessType: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  website: "",
  businessType: "",
  message: "",
};

const auditPoints = [
  {
    number: "1",
    title: "Analizamos tu web actual",
    text: "Revisamos tu web (si tienes) y tu sector antes de responderte.",
  },
  {
    number: "2",
    title: "3 mejoras concretas",
    text: "Te enviamos exactamente qué cambiaríamos y por qué, sin teoría.",
  },
  {
    number: "3",
    title: "Sin compromiso",
    text: "La auditoría es gratuita y no te obliga a contratarnos.",
  },
];

export default function AuditForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /*
     * TODO: Conectar a un servicio de envío de formularios.
     * Opciones recomendadas:
     *   - Formspree:  https://formspree.io  (sin backend propio)
     *   - EmailJS:    https://www.emailjs.com
     *   - Resend:     https://resend.com  (con API Route en Next.js)
     *   - Supabase:   insertar en tabla y enviar notificación
     *   - API propia: POST a /api/contact con los datos del formulario
     *
     * Ejemplo con Formspree:
     *   const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
     *     method: "POST",
     *     headers: { "Content-Type": "application/json" },
     *     body: JSON.stringify(form),
     *   });
     */
    setSubmitted(true);
  };

  return (
    <section id="auditoria" className="bg-[#1E3A8A] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: copy */}
          <div className="text-white">
            <p className="text-sm font-semibold text-[#93C5FD] uppercase tracking-widest mb-3">
              Auditoría gratuita
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-5">
              ¿No sabes si tu web está perdiendo oportunidades?
            </h2>

            {/* Main promise */}
            <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 mb-8">
              <p className="text-white font-medium leading-relaxed">
                Te enviaremos{" "}
                <span className="text-[#34D399] font-bold">3 mejoras concretas</span>{" "}
                que aplicaríamos a tu web para que transmita más confianza y convierta mejor.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-5">
              {auditPoints.map((item) => (
                <div key={item.number} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#93C5FD]">{item.number}</span>
                  </div>
                  <div className="pt-0.5">
                    <p className="font-semibold text-white text-sm mb-0.5">{item.title}</p>
                    <p className="text-[#BFDBFE] text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl shadow-2xl shadow-black/20 p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-[#F0FDF4] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#22C55E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">¡Recibido!</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  Revisaremos tu web y te enviaremos las{" "}
                  <strong className="text-[#0F172A]">3 mejoras concretas</strong> en menos de 48h.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                    Pide tu auditoría gratuita
                  </h3>
                  {/* Exact requested phrase */}
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    Sin compromiso. Te enviaremos una revisión inicial con{" "}
                    <span className="font-semibold text-[#0F172A]">3 mejoras concretas</span>{" "}
                    para tu web.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#374151] mb-1.5">
                        Nombre <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="w-full px-3 py-3 rounded-lg border border-[#D1D5DB] text-sm text-[#0F172A] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-shadow"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#374151] mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="w-full px-3 py-3 rounded-lg border border-[#D1D5DB] text-sm text-[#0F172A] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-shadow"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-[#374151] mb-1.5">
                      Web actual (si tienes)
                    </label>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      value={form.website}
                      onChange={handleChange}
                      placeholder="https://tunegocio.com"
                      className="w-full px-3 py-3 rounded-lg border border-[#D1D5DB] text-sm text-[#0F172A] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-shadow"
                    />
                  </div>

                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-[#374151] mb-1.5">
                      Tipo de negocio <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      required
                      value={form.businessType}
                      onChange={handleChange}
                      className="w-full px-3 py-3 rounded-lg border border-[#D1D5DB] text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent bg-white transition-shadow"
                    >
                      <option value="">Selecciona tu sector</option>
                      <option>Clínica / Salud</option>
                      <option>Fisioterapia / Psicología</option>
                      <option>Abogados / Asesoría</option>
                      <option>Reformas / Construcción</option>
                      <option>Inmobiliaria</option>
                      <option>Academia / Formación</option>
                      <option>Consultoría</option>
                      <option>Otros servicios locales</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#374151] mb-1.5">
                      ¿Qué necesitas mejorar en tu web?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos brevemente qué está fallando o qué quieres conseguir..."
                      className="w-full px-3 py-3 rounded-lg border border-[#D1D5DB] text-sm text-[#0F172A] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent resize-none transition-shadow"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#1E3A8A] text-white font-semibold text-base hover:bg-[#1e40af] active:scale-[0.99] transition-all shadow-sm min-h-[52px]"
                  >
                    Pedir auditoría gratuita
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>

                  <p className="text-xs text-[#9CA3AF] text-center">
                    Te respondemos en menos de 48h.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
