import Image from "next/image";

export default function SobreNosotros() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black px-6 py-20 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#f4b498]">
          Sobre nosotros
        </p>

        <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
          Una atmósfera diseñada para sentirse
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-white/70">
          Aura es una atmósfera donde diseño, música y exclusividad se mezclan.
          Un espacio donde convergen ambiente, estética y emoción. Un concepto
          que une sofisticación contemporánea con una experiencia envolvente,
          pensado para un público que valora tanto el ambiente como lo que
          consume.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {["Envolvente", "Sofisticado", "Magnético"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#f4b498]/40 bg-[#f4b498]/10 px-5 py-3 text-sm uppercase tracking-[0.22em] text-[#f4b498]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="relative h-[460px] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <Image
              src="/images/DSC05222.JPG"
              alt="Interior de Aura Avilés Club"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="relative h-[460px] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <Image
              src="/images/DSC05372.JPG"
              alt="Ambiente de Aura Avilés Club"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <a
          href="/"
          className="fixed top-28 left-8 z-50 rounded-full border border-white/20 bg-black/50 px-6 py-3 text-sm uppercase tracking-[0.18em] backdrop-blur-md transition hover:border-[#f4b498] hover:text-[#f4b498]"
        >
          ← Inicio
        </a>
      </div>
    </div>
  );
}