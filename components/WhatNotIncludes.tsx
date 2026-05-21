const items = [
  "Compra de dominio",
  "Hosting",
  "Cuentas de correo corporativo personalizadas",
  "Licencias o herramientas de pago de terceros",
  "Branding o diseño de logo",
  "Sesión de fotos",
  "Tienda online",
  "Área privada de usuarios",
  "Funcionalidades avanzadas a medida",
  "SEO mensual",
  "Publicidad",
  "Mantenimiento mensual",
  "Cambios adicionales fuera de la ronda incluida",
];

export default function WhatNotIncludes() {
  return (
    <section className="bg-[#F8FAFC] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-sm font-semibold text-[#0EA5E9] uppercase tracking-widest mb-3">
            Sin sorpresas
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
            Qué abarca el precio base
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Context — positive framing */}
          <div className="flex gap-4 bg-white rounded-xl border border-[#E2E8F0] px-5 sm:px-6 py-5 mb-8">
            <div className="shrink-0 w-9 h-9 rounded-lg bg-[#EFF6FF] flex items-center justify-center mt-0.5">
              <svg className="w-5 h-5 text-[#0EA5E9]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <p className="text-sm text-[#374151] leading-relaxed">
              Para mantener el precio cerrado y el plazo de 7 días, el servicio
              se centra en lo esencial para que tu web esté lista y funcione.{" "}
              <span className="font-medium text-[#0F172A]">
                Todo lo que queda fuera se puede valorar aparte, sin compromiso.
              </span>
            </p>
          </div>

          {/* List — neutral, muted presentation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-[#E2E8F0]"
              >
                <span className="w-5 h-5 rounded-full border border-[#CBD5E1] flex items-center justify-center shrink-0" aria-hidden="true">
                  <svg className="w-2.5 h-2.5 text-[#94A3B8]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                  </svg>
                </span>
                <span className="text-sm text-[#64748B]">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-[#64748B]">
              ¿Necesitas algo de esta lista?{" "}
              <a
                href="#auditoria"
                className="text-[#1E3A8A] font-semibold hover:underline underline-offset-2"
              >
                Cuéntanos y lo valoramos.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
