export default function FinalCTA() {
  return (
    <section className="bg-[#F8FAFC] py-24 px-4 sm:px-6 lg:px-8 border-t border-[#E2E8F0]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight mb-5">
          Mejora la imagen de tu negocio en{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#0EA5E9]">7 días</span>
            <span
              className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-[#0EA5E9] opacity-30"
              aria-hidden="true"
            />
          </span>
        </h2>
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed mb-10 max-w-xl mx-auto">
          Pide una auditoría gratuita y descubre qué cambiaríamos en tu web para
          que transmita más confianza y convierta mejor.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#auditoria"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-lg bg-[#1E3A8A] text-white font-semibold hover:bg-[#1e40af] active:scale-95 transition-all shadow-sm min-h-[52px]"
          >
            Pedir auditoría gratuita
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#precio"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-lg border border-[#CBD5E1] text-[#1E3A8A] font-semibold hover:border-[#1E3A8A] hover:bg-white transition-all min-h-[52px]"
          >
            Ver el precio
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-[#64748B]">
          {[
            "Precio cerrado",
            "Primera versión en 7 días",
            "Sin permanencia",
            "Garantía de devolución",
          ].map((label) => (
            <span key={label} className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#22C55E] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
