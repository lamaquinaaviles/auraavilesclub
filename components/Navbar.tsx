"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/eventos", label: "Eventos" },
  { href: "/galeria", label: "Galería" },
  { href: "/carta", label: "Carta" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 z-[9999] w-[94%] max-w-7xl -translate-x-1/2">
      <div
        className={`relative overflow-hidden border border-white/10 bg-black/95 backdrop-blur-2xl transition-all duration-500 ${
          isScrolled
            ? "rounded-[1.8rem] shadow-[0_18px_60px_rgba(0,0,0,0.5)]"
            : "rounded-[2.2rem] shadow-[0_24px_90px_rgba(0,0,0,0.55)]"
        }`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),transparent_28%,rgba(244,180,152,0.08),transparent_72%)]" />
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#f4b498]/60 to-transparent" />
        <div className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute left-8 top-3 h-2.5 w-2.5 rotate-45 border border-[#f4b498]/60" />
        <div className="absolute right-8 bottom-3 h-2.5 w-2.5 rotate-45 border border-[#f4b498]/45" />

        <div className="pointer-events-none absolute -top-10 left-20 h-24 w-24 rounded-full bg-[#f4b498]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 right-24 h-24 w-24 rounded-full bg-[#f4b498]/5 blur-3xl" />

        <div
          className={`relative flex items-center justify-between gap-3 transition-all duration-500 ${
            isScrolled ? "px-5 py-2.5 sm:px-6 lg:px-7" : "px-5 py-3 sm:px-6 lg:px-7"
          }`}
        >
          <Link href="/" className="flex shrink-0 items-center gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#f4b498]/35 bg-black/40 shadow-[0_0_18px_rgba(244,180,152,.15)]">
              <img
                src="/images/IMG_3498.PNG"
                alt="Aura Logo"
                className="h-14 w-14 scale-100 object-contain opacity-100"
              />
              <div className="absolute inset-0 rounded-full border border-white/10" />
            </div>

            <div className="leading-none">
              <p className="text-[9px] uppercase tracking-[0.42em] text-white/55">
                Aura Avilés
              </p>
              <h1
                className={`font-semibold uppercase text-white transition-all duration-500 ${
                  isScrolled
                    ? "text-[24px] tracking-[0.10em] md:text-[28px]"
                    : "text-[30px] tracking-[0.12em] md:text-[34px]"
                }`}
              >
                AURA AVILÉS CLUB
              </h1>
            </div>
          </Link>

          <nav className="hidden items-center gap-3 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative px-2 py-1 text-sm font-medium transition ${
                    active
                      ? "text-[#f4b498]"
                      : "text-white/85 hover:text-[#f4b498]"
                  }`}
                >
                  <span className="text-[10px] uppercase tracking-[0.06em]">
                    {link.label}
                  </span>

                  <span
                    className={`absolute -bottom-1 left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-transparent via-[#f4b498] to-transparent transition-all duration-300 ${
                      active
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />

                  <span
                    className={`pointer-events-none absolute inset-0 rounded-full blur-md transition duration-300 ${
                      active
                        ? "bg-[#f4b498]/10"
                        : "bg-transparent group-hover:bg-[#f4b498]/10"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <a
            href="https://wa.me/34645623512?text=Hola%2C%20quiero%20reservar%20en%20Aura%20Avil%C3%A9s%20Club"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-[#f4b498]/40 px-5 py-2 text-[10px] uppercase tracking-[0.22em] text-[#f4b498] transition hover:bg-[#f4b498] hover:text-black lg:flex"
          >
            Reservas
          </a>
        </div>
      </div>
    </header>
  );
}
