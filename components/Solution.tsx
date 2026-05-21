const highlights = [
  "Rápida: primera versión en 7 días",
  "Clara: el visitante entiende qué ofreces de inmediato",
  "Profesional: diseño moderno adaptado a tu sector",
  "Preparada para convertir: con formulario y acceso directo",
  "Precio cerrado: sin sorpresas al final",
];

export default function Solution() {
  return (
    <section className="bg-[#F8FAFC] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            <p className="text-sm font-semibold text-[#0EA5E9] uppercase tracking-widest mb-3">
              La solución
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight mb-5">
              Una web clara, moderna y lista para captar contactos
            </h2>
            <p className="text-[#64748B] leading-relaxed mb-8">
              <strong className="text-[#0F172A]">Web Profesional en 7 Días</strong> es una
              oferta cerrada y directa: diseñamos y construimos la web de tu negocio en un
              plazo definido, con un precio fijo y sin procesos interminables. Nada de
              esperar meses ni de presupuestos que cambian cada semana.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[#0F172A] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="#auditoria"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#1E3A8A] text-white text-sm font-semibold hover:bg-[#1e40af] active:scale-95 transition-all min-h-[48px]"
              >
                Pedir auditoría gratuita
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Visual card */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-lg font-bold text-[#1E3A8A]">WebEn</span>
              <span className="text-lg font-bold text-[#0EA5E9]">7Días</span>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-2">
              Web Profesional en 7 Días
            </h3>
            <p className="text-[#64748B] text-sm mb-6">
              Para negocios de servicios que necesitan una web que transmita su nivel real.
            </p>

            <div className="space-y-2 mb-6">
              {[
                "Diseño moderno y responsive",
                "Textos comerciales básicos",
                "Formulario + botón WhatsApp",
                "SEO básico inicial",
                "Primera versión en 7 días",
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-2.5 text-sm text-[#0F172A]">
                  <svg className="w-4 h-4 text-[#22C55E] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feat}
                </div>
              ))}
            </div>

            <div className="border-t border-[#E2E8F0] pt-6">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#1E3A8A]">990€</span>
                <span className="text-sm text-[#64748B]">precio único</span>
              </div>
              <p className="text-xs text-[#64748B] mt-1">50% al comenzar · 50% antes de publicar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
