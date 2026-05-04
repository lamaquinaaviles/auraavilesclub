import Image from "next/image";

export default function Carta() {
  const sections = [
    {
      title: "Vinos",
      image: "/images/vinos.jpg",
      items: [
        "Vinos seleccionados",
        "Espumosos premium",
        "Rosados y blancos",
        "Referencias exclusivas",
      ],
    },
    {
      title: "Combinados",
      image: "/images/copas.JPG",
      items: ["Combinados clásicos", "Combinados premium"],
    },
    {
      title: "Cócteles",
      image: "/images/mojito-ok.png",
      items: ["Cócteles clásicos", "Cócteles de autor"],
    },
    {
      title: "Botellas",
      image: "/images/botellas.jpg",
      items: ["Whisky", "Ron", "Ginebra", "Champagne y botellas VIP"],
    },
  ];

  return (
    <div className="relative min-h-screen text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/fondocarta.JPG"
          alt="Fondo carta"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#f4b498]">
            Carta
          </p>

          <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
            Selección premium para una noche superior
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Vinos, copas, cócteles y botellas para acompañar la experiencia
            Aura.
          </p>

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {sections.map((section) => (
              <div
                key={section.title}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40 backdrop-blur"
              >
                <div className="relative h-52 w-full">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <h2 className="text-2xl font-medium text-[#f4b498]">
                    {section.title}
                  </h2>

                  <ul className="mt-6 space-y-4 text-white/80">
                    {section.items.map((item) => (
                      <li key={item} className="border-b border-white/10 pb-3">
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/"
            className="fixed top-28 left-8 z-50 rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-6 py-3 text-sm uppercase tracking-[0.18em] transition hover:border-[#f4b498] hover:text-[#f4b498]"
          >
            ← Inicio
          </a>
        </div>
      </div>
    </div>
  );
}