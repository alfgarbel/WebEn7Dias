"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿La web estará terminada en 7 días?",
    answer:
      "En 7 días recibirás una primera versión funcional, completa y navegable. Después aplicamos una ronda de ajustes para dejarla lista para publicar.",
  },
  {
    question: "¿Qué pasa si no tengo dominio?",
    answer:
      "La compra del dominio no está incluida, pero podemos orientarte para elegirlo y configurarlo.",
  },
  {
    question: "¿El hosting está incluido?",
    answer:
      "No. El hosting lo asume el cliente. Podemos ayudarte a configurarlo sobre la opción más adecuada.",
  },
  {
    question: "¿Incluye correos corporativos?",
    answer:
      "No incluye la contratación ni el coste de cuentas de correo corporativo personalizadas, aunque podemos ayudarte a configurarlas si lo necesitas.",
  },
  {
    question: "¿Incluye los textos?",
    answer:
      "Incluye textos comerciales básicos a partir de la información que nos entregues. Redacción avanzada o muchas páginas adicionales se presupuestan aparte.",
  },
  {
    question: "¿Incluye SEO?",
    answer:
      "Incluye SEO básico inicial: estructura, títulos, metadescripción y configuración básica. No incluye SEO mensual ni creación continua de contenidos.",
  },
  {
    question: "¿Puedo pedir cambios después?",
    answer:
      "Sí. La oferta incluye una ronda de ajustes. Cambios adicionales fuera de esa ronda se valoran aparte.",
  },
  {
    question: "¿Qué pasa si necesito algo más avanzado?",
    answer:
      "Si necesitas una tienda online, área privada, funcionalidades a medida o cualquier cosa fuera del alcance de esta oferta, se puede valorar aparte según el proyecto.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#0EA5E9] uppercase tracking-widest mb-3">
            Preguntas frecuentes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#E2E8F0] rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#F8FAFC] transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-sm font-semibold text-[#0F172A]">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-[#64748B] shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-[#64748B] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
