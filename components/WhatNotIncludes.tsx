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
    <section className="bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold text-[#0EA5E9] uppercase tracking-widest mb-3">
            Transparencia total
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
            Qué no está incluido en el precio base
          </h2>
          <p className="mt-4 text-[#64748B] text-base">
            Queremos que lo tengas claro antes de empezar. Sin sorpresas.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-[#E2E8F0]"
              >
                <svg className="w-4 h-4 text-[#CBD5E1] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-sm text-[#64748B]">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[#64748B] bg-white rounded-xl border border-[#E2E8F0] px-6 py-4">
            <svg className="w-4 h-4 text-[#0EA5E9] inline mr-1.5 -mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Si necesitas alguna de estas opciones, se puede valorar aparte.
          </p>
        </div>
      </div>
    </section>
  );
}
