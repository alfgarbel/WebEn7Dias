export default function Hero() {
  return (
    <section className="bg-[#F8FAFC] pt-20 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EFF6FF] text-[#1E3A8A] text-xs font-semibold border border-[#BFDBFE]">
            <svg className="w-3.5 h-3.5 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Primera versión funcional en 7 días
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F0FDF4] text-[#15803D] text-xs font-semibold border border-[#BBF7D0]">
            <svg className="w-3.5 h-3.5 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Garantía de devolución si no cumplimos el plazo
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight tracking-tight mb-6">
          Tu web profesional lista en{" "}
          <span className="text-[#0EA5E9]">7 días</span>{" "}
          <br className="hidden sm:block" />
          o te devolvemos el dinero
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed max-w-2xl mx-auto mb-10">
          Creamos webs modernas, claras y preparadas para convertir visitas en
          contactos para negocios de servicios que necesitan transmitir más
          confianza online.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#auditoria"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#1E3A8A] text-white text-base font-semibold hover:bg-[#1e40af] transition-colors shadow-sm w-full sm:w-auto"
          >
            Pedir auditoría gratuita
          </a>
          <a
            href="#que-incluye"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-[#CBD5E1] text-[#1E3A8A] text-base font-semibold hover:border-[#1E3A8A] hover:bg-white transition-colors w-full sm:w-auto"
          >
            Ver qué incluye
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-14 pt-10 border-t border-[#E2E8F0] grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { label: "Proceso claro" },
            { label: "Precio cerrado" },
            { label: "Garantía de entrega" },
            { label: "Diseño responsive" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-[#22C55E] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-[#64748B]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
