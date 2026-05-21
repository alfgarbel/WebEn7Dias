export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 px-4 sm:px-6 lg:px-8">

      {/* Subtle background grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #E2E8F0 1px, transparent 0)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-[#F8FAFC] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 rounded-full bg-[#EFF6FF] text-[#1E3A8A] text-xs font-semibold border border-[#BFDBFE]">
            <svg className="w-3.5 h-3.5 text-[#22C55E] shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Primera versión funcional en 7 días
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 rounded-full bg-[#F0FDF4] text-[#15803D] text-xs font-semibold border border-[#BBF7D0]">
            <svg className="w-3.5 h-3.5 text-[#22C55E] shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Garantía de devolución si no cumplimos el plazo
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[2.4rem] sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-extrabold text-[#0F172A] leading-[1.1] tracking-tight mb-5 sm:mb-6">
          Tu web profesional lista en{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#0EA5E9]">7 días</span>
            <span
              className="absolute -bottom-1 left-0 right-0 h-[4px] rounded-full bg-[#0EA5E9] opacity-30"
              aria-hidden="true"
            />
          </span>
          <br />
          <span className="text-[#0F172A]">o te devolvemos el dinero</span>
        </h1>

        {/* Subheadline — simplified */}
        <p className="text-base sm:text-xl text-[#64748B] leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
          Creamos webs modernas, claras y preparadas para convertir visitas en
          contactos para negocios de servicios.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#auditoria"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 rounded-lg bg-[#1E3A8A] text-white text-base font-semibold hover:bg-[#1e40af] active:scale-95 transition-all shadow-md shadow-[#1E3A8A]/20 min-h-[52px]"
          >
            Pedir auditoría gratuita
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#que-incluye"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 rounded-lg border border-[#CBD5E1] bg-white text-[#1E3A8A] text-base font-semibold hover:border-[#1E3A8A] hover:shadow-sm transition-all min-h-[52px]"
          >
            Ver qué incluye
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
