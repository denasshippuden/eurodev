import type { ReactNode } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { content, localizedHref, resolveLocale, type Locale, type SearchParams } from "./i18n";

const FORM_CLIENTE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf4QXK6ICMlviQttY8FV2tW2snKZIBRRlc2xIn0EDuFA-19gg/viewform?usp=sharing&ouid=106248154664912003739";
const FORM_PRESTADOR_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfAeuXVIa1MKmtzWIv2qvDixm1EEdDDBKHTeR7MQnpAQqi_kw/viewform?usp=sharing&ouid=106248154664912003739";

type HomeContent = (typeof content)[Locale];

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
      {text ? <p className="mt-5 text-base leading-8 text-zinc-600 sm:text-lg">{text}</p> : null}
    </div>
  );
}

function Header({ locale, t }: { locale: Locale; t: HomeContent }) {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <a
          href={localizedHref("/", locale, "accueil")}
          className="text-sm font-semibold tracking-tight text-zinc-950 sm:text-base"
        >
          {t.brand}
        </a>

        <nav className="hidden items-center gap-7 text-sm text-zinc-600 lg:flex">
          {t.nav.map((link) => (
            <a
              key={link.href}
              href={localizedHref("/", locale, link.href)}
              className="transition duration-200 hover:text-zinc-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLocale={locale} path="/" />
          <a
            href={FORM_CLIENTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-10 items-center justify-center rounded-full border border-zinc-950 bg-zinc-950 px-5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 sm:inline-flex"
          >
            {t.cta.quote}
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroVisual({ t }: { t: HomeContent["visual"] }) {
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
                  {t.clientRequest}
                </p>
                <p className="mt-2 text-xl font-semibold text-zinc-950">{t.job}</p>
              </div>
              <span className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-700">
                {t.city}
              </span>
            </div>

            <div className="space-y-4">
              {t.fields.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 rounded-lg border border-zinc-200 px-4 py-3 transition duration-300 hover:border-zinc-400"
                >
                  <span className="text-sm text-zinc-500">{label}</span>
                  <span className="text-right text-sm font-medium text-zinc-950">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-zinc-200 bg-zinc-950 p-6 text-white sm:p-8 lg:border-l lg:border-t-0">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{t.relation}</p>
            <div className="mt-8 space-y-6">
              {t.progress.map((item, index) => (
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero({ t }: { t: HomeContent }) {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden border-b border-zinc-200 bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-zinc-950/10" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
        <div className="animate-[fadeIn_0.8s_ease-out_both]">
          <p className="mb-5 inline-flex rounded-full border border-zinc-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
            {t.hero.eyebrow}
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
            {t.hero.text}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ExternalButton href={FORM_CLIENTE_URL}>{t.cta.freeQuote}</ExternalButton>
            <ExternalButton href={FORM_PRESTADOR_URL} variant="light">
              {t.cta.partner}
            </ExternalButton>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-6 text-zinc-500">{t.hero.note}</p>
        </div>

        <div className="animate-[fadeIn_0.9s_ease-out_0.1s_both]">
          <HeroVisual t={t.visual} />
        </div>
      </div>
    </section>
  );
}

function HowItWorks({ t }: { t: HomeContent["steps"] }) {
  return (
    <section id="comment-ca-marche" className="bg-zinc-50 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {t.items.map((step, index) => (
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

function Services({ t }: { t: HomeContent["services"] }) {
  return (
    <section id="services" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} text={t.text} />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((service) => (
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

function AudienceSections({ t }: { t: HomeContent }) {
  return (
    <section className="bg-zinc-950 px-5 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 lg:grid-cols-2">
        <article className="bg-zinc-950 p-8 sm:p-10 lg:p-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            {t.audience.clients.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.audience.clients.title}
          </h2>
          <p className="mt-5 leading-8 text-zinc-300">{t.audience.clients.text}</p>
          <div className="mt-8">
            <ExternalButton href={FORM_CLIENTE_URL} variant="light">
              {t.cta.freeQuote}
            </ExternalButton>
          </div>
        </article>

        <article id="partenaires" className="bg-zinc-900 p-8 sm:p-10 lg:p-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            {t.audience.pros.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.audience.pros.title}
          </h2>
          <p className="mt-5 leading-8 text-zinc-300">{t.audience.pros.text}</p>
          <div className="mt-8">
            <ExternalButton href={FORM_PRESTADOR_URL} variant="light">
              {t.cta.partner}
            </ExternalButton>
          </div>
        </article>
      </div>
    </section>
  );
}

function Transparency({ t }: { t: HomeContent["transparency"] }) {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl border-y border-zinc-200 py-14 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
          {t.eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          {t.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-zinc-600">{t.text}</p>
      </div>
    </section>
  );
}

function Footer({ locale, t }: { locale: Locale; t: HomeContent }) {
  return (
    <footer id="contact" className="border-t border-zinc-200 bg-zinc-50 px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-zinc-950">{t.brand}</p>
          <p className="mt-2">{t.footer.text}</p>
        </div>

        <nav className="flex gap-5">
          <a
            href={localizedHref("/contact", locale)}
            className="transition duration-200 hover:text-zinc-950"
          >
            {t.footer.contact}
          </a>
          <a
            href={localizedHref("/confidentialite", locale)}
            className="transition duration-200 hover:text-zinc-950"
          >
            {t.footer.privacy}
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const locale = resolveLocale(searchParams ? await searchParams : undefined);
  const t = content[locale];

  return (
    <main lang={locale} className="min-h-screen scroll-smooth bg-white text-zinc-950">
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
      <Header locale={locale} t={t} />
      <Hero t={t} />
      <HowItWorks t={t.steps} />
      <Services t={t.services} />
      <AudienceSections t={t} />
      <Transparency t={t.transparency} />
      <Footer locale={locale} t={t} />
    </main>
  );
}
