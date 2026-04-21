// @ts-nocheck
"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const assets = {
  "IMG_3498.PNG": "/images/IMG_3498.PNG",
  "DSC05222.JPG": "/images/DSC05222.JPG",
  "DSC05479.JPG": "/images/DSC05479.JPG",
  "DSC05485.JPG": "/images/DSC05485.JPG",
  "DSC05372.JPG": "/images/DSC05372.JPG",
  "DSC03110.JPG": "/images/DSC03110.JPG",
  "DSC03366.JPG": "/images/DSC03366.JPG",};

const WHATSAPP_BASE = "https://wa.me/34645623512";
const INSTAGRAM_URL = "https://instagram.com/auraavilesclub";
const TIKTOK_URL = "https://tiktok.com/@auraclubaviles";

const gallery = [
  { src: assets["DSC05222.JPG"], title: "Coctelería & servicio" },
  { src: assets["DSC05479.JPG"], title: "Ambiente social" },
  { src: assets["DSC05485.JPG"], title: "Noches con estilo" },
  { src: assets["DSC05372.JPG"], title: "Live performance" },
  { src: assets["DSC03110.JPG"], title: "Bar premium" },
  { src: assets["DSC03366.JPG"], title: "Experiencias únicas" },
];

const events = [
  {
    title: "Live Sessions",
    text: "Noches con música en directo, performances y una puesta en escena elegante.",
  },
  {
    title: "Guest DJs",
    text: "Sesiones especiales con invitados y ambiente exclusivo para una noche diferente.",
  },
  {
    title: "Private Celebrations",
    text: "Reservas para cumpleaños, eventos privados y experiencias premium personalizadas.",
  },
];

const wines = [
  "Vinos seleccionados",
  "Espumosos premium",
  "Rosados y blancos",
  "Referencias exclusivas",
];

const cocktails = [
  "Cócteles clásicos",
  "Cócteles de autor",
  "Combinados premium",
  "Servicio personalizado",
];

const bottles = [
  "Whisky",
  "Ron",
  "Ginebra",
  "Champagne y botellas VIP",
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const fadeSlow = {
  initial: { opacity: 0, scale: 0.96 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
};

function runSanityChecks() {
  console.assert(typeof WHATSAPP_BASE === "string" && WHATSAPP_BASE.includes("wa.me"), "WhatsApp link must be valid");
  console.assert(Array.isArray(gallery) && gallery.length >= 6, "Gallery should contain at least 6 images");
  console.assert(Array.isArray(events) && events.length >= 3, "Events should contain at least 3 cards");
  console.assert(Boolean(assets["IMG_3498.PNG"]), "Logo asset should exist");
  console.assert(typeof fadeUp === "object" && typeof fadeSlow === "object", "Animation presets should exist");
  console.assert(typeof gallery[0]?.src === "string", "Gallery images should have valid src values");
  console.assert(Array.isArray(wines) && Array.isArray(cocktails) && Array.isArray(bottles), "Menu arrays must exist");
}

runSanityChecks();

function ButtonOrnament({
  href,
  children,
  primary = false,
  fixed = false
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  fixed?: boolean;
}) {
  const base = primary
    ? "bg-[#f4b498] text-black border-[#f4b498]"
    : "bg-black/30 text-white border-white/20 backdrop-blur";

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={`${fixed ? "fixed bottom-6 right-6 z-50" : "relative inline-flex"} group items-center justify-center`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      <span
        className={`relative overflow-hidden rounded-full border px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] transition duration-300 ${base} ${
          primary ? "hover:scale-[1.03]" : "hover:border-[#f4b498] hover:text-[#f4b498]"
        }`}
      >
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_45%)] opacity-60" />
        <span className="absolute left-3 top-1/2 h-px w-6 -translate-y-1/2 bg-current opacity-40" />
        <span className="absolute right-3 top-1/2 h-px w-6 -translate-y-1/2 bg-current opacity-40" />
        <span className="absolute left-6 top-2 h-1.5 w-1.5 rotate-45 border border-current opacity-50" />
        <span className="absolute right-6 bottom-2 h-1.5 w-1.5 rotate-45 border border-current opacity-50" />
        <span className="relative z-10">{children}</span>
      </span>
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  action
}: {
  eyebrow: string;
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-[#f4b498]">{eyebrow}</p>
        <h3 className="mt-4 text-4xl font-semibold md:text-5xl">{title}</h3>
      </div>
      {action}
    </div>
  );
}

function EventCard({
  event,
  image
}: {
  event: { title: string; text: string };
  image: { src: string; title: string };
}) {
  return (
    <div className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 backdrop-blur">
      <div className="relative h-72 overflow-hidden">
        <img src={image.src} alt={event.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#f4b498] backdrop-blur">
          Aura Event
        </div>
      </div>
      <div className="p-7">
        <h4 className="text-2xl font-medium text-white">{event.title}</h4>
        <p className="mt-4 text-white/70">{event.text}</p>
      </div>
    </div>
  );
}

export default function AuraAvilesClub() {
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 700], [0, 120]);
  const heroGlowY = useTransform(scrollY, [0, 700], [0, 80]);
  const heroContentY = useTransform(scrollY, [0, 700], [0, -40]);
  const galleryParallaxFast = useTransform(scrollY, [0, 2200], [0, -90]);
  const galleryParallaxSlow = useTransform(scrollY, [0, 2200], [0, -45]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute left-[-10%] top-0 h-[30rem] w-[30rem] rounded-full bg-[#f4b498]/12 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-[10%] left-[20%] h-[24rem] w-[24rem] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
      </div>

      <ButtonOrnament href={WHATSAPP_BASE} primary fixed>
        WhatsApp
      </ButtonOrnament>

      <section id="inicio" className="relative isolate overflow-hidden border-b border-white/10">
        <motion.img
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ y: heroImageY }}
          src={gallery[0].src}
          alt="Aura Avilés Club"
          className="absolute inset-0 h-[115%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,180,152,0.22),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_30%,rgba(255,255,255,0.02),transparent_70%)]" />
        <motion.div
          style={{ y: heroGlowY }}
          className="absolute left-1/2 top-24 h-56 w-px -translate-x-1/2 bg-gradient-to-b from-[#f4b498]/0 via-[#f4b498]/60 to-transparent"
        />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div className="flex items-center gap-4">
            <img src={assets["IMG_3498.PNG"]} alt="Logo Aura" className="h-14 w-14 object-contain" />
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#f4b498]/80">A U R A · Aviles</p>
              <h1 className="mt-1 text-2xl font-semibold tracking-[0.18em] text-white md:text-3xl">AURA AVILÉS CLUB</h1>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#inicio" className="transition hover:text-[#f4b498]">Inicio</a>
            <a href="#sobre" className="transition hover:text-[#f4b498]">Sobre nosotros</a>
            <a href="#carta" className="transition hover:text-[#f4b498]">Carta</a>
            <a href="#eventos" className="transition hover:text-[#f4b498]">Eventos</a>
            <a href="#reservas" className="transition hover:text-[#f4b498]">Reservas</a>
            <a href="#galeria" className="transition hover:text-[#f4b498]">Galería</a>
            <a href="#contacto" className="transition hover:text-[#f4b498]">Contacto</a>
          </nav>
        </header>

        <motion.div
          style={{ y: heroContentY }}
          className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <p className="mb-5 text-sm uppercase tracking-[0.42em] text-[#f4b498]">Premiun nightlife experience</p>
            <div className="max-w-4xl">
              <p className="mb-4 text-white/55 md:text-lg">Calle Galiana nº60 · Avilés</p>
              <h2 className="text-5xl font-semibold leading-[0.98] md:text-7xl xl:text-[6.2rem]">
                La noche tiene
                <span className="mt-2 block bg-gradient-to-r from-white via-[#f7d0bf] to-[#d9907d] bg-clip-text text-transparent">
                  una nueva firma.
                </span>
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
                Un club donde el diseño, la música, las visuales y el ambiente convierten cada noche en una experiencia exclusiva.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonOrnament href={WHATSAPP_BASE} primary>
                Reservar por WhatsApp
              </ButtonOrnament>
              <ButtonOrnament href="#eventos">Descubrir Aura</ButtonOrnament>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 text-sm text-white/70 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur">
                <p className="text-[#f4b498]">Club premium</p>
                <p className="mt-2">Diseño, atmósfera y exclusividad</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur">
                <p className="text-[#f4b498]">Eventos</p>
                <p className="mt-2">Live sessions y noches especiales</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur">
                <p className="text-[#f4b498]">Reservas</p>
                <p className="mt-2">WhatsApp directo y atención rápida</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2.4rem] bg-[#f4b498]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
              <img src={gallery[3].src} alt="Evento en Aura" className="h-[620px] w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.18),rgba(0,0,0,0.88))]" />
              <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#f4b498] backdrop-blur">
                Signature Nights
              </div>
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <img src={assets["IMG_3498.PNG"]} alt="Aura" className="mb-5 h-16 w-16 object-contain" />
                <p className="max-w-md text-3xl font-medium leading-tight text-white md:text-4xl">
                  Elegancia visual, energía real y noches que se recuerdan.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <motion.section {...fadeUp} id="sobre" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#f4b498]">Sobre nosotros</p>
            <h3 className="mt-4 text-4xl font-semibold md:text-5xl">Aura no es solo un local. Es una atmósfera.</h3>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Hemos creado un espacio donde el diseño, la música, la iluminación y el ambiente social se combinan para ofrecer una experiencia distinguida, vibrante y visualmente inolvidable.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
              Cada detalle de Aura Avilés Club está pensado para transmitir exclusividad, cercanía y personalidad.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Ambiente premium", "Una imagen cuidada, íntima y con carácter sofisticado."],
              ["Visuales inmersivos", "Fondos, luces y estética nocturna con identidad propia."],
              ["Experiencias en vivo", "Live music, invitados, performances y noches especiales."],
              ["Reservas directas", "Atención ágil por teléfono, WhatsApp e Instagram."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h4 className="text-lg font-medium text-[#f4b498]">{title}</h4>
                <p className="mt-3 text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeSlow} id="carta" className="relative border-y border-white/10 bg-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(244,180,152,0.08),transparent_25%),radial-gradient(circle_at_right,rgba(217,144,125,0.08),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <SectionHeading eyebrow="Carta" title="Selección premium para una noche superior" />
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              ["Vinos", wines],
              ["Cócteles", cocktails],
              ["Botellas", bottles],
            ].map(([title, items]) => (
              <div key={title} className="rounded-[1.75rem] border border-white/10 bg-black/40 p-8 backdrop-blur">
                <h4 className="text-2xl font-medium text-[#f4b498]">{title}</h4>
                <ul className="mt-6 space-y-4 text-white/80">
                  {items.map((item) => (
                    <li key={item} className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span>{item}</span>
                      <span className="text-[#f4b498]">Aura</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="eventos" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SectionHeading
          eyebrow="Eventos"
          title="Noches que convierten Aura en destino"
          action={
            <ButtonOrnament href={`${WHATSAPP_BASE}?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20eventos%20en%20Aura%20Avil%C3%A9s%20Club`}>
              Consultar eventos
            </ButtonOrnament>
          }
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {events.map((event, index) => (
            <EventCard key={event.title} event={event} image={gallery[index + 1]} />
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="reservas" className="relative border-y border-white/10 bg-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(244,180,152,0.08),transparent_30%,rgba(217,144,125,0.08),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-black/35 p-8 backdrop-blur lg:grid-cols-[1fr_0.95fr] lg:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#f4b498]">Reservas</p>
              <h3 className="mt-4 text-4xl font-semibold md:text-5xl">Reserva tu experiencia Aura</h3>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                Acceso rápido para mesas, celebraciones, eventos privados y consultas. La forma más directa es por WhatsApp.
              </p>
              <div className="mt-8 space-y-4 text-lg text-white/80">
                <p><span className="text-[#f4b498]">WhatsApp:</span> +34 645 623 512</p>
                <p><span className="text-[#f4b498]">Instagram:</span> @auraavilesclub</p>
                <p><span className="text-[#f4b498]">TikTok:</span> Auraclubaviles</p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
              <div className="grid gap-4">
                <ButtonOrnament href={`${WHATSAPP_BASE}?text=Hola%2C%20quiero%20reservar%20en%20Aura%20Avil%C3%A9s%20Club`} primary>
                  WhatsApp reservas
                </ButtonOrnament>
                <ButtonOrnament href="tel:+34645623512">Llamar ahora</ButtonOrnament>
                <ButtonOrnament href={INSTAGRAM_URL}>Instagram</ButtonOrnament>
                <ButtonOrnament href={TIKTOK_URL}>TikTok</ButtonOrnament>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeSlow} id="galeria" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SectionHeading eyebrow="Galería" title="La esencia visual de Aura" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.div
              key={item.title}
              style={{ y: index % 2 === 0 ? galleryParallaxFast : galleryParallaxSlow }}
              className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40 backdrop-blur"
            >
              <div className="relative h-[440px] overflow-hidden">
                <img src={item.src} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#f4b498]">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="contacto" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-8 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.35em] text-[#f4b498]">Contacto</p>
            <h3 className="mt-4 text-4xl font-semibold md:text-5xl">Estamos en el centro de Avilés</h3>
            <div className="mt-8 space-y-4 text-lg text-white/75">
              <p><span className="text-[#f4b498]">Dirección:</span> Calle Galiana nº60</p>
              <p><span className="text-[#f4b498]">Teléfono:</span> +34 645 623 512</p>
              <p><span className="text-[#f4b498]">Instagram:</span> @auraavilesclub</p>
              <p><span className="text-[#f4b498]">TikTok:</span> Auraclubaviles</p>
            </div>
            <div className="mt-8">
              <ButtonOrnament href={`${WHATSAPP_BASE}?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Aura%20Avil%C3%A9s%20Club`} primary>
                Contactar por WhatsApp
              </ButtonOrnament>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40">
            <iframe
              title="Mapa Aura Avilés Club"
              src="https://www.google.com/maps?q=Calle%20Galiana%2060%2C%20Avil%C3%A9s&output=embed"
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </motion.section>

      <motion.footer {...fadeUp} className="border-t border-white/10 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <img src={assets["IMG_3498.PNG"]} alt="Aura logo" className="h-10 w-10 object-contain" />
            <p className="text-sm text-white/55">© 2026 Aura Avilés Club · Exclusividad, música y experiencia.</p>
          </div>
          <div className="text-sm text-white/45">Calle Galiana nº60 · Avilés</div>
        </div>
      </motion.footer>
    </div>
  );
}
