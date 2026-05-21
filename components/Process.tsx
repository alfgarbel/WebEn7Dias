const steps = [
  {
    number: "01",
    title: "Revisamos tu negocio y tu material",
    description:
      "Nos envías la información básica: servicios, datos de contacto, logo, imágenes si las tienes y referencias. A partir de ahí, arrancamos.",
    icon: (
      <svg className="w-6 h-6 text-[#1E3A8A]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Creamos la primera versión funcional",
    description:
      "Diseñamos y construimos una web completa, navegable y preparada para revisar. La tendrás lista en 7 días desde que nos entregas el material.",
    icon: (
      <svg className="w-6 h-6 text-[#1E3A8A]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Ajustamos y publicamos",
    description:
      "Aplicamos una ronda de ajustes con tus comentarios y dejamos la web lista para publicar sobre tu dominio y hosting.",
    icon: (
      <svg className="w-6 h-6 text-[#1E3A8A]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="proceso" className="bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-[#0EA5E9] uppercase tracking-widest mb-3">
            Proceso
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
            Tres pasos para tener tu web lista
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-[#E2E8F0] z-0" />

          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Number badge */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-[#1E3A8A] shadow-sm mb-6">
                <span className="text-[#1E3A8A] font-bold text-lg">{step.number}</span>
              </div>

              <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center mb-4">
                {step.icon}
              </div>

              <h3 className="text-lg font-bold text-[#0F172A] mb-3">{step.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
