import type { ReactNode } from "react";

const FORM_CLIENTE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf4QXK6ICMlviQttY8FV2tW2snKZIBRRlc2xIn0EDuFA-19gg/viewform?usp=sharing&ouid=106248154664912003739";
const FORM_PRESTADOR_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfAeuXVIa1MKmtzWIv2qvDixm1EEdDDBKHTeR7MQnpAQqi_kw/viewform?usp=sharing&ouid=106248154664912003739";

function ExternalButton({
  href,
  children,
  variant = "dark",
}: {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light";
}) {
  const classes =
    variant === "dark"
      ? "border-black bg-black text-white hover:bg-zinc-800"
      : "border-zinc-300 bg-white text-zinc-950 hover:border-zinc-500 hover:bg-zinc-50";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-medium transition duration-300 ease-out hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 ${classes}`}
    >
      {children}
      <span className="ml-2" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <header className="border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="/" className="text-sm font-semibold tracking-tight text-zinc-950 sm:text-base">
            Devis Travaux Belgique
          </a>
          <a
            href="/"
            className="text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-950"
          >
            Accueil
          </a>
        </div>
      </header>

      <section className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-zinc-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
            Mise en relation
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
            Contact
          </h1>
          <div className="mt-8 rounded-lg border border-zinc-200 bg-zinc-50 p-7 sm:p-9">
            <p className="max-w-2xl text-lg leading-8 text-zinc-600">
              Vous avez une question concernant une demande de devis ou une inscription
              partenaire ? Vous pouvez nous contacter par e-mail.
            </p>
            <a
              href="mailto:contact@devistravauxbelgique.be"
              className="mt-6 inline-flex text-lg font-semibold text-zinc-950 transition duration-200 hover:text-zinc-600"
            >
              contact@devistravauxbelgique.be
            </a>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ExternalButton href={FORM_CLIENTE_URL}>
              Demander un devis gratuit
            </ExternalButton>
            <ExternalButton href={FORM_PRESTADOR_URL} variant="light">
              Devenir partenaire
            </ExternalButton>
          </div>
        </div>
      </section>
    </main>
  );
}
