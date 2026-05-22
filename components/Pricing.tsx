const included = [
  "Web de una página con hasta 5 secciones",
  "Diseño responsive (móvil, tablet y ordenador)",
  "Textos comerciales básicos",
  "Formulario de contacto",
  "Botón de WhatsApp o llamada",
  "SEO básico inicial",
  "Configuración sobre dominio y hosting del cliente",
  "Integración básica de Analytics / Search Console",
  "Una ronda de ajustes",
  "Primera versión funcional en 7 días",
];

export default function Pricing() {
  return (
    <section id="precio" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-[#0EA5E9] uppercase tracking-widest mb-3">
            Precio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
            Un precio claro y cerrado
          </h2>
          <p className="mt-4 text-[#64748B] text-base">
            Sin sorpresas. Sin costes ocultos. Sin presupuestos que cambian.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="rounded-2xl border-2 border-[#1E3A8A] bg-white shadow-xl shadow-[#1E3A8A]/10 overflow-hidden">

            {/* Card header */}
            <div className="bg-[#1E3A8A] px-5 sm:px-8 py-7 sm:py-8 text-white">
              <div className="flex items-start justify-between gap-4 mb-1">
                <h3 className="text-xl font-bold leading-tight">
                  Web Profesional en 7 Días
                </h3>
                <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/30 text-[#86EFAC] text-xs font-semibold whitespace-nowrap">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Con garantía
                </span>
              </div>

              <p className="text-[#93C5FD] text-sm mb-6">
                Precio cerrado para una web profesional de una página.
              </p>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-extrabold">990€</span>
                <span className="text-[#93C5FD] text-sm">precio único, IVA incluido</span>
              </div>

              {/* Payment terms */}
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 border border-white/10">
                <svg className="w-4 h-4 text-[#93C5FD] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" />
                </svg>
                <p className="text-sm text-[#BFDBFE]">
                  Pago <strong className="text-white">50% al comenzar</strong> y{" "}
                  <strong className="text-white">50% antes de publicar</strong>
                </p>
              </div>
            </div>

            {/* Card body */}
            <div className="px-5 sm:px-8 py-7 sm:py-8">
              <p className="text-xs font-semibold text-[#64748B] uppercase tracking-widest mb-5">
                Todo incluido
              </p>
              <ul className="space-y-3 mb-8">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-[#0F172A] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#auditoria"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-lg bg-[#1E3A8A] text-white font-semibold hover:bg-[#1e40af] active:scale-[0.99] transition-all shadow-sm min-h-[52px]"
              >
                Pedir auditoría gratuita
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>

              {/* Guarantee reminder */}
              <div className="mt-5 flex items-center justify-center gap-1.5 text-sm text-[#15803D] font-medium">
                <svg className="w-4 h-4 text-[#22C55E] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Lista en 7 días o te devolvemos el dinero
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
