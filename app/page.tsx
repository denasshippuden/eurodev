import type { ReactNode } from "react";

const FORM_CLIENTE_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf4QXK6ICMlviQttY8FV2tW2snKZIBRRlc2xIn0EDuFA-19gg/viewform?usp=sharing&ouid=106248154664912003739";
const FORM_PRESTADOR_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfAeuXVIa1MKmtzWIv2qvDixm1EEdDDBKHTeR7MQnpAQqi_kw/viewform?usp=sharing&ouid=106248154664912003739";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Comment ça marche", href: "#comment-ca-marche" },
  { label: "Services", href: "#services" },
  { label: "Partenaires", href: "#partenaires" },
  { label: "Contact", href: "#contact" },
];

const steps = [
  {
    title: "Vous décrivez votre projet",
    text: "Remplissez le formulaire avec votre ville, le type de travaux, le délai souhaité et quelques détails.",
  },
  {
    title: "Nous analysons votre demande",
    text: "Nous vérifions les informations et recherchons un professionnel partenaire adapté.",
  },
  {
    title: "Un professionnel vous contacte",
    text: "Si une disponibilité correspond à votre besoin, un professionnel peut vous contacter pour discuter du devis.",
  },
];

const services = [
  "Plafonnage",
  "Peinture intérieure",
  "Réparation de murs",
  "Petites rénovations",
  "Finitions intérieures",
  "Nettoyage après travaux",
];

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

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-8 text-zinc-600 sm:text-lg">{text}</p>
      ) : null}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a
          href="#accueil"
          className="text-sm font-semibold tracking-tight text-zinc-950 sm:text-base"
        >
          Devis Travaux Belgique
        </a>

        <nav className="hidden items-center gap-7 text-sm text-zinc-600 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition duration-200 hover:text-zinc-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={FORM_CLIENTE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-10 items-center justify-center rounded-full border border-zinc-950 bg-zinc-950 px-5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 sm:inline-flex"
        >
          Demander un devis
        </a>
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-12 max-w-5xl lg:mt-0">
      <div className="absolute inset-0 -z-10 translate-y-8 rounded-[2rem] border border-zinc-200 bg-zinc-100" />
      <div className="overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white shadow-2xl shadow-zinc-950/10">
        <div className="flex items-center gap-2 border-b border-zinc-200 px-5 py-4">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
        </div>

        <div className="grid gap-0 lg:grid-cols-[1fr_0.85fr]">
          <div className="p-6 sm:p-8">
            <div className="mb-7 flex items-center justify-between border-b border-zinc-200 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Demande client
                </p>
                <p className="mt-2 text-xl font-semibold text-zinc-950">
                  Peinture intérieure
                </p>
              </div>
              <span className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-700">
                Bruxelles
              </span>
            </div>

            <div className="space-y-4">
              {[
                ["Type de travaux", "Murs intérieurs et finitions"],
                ["Délai souhaité", "Dans les prochaines semaines"],
                ["Statut", "Recherche partenaire disponible"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 rounded-lg border border-zinc-200 px-4 py-3 transition duration-300 hover:border-zinc-400"
                >
                  <span className="text-sm text-zinc-500">{label}</span>
                  <span className="text-right text-sm font-medium text-zinc-950">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-zinc-200 bg-zinc-950 p-6 text-white sm:p-8 lg:border-l lg:border-t-0">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Mise en relation
            </p>
            <div className="mt-8 space-y-6">
              {["Demande reçue", "Informations vérifiées", "Partenaire recherché"].map(
                (item, index) => (
                  <div key={item} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-xs">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-medium">{item}</p>
                      <div className="mt-3 h-1.5 w-full rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-white transition-all duration-700"
                          style={{ width: `${92 - index * 18}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden border-b border-zinc-200 bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-zinc-950/10" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
        <div className="animate-[fadeIn_0.8s_ease-out_both]">
          <p className="mb-5 inline-flex rounded-full border border-zinc-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
            Service de mise en relation
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
            Trouvez un professionnel pour vos travaux en Belgique
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
            Plafonnage, peinture intérieure, réparations de murs et petits travaux de
            rénovation. Décrivez votre projet en quelques minutes et nous recherchons
            un professionnel disponible dans votre région.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ExternalButton href={FORM_CLIENTE_URL}>
              Demander un devis gratuit
            </ExternalButton>
            <ExternalButton href={FORM_PRESTADOR_URL} variant="light">
              Devenir partenaire
            </ExternalButton>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-6 text-zinc-500">
            Nous mettons les demandes en relation avec des professionnels partenaires.
            Devis Travaux Belgique ne réalise pas directement les travaux.
          </p>
        </div>

        <div className="animate-[fadeIn_0.9s_ease-out_0.1s_both]">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="bg-zinc-50 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Processus" title="Comment ça marche ?" />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="group rounded-lg border border-zinc-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-xl hover:shadow-zinc-950/5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-sm font-semibold text-zinc-950 transition duration-300 group-hover:bg-zinc-950 group-hover:text-white">
                {index + 1}
              </span>
              <h3 className="mt-7 text-xl font-semibold text-zinc-950">{step.title}</h3>
              <p className="mt-4 leading-7 text-zinc-600">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Services disponibles"
          text="Des demandes orientées vers les travaux intérieurs, les finitions et les interventions après chantier."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service}
              className="flex min-h-36 items-end rounded-lg border border-zinc-200 bg-zinc-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:bg-white hover:shadow-xl hover:shadow-zinc-950/5"
            >
              <div>
                <span className="mb-5 block h-px w-10 bg-zinc-950" />
                <h3 className="text-xl font-semibold text-zinc-950">{service}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceSections() {
  return (
    <section className="bg-zinc-950 px-5 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 lg:grid-cols-2">
        <article className="bg-zinc-950 p-8 sm:p-10 lg:p-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Clients
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Vous avez des travaux à réaliser ?
          </h2>
          <p className="mt-5 leading-8 text-zinc-300">
            Remplissez notre formulaire gratuit et expliquez votre besoin. Votre
            demande pourra être transmise à un professionnel partenaire dans votre
            région.
          </p>
          <div className="mt-8">
            <ExternalButton href={FORM_CLIENTE_URL} variant="light">
              Demander un devis gratuit
            </ExternalButton>
          </div>
        </article>

        <article id="partenaires" className="bg-zinc-900 p-8 sm:p-10 lg:p-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Professionnels
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Vous êtes professionnel ?
          </h2>
          <p className="mt-5 leading-8 text-zinc-300">
            Vous êtes plafonneur, peintre ou professionnel de la rénovation en Belgique
            ? Inscrivez-vous comme partenaire pour recevoir des demandes de devis
            qualifiées selon votre zone, vos services et votre disponibilité.
          </p>
          <div className="mt-8">
            <ExternalButton href={FORM_PRESTADOR_URL} variant="light">
              Devenir partenaire
            </ExternalButton>
          </div>
        </article>
      </div>
    </section>
  );
}

function Transparency() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl border-y border-zinc-200 py-14 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
          Transparence
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          Un service simple et transparent
        </h2>
        <p className="mt-6 text-lg leading-8 text-zinc-600">
          Devis Travaux Belgique est un service de mise en relation entre particuliers
          et professionnels partenaires. Nous ne réalisons pas directement les travaux.
          Nous transmettons les demandes aux professionnels disponibles afin qu'ils
          puissent contacter les clients et proposer un devis.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-200 bg-zinc-50 px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-zinc-950">Devis Travaux Belgique</p>
          <p className="mt-2">
            Service de mise en relation pour demandes de devis en Belgique
          </p>
        </div>

        <nav className="flex gap-5">
          <a href="#contact" className="transition duration-200 hover:text-zinc-950">
            Contact
          </a>
          <a href="#confidentialite" className="transition duration-200 hover:text-zinc-950">
            Politique de confidentialité
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth bg-white text-zinc-950">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <Header />
      <Hero />
      <HowItWorks />
      <Services />
      <AudienceSections />
      <Transparency />
      <Footer />
    </main>
  );
}
