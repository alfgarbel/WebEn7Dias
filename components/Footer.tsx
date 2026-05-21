const footerLinks = [
  { label: "Qué incluye", href: "#que-incluye" },
  { label: "Garantía", href: "#garantia" },
  { label: "Precio", href: "#precio" },
  { label: "Contacto", href: "#auditoria" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-2">
              <span className="text-xl font-bold text-white">WebEn</span>
              <span className="text-xl font-bold text-[#0EA5E9]">7Días</span>
            </div>
            <p className="text-sm text-[#94A3B8] max-w-xs">
              Webs profesionales en 7 días para negocios de servicios.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#94A3B8] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#475569]">
            © {new Date().getFullYear()} WebEn7Días. Todos los derechos reservados.
          </p>
          <p className="text-xs text-[#475569]">
            weben7dias.com
          </p>
        </div>
      </div>
    </footer>
  );
}
