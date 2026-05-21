const trustItems = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#22C55E] shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
      </svg>
    ),
    label: "Precio cerrado",
    detail: "Sin sorpresas al final",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#22C55E] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
      </svg>
    ),
    label: "Primera versión funcional en 7 días",
    detail: "Plazo garantizado",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#22C55E] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3" />
      </svg>
    ),
    label: "Diseño responsive",
    detail: "Móvil, tablet y escritorio",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#22C55E] shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0117.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    label: "Garantía de devolución",
    detail: "Si no cumplimos el plazo",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-[#E2E8F0] py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-start sm:items-center gap-3">
              <div className="shrink-0 w-9 h-9 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center">
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-[#0F172A] leading-snug">
                  {item.label}
                </p>
                <p className="text-xs text-[#64748B] leading-snug hidden sm:block">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
