import Image from "next/image";
import { celula } from "./config";

const wa = `https://wa.me/${celula.whatsapp}?text=${encodeURIComponent(
  celula.mensagemWhatsapp
)}`;

function BotaoWhats({ className = "", children }) {
  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full bg-white px-7 py-3.5 text-base font-medium text-neutral-950 transition hover:bg-neutral-300 ${className}`}
    >
      {children}
    </a>
  );
}

function Titulo({ children }) {
  return (
    <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
      {children}
    </h2>
  );
}

export default function Home() {
  const { encontro, significado } = celula;

  return (
    <main className="bg-neutral-950 text-neutral-100">
      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
          {celula.igreja}
        </p>
        <h1 className="mt-6 text-7xl font-semibold tracking-tight sm:text-9xl">
          {celula.nome}
        </h1>
        <p className="mt-6 text-lg text-neutral-400 sm:text-xl">{celula.slogan}</p>
        <BotaoWhats className="mt-12">Quero participar</BotaoWhats>
      </section>

      {/* Significado */}
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <Titulo>O significado</Titulo>
        <p lang="he" dir="rtl" className="mt-8 text-7xl font-semibold sm:text-8xl">
          {significado.hebraico}
        </p>
        <p className="mt-6 text-2xl text-neutral-300 sm:text-3xl">
          Aviv, em hebraico, significa{" "}
          <span className="text-white">&ldquo;{significado.traducao}&rdquo;</span>.
        </p>
        {significado.texto && (
          <p className="mt-8 whitespace-pre-line text-lg leading-relaxed text-neutral-400">{significado.texto}</p>
        )}
      </section>

      {/* Sobre */}
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <Titulo>Quem somos</Titulo>
        <div className="mt-8 space-y-4 text-2xl leading-snug sm:text-3xl">
          {celula.sobre.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* Encontro */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <Titulo>Encontro</Titulo>
        <dl className="mt-8 divide-y divide-neutral-800 border-y border-neutral-800">
          {[
            ["Dia", encontro.dia],
            ["Horário", encontro.horario],
            ["Local", encontro.local],
          ].map(([k, v]) => (
            <div key={k} className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-8">
              <dt className="w-28 shrink-0 text-neutral-500">{k}</dt>
              <dd className="text-lg">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Galeria */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <Titulo>Momentos</Titulo>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-2">
          {celula.fotos.map((src, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl sm:aspect-square sm:rounded-lg bg-neutral-900">
              {src && (
                <Image
                  src={src}
                  alt={`Foto ${i + 1} da célula`}
                  fill
                  sizes="(min-width: 896px) 600px, 100vw"
                  quality={90}
                  className="object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 py-32 text-center">
        <p className="text-3xl font-semibold tracking-tight sm:text-5xl">
          Venha nos conhecer.
        </p>
        <BotaoWhats className="mt-10">Chamar no WhatsApp</BotaoWhats>
      </section>

      <footer className="px-6 py-8 text-center text-xs text-neutral-600">
        {celula.nome} · {celula.igreja}
      </footer>
    </main>
  );
}
