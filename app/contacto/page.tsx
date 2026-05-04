export default function Contacto() {
  return (
    <section
      className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-24 text-white"
      style={{
        backgroundImage: "url('/images/fondocontacto.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment:"fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/35" />

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,180,152,0.22),transparent_35%)]" />

<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(212,176,106,0.10),transparent_35%,rgba(244,180,152,0.08),transparent_70%)]" />
<div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-[#d4b06a]/10 blur-3xl" />

<div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-[#f4b498]/10 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#f4b498]">
            Contacto & Ubicacion
          </p>
          <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
            Reserva tu experiencia
          </h1>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-white/70">
            Contacta con Aura Avilés Club para reservas, eventos privados y
            atención VIP.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40 p-10 shadow-2xl backdrop-blur-xl">
            <h2 className="mb-8 text-2xl font-semibold">
              Información de contacto
            </h2>

            <div className="space-y-6 text-lg text-white/80">
              <p>📍 Calle Galiana nº60, Avilés</p>
              <p>📞 +34 645 623 512</p>
              
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/34645623512"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-[#f4b498]/40 bg-gradient-to-r from-[#c9a96a]/20 to-white/5 px-6 py-3 backdrop-blur-xl transition-all duration-300 hover:scale-105"
              >
                Reservar por WhatsApp
              </a>

              <a
                href="tel:+34645623512"
                className="inline-flex rounded-full border border-[#f4b498]/40 bg-gradient-to-r from-[#c9a96a]/20 to-white/5 px-6 py-3 backdrop-blur-xl transition-all duration-300 hover:scale-105"
              >
                Llamar ahora
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://instagram.com/auraavilesclub"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center overflow-hidden rounded-full border border-[#f4b498]/60 bg-gradient-to-r from-[#f4b498]/18 to-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#f4b498] shadow-[0_10px_35px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.03]"
              >
                <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22),transparent_28%,rgba(255,255,255,0.06),transparent_72%)]" />
                <span className="relative z-10">Instagram</span>
              </a>

              <a
                href="https://tiktok.com/@auraavilesclub"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center overflow-hidden rounded-full border border-[#f4b498]/60 bg-gradient-to-r from-[#f4b498]/18 to-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#f4b498] shadow-[0_10px_35px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.03]"
              >
                <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22),transparent_28%,rgba(255,255,255,0.06),transparent_72%)]" />
                <span className="relative z-10">TikTok</span>
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40 p-10 shadow-2xl backdrop-blur-xl">
            <h2 className="mb-8 text-2xl font-semibold">Ubicación</h2>

            <div className="space-y-5 text-lg text-white/80">
              <p>Calle Galiana nº60</p>
              <p>Avilés, Asturias</p>
              
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-[#f4b498]/20 bg-white/5">
              <iframe
                title="Mapa Aura Avilés Club"
                src="https://www.google.com/maps?q=Calle%20Galiana%2060%20Avil%C3%A9s&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-8 rounded-3xl border border-[#f4b498]/20 bg-white/5 p-8 backdrop-blur-lg">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#f4b498]">
                Llegar a Aura
              </p>
              <p className="leading-relaxed text-white/75">
                Consulta la ubicación exacta en el mapa y reserva tu noche con
                antelación para asegurar disponibilidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}