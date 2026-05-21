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
    <section id="precio" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
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

        {/* Pricing card */}
        <div className="max-w-xl mx-auto">
          <div className="rounded-2xl border-2 border-[#1E3A8A] bg-white shadow-lg overflow-hidden">

            {/* Card header */}
            <div className="bg-[#1E3A8A] px-8 py-8 text-white">
              <h3 className="text-xl font-bold mb-1">Web Profesional en 7 Días</h3>
              <p className="text-[#93C5FD] text-sm">
                Para negocios de servicios que necesitan transmitir confianza online.
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-bold">990€</span>
                <span className="text-[#93C5FD] text-sm">precio único</span>
              </div>

              <div className="mt-3 inline-flex items-center gap-1.5 bg-[#1e40af] rounded-full px-3 py-1.5 text-xs font-medium text-[#BFDBFE]">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                50% al comenzar · 50% antes de publicar
              </div>
            </div>

            {/* Card body */}
            <div className="px-8 py-8">
              <p className="text-xs font-semibold text-[#64748B] uppercase tracking-widest mb-5">
                Incluye
              </p>
              <ul className="space-y-3 mb-8">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-[#0F172A]">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#auditoria"
                className="block w-full text-center px-6 py-4 rounded-lg bg-[#1E3A8A] text-white font-semibold hover:bg-[#1e40af] transition-colors"
              >
                Pedir auditoría gratuita
              </a>

              {/* Guarantee reminder */}
              <div className="mt-5 flex items-center justify-center gap-1.5 text-sm text-[#15803D] font-medium">
                <svg className="w-4 h-4 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
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
