import Image from "next/image";

export default function Galeria() {
  const gallery = [
    "/images/AURA_-121 copia.jpg",
    "/images/DSC05222.JPG",
    "/images/DSC05372.JPG",
    "/images/DSC03110.JPG",
    "/images/DSC03760 copia.JPG",
    "/images/DSC03366.JPG",
    "/images/DSC04027 copia.JPG",
    "/images/DSC05853 copia.JPG",
    "/images/DSC03874 copia.JPG",
    "/images/DSC03808 copia.JPG",
    "/images/DSC05504 copia.JPG",
    "/images/DSC05257 copia.JPG",
    "/images/DSC05337 copia.JPG",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/fondogaleria.jpg"
          alt="Fondo galería"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#f4b498]">
            Galería
          </p>

          <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
            La esencia visual de Aura
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Una selección de imágenes que reflejan la atmósfera,
            la energía y la identidad visual del club.
          </p>

          <div className="mt-14 grid auto-rows-[260px] gap-5 md:grid-cols-3">
            {gallery.map((src, index) => (
              <div
                key={src}
                className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40 backdrop-blur ${
                  index === 0 || index === 3
                    ? "md:col-span-2 md:row-span-2"
                    : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`Galería Aura ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  quality={75}
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          <a
            href="/"
            className="fixed top-28 left-8 z-50 rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-6 py-3 text-sm uppercase tracking-[0.18em] hover:border-[#f4b498] hover:text-[#f4b498] transition"
          >
            ← Inicio
          </a>
        </div>
      </div>
    </div>
  );
}