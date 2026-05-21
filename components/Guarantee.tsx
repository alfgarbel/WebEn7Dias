export default function Guarantee() {
  return (
    <section id="garantia" className="bg-[#F0FDF4] py-24 px-4 sm:px-6 lg:px-8 border-y border-[#BBF7D0]">
      <div className="max-w-3xl mx-auto text-center">

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#22C55E] mb-6 mx-auto shadow-sm">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        </div>

        <p className="text-sm font-semibold text-[#15803D] uppercase tracking-widest mb-3">
          Garantía de entrega
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight mb-6">
          Lista en 7 días o te devolvemos el dinero
        </h2>

        <p className="text-lg text-[#374151] leading-relaxed mb-8">
          Si no recibes una primera versión funcional de tu web en un plazo de{" "}
          <strong>7 días desde que entregas todo el material necesario</strong>, te
          devolvemos el 100% del importe pagado.
        </p>

        <div className="inline-flex items-start gap-3 bg-white rounded-xl px-6 py-4 border border-[#BBF7D0] shadow-sm text-left max-w-xl mx-auto">
          <svg className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <p className="text-sm text-[#374151] leading-relaxed">
            La garantía aplica siempre que el cliente haya entregado a tiempo la
            información, materiales y accesos necesarios para comenzar: logo, datos
            del negocio, servicios, datos de contacto, imágenes si las tiene y accesos
            necesarios.
          </p>
        </div>
      </div>
    </section>
  );
}
