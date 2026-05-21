"use client";

import { useState } from "react";

const navLinks = [
  { label: "Qué incluye", href: "#que-incluye" },
  { label: "Proceso", href: "#proceso" },
  { label: "Garantía", href: "#garantia" },
  { label: "Precio", href: "#precio" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1 shrink-0">
            <span className="text-xl font-bold tracking-tight text-[#1E3A8A]">
              WebEn
            </span>
            <span className="text-xl font-bold tracking-tight text-[#0EA5E9]">
              7Días
            </span>
          </a>

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
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-[#1E3A8A] text-white text-sm font-semibold hover:bg-[#1e40af] transition-colors"
            >
              Pedir auditoría gratuita
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-[#64748B] hover:text-[#1E3A8A]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
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
          <div className="md:hidden border-t border-[#E2E8F0] py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-2 text-sm font-medium text-[#64748B] hover:text-[#1E3A8A] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#auditoria"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 px-5 py-3 rounded-lg bg-[#1E3A8A] text-white text-sm font-semibold text-center hover:bg-[#1e40af] transition-colors"
            >
              Pedir auditoría gratuita
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
