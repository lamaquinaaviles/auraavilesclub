export default function SobreNosotros() {
return (
<div className="min-h-screen bg-black text-white p-20">

<h1 className="text-6xl mb-8">
Sobre Nosotros
</h1>

<p className="text-xl max-w-3xl leading-9 text-white/70">
Aura es una atmósfera donde diseño, música
y exclusividad se mezclan.
Un espacio donde convergen diseño, atmosfera y emoción.
Un concepto que mezcla sofisticación contemporanea con una estética envolvente,
pensado para un público que valora tanto el ambiente como lo que consume.
En tres palabras:
-Envolvente
-Sofisticado
-Magnetico

</p>

<div className="mt-16 grid md:grid-cols-2 gap-8">
<img
src="/images/DSC05222.JPG"
className="rounded-3xl"
/>

<video
src="/videos/sobre.mp4"
controls
className="rounded-3xl"
/>
</div>

<a
  href="/"
  className="fixed top-28 left-8 z-50 rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-6 py-3 text-sm uppercase tracking-[0.18em] hover:border-[#f4b498] hover:text-[#f4b498] transition"
>
  ← Inicio
</a>

</div>
)
}