"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  website: string;
  businessType: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  website: "",
  businessType: "",
  message: "",
};

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
    <section id="auditoria" className="bg-[#1E3A8A] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: copy */}
          <div className="text-white">
            <p className="text-sm font-semibold text-[#93C5FD] uppercase tracking-widest mb-3">
              Auditoría gratuita
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-5">
              ¿No sabes si tu web está perdiendo oportunidades?
            </h2>
            <p className="text-[#BFDBFE] leading-relaxed mb-8">
              Pide una auditoría gratuita y te enviaremos{" "}
              <strong className="text-white">3 mejoras concretas</strong> para que tu web
              transmita más confianza y convierta mejor. Sin compromiso.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Revisión real, no un formulario genérico",
                  text: "Analizamos tu web actual (si tienes) y tu sector antes de responderte.",
                },
                {
                  title: "3 mejoras concretas",
                  text: "No teoría. Te decimos exactamente qué cambiaríamos y por qué.",
                },
                {
                  title: "Sin compromiso",
                  text: "La auditoría es gratuita y no te obliga a nada.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <svg className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-white text-sm">{item.title}</p>
                    <p className="text-[#BFDBFE] text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#F0FDF4] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#22C55E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">¡Recibido!</h3>
                <p className="text-[#64748B] text-sm">
                  Revisaremos tu caso y te enviaremos las 3 mejoras concretas en breve.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-[#0F172A] mb-6">
                  Pide tu auditoría gratuita
                </h3>
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
                        className="w-full px-3 py-2.5 rounded-lg border border-[#D1D5DB] text-sm text-[#0F172A] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
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
                        className="w-full px-3 py-2.5 rounded-lg border border-[#D1D5DB] text-sm text-[#0F172A] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#374151] mb-1.5">
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                      className="w-full px-3 py-2.5 rounded-lg border border-[#D1D5DB] text-sm text-[#0F172A] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                    />
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
                      className="w-full px-3 py-2.5 rounded-lg border border-[#D1D5DB] text-sm text-[#0F172A] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
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
                      className="w-full px-3 py-2.5 rounded-lg border border-[#D1D5DB] text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent bg-white"
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
                      className="w-full px-3 py-2.5 rounded-lg border border-[#D1D5DB] text-sm text-[#0F172A] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 rounded-lg bg-[#1E3A8A] text-white font-semibold text-sm hover:bg-[#1e40af] transition-colors"
                  >
                    Quiero mi auditoría gratuita
                  </button>

                  <p className="text-xs text-[#9CA3AF] text-center">
                    Sin compromiso. Te respondemos en menos de 48h.
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
