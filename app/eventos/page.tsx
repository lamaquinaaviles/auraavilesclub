export default function Eventos() {
  const events = [
    {
      title: "Sesiones en directo",
      text: "Noches con música en directo, performances y una puesta en escena elegante.",
      image: "/images/DSC05372.JPG",
    },
    {
      title: "Dj's invitados",
      text: "Sesiones especiales con invitados y ambiente exclusivo para una noche diferente.",
      image: "/images/DSC03151.JPG",
    },
    {
      title: "Celebraciones privadas",
      text: "Reservas para cumpleaños, eventos privados y experiencias premium personalizadas.",
      image: "/images/DSC03176.JPG",
    },
  ];

  return (
    <div className="min-h-screen relative text-white">
        <div className="absolute inset-0 -z-10">
  <img
    src="/images/DSC03156.jpg"
    alt="Fondo eventos"
    className="h-full w-full object-cover opacity-30"
  />
  <div className="absolute inset-0 bg-black/40"></div>
</div>

<div className="relative z-10 px-6 py-20 md:px-10">

</div>
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#f4b498]">
          Eventos
        </p>

        <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
          Noches que convierten Aura en destino
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Sesiones especiales, música en directo, invitados y experiencias pensadas para una noche exclusiva.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#f4b498] backdrop-blur">
                  Aura Event
                </div>
              </div>

              <div className="p-7">
                <h2 className="text-2xl font-medium text-white">
                  {event.title}
                </h2>
                <p className="mt-4 text-white/70">
                  {event.text}
                </p>
              </div>
            </div>
          ))}
        </div>

   <div className="mt-8">
  <a
    href="https://instagram.com/auraavilesclub"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative inline-flex items-center overflow-hidden rounded-full border border-[#f4b498]/70 bg-[#f4b498]/95 px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-black shadow-[0_12px_40px_rgba(244,180,152,0.22)] transition-all duration-300 hover:scale-[1.02]"
  >
    <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.35),transparent_30%,rgba(255,255,255,0.08),transparent_75%)]" />
    <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
    <span className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />
    <span className="relative z-10">Consultar eventos</span>
  </a>
</div>

        <a
  href="/"
  className="fixed top-28 left-8 z-50 rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-6 py-3 text-sm uppercase tracking-[0.18em] hover:border-[#f4b498] hover:text-[#f4b498] transition"
>
  ← Inicio
</a>
      </div>
    </div>
  );
}