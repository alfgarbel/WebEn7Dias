const problems = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#0EA5E9]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "Una web antigua reduce confianza",
    description:
      "La primera impresión importa. Si tu web parece desactualizada, el cliente potencial asume que tu negocio también lo está.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#0EA5E9]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Una web poco clara hace que el cliente dude",
    description:
      "Si en 5 segundos no se entiende qué haces y para quién lo haces, el visitante se va sin contactar.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#0EA5E9]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: "Sin llamada a la acción clara, se pierden contactos",
    description:
      "Una web sin botones visibles, formulario accesible o número de teléfono claro no convierte visitas en clientes.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#0EA5E9]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "La competencia puede quedarse con la oportunidad",
    description:
      "Si tu competidor parece más profesional online, el cliente potencial elige al que le da más confianza, aunque tu servicio sea mejor.",
  },
];

export default function Problem() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-[#0EA5E9] uppercase tracking-widest mb-3">
            El problema real
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
            Tu negocio puede ser bueno, pero tu web puede estar diciendo lo contrario
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#CBD5E1] transition-colors"
            >
              <div className="shrink-0 w-11 h-11 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#0F172A] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
