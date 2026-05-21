export default function FinalCTA() {
  return (
    <section className="bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#E2E8F0]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight mb-5">
          Mejora la imagen de tu negocio en{" "}
          <span className="text-[#0EA5E9]">7 días</span>
        </h2>
        <p className="text-lg text-[#64748B] leading-relaxed mb-10 max-w-xl mx-auto">
          Pide una auditoría gratuita y descubre qué cambiaríamos en tu web para
          que transmita más confianza y convierta mejor.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#auditoria"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#1E3A8A] text-white font-semibold hover:bg-[#1e40af] transition-colors shadow-sm w-full sm:w-auto"
          >
            Pedir auditoría gratuita
          </a>
          <a
            href="#precio"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-[#CBD5E1] text-[#1E3A8A] font-semibold hover:border-[#1E3A8A] hover:bg-white transition-colors w-full sm:w-auto"
          >
            Ver el precio
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-[#64748B]">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Proceso claro
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Precio cerrado
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Garantía de entrega
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Diseño responsive
          </span>
        </div>
      </div>
    </section>
  );
}
