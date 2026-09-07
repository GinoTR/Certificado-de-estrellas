"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg-primary/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <svg className="h-7 w-7 text-gold" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7L2 9.4h7.6z" />
          </svg>
          <span className="font-serif text-lg font-semibold tracking-wide text-text-primary">
            Star Certificate
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#como-funciona" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
            Cómo funciona
          </a>
          <a href="#catalogo" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
            Catálogo
          </a>
          <a href="#certificado" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
            Certificado
          </a>
          <a href="#faq" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
            FAQ
          </a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="px-4 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            Iniciar sesión
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Crear cuenta
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center text-text-secondary md:hidden"
          aria-label="Menú"
        >
          {mobileOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-bg-primary/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            <a href="#como-funciona" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-bg-card hover:text-text-primary">
              Cómo funciona
            </a>
            <a href="#catalogo" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-bg-card hover:text-text-primary">
              Catálogo
            </a>
            <a href="#certificado" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-bg-card hover:text-text-primary">
              Certificado
            </a>
            <a href="#faq" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-bg-card hover:text-text-primary">
              FAQ
            </a>
            <div className="my-2 border-t border-border" />
            <Link href="/login" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-bg-card hover:text-text-primary">
              Iniciar sesión
            </Link>
            <Link href="/register" onClick={() => setMobileOpen(false)} className="mt-1 rounded-full bg-accent px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-accent-hover">
              Crear cuenta
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
