"use client";

import { useState } from "react";

const navLinks = [
  { label: "Qué incluye", href: "#que-incluye" },
  { label: "Proceso", href: "#proceso" },
  { label: "Garantía", href: "#garantia" },
  { label: "Precio", href: "#precio" },
];

function Logo() {
  return (
    <a href="#" className="flex items-center shrink-0 group" aria-label="WebEn7Días">
      <span className="text-[1.35rem] font-extrabold tracking-tight leading-none text-[#1E3A8A]">
        WebEn
      </span>
      <span className="flex items-center ml-0.5">
        {/* Small clock icon */}
        <svg
          className="w-[14px] h-[14px] text-[#0EA5E9] mr-[2px] mb-[1px] shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
        </svg>
        <span className="text-[1.35rem] font-extrabold tracking-tight leading-none text-[#0EA5E9]">
          7Días
        </span>
      </span>
    </a>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E2E8F0] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#64748B] hover:text-[#1E3A8A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#auditoria"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-[#1E3A8A] text-white text-sm font-semibold hover:bg-[#1e40af] active:scale-95 transition-all"
            >
              Pedir auditoría gratuita
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-[#64748B] hover:text-[#1E3A8A] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#E2E8F0] py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-[#64748B] hover:text-[#1E3A8A] hover:bg-[#F8FAFC] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#auditoria"
                onClick={() => setMenuOpen(false)}
                className="block px-5 py-3.5 rounded-lg bg-[#1E3A8A] text-white text-sm font-semibold text-center hover:bg-[#1e40af] transition-colors"
              >
                Pedir auditoría gratuita
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
