export default function MobileCtaBanner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden px-4 pb-4 pt-2 bg-white/95 backdrop-blur-sm border-t border-[#E2E8F0] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <a
        href="#auditoria"
        className="flex items-center justify-center gap-2 w-full px-5 py-4 rounded-xl bg-[#1E3A8A] text-white font-semibold text-base hover:bg-[#1e40af] active:scale-[0.98] transition-all min-h-[52px] shadow-sm"
      >
        Pedir auditoría gratuita
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </div>
  );
}
