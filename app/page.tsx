"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const WHATSAPP_BASE = "https://wa.me/34645623512";

export default function AuraAvilesClub() {
  const previewImages = [
    "/images/AURA_-121 copia.jpg",
    "/images/DSC05222.JPG",
    "/images/DSC03760 copia.JPG",
    "/images/DSC05372.JPG",
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Image
          src="/images/DSC05222.JPG"
          alt="Fondo Aura"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <a
        href={WHATSAPP_BASE}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[100] rounded-full border border-[#f4b498] bg-[#f4b498] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black shadow-[0_12px_40px_rgba(244,180,152,0.18)]"
      >
        WhatsApp
      </a>

      <section className="relative isolate flex min-h-screen items-center overflow-hidden border-b border-white/10">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/DSC05222.JPG"
            alt="Aura Avilés Club"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,180,152,0.18),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_30%,rgba(244,180,152,0.06),transparent_70%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <p className="mb-5 text-sm uppercase tracking-[0.42em] text-[#f4b498]">
              Afternoon drinks & nightlife experience
            </p>

            <p className="mb-4 text-white/55 md:text-lg">
              Calle Galiana nº60, frente al hórreo · Avilés
            </p>

            <h1 className="text-5xl font-semibold leading-[0.94] md:text-7xl xl:text-[6.8rem]">
              Las copas tienen
              <span className="mt-2 block bg-gradient-to-r from-white via-[#f7d0bf] to-[#d9907d] bg-clip-text text-transparent">
                un nuevo aura.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/74 md:text-xl">
              Un club donde el diseño, la música y el ambiente convierten cada
              día en una experiencia exclusiva.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`${WHATSAPP_BASE}?text=Hola%2C%20quiero%20reservar%20en%20Aura%20Avil%C3%A9s%20Club`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#f4b498] bg-[#f4b498] px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-black"
              >
                Reservar por WhatsApp
              </a>

              <a
                href="/sobre-nosotros"
                className="rounded-full border border-white/20 bg-black/30 px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white"
              >
                Descubrir Aura
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2.4rem] bg-[#f4b498]/8 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
              <div className="relative h-[620px] w-full">
                <Image
                  src="/images/DSC05372.JPG"
                  alt="Evento en Aura"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.03),rgba(0,0,0,0.16),rgba(0,0,0,0.88))]" />

              <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#f4b498] backdrop-blur">
                Noches con firma
              </div>

              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <Image
                  src="/images/fondocontacto.PNG"
                  alt="Aura"
                  width={64}
                  height={64}
                  className="mb-5 object-contain"
                />
                <p className="max-w-md text-3xl font-medium leading-tight text-white md:text-4xl">
                  Elegancia visual, energía real y noches que se recuerdan.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#f4b498]">
            Aura Experience
          </p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Explora Aura a través de cada espacio
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Descubre nuestra atmósfera, carta, eventos y galería en páginas
            diseñadas para una experiencia más limpia y exclusiva.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Sobre nosotros", "/sobre-nosotros"],
            ["Carta", "/carta"],
            ["Eventos", "/eventos"],
            ["Galería", "/galeria"],
          ].map(([title, href]) => (
            <a
              key={title}
              href={href}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-[#f4b498]/40 hover:bg-white/[0.07]"
            >
              <h3 className="text-2xl font-medium text-[#f4b498]">{title}</h3>
              <p className="mt-4 text-white/70">Entrar</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#f4b498]">
              Preview
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Un adelanto de Aura
            </h2>
          </div>

          <a
            href="/galeria"
            className="text-sm uppercase tracking-[0.24em] text-[#f4b498]"
          >
            Ver galería completa
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {previewImages.map((src) => (
            <div
              key={src}
              className="relative h-[320px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40"
            >
              <Image
                src={src}
                alt="Aura preview"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <Image
              src="/images/IMG_3498.PNG"
              alt="Aura logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <p className="text-sm text-white/55">
              © 2026 Aura Avilés Club · Exclusividad, música y experiencia.
            </p>
          </div>
          <div className="text-sm text-white/45">
            Calle Galiana nº60 · Avilés
          </div>
        </div>
      </footer>
    </div>
  );
}